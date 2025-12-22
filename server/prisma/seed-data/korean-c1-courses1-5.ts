// Korean C1 Courses 1-5 - Academic Advanced, Literary, Media, Specialized, Research
// CEFR Level C1 (≈TOPIK 5)

export const koreanC1Courses1to5 = [
    // Course 1: Advanced Academic Korean
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '학술 한국어 고급',
        titleId: 'Bahasa Korea Akademik Lanjutan',
        description: 'Academic Korean for research',
        descriptionId: 'Bahasa Korea akademik untuk riset',
        order: 1,
        canDo: {
            listening: 'Dapat memahami kuliah akademik kompleks',
            reading: 'Dapat membaca jurnal dan paper',
            speaking: 'Dapat presentasi riset',
            writing: 'Dapat menulis paper akademik'
        },
        lessons: [
            {
                title: '논문 작성법',
                titleId: 'Cara Menulis Paper',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '선행 연구에 의하면', romanization: 'seonhaeng yeongue uihamyeon', meaning: 'menurut penelitian sebelumnya', example: '' },
                        { word: '~라는 가설을 세웠다', romanization: '~raneun gaseoreul sewotda', meaning: 'menyusun hipotesis bahwa', example: '' },
                        { word: '~음을 시사한다', romanization: '~eumeul sisahanda', meaning: 'mengindikasikan bahwa', example: '' },
                    ],
                    tips: ['Struktur paper Korea mirip format internasional'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '선행 연구에 ___하면', questionId: '선행 연구에 ___하면', answer: '의', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Literary Analysis
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '문학 분석',
        titleId: 'Analisis Sastra',
        description: 'Analyze Korean literature',
        descriptionId: 'Menganalisis sastra Korea',
        order: 2,
        canDo: {
            listening: 'Dapat memahami diskusi sastra',
            reading: 'Dapat membaca sastra klasik dan modern',
            speaking: 'Dapat mendiskusikan tema sastra',
            writing: 'Dapat menulis kritik sastra'
        },
        lessons: [
            {
                title: '한국 문학 개관',
                titleId: 'Gambaran Sastra Korea',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '한', romanization: 'han', meaning: 'kesedihan/penderitaan mendalam', example: '' },
                        { word: '정한', romanization: 'jeonghan', meaning: 'rindu yang menyakitkan', example: '' },
                        { word: '흥', romanization: 'heung', meaning: 'sukacita/semangat', example: '' },
                    ],
                    tips: ['한 (han) adalah konsep estetika Korea yang unik'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 한?', questionId: 'Apa 한?', options: ['Kebahagiaan', 'Kesedihan mendalam', 'Kemarahan', 'Cinta'], answer: 'Kesedihan mendalam', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Media Analysis
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '미디어 분석',
        titleId: 'Analisis Media',
        description: 'Critically analyze Korean media',
        descriptionId: 'Menganalisis media Korea secara kritis',
        order: 3,
        canDo: {
            listening: 'Dapat memahami berita dan diskusi kompleks',
            reading: 'Dapat membaca editorial',
            speaking: 'Dapat mendiskusikan isu media',
            writing: 'Dapat menulis analisis media'
        },
        lessons: [
            {
                title: '뉴스 비평',
                titleId: 'Kritik Berita',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '편향 보도', romanization: 'pyeonhyang bodo', meaning: 'reportase bias', example: '' },
                        { word: '여론 조작', romanization: 'yeoron joak', meaning: 'manipulasi opini', example: '' },
                        { word: '~의 관점에서', romanization: '~ui gwanjeomeseo', meaning: 'dari perspektif', example: '' },
                    ],
                    tips: ['Media Korea: perhatikan afiliasi politik'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '편향 ___도', questionId: '편향 ___도', answer: '보', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Specialized Vocabulary
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '전문 어휘',
        titleId: 'Kosakata Spesialisasi',
        description: 'Master specialized vocabulary',
        descriptionId: 'Kuasai kosakata spesialisasi',
        order: 4,
        canDo: {
            listening: 'Dapat memahami diskusi teknis',
            reading: 'Dapat membaca dokumen spesialisasi',
            speaking: 'Dapat berbicara dengan presisi',
            writing: 'Dapat menulis dengan terminologi tepat'
        },
        lessons: [
            {
                title: '법률 용어',
                titleId: 'Terminologi Hukum',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '원고', romanization: 'wongo', meaning: 'penggugat', example: '' },
                        { word: '피고', romanization: 'pigo', meaning: 'tergugat', example: '' },
                        { word: '판결', romanization: 'pangyeol', meaning: 'putusan', example: '' },
                    ],
                    tips: ['Terminologi hukum Korea mirip Jepang (Sino-Korean)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 원고?', questionId: 'Apa 원고?', options: ['Hakim', 'Penggugat', 'Tergugat', 'Saksi'], answer: 'Penggugat', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Research & Presentation
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '연구와 발표',
        titleId: 'Riset dan Presentasi',
        description: 'Conduct and present research',
        descriptionId: 'Melakukan dan mempresentasikan riset',
        order: 5,
        canDo: {
            listening: 'Dapat memahami presentasi riset',
            reading: 'Dapat membaca metodologi riset',
            speaking: 'Dapat presentasi dengan percaya diri',
            writing: 'Dapat menulis proposal riset'
        },
        lessons: [
            {
                title: '학술 발표',
                titleId: 'Presentasi Akademik',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '본 연구의 목적은', romanization: 'bon yeongui mokjeogeun', meaning: 'tujuan penelitian ini adalah', example: '' },
                        { word: '~라는 결과를 얻었다', romanization: '~raneun gyeolgwareul eodeotda', meaning: 'diperoleh hasil bahwa', example: '' },
                        { word: '경청해 주셔서 감사합니다', romanization: 'gyeongcheonghae jusyeoseo gamsahamnida', meaning: 'terima kasih atas perhatiannya', example: '' },
                    ],
                    tips: ['Akhiri dengan 경청해 주셔서 감사합니다'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___청해 주셔서 감사합니다', questionId: '___청해 주셔서 감사합니다', answer: '경', order: 1 },
                ],
            },
        ],
    },
];

export default koreanC1Courses1to5;
