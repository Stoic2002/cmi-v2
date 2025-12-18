import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = Router();

// Get user progress overview
router.get('/', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.id;

    // Get user with stats
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            xp: true,
            streak: true,
            currentLevel: true,
            targetLanguage: true,
        },
    });

    // Get completed lessons count
    const completedLessons = await prisma.userProgress.count({
        where: { userId, completed: true },
    });

    // Get total lessons for user's language
    const totalLessons = await prisma.lesson.count({
        where: {
            course: {
                language: user!.targetLanguage,
            },
        },
    });

    // Get quiz stats
    const quizAttempts = await prisma.quizAttempt.findMany({
        where: { userId },
    });

    const correctQuizzes = quizAttempts.filter(a => a.isCorrect).length;
    const quizAccuracy = quizAttempts.length > 0
        ? Math.round((correctQuizzes / quizAttempts.length) * 100)
        : 0;

    // Get AI conversation count
    const aiConversations = await prisma.aIConversation.count({
        where: { userId },
    });

    // Get recent activity (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentProgress = await prisma.userProgress.findMany({
        where: {
            userId,
            completedAt: { gte: sevenDaysAgo },
        },
        include: {
            lesson: {
                select: { title: true, titleId: true },
            },
        },
        orderBy: { completedAt: 'desc' },
        take: 5,
    });

    res.json({
        progress: {
            xp: user!.xp,
            streak: user!.streak,
            currentLevel: user!.currentLevel,
            completedLessons,
            totalLessons,
            lessonProgress: totalLessons > 0
                ? Math.round((completedLessons / totalLessons) * 100)
                : 0,
            quizzesTaken: quizAttempts.length,
            quizAccuracy,
            aiConversations,
        },
        recentActivity: recentProgress.map(p => ({
            lessonTitle: p.lesson.titleId || p.lesson.title,
            completedAt: p.completedAt,
            score: p.score,
        })),
    });
}));

// Get achievements
router.get('/achievements', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.id;

    // Get all achievements
    const achievements = await prisma.achievement.findMany({
        include: {
            users: {
                where: { userId },
            },
        },
    });

    const achievementsWithStatus = achievements.map(a => ({
        id: a.id,
        name: a.nameId || a.name,
        description: a.descriptionId || a.description,
        icon: a.icon,
        xpReward: a.xpReward,
        unlocked: a.users.length > 0,
        unlockedAt: a.users[0]?.unlockedAt || null,
    }));

    res.json({ achievements: achievementsWithStatus });
}));

// Get leaderboard
router.get('/leaderboard', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.id;
    const { language } = req.query;

    const whereClause = language
        ? { targetLanguage: language as string }
        : {};

    const topUsers = await prisma.user.findMany({
        where: whereClause,
        orderBy: { xp: 'desc' },
        take: 20,
        select: {
            id: true,
            name: true,
            xp: true,
            streak: true,
            currentLevel: true,
            targetLanguage: true,
        },
    });

    // Find current user's rank
    const userRank = topUsers.findIndex(u => u.id === userId) + 1;

    res.json({
        leaderboard: topUsers.map((u, index) => ({
            rank: index + 1,
            name: u.name,
            xp: u.xp,
            streak: u.streak,
            level: u.currentLevel,
            language: u.targetLanguage,
            isCurrentUser: u.id === userId,
        })),
        currentUserRank: userRank > 0 ? userRank : null,
    });
}));

export default router;
