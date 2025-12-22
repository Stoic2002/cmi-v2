// English C2 Courses 1-5 - Native Expression, Literary Mastery, Academic Publication, Executive, Creative Writing
// CEFR Level C2 (Native-like Proficiency)

export const englishC2Courses1to5 = [
    // Course 1: Native-level Expression
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Native-level Expression',
        titleId: 'Ekspresi Tingkat Native',
        description: 'Master native English nuances',
        descriptionId: 'Kuasai nuansa Bahasa Inggris native',
        order: 1,
        canDo: {
            listening: 'Dapat memahami segala bentuk bahasa Inggris',
            reading: 'Dapat membaca semua jenis teks',
            speaking: 'Dapat mengekspresikan diri secara spontan',
            writing: 'Dapat menulis dalam berbagai gaya'
        },
        lessons: [
            {
                title: 'Colloquial English',
                titleId: 'Bahasa Inggris Sehari-hari',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'you know', meaning: 'kamu tahu kan (filler)', example: '' },
                        { word: 'I mean', meaning: 'maksudku', example: '' },
                        { word: 'kind of/sort of', meaning: 'agak', example: '' },
                    ],
                    tips: ['Native English speakers use lots of fillers'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Natural filler?', questionId: 'Filler alami?', options: ['Therefore', 'Moreover', 'You know', 'Hence'], answer: 'You know', order: 1 },
                ],
            },
            {
                title: 'Slang & Expressions',
                titleId: 'Slang dan Ekspresi',
                order: 2, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'to be on the ball', meaning: 'siap/cekatan', example: '' },
                        { word: 'to have a blast', meaning: 'bersenang-senang', example: '' },
                        { word: 'to be under the weather', meaning: 'kurang sehat', example: '' },
                    ],
                    tips: ['Slang varies by region: UK vs US vs AU'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I had a ___ at the party!', questionId: 'I had a ___ at the party!', answer: 'blast', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Literary Mastery
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Literary Mastery',
        titleId: 'Penguasaan Sastra',
        description: 'Deep literary analysis and appreciation',
        descriptionId: 'Analisis dan apresiasi sastra mendalam',
        order: 2,
        canDo: {
            listening: 'Dapat mengapresiasi nuansa sastra lisan',
            reading: 'Dapat menganalisis karya sastra klasik',
            speaking: 'Dapat mendiskusikan teori sastra',
            writing: 'Dapat menulis kritik sastra publikasi'
        },
        lessons: [
            {
                title: 'Advanced Literary Theory',
                titleId: 'Teori Sastra Lanjutan',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'deconstruction', meaning: 'dekonstruksi', example: '' },
                        { word: 'intertextuality', meaning: 'intertekstualitas', example: '' },
                        { word: 'liminality', meaning: 'liminalitas', example: '' },
                    ],
                    tips: ['Literary theory: Derrida, Foucault, Butler'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Inter___uality', questionId: 'Inter___uality', answer: 'text', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Academic Publication
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Academic Publication',
        titleId: 'Publikasi Akademik',
        description: 'Publish in international journals',
        descriptionId: 'Publikasi di jurnal internasional',
        order: 3,
        canDo: {
            listening: 'Dapat memahami review dan diskusi akademik',
            reading: 'Dapat membaca paper di berbagai disiplin',
            speaking: 'Dapat mempertahankan tesis dalam bahasa Inggris',
            writing: 'Dapat menulis paper layak publikasi internasional'
        },
        lessons: [
            {
                title: 'Journal Submission',
                titleId: 'Pengiriman ke Jurnal',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'peer review', meaning: 'ulasan sejawat', example: '' },
                        { word: 'impact factor', meaning: 'faktor dampak', example: '' },
                        { word: 'revise and resubmit', meaning: 'revisi dan kirim ulang', example: '' },
                    ],
                    tips: ['Cover letter sangat penting dalam submission'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'peer ___', questionId: 'peer ___', answer: 'review', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Executive Communication
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Executive Communication',
        titleId: 'Komunikasi Eksekutif',
        description: 'C-suite level business English',
        descriptionId: 'Bahasa Inggris bisnis tingkat C-suite',
        order: 4,
        canDo: {
            listening: 'Dapat memahami diskusi strategis tingkat tinggi',
            reading: 'Dapat membaca laporan keuangan dan strategis',
            speaking: 'Dapat memimpin dengan otoritas',
            writing: 'Dapat menulis dokumen strategis'
        },
        lessons: [
            {
                title: 'Boardroom Language',
                titleId: 'Bahasa Ruang Dewan',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'stakeholder alignment', meaning: 'keselarasan pemangku kepentingan', example: '' },
                        { word: 'synergy', meaning: 'sinergi', example: '' },
                        { word: 'strategic pivot', meaning: 'perubahan strategis', example: '' },
                    ],
                    tips: ['Executives love buzzwords - learn them but use wisely'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'stakeholder ___', questionId: 'stakeholder ___', answer: 'alignment', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Creative Writing Mastery
    {
        language: 'en',
        level: 'C2',
        localStandard: null,
        title: 'Creative Writing Mastery',
        titleId: 'Penguasaan Penulisan Kreatif',
        description: 'Write publishable creative works',
        descriptionId: 'Menulis karya kreatif layak publikasi',
        order: 5,
        canDo: {
            listening: 'Dapat mengapresiasi teknik naratif tingkat tinggi',
            reading: 'Dapat menganalisis gaya penulis terkenal',
            speaking: 'Dapat menceritakan dengan gaya unik',
            writing: 'Dapat menulis prosa publikasi'
        },
        lessons: [
            {
                title: 'Finding Your Voice',
                titleId: 'Menemukan Suara Anda',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'authorial voice', meaning: 'suara penulis', example: '' },
                        { word: 'stream of consciousness', meaning: 'arus kesadaran', example: '' },
                        { word: 'show, don\'t tell', meaning: 'tunjukkan, jangan beritahu', example: '' },
                    ],
                    tips: ['Read widely to develop your unique voice'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Show, don\'t ___.', questionId: 'Show, don\'t ___.', answer: 'tell', order: 1 },
                ],
            },
        ],
    },
];

export default englishC2Courses1to5;
