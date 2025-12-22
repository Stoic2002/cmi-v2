// English C2 Courses 6-10 - Translation Expert, Dialectology, Media Production, Linguistic Analysis, Cultural Diplomacy
// CEFR Level C2 (Native-like Proficiency)

export const englishC2Courses6to10 = [
    // Course 6: Translation Expert
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Translation Expert',
        titleId: 'Ahli Terjemahan',
        description: 'Professional translation mastery',
        descriptionId: 'Penguasaan terjemahan profesional',
        order: 6,
        canDo: {
            listening: 'Dapat melakukan interpretasi simultan',
            reading: 'Dapat menerjemahkan teks teknis dan sastra',
            speaking: 'Dapat menerjemahkan dengan akurasi native',
            writing: 'Dapat menerjemahkan untuk publikasi'
        },
        lessons: [
            {
                title: 'Professional Translation',
                titleId: 'Terjemahan Profesional',
                order: 1, xpReward: 60,
                content: {
                    vocabulary: [
                        { word: 'source language', meaning: 'bahasa sumber', example: '' },
                        { word: 'target language', meaning: 'bahasa sasaran', example: '' },
                        { word: 'CAT tools', meaning: 'alat terjemahan berbantuan komputer', example: '' },
                    ],
                    tips: ['SDL Trados, MemoQ, Wordfast = industry standard'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'source ___', questionId: 'source ___', answer: 'language', order: 1 },
                ],
            },
        ],
    },

    // Course 7: English Varieties
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'English Varieties',
        titleId: 'Variasi Bahasa Inggris',
        description: 'Master global English variations',
        descriptionId: 'Kuasai variasi Bahasa Inggris global',
        order: 7,
        canDo: {
            listening: 'Dapat memahami semua aksen utama',
            reading: 'Dapat membaca teks dari berbagai variasi',
            speaking: 'Dapat menyesuaikan aksen sesuai audiens',
            writing: 'Dapat menulis dalam berbagai variasi'
        },
        lessons: [
            {
                title: 'British vs American',
                titleId: 'British vs American',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'flat/apartment', meaning: 'apartemen', example: 'UK: flat, US: apartment' },
                        { word: 'lift/elevator', meaning: 'lift', example: '' },
                        { word: 'lorry/truck', meaning: 'truk', example: '' },
                    ],
                    tips: ['Konsisten dalam satu dokumen - jangan campur'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'British English for "apartment"?', questionId: 'British English untuk "apartment"?', options: ['apartment', 'flat', 'suite', 'condo'], answer: 'flat', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Media Production
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Media Production',
        titleId: 'Produksi Media',
        description: 'Create professional English content',
        descriptionId: 'Buat konten Bahasa Inggris profesional',
        order: 8,
        canDo: {
            listening: 'Dapat memahami berbagai gaya media',
            reading: 'Dapat membaca skrip media',
            speaking: 'Dapat menjadi narator profesional',
            writing: 'Dapat menulis konten media publikasi'
        },
        lessons: [
            {
                title: 'Podcast & Video',
                titleId: 'Podcast dan Video',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'hook', meaning: 'pembuka yang menarik', example: '' },
                        { word: 'call to action', meaning: 'ajakan bertindak', example: '' },
                        { word: 'engagement', meaning: 'keterlibatan', example: '' },
                    ],
                    tips: ['First 5 seconds = most important'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'call to ___', questionId: 'call to ___', answer: 'action', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Linguistic Analysis
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Linguistic Analysis',
        titleId: 'Analisis Linguistik',
        description: 'Analyze English at linguistic level',
        descriptionId: 'Menganalisis Bahasa Inggris secara linguistik',
        order: 9,
        canDo: {
            listening: 'Dapat menganalisis pola fonologis',
            reading: 'Dapat membaca paper linguistik',
            speaking: 'Dapat mendiskusikan teori bahasa',
            writing: 'Dapat menulis analisis linguistik'
        },
        lessons: [
            {
                title: 'Discourse Analysis',
                titleId: 'Analisis Wacana',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'pragmatics', meaning: 'pragmatika', example: '' },
                        { word: 'speech acts', meaning: 'tindak tutur', example: '' },
                        { word: 'implicature', meaning: 'implikatur', example: '' },
                    ],
                    tips: ['Discourse analysis: beyond sentence level'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'speech ___', questionId: 'speech ___', answer: 'acts', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Cultural Diplomacy
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Cultural Diplomacy',
        titleId: 'Diplomasi Budaya',
        description: 'Bridge cultures through English',
        descriptionId: 'Menjembatani budaya melalui Bahasa Inggris',
        order: 10,
        canDo: {
            listening: 'Dapat memahami nuansa budaya berbagai negara',
            reading: 'Dapat membaca konteks budaya implisit',
            speaking: 'Dapat berkomunikasi lintas budaya dengan presisi',
            writing: 'Dapat menulis untuk audiens global'
        },
        lessons: [
            {
                title: 'Global Communication',
                titleId: 'Komunikasi Global',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'cultural intelligence', meaning: 'kecerdasan budaya', example: '' },
                        { word: 'intercultural competence', meaning: 'kompetensi antarbudaya', example: '' },
                        { word: 'global mindset', meaning: 'pola pikir global', example: '' },
                    ],
                    tips: ['English = global lingua franca, but culture varies'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'cultural ___', questionId: 'cultural ___', answer: 'intelligence', order: 1 },
                ],
            },
        ],
    },
];

export default englishC2Courses6to10;
