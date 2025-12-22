import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types';
import { authApi } from '../services/api';
import { STORAGE_KEYS } from '../utils/constants';

interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;

    // Actions
    login: (email: string, password: string) => Promise<void>;
    register: (data: { email: string; password: string; name: string; targetLanguage?: string }) => Promise<void>;
    logout: () => void;
    fetchUser: () => Promise<void>;
    updateProfile: (data: { name?: string; targetLanguage?: string; level?: string; goal?: string }) => Promise<void>;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isLoading: false,
            error: null,

            login: async (email, password) => {
                set({ isLoading: true, error: null });
                try {
                    const { data } = await authApi.login({ email, password });
                    localStorage.setItem(STORAGE_KEYS.TOKEN, data.token);
                    set({
                        user: data.user,
                        token: data.token,
                        isLoading: false
                    });
                } catch (error: any) {
                    set({
                        error: error.response?.data?.error || 'Login gagal',
                        isLoading: false
                    });
                    throw error;
                }
            },

            register: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    const { data: response } = await authApi.register(data);
                    localStorage.setItem(STORAGE_KEYS.TOKEN, response.token);
                    set({
                        user: response.user,
                        token: response.token,
                        isLoading: false
                    });
                } catch (error: any) {
                    set({
                        error: error.response?.data?.error || 'Registrasi gagal',
                        isLoading: false
                    });
                    throw error;
                }
            },

            logout: () => {
                localStorage.removeItem(STORAGE_KEYS.TOKEN);
                set({ user: null, token: null });
            },

            fetchUser: async () => {
                const token = get().token || localStorage.getItem(STORAGE_KEYS.TOKEN);
                if (!token) return;

                set({ isLoading: true });
                try {
                    const { data } = await authApi.getMe();
                    set({ user: data.user, isLoading: false });
                } catch (error) {
                    set({ user: null, token: null, isLoading: false });
                    localStorage.removeItem(STORAGE_KEYS.TOKEN);
                }
            },

            updateProfile: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    const { data: response } = await authApi.updateProfile(data);
                    set({ user: response.user, isLoading: false });
                } catch (error: any) {
                    set({
                        error: error.response?.data?.error || 'Update gagal',
                        isLoading: false
                    });
                    throw error;
                }
            },

            clearError: () => set({ error: null }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({ token: state.token }),
        }
    )
);
