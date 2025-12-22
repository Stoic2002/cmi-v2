// Korean C2 Courses 6-10 - Interpretation, Dialect, Media Production, Hanja Mastery, Cultural Ambassador
// CEFR Level C2 (≈TOPIK 6)

export const koreanC2Courses6to10 = [
    // Course 6: Interpretation
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '통역',
        titleId: 'Interpretasi',
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
                title: '동시 통역 기술',
                titleId: 'Teknik Penerjemahan Simultan',
                order: 1, xpReward: 60,
                content: {
                    vocabulary: [
                        { word: '쉐도잉', romanization: 'swedoing', meaning: 'shadowing', example: '' },
                        { word: '순차 통역', romanization: 'suncha tongyeok', meaning: 'consecutive interpretation', example: '' },
                    ],
                    tips: ['Latihan: shadowing berita KBS setiap hari'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '쉐___잉', questionId: '쉐___잉', answer: '도', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Dialect
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '방언',
        titleId: 'Dialek',
        description: 'Understand major Korean dialects',
        descriptionId: 'Memahami dialek utama Korea',
        order: 7,
        canDo: {
            listening: 'Dapat memahami berbagai dialek',
            reading: 'Dapat membaca teks dalam dialek',
            speaking: 'Dapat menggunakan dialek dengan tepat',
            writing: 'Dapat menulis dialog dalam dialek'
        },
        lessons: [
            {
                title: '경상도 방언',
                titleId: 'Dialek Gyeongsang',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '와', romanization: 'wa', meaning: 'mengapa (Gyeongsang)', example: '' },
                        { word: '마', romanization: 'ma', meaning: 'jangan (Gyeongsang)', example: '' },
                    ],
                    tips: ['Dialek Busan (Gyeongsang) terkenal dari film'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Gyeongsang "why"?', questionId: 'Gyeongsang "mengapa"?', options: ['왜', '와', '뭐', '어디'], answer: '와', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Media Production
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '미디어 제작',
        titleId: 'Produksi Media',
        description: 'Create content in Korean',
        descriptionId: 'Membuat konten dalam Bahasa Korea',
        order: 8,
        canDo: {
            listening: 'Dapat memahami berbagai gaya media',
            reading: 'Dapat membaca skrip media',
            speaking: 'Dapat menjadi narator',
            writing: 'Dapat menulis konten media'
        },
        lessons: [
            {
                title: '유튜브 콘텐츠',
                titleId: 'Konten YouTube',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '썸네일', romanization: 'sseomneir', meaning: 'thumbnail', example: '' },
                        { word: '대본', romanization: 'daebon', meaning: 'skrip', example: '' },
                        { word: '편집', romanization: 'pyeonjip', meaning: 'editing', example: '' },
                    ],
                    tips: ['YouTube Korea: gaya kasual dan ekspresif'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___본 (skrip)', questionId: '___본', answer: '대', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Hanja Mastery
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '한자 마스터리',
        titleId: 'Penguasaan Hanja Lengkap',
        description: 'Master 2000+ Hanja characters',
        descriptionId: 'Kuasai 2000+ karakter Hanja',
        order: 9,
        canDo: {
            listening: 'Dapat memahami kata Sino-Korea langka',
            reading: 'Dapat membaca nama dan teks klasik',
            speaking: 'Dapat menggunakan kosakata Hanja tingkat tinggi',
            writing: 'Dapat menulis dengan terminologi Hanja'
        },
        lessons: [
            {
                title: '고급 한자어',
                titleId: 'Kata Hanja Tingkat Tinggi',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '유구', romanization: 'yugu', meaning: 'eternal/abadi', example: '유구한 역사' },
                        { word: '숭고', romanization: 'sunggo', meaning: 'sublime/mulia', example: '' },
                        { word: '함양', romanization: 'hamyang', meaning: 'cultivate/mengembangkan', example: '' },
                    ],
                    tips: ['Kata Hanja langka sering di sastra dan pidato formal'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___고한 역사 (eternal)', questionId: '___고한 역사', answer: '유', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Cultural Ambassador
    {
        language: 'ko',
        level: 'C2',
        localStandard: 'TOPIK 6',
        title: '문화 대사',
        titleId: 'Duta Budaya',
        description: 'Bridge cultures through Korean',
        descriptionId: 'Menjembatani budaya melalui Bahasa Korea',
        order: 10,
        canDo: {
            listening: 'Dapat memahami nuansa budaya yang dalam',
            reading: 'Dapat membaca konteks budaya implisit',
            speaking: 'Dapat menjelaskan budaya dengan presisi',
            writing: 'Dapat menulis tentang pertukaran budaya'
        },
        lessons: [
            {
                title: '한류와 문화 외교',
                titleId: 'Hallyu dan Diplomasi Budaya',
                order: 1, xpReward: 55,
                content: {
                    vocabulary: [
                        { word: '한류', romanization: 'hallyu', meaning: 'Korean Wave', example: '' },
                        { word: '문화 외교', romanization: 'munhwa oegyo', meaning: 'diplomasi budaya', example: '' },
                        { word: '소프트 파워', romanization: 'sopeuteu paweo', meaning: 'soft power', example: '' },
                    ],
                    tips: ['K-pop, K-drama = soft power Korea'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '한___', questionId: '한___', answer: '류', order: 1 },
                ],
            },
        ],
    },
];

export default koreanC2Courses6to10;
