import { create } from 'zustand';
import type { Course, Lesson, LessonDetail, Quiz } from '../types';
import { coursesApi, lessonsApi } from '../services/api';

interface CourseState {
    courses: Course[];
    currentCourse: Course | null;
    lessons: Lesson[];
    currentLesson: LessonDetail | null;
    quizzes: Quiz[];
    isLoading: boolean;
    error: string | null;

    // Actions
    fetchCourses: (language?: string) => Promise<void>;
    fetchCourse: (id: string) => Promise<void>;
    fetchLesson: (id: string) => Promise<void>;
    completeLesson: (id: string, score?: number) => Promise<void>;
    clearCurrentLesson: () => void;
}

export const useCourseStore = create<CourseState>((set) => ({
    courses: [],
    currentCourse: null,
    lessons: [],
    currentLesson: null,
    quizzes: [],
    isLoading: false,
    error: null,

    fetchCourses: async (language) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await coursesApi.getCourses(language);
            set({ courses: data.courses, isLoading: false });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat kursus',
                isLoading: false
            });
        }
    },

    fetchCourse: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await coursesApi.getCourse(id);
            set({
                currentCourse: data.course,
                lessons: data.lessons,
                isLoading: false
            });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat kursus',
                isLoading: false
            });
        }
    },

    fetchLesson: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await lessonsApi.getLesson(id);
            set({
                currentLesson: data.lesson,
                quizzes: data.quizzes,
                isLoading: false
            });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat pelajaran',
                isLoading: false
            });
        }
    },

    completeLesson: async (id, score) => {
        try {
            await lessonsApi.completeLesson(id, score);
            set((state) => ({
                currentLesson: state.currentLesson
                    ? { ...state.currentLesson, completed: true, score: score || 100 }
                    : null,
            }));
        } catch (error: any) {
            set({ error: error.response?.data?.error || 'Gagal menyelesaikan pelajaran' });
        }
    },

    clearCurrentLesson: () => set({ currentLesson: null, quizzes: [] }),
}));
