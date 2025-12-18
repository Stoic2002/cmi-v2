import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = Router();

// Get quizzes for a lesson
router.get('/lesson/:lessonId', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { lessonId } = req.params;

    const quizzes = await prisma.quiz.findMany({
        where: { lessonId },
        orderBy: { order: 'asc' },
        select: {
            id: true,
            type: true,
            question: true,
            questionId: true,
            options: true,
            order: true,
            xpReward: true,
        },
    });

    // Get user attempts
    const attempts = await prisma.quizAttempt.findMany({
        where: {
            userId: req.user!.id,
            quizId: { in: quizzes.map(q => q.id) },
        },
        orderBy: { createdAt: 'desc' },
    });

    const attemptsByQuiz: Record<string, { lastAnswer: string; isCorrect: boolean }> = {};
    for (const attempt of attempts) {
        if (!attemptsByQuiz[attempt.quizId]) {
            attemptsByQuiz[attempt.quizId] = {
                lastAnswer: attempt.answer,
                isCorrect: attempt.isCorrect,
            };
        }
    }

    const quizzesWithAttempts = quizzes.map(quiz => ({
        ...quiz,
        attempted: !!attemptsByQuiz[quiz.id],
        lastAttempt: attemptsByQuiz[quiz.id] || null,
    }));

    res.json({ quizzes: quizzesWithAttempts });
}));

// Submit quiz answer
router.post('/:id/attempt', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const { answer } = req.body;

    if (!answer) {
        res.status(400).json({ error: 'Jawaban diperlukan' });
        return;
    }

    const quiz = await prisma.quiz.findUnique({
        where: { id },
    });

    if (!quiz) {
        res.status(404).json({ error: 'Quiz tidak ditemukan' });
        return;
    }

    const isCorrect = answer.toLowerCase().trim() === quiz.answer.toLowerCase().trim();
    const xpEarned = isCorrect ? quiz.xpReward : 0;

    // Create attempt
    const attempt = await prisma.quizAttempt.create({
        data: {
            userId: req.user!.id,
            quizId: id,
            answer,
            isCorrect,
            xpEarned,
        },
    });

    // Update user XP if correct
    if (isCorrect) {
        await prisma.user.update({
            where: { id: req.user!.id },
            data: {
                xp: { increment: xpEarned },
            },
        });
    }

    res.json({
        isCorrect,
        correctAnswer: isCorrect ? null : quiz.answer,
        xpEarned,
        message: isCorrect ? 'Jawaban benar! 🎉' : 'Jawaban salah, coba lagi!',
        attempt,
    });
}));

// Get quiz stats for user
router.get('/stats', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const attempts = await prisma.quizAttempt.findMany({
        where: { userId: req.user!.id },
    });

    const totalAttempts = attempts.length;
    const correctAttempts = attempts.filter(a => a.isCorrect).length;
    const totalXpFromQuizzes = attempts.reduce((sum, a) => sum + a.xpEarned, 0);
    const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

    res.json({
        stats: {
            totalAttempts,
            correctAttempts,
            accuracy,
            totalXpFromQuizzes,
        },
    });
}));

export default router;
