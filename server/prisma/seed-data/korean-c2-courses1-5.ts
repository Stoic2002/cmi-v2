// Korean C2 Courses 1-5 - Native Expression, Classical Literature, Academic Mastery, Professional Mastery, Creative Writing
// CEFR Level C2 (≈TOPIK 6)

export const koreanC2Courses1to5 = [
    // Course 1: Native-level Expression
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '원어민 표현',
        titleId: 'Ekspresi Tingkat Native',
        description: 'Master native-level Korean expressions',
        descriptionId: 'Kuasai ekspresi Korea tingkat native',
        order: 1,
        canDo: {
            listening: 'Dapat memahami segala bentuk bahasa Korea',
            reading: 'Dapat membaca semua jenis teks',
            speaking: 'Dapat mengekspresikan diri secara spontan',
            writing: 'Dapat menulis dalam berbagai gaya'
        },
        lessons: [
            {
                title: '구어체의 미묘함',
                titleId: 'Nuansa Bahasa Lisan',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '뭐', romanization: 'mwo', meaning: 'what/well (filler)', example: '' },
                        { word: '그러니까', romanization: 'geuronnikka', meaning: 'so/I mean', example: '' },
                        { word: '있잖아', romanization: 'itjanha', meaning: 'you know', example: '' },
                    ],
                    tips: ['Native Korea pakai banyak filler - dengarkan K-Drama'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Natural filler?', questionId: 'Filler alami?', options: ['있잖아', '입니다', '습니다', '하세요'], answer: '있잖아', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Classical Korean
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '고전 한국어',
        titleId: 'Bahasa Korea Klasik',
        description: 'Understand classical Korean texts',
        descriptionId: 'Memahami teks Korea klasik',
        order: 2,
        canDo: {
            listening: 'Dapat memahami pembacaan klasik',
            reading: 'Dapat membaca teks sejarah',
            speaking: 'Dapat mendiskusikan sejarah',
            writing: 'Dapat menulis analisis sejarah'
        },
        lessons: [
            {
                title: '훈민정음',
                titleId: 'Hunminjeongeum',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '훈민정음', romanization: 'hunminjeongeum', meaning: 'Sounds Correct for Teaching People (Hangul asli)', example: '' },
                        { word: '나랏말싸미', romanization: 'naratmalsami', meaning: 'bahasa negara kita (Korea klasik)', example: '' },
                    ],
                    tips: ['Hangeul diciptakan 1443 oleh Raja Sejong'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___민정음', questionId: '___민정음', answer: '훈', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Academic Mastery
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '학술 마스터리',
        titleId: 'Penguasaan Akademik',
        description: 'Publish and present in Korean academia',
        descriptionId: 'Publikasi dan presentasi di akademia Korea',
        order: 3,
        canDo: {
            listening: 'Dapat memahami sintesis akademik',
            reading: 'Dapat membaca paper di berbagai disiplin',
            speaking: 'Dapat mempertahankan tesis',
            writing: 'Dapat menulis paper layak publikasi'
        },
        lessons: [
            {
                title: '논문 출판',
                titleId: 'Publikasi Paper',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '심사', romanization: 'simsa', meaning: 'review/审查', example: '' },
                        { word: '채택', romanization: 'chaetaek', meaning: 'acceptance', example: '' },
                        { word: '수정', romanization: 'sujeong', meaning: 'revision', example: '' },
                    ],
                    tips: ['Jurnal Korea: mirip format internasional'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___사 (review)', questionId: '___사', answer: '심', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Professional Mastery
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '전문 마스터리',
        titleId: 'Penguasaan Profesional',
        description: 'Executive-level business Korean',
        descriptionId: 'Bahasa Korea bisnis tingkat eksekutif',
        order: 4,
        canDo: {
            listening: 'Dapat memahami nuansa halus dalam negosiasi',
            reading: 'Dapat membaca dokumen hukum bisnis',
            speaking: 'Dapat memimpin dengan otoritas',
            writing: 'Dapat menulis dokumen strategis'
        },
        lessons: [
            {
                title: '임원급 언어',
                titleId: 'Bahasa Eksekutif',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '선처 부탁드립니다', romanization: 'seoncheo butakdeurimnida', meaning: 'mohon pertimbangan baik/keringanan', example: '' },
                        { word: '긍정적으로 검토하겠습니다', romanization: 'geungjeongjeogero geomtohagesseumnida', meaning: 'akan saya pertimbangkan positif (mungkin tidak)', example: '' },
                    ],
                    tips: ['Bahasa eksekutif Korea: sangat tidak langsung seperti Jepang'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"긍정적으로 검토" usually means?', questionId: '"긍정적으로 검토" biasanya berarti?', options: ['Pasti ya', 'Mungkin tidak', 'Penolakan tegas', 'Segera disetujui'], answer: 'Mungkin tidak', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Creative Writing
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '창작 활동',
        titleId: 'Penulisan Kreatif',
        description: 'Write creative works in Korean',
        descriptionId: 'Menulis karya kreatif dalam Bahasa Korea',
        order: 5,
        canDo: {
            listening: 'Dapat mengapresiasi teknik naratif',
            reading: 'Dapat menganalisis gaya penulis',
            speaking: 'Dapat menceritakan dengan gaya',
            writing: 'Dapat menulis prosa asli'
        },
        lessons: [
            {
                title: '문체와 목소리',
                titleId: 'Gaya dan Suara',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '1인칭', romanization: 'irinching', meaning: 'sudut pandang orang pertama', example: '' },
                        { word: '3인칭', romanization: 'saminching', meaning: 'sudut pandang orang ketiga', example: '' },
                        { word: '화자', romanization: 'hwaja', meaning: 'narator', example: '' },
                    ],
                    tips: ['Pilihan 나/저 memengaruhi nada cerita'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '1___ 칭', questionId: '1___칭', answer: '인', order: 1 },
                ],
            },
        ],
    },
];

export default koreanC2Courses1to5;
