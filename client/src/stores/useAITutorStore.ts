import { create } from 'zustand';
import type { AIMessage, AIConversation, Scenario } from '../types';
import { aiTutorApi } from '../services/api';

interface AITutorState {
    conversations: AIConversation[];
    currentConversationId: string | null;
    messages: AIMessage[];
    scenarios: Scenario[];
    currentMode: string;
    isLoading: boolean;
    isSending: boolean;
    error: string | null;

    // Actions
    sendMessage: (message: string, type?: string, topic?: string) => Promise<void>;
    fetchConversations: () => Promise<void>;
    fetchConversation: (id: string) => Promise<void>;
    fetchScenarios: () => Promise<void>;
    setMode: (mode: string) => void;
    startNewConversation: () => void;
    clearError: () => void;
}

export const useAITutorStore = create<AITutorState>((set, get) => ({
    conversations: [],
    currentConversationId: null,
    messages: [],
    scenarios: [],
    currentMode: 'free_chat',
    isLoading: false,
    isSending: false,
    error: null,

    sendMessage: async (message, type, topic) => {
        const { currentConversationId, currentMode } = get();

        // Add user message immediately for better UX
        const userMessage: AIMessage = {
            role: 'user',
            content: message,
            timestamp: new Date().toISOString(),
        };
        set((state) => ({
            messages: [...state.messages, userMessage],
            isSending: true,
            error: null,
        }));

        try {
            const { data } = await aiTutorApi.chat({
                message,
                conversationId: currentConversationId || undefined,
                type: type || currentMode,
                topic,
            });

            const aiMessage: AIMessage = {
                role: 'assistant',
                content: data.message,
                timestamp: new Date().toISOString(),
            };

            set((state) => ({
                messages: [...state.messages, aiMessage],
                currentConversationId: data.conversationId,
                isSending: false,
            }));
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal mengirim pesan',
                isSending: false,
            });
        }
    },

    fetchConversations: async () => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await aiTutorApi.getConversations();
            set({ conversations: data.conversations, isLoading: false });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat percakapan',
                isLoading: false,
            });
        }
    },

    fetchConversation: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await aiTutorApi.getConversation(id);
            set({
                messages: data.conversation.messages,
                currentConversationId: id,
                currentMode: data.conversation.type,
                isLoading: false,
            });
        } catch (error: any) {
            set({
                error: error.response?.data?.error || 'Gagal memuat percakapan',
                isLoading: false,
            });
        }
    },

    fetchScenarios: async () => {
        try {
            const { data } = await aiTutorApi.getScenarios();
            set({ scenarios: data.scenarios });
        } catch (error: any) {
            set({ error: error.response?.data?.error || 'Gagal memuat skenario' });
        }
    },

    setMode: (mode) => set({ currentMode: mode }),

    startNewConversation: () => set({
        currentConversationId: null,
        messages: [],
    }),

    clearError: () => set({ error: null }),
}));
