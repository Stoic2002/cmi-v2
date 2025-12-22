// English A2 Courses 1-5 - Tenses, Conversations, Work
// CEFR Level A2

export const englishA2Courses1to5 = [
    // Course 1: Present Tenses
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Present Tenses',
        titleId: 'Tenses Present',
        description: 'Master present simple and present continuous',
        descriptionId: 'Kuasai simple present dan present continuous',
        order: 1,
        canDo: {
            listening: 'Dapat memahami kalimat present',
            reading: 'Dapat membaca teks tentang rutinitas',
            speaking: 'Dapat berbicara tentang kebiasaan',
            writing: 'Dapat menulis tentang rutinitas harian'
        },
        lessons: [
            {
                title: 'Simple Present',
                titleId: 'Simple Present',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I work every day', meaning: 'Saya bekerja setiap hari', example: '' },
                        { word: 'She goes to school', meaning: 'Dia pergi ke sekolah', example: '' },
                        { word: 'They don\'t eat meat', meaning: 'Mereka tidak makan daging', example: '' },
                    ],
                    grammar: [
                        { pattern: 'I/You/We/They + verb', explanation: 'Untuk rutinitas', examples: ['I work here.', 'They live in Jakarta.'] },
                        { pattern: 'He/She/It + verb+s', explanation: 'Tambah -s untuk orang ketiga', examples: ['She works here.', 'He lives in Jakarta.'] },
                    ],
                    tips: ['Gunakan untuk kebiasaan, fakta, dan jadwal'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'She ___ to work every day. (go)', questionId: 'She ___ to work every day.', answer: 'goes', order: 1 },
                ],
            },
            {
                title: 'Present Continuous',
                titleId: 'Present Continuous',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I am working now', meaning: 'Saya sedang bekerja sekarang', example: '' },
                        { word: 'She is cooking dinner', meaning: 'Dia sedang memasak makan malam', example: '' },
                        { word: 'They are studying English', meaning: 'Mereka sedang belajar Inggris', example: '' },
                    ],
                    grammar: [
                        { pattern: 'am/is/are + verb-ing', explanation: 'Untuk aksi yang sedang berlangsung', examples: ['I am eating.', 'She is sleeping.'] },
                    ],
                    tips: ['Gunakan untuk yang terjadi SEKARANG'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'He ___ watching TV now. (be)', questionId: 'He ___ watching TV now.', answer: 'is', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Past Tenses
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Past Tenses',
        titleId: 'Tenses Lampau',
        description: 'Master simple past and past continuous',
        descriptionId: 'Kuasai simple past dan past continuous',
        order: 2,
        canDo: {
            listening: 'Dapat memahami cerita lampau',
            reading: 'Dapat membaca narasi',
            speaking: 'Dapat menceritakan pengalaman',
            writing: 'Dapat menulis cerita'
        },
        lessons: [
            {
                title: 'Simple Past - Regular Verbs',
                titleId: 'Simple Past - Kata Kerja Beraturan',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'worked', meaning: 'bekerja (lampau)', example: 'I worked yesterday.' },
                        { word: 'watched', meaning: 'menonton (lampau)', example: 'She watched a movie.' },
                        { word: 'played', meaning: 'bermain (lampau)', example: 'They played football.' },
                    ],
                    grammar: [
                        { pattern: 'verb + ed', explanation: 'Bentuk lampau beraturan', examples: ['walk → walked', 'play → played', 'watch → watched'] },
                    ],
                    tips: ['Pengucapan -ed: /t/ (watched), /d/ (played), /id/ (wanted)'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I ___ TV last night. (watch)', questionId: 'I ___ TV last night.', answer: 'watched', order: 1 },
                ],
            },
            {
                title: 'Simple Past - Irregular Verbs',
                titleId: 'Simple Past - Kata Kerja Tidak Beraturan',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'went', meaning: 'pergi (lampau)', example: 'I went to work.' },
                        { word: 'ate', meaning: 'makan (lampau)', example: 'She ate breakfast.' },
                        { word: 'saw', meaning: 'melihat (lampau)', example: 'They saw a movie.' },
                        { word: 'came', meaning: 'datang (lampau)', example: 'He came late.' },
                        { word: 'made', meaning: 'membuat (lampau)', example: 'I made dinner.' },
                    ],
                    tips: ['Irregular verbs harus dihafal - tidak ada aturan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Past of "go"?', questionId: 'Past dari "go"?', options: ['goed', 'went', 'gone', 'going'], answer: 'went', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Future & Conditionals
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Future & Conditionals',
        titleId: 'Masa Depan & Kondisional',
        description: 'Talking about the future and conditions',
        descriptionId: 'Berbicara tentang masa depan dan kondisi',
        order: 3,
        canDo: {
            listening: 'Dapat memahami rencana dan prediksi',
            reading: 'Dapat membaca tentang rencana',
            speaking: 'Dapat berbicara tentang masa depan',
            writing: 'Dapat menulis rencana'
        },
        lessons: [
            {
                title: 'Will & Going to',
                titleId: 'Will dan Going to',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I will help you', meaning: 'Saya akan membantu', example: '' },
                        { word: 'She is going to study', meaning: 'Dia akan belajar', example: '' },
                        { word: 'It will rain tomorrow', meaning: 'Akan hujan besok', example: '' },
                    ],
                    grammar: [
                        { pattern: 'will + verb', explanation: 'Keputusan spontan, prediksi', examples: ['I will call you later.'] },
                        { pattern: 'going to + verb', explanation: 'Rencana, niat', examples: ['I am going to visit Japan.'] },
                    ],
                    tips: ['Will = keputusan saat itu, Going to = rencana sebelumnya'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I ___ call you later.', questionId: 'I ___ call you later.', answer: 'will', order: 1 },
                ],
            },
            {
                title: 'If Conditionals (Type 0 & 1)',
                titleId: 'Kalimat If (Tipe 0 & 1)',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'If it rains, I stay home', meaning: 'Kalau hujan, saya di rumah', example: '(Type 0 - fakta)' },
                        { word: 'If it rains, I will stay home', meaning: 'Kalau hujan, saya akan di rumah', example: '(Type 1 - kemungkinan)' },
                    ],
                    grammar: [
                        { pattern: 'If + present, present', explanation: 'Type 0: Fakta umum', examples: ['If water boils, it evaporates.'] },
                        { pattern: 'If + present, will + verb', explanation: 'Type 1: Kemungkinan nyata', examples: ['If I have time, I will help.'] },
                    ],
                    tips: ['Jangan pakai "will" di klausa if'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'If it rains, I ___ stay home.', questionId: 'If it rains, I ___ stay home.', options: ['am', 'will', 'would', 'do'], answer: 'will', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Daily Conversations
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Daily Conversations',
        titleId: 'Percakapan Sehari-hari',
        description: 'Natural everyday conversations',
        descriptionId: 'Percakapan sehari-hari yang natural',
        order: 4,
        canDo: {
            listening: 'Dapat memahami percakapan santai',
            reading: 'Dapat membaca dialog',
            speaking: 'Dapat berbicara dalam situasi harian',
            writing: 'Dapat menulis pesan chat'
        },
        lessons: [
            {
                title: 'Making Plans',
                titleId: 'Membuat Rencana',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'Are you free tomorrow?', meaning: 'Kamu free besok?', example: '' },
                        { word: 'Let\'s meet at 3', meaning: 'Ketemu jam 3 yuk', example: '' },
                        { word: 'That works for me', meaning: 'Ok, bisa', example: '' },
                        { word: 'I can\'t make it', meaning: 'Saya tidak bisa datang', example: '' },
                    ],
                    tips: ['Gunakan "Let\'s" untuk mengajak'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___ meet at the cafe.', questionId: '___ meet at the cafe.', answer: 'Let\'s', order: 1 },
                ],
            },
            {
                title: 'Giving Opinions',
                titleId: 'Memberikan Pendapat',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I think...', meaning: 'Saya pikir...', example: 'I think it\'s a good idea.' },
                        { word: 'In my opinion...', meaning: 'Menurut saya...', example: 'In my opinion, we should wait.' },
                        { word: 'I agree/disagree', meaning: 'Saya setuju/tidak setuju', example: '' },
                    ],
                    tips: ['Gunakan "I think" untuk pendapat lebih santai'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite way to give opinion?', questionId: 'Cara sopan memberikan pendapat?', options: ['You should', 'I think', 'You must', 'It\'s'], answer: 'I think', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Work Communication
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Work Communication',
        titleId: 'Komunikasi Kerja',
        description: 'Professional workplace English',
        descriptionId: 'Bahasa Inggris profesional di tempat kerja',
        order: 5,
        canDo: {
            listening: 'Dapat memahami instruksi kerja',
            reading: 'Dapat membaca email bisnis',
            speaking: 'Dapat berkomunikasi profesional',
            writing: 'Dapat menulis email kerja'
        },
        lessons: [
            {
                title: 'Reporting Progress',
                titleId: 'Melaporkan Progres',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'I have completed...', meaning: 'Saya sudah menyelesaikan...', example: '' },
                        { word: 'I am working on...', meaning: 'Saya sedang mengerjakan...', example: '' },
                        { word: 'There is a problem with...', meaning: 'Ada masalah dengan...', example: '' },
                    ],
                    tips: ['Present perfect untuk hasil (I have finished)'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I ___ completed the report.', questionId: 'I ___ completed the report.', answer: 'have', order: 1 },
                ],
            },
            {
                title: 'Making Polite Requests',
                titleId: 'Membuat Permintaan Sopan',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'Could you please...?', meaning: 'Bisakah Anda...?', example: 'Could you please send the file?' },
                        { word: 'Would you mind...?', meaning: 'Apakah Anda keberatan...?', example: 'Would you mind helping me?' },
                        { word: 'I would appreciate it if...', meaning: 'Saya sangat berterima kasih jika...', example: '' },
                    ],
                    tips: ['"Would you mind" dijawab dengan "No" jika oke'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Most polite request?', questionId: 'Permintaan paling sopan?', options: ['Send the file', 'Can you send', 'Could you please send', 'You should send'], answer: 'Could you please send', order: 1 },
                ],
            },
        ],
    },
];

export default englishA2Courses1to5;
