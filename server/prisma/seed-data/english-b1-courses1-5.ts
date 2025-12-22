// English B1 Courses 1-5 - Perfect Tenses, Passive, Reported Speech, Reading, Business
// CEFR Level B1

export const englishB1Courses1to5 = [
    // Course 1: Perfect Tenses
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Perfect Tenses',
        titleId: 'Tenses Perfect',
        description: 'Master present, past, and future perfect',
        descriptionId: 'Kuasai perfect tense masa kini, lampau, dan depan',
        order: 1,
        canDo: {
            listening: 'Dapat memahami narasi dengan perfect tense',
            reading: 'Dapat membaca teks dengan berbagai tense',
            speaking: 'Dapat menggunakan perfect tense',
            writing: 'Dapat menulis dengan perfect tense'
        },
        lessons: [
            {
                title: 'Present Perfect',
                titleId: 'Present Perfect',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'I have finished', meaning: 'Saya sudah selesai', example: '' },
                        { word: 'She has worked here for 5 years', meaning: 'Dia sudah bekerja di sini 5 tahun', example: '' },
                        { word: 'Have you ever been to Japan?', meaning: 'Pernahkah kamu ke Jepang?', example: '' },
                    ],
                    grammar: [
                        { pattern: 'have/has + past participle', explanation: 'Aksi lampau dengan dampak sekarang', examples: ['I have eaten.', 'She has left.'] },
                        { pattern: 'for/since', explanation: 'Durasi waktu', examples: ['for 2 years', 'since 2020'] },
                    ],
                    tips: ['Gunakan untuk pengalaman, perubahan, atau aksi yang baru selesai'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I ___ never been to Korea.', questionId: 'I ___ never been to Korea.', answer: 'have', order: 1 },
                ],
            },
            {
                title: 'Past Perfect',
                titleId: 'Past Perfect',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'had finished', meaning: 'sudah selesai (lampau)', example: 'I had finished before he arrived.' },
                        { word: 'had never seen', meaning: 'belum pernah melihat', example: 'She had never seen snow.' },
                    ],
                    grammar: [
                        { pattern: 'had + past participle', explanation: 'Aksi sebelum aksi lampau lain', examples: ['I had eaten before they came.'] },
                    ],
                    tips: ['Gunakan untuk menunjukkan urutan waktu di masa lampau'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'She ___ already left when I arrived.', questionId: 'She ___ already left when I arrived.', answer: 'had', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Passive Voice
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Passive Voice',
        titleId: 'Kalimat Pasif',
        description: 'Master passive constructions',
        descriptionId: 'Kuasai konstruksi pasif',
        order: 2,
        canDo: {
            listening: 'Dapat memahami kalimat pasif',
            reading: 'Dapat membaca teks formal',
            speaking: 'Dapat menggunakan pasif dengan tepat',
            writing: 'Dapat menulis dengan struktur pasif'
        },
        lessons: [
            {
                title: 'Simple Passive',
                titleId: 'Pasif Sederhana',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'is made', meaning: 'dibuat', example: 'This product is made in Japan.' },
                        { word: 'was written', meaning: 'ditulis', example: 'The book was written in 1990.' },
                        { word: 'will be finished', meaning: 'akan selesai', example: 'It will be finished tomorrow.' },
                    ],
                    grammar: [
                        { pattern: 'be + past participle', explanation: 'Fokus pada objek, bukan pelaku', examples: ['The cake was eaten.', 'The report is being prepared.'] },
                    ],
                    tips: ['Gunakan pasif saat pelaku tidak penting atau tidak diketahui'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'The letter ___ sent yesterday.', questionId: 'The letter ___ sent yesterday.', answer: 'was', order: 1 },
                ],
            },
            {
                title: 'Passive with Modals',
                titleId: 'Pasif dengan Modals',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'can be done', meaning: 'bisa dilakukan', example: 'It can be done today.' },
                        { word: 'must be completed', meaning: 'harus diselesaikan', example: 'This must be completed.' },
                        { word: 'should be reviewed', meaning: 'sebaiknya ditinjau', example: 'The report should be reviewed.' },
                    ],
                    tips: ['Modal tidak berubah di pasif'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Harus diselesaikan" is?', questionId: '"Harus diselesaikan"?', options: ['must complete', 'must be completed', 'must completing', 'must to complete'], answer: 'must be completed', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Reported Speech
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Reported Speech',
        titleId: 'Kalimat Tidak Langsung',
        description: 'Report what others said',
        descriptionId: 'Melaporkan apa yang dikatakan orang lain',
        order: 3,
        canDo: {
            listening: 'Dapat memahami laporan percakapan',
            reading: 'Dapat membaca narasi dengan reported speech',
            speaking: 'Dapat melaporkan percakapan',
            writing: 'Dapat menulis dengan reported speech'
        },
        lessons: [
            {
                title: 'Reporting Statements',
                titleId: 'Melaporkan Pernyataan',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'He said that...', meaning: 'Dia bilang bahwa...', example: 'He said that he was tired.' },
                        { word: 'She told me that...', meaning: 'Dia memberitahu saya bahwa...', example: 'She told me that she would come.' },
                    ],
                    grammar: [
                        { pattern: 'Backshift tense', explanation: 'Present → Past, Past → Past Perfect', examples: ['"I am tired" → He said he was tired.'] },
                    ],
                    tips: ['say vs tell: tell + person, say (+ that)'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'He said he ___ tired. (is → ?)', questionId: 'He said he ___ tired.', answer: 'was', order: 1 },
                ],
            },
            {
                title: 'Reporting Questions',
                titleId: 'Melaporkan Pertanyaan',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'asked if/whether', meaning: 'bertanya apakah', example: 'She asked if I was coming.' },
                        { word: 'asked what/where/when', meaning: 'bertanya apa/di mana/kapan', example: 'He asked where I lived.' },
                    ],
                    grammar: [
                        { pattern: 'No question word order', explanation: 'Gunakan urutan kalimat biasa', examples: ['"Where do you live?" → He asked where I lived.'] },
                    ],
                    tips: ['Jangan pakai "did" di reported question'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Report: "Are you coming?"', questionId: 'Report: "Are you coming?"', options: ['He asked if I was coming', 'He asked was I coming', 'He asked if was I coming', 'He asked if I coming'], answer: 'He asked if I was coming', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Reading Comprehension
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Reading Comprehension',
        titleId: 'Pemahaman Bacaan',
        description: 'Improve reading skills',
        descriptionId: 'Tingkatkan keterampilan membaca',
        order: 4,
        canDo: {
            listening: 'Dapat memahami kuliah sederhana',
            reading: 'Dapat membaca artikel dan laporan',
            speaking: 'Dapat merangkum teks',
            writing: 'Dapat menulis ringkasan'
        },
        lessons: [
            {
                title: 'Linking Words',
                titleId: 'Kata Penghubung',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'however', meaning: 'namun', example: 'I tried. However, I failed.' },
                        { word: 'therefore', meaning: 'oleh karena itu', example: 'Therefore, we should act now.' },
                        { word: 'moreover', meaning: 'selain itu', example: 'Moreover, it is cost-effective.' },
                        { word: 'in contrast', meaning: 'sebaliknya', example: 'In contrast, Japan is small.' },
                    ],
                    tips: ['Linking words menunjukkan hubungan antar ide'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Namun" in English?', questionId: '"Namun" dalam Inggris?', options: ['therefore', 'however', 'moreover', 'because'], answer: 'however', order: 1 },
                ],
            },
            {
                title: 'Skimming & Scanning',
                titleId: 'Skimming & Scanning',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'main idea', meaning: 'ide utama', example: 'The main idea is in the first paragraph.' },
                        { word: 'supporting details', meaning: 'detail pendukung', example: '' },
                        { word: 'key words', meaning: 'kata kunci', example: 'Look for key words.' },
                    ],
                    tips: ['Skim untuk ide umum, scan untuk informasi spesifik'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___ for the main idea quickly.', questionId: '___ for the main idea quickly.', answer: 'Skim', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Business English
    {
        language: 'en',
        level: 'B1',
        localStandard: null,
        title: 'Business English',
        titleId: 'Bahasa Inggris Bisnis',
        description: 'Professional English for workplace',
        descriptionId: 'Bahasa Inggris profesional untuk tempat kerja',
        order: 5,
        canDo: {
            listening: 'Dapat memahami meeting',
            reading: 'Dapat membaca dokumen bisnis',
            speaking: 'Dapat presentasi',
            writing: 'Dapat menulis laporan'
        },
        lessons: [
            {
                title: 'Meeting Language',
                titleId: 'Bahasa Meeting',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'agenda', meaning: 'agenda', example: 'Let\'s go through the agenda.' },
                        { word: 'to summarize', meaning: 'merangkum', example: 'To summarize, we agreed on...' },
                        { word: 'action items', meaning: 'langkah tindakan', example: 'Here are the action items.' },
                    ],
                    tips: ['Selalu catat action items di akhir meeting'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Let\'s go through the ___.', questionId: 'Let\'s go through the ___.', answer: 'agenda', order: 1 },
                ],
            },
            {
                title: 'Negotiating',
                titleId: 'Negosiasi',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'I see your point, but...', meaning: 'Saya mengerti, tapi...', example: '' },
                        { word: 'What if we...?', meaning: 'Bagaimana kalau kita...?', example: 'What if we split the cost?' },
                        { word: 'That sounds reasonable', meaning: 'Kedengarannya masuk akal', example: '' },
                    ],
                    tips: ['Jangan langsung menolak - gunakan "I see your point"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite negotiation phrase?', questionId: 'Frase negosiasi sopan?', options: ['No way', 'I see your point, but...', 'That\'s wrong', 'I disagree'], answer: 'I see your point, but...', order: 1 },
                ],
            },
        ],
    },
];

export default englishB1Courses1to5;
