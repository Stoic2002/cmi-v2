// Japanese C2 Courses 6-10 - Interpretation, Dialect Mastery, Media Production, Kanji Mastery, Cultural Ambassador
// CEFR Level C2 (Native-like Proficiency)

export const japaneseC2Courses6to10 = [
    // Course 6: Interpretation & Simultaneous Translation
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: '通訳・同時通訳',
        titleId: 'Interpretasi & Penerjemahan Simultan',
        description: 'Master interpretation skills',
        descriptionId: 'Kuasai keterampilan interpretasi',
        order: 6,
        canDo: {
            listening: 'Dapat menerjemahkan secara simultan',
            reading: 'Dapat sight-translate dokumen',
            speaking: 'Dapat menerjemahkan dengan akurasi tinggi',
            writing: 'Dapat menyiapkan glosarium'
        },
        lessons: [
            {
                title: '同時通訳テクニック',
                titleId: 'Teknik Penerjemahan Simultan',
                order: 1, xpReward: 60,
                content: {
                    vocabulary: [
                        { word: 'シャドーイング', romanization: 'shadouingu', meaning: 'shadowing', example: '' },
                        { word: 'ラグ', romanization: 'ragu', meaning: 'lag/delay', example: '' },
                        { word: '訳出', romanization: 'yakushutsu', meaning: 'menerjemahkan ke luar', example: '' },
                    ],
                    tips: ['Latihan: shadowing berita NHK setiap hari'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'シャドー___ング', questionId: 'シャドー___ング', answer: 'イ', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Dialect Mastery
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: '方言マスタリー',
        titleId: 'Penguasaan Dialek',
        description: 'Understand major Japanese dialects',
        descriptionId: 'Memahami dialek utama Jepang',
        order: 7,
        canDo: {
            listening: 'Dapat memahami berbagai dialek',
            reading: 'Dapat membaca teks dalam dialek',
            speaking: 'Dapat menggunakan dialek dengan tepat',
            writing: 'Dapat menulis dialog dalam dialek'
        },
        lessons: [
            {
                title: '関西弁入門',
                titleId: 'Pengantar Dialek Kansai',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'なんでやねん', romanization: 'nande ya nen', meaning: 'mengapa sih? (Kansai)', example: '' },
                        { word: 'めっちゃ', romanization: 'metcha', meaning: 'sangat (Kansai)', example: '' },
                        { word: 'おおきに', romanization: 'ookini', meaning: 'terima kasih (Kansai)', example: '' },
                    ],
                    tips: ['Kansai-ben: dialek paling terkenal, sering di TV'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Kansai "thank you"?', questionId: 'Kansai "terima kasih"?', options: ['ありがとう', 'おおきに', 'どうも', 'サンキュー'], answer: 'おおきに', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Media Production
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: 'メディア制作',
        titleId: 'Produksi Media',
        description: 'Create content in Japanese',
        descriptionId: 'Membuat konten dalam Bahasa Jepang',
        order: 8,
        canDo: {
            listening: 'Dapat memahami berbagai gaya media',
            reading: 'Dapat membaca skrip media',
            speaking: 'Dapat menjadi narator',
            writing: 'Dapat menulis konten media'
        },
        lessons: [
            {
                title: '動画コンテンツ作成',
                titleId: 'Pembuatan Konten Video',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'サムネイル', romanization: 'samuneiru', meaning: 'thumbnail', example: '' },
                        { word: '台本', romanization: 'daihon', meaning: 'skrip', example: '' },
                        { word: '編集', romanization: 'henshuu', meaning: 'editing', example: '' },
                    ],
                    tips: ['YouTube Jepang: gaya bahasa lebih kasual dari TV'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___本 (skrip)', questionId: '___本', answer: '台', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Kanji Complete Mastery
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: '漢字完全マスター',
        titleId: 'Penguasaan Kanji Lengkap',
        description: 'Master 3000+ kanji',
        descriptionId: 'Kuasai 3000+ kanji',
        order: 9,
        canDo: {
            listening: 'Dapat memahami kata dengan kanji langka',
            reading: 'Dapat membaca teks klasik dan teknis',
            speaking: 'Dapat menggunakan kosakata kanji langka',
            writing: 'Dapat menulis dengan kanji yang jarang'
        },
        lessons: [
            {
                title: '常用外漢字',
                titleId: 'Kanji di Luar Jouyou',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '薔薇', romanization: 'bara', meaning: 'mawar', example: '' },
                        { word: '躊躇', romanization: 'chuucho', meaning: 'ragu-ragu', example: '' },
                        { word: '鬱', romanization: 'utsu', meaning: 'depresi', example: '' },
                    ],
                    tips: ['Kanji ini tidak wajib tapi umum ditemui'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Reading of 薔薇?', questionId: 'Bacaan 薔薇?', options: ['しょうび', 'ばら', 'そうび', 'はら'], answer: 'ばら', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Cultural Ambassador
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: '文化大使',
        titleId: 'Duta Budaya',
        description: 'Bridge cultures through Japanese',
        descriptionId: 'Menjembatani budaya melalui Bahasa Jepang',
        order: 10,
        canDo: {
            listening: 'Dapat memahami nuansa budaya yang dalam',
            reading: 'Dapat membaca konteks budaya implisit',
            speaking: 'Dapat menjelaskan budaya dengan presisi',
            writing: 'Dapat menulis tentang pertukaran budaya'
        },
        lessons: [
            {
                title: '異文化間コミュニケーション',
                titleId: 'Komunikasi Antarbudaya',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '異文化理解', romanization: 'ibunka rikai', meaning: 'pemahaman lintas budaya', example: '' },
                        { word: '文化的な橋渡し', romanization: 'bunkateki na hashiwatashi', meaning: 'menjembatani budaya', example: '' },
                    ],
                    tips: ['Jadi jembatan: jelaskan "mengapa" bukan hanya "apa"'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '異___化理解', questionId: '異___化理解', answer: '文', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseC2Courses6to10;
