export interface User {
    id: string;
    email: string;
    name: string;
    targetLanguage: 'en' | 'ko' | 'ja';
    currentLevel: 'beginner' | 'elementary' | 'intermediate' | 'advanced';
    xp: number;
    streak: number;
    lastActiveDate: Date | null;
    createdAt: Date;
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
}

export interface Lesson {
    id: string;
    courseId: string;
    title: string;
    titleId: string;
    content: LessonContent;
    order: number;
    xpReward: number;
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
    audio?: string;
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
    lessonId: string;
    type: 'multiple_choice' | 'fill_blank' | 'speaking' | 'listening';
    question: string;
    questionId: string;
    options?: string[];
    answer: string;
    xpReward: number;
    order: number;
}

export interface AIMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

export interface AIConversationType {
    id: string;
    userId: string;
    type: 'free_chat' | 'pronunciation' | 'roleplay' | 'grammar_drill' | 'vocabulary';
    topic?: string;
    messages: AIMessage[];
    xpEarned: number;
}

export interface Achievement {
    id: string;
    name: string;
    nameId: string;
    description: string;
    descriptionId: string;
    icon: string;
    condition: AchievementCondition;
    xpReward: number;
}

export interface AchievementCondition {
    type: 'xp' | 'streak' | 'lessons_completed' | 'quizzes_correct' | 'conversations';
    value: number;
}
