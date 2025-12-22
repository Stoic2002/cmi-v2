// Japanese C1 Courses 6-10 - Translation, Business Expert, Cultural Mastery, Kanji Expert, JLPT N1
// CEFR Level C1 (≈JLPT N1)

export const japaneseC1Courses6to10 = [
    // Course 6: Translation Skills
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: '翻訳スキル',
        titleId: 'Keterampilan Terjemahan',
        description: 'Master Japanese-Indonesian translation',
        descriptionId: 'Kuasai terjemahan Jepang-Indonesia',
        order: 6,
        canDo: {
            listening: 'Dapat menerjemahkan percakapan langsung',
            reading: 'Dapat menerjemahkan teks kompleks',
            speaking: 'Dapat melakukan interpretasi',
            writing: 'Dapat menerjemahkan dokumen formal'
        },
        lessons: [
            {
                title: '翻訳のテクニック',
                titleId: 'Teknik Terjemahan',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '意訳', romanization: 'iyaku', meaning: 'terjemahan bebas', example: '' },
                        { word: '直訳', romanization: 'chokuyaku', meaning: 'terjemahan literal', example: '' },
                        { word: 'ニュアンス', romanization: 'nyuansu', meaning: 'nuansa', example: '' },
                    ],
                    tips: ['Prioritaskan makna daripada kata per kata'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Free translation?', questionId: 'Terjemahan bebas?', options: ['直訳', '意訳', '翻訳', '通訳'], answer: '意訳', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Business Expert
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: 'ビジネスエキスパート',
        titleId: 'Ahli Bisnis',
        description: 'Expert-level business Japanese',
        descriptionId: 'Bahasa Jepang bisnis tingkat ahli',
        order: 7,
        canDo: {
            listening: 'Dapat memahami diskusi bisnis kompleks',
            reading: 'Dapat membaca kontrak dan laporan keuangan',
            speaking: 'Dapat memimpin meeting dan negosiasi',
            writing: 'Dapat menulis proposal dan kontrak'
        },
        lessons: [
            {
                title: '契約書の日本語',
                titleId: 'Bahasa Kontrak',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '甲・乙', romanization: 'kou / otsu', meaning: 'pihak pertama / kedua', example: '' },
                        { word: '〜ものとする', romanization: '~mono to suru', meaning: 'akan dianggap sebagai', example: '' },
                        { word: '〜に準じて', romanization: '~ni junjite', meaning: 'sesuai dengan', example: '' },
                    ],
                    tips: ['Kontrak Jepang sangat formal dan kaku'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '甲・___ (pihak kedua)', questionId: '甲・___', answer: '乙', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Cultural Mastery
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: '文化マスタリー',
        titleId: 'Penguasaan Budaya',
        description: 'Master nuances of Japanese culture',
        descriptionId: 'Kuasai nuansa budaya Jepang',
        order: 8,
        canDo: {
            listening: 'Dapat memahami humor dan referensi budaya',
            reading: 'Dapat membaca ironi dan satire',
            speaking: 'Dapat berkomunikasi dengan kesadaran budaya penuh',
            writing: 'Dapat menulis dengan sensitivitas budaya'
        },
        lessons: [
            {
                title: '日本人の価値観',
                titleId: 'Nilai-nilai Orang Jepang',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '義理と人情', romanization: 'giri to ninjou', meaning: 'kewajiban dan perasaan', example: '' },
                        { word: '恥の文化', romanization: 'haji no bunka', meaning: 'budaya malu', example: '' },
                        { word: '察する', romanization: 'sassuru', meaning: 'memahami tanpa dikatakan', example: '' },
                    ],
                    tips: ['察する = skill penting dalam komunikasi Jepang'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '義理と人___', questionId: '義理と人___', answer: '情', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Kanji Expert
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: '漢字エキスパート',
        titleId: 'Ahli Kanji',
        description: 'Master 2000+ kanji for N1',
        descriptionId: 'Kuasai 2000+ kanji untuk N1',
        order: 9,
        canDo: {
            listening: 'Dapat memahami kata dengan kanji jarang',
            reading: 'Dapat membaca teks dengan kanji N1',
            speaking: 'Dapat menggunakan kosakata kanji tingkat tinggi',
            writing: 'Dapat menulis dengan kanji kompleks'
        },
        lessons: [
            {
                title: '難読漢字',
                titleId: 'Kanji Sulit Dibaca',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '流石', romanization: 'sasuga', meaning: 'memang hebat', example: '' },
                        { word: '相応しい', romanization: 'fusawashii', meaning: 'sesuai/cocok', example: '' },
                        { word: '所謂', romanization: 'iwayuru', meaning: 'yang disebut', example: '' },
                    ],
                    tips: ['Banyak kanji N1 punya bacaan khusus'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Reading of 流石?', questionId: 'Bacaan 流石?', options: ['りゅうせき', 'さすが', 'ながれいし', 'るせき'], answer: 'さすが', order: 1 },
                ],
            },
        ],
    },

    // Course 10: JLPT N1 Mastery
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: 'JLPT N1完全対策',
        titleId: 'Persiapan Lengkap JLPT N1',
        description: 'Complete N1 exam preparation',
        descriptionId: 'Persiapan lengkap ujian N1',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab semua tipe soal listening N1',
            reading: 'Dapat menjawab semua tipe soal reading N1',
            speaking: 'Dapat menggunakan grammar N1 dengan lancar',
            writing: 'Dapat menulis dengan grammar N1'
        },
        lessons: [
            {
                title: 'N1文法総まとめ',
                titleId: 'Ringkasan Grammar N1',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '〜ともなると', romanization: '~to mo naru to', meaning: 'ketika mencapai level...', example: '社長ともなると責任が重い' },
                        { word: '〜をものともせず', romanization: '~wo mono to mo sezu', meaning: 'tanpa menghiraukan', example: '危険をものともせず助けた' },
                        { word: '〜ならいざ知らず', romanization: '~nara iza shirazu', meaning: 'mungkin OK untuk...tapi', example: '子供ならいざ知らず、大人が...' },
                    ],
                    tips: ['N1 grammar sangat nuanced dan formal'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '社長と___なると責任が重い', questionId: '社長と___なると', answer: 'も', order: 1 },
                ],
            },
            {
                title: 'N1読解のコツ',
                titleId: 'Tips Reading N1',
                order: 2, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '長文読解', romanization: 'choubun dokkai', meaning: 'reading panjang', example: '' },
                        { word: '情報検索', romanization: 'jouhou kensaku', meaning: 'pencarian informasi', example: '' },
                    ],
                    tips: ['Waktu: Vocab/Grammar 60min, Reading 70min'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'N1 total time?', questionId: 'Total waktu N1?', options: ['110分', '130分', '155分', '170分'], answer: '170分', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseC1Courses6to10;
