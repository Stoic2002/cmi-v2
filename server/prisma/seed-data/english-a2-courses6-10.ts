// English A2 Courses 6-10 - Travel, Shopping, Food, Social, Email/Phone
// CEFR Level A2

export const englishA2Courses6to10 = [
    // Course 6: Travel & Airport
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Travel & Airport',
        titleId: 'Perjalanan dan Bandara',
        description: 'Essential travel English',
        descriptionId: 'Bahasa Inggris perjalanan penting',
        order: 6,
        canDo: {
            listening: 'Dapat memahami pengumuman bandara',
            reading: 'Dapat membaca tiket dan boarding pass',
            speaking: 'Dapat berkomunikasi di bandara',
            writing: 'Dapat mengisi formulir imigrasi'
        },
        lessons: [
            {
                title: 'At the Airport',
                titleId: 'Di Bandara',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'boarding pass', meaning: 'boarding pass', example: 'Please show your boarding pass.' },
                        { word: 'gate', meaning: 'gerbang', example: 'Go to gate 15.' },
                        { word: 'delayed', meaning: 'tertunda', example: 'Your flight is delayed.' },
                        { word: 'departure/arrival', meaning: 'keberangkatan/kedatangan', example: 'Check the departure board.' },
                    ],
                    tips: ['Datang minimal 2 jam sebelum penerbangan internasional'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'The flight is ___. (tertunda)', questionId: 'The flight is ___.', answer: 'delayed', order: 1 },
                ],
            },
            {
                title: 'Immigration & Customs',
                titleId: 'Imigrasi dan Bea Cukai',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'Purpose of visit?', meaning: 'Tujuan kunjungan?', example: '' },
                        { word: 'I\'m here for work/holiday', meaning: 'Saya di sini untuk kerja/liburan', example: '' },
                        { word: 'How long will you stay?', meaning: 'Berapa lama tinggal?', example: '' },
                        { word: 'I have nothing to declare', meaning: 'Saya tidak ada barang untuk dideklarasi', example: '' },
                    ],
                    tips: ['Jawab dengan singkat dan jujur di imigrasi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Response to "Purpose of visit?"', questionId: 'Jawaban untuk "Purpose of visit?"', options: ['Yes', 'Work', 'Indonesia', 'Good'], answer: 'Work', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Shopping & Banking
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Shopping & Banking',
        titleId: 'Belanja dan Perbankan',
        description: 'Shopping and banking English',
        descriptionId: 'Bahasa Inggris belanja dan perbankan',
        order: 7,
        canDo: {
            listening: 'Dapat memahami transaksi',
            reading: 'Dapat membaca struk dan statement',
            speaking: 'Dapat berbelanja dan transaksi bank',
            writing: 'Dapat mengisi formulir bank'
        },
        lessons: [
            {
                title: 'Shopping Conversations',
                titleId: 'Percakapan Belanja',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'Do you have this in size...?', meaning: 'Ada ukuran...?', example: 'Do you have this in size medium?' },
                        { word: 'Can I try this on?', meaning: 'Boleh saya coba?', example: '' },
                        { word: 'I\'d like to return this', meaning: 'Saya mau kembalikan ini', example: '' },
                    ],
                    tips: ['Simpan struk untuk retur'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Can I ___ this on?', questionId: 'Can I ___ this on?', answer: 'try', order: 1 },
                ],
            },
            {
                title: 'At the Bank',
                titleId: 'Di Bank',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I\'d like to open an account', meaning: 'Saya mau buka rekening', example: '' },
                        { word: 'deposit/withdraw', meaning: 'setor/tarik', example: 'I\'d like to withdraw $100.' },
                        { word: 'transfer money', meaning: 'transfer uang', example: 'I need to transfer money.' },
                    ],
                    tips: ['Bawa ID dan dokumen alamat untuk buka rekening'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Setor uang" in English?', questionId: '"Setor uang" dalam Inggris?', options: ['withdraw', 'deposit', 'transfer', 'exchange'], answer: 'deposit', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Food & Restaurants
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Food & Restaurants',
        titleId: 'Makanan dan Restoran',
        description: 'Dining in English',
        descriptionId: 'Makan di restoran berbahasa Inggris',
        order: 8,
        canDo: {
            listening: 'Dapat memahami rekomendasi',
            reading: 'Dapat membaca menu lengkap',
            speaking: 'Dapat memesan dengan preferensi',
            writing: 'Dapat menulis review'
        },
        lessons: [
            {
                title: 'Ordering at a Restaurant',
                titleId: 'Memesan di Restoran',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I\'ll have the...', meaning: 'Saya pesan...', example: 'I\'ll have the chicken.' },
                        { word: 'What do you recommend?', meaning: 'Apa rekomendasinya?', example: '' },
                        { word: 'Can I get the bill?', meaning: 'Minta bill?', example: '' },
                        { word: 'Is service included?', meaning: 'Sudah termasuk servis?', example: '' },
                    ],
                    tips: ['Tip 15-20% di USA, service charge sudah termasuk di Australia'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I\'ll ___ the pasta.', questionId: 'I\'ll ___ the pasta.', answer: 'have', order: 1 },
                ],
            },
            {
                title: 'Dietary Requirements',
                titleId: 'Kebutuhan Diet',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I\'m allergic to...', meaning: 'Saya alergi...', example: 'I\'m allergic to nuts.' },
                        { word: 'Is this halal?', meaning: 'Apakah ini halal?', example: '' },
                        { word: 'No pork, please', meaning: 'Tanpa babi', example: '' },
                        { word: 'vegetarian/vegan', meaning: 'vegetarian/vegan', example: 'Do you have vegetarian options?' },
                    ],
                    tips: ['Selalu tanyakan bahan jika ada alergi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say you have allergy?', questionId: 'Bagaimana bilang punya alergi?', options: ['I don\'t like', 'I\'m allergic to', 'I can\'t', 'I won\'t'], answer: 'I\'m allergic to', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Social Interactions
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Social Interactions',
        titleId: 'Interaksi Sosial',
        description: 'Making friends and socializing',
        descriptionId: 'Berteman dan bersosialisasi',
        order: 9,
        canDo: {
            listening: 'Dapat memahami small talk',
            reading: 'Dapat membaca undangan',
            speaking: 'Dapat berbicara dengan teman baru',
            writing: 'Dapat menulis pesan sosial'
        },
        lessons: [
            {
                title: 'Small Talk',
                titleId: 'Obrolan Ringan',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'How\'s it going?', meaning: 'Apa kabar?', example: '' },
                        { word: 'What do you do?', meaning: 'Apa pekerjaanmu?', example: '' },
                        { word: 'Where are you from?', meaning: 'Kamu dari mana?', example: '' },
                        { word: 'Nice weather today!', meaning: 'Cuaca bagus hari ini!', example: '' },
                    ],
                    tips: ['Cuaca adalah topik small talk paling aman'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'How\'s it ___?', questionId: 'How\'s it ___?', answer: 'going', order: 1 },
                ],
            },
            {
                title: 'Making & Declining Invitations',
                titleId: 'Mengajak dan Menolak Undangan',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'Would you like to...?', meaning: 'Maukah kamu...?', example: 'Would you like to have coffee?' },
                        { word: 'I\'d love to!', meaning: 'Saya mau banget!', example: '' },
                        { word: 'Sorry, I can\'t make it', meaning: 'Maaf, saya tidak bisa', example: '' },
                        { word: 'Maybe next time', meaning: 'Mungkin lain kali', example: '' },
                    ],
                    tips: ['Tambahkan alasan saat menolak untuk lebih sopan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Accept invitation politely?', questionId: 'Terima undangan dengan sopan?', options: ['OK', 'Yes', 'I\'d love to!', 'Sure'], answer: 'I\'d love to!', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Email & Phone Calls
    {
        language: 'en',
        level: 'A2',
        localStandard: null,
        title: 'Email & Phone Calls',
        titleId: 'Email dan Telepon',
        description: 'Professional communication skills',
        descriptionId: 'Keterampilan komunikasi profesional',
        order: 10,
        canDo: {
            listening: 'Dapat memahami percakapan telepon',
            reading: 'Dapat membaca email bisnis',
            speaking: 'Dapat berkomunikasi via telepon',
            writing: 'Dapat menulis email profesional'
        },
        lessons: [
            {
                title: 'Writing Emails',
                titleId: 'Menulis Email',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'Dear Sir/Madam', meaning: 'Kepada Yth.', example: '' },
                        { word: 'I am writing to...', meaning: 'Saya menulis untuk...', example: 'I am writing to inquire about...' },
                        { word: 'Please find attached...', meaning: 'Terlampir...', example: '' },
                        { word: 'Best regards / Sincerely', meaning: 'Hormat saya', example: '' },
                    ],
                    tips: ['Mulai dengan salam, isi singkat, tutup dengan sopan'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I am ___ to inquire about...', questionId: 'I am ___ to inquire about...', answer: 'writing', order: 1 },
                ],
            },
            {
                title: 'Phone Conversations',
                titleId: 'Percakapan Telepon',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'This is [name] speaking', meaning: 'Ini [nama] berbicara', example: 'Hello, this is Ahmad speaking.' },
                        { word: 'May I speak to...?', meaning: 'Bisa bicara dengan...?', example: '' },
                        { word: 'Could you hold please?', meaning: 'Bisa tunggu sebentar?', example: '' },
                        { word: 'I\'ll call back later', meaning: 'Saya telepon lagi nanti', example: '' },
                    ],
                    tips: ['Bicara jelas dan pelan di telepon'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Professional phone greeting?', questionId: 'Salam telepon profesional?', options: ['Hello?', 'Yes?', 'This is Ahmad speaking', 'What?'], answer: 'This is Ahmad speaking', order: 1 },
                ],
            },
        ],
    },
];

export default englishA2Courses6to10;
