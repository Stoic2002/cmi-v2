// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Languages
export const LANGUAGES = {
    en: { code: 'en', name: 'English', nameId: 'Bahasa Inggris', flag: '🇬🇧' },
    ko: { code: 'ko', name: '한국어', nameId: 'Bahasa Korea', flag: '🇰🇷' },
    ja: { code: 'ja', name: '日本語', nameId: 'Bahasa Jepang', flag: '🇯🇵' },
} as const;

// Levels
export const LEVELS = {
    beginner: { code: 'beginner', name: 'Pemula', description: 'Baru mulai belajar' },
    elementary: { code: 'elementary', name: 'Dasar', description: 'Memahami kosakata dasar' },
    intermediate: { code: 'intermediate', name: 'Menengah', description: 'Bisa percakapan sederhana' },
    advanced: { code: 'advanced', name: 'Mahir', description: 'Lancar berbicara' },
} as const;

// AI Tutor Modes
export const AI_TUTOR_MODES = {
    free_chat: { id: 'free_chat', name: 'Percakapan Bebas', icon: 'MessageCircle' },
    pronunciation: { id: 'pronunciation', name: 'Latihan Pengucapan', icon: 'Mic' },
    roleplay: { id: 'roleplay', name: 'Roleplay', icon: 'Users' },
    grammar_drill: { id: 'grammar_drill', name: 'Latihan Grammar', icon: 'BookOpen' },
    vocabulary: { id: 'vocabulary', name: 'Kosakata', icon: 'Languages' },
} as const;

// Goals
export const GOALS = {
    work: { id: 'work', label: 'Bekerja di Luar Negeri', icon: '💼' },
    study: { id: 'study', label: 'Studi / Sekolah', icon: '🎓' },
    travel: { id: 'travel', label: 'Wisata / Traveling', icon: '✈️' },
    hobby: { id: 'hobby', label: 'Hobi / Kesenangan', icon: '❤️' },
} as const;

// Local storage keys
export const STORAGE_KEYS = {
    TOKEN: 'cmi_token',
    USER: 'cmi_user',
} as const;
