import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { geminiModel, createSystemPrompt } from '../config/gemini.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { z } from 'zod';

const router = Router();

const chatSchema = z.object({
    message: z.string().min(1, 'Pesan tidak boleh kosong'),
    conversationId: z.string().optional(),
    type: z.enum(['free_chat', 'pronunciation', 'roleplay', 'grammar_drill', 'vocabulary']).default('free_chat'),
    topic: z.string().optional(),
});

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

    const { message, conversationId, type, topic } = validation.data;
    const user = req.user!;

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

    // Create system prompt based on type
    const systemPrompt = createSystemPrompt(user.targetLanguage, user.currentLevel, topic);

    let typeSpecificPrompt = '';
    switch (type) {
        case 'pronunciation':
            typeSpecificPrompt = '\n\nMode: Latihan Pengucapan. Fokus pada koreksi pengucapan dan berikan panduan IPA/romanisasi.';
            break;
        case 'roleplay':
            typeSpecificPrompt = `\n\nMode: Roleplay. Skenario: ${topic || 'Situasi kerja umum'}. Berperan sebagai lawan bicara dan bantu pengguna berlatih percakapan.`;
            break;
        case 'grammar_drill':
            typeSpecificPrompt = '\n\nMode: Latihan Grammar. Fokus pada struktur kalimat dan tata bahasa. Berikan koreksi detail.';
            break;
        case 'vocabulary':
            typeSpecificPrompt = '\n\nMode: Latihan Kosakata. Ajarkan kata-kata baru dengan konteks dan contoh penggunaan.';
            break;
    }

    // Build chat history for Gemini
    const chatHistory = messages.slice(0, -1).map(m => ({
        role: m.role === 'user' ? 'user' : 'model' as 'user' | 'model',
        parts: [{ text: m.content }],
    }));

    // Generate AI response
    const chat = geminiModel.startChat({
        history: [
            { role: 'user', parts: [{ text: 'Mulai sesi belajar.' }] },
            { role: 'model', parts: [{ text: systemPrompt + typeSpecificPrompt }] },
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

    const scenarios: Record<string, Array<{ id: string; title: string; description: string }>> = {
        en: [
            { id: 'job_interview', title: 'Job Interview', description: 'Latihan wawancara kerja dalam Bahasa Inggris' },
            { id: 'workplace', title: 'At the Workplace', description: 'Percakapan sehari-hari di tempat kerja' },
            { id: 'shopping', title: 'Shopping', description: 'Berbelanja dan bertransaksi' },
            { id: 'restaurant', title: 'At a Restaurant', description: 'Memesan makanan di restoran' },
            { id: 'emergency', title: 'Emergency Situations', description: 'Situasi darurat dan meminta bantuan' },
        ],
        ko: [
            { id: 'job_interview', title: '취업 면접', description: 'Latihan wawancara kerja dalam Bahasa Korea' },
            { id: 'workplace', title: '직장에서', description: 'Percakapan sehari-hari di tempat kerja' },
            { id: 'shopping', title: '쇼핑', description: 'Berbelanja dan bertransaksi' },
            { id: 'restaurant', title: '식당에서', description: 'Memesan makanan di restoran' },
            { id: 'dormitory', title: '기숙사', description: 'Kehidupan di asrama pekerja' },
        ],
        ja: [
            { id: 'job_interview', title: '就職面接', description: 'Latihan wawancara kerja dalam Bahasa Jepang' },
            { id: 'workplace', title: '職場で', description: 'Percakapan sehari-hari di tempat kerja' },
            { id: 'shopping', title: '買い物', description: 'Berbelanja dan bertransaksi' },
            { id: 'restaurant', title: 'レストランで', description: 'Memesan makanan di restoran' },
            { id: 'transportation', title: '交通機関', description: 'Menggunakan transportasi umum' },
        ],
    };

    res.json({
        scenarios: scenarios[user.targetLanguage] || scenarios.en
    });
}));

export default router;
