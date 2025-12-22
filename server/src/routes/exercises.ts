import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = Router();

// Get exercises by language and level
router.get('/', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = req.user!;
    const { type, category, limit } = req.query;

    const exercises = await prisma.exercise.findMany({
        where: {
            language: user.targetLanguage,
            isActive: true,
            ...(type && { type: String(type) }),
            ...(category && { category: String(category) }),
        },
        orderBy: [
            { level: 'asc' },
            { order: 'asc' },
        ],
        take: limit ? parseInt(String(limit)) : undefined,
        select: {
            id: true,
            type: true,
            level: true,
            category: true,
            question: true,
            hint: true,
            data: true,
            answer: true,
            explanation: true,
        },
    });

    res.json({ exercises });
}));

// Get random exercises for practice
router.get('/random', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = req.user!;
    const { count = '5', type } = req.query;

    // Get all matching exercises
    const allExercises = await prisma.exercise.findMany({
        where: {
            language: user.targetLanguage,
            isActive: true,
            ...(type && { type: String(type) }),
        },
        select: {
            id: true,
            type: true,
            level: true,
            category: true,
            question: true,
            hint: true,
            data: true,
            answer: true,
            explanation: true,
        },
    });

    // Shuffle and take requested count
    const shuffled = allExercises.sort(() => Math.random() - 0.5);
    const exercises = shuffled.slice(0, parseInt(String(count)));

    res.json({ exercises });
}));

// Get exercise types available for language
router.get('/types', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = req.user!;

    const exercises = await prisma.exercise.findMany({
        where: {
            language: user.targetLanguage,
            isActive: true,
        },
        select: {
            type: true,
        },
        distinct: ['type'],
    });

    const types = exercises.map(e => e.type);

    res.json({ types });
}));

// Get exercise categories
router.get('/categories', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = req.user!;

    const exercises = await prisma.exercise.findMany({
        where: {
            language: user.targetLanguage,
            isActive: true,
        },
        select: {
            category: true,
        },
        distinct: ['category'],
    });

    const categories = exercises.map(e => e.category);

    res.json({ categories });
}));

export default router;
