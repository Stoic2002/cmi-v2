// Japanese C1 Courses 1-5 - Advanced Academic, Literary Analysis, Media Analysis, Specialized Vocab, Research
// CEFR Level C1 (≈JLPT N1)

export const japaneseC1Courses1to5 = [
    // Course 1: Advanced Academic Japanese
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: '学術日本語上級',
        titleId: 'Bahasa Jepang Akademik Lanjutan',
        description: 'Academic Japanese for research and publications',
        descriptionId: 'Bahasa Jepang akademik untuk riset dan publikasi',
        order: 1,
        canDo: {
            listening: 'Dapat memahami kuliah dan presentasi akademik yang kompleks',
            reading: 'Dapat membaca jurnal akademik dan paper penelitian',
            speaking: 'Dapat mempresentasikan penelitian dengan lancar',
            writing: 'Dapat menulis paper akademik dengan standar tinggi'
        },
        lessons: [
            {
                title: '学術論文の書き方',
                titleId: 'Cara Menulis Paper Akademik',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '先行研究を踏まえて', romanization: 'senkou kenkyuu wo fumaete', meaning: 'berdasarkan penelitian sebelumnya', example: '' },
                        { word: '〜という仮説を立てた', romanization: '~to iu kasetsu wo tateta', meaning: 'menyusun hipotesis bahwa', example: '' },
                        { word: '〜ことが示唆される', romanization: '~koto ga shisa sareru', meaning: 'diindikasikan bahwa', example: '' },
                    ],
                    tips: ['Paper Jepang: 序論→方法→結果→考察→結論'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '先行研究を___えて', questionId: '先行研究を___えて', answer: '踏ま', order: 1 },
                ],
            },
            {
                title: '引用と参照',
                titleId: 'Kutipan dan Referensi',
                order: 2, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '〜によれば', romanization: '~ni yoreba', meaning: 'menurut', example: '田中(2020)によれば...' },
                        { word: '〜と述べている', romanization: '~to nobete iru', meaning: 'menyatakan bahwa', example: '' },
                        { word: '〜と一致する', romanization: '~to itchi suru', meaning: 'sesuai dengan', example: '' },
                    ],
                    tips: ['Gunakan 〜によれば untuk kutipan tidak langsung'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"According to Tanaka"?', questionId: '"Menurut Tanaka"?', options: ['田中と', '田中によれば', '田中から', '田中まで'], answer: '田中によれば', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Literary Analysis
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: '文学分析',
        titleId: 'Analisis Sastra',
        description: 'Analyze Japanese literature deeply',
        descriptionId: 'Menganalisis sastra Jepang secara mendalam',
        order: 2,
        canDo: {
            listening: 'Dapat memahami diskusi sastra yang kompleks',
            reading: 'Dapat membaca dan menganalisis sastra klasik dan modern',
            speaking: 'Dapat mendiskusikan tema dan teknik sastra',
            writing: 'Dapat menulis kritik sastra'
        },
        lessons: [
            {
                title: '古典文学入門',
                titleId: 'Pengantar Sastra Klasik',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'をかし', romanization: 'okashi', meaning: 'menawan/menarik (klasik)', example: '枕草子:をかしきもの' },
                        { word: 'あはれ', romanization: 'aware', meaning: 'keindahan yang menyentuh', example: 'もののあはれ' },
                        { word: '無常', romanization: 'mujou', meaning: 'ketidakkekalan', example: '' },
                    ],
                    tips: ['Konsep estetika Jepang penting untuk memahami sastra'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is もののあはれ?', questionId: 'Apa もののあはれ?', options: ['Humor', 'Keindahan pahit/pathos', 'Kebahagiaan', 'Kemarahan'], answer: 'Keindahan pahit/pathos', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Media Analysis
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: 'メディア分析',
        titleId: 'Analisis Media',
        description: 'Critically analyze Japanese media',
        descriptionId: 'Menganalisis media Jepang secara kritis',
        order: 3,
        canDo: {
            listening: 'Dapat memahami berita dan diskusi kompleks',
            reading: 'Dapat membaca editorial dan analisis mendalam',
            speaking: 'Dapat mendiskusikan isu media dengan kritis',
            writing: 'Dapat menulis analisis dan editorial'
        },
        lessons: [
            {
                title: 'ニュース分析上級',
                titleId: 'Analisis Berita Lanjutan',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '偏向報道', romanization: 'henkou houdou', meaning: 'reportase bias', example: '' },
                        { word: '世論操作', romanization: 'yoron sousa', meaning: 'manipulasi opini publik', example: '' },
                        { word: '〜の観点から', romanization: '~no kanten kara', meaning: 'dari perspektif', example: '' },
                    ],
                    tips: ['Berita Jepang: perhatikan 5W1H dan sumber'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '偏向___道', questionId: '偏向___道', answer: '報', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Specialized Vocabulary
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: '専門語彙',
        titleId: 'Kosakata Khusus',
        description: 'Master specialized and technical vocabulary',
        descriptionId: 'Kuasai kosakata khusus dan teknis',
        order: 4,
        canDo: {
            listening: 'Dapat memahami diskusi teknis di berbagai bidang',
            reading: 'Dapat membaca dokumen spesialisasi',
            speaking: 'Dapat berbicara dengan presisi teknis',
            writing: 'Dapat menulis dengan terminologi yang tepat'
        },
        lessons: [
            {
                title: '法律用語',
                titleId: 'Terminologi Hukum',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '原告', romanization: 'genkoku', meaning: 'penggugat', example: '' },
                        { word: '被告', romanization: 'hikoku', meaning: 'tergugat', example: '' },
                        { word: '判決', romanization: 'hanketsu', meaning: 'putusan', example: '' },
                    ],
                    tips: ['Terminologi hukum sering muncul di berita'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 原告?', questionId: 'Apa 原告?', options: ['Hakim', 'Penggugat', 'Tergugat', 'Saksi'], answer: 'Penggugat', order: 1 },
                ],
            },
            {
                title: '医学用語',
                titleId: 'Terminologi Medis',
                order: 2, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '診断', romanization: 'shindan', meaning: 'diagnosis', example: '' },
                        { word: '症状', romanization: 'shoujou', meaning: 'gejala', example: '' },
                        { word: '治療', romanization: 'chiryou', meaning: 'pengobatan', example: '' },
                    ],
                    tips: ['Terminologi medis penting untuk JLPT N1'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___断する (diagnosis)', questionId: '___断する', answer: '診', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Research & Presentation
    {
        language: 'ja',
        level: 'C1',
        localStandard: 'JLPT N1',
        title: '研究と発表',
        titleId: 'Riset dan Presentasi',
        description: 'Conduct and present research in Japanese',
        descriptionId: 'Melakukan dan mempresentasikan riset dalam Bahasa Jepang',
        order: 5,
        canDo: {
            listening: 'Dapat memahami presentasi riset kompleks',
            reading: 'Dapat membaca metodologi dan hasil riset',
            speaking: 'Dapat mempresentasikan dengan percaya diri',
            writing: 'Dapat menulis proposal dan laporan riset'
        },
        lessons: [
            {
                title: '学会発表',
                titleId: 'Presentasi Konferensi',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '本研究の目的は', romanization: 'hon kenkyuu no mokuteki wa', meaning: 'tujuan penelitian ini adalah', example: '' },
                        { word: '〜という結果が得られた', romanization: '~to iu kekka ga erareta', meaning: 'diperoleh hasil bahwa', example: '' },
                        { word: 'ご清聴ありがとうございました', romanization: 'goseichou arigatou gozaimashita', meaning: 'terima kasih atas perhatiannya', example: '' },
                    ],
                    tips: ['Akhiri dengan ご清聴ありがとうございました'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'ご___聴ありがとうございました', questionId: 'ご___聴ありがとうございました', answer: '清', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseC1Courses1to5;
