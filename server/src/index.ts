import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import prisma from './config/database.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

import authRoutes from './routes/auth.js';
import coursesRoutes from './routes/courses.js';
import lessonsRoutes from './routes/lessons.js';
import quizzesRoutes from './routes/quizzes.js';
import aiTutorRoutes from './routes/ai-tutor.js';
import guidedLessonRoutes from './routes/guided-lesson.js';
import progressRoutes from './routes/progress.js';
import exercisesRoutes from './routes/exercises.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? 'https://your-domain.com'
        : 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'CMI Language Learning API',
        timestamp: new Date().toISOString(),
    });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/lessons', lessonsRoutes);
app.use('/api/quizzes', quizzesRoutes);
app.use('/api/ai-tutor', aiTutorRoutes);
app.use('/api/guided-lesson', guidedLessonRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/exercises', exercisesRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
const startServer = async () => {
    try {
        // Test database connection
        await prisma.$connect();
        console.log('✓ Database connected');

        app.listen(PORT, () => {
            console.log(`
╔═══════════════════════════════════════════╗
║   CMI Language Learning API               ║
║   Server running on port ${PORT}            ║
║   http://localhost:${PORT}/api/health       ║
╚═══════════════════════════════════════════╝
      `);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\nShutting down gracefully...');
    await prisma.$disconnect();
    process.exit(0);
});

startServer();
