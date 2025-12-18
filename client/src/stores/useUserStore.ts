import { create } from 'zustand';
import type { Progress, Achievement, LeaderboardEntry } from '../types';
import { progressApi } from '../services/api';

interface UserState {
    progress: Progress | null;
    achievements: Achievement[];
    leaderboard: LeaderboardEntry[];
    currentUserRank: number | null;
    isLoading: boolean;
    error: string | null;

    // Actions
    fetchProgress: () => Promise<void>;
    fetchAchievements: () => Promise<void>;
    fetchLeaderboard: (language?: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
    progress: null,
    achievements: [],
    leaderboard: [],
    currentUserRank: null,
    isLoading: false,
    error: null,

    fetchProgress: async () => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await progressApi.getProgress();
            set({ progress: data.progress, isLoading: false });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat progress',
                isLoading: false,
            });
        }
    },

    fetchAchievements: async () => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await progressApi.getAchievements();
            set({ achievements: data.achievements, isLoading: false });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat achievements',
                isLoading: false,
            });
        }
    },

    fetchLeaderboard: async (language) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await progressApi.getLeaderboard(language);
            set({
                leaderboard: data.leaderboard,
                currentUserRank: data.currentUserRank,
                isLoading: false,
            });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat leaderboard',
                isLoading: false,
            });
        }
    },
}));
