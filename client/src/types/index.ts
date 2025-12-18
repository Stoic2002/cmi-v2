export interface User {
    id: string;
    email: string;
    name: string;
    targetLanguage: 'en' | 'ko' | 'ja';
    currentLevel: 'beginner' | 'elementary' | 'intermediate' | 'advanced';
    xp: number;
    streak: number;
    lastActiveDate: string | null;
    createdAt: string;
}

export interface Course {
    id: string;
    language: string;
    level: string;
    title: string;
    titleId: string;
    description: string;
    descriptionId: string;
    order: number;
    totalLessons: number;
    completedLessons: number;
}

export interface Lesson {
    id: string;
    title: string;
    titleId: string;
    order: number;
    xpReward: number;
    quizCount: number;
    completed: boolean;
}

export interface LessonDetail extends Lesson {
    content: LessonContent;
    course: {
        id: string;
        title: string;
        titleId: string;
        language: string;
        level: string;
    };
    score: number;
}

export interface LessonContent {
    vocabulary?: VocabularyItem[];
    grammar?: GrammarPoint[];
    examples?: Example[];
    tips?: string[];
}

export interface VocabularyItem {
    word: string;
    romanization?: string;
    meaning: string;
    example?: string;
}

export interface GrammarPoint {
    pattern: string;
    explanation: string;
    examples: string[];
}

export interface Example {
    original: string;
    translation: string;
    romanization?: string;
}

export interface Quiz {
    id: string;
    type: 'multiple_choice' | 'fill_blank' | 'speaking' | 'listening';
    question: string;
    questionId: string;
    options?: string[];
    order: number;
    xpReward: number;
    answer?: string;
    attempted?: boolean;
    lastAttempt?: {
        lastAnswer: string;
        isCorrect: boolean;
    } | null;
}

export interface QuizResult {
    isCorrect: boolean;
    correctAnswer?: string;
    xpEarned: number;
    message: string;
}

export interface AIMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

export interface AIConversation {
    id: string;
    type: string;
    topic?: string;
    messages: AIMessage[];
    xpEarned: number;
    createdAt: string;
    updatedAt: string;
}

export interface Progress {
    xp: number;
    streak: number;
    currentLevel: string;
    completedLessons: number;
    totalLessons: number;
    lessonProgress: number;
    quizzesTaken: number;
    quizAccuracy: number;
    aiConversations: number;
}

export interface Achievement {
    id: string;
    name: string;
    nameId: string;
    description: string;
    descriptionId: string;
    icon: string;
    xpReward: number;
    unlocked: boolean;
    earnedAt: string | null;
    progress?: number;
}

export interface LeaderboardEntry {
    rank: number;
    name: string;
    xp: number;
    streak: number;
    level: string;
    language: string;
    isCurrentUser: boolean;
}

export interface Scenario {
    id: string;
    title: string;
    description: string;
}
