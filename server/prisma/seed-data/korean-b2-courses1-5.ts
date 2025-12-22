// Korean B2 Courses 1-5 - Advanced Grammar, Essay, News Analysis, Business Advanced, Academic
// CEFR Level B2 (≈TOPIK 4)

export const koreanB2Courses1to5 = [
    // Course 1: Advanced Grammar Structures
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '고급 문법 구조',
        titleId: 'Struktur Tata Bahasa Lanjutan',
        description: 'Master complex Korean grammar',
        descriptionId: 'Kuasai tata bahasa Korea yang kompleks',
        order: 1,
        canDo: {
            listening: 'Dapat memahami diskusi kompleks',
            reading: 'Dapat membaca teks abstrak',
            speaking: 'Dapat berkomunikasi dengan nuansa',
            writing: 'Dapat menulis esai terstruktur'
        },
        lessons: [
            {
                title: '~에도 불구하고 / ~음에도',
                titleId: 'Meskipun (Formal)',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '노력에도 불구하고', romanization: 'noryeogedo bulguhago', meaning: 'meskipun usaha', example: '노력에도 불구하고 실패했다' },
                        { word: '어려움에도', romanization: 'eoryeoumedo', meaning: 'meskipun kesulitan', example: '어려움에도 끝까지 했다' },
                    ],
                    grammar: [
                        { pattern: '~에도 불구하고', explanation: 'Meskipun (formal)', examples: ['경고에도 불구하고 진행했다'] },
                        { pattern: '~(으)ㅁ에도', explanation: 'Meskipun (literary)', examples: ['알았음에도 무시했다'] },
                    ],
                    tips: ['~에도 불구하고 sangat formal, untuk tulisan'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '노력에도 ___하고 실패했다', questionId: '노력에도 ___하고 실패했다', answer: '불구', order: 1 },
                ],
            },
            {
                title: '~는 바람에 / ~는 탓에',
                titleId: 'Karena (Tak Terduga)',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '비가 오는 바람에', romanization: 'biga oneun barame', meaning: 'karena hujan (tak terduga)', example: '비가 오는 바람에 취소됐다' },
                        { word: '실수한 탓에', romanization: 'silsuhan tase', meaning: 'karena kesalahan', example: '내 실수한 탓에 문제가 생겼다' },
                    ],
                    grammar: [
                        { pattern: '~는 바람에', explanation: 'Karena (tak terduga, negatif)', examples: ['늦잠을 자는 바람에 지각했다'] },
                        { pattern: '~는 탓에', explanation: 'Karena (menyalahkan)', examples: ['그 탓에 망했다'] },
                    ],
                    tips: ['Keduanya untuk hasil negatif yang tidak diinginkan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Because of oversleeping"?', questionId: '"Karena ketiduran"?', options: ['늦잠을 자서', '늦잠을 자는 바람에', '늦잠을 자니까', '늦잠을 자면'], answer: '늦잠을 자는 바람에', order: 1 },
                ],
            },
            {
                title: '~(으)ㄹ 수밖에 없다 / ~지 않을 수 없다',
                titleId: 'Tidak Punya Pilihan',
                order: 3, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '갈 수밖에 없다', romanization: 'gal subakke eopda', meaning: 'tidak punya pilihan selain pergi', example: '' },
                        { word: '인정하지 않을 수 없다', romanization: 'injeonghaji anheul su eopda', meaning: 'harus mengakui', example: '' },
                    ],
                    tips: ['Kedua pola = "tidak bisa tidak melakukan"'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '갈 수___에 없다', questionId: '갈 수___에 없다', answer: '밖', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Essay & Report Writing
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '논술과 보고서',
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
                title: '논술문 구조',
                titleId: 'Struktur Esai Argumentatif',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '서론', romanization: 'seoron', meaning: 'pendahuluan', example: '' },
                        { word: '본론', romanization: 'bonron', meaning: 'isi', example: '' },
                        { word: '결론', romanization: 'gyeollon', meaning: 'kesimpulan', example: '' },
                        { word: '논점', romanization: 'nonjeom', meaning: 'poin argumen', example: '' },
                    ],
                    tips: ['TOPIK II Writing: 서론 → 본론 → 결론'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Essay body in Korean?', questionId: 'Isi esai dalam Korea?', options: ['서론', '본론', '결론', '논점'], answer: '본론', order: 1 },
                ],
            },
            {
                title: '학술적 표현',
                titleId: 'Ekspresi Akademik',
                order: 2, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '~(으)ㄹ 것으로 보인다', romanization: '~(eu)l geoseuro boinda', meaning: 'tampaknya', example: '증가할 것으로 보인다' },
                        { word: '~에 기초하여', romanization: '~e gichohayeo', meaning: 'berdasarkan', example: '연구에 기초하여 분석했다' },
                    ],
                    tips: ['Gunakan pasif dan perkiraan untuk kesan objektif'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '연구에 기___하여', questionId: '연구에 기___하여', answer: '초', order: 1 },
                ],
            },
        ],
    },

    // Course 3: News Analysis
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '뉴스 분석',
        titleId: 'Analisis Berita',
        description: 'Analyze Korean news and media',
        descriptionId: 'Menganalisis berita dan media Korea',
        order: 3,
        canDo: {
            listening: 'Dapat memahami siaran berita',
            reading: 'Dapat membaca artikel mendalam',
            speaking: 'Dapat mendiskusikan isu terkini',
            writing: 'Dapat menulis komentar editorial'
        },
        lessons: [
            {
                title: '뉴스 어휘',
                titleId: 'Kosakata Berita',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '발표', romanization: 'balpyo', meaning: 'pengumuman', example: '정부가 발표했다' },
                        { word: '정책', romanization: 'jeongchaek', meaning: 'kebijakan', example: '새로운 정책을 시행한다' },
                        { word: '여론', romanization: 'yeoron', meaning: 'opini publik', example: '여론 조사 결과' },
                    ],
                    tips: ['Berita Korea sering pakai kata Sino-Korean'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 정책?', questionId: 'Apa 정책?', options: ['Politik', 'Kebijakan', 'Partai', 'Ekonomi'], answer: 'Kebijakan', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Advanced Business Korean
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '고급 비즈니스 한국어',
        titleId: 'Bahasa Korea Bisnis Lanjutan',
        description: 'High-level professional communication',
        descriptionId: 'Komunikasi profesional tingkat tinggi',
        order: 4,
        canDo: {
            listening: 'Dapat memahami negosiasi',
            reading: 'Dapat membaca kontrak',
            speaking: 'Dapat bernegosiasi',
            writing: 'Dapat menulis proposal'
        },
        lessons: [
            {
                title: '협상 언어',
                titleId: 'Bahasa Negosiasi',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '검토해 주시겠습니까', romanization: 'geomtohae jusigessseumnikka', meaning: 'Bisakah Anda pertimbangkan?', example: '' },
                        { word: '전향적으로 검토하겠습니다', romanization: 'jeonhyangjeogeuro geomtohagesseumnida', meaning: 'Akan kami pertimbangkan positif', example: '' },
                    ],
                    tips: ['Negosiasi Korea sangat tidak langsung'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '검토해 주시___습니까', questionId: '검토해 주시___습니까', answer: '겠', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Academic Korean
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '학술 한국어',
        titleId: 'Bahasa Korea Akademik',
        description: 'Korean for academic purposes',
        descriptionId: 'Bahasa Korea untuk tujuan akademik',
        order: 5,
        canDo: {
            listening: 'Dapat memahami kuliah universitas',
            reading: 'Dapat membaca paper akademik',
            speaking: 'Dapat presentasi akademik',
            writing: 'Dapat menulis paper'
        },
        lessons: [
            {
                title: '학술 발표',
                titleId: 'Presentasi Akademik',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '본 연구에서는', romanization: 'bon yeongueseoeneun', meaning: 'dalam penelitian ini', example: '' },
                        { word: '선행 연구', romanization: 'seonhaeng yeongu', meaning: 'penelitian sebelumnya', example: '' },
                        { word: '결론적으로', romanization: 'gyeollonjeogeu로', meaning: 'sebagai kesimpulan', example: '' },
                    ],
                    tips: ['Akademik Korea sangat formal'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___행 연구', questionId: '___행 연구', answer: '선', order: 1 },
                ],
            },
        ],
    },
];

export default koreanB2Courses1to5;
