// English B1 Courses 6-10 - Presentations, Opinions, Academic, Idioms, IELTS/TOEFL
// CEFR Level B1

export const englishB1Courses6to10 = [
    // Course 6: Presentations
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Presentations',
        titleId: 'Presentasi',
        description: 'Give effective presentations',
        descriptionId: 'Memberikan presentasi yang efektif',
        order: 6,
        canDo: {
            listening: 'Dapat memahami presentasi',
            reading: 'Dapat membaca slide presentasi',
            speaking: 'Dapat memberikan presentasi',
            writing: 'Dapat membuat outline presentasi'
        },
        lessons: [
            {
                title: 'Structuring a Presentation',
                titleId: 'Struktur Presentasi',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'Today I\'ll be talking about...', meaning: 'Hari ini saya akan berbicara tentang...', example: '' },
                        { word: 'First, I\'ll cover... Then... Finally...', meaning: 'Pertama... Lalu... Akhirnya...', example: '' },
                        { word: 'Moving on to...', meaning: 'Beralih ke...', example: 'Moving on to the next point...' },
                    ],
                    tips: ['Intro → Main points → Conclusion → Q&A'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Today I\'ll be ___ about...', questionId: 'Today I\'ll be ___ about...', answer: 'talking', order: 1 },
                ],
            },
            {
                title: 'Visual Aids',
                titleId: 'Alat Bantu Visual',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'As you can see...', meaning: 'Seperti yang bisa Anda lihat...', example: '' },
                        { word: 'This chart shows...', meaning: 'Grafik ini menunjukkan...', example: '' },
                        { word: 'I\'d like to draw your attention to...', meaning: 'Saya ingin menarik perhatian Anda ke...', example: '' },
                    ],
                    tips: ['Jangan baca slide - jelaskan dengan kata-kata Anda'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'This chart ___ the growth.', questionId: 'This chart ___ the growth.', answer: 'shows', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Expressing Opinions
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Expressing Opinions',
        titleId: 'Mengekspresikan Pendapat',
        description: 'Express and defend opinions',
        descriptionId: 'Mengekspresikan dan mempertahankan pendapat',
        order: 7,
        canDo: {
            listening: 'Dapat memahami argumen',
            reading: 'Dapat membaca editorial',
            speaking: 'Dapat berdebat dengan sopan',
            writing: 'Dapat menulis esai opini'
        },
        lessons: [
            {
                title: 'Giving Opinions',
                titleId: 'Memberikan Pendapat',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'In my opinion...', meaning: 'Menurut pendapat saya...', example: '' },
                        { word: 'From my point of view...', meaning: 'Dari sudut pandang saya...', example: '' },
                        { word: 'I\'m convinced that...', meaning: 'Saya yakin bahwa...', example: '' },
                    ],
                    tips: ['Gunakan "I think" untuk pendapat santai'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'In my ___...', questionId: 'In my ___...', answer: 'opinion', order: 1 },
                ],
            },
            {
                title: 'Agreeing & Disagreeing',
                titleId: 'Setuju & Tidak Setuju',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'I completely agree', meaning: 'Saya sangat setuju', example: '' },
                        { word: 'I see what you mean, but...', meaning: 'Saya mengerti maksud Anda, tapi...', example: '' },
                        { word: 'I\'m not sure I agree with that', meaning: 'Saya tidak yakin setuju dengan itu', example: '' },
                    ],
                    tips: ['Jangan langsung bilang "You\'re wrong"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite disagreement?', questionId: 'Tidak setuju sopan?', options: ['You\'re wrong', 'No way', 'I see what you mean, but...', 'That\'s stupid'], answer: 'I see what you mean, but...', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Academic Writing
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Academic Writing',
        titleId: 'Penulisan Akademik',
        description: 'Write academic texts',
        descriptionId: 'Menulis teks akademik',
        order: 8,
        canDo: {
            listening: 'Dapat memahami kuliah',
            reading: 'Dapat membaca jurnal sederhana',
            speaking: 'Dapat mendiskusikan topik akademik',
            writing: 'Dapat menulis esai akademik'
        },
        lessons: [
            {
                title: 'Essay Structure',
                titleId: 'Struktur Esai',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'thesis statement', meaning: 'pernyataan tesis', example: 'The thesis statement presents your main argument.' },
                        { word: 'topic sentence', meaning: 'kalimat topik', example: 'Each paragraph starts with a topic sentence.' },
                        { word: 'supporting evidence', meaning: 'bukti pendukung', example: '' },
                    ],
                    tips: ['Intro → Body paragraphs → Conclusion'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'The ___ statement presents your main argument.', questionId: 'The ___ statement presents your main argument.', answer: 'thesis', order: 1 },
                ],
            },
            {
                title: 'Citing Sources',
                titleId: 'Mengutip Sumber',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'According to...', meaning: 'Menurut...', example: 'According to Smith (2020)...' },
                        { word: 'Research shows that...', meaning: 'Penelitian menunjukkan bahwa...', example: '' },
                        { word: 'As stated by...', meaning: 'Seperti yang dinyatakan oleh...', example: '' },
                    ],
                    tips: ['Selalu kutip sumber untuk menghindari plagiarisme'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___ to Smith (2020)...', questionId: '___ to Smith (2020)...', answer: 'According', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Idioms & Phrasal Verbs
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Idioms & Phrasal Verbs',
        titleId: 'Idiom dan Phrasal Verbs',
        description: 'Learn common idioms and phrasal verbs',
        descriptionId: 'Pelajari idiom dan phrasal verb umum',
        order: 9,
        canDo: {
            listening: 'Dapat memahami idiom dalam percakapan',
            reading: 'Dapat membaca teks dengan idiom',
            speaking: 'Dapat menggunakan idiom dengan tepat',
            writing: 'Dapat menulis dengan phrasal verbs'
        },
        lessons: [
            {
                title: 'Common Phrasal Verbs',
                titleId: 'Phrasal Verbs Umum',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'look up', meaning: 'mencari (informasi)', example: 'Look up the word in the dictionary.' },
                        { word: 'put off', meaning: 'menunda', example: 'Don\'t put off your homework.' },
                        { word: 'give up', meaning: 'menyerah', example: 'Never give up!' },
                        { word: 'find out', meaning: 'mencari tahu', example: 'I need to find out the truth.' },
                    ],
                    tips: ['Phrasal verbs sangat umum dalam bahasa Inggris sehari-hari'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Menyerah" in English?', questionId: '"Menyerah" dalam Inggris?', options: ['give in', 'give up', 'give out', 'give away'], answer: 'give up', order: 1 },
                ],
            },
            {
                title: 'Business Idioms',
                titleId: 'Idiom Bisnis',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'think outside the box', meaning: 'berpikir kreatif', example: 'We need to think outside the box.' },
                        { word: 'get the ball rolling', meaning: 'memulai', example: 'Let\'s get the ball rolling.' },
                        { word: 'on the same page', meaning: 'memiliki pemahaman yang sama', example: 'Are we on the same page?' },
                    ],
                    tips: ['Idiom bisnis sangat umum di meeting dan email'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'We need to think outside the ___.', questionId: 'We need to think outside the ___.', answer: 'box', order: 1 },
                ],
            },
        ],
    },

    // Course 10: IELTS/TOEFL Basics
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'IELTS/TOEFL Basics',
        titleId: 'Dasar IELTS/TOEFL',
        description: 'Prepare for English proficiency tests',
        descriptionId: 'Persiapan tes kemampuan bahasa Inggris',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab soal listening',
            reading: 'Dapat menjawab soal reading',
            speaking: 'Dapat menjawab soal speaking',
            writing: 'Dapat menulis esai tes'
        },
        lessons: [
            {
                title: 'Test Overview',
                titleId: 'Gambaran Umum Tes',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'Listening', meaning: 'Mendengarkan', example: '4 sections in IELTS' },
                        { word: 'Reading', meaning: 'Membaca', example: '3 passages in IELTS Academic' },
                        { word: 'Writing', meaning: 'Menulis', example: '2 tasks in IELTS' },
                        { word: 'Speaking', meaning: 'Berbicara', example: '3 parts in IELTS' },
                    ],
                    tips: ['IELTS: British English focused, TOEFL: American English focused'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'IELTS has how many sections?', questionId: 'IELTS memiliki berapa bagian?', options: ['2', '3', '4', '5'], answer: '4', order: 1 },
                ],
            },
            {
                title: 'Listening Strategies',
                titleId: 'Strategi Listening',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'prediction', meaning: 'prediksi', example: 'Predict the answer before listening.' },
                        { word: 'key words', meaning: 'kata kunci', example: 'Listen for key words.' },
                        { word: 'paraphrase', meaning: 'parafrasa', example: 'Answers are often paraphrased.' },
                    ],
                    tips: ['Baca pertanyaan sebelum audio diputar'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___ the answer before listening.', questionId: '___ the answer before listening.', answer: 'Predict', order: 1 },
                ],
            },
        ],
    },
];

export default englishB1Courses6to10;
