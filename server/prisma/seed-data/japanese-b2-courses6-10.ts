// Japanese B2 Courses 6-10 - Debate, Technical, Culture Advanced, Kanji Advanced, JLPT N2
// CEFR Level B2 (≈JLPT N2)

export const japaneseB2Courses6to10 = [
    // Course 6: Debate & Discussion
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: '討論と議論',
        titleId: 'Debat dan Diskusi',
        description: 'Debate and discuss complex topics',
        descriptionId: 'Berdebat dan mendiskusikan topik kompleks',
        order: 6,
        canDo: {
            listening: 'Dapat memahami argumen kompleks',
            reading: 'Dapat membaca teks argumentatif',
            speaking: 'Dapat berdebat secara efektif',
            writing: 'Dapat menulis argumen terstruktur'
        },
        lessons: [
            {
                title: '議論の進め方',
                titleId: 'Memimpin Diskusi',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '〜という見方もある', romanization: '~to iu mikata mo aru', meaning: 'ada juga pandangan bahwa', example: '' },
                        { word: '一概には言えない', romanization: 'ichigai ni wa ienai', meaning: 'tidak bisa digeneralisasi', example: '' },
                        { word: '〜とは限らない', romanization: '~to wa kagiranai', meaning: 'belum tentu', example: '成功するとは限らない' },
                    ],
                    tips: ['Hindari pernyataan absolut dalam diskusi Jepang'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '一概には___ない', questionId: '一概には___ない', answer: '言え', order: 1 },
                ],
            },
            {
                title: '反論の仕方',
                titleId: 'Cara Membantah',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'おっしゃることは分かりますが', romanization: 'ossharu koto wa wakarimasu ga', meaning: 'saya mengerti maksud Anda, tapi', example: '' },
                        { word: '確かに〜。しかし〜', romanization: 'tashika ni~. shikashi~', meaning: 'memang~. tapi~', example: '' },
                    ],
                    tips: ['Selalu akui dulu sebelum membantah'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite way to disagree?', questionId: 'Cara sopan tidak setuju?', options: ['違います', 'おっしゃることは分かりますが', 'それは間違いです', 'ダメです'], answer: 'おっしゃることは分かりますが', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Technical Japanese
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: '専門日本語',
        titleId: 'Bahasa Jepang Teknis',
        description: 'Technical and specialized vocabulary',
        descriptionId: 'Kosakata teknis dan khusus',
        order: 7,
        canDo: {
            listening: 'Dapat memahami penjelasan teknis',
            reading: 'Dapat membaca manual dan spesifikasi',
            speaking: 'Dapat menjelaskan proses teknis',
            writing: 'Dapat menulis dokumentasi teknis'
        },
        lessons: [
            {
                title: 'IT用語',
                titleId: 'Istilah IT',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '実装', romanization: 'jissou', meaning: 'implementasi', example: '新機能を実装する' },
                        { word: '開発環境', romanization: 'kaihatsu kankyou', meaning: 'development environment', example: '' },
                        { word: '不具合', romanization: 'fuguai', meaning: 'bug/masalah', example: '不具合を修正する' },
                    ],
                    tips: ['Banyak istilah IT memakai katakana dari bahasa Inggris'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 不具合?', questionId: 'Apa 不具合?', options: ['Fitur', 'Bug', 'Update', 'Release'], answer: 'Bug', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Japanese Culture Advanced
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: '日本文化上級',
        titleId: 'Budaya Jepang Lanjutan',
        description: 'Deep understanding of Japanese culture',
        descriptionId: 'Pemahaman mendalam budaya Jepang',
        order: 8,
        canDo: {
            listening: 'Dapat memahami diskusi budaya',
            reading: 'Dapat membaca tentang sejarah dan tradisi',
            speaking: 'Dapat mendiskusikan nuansa budaya',
            writing: 'Dapat menulis analisis budaya'
        },
        lessons: [
            {
                title: '日本社会の特徴',
                titleId: 'Karakteristik Masyarakat Jepang',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '本音と建前', romanization: 'honne to tatemae', meaning: 'perasaan sebenarnya vs tampilan', example: '' },
                        { word: '空気を読む', romanization: 'kuuki wo yomu', meaning: 'membaca situasi', example: '空気を読んで行動する' },
                        { word: '和', romanization: 'wa', meaning: 'harmoni', example: '和を重んじる' },
                    ],
                    tips: ['Memahami konsep ini kunci untuk tinggal di Jepang'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '本音と___前', questionId: '本音と___前', answer: '建', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Kanji Advanced
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: '漢字上級',
        titleId: 'Kanji Lanjutan',
        description: 'Master N2 level kanji (1000+ characters)',
        descriptionId: 'Kuasai kanji level N2 (1000+ karakter)',
        order: 9,
        canDo: {
            listening: 'Dapat memahami kata dengan kanji sulit',
            reading: 'Dapat membaca teks dengan kanji N2',
            speaking: 'Dapat menggunakan kata kanji kompleks',
            writing: 'Dapat menulis dengan kanji lanjutan'
        },
        lessons: [
            {
                title: '抽象的な漢字',
                titleId: 'Kanji Abstrak',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '概念', romanization: 'gainen', meaning: 'konsep', example: '' },
                        { word: '傾向', romanization: 'keikou', meaning: 'kecenderungan', example: '' },
                        { word: '領域', romanization: 'ryouiki', meaning: 'domain/area', example: '' },
                        { word: '要因', romanization: 'youin', meaning: 'faktor', example: '' },
                    ],
                    tips: ['Kanji abstrak sering muncul di teks akademik'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 傾向?', questionId: 'Apa 傾向?', options: ['Konsep', 'Kecenderungan', 'Faktor', 'Area'], answer: 'Kecenderungan', order: 1 },
                ],
            },
        ],
    },

    // Course 10: JLPT N2 Preparation
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: 'JLPT N2対策',
        titleId: 'Persiapan JLPT N2',
        description: 'Comprehensive N2 exam preparation',
        descriptionId: 'Persiapan komprehensif ujian N2',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab soal listening N2',
            reading: 'Dapat menjawab soal reading N2',
            speaking: 'Dapat menggunakan grammar N2',
            writing: 'Dapat menulis dengan grammar N2'
        },
        lessons: [
            {
                title: 'N2文法総まとめ',
                titleId: 'Ringkasan Grammar N2',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '〜っぱなし', romanization: '~ppanashi', meaning: 'dibiarkan', example: 'ドアを開けっぱなしにする' },
                        { word: '〜かねない', romanization: '~kanenai', meaning: 'mungkin saja (negatif)', example: '事故になりかねない' },
                        { word: '〜ないことには', romanization: '~nai koto ni wa', meaning: 'jika tidak...', example: 'やってみないことには分からない' },
                    ],
                    tips: ['Fokus pada grammar yang sering keluar di N2'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'ドアを開け___にする', questionId: 'ドアを開け___にする', answer: 'っぱなし', order: 1 },
                ],
            },
            {
                title: '読解ストラテジー',
                titleId: 'Strategi Reading',
                order: 2, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '筆者の主張', romanization: 'hissha no shuchou', meaning: 'argumen penulis', example: '' },
                        { word: '指示語', romanization: 'shijigo', meaning: 'kata penunjuk', example: '' },
                    ],
                    tips: ['Perhatikan これ・それ・あれ - sering ditanya referensinya'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'N2 reading time?', questionId: 'Waktu reading N2?', options: ['30 min', '60 min', '70 min', '90 min'], answer: '70 min', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseB2Courses6to10;
