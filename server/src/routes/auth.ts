import { Router, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/database.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { z } from 'zod';

const router = Router();

const registerSchema = z.object({
    email: z.string().email('Email tidak valid'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
    name: z.string().min(2, 'Nama minimal 2 karakter'),
    // targetLanguage is now optional - will be set during onboarding
    targetLanguage: z.enum(['en', 'ko', 'ja']).optional().default('ja'),
});

const loginSchema = z.object({
    email: z.string().email('Email tidak valid'),
    password: z.string().min(1, 'Password harus diisi'),
});

// Register
router.post('/register', asyncHandler(async (req: AuthRequest, res: Response) => {
    const validation = registerSchema.safeParse(req.body);

    if (!validation.success) {
        res.status(400).json({
            error: 'Data tidak valid',
            errors: validation.error.errors.map(e => e.message)
        });
        return;
    }

    const { email, password, name, targetLanguage } = validation.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        res.status(400).json({ error: 'Email sudah terdaftar' });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            targetLanguage,
        },
        select: {
            id: true,
            email: true,
            name: true,
            targetLanguage: true,
            currentLevel: true,
            xp: true,
            streak: true,
        },
    });

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '7d' }
    );

    res.status(201).json({
        message: 'Registrasi berhasil',
        user,
        token,
    });
}));

// Login
router.post('/login', asyncHandler(async (req: AuthRequest, res: Response) => {
    const validation = loginSchema.safeParse(req.body);

    if (!validation.success) {
        res.status(400).json({
            error: 'Data tidak valid',
            errors: validation.error.errors.map(e => e.message)
        });
        return;
    }

    const { email, password } = validation.data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        res.status(401).json({ error: 'Email atau password salah' });
        return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        res.status(401).json({ error: 'Email atau password salah' });
        return;
    }

    // Update streak
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let newStreak = user.streak;
    if (user.lastActiveDate) {
        const lastActive = new Date(user.lastActiveDate);
        lastActive.setHours(0, 0, 0, 0);

        const diffDays = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            newStreak = user.streak + 1;
        } else if (diffDays > 1) {
            newStreak = 1;
        }
    } else {
        newStreak = 1;
    }

    await prisma.user.update({
        where: { id: user.id },
        data: {
            lastActiveDate: new Date(),
            streak: newStreak,
        },
    });

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '7d' }
    );

    res.json({
        message: 'Login berhasil',
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            targetLanguage: user.targetLanguage,
            currentLevel: user.currentLevel,
            xp: user.xp,
            streak: newStreak,
        },
        token,
    });
}));

// Get current user
router.get('/me', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = await prisma.user.findUnique({
        where: { id: req.user!.id },
        select: {
            id: true,
            email: true,
            name: true,
            targetLanguage: true,
            currentLevel: true,
            xp: true,
            streak: true,
            lastActiveDate: true,
            createdAt: true,
        },
    });

    res.json({ user });
}));

// Update profile
router.patch('/profile', authMiddleware, asyncHandler(async (req: AuthRequest, res: Response) => {
    const { name, targetLanguage, level } = req.body;

    const updateData: Record<string, unknown> = {};
    if (name) updateData.name = name;
    if (targetLanguage && ['en', 'ko', 'ja'].includes(targetLanguage)) {
        updateData.targetLanguage = targetLanguage;
    }
    if (level && ['beginner', 'elementary', 'intermediate', 'advanced'].includes(level)) {
        updateData.currentLevel = level;
    }

    const user = await prisma.user.update({
        where: { id: req.user!.id },
        data: updateData,
        select: {
            id: true,
            email: true,
            name: true,
            targetLanguage: true,
            currentLevel: true,
            xp: true,
            streak: true,
        },
    });

    res.json({ message: 'Profil berhasil diperbarui', user });
}));

export default router;
