import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { geminiModel, createSystemPrompt, getModePrompt, UserProgressContext } from '../config/gemini.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { z } from 'zod';

const router = Router();

const chatSchema = z.object({
    message: z.string().min(1, 'Pesan tidak boleh kosong'),
    conversationId: z.string().optional(),
    type: z.enum(['free_chat', 'pronunciation', 'roleplay', 'grammar_drill', 'vocabulary']).default('free_chat'),
    topic: z.string().optional(),
    industry: z.string().optional(), // factory, agriculture, healthcare, construction, service
});

// Helper: Get user progress context
const getUserProgressContext = async (userId: string): Promise<UserProgressContext> => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { xp: true, streak: true }
    });

    const lessonsCompleted = await prisma.userProgress.count({
        where: { userId, completed: true }
    });

    // Get current course (most recent uncompleted)
    const currentProgress = await prisma.userProgress.findFirst({
        where: { userId, completed: false },
        include: { lesson: { include: { course: true } } },
        orderBy: { updatedAt: 'desc' }
    });

    return {
        xp: user?.xp || 0,
        streak: user?.streak || 0,
        lessonsCompleted,
        currentCourse: currentProgress?.lesson?.course?.title,
    };
};

// Chat with AI Tutor
router.post('/chat', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const validation = chatSchema.safeParse(req.body);

    if (!validation.success) {
        res.status(400).json({
            error: 'Data tidak valid',
            errors: validation.error.errors.map(e => e.message)
        });
        return;
    }

    const { message, conversationId, type, topic, industry } = validation.data;
    const user = req.user!;

    // Get user progress for personalized prompts
    const userProgress = await getUserProgressContext(user.id);

    let conversation;
    let messages: Array<{ role: string; content: string; timestamp: string }> = [];

    // Get or create conversation
    if (conversationId) {
        conversation = await prisma.aIConversation.findUnique({
            where: { id: conversationId, userId: user.id },
        });

        if (conversation) {
            messages = conversation.messages as typeof messages;
        }
    }

    // Add user message
    messages.push({
        role: 'user',
        content: message,
        timestamp: new Date().toISOString(),
    });

    // Create system prompt based on type, with user progress and industry
    const systemPrompt = createSystemPrompt(
        user.targetLanguage,
        user.currentLevel,
        topic,
        userProgress,
        industry
    );

    // Get mode-specific prompt enhancement
    const modePrompt = getModePrompt(type, topic);

    // Build chat history for Gemini
    const chatHistory = messages.slice(0, -1).map(m => ({
        role: m.role === 'user' ? 'user' : 'model' as 'user' | 'model',
        parts: [{ text: m.content }],
    }));

    // Generate AI response
    const chat = geminiModel.startChat({
        history: [
            { role: 'user', parts: [{ text: 'Mulai sesi belajar.' }] },
            { role: 'model', parts: [{ text: systemPrompt + '\n\n' + modePrompt }] },
            ...chatHistory,
        ],
    });

    const result = await chat.sendMessage(message);
    const aiResponse = result.response.text();

    // Add AI response to messages
    messages.push({
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date().toISOString(),
    });

    // Calculate XP (small amount per interaction)
    const xpEarned = 2;

    // Save or update conversation
    if (conversation) {
        await prisma.aIConversation.update({
            where: { id: conversation.id },
            data: {
                messages,
                xpEarned: { increment: xpEarned },
            },
        });
    } else {
        conversation = await prisma.aIConversation.create({
            data: {
                userId: user.id,
                type,
                topic,
                messages,
                xpEarned,
            },
        });
    }

    // Update user XP
    await prisma.user.update({
        where: { id: user.id },
        data: {
            xp: { increment: xpEarned },
        },
    });

    res.json({
        conversationId: conversation.id,
        message: aiResponse,
        xpEarned,
    });
}));

// Get conversation history
router.get('/conversations', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const conversations = await prisma.aIConversation.findMany({
        where: { userId: req.user!.id },
        orderBy: { updatedAt: 'desc' },
        take: 20,
        select: {
            id: true,
            type: true,
            topic: true,
            xpEarned: true,
            createdAt: true,
            updatedAt: true,
        },
    });

    res.json({ conversations });
}));

// Get single conversation
router.get('/conversations/:id', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const conversation = await prisma.aIConversation.findUnique({
        where: { id, userId: req.user!.id },
    });

    if (!conversation) {
        res.status(404).json({ error: 'Percakapan tidak ditemukan' });
        return;
    }

    res.json({ conversation });
}));

// Get roleplay scenarios
router.get('/scenarios', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = req.user!;

    const scenarios = await prisma.scenario.findMany({
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

    res.json({ scenarios });
}));

export default router;

