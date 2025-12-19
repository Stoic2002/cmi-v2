import axios from 'axios';
import { API_URL, STORAGE_KEYS } from '../utils/constants';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor - handle errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem(STORAGE_KEYS.TOKEN);
            localStorage.removeItem(STORAGE_KEYS.USER);
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;

// Auth API
export const authApi = {
    register: (data: { email: string; password: string; name: string; targetLanguage?: string }) =>
        api.post('/auth/register', data),
    login: (data: { email: string; password: string }) =>
        api.post('/auth/login', data),
    getMe: () => api.get('/auth/me'),
    updateProfile: (data: { name?: string; targetLanguage?: string; level?: string }) =>
        api.patch('/auth/profile', data),
};

// Courses API
export const coursesApi = {
    getCourses: (language?: string) =>
        api.get('/courses', { params: { language } }),
    getCourse: (id: string) =>
        api.get(`/courses/${id}`),
};

// Lessons API
export const lessonsApi = {
    getLesson: (id: string) =>
        api.get(`/lessons/${id}`),
    completeLesson: (id: string, score?: number) =>
        api.post(`/lessons/${id}/complete`, { score }),
    getNextLesson: (id: string) =>
        api.get(`/lessons/${id}/next`),
};

// Quizzes API
export const quizzesApi = {
    getLessonQuizzes: (lessonId: string) =>
        api.get(`/quizzes/lesson/${lessonId}`),
    submitAnswer: (quizId: string, answer: string) =>
        api.post(`/quizzes/${quizId}/attempt`, { answer }),
    getStats: () =>
        api.get('/quizzes/stats'),
};

// AI Tutor API
export const aiTutorApi = {
    chat: (data: { message: string; conversationId?: string; type?: string; topic?: string }) =>
        api.post('/ai-tutor/chat', data),
    getConversations: () =>
        api.get('/ai-tutor/conversations'),
    getConversation: (id: string) =>
        api.get(`/ai-tutor/conversations/${id}`),
    getScenarios: () =>
        api.get('/ai-tutor/scenarios'),
};

// Progress API
export const progressApi = {
    getProgress: () =>
        api.get('/progress'),
    getAchievements: () =>
        api.get('/progress/achievements'),
    getLeaderboard: (language?: string) =>
        api.get('/progress/leaderboard', { params: { language } }),
};
