// Japanese C2 Courses 1-5 - Native Expression, Classical Literature, Academic Mastery, Professional Mastery, Creative Writing
// CEFR Level C2 (Native-like Proficiency)

export const japaneseC2Courses1to5 = [
    // Course 1: Native-level Expression
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: 'ネイティブ表現',
        titleId: 'Ekspresi Tingkat Native',
        description: 'Master native-level Japanese expressions',
        descriptionId: 'Kuasai ekspresi Jepang tingkat native',
        order: 1,
        canDo: {
            listening: 'Dapat memahami segala bentuk bahasa Jepang dengan mudah',
            reading: 'Dapat membaca semua jenis teks termasuk yang abstrak dan kompleks',
            speaking: 'Dapat mengekspresikan diri secara spontan dengan presisi tinggi',
            writing: 'Dapat menulis dalam berbagai gaya yang sesuai dengan konteks'
        },
        lessons: [
            {
                title: '口語表現の微妙さ',
                titleId: 'Nuansa Bahasa Lisan',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'まあ', romanization: 'maa', meaning: 'well/um (filler)', example: 'まあ、それはそれとして...' },
                        { word: 'つまりさ', romanization: 'tsumari sa', meaning: 'I mean', example: '' },
                        { word: '〜っていうか', romanization: '~tte iu ka', meaning: 'or rather/or should I say', example: '' },
                    ],
                    tips: ['Native Jepang pakai banyak filler - pelajari kapan pakai'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Natural filler word?', questionId: 'Filler alami?', options: ['えーと', 'です', 'ます', 'こと'], answer: 'えーと', order: 1 },
                ],
            },
            {
                title: '若者言葉',
                titleId: 'Bahasa Anak Muda',
                order: 2, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'やばい', romanization: 'yabai', meaning: 'amazing/bad (context)', example: '' },
                        { word: 'マジで', romanization: 'maji de', meaning: 'seriously', example: '' },
                        { word: 'エモい', romanization: 'emoi', meaning: 'emotional/touching', example: '' },
                    ],
                    tips: ['Slang berubah cepat - ikuti media Jepang untuk update'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'マ___で？(seriously?)', questionId: 'マ___で？', answer: 'ジ', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Classical Japanese Literature
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: '古典文学',
        titleId: 'Sastra Klasik',
        description: 'Read and understand classical Japanese literature',
        descriptionId: 'Membaca dan memahami sastra klasik Jepang',
        order: 2,
        canDo: {
            listening: 'Dapat memahami pembacaan klasik',
            reading: 'Dapat membaca sumber klasik dalam bahasa asli',
            speaking: 'Dapat mendiskusikan sastra klasik',
            writing: 'Dapat menulis analisis sastra klasik'
        },
        lessons: [
            {
                title: '古典文法',
                titleId: 'Grammar Klasik',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: 'なり', romanization: 'nari', meaning: 'adalah (klasik)', example: '我思う、故に我あり' },
                        { word: 'けり', romanization: 'keri', meaning: 'past tense (klasik)', example: '' },
                        { word: 'ぬ', romanization: 'nu', meaning: 'perfect (klasik)', example: '' },
                    ],
                    tips: ['Tata bahasa klasik berbeda jauh dari modern'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Classical copula?', questionId: 'Kopula klasik?', options: ['です', 'なり', 'だ', 'である'], answer: 'なり', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Academic Mastery
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: '学術マスタリー',
        titleId: 'Penguasaan Akademik',
        description: 'Publish and present in Japanese academia',
        descriptionId: 'Publikasi dan presentasi di akademia Jepang',
        order: 3,
        canDo: {
            listening: 'Dapat memahami sintesis akademik yang rumit',
            reading: 'Dapat membaca paper di berbagai disiplin',
            speaking: 'Dapat mempertahankan tesis',
            writing: 'Dapat menulis paper layak publikasi'
        },
        lessons: [
            {
                title: '論文出版',
                titleId: 'Publikasi Paper',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '査読', romanization: 'sadoku', meaning: 'peer review', example: '' },
                        { word: '採択', romanization: 'saitaku', meaning: 'acceptance', example: '' },
                        { word: '再投稿', romanization: 'saitouko', meaning: 'resubmission', example: '' },
                    ],
                    tips: ['Jurnal Jepang: stricter formatting, polite responses'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___読 (peer review)', questionId: '___読', answer: '査', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Professional Mastery
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: 'プロフェッショナルマスタリー',
        titleId: 'Penguasaan Profesional',
        description: 'Executive-level business Japanese',
        descriptionId: 'Bahasa Jepang bisnis tingkat eksekutif',
        order: 4,
        canDo: {
            listening: 'Dapat memahami nuansa halus dalam negosiasi',
            reading: 'Dapat membaca dokumen hukum bisnis',
            speaking: 'Dapat memimpin dengan otoritas',
            writing: 'Dapat menulis dokumen strategis'
        },
        lessons: [
            {
                title: '経営層の日本語',
                titleId: 'Bahasa Eksekutif',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '善処いたします', romanization: 'zensho itashimasu', meaning: 'akan saya upayakan', example: '' },
                        { word: '前向きに検討', romanization: 'maemuki ni kentou', meaning: 'pertimbangan positif (mungkin tidak)', example: '' },
                        { word: '慎重に対応', romanization: 'shinchou ni taiou', meaning: 'respon hati-hati (penolakan halus)', example: '' },
                    ],
                    tips: ['Bahasa eksekutif Jepang sangat tidak langsung'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '前向きに検討 usually means?', questionId: '前向きに検討 biasanya berarti?', options: ['Pasti setuju', 'Mungkin tidak', 'Penolakan tegas', 'Segera diproses'], answer: 'Mungkin tidak', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Creative Writing
    {
        language: 'ja',
        level: 'C2',
        localStandard: 'JLPT N1+',
        title: '創作活動',
        titleId: 'Penulisan Kreatif',
        description: 'Write creative works in Japanese',
        descriptionId: 'Menulis karya kreatif dalam Bahasa Jepang',
        order: 5,
        canDo: {
            listening: 'Dapat mengapresiasi teknik naratif',
            reading: 'Dapat menganalisis gaya penulis',
            speaking: 'Dapat menceritakan dengan gaya',
            writing: 'Dapat menulis prosa dan puisi asli'
        },
        lessons: [
            {
                title: '文体と声',
                titleId: 'Gaya dan Suara',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '一人称', romanization: 'ichininshō', meaning: 'sudut pandang orang pertama', example: '' },
                        { word: '三人称', romanization: 'sanninshō', meaning: 'sudut pandang orang ketiga', example: '' },
                        { word: '語り手', romanization: 'katarite', meaning: 'narator', example: '' },
                    ],
                    tips: ['Pilihan 私/僕/俺 dll memengaruhi karakter'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '一人___', questionId: '一人___', answer: '称', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseC2Courses1to5;
