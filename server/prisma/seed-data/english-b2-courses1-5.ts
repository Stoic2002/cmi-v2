// English B2 Courses 1-5 - Advanced Grammar, Academic Writing, Professional, Debate, Media
// CEFR Level B2

export const englishB2Courses1to5 = [
    // Course 1: Advanced Grammar
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Advanced Grammar',
        titleId: 'Tata Bahasa Lanjutan',
        description: 'Master complex English grammar',
        descriptionId: 'Kuasai tata bahasa Inggris kompleks',
        order: 1,
        canDo: {
            listening: 'Dapat memahami diskusi kompleks',
            reading: 'Dapat membaca teks akademik',
            speaking: 'Dapat berkomunikasi dengan nuansa',
            writing: 'Dapat menulis esai terstruktur'
        },
        lessons: [
            {
                title: 'Mixed Conditionals',
                titleId: 'Kondisional Campuran',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'If I had studied, I would be...', meaning: 'Jika saya sudah belajar, saya akan...', example: 'If I had studied medicine, I would be a doctor now.' },
                        { word: 'If I were rich, I would have...', meaning: 'Jika saya kaya, saya sudah...', example: 'If I were rich, I would have bought that house.' },
                    ],
                    grammar: [
                        { pattern: 'If + past perfect, would + base', explanation: 'Past condition → present result', examples: ['If I had saved money, I would be rich now.'] },
                        { pattern: 'If + past simple, would have + pp', explanation: 'Present condition → past result', examples: ['If I were braver, I would have spoken up.'] },
                    ],
                    tips: ['Mixed conditionals menghubungkan waktu berbeda'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'If I had studied harder, I ___ be a doctor now.', questionId: 'If I had studied harder, I ___ be a doctor now.', answer: 'would', order: 1 },
                ],
            },
            {
                title: 'Inversion',
                titleId: 'Inversi',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'Never have I seen...', meaning: 'Tidak pernah saya melihat...', example: '' },
                        { word: 'Not only did he...', meaning: 'Tidak hanya dia...', example: 'Not only did he arrive late, but he also forgot the documents.' },
                        { word: 'Rarely do we...', meaning: 'Jarang kita...', example: 'Rarely do we see such dedication.' },
                    ],
                    tips: ['Inversi untuk penekanan dalam tulisan formal'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Never ___ I seen such beauty.', questionId: 'Never ___ I seen such beauty.', answer: 'have', order: 1 },
                ],
            },
            {
                title: 'Cleft Sentences',
                titleId: 'Kalimat Cleft',
                order: 3, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'It was John who...', meaning: 'John-lah yang...', example: 'It was John who broke the window.' },
                        { word: 'What I need is...', meaning: 'Yang saya butuhkan adalah...', example: 'What I need is a good rest.' },
                    ],
                    tips: ['Cleft sentences menekankan bagian tertentu'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___ was Maria who called.', questionId: '___ was Maria who called.', answer: 'It', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Academic Writing
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Academic Writing',
        titleId: 'Penulisan Akademik',
        description: 'Write academic papers and essays',
        descriptionId: 'Menulis paper dan esai akademik',
        order: 2,
        canDo: {
            listening: 'Dapat memahami kuliah akademik',
            reading: 'Dapat membaca jurnal',
            speaking: 'Dapat presentasi akademik',
            writing: 'Dapat menulis paper akademik'
        },
        lessons: [
            {
                title: 'Essay Structure',
                titleId: 'Struktur Esai',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'thesis statement', meaning: 'pernyataan tesis', example: '' },
                        { word: 'topic sentence', meaning: 'kalimat topik', example: '' },
                        { word: 'supporting evidence', meaning: 'bukti pendukung', example: '' },
                        { word: 'counter-argument', meaning: 'argumen tandingan', example: '' },
                    ],
                    tips: ['Intro → Body (3+) → Counter → Conclusion'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Opposing view section?', questionId: 'Bagian pandangan berlawanan?', options: ['thesis', 'topic sentence', 'counter-argument', 'conclusion'], answer: 'counter-argument', order: 1 },
                ],
            },
            {
                title: 'Academic Language',
                titleId: 'Bahasa Akademik',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'It can be argued that...', meaning: 'Dapat diargumentasikan bahwa...', example: '' },
                        { word: 'This suggests that...', meaning: 'Ini menunjukkan bahwa...', example: '' },
                        { word: 'The evidence indicates...', meaning: 'Bukti menunjukkan...', example: '' },
                    ],
                    tips: ['Hindari "I think" - gunakan pasif dan hedging'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'It can be ___ that...', questionId: 'It can be ___ that...', answer: 'argued', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Professional Communication
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Professional Communication',
        titleId: 'Komunikasi Profesional',
        description: 'High-level business communication',
        descriptionId: 'Komunikasi bisnis tingkat tinggi',
        order: 3,
        canDo: {
            listening: 'Dapat memahami meeting kompleks',
            reading: 'Dapat membaca kontrak',
            speaking: 'Dapat bernegosiasi',
            writing: 'Dapat menulis proposal'
        },
        lessons: [
            {
                title: 'Negotiation',
                titleId: 'Negosiasi',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: 'We would be willing to...', meaning: 'Kami bersedia untuk...', example: '' },
                        { word: 'That would be acceptable if...', meaning: 'Itu bisa diterima jika...', example: '' },
                        { word: 'Perhaps we could consider...', meaning: 'Mungkin kita bisa pertimbangkan...', example: '' },
                    ],
                    tips: ['Gunakan conditional untuk kesan fleksibel'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'We would be ___ to consider...', questionId: 'We would be ___ to consider...', answer: 'willing', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Debate Skills
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Debate Skills',
        titleId: 'Keterampilan Debat',
        description: 'Argue and debate effectively',
        descriptionId: 'Berargumen dan berdebat efektif',
        order: 4,
        canDo: {
            listening: 'Dapat memahami argumen kompleks',
            reading: 'Dapat membaca editorial',
            speaking: 'Dapat berdebat dengan struktur',
            writing: 'Dapat menulis argumen'
        },
        lessons: [
            {
                title: 'Building Arguments',
                titleId: 'Membangun Argumen',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'First and foremost...', meaning: 'Pertama dan terutama...', example: '' },
                        { word: 'Furthermore...', meaning: 'Selain itu...', example: '' },
                        { word: 'In light of this...', meaning: 'Mengingat hal ini...', example: '' },
                    ],
                    tips: ['Claim → Evidence → Reasoning → Impact'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'First and ___...', questionId: 'First and ___...', answer: 'foremost', order: 1 },
                ],
            },
            {
                title: 'Rebuttal',
                titleId: 'Sanggahan',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'That may be true, however...', meaning: 'Itu mungkin benar, namun...', example: '' },
                        { word: 'This argument fails to consider...', meaning: 'Argumen ini gagal mempertimbangkan...', example: '' },
                    ],
                    tips: ['Akui dulu, baru bantah'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite rebuttal starter?', questionId: 'Pembuka sanggahan sopan?', options: ['Wrong!', 'That may be true, however...', 'No way', 'Impossible'], answer: 'That may be true, however...', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Media Literacy
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Media Literacy',
        titleId: 'Literasi Media',
        description: 'Critically analyze media',
        descriptionId: 'Menganalisis media secara kritis',
        order: 5,
        canDo: {
            listening: 'Dapat memahami berita dan podcast',
            reading: 'Dapat membaca artikel mendalam',
            speaking: 'Dapat mendiskusikan isu terkini',
            writing: 'Dapat menulis editorial'
        },
        lessons: [
            {
                title: 'News Analysis',
                titleId: 'Analisis Berita',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'bias', meaning: 'bias', example: 'Check for bias in reporting.' },
                        { word: 'source credibility', meaning: 'kredibilitas sumber', example: '' },
                        { word: 'fact vs opinion', meaning: 'fakta vs opini', example: '' },
                    ],
                    tips: ['Selalu verifikasi dari multiple sources'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Check for ___ in reporting.', questionId: 'Check for ___ in reporting.', answer: 'bias', order: 1 },
                ],
            },
        ],
    },
];

export default englishB2Courses1to5;
