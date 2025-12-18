import { create } from 'zustand';
import type { Quiz, QuizResult } from '../types';
import { quizzesApi } from '../services/api';

interface QuizState {
    quizzes: Quiz[];
    currentQuizIndex: number;
    results: QuizResult[];
    totalXpEarned: number;
    isLoading: boolean;
    error: string | null;

    // Actions
    fetchQuizzes: (lessonId: string) => Promise<void>;
    submitAnswer: (quizId: string, answer: string) => Promise<QuizResult>;
    nextQuiz: () => void;
    resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
    quizzes: [],
    currentQuizIndex: 0,
    results: [],
    totalXpEarned: 0,
    isLoading: false,
    error: null,

    fetchQuizzes: async (lessonId) => {
        set({ isLoading: true, error: null, currentQuizIndex: 0, results: [], totalXpEarned: 0 });
        try {
            const { data } = await quizzesApi.getLessonQuizzes(lessonId);
            set({ quizzes: data.quizzes, isLoading: false });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat quiz',
                isLoading: false
            });
        }
    },

    submitAnswer: async (quizId, answer) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await quizzesApi.submitAnswer(quizId, answer);
            const result: QuizResult = {
                isCorrect: data.isCorrect,
                correctAnswer: data.correctAnswer,
                xpEarned: data.xpEarned,
                message: data.message,
            };

            set((state) => ({
                results: [...state.results, result],
                totalXpEarned: state.totalXpEarned + result.xpEarned,
                isLoading: false,
            }));

            return result;
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal mengirim jawaban',
                isLoading: false
            });
            throw error;
        }
    },

    nextQuiz: () => {
        const { currentQuizIndex, quizzes } = get();
        if (currentQuizIndex < quizzes.length - 1) {
            set({ currentQuizIndex: currentQuizIndex + 1 });
        }
    },

    resetQuiz: () => set({
        currentQuizIndex: 0,
        results: [],
        totalXpEarned: 0,
        quizzes: [],
    }),
}));
