// Japanese B1 Courses 1-5 - Advanced Verbs, Complex Sentences, Keigo, Reading, Business
// CEFR Level B1 (≈JLPT N3)

export const japaneseB1Courses1to5 = [
    // Course 1: Advanced Verb Forms
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: '動詞の上級形',
        titleId: 'Bentuk Kata Kerja Lanjutan',
        description: 'Master advanced verb conjugations',
        descriptionId: 'Kuasai konjugasi kata kerja lanjutan',
        order: 1,
        canDo: {
            listening: 'Dapat memahami percakapan kompleks',
            reading: 'Dapat membaca teks dengan berbagai konjugasi',
            speaking: 'Dapat mengekspresikan dengan nuansa',
            writing: 'Dapat menulis dengan variasi bentuk'
        },
        lessons: [
            {
                title: '可能形 (Potential Form)',
                titleId: 'Bentuk Kemampuan',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '食べられる', romanization: 'taberareru', meaning: 'bisa makan', example: '辛いものが食べられます' },
                        { word: '読める', romanization: 'yomeru', meaning: 'bisa baca', example: '漢字が読めます' },
                        { word: '話せる', romanization: 'hanaseru', meaning: 'bisa bicara', example: '日本語が話せます' },
                    ],
                    grammar: [
                        { pattern: 'Group 1: u→eru', explanation: 'Kemampuan', examples: ['書く→書ける', '読む→読める'] },
                        { pattern: 'Group 2: ru→rareru', explanation: 'Kemampuan', examples: ['食べる→食べられる', '見る→見られる'] },
                    ],
                    tips: ['Colloquial: 食べれる (ra-nuki) sering dipakai tapi tidak formal'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '泳ぐ → 泳___る (bisa berenang)', questionId: '泳ぐ → 泳___る', answer: 'げ', order: 1 },
                ],
            },
            {
                title: '受身形 (Passive Form)',
                titleId: 'Bentuk Pasif',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '褒められる', romanization: 'homerareru', meaning: 'dipuji', example: '先生に褒められました' },
                        { word: '叱られる', romanization: 'shikarareru', meaning: 'dimarahi', example: '母に叱られた' },
                        { word: '使われる', romanization: 'tsukawareru', meaning: 'digunakan', example: 'この言葉はよく使われます' },
                    ],
                    grammar: [
                        { pattern: 'Group 1: u→areru', explanation: 'Pasif', examples: ['読む→読まれる', '書く→書かれる'] },
                        { pattern: 'に + passive', explanation: 'Pelaku pasif', examples: ['犬に噛まれた (digigit anjing)'] },
                    ],
                    tips: ['Pasif Jepang juga bisa mengekspresikan "terganggu"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Passive of 食べる?', questionId: 'Pasif dari 食べる?', options: ['食べれる', '食べられる', '食べさせる', '食べよう'], answer: '食べられる', order: 1 },
                ],
            },
            {
                title: '使役形 (Causative Form)',
                titleId: 'Bentuk Kausatif',
                order: 3, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '食べさせる', romanization: 'tabesaseru', meaning: 'menyuruh makan', example: '子供に野菜を食べさせる' },
                        { word: '行かせる', romanization: 'ikaseru', meaning: 'menyuruh pergi', example: '部下を出張に行かせた' },
                        { word: '待たせる', romanization: 'mataseru', meaning: 'membuat menunggu', example: 'お待たせしました' },
                    ],
                    grammar: [
                        { pattern: 'Group 1: u→aseru', explanation: 'Kausatif', examples: ['読む→読ませる', '書く→書かせる'] },
                        { pattern: 'Group 2: ru→saseru', explanation: 'Kausatif', examples: ['食べる→食べさせる'] },
                    ],
                    tips: ['お待たせしました = Maaf membuat menunggu (sangat umum)'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '飲む → 飲ま___る', questionId: '飲む → 飲ま___る', answer: 'せ', order: 1 },
                ],
            },
            {
                title: '使役受身形 (Causative-Passive)',
                titleId: 'Bentuk Kausatif-Pasif',
                order: 4, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '食べさせられる', romanization: 'tabesaserareru', meaning: 'dipaksa makan', example: '薬を飲まされた' },
                        { word: '行かされる', romanization: 'ikasareru', meaning: 'dipaksa pergi', example: '出張に行かされた' },
                        { word: '待たされる', romanization: 'matasareru', meaning: 'dibuat menunggu', example: '1時間も待たされた' },
                    ],
                    grammar: [
                        { pattern: 'Causative + passive', explanation: 'Dipaksa/terpaksa', examples: ['食べさせられる = dipaksa makan'] },
                    ],
                    tips: ['Menunjukkan ketidaksenangan karena dipaksa melakukan sesuatu'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Dipaksa menunggu" is?', questionId: '"Dipaksa menunggu"?', options: ['待たせる', '待たれる', '待たされる', '待つ'], answer: '待たされる', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Complex Sentences
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: '複文構造',
        titleId: 'Struktur Kalimat Kompleks',
        description: 'Build complex Japanese sentences',
        descriptionId: 'Membuat kalimat Jepang yang kompleks',
        order: 2,
        canDo: {
            listening: 'Dapat memahami kalimat panjang',
            reading: 'Dapat membaca teks kompleks',
            speaking: 'Dapat membuat kalimat kompleks',
            writing: 'Dapat menulis paragraf terstruktur'
        },
        lessons: [
            {
                title: '〜ば・〜たら (Conditionals)',
                titleId: 'Kondisional',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '食べれば', romanization: 'tabereba', meaning: 'kalau makan', example: '野菜を食べれば健康になる' },
                        { word: '行ったら', romanization: 'ittara', meaning: 'kalau pergi', example: '日本に行ったら寿司を食べたい' },
                    ],
                    grammar: [
                        { pattern: '〜ば (if)', explanation: 'Kondisi umum/hipotesis', examples: ['安ければ買います'] },
                        { pattern: '〜たら (if/when)', explanation: 'Kondisi dengan hasil tertentu', examples: ['雨が降ったら中止です'] },
                    ],
                    tips: ['ば = lebih hipotesis, たら = lebih konkret'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '安けれ___買います', questionId: '安けれ___買います', answer: 'ば', order: 1 },
                ],
            },
            {
                title: '〜ても (Even if)',
                titleId: 'Meskipun',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '食べても', romanization: 'tabetemo', meaning: 'meskipun makan', example: '食べても太らない' },
                        { word: '高くても', romanization: 'takakutemo', meaning: 'meskipun mahal', example: '高くても買いたい' },
                    ],
                    grammar: [
                        { pattern: 'Te-form + も', explanation: 'Meskipun/walau', examples: ['雨が降っても行きます'] },
                    ],
                    tips: ['Menunjukkan hasil tidak berubah meskipun kondisi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Even if expensive" is?', questionId: '"Meskipun mahal"?', options: ['高いのに', '高くても', '高いから', '高かったら'], answer: '高くても', order: 1 },
                ],
            },
            {
                title: '〜のに・〜けど (Contrast)',
                titleId: 'Kontras',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '勉強したのに', romanization: 'benkyou shita noni', meaning: 'padahal sudah belajar', example: '勉強したのに落ちた' },
                        { word: '高いけど', romanization: 'takai kedo', meaning: 'mahal tapi', example: '高いけど美味しい' },
                    ],
                    grammar: [
                        { pattern: '〜のに', explanation: 'Padahal (kecewa/frustasi)', examples: ['約束したのに来なかった'] },
                        { pattern: '〜けど', explanation: 'Tapi (netral)', examples: ['雨だけど出かける'] },
                    ],
                    tips: ['のに mengekspresikan kekecewaan'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '約束した___来なかった (padahal)', questionId: '約束した___来なかった', answer: 'のに', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Keigo (Honorific Language)
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: '敬語',
        titleId: 'Bahasa Hormat (Keigo)',
        description: 'Master Japanese honorific language',
        descriptionId: 'Kuasai bahasa hormat Jepang',
        order: 3,
        canDo: {
            listening: 'Dapat memahami keigo',
            reading: 'Dapat membaca email bisnis',
            speaking: 'Dapat berbicara dengan keigo',
            writing: 'Dapat menulis dengan keigo'
        },
        lessons: [
            {
                title: '尊敬語 (Sonkeigo)',
                titleId: 'Bahasa Hormat untuk Orang Lain',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'いらっしゃる', romanization: 'irassharu', meaning: 'ada/pergi (hormat)', example: '社長はいらっしゃいますか' },
                        { word: 'おっしゃる', romanization: 'ossharu', meaning: 'berkata (hormat)', example: '何とおっしゃいましたか' },
                        { word: '召し上がる', romanization: 'meshiagaru', meaning: 'makan (hormat)', example: 'どうぞ召し上がってください' },
                        { word: 'ご覧になる', romanization: 'goran ni naru', meaning: 'melihat (hormat)', example: 'こちらをご覧ください' },
                    ],
                    tips: ['Gunakan untuk atasan, klien, orang yang lebih tua'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Honorific for 食べる?', questionId: 'Hormat untuk 食べる?', options: ['食べます', '召し上がる', 'いただく', '食べられる'], answer: '召し上がる', order: 1 },
                ],
            },
            {
                title: '謙譲語 (Kenjougo)',
                titleId: 'Bahasa Rendah Diri',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'いただく', romanization: 'itadaku', meaning: 'menerima/makan (rendah)', example: 'ご意見をいただきたい' },
                        { word: '参る', romanization: 'mairu', meaning: 'pergi/datang (rendah)', example: 'これから参ります' },
                        { word: '申す', romanization: 'mousu', meaning: 'berkata (rendah)', example: '田中と申します' },
                        { word: '拝見する', romanization: 'haiken suru', meaning: 'melihat (rendah)', example: '書類を拝見しました' },
                    ],
                    tips: ['Gunakan tentang diri sendiri saat berbicara dengan atasan'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '田中と___します (nama saya)', questionId: '田中と___します', answer: '申', order: 1 },
                ],
            },
            {
                title: 'ビジネスメール',
                titleId: 'Email Bisnis',
                order: 3, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'お疲れ様です', romanization: 'otsukaresama desu', meaning: 'terima kasih atas kerja keras', example: '' },
                        { word: 'お世話になっております', romanization: 'osewa ni natte orimasu', meaning: 'terima kasih atas bantuannya', example: '' },
                        { word: 'ご確認ください', romanization: 'gokakunin kudasai', meaning: 'mohon periksa', example: '' },
                        { word: 'よろしくお願いいたします', romanization: 'yoroshiku onegai itashimasu', meaning: 'mohon bantuannya', example: '' },
                    ],
                    tips: ['Selalu awali email internal dengan お疲れ様です'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Start internal email with?', questionId: 'Mulai email internal dengan?', options: ['こんにちは', 'お疲れ様です', 'はじめまして', 'さようなら'], answer: 'お疲れ様です', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Reading Comprehension
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: '読解力',
        titleId: 'Pemahaman Bacaan',
        description: 'Improve reading comprehension skills',
        descriptionId: 'Tingkatkan keterampilan pemahaman bacaan',
        order: 4,
        canDo: {
            listening: 'Dapat memahami narasi',
            reading: 'Dapat membaca artikel pendek',
            speaking: 'Dapat merangkum teks',
            writing: 'Dapat menulis ringkasan'
        },
        lessons: [
            {
                title: '接続詞 (Conjunctions)',
                titleId: 'Kata Penghubung',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'しかし', romanization: 'shikashi', meaning: 'namun', example: '努力した。しかし、失敗した。' },
                        { word: 'したがって', romanization: 'shitagatte', meaning: 'oleh karena itu', example: '雨だ。したがって、中止だ。' },
                        { word: 'つまり', romanization: 'tsumari', meaning: 'dengan kata lain', example: 'つまり、賛成ということですね' },
                        { word: 'また', romanization: 'mata', meaning: 'juga/selain itu', example: 'また、もう一つ問題がある' },
                    ],
                    tips: ['Kenali kata penghubung untuk memahami struktur teks'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"However" in Japanese?', questionId: '"Namun" dalam Jepang?', options: ['そして', 'しかし', 'だから', 'それで'], answer: 'しかし', order: 1 },
                ],
            },
            {
                title: '文章の構造',
                titleId: 'Struktur Teks',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '序論', romanization: 'joron', meaning: 'pendahuluan', example: '' },
                        { word: '本論', romanization: 'honron', meaning: 'isi utama', example: '' },
                        { word: '結論', romanization: 'ketsuron', meaning: 'kesimpulan', example: '' },
                    ],
                    grammar: [
                        { pattern: 'Topic sentence → Details → Conclusion', explanation: 'Struktur paragraf Jepang', examples: [] },
                    ],
                    tips: ['Baca paragraf pertama dan terakhir untuk ide utama'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '序論→本論→___論', questionId: '序論→本論→___論', answer: '結', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Business Japanese
    {
        language: 'ja',
        level: 'B1',
        localStandard: 'JLPT N3',
        title: 'ビジネス日本語',
        titleId: 'Bahasa Jepang Bisnis',
        description: 'Professional Japanese for workplace',
        descriptionId: 'Bahasa Jepang profesional untuk tempat kerja',
        order: 5,
        canDo: {
            listening: 'Dapat memahami meeting bisnis',
            reading: 'Dapat membaca dokumen bisnis',
            speaking: 'Dapat presentasi sederhana',
            writing: 'Dapat menulis laporan'
        },
        lessons: [
            {
                title: '会議で使う表現',
                titleId: 'Ekspresi dalam Meeting',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '議題', romanization: 'gidai', meaning: 'agenda', example: '本日の議題は...' },
                        { word: 'ご意見', romanization: 'goiken', meaning: 'pendapat (hormat)', example: 'ご意見をお願いします' },
                        { word: '賛成/反対', romanization: 'sansei/hantai', meaning: 'setuju/tidak setuju', example: '私は賛成です' },
                        { word: '検討', romanization: 'kentou', meaning: 'pertimbangan', example: '検討させてください' },
                    ],
                    tips: ['検討させてください = cara sopan bilang "akan dipikirkan"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"I agree" in business?', questionId: '"Saya setuju" dalam bisnis?', options: ['いいよ', '賛成です', 'そうだね', 'うん'], answer: '賛成です', order: 1 },
                ],
            },
            {
                title: 'プレゼンテーション',
                titleId: 'Presentasi',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '〜について説明します', romanization: '~ni tsuite setsumei shimasu', meaning: 'akan menjelaskan tentang', example: '新製品について説明します' },
                        { word: 'まず', romanization: 'mazu', meaning: 'pertama', example: 'まず、背景を説明します' },
                        { word: '次に', romanization: 'tsugi ni', meaning: 'selanjutnya', example: '次に、データを見てください' },
                        { word: '最後に', romanization: 'saigo ni', meaning: 'terakhir', example: '最後に、まとめます' },
                    ],
                    tips: ['Struktur: まず→次に→最後に'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___、背景を説明します (pertama)', questionId: '___、背景を説明します', answer: 'まず', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseB1Courses1to5;
