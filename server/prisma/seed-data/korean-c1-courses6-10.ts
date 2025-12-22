// Korean C1 Courses 6-10 - Translation, Business Expert, Cultural Mastery, Hanja, TOPIK 5
// CEFR Level C1 (≈TOPIK 5)

export const koreanC1Courses6to10 = [
    // Course 6: Translation Skills
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '번역 스킬',
        titleId: 'Keterampilan Terjemahan',
        description: 'Master Korean-Indonesian translation',
        descriptionId: 'Kuasai terjemahan Korea-Indonesia',
        order: 6,
        canDo: {
            listening: 'Dapat menerjemahkan percakapan langsung',
            reading: 'Dapat menerjemahkan teks kompleks',
            speaking: 'Dapat melakukan interpretasi',
            writing: 'Dapat menerjemahkan dokumen formal'
        },
        lessons: [
            {
                title: '번역 기법',
                titleId: 'Teknik Terjemahan',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '의역', romanization: 'uiyeok', meaning: 'terjemahan bebas', example: '' },
                        { word: '직역', romanization: 'jikyeok', meaning: 'terjemahan literal', example: '' },
                    ],
                    tips: ['Prioritaskan makna, bukan kata per kata'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Free translation?', questionId: 'Terjemahan bebas?', options: ['직역', '의역', '번역', '통역'], answer: '의역', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Business Expert
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '비즈니스 전문가',
        titleId: 'Ahli Bisnis',
        description: 'Expert-level business Korean',
        descriptionId: 'Bahasa Korea bisnis tingkat ahli',
        order: 7,
        canDo: {
            listening: 'Dapat memahami diskusi bisnis kompleks',
            reading: 'Dapat membaca kontrak',
            speaking: 'Dapat memimpin meeting',
            writing: 'Dapat menulis kontrak'
        },
        lessons: [
            {
                title: '계약서 언어',
                titleId: 'Bahasa Kontrak',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '갑 / 을', romanization: 'gap / eul', meaning: 'pihak pertama / kedua', example: '' },
                        { word: '~하기로 한다', romanization: '~hagiro handa', meaning: 'disepakati untuk', example: '' },
                    ],
                    tips: ['갑을 관계 = hubungan kekuasaan dalam bisnis Korea'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '갑 / ___ (pihak kedua)', questionId: '갑 / ___', answer: '을', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Cultural Mastery
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '문화 마스터리',
        titleId: 'Penguasaan Budaya',
        description: 'Master nuances of Korean culture',
        descriptionId: 'Kuasai nuansa budaya Korea',
        order: 8,
        canDo: {
            listening: 'Dapat memahami humor dan referensi budaya',
            reading: 'Dapat membaca dengan pemahaman budaya',
            speaking: 'Dapat berkomunikasi dengan sensitivitas budaya',
            writing: 'Dapat menulis dengan kesadaran budaya'
        },
        lessons: [
            {
                title: '한국인의 가치관',
                titleId: 'Nilai-nilai Orang Korea',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '우리', romanization: 'uri', meaning: 'kita (konsep kolektif)', example: '' },
                        { word: '빨리빨리', romanization: 'ppalli ppalli', meaning: 'cepat cepat', example: '' },
                        { word: '정', romanization: 'jeong', meaning: 'kasih sayang/ikatan', example: '' },
                    ],
                    tips: ['우리 = konsep kolektivisme Korea'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What represents Korean collectivism?', questionId: 'Apa yang mewakili kolektivisme Korea?', options: ['나', '우리', '그', '저'], answer: '우리', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Hanja Expert
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: '한자 전문가',
        titleId: 'Ahli Hanja',
        description: 'Master Sino-Korean vocabulary',
        descriptionId: 'Kuasai kosakata Sino-Korea',
        order: 9,
        canDo: {
            listening: 'Dapat memahami kata Sino-Korea yang kompleks',
            reading: 'Dapat membaca teks dengan banyak kata Hanja',
            speaking: 'Dapat menggunakan kosakata Sino-Korea',
            writing: 'Dapat menulis dengan terminologi Hanja'
        },
        lessons: [
            {
                title: '고급 한자어',
                titleId: 'Kata Hanja Tingkat Tinggi',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '숙지', romanization: 'sukji', meaning: 'memahami dengan baik', example: '내용을 숙지하다' },
                        { word: '유의', romanization: 'yuui', meaning: 'perhatikan', example: '유의 사항' },
                        { word: '준수', romanization: 'junsu', meaning: 'mematuhi', example: '규칙을 준수하다' },
                    ],
                    tips: ['Banyak kata formal Korea berasal dari Hanja'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '규칙을 ___수하다 (mematuhi)', questionId: '규칙을 ___수하다', answer: '준', order: 1 },
                ],
            },
        ],
    },

    // Course 10: TOPIK 5 Mastery
    {
        language: 'ko',
        level: 'C1',
        localStandard: 'TOPIK 5',
        title: 'TOPIK 5 완전 대비',
        titleId: 'Persiapan Lengkap TOPIK 5',
        description: 'Complete TOPIK 5 preparation',
        descriptionId: 'Persiapan lengkap TOPIK 5',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab soal listening TOPIK 5',
            reading: 'Dapat menjawab soal reading TOPIK 5',
            speaking: 'Tidak ada speaking di TOPIK',
            writing: 'Dapat menulis esai TOPIK tingkat tinggi'
        },
        lessons: [
            {
                title: 'TOPIK 고급 문법',
                titleId: 'Grammar TOPIK Tingkat Tinggi',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '~(으)ㄴ/는 셈이다', romanization: '~(eu)n/neun semida', meaning: 'bisa dibilang', example: '성공한 셈이다' },
                        { word: '~(으)ㄹ 따름이다', romanization: '~(eu)l ttareumida', meaning: 'hanya...saja', example: '감사할 따름이다' },
                    ],
                    tips: ['Grammar tingkat 5-6 sangat formal dan nuanced'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '성공한 ___이다', questionId: '성공한 ___이다', answer: '셈', order: 1 },
                ],
            },
            {
                title: 'TOPIK 쓰기 고급',
                titleId: 'Writing TOPIK Tingkat Tinggi',
                order: 2, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: '~다고 볼 수 있다', romanization: '~dago bol su itda', meaning: 'dapat dianggap bahwa', example: '' },
                        { word: '~(으)ㅁ이 분명하다', romanization: '~(eu)mi bunmyeonghada', meaning: 'jelas bahwa', example: '' },
                    ],
                    tips: ['Task 54: 700자 minimum untuk skor tinggi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'TOPIK II level 5 score?', questionId: 'Skor TOPIK II level 5?', options: ['120-149', '150-189', '190-229', '230+'], answer: '190-229', order: 1 },
                ],
            },
        ],
    },
];

export default koreanC1Courses6to10;
