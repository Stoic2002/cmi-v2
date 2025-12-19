import { Router, Response } from 'express';
import prisma from '../config/database.js';
import { geminiModel, createSystemPrompt, getModePrompt } from '../config/gemini.js';
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

    const scenarios: Record<string, Array<{ id: string; title: string; description: string; category: string }>> = {
        en: [
            // General
            { id: 'job_interview', title: 'Job Interview', description: 'Latihan wawancara kerja dalam Bahasa Inggris', category: 'general' },
            { id: 'workplace', title: 'At the Workplace', description: 'Percakapan sehari-hari di tempat kerja', category: 'general' },
            { id: 'shopping', title: 'Shopping', description: 'Berbelanja dan bertransaksi', category: 'daily' },
            { id: 'restaurant', title: 'At a Restaurant', description: 'Memesan makanan di restoran', category: 'daily' },
            { id: 'emergency', title: 'Emergency Situations', description: 'Situasi darurat dan meminta bantuan', category: 'safety' },
            // Work-specific
            { id: 'factory_instructions', title: 'Factory Instructions', description: 'Menerima instruksi di pabrik', category: 'factory' },
            { id: 'reporting_problems', title: 'Reporting Problems', description: 'Melaporkan masalah kepada supervisor', category: 'work' },
            { id: 'asking_leave', title: 'Asking for Leave', description: 'Meminta izin tidak masuk kerja', category: 'work' },
            { id: 'safety_briefing', title: 'Safety Briefing', description: 'Diskusi tentang keselamatan kerja (K3)', category: 'safety' },
            { id: 'coworker_chat', title: 'Chatting with Coworkers', description: 'Ngobrol santai dengan rekan kerja', category: 'social' },
            // Daily Life
            { id: 'doctor_visit', title: 'Visiting a Doctor', description: 'Pergi ke dokter dan menjelaskan gejala', category: 'health' },
            { id: 'bank_account', title: 'Opening a Bank Account', description: 'Membuka rekening bank', category: 'admin' },
            { id: 'renting_apartment', title: 'Renting an Apartment', description: 'Mencari dan menyewa tempat tinggal', category: 'housing' },
            { id: 'public_transport', title: 'Using Public Transport', description: 'Menggunakan bus, kereta, atau taksi', category: 'transport' },
            { id: 'phone_call', title: 'Making Phone Calls', description: 'Menelepon kantor atau layanan', category: 'communication' },
        ],
        ko: [
            // General
            { id: 'job_interview', title: '취업 면접', description: 'Latihan wawancara kerja dalam Bahasa Korea', category: 'general' },
            { id: 'workplace', title: '직장에서', description: 'Percakapan sehari-hari di tempat kerja', category: 'general' },
            { id: 'shopping', title: '쇼핑', description: 'Berbelanja dan bertransaksi', category: 'daily' },
            { id: 'restaurant', title: '식당에서', description: 'Memesan makanan di restoran', category: 'daily' },
            { id: 'dormitory', title: '기숙사', description: 'Kehidupan di asrama pekerja', category: 'housing' },
            // Work-specific
            { id: 'factory_instructions', title: '공장 지시', description: 'Menerima instruksi di pabrik', category: 'factory' },
            { id: 'reporting_problems', title: '문제 보고', description: 'Melaporkan masalah kepada supervisor', category: 'work' },
            { id: 'asking_leave', title: '휴가 신청', description: 'Meminta izin tidak masuk kerja', category: 'work' },
            { id: 'safety_training', title: '안전 교육', description: 'Pelatihan keselamatan kerja', category: 'safety' },
            { id: 'overtime', title: '야근', description: 'Diskusi tentang lembur', category: 'work' },
            // Daily Life
            { id: 'hospital', title: '병원', description: 'Pergi ke rumah sakit', category: 'health' },
            { id: 'immigration', title: '출입국관리사무소', description: 'Mengurus visa di imigrasi', category: 'admin' },
            { id: 'convenience_store', title: '편의점', description: 'Berbelanja di minimarket', category: 'daily' },
            { id: 'subway', title: '지하철', description: 'Menggunakan subway', category: 'transport' },
            { id: 'phone_contract', title: '휴대폰 계약', description: 'Membuat kontrak HP', category: 'admin' },
        ],
        ja: [
            // General
            { id: 'job_interview', title: '就職面接', description: 'Latihan wawancara kerja dalam Bahasa Jepang', category: 'general' },
            { id: 'workplace', title: '職場で', description: 'Percakapan sehari-hari di tempat kerja', category: 'general' },
            { id: 'shopping', title: '買い物', description: 'Berbelanja dan bertransaksi', category: 'daily' },
            { id: 'restaurant', title: 'レストランで', description: 'Memesan makanan di restoran', category: 'daily' },
            { id: 'transportation', title: '交通機関', description: 'Menggunakan transportasi umum', category: 'transport' },
            // Work-specific - Factory
            { id: 'factory_morning', title: '朝礼', description: 'Rapat pagi di pabrik (chorei)', category: 'factory' },
            { id: 'machine_operation', title: '機械操作', description: 'Mengoperasikan mesin', category: 'factory' },
            { id: 'quality_check', title: '品質検査', description: 'Pemeriksaan kualitas produk', category: 'factory' },
            { id: 'reporting_supervisor', title: '上司への報告', description: 'Melaporkan ke supervisor', category: 'work' },
            { id: 'asking_overtime', title: '残業について', description: 'Diskusi tentang lembur', category: 'work' },
            // Daily Life
            { id: 'clinic', title: '病院・クリニック', description: 'Pergi ke klinik/rumah sakit', category: 'health' },
            { id: 'city_hall', title: '市役所', description: 'Mengurus dokumen di kantor kota', category: 'admin' },
            { id: 'supermarket', title: 'スーパー', description: 'Berbelanja di supermarket', category: 'daily' },
            { id: 'apartment_rules', title: 'アパートのルール', description: 'Aturan tinggal di apartemen', category: 'housing' },
            { id: 'emergency_call', title: '緊急電話 (110/119)', description: 'Menelepon darurat (polisi/ambulans)', category: 'safety' },
        ],
    };

    res.json({
        scenarios: scenarios[user.targetLanguage] || scenarios.en
    });
}));

export default router;
