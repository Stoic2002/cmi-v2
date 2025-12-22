import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../config/database.js';

export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
        name: string;
        targetLanguage: string;
        currentLevel: string;
        goal: string | null;
    };
}

export const authMiddleware = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ error: 'Token tidak ditemukan' });
            return;
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { userId: string };

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                email: true,
                name: true,
                targetLanguage: true,
                currentLevel: true,
                goal: true,
            },
        });

        if (!user) {
            res.status(401).json({ error: 'User tidak ditemukan' });
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token tidak valid' });
        return;
    }
};

export const optionalAuth = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { userId: string };

            const user = await prisma.user.findUnique({
                where: { id: decoded.userId },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    targetLanguage: true,
                    currentLevel: true,
                    goal: true,
                },
            });

            if (user) {
                req.user = user;
            }
        }
        next();
    } catch {
        next();
    }
};
