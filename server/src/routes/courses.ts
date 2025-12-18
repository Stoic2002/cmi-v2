import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { authMiddleware, AuthRequest, optionalAuth } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = Router();

// Get courses by language
router.get('/', optionalAuth, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { language } = req.query;

    // Use user's target language if authenticated, else require language param
    const targetLanguage = language as string || req.user?.targetLanguage;

    if (!targetLanguage) {
        res.status(400).json({ error: 'Parameter bahasa diperlukan' });
        return;
    }

    const courses = await prisma.course.findMany({
        where: { language: targetLanguage },
        orderBy: { order: 'asc' },
        include: {
            lessons: {
                select: { id: true },
            },
        },
    });

    // Get user progress if authenticated
    let userProgress: Record<string, number> = {};
    if (req.user) {
        const progress = await prisma.userProgress.findMany({
            where: {
                userId: req.user.id,
                completed: true,
            },
            include: {
                lesson: {
                    select: { courseId: true },
                },
            },
        });

        // Count completed lessons per course
        for (const p of progress) {
            const courseId = p.lesson.courseId;
            userProgress[courseId] = (userProgress[courseId] || 0) + 1;
        }
    }

    const coursesWithProgress = courses.map(course => ({
        id: course.id,
        language: course.language,
        level: course.level,
        title: course.title,
        titleId: course.titleId,
        description: course.description,
        descriptionId: course.descriptionId,
        order: course.order,
        totalLessons: course.lessons.length,
        completedLessons: userProgress[course.id] || 0,
    }));

    res.json({ courses: coursesWithProgress });
}));

// Get single course with lessons
router.get('/:id', optionalAuth, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
        where: { id },
        include: {
            lessons: {
                orderBy: { order: 'asc' },
                include: {
                    quizzes: {
                        select: { id: true },
                    },
                },
            },
        },
    });

    if (!course) {
        res.status(404).json({ error: 'Kursus tidak ditemukan' });
        return;
    }

    // Get user progress if authenticated
    let lessonProgress: Record<string, boolean> = {};
    if (req.user) {
        const progress = await prisma.userProgress.findMany({
            where: {
                userId: req.user.id,
                lessonId: { in: course.lessons.map(l => l.id) },
            },
        });

        for (const p of progress) {
            lessonProgress[p.lessonId] = p.completed;
        }
    }

    const lessonsWithProgress = course.lessons.map(lesson => ({
        id: lesson.id,
        title: lesson.title,
        titleId: lesson.titleId,
        order: lesson.order,
        xpReward: lesson.xpReward,
        quizCount: lesson.quizzes.length,
        completed: lessonProgress[lesson.id] || false,
    }));

    res.json({
        course: {
            id: course.id,
            language: course.language,
            level: course.level,
            title: course.title,
            titleId: course.titleId,
            description: course.description,
            descriptionId: course.descriptionId,
            order: course.order,
        },
        lessons: lessonsWithProgress,
    });
}));

export default router;
