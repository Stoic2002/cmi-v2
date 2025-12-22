// Japanese B1 Courses 6-10 - News, Opinions, Kanji, Culture, JLPT
// CEFR Level B1 (≈JLPT N3)

export const japaneseB1Courses6to10 = [
    // Course 6: News & Media
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: 'ニュースとメディア',
        titleId: 'Berita dan Media',
        description: 'Understanding Japanese news and media',
        descriptionId: 'Memahami berita dan media Jepang',
        order: 6,
        canDo: {
            listening: 'Dapat memahami berita sederhana',
            reading: 'Dapat membaca artikel berita',
            speaking: 'Dapat membahas berita',
            writing: 'Dapat menulis ringkasan berita'
        },
        lessons: [
            {
                title: 'ニュースの言葉',
                titleId: 'Kosakata Berita',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '発表', romanization: 'happyou', meaning: 'pengumuman', example: '政府が発表した' },
                        { word: '事故', romanization: 'jiko', meaning: 'kecelakaan', example: '交通事故がありました' },
                        { word: '調査', romanization: 'chousa', meaning: 'investigasi', example: '警察が調査中です' },
                        { word: '影響', romanization: 'eikyou', meaning: 'dampak', example: '経済に影響がある' },
                    ],
                    tips: ['Berita Jepang menggunakan banyak kata Sino-Japanese (on-yomi)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 事故?', questionId: 'Apa 事故?', options: ['Peristiwa', 'Kecelakaan', 'Berita', 'Cuaca'], answer: 'Kecelakaan', order: 1 },
                ],
            },
            {
                title: 'ニュースを読む',
                titleId: 'Membaca Berita',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '〜によると', romanization: '~ni yoru to', meaning: 'menurut...', example: 'NHKによると...' },
                        { word: '〜と見られる', romanization: '~to mirareru', meaning: 'diduga...', example: '台風の影響と見られる' },
                        { word: '〜ことが分かった', romanization: '~koto ga wakatta', meaning: 'diketahui bahwa', example: '原因が分かった' },
                    ],
                    tips: ['Berita sering pakai bentuk pasif dan potential'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'NHK___よると (menurut)', questionId: 'NHK___よると', answer: 'に', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Expressing Opinions
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: '意見を表現する',
        titleId: 'Mengekspresikan Pendapat',
        description: 'Express opinions and arguments',
        descriptionId: 'Mengekspresikan pendapat dan argumen',
        order: 7,
        canDo: {
            listening: 'Dapat memahami argumen',
            reading: 'Dapat membaca opini',
            speaking: 'Dapat berdiskusi',
            writing: 'Dapat menulis esai pendapat'
        },
        lessons: [
            {
                title: '意見を言う',
                titleId: 'Menyampaikan Pendapat',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '〜と思います', romanization: '~to omoimasu', meaning: 'saya pikir', example: '良いと思います' },
                        { word: '私の意見では', romanization: 'watashi no iken dewa', meaning: 'menurut pendapat saya', example: '' },
                        { word: '〜ではないでしょうか', romanization: '~dewa nai deshou ka', meaning: 'bukankah...?', example: '問題ではないでしょうか' },
                    ],
                    tips: ['〜ではないでしょうか adalah cara halus menyatakan pendapat'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '良い___思います', questionId: '良い___思います', answer: 'と', order: 1 },
                ],
            },
            {
                title: '賛成と反対',
                titleId: 'Setuju dan Tidak Setuju',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'おっしゃる通りです', romanization: 'ossharu toori desu', meaning: 'Anda benar', example: '' },
                        { word: '一理あります', romanization: 'ichiri arimasu', meaning: 'ada benarnya', example: '' },
                        { word: '〜とは限らない', romanization: '~to wa kagiranai', meaning: 'belum tentu', example: '成功するとは限らない' },
                    ],
                    tips: ['Jangan langsung bilang 違います - terlalu direct'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite "you are right"?', questionId: 'Sopan untuk "Anda benar"?', options: ['そうだね', 'おっしゃる通りです', '正解', 'いいよ'], answer: 'おっしゃる通りです', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Kanji Intermediate
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: '漢字中級',
        titleId: 'Kanji Menengah',
        description: 'Learn 300 intermediate kanji',
        descriptionId: 'Pelajari 300 kanji menengah',
        order: 8,
        canDo: {
            listening: 'Dapat memahami kata dengan kanji N3',
            reading: 'Dapat membaca teks dengan kanji menengah',
            speaking: 'Dapat menggunakan kata kanji',
            writing: 'Dapat menulis kanji dasar'
        },
        lessons: [
            {
                title: '動詞の漢字',
                titleId: 'Kanji Kata Kerja',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '届く', romanization: 'todoku', meaning: 'sampai', example: '荷物が届いた' },
                        { word: '届ける', romanization: 'todokeru', meaning: 'mengantar', example: '届けてください' },
                        { word: '決める', romanization: 'kimeru', meaning: 'memutuskan', example: '日程を決める' },
                        { word: '決まる', romanization: 'kimaru', meaning: 'diputuskan', example: '会議の日が決まった' },
                    ],
                    tips: ['Banyak kanji punya bentuk transitif dan intransitif'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '届く means?', questionId: '届く artinya?', options: ['Mengantar', 'Sampai', 'Pergi', 'Datang'], answer: 'Sampai', order: 1 },
                ],
            },
            {
                title: '形容詞の漢字',
                titleId: 'Kanji Kata Sifat',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '正しい', romanization: 'tadashii', meaning: 'benar', example: '正しい答え' },
                        { word: '珍しい', romanization: 'mezurashii', meaning: 'langka/unik', example: '珍しい経験' },
                        { word: '厳しい', romanization: 'kibishii', meaning: 'ketat/keras', example: '厳しい先生' },
                    ],
                    tips: ['Banyak adjektif -i berakhiran しい'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___しい先生 (ketat)', questionId: '___しい先生', answer: '厳', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Japanese Culture
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: '日本文化',
        titleId: 'Budaya Jepang',
        description: 'Understanding Japanese culture',
        descriptionId: 'Memahami budaya Jepang',
        order: 9,
        canDo: {
            listening: 'Dapat memahami tentang budaya',
            reading: 'Dapat membaca tentang tradisi',
            speaking: 'Dapat berbicara tentang budaya',
            writing: 'Dapat menulis tentang pengalaman budaya'
        },
        lessons: [
            {
                title: '年中行事 (Annual Events)',
                titleId: 'Perayaan Tahunan',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '正月', romanization: 'shougatsu', meaning: 'Tahun Baru', example: '正月に実家に帰る' },
                        { word: '花見', romanization: 'hanami', meaning: 'melihat sakura', example: '花見に行きましょう' },
                        { word: 'お盆', romanization: 'obon', meaning: 'festival leluhur', example: 'お盆は休みです' },
                    ],
                    tips: ['Banyak perusahaan tutup saat 正月 dan お盆'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 花見?', questionId: 'Apa 花見?', options: ['Melihat bunga', 'Melihat sakura', 'Melihat bulan', 'Melihat salju'], answer: 'Melihat sakura', order: 1 },
                ],
            },
            {
                title: 'マナーと習慣',
                titleId: 'Tata Krama dan Kebiasaan',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '名刺交換', romanization: 'meishi koukan', meaning: 'tukar kartu nama', example: '' },
                        { word: 'お辞儀', romanization: 'ojigi', meaning: 'membungkuk', example: '' },
                        { word: '空気を読む', romanization: 'kuuki wo yomu', meaning: 'baca situasi', example: '空気を読んでください' },
                    ],
                    tips: ['空気を読む sangat penting dalam budaya Jepang'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '空気を___む (read the room)', questionId: '空気を___む', answer: '読', order: 1 },
                ],
            },
        ],
    },

    // Course 10: JLPT N3 Preparation
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: 'JLPT N3対策',
        titleId: 'Persiapan JLPT N3',
        description: 'Prepare for JLPT N3 exam',
        descriptionId: 'Persiapan ujian JLPT N3',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab soal listening N3',
            reading: 'Dapat menjawab soal reading N3',
            speaking: 'Dapat menggunakan grammar N3',
            writing: 'Dapat menulis dengan grammar N3'
        },
        lessons: [
            {
                title: 'N3文法まとめ',
                titleId: 'Ringkasan Tata Bahasa N3',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '〜ようにする', romanization: '~you ni suru', meaning: 'berusaha untuk', example: '毎日勉強するようにしている' },
                        { word: '〜ことになる', romanization: '~koto ni naru', meaning: 'diputuskan bahwa', example: '来月引っ越すことになった' },
                        { word: '〜わけではない', romanization: '~wake dewa nai', meaning: 'bukan berarti', example: '嫌いなわけではない' },
                    ],
                    tips: ['Hafalkan grammar N3 beserta contoh kalimat'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '毎日運動する___にしている', questionId: '毎日運動する___にしている', answer: 'よう', order: 1 },
                ],
            },
            {
                title: '試験テクニック',
                titleId: 'Teknik Ujian',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '時間配分', romanization: 'jikan haibun', meaning: 'pembagian waktu', example: '' },
                        { word: '消去法', romanization: 'shoukyohou', meaning: 'eliminasi', example: '' },
                        { word: '見直す', romanization: 'minaosu', meaning: 'mengecek ulang', example: '答えを見直す' },
                    ],
                    tips: ['Reading: 文字・語彙 (25 min), 文法 (25 min), 読解 (50 min)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'JLPT sections?', questionId: 'Bagian JLPT?', options: ['2', '3', '4', '5'], answer: '3', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseB1Courses6to10;
