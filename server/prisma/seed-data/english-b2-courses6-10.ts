// English B2 Courses 6-10 - Literature, Research, Idioms Advanced, Cross-cultural, IELTS/TOEFL Advanced
// CEFR Level B2

export const englishB2Courses6to10 = [
    // Course 6: Literature
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Literature',
        titleId: 'Sastra',
        description: 'Explore English literature',
        descriptionId: 'Eksplorasi sastra Inggris',
        order: 6,
        canDo: {
            listening: 'Dapat memahami audiobook',
            reading: 'Dapat membaca novel dan cerita',
            speaking: 'Dapat mendiskusikan karya sastra',
            writing: 'Dapat menulis analisis sastra'
        },
        lessons: [
            {
                title: 'Literary Analysis',
                titleId: 'Analisis Sastra',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'metaphor', meaning: 'metafora', example: 'Life is a journey.' },
                        { word: 'symbolism', meaning: 'simbolisme', example: 'The dove symbolizes peace.' },
                        { word: 'irony', meaning: 'ironi', example: '' },
                        { word: 'foreshadowing', meaning: 'pertanda', example: '' },
                    ],
                    tips: ['Perhatikan literary devices saat membaca'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Life is a journey" is an example of?', questionId: '"Life is a journey" adalah contoh?', options: ['Simile', 'Metaphor', 'Irony', 'Alliteration'], answer: 'Metaphor', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Research Skills
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Research Skills',
        titleId: 'Keterampilan Riset',
        description: 'Conduct and present research',
        descriptionId: 'Melakukan dan mempresentasikan riset',
        order: 7,
        canDo: {
            listening: 'Dapat memahami presentasi riset',
            reading: 'Dapat membaca paper akademik',
            speaking: 'Dapat presentasi hasil riset',
            writing: 'Dapat menulis paper akademik'
        },
        lessons: [
            {
                title: 'Literature Review',
                titleId: 'Tinjauan Pustaka',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'previous research suggests...', meaning: 'penelitian sebelumnya menunjukkan...', example: '' },
                        { word: 'the gap in the literature...', meaning: 'celah dalam literatur...', example: '' },
                        { word: 'this study aims to...', meaning: 'penelitian ini bertujuan...', example: '' },
                    ],
                    tips: ['Lit review: summarize, synthesize, identify gaps'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'This study ___ to...', questionId: 'This study ___ to...', answer: 'aims', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Advanced Idioms
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Advanced Idioms',
        titleId: 'Idiom Lanjutan',
        description: 'Master advanced English idioms',
        descriptionId: 'Kuasai idiom Inggris lanjutan',
        order: 8,
        canDo: {
            listening: 'Dapat memahami idiom dalam konteks',
            reading: 'Dapat membaca teks dengan idiom',
            speaking: 'Dapat menggunakan idiom tepat',
            writing: 'Dapat menulis dengan idiom'
        },
        lessons: [
            {
                title: 'Business Idioms Advanced',
                titleId: 'Idiom Bisnis Lanjutan',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'move the goalposts', meaning: 'mengubah aturan di tengah jalan', example: '' },
                        { word: 'back to square one', meaning: 'mulai dari awal', example: '' },
                        { word: 'on the same wavelength', meaning: 'sejalan/sepemikiran', example: '' },
                    ],
                    tips: ['Idiom sangat umum dalam komunikasi bisnis native'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'We\'re back to square ___.', questionId: 'We\'re back to square ___.', answer: 'one', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Cross-cultural Communication
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'Cross-cultural Communication',
        titleId: 'Komunikasi Lintas Budaya',
        description: 'Communicate across cultures',
        descriptionId: 'Berkomunikasi lintas budaya',
        order: 9,
        canDo: {
            listening: 'Dapat memahami aksen berbeda',
            reading: 'Dapat membaca perspektif berbeda',
            speaking: 'Dapat berkomunikasi sensitif budaya',
            writing: 'Dapat menulis untuk audiens internasional'
        },
        lessons: [
            {
                title: 'Cultural Differences',
                titleId: 'Perbedaan Budaya',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'high-context vs low-context', meaning: 'konteks tinggi vs rendah', example: '' },
                        { word: 'direct vs indirect communication', meaning: 'komunikasi langsung vs tidak langsung', example: '' },
                    ],
                    tips: ['Indonesia: high-context, USA: low-context'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'USA communication style?', questionId: 'Gaya komunikasi USA?', options: ['High-context', 'Low-context', 'Mixed', 'Indirect'], answer: 'Low-context', order: 1 },
                ],
            },
        ],
    },

    // Course 10: IELTS/TOEFL Advanced
    {
        language: 'en',
        level: 'B2',
        localStandard: null,
        title: 'IELTS/TOEFL Advanced',
        titleId: 'IELTS/TOEFL Lanjutan',
        description: 'Achieve high scores in proficiency tests',
        descriptionId: 'Raih skor tinggi di tes kemampuan',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab soal listening lanjutan',
            reading: 'Dapat menjawab soal reading lanjutan',
            speaking: 'Dapat berbicara dengan lancar',
            writing: 'Dapat menulis esai tes'
        },
        lessons: [
            {
                title: 'IELTS Writing Task 2',
                titleId: 'IELTS Writing Task 2',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: 'to what extent do you agree', meaning: 'sejauh mana Anda setuju', example: '' },
                        { word: 'discuss both views', meaning: 'diskusikan kedua pandangan', example: '' },
                    ],
                    tips: ['Task 2: 250 kata minimum, 40 menit'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'IELTS Task 2 word count?', questionId: 'Jumlah kata IELTS Task 2?', options: ['150', '200', '250', '300'], answer: '250', order: 1 },
                ],
            },
            {
                title: 'TOEFL Speaking',
                titleId: 'TOEFL Speaking',
                order: 2, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: 'integrated task', meaning: 'tugas terintegrasi', example: '' },
                        { word: 'independent task', meaning: 'tugas independen', example: '' },
                    ],
                    tips: ['Integrated: read + listen + speak'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'TOEFL has ___ speaking tasks.', questionId: 'TOEFL has ___ speaking tasks.', answer: '4', order: 1 },
                ],
            },
        ],
    },
];

export default englishB2Courses6to10;
