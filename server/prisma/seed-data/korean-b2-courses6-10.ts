// Korean B2 Courses 6-10 - Debate, Technical, Culture, Idioms Advanced, TOPIK
// CEFR Level B2 (≈TOPIK 4)

export const koreanB2Courses6to10 = [
    // Course 6: Debate & Discussion
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '토론과 논쟁',
        titleId: 'Debat dan Diskusi',
        description: 'Debate complex topics',
        descriptionId: 'Berdebat topik kompleks',
        order: 6,
        canDo: {
            listening: 'Dapat memahami argumen kompleks',
            reading: 'Dapat membaca teks argumentatif',
            speaking: 'Dapat berdebat efektif',
            writing: 'Dapat menulis argumen'
        },
        lessons: [
            {
                title: '토론 진행',
                titleId: 'Memimpin Debat',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '~라는 견해도 있다', romanization: '~raneun gyeonhaedo itda', meaning: 'ada juga pandangan bahwa', example: '' },
                        { word: '일률적으로 말할 수 없다', romanization: 'illyuljeogeuro malhal su eopda', meaning: 'tidak bisa digeneralisasi', example: '' },
                    ],
                    tips: ['Hindari pernyataan absolut'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '일률적으로 말___수 없다', questionId: '일률적으로 말___수 없다', answer: '할', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Technical Korean
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '기술 한국어',
        titleId: 'Bahasa Korea Teknis',
        description: 'Technical vocabulary and communication',
        descriptionId: 'Kosakata dan komunikasi teknis',
        order: 7,
        canDo: {
            listening: 'Dapat memahami penjelasan teknis',
            reading: 'Dapat membaca dokumentasi',
            speaking: 'Dapat menjelaskan proses',
            writing: 'Dapat menulis dokumentasi'
        },
        lessons: [
            {
                title: 'IT 용어',
                titleId: 'Istilah IT',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '구현', romanization: 'guhyeon', meaning: 'implementasi', example: '기능을 구현하다' },
                        { word: '개발 환경', romanization: 'gaebal hwangyeong', meaning: 'development environment', example: '' },
                        { word: '오류', romanization: 'oryu', meaning: 'error', example: '오류를 수정하다' },
                    ],
                    tips: ['Banyak istilah IT dari bahasa Inggris (Konglish)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 오류?', questionId: 'Apa 오류?', options: ['Fitur', 'Error', 'Update', 'File'], answer: 'Error', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Korean Culture Advanced
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '한국 문화 심화',
        titleId: 'Budaya Korea Lanjutan',
        description: 'Deep understanding of Korean society',
        descriptionId: 'Pemahaman mendalam masyarakat Korea',
        order: 8,
        canDo: {
            listening: 'Dapat memahami diskusi budaya',
            reading: 'Dapat membaca tentang sejarah',
            speaking: 'Dapat mendiskusikan budaya',
            writing: 'Dapat menulis analisis budaya'
        },
        lessons: [
            {
                title: '한국 사회 특징',
                titleId: 'Karakteristik Masyarakat Korea',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '눈치', romanization: 'nunchi', meaning: 'baca situasi', example: '눈치가 빠르다' },
                        { word: '정', romanization: 'jeong', meaning: 'kasih sayang/ikatan', example: '정이 많다' },
                        { word: '체면', romanization: 'chemyeon', meaning: 'muka/gengsi', example: '체면을 세우다' },
                    ],
                    tips: ['Memahami konsep ini penting untuk interaksi sosial'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 눈치?', questionId: 'Apa 눈치?', options: ['Mata', 'Baca situasi', 'Dengar', 'Bicara'], answer: 'Baca situasi', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Advanced Idioms
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: '고급 관용어',
        titleId: 'Idiom Lanjutan',
        description: 'Advanced Korean idioms and expressions',
        descriptionId: 'Idiom dan ekspresi Korea lanjutan',
        order: 9,
        canDo: {
            listening: 'Dapat memahami idiom dalam konteks',
            reading: 'Dapat membaca teks dengan idiom',
            speaking: 'Dapat menggunakan idiom tepat',
            writing: 'Dapat menulis dengan idiom'
        },
        lessons: [
            {
                title: '사자성어',
                titleId: 'Idiom 4 Karakter',
                order: 1, xpReward: 40,
                content: {
                    vocabulary: [
                        { word: '고진감래', romanization: 'gojingamnae', meaning: 'setelah pahit datang manis', example: '' },
                        { word: '일석이조', romanization: 'ilseogijo', meaning: 'dua burung satu batu', example: '' },
                        { word: '유비무환', romanization: 'yubimuhwan', meaning: 'bersiap = tidak khawatir', example: '' },
                    ],
                    tips: ['Saja-seongeo berasal dari Cina, sering di TOPIK'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '일석이___ (two birds)', questionId: '일석이___', answer: '조', order: 1 },
                ],
            },
        ],
    },

    // Course 10: TOPIK II Preparation
    {
        language: 'ko',
        level: 'B2',
        localStandard: 'TOPIK 4',
        title: 'TOPIK II 대비',
        titleId: 'Persiapan TOPIK II',
        description: 'Comprehensive TOPIK II preparation',
        descriptionId: 'Persiapan komprehensif TOPIK II',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab soal listening',
            reading: 'Dapat menjawab soal reading',
            speaking: 'Dapat menggunakan grammar TOPIK',
            writing: 'Dapat menulis esai TOPIK'
        },
        lessons: [
            {
                title: 'TOPIK 문법 정리',
                titleId: 'Ringkasan Grammar TOPIK',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '~기는커녕', romanization: '~giNeunkeonyeong', meaning: 'jangankan', example: '돕기는커녕 방해만 한다' },
                        { word: '~는다면야', romanization: '~neundamyeonya', meaning: 'kalau memang', example: '간다면야 같이 가겠다' },
                    ],
                    tips: ['Fokus pada grammar tingkat 4-5'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '돕기는___녕 방해만 한다', questionId: '돕기는___녕 방해만 한다', answer: '커', order: 1 },
                ],
            },
            {
                title: 'TOPIK 쓰기 전략',
                titleId: 'Strategi Writing TOPIK',
                order: 2, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: '~다고 할 수 있다', romanization: '~dago hal su itda', meaning: 'dapat dikatakan', example: '' },
                        { word: '~을 통해', romanization: '~eul tonghae', meaning: 'melalui', example: '노력을 통해 성공했다' },
                    ],
                    tips: ['Task 54: 600-700 karakter, opini + alasan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'TOPIK II Writing Task 54?', questionId: 'TOPIK II Writing Task 54?', options: ['200자', '400자', '600-700자', '1000자'], answer: '600-700자', order: 1 },
                ],
            },
        ],
    },
];

export default koreanB2Courses6to10;
