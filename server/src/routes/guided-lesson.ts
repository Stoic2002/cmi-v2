import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { geminiModel, createGuidedLessonPrompt, parseGuidedResponse } from '../config/gemini.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { z } from 'zod';

const router = Router();

// Session expiry time (24 hours)
const SESSION_EXPIRY_HOURS = 24;

const startSessionSchema = z.object({
    lessonId: z.string().optional(),
    topic: z.string().optional(),
    mode: z.enum(['learn', 'practice', 'quiz']).default('learn'),
});

const respondSchema = z.object({
    sessionId: z.string(),
    userResponse: z.string(),
});

// Helper: Create expiry date
const getExpiryDate = () => {
    const date = new Date();
    date.setHours(date.getHours() + SESSION_EXPIRY_HOURS);
    return date;
};

// Helper: Clean up expired sessions (runs periodically)
const cleanupExpiredSessions = async () => {
    try {
        await prisma.guidedSession.deleteMany({
            where: {
                expiresAt: { lt: new Date() }
            }
        });
    } catch (error) {
        console.error('Failed to cleanup expired sessions:', error);
    }
};

// Run cleanup every hour
setInterval(cleanupExpiredSessions, 60 * 60 * 1000);

// Start a guided lesson session
router.post('/start', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const validation = startSessionSchema.safeParse(req.body);

    if (!validation.success) {
        res.status(400).json({
            error: 'Data tidak valid',
            errors: validation.error.errors.map(e => e.message)
        });
        return;
    }

    const { lessonId, topic, mode } = validation.data;
    const user = req.user!;

    // Get lesson content if lessonId provided
    let lessonContext = '';
    let lessonTitle = topic || 'Sesi Belajar';

    if (lessonId) {
        const lesson = await prisma.lesson.findUnique({
            where: { id: lessonId },
            include: { course: true }
        });

        if (lesson) {
            lessonTitle = lesson.titleId;
            lessonContext = JSON.stringify(lesson.content);
        }
    }

    const totalSteps = mode === 'quiz' ? 5 : mode === 'practice' ? 4 : 6;

    // Create session in database
    const session = await prisma.guidedSession.create({
        data: {
            userId: user.id,
            lessonId,
            topic: lessonTitle,
            mode,
            currentStep: 1,
            totalSteps,
            context: lessonContext,
            history: [],
            expiresAt: getExpiryDate(),
        }
    });

    // Create initial prompt
    const systemPrompt = createGuidedLessonPrompt(
        user.targetLanguage,
        user.currentLevel,
        user.goal || 'work',
        mode,
        lessonTitle,
        lessonContext
    );

    // Generate AI's opening message
    const chat = geminiModel.startChat({
        history: [
            { role: 'user', parts: [{ text: 'Mulai sesi belajar.' }] },
            { role: 'model', parts: [{ text: systemPrompt }] },
        ],
    });

    const openingPrompt = mode === 'learn'
        ? `Mulai sesi belajar dengan perkenalan dan penjelasan singkat tentang apa yang akan dipelajari. Ingat untuk memulai sebagai guru yang ramah.`
        : mode === 'practice'
            ? `Mulai sesi latihan. Berikan satu latihan sederhana untuk pemanasan.`
            : `Mulai quiz dengan 5 pertanyaan. Mulai dengan pertanyaan pertama.`;

    const result = await chat.sendMessage(openingPrompt);
    const aiResponse = result.response.text();

    // Parse structured response
    const parsed = parseGuidedResponse(aiResponse);

    // Save to history in database
    const history = [
        { role: 'system', content: openingPrompt },
        { role: 'assistant', content: aiResponse }
    ];

    await prisma.guidedSession.update({
        where: { id: session.id },
        data: { history }
    });

    // Award XP for starting
    const xpEarned = 2;
    await prisma.user.update({
        where: { id: user.id },
        data: { xp: { increment: xpEarned } }
    });

    res.json({
        sessionId: session.id,
        step: 1,
        totalSteps,
        topic: lessonTitle,
        mode,
        message: parsed.message,
        interactiveElement: parsed.interactiveElement,
        xpEarned,
    });
}));

