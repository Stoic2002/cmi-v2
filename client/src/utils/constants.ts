// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Languages
export const LANGUAGES = {
    en: { code: 'en', name: 'English', nameId: 'Bahasa Inggris', flag: '🇬🇧' },
    ko: { code: 'ko', name: '한국어', nameId: 'Bahasa Korea', flag: '🇰🇷' },
    ja: { code: 'ja', name: '日本語', nameId: 'Bahasa Jepang', flag: '🇯🇵' },
} as const;

// Levels - CEFR Standard with local equivalents
export const LEVELS = {
    A1: {
        code: 'A1',
        name: 'A1 - Pemula',
        description: 'Baru mulai belajar dasar-dasar',
        localStandard: { ja: 'JLPT N5', ko: 'TOPIK 1', en: '-' }
    },
    A2: {
        code: 'A2',
        name: 'A2 - Dasar',
        description: 'Memahami kosakata dan frasa dasar',
        localStandard: { ja: 'JLPT N4', ko: 'TOPIK 2', en: '-' }
    },
    B1: {
        code: 'B1',
        name: 'B1 - Menengah',
        description: 'Bisa percakapan sehari-hari',
        localStandard: { ja: 'JLPT N3', ko: 'TOPIK 3', en: '-' }
    },
    B2: {
        code: 'B2',
        name: 'B2 - Menengah Atas',
        description: 'Lancar percakapan kompleks',
        localStandard: { ja: 'JLPT N2', ko: 'TOPIK 4', en: '-' }
    },
    C1: {
        code: 'C1',
        name: 'C1 - Mahir',
        description: 'Menguasai bahasa untuk profesional',
        localStandard: { ja: 'JLPT N1', ko: 'TOPIK 5', en: '-' }
    },
    C2: {
        code: 'C2',
        name: 'C2 - Ahli',
        description: 'Penguasaan seperti penutur asli',
        localStandard: { ja: 'JLPT N1+', ko: 'TOPIK 6', en: '-' }
    },
} as const;

// AI Tutor Modes
export const AI_TUTOR_MODES = {
    guided_lesson: { id: 'guided_lesson', name: 'Belajar Terbimbing', icon: 'GraduationCap' },
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
