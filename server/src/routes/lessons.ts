import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = Router();

// Get lesson detail
router.get('/:id', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const lesson = await prisma.lesson.findUnique({
        where: { id },
        include: {
            course: {
                select: {
                    id: true,
                    title: true,
                    titleId: true,
                    language: true,
                    level: true,
                },
            },
            quizzes: {
                orderBy: { order: 'asc' },
            },
        },
    });

    if (!lesson) {
        res.status(404).json({ error: 'Pelajaran tidak ditemukan' });
        return;
    }

    // Get user progress
    const progress = await prisma.userProgress.findUnique({
        where: {
            userId_lessonId: {
                userId: req.user!.id,
                lessonId: id,
            },
        },
    });

    res.json({
        lesson: {
            id: lesson.id,
            title: lesson.title,
            titleId: lesson.titleId,
            content: lesson.content,
            order: lesson.order,
            xpReward: lesson.xpReward,
            course: lesson.course,
            completed: progress?.completed || false,
            score: progress?.score || 0,
        },
        quizzes: lesson.quizzes.map(q => ({
            id: q.id,
            type: q.type,
            question: q.question,
            questionId: q.questionId,
            options: q.options,
            order: q.order,
            xpReward: q.xpReward,
        })),
    });
}));

// Complete lesson
router.post('/:id/complete', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const { score } = req.body;

    const lesson = await prisma.lesson.findUnique({
        where: { id },
    });

    if (!lesson) {
        res.status(404).json({ error: 'Pelajaran tidak ditemukan' });
        return;
    }

    // Upsert progress
    const progress = await prisma.userProgress.upsert({
        where: {
            userId_lessonId: {
                userId: req.user!.id,
                lessonId: id,
            },
        },
        update: {
            completed: true,
            score: score || 100,
            completedAt: new Date(),
        },
        create: {
            userId: req.user!.id,
            lessonId: id,
            completed: true,
            score: score || 100,
            completedAt: new Date(),
        },
    });

    // Award XP if first time completing
    if (progress) {
        await prisma.user.update({
            where: { id: req.user!.id },
            data: {
                xp: { increment: lesson.xpReward },
            },
        });
    }

    res.json({
        message: 'Pelajaran selesai!',
        xpEarned: lesson.xpReward,
        progress,
    });
}));

// Get next lesson in course
router.get('/:id/next', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const currentLesson = await prisma.lesson.findUnique({
        where: { id },
        select: { courseId: true, order: true },
    });

    if (!currentLesson) {
        res.status(404).json({ error: 'Pelajaran tidak ditemukan' });
        return;
    }

    const nextLesson = await prisma.lesson.findFirst({
        where: {
            courseId: currentLesson.courseId,
            order: { gt: currentLesson.order },
        },
        orderBy: { order: 'asc' },
        select: {
            id: true,
            title: true,
            titleId: true,
            order: true,
        },
    });

    res.json({ nextLesson });
}));

export default router;