// Respond to guided lesson
router.post('/respond', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const validation = respondSchema.safeParse(req.body);

    if (!validation.success) {
        res.status(400).json({
            error: 'Data tidak valid',
            errors: validation.error.errors.map(e => e.message)
        });
        return;
    }

    const { sessionId, userResponse } = validation.data;
    const user = req.user!;

    // Get session from database
    const session = await prisma.guidedSession.findUnique({
        where: { id: sessionId }
    });

    if (!session || session.userId !== user.id) {
        res.status(404).json({ error: 'Sesi tidak ditemukan' });
        return;
    }

    // Check if session expired
    if (session.expiresAt < new Date()) {
        await prisma.guidedSession.delete({ where: { id: sessionId } });
        res.status(410).json({ error: 'Sesi telah kadaluarsa' });
        return;
    }

    const history = session.history as Array<{ role: string; content: string }>;

    // Build chat history for Gemini
    const chatHistory = history.filter(m => m.role !== 'system').map(m => ({
        role: m.role === 'user' ? 'user' : 'model' as 'user' | 'model',
        parts: [{ text: m.content }],
    }));

    // Continue conversation
    const systemPrompt = createGuidedLessonPrompt(
        user.targetLanguage,
        user.currentLevel,
        user.goal || 'work',
        session.mode as 'learn' | 'practice' | 'quiz',
        session.topic || 'Sesi Belajar',
        session.context || ''
    );

    const chat = geminiModel.startChat({
        history: [
            { role: 'user', parts: [{ text: 'Mulai sesi belajar.' }] },
            { role: 'model', parts: [{ text: systemPrompt }] },
            ...chatHistory,
        ],
    });

    // Add step progress instruction
    const stepInstruction = session.currentStep < session.totalSteps
        ? `User menjawab: \"${userResponse}\". Berikan feedback, lalu lanjut ke materi/latihan berikutnya. Ini step ${session.currentStep}/${session.totalSteps}.`
        : `User menjawab: \"${userResponse}\". Berikan feedback dan ringkasan pembelajaran. Ini step terakhir.`;

    const result = await chat.sendMessage(stepInstruction);
    const aiResponse = result.response.text();
    const parsed = parseGuidedResponse(aiResponse);

    // Update history
    const updatedHistory = [
        ...history,
        { role: 'user', content: userResponse },
        { role: 'assistant', content: aiResponse }
    ];

    const newStep = session.currentStep + 1;
    const isComplete = newStep > session.totalSteps;

    // Award XP
    const xpEarned = isComplete ? 10 : 3;
    await prisma.user.update({
        where: { id: user.id },
        data: { xp: { increment: xpEarned } }
    });

    if (isComplete) {
        // Delete session
        await prisma.guidedSession.delete({ where: { id: sessionId } });

        // Complete the lesson if lessonId exists
        if (session.lessonId) {
            await prisma.userProgress.upsert({
                where: {
                    userId_lessonId: {
                        userId: user.id,
                        lessonId: session.lessonId
                    }
                },
                update: {
                    completed: true,
                    completedAt: new Date()
                },
                create: {
                    userId: user.id,
                    lessonId: session.lessonId,
                    completed: true,
                    completedAt: new Date()
                }
            });
        }
    } else {
        // Update session
        await prisma.guidedSession.update({
            where: { id: sessionId },
            data: {
                history: updatedHistory,
                currentStep: newStep,
                expiresAt: getExpiryDate(), // Extend expiry on activity
            }
        });
    }

    res.json({
        sessionId: isComplete ? null : sessionId,
        step: newStep,
        totalSteps: session.totalSteps,
        message: parsed.message,
        interactiveElement: parsed.interactiveElement,
        feedback: parsed.feedback,
        isComplete,
        xpEarned,
    });
}));

// Get available topics for guided lessons
router.get('/topics', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = req.user!;

    const topics = await prisma.topic.findMany({
        where: {
            language: user.targetLanguage,
            isActive: true,
        },
        orderBy: { order: 'asc' },
        select: {
            id: true,
            slug: true,
            title: true,
            titleId: true,
            description: true,
            category: true,
        },
    });

    res.json({ topics });
}));

// Get active session (resume if exists)
router.get('/session', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = req.user!;

    // Find active (non-expired) session for user
    const session = await prisma.guidedSession.findFirst({
        where: {
            userId: user.id,
            expiresAt: { gt: new Date() }
        },
        orderBy: { createdAt: 'desc' }
    });

    if (!session) {
        res.json({ session: null });
        return;
    }

    res.json({
        session: {
            id: session.id,
            topic: session.topic,
            mode: session.mode,
            currentStep: session.currentStep,
            totalSteps: session.totalSteps,
            createdAt: session.createdAt,
        }
    });
}));

// Cancel/delete a session
router.delete('/session/:id', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const user = req.user!;

    const session = await prisma.guidedSession.findUnique({
        where: { id }
    });

    if (!session || session.userId !== user.id) {
        res.status(404).json({ error: 'Sesi tidak ditemukan' });
        return;
    }

    await prisma.guidedSession.delete({ where: { id } });

    res.json({ success: true });
}));

export default router;

