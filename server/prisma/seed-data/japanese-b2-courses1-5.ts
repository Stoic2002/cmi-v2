// Japanese B2 Courses 1-5 - Advanced Grammar, Essay Writing, Literary, News Analysis, Business Advanced
// CEFR Level B2 (≈JLPT N2)

export const japaneseB2Courses1to5 = [
    // Course 1: Advanced Grammar Structures
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: '上級文法構造',
        titleId: 'Struktur Tata Bahasa Lanjutan',
        description: 'Master complex N2 grammar patterns',
        descriptionId: 'Kuasai pola tata bahasa N2 yang kompleks',
        order: 1,
        canDo: {
            listening: 'Dapat memahami diskusi panjang dan ceramah',
            reading: 'Dapat membaca teks kompleks dan abstrak',
            speaking: 'Dapat berkomunikasi dengan nuansa dan presisi',
            writing: 'Dapat menulis esai dan laporan terstruktur'
        },
        lessons: [
            {
                title: '〜にもかかわらず・〜ものの',
                titleId: 'Meskipun (Formal)',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '努力したにもかかわらず', romanization: 'doryoku shita nimo kakawarazu', meaning: 'meskipun sudah berusaha', example: '努力したにもかかわらず、失敗した' },
                        { word: '高いものの', romanization: 'takai mono no', meaning: 'meskipun mahal', example: '高いものの、人気がある' },
                    ],
                    grammar: [
                        { pattern: '〜にもかかわらず', explanation: 'Meskipun (formal, kontras kuat)', examples: ['警告にもかかわらず、進んだ'] },
                        { pattern: '〜ものの', explanation: 'Meskipun (hasil tidak sesuai harapan)', examples: ['買ったものの、使っていない'] },
                    ],
                    tips: ['にもかかわらず lebih formal dari のに'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '努力した___かかわらず、失敗した', questionId: '努力した___かかわらず、失敗した', answer: 'にも', order: 1 },
                ],
            },
            {
                title: '〜ざるを得ない・〜わけにはいかない',
                titleId: 'Harus / Tidak Bisa',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '行かざるを得ない', romanization: 'ikazaru wo enai', meaning: 'terpaksa pergi', example: '仕事で行かざるを得ない' },
                        { word: '断るわけにはいかない', romanization: 'kotowaru wake ni wa ikanai', meaning: 'tidak bisa menolak', example: '上司の誘いを断るわけにはいかない' },
                    ],
                    grammar: [
                        { pattern: '〜ざるを得ない', explanation: 'Terpaksa harus', examples: ['認めざるを得ない (harus mengakui)'] },
                        { pattern: '〜わけにはいかない', explanation: 'Tidak bisa karena situasi/moral', examples: ['嘘をつくわけにはいかない'] },
                    ],
                    tips: ['ざるを得ない = literary "cannot help but"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Must go (no choice)"?', questionId: '"Harus pergi (terpaksa)"?', options: ['行きたい', '行かなければ', '行かざるを得ない', '行くべき'], answer: '行かざるを得ない', order: 1 },
                ],
            },
            {
                title: '〜に際して・〜にあたって',
                titleId: 'Pada Kesempatan',
                order: 3, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '出発に際して', romanization: 'shuppatsu ni saishite', meaning: 'pada saat keberangkatan', example: '出発に際して、注意事項を説明します' },
                        { word: '開業にあたって', romanization: 'kaigyou ni atatte', meaning: 'dalam rangka pembukaan', example: '開業にあたって、ご挨拶申し上げます' },
                    ],
                    grammar: [
                        { pattern: '〜に際して', explanation: 'Pada kesempatan (formal)', examples: ['契約に際して'] },
                        { pattern: '〜にあたって', explanation: 'Dalam rangka/Menjelang', examples: ['新年にあたって'] },
                    ],
                    tips: ['Sangat formal - untuk pidato, pengumuman resmi'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '開業に___て (dalam rangka)', questionId: '開業に___て', answer: 'あたっ', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Essay & Report Writing
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: '論文・レポート作成',
        titleId: 'Penulisan Esai dan Laporan',
        description: 'Academic and professional writing',
        descriptionId: 'Penulisan akademik dan profesional',
        order: 2,
        canDo: {
            listening: 'Dapat memahami presentasi akademik',
            reading: 'Dapat membaca paper dan laporan',
            speaking: 'Dapat mendiskusikan topik abstrak',
            writing: 'Dapat menulis esai argumentatif'
        },
        lessons: [
            {
                title: '論文の構成',
                titleId: 'Struktur Esai',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '序論', romanization: 'joron', meaning: 'pendahuluan', example: '' },
                        { word: '先行研究', romanization: 'senkou kenkyuu', meaning: 'penelitian sebelumnya', example: '' },
                        { word: '考察', romanization: 'kousatsu', meaning: 'analisis/diskusi', example: '' },
                        { word: '結論', romanization: 'ketsuron', meaning: 'kesimpulan', example: '' },
                    ],
                    tips: ['Struktur: 序論→本論→考察→結論'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Discussion section?', questionId: 'Bagian diskusi?', options: ['序論', '本論', '考察', '結論'], answer: '考察', order: 1 },
                ],
            },
            {
                title: '論理的表現',
                titleId: 'Ekspresi Logis',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '〜と考えられる', romanization: '~to kangaerareru', meaning: 'dapat dianggap bahwa', example: '効果があると考えられる' },
                        { word: '〜と言えよう', romanization: '~to ieyo', meaning: 'dapat dikatakan bahwa', example: '成功と言えよう' },
                        { word: '〜に基づいて', romanization: '~ni motozuite', meaning: 'berdasarkan', example: 'データに基づいて分析する' },
                    ],
                    tips: ['Gunakan bentuk pasif dan potential untuk kesan objektif'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'データに___いて分析する', questionId: 'データに___いて分析する', answer: '基づ', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Literary Japanese
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: '文学日本語',
        titleId: 'Bahasa Jepang Sastra',
        description: 'Understanding literary expressions',
        descriptionId: 'Memahami ekspresi sastra',
        order: 3,
        canDo: {
            listening: 'Dapat memahami narasi sastra',
            reading: 'Dapat membaca novel dan cerita',
            speaking: 'Dapat mengekspresikan dengan elegan',
            writing: 'Dapat menulis prosa kreatif'
        },
        lessons: [
            {
                title: '文語表現',
                titleId: 'Ekspresi Klasik',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: 'なり', romanization: 'nari', meaning: 'adalah (klasik)', example: '人間なり (adalah manusia)' },
                        { word: 'ごとし', romanization: 'gotoshi', meaning: 'seperti', example: '夢のごとし' },
                        { word: 'べからず', romanization: 'bekarazu', meaning: 'tidak boleh', example: '入るべからず' },
                    ],
                    tips: ['Sering ditemukan di tanda, peribahasa, dan literatur'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '入るべからず means?', questionId: '入るべからず artinya?', options: ['Silakan masuk', 'Dilarang masuk', 'Harus masuk', 'Ingin masuk'], answer: 'Dilarang masuk', order: 1 },
                ],
            },
            {
                title: '比喩表現',
                titleId: 'Perumpamaan',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '〜のような', romanization: '~no you na', meaning: 'seperti', example: '雪のような肌' },
                        { word: '〜にたとえる', romanization: '~ni tatoeru', meaning: 'mengumpamakan dengan', example: '人生を旅にたとえる' },
                    ],
                    tips: ['Metafora dan simile sangat umum dalam sastra Jepang'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '雪の___な肌 (seperti)', questionId: '雪の___な肌', answer: 'よう', order: 1 },
                ],
            },
        ],
    },

    // Course 4: News Analysis
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: 'ニュース分析',
        titleId: 'Analisis Berita',
        description: 'Analyze news and current affairs',
        descriptionId: 'Menganalisis berita dan isu terkini',
        order: 4,
        canDo: {
            listening: 'Dapat memahami siaran berita',
            reading: 'Dapat membaca artikel mendalam',
            speaking: 'Dapat mendiskusikan isu terkini',
            writing: 'Dapat menulis komentar editorial'
        },
        lessons: [
            {
                title: 'ニュース語彙',
                titleId: 'Kosakata Berita',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '景気', romanization: 'keiki', meaning: 'kondisi ekonomi', example: '景気が回復している' },
                        { word: '政策', romanization: 'seisaku', meaning: 'kebijakan', example: '新しい政策を発表した' },
                        { word: '世論', romanization: 'yoron/seron', meaning: 'opini publik', example: '世論調査によると' },
                    ],
                    tips: ['Berita ekonomi dan politik sangat umum di JLPT N2'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 政策?', questionId: 'Apa 政策?', options: ['Politik', 'Kebijakan', 'Partai', 'Pemilu'], answer: 'Kebijakan', order: 1 },
                ],
            },
            {
                title: '社説を読む',
                titleId: 'Membaca Editorial',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '〜べきだ', romanization: '~beki da', meaning: 'seharusnya', example: '対策を講じるべきだ' },
                        { word: '〜と言わざるを得ない', romanization: '~to iwazaru wo enai', meaning: 'harus dikatakan bahwa', example: '問題だと言わざるを得ない' },
                    ],
                    tips: ['Editorial sering pakai べきだ untuk menyatakan pendapat'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '対策を講じる___だ (seharusnya)', questionId: '対策を講じる___だ', answer: 'べき', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Advanced Business Japanese
    {
        language: 'ja',
        level: 'B2',
        localStandard: 'JLPT N2',
        title: '上級ビジネス日本語',
        titleId: 'Bahasa Jepang Bisnis Lanjutan',
        description: 'High-level professional communication',
        descriptionId: 'Komunikasi profesional tingkat tinggi',
        order: 5,
        canDo: {
            listening: 'Dapat memahami negosiasi bisnis',
            reading: 'Dapat membaca kontrak dan proposal',
            speaking: 'Dapat bernegosiasi dan presentasi',
            writing: 'Dapat menulis proposal bisnis'
        },
        lessons: [
            {
                title: '交渉の言葉',
                titleId: 'Bahasa Negosiasi',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: 'ご検討いただけますでしょうか', romanization: 'gokentou itadakemasu deshou ka', meaning: 'Bisakah Anda mempertimbangkan?', example: '' },
                        { word: '前向きに検討させていただきます', romanization: 'maemuki ni kentou sasete itadakimasu', meaning: 'Akan kami pertimbangkan secara positif', example: '' },
                        { word: '恐れ入りますが', romanization: 'osore irimasu ga', meaning: 'Mohon maaf, tetapi', example: '' },
                    ],
                    tips: ['Negosiasi Jepang sangat tidak langsung'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite "Please consider"?', questionId: 'Sopan "Mohon pertimbangkan"?', options: ['考えて', '検討して', 'ご検討いただけますか', '検討しろ'], answer: 'ご検討いただけますか', order: 1 },
                ],
            },
            {
                title: '企画書作成',
                titleId: 'Membuat Proposal',
                order: 2, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '目的', romanization: 'mokuteki', meaning: 'tujuan', example: '' },
                        { word: '背景', romanization: 'haikei', meaning: 'latar belakang', example: '' },
                        { word: '期待される効果', romanization: 'kitai sareru kouka', meaning: 'efek yang diharapkan', example: '' },
                        { word: 'スケジュール', romanization: 'sukejuuru', meaning: 'jadwal', example: '' },
                    ],
                    tips: ['Proposal: 背景→目的→内容→効果→スケジュール'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '期待される___', questionId: '期待される___', answer: '効果', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseB2Courses1to5;
