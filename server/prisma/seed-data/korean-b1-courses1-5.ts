// Korean B1 Courses 1-5 - Advanced Grammar, Complex Sentences, Formal Writing, Reading, Business
// CEFR Level B1 (≈TOPIK 3)

export const koreanB1Courses1to5 = [
    // Course 1: Advanced Grammar
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '고급 문법',
        titleId: 'Tata Bahasa Lanjutan',
        description: 'Master advanced Korean grammar',
        descriptionId: 'Kuasai tata bahasa Korea lanjutan',
        order: 1,
        canDo: {
            listening: 'Dapat memahami kalimat kompleks',
            reading: 'Dapat membaca teks dengan grammar lanjutan',
            speaking: 'Dapat menggunakan grammar lanjutan',
            writing: 'Dapat menulis dengan variasi struktur'
        },
        lessons: [
            {
                title: '피동사 (Passive)',
                titleId: 'Bentuk Pasif',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '보이다', romanization: 'boida', meaning: 'terlihat', example: '산이 보여요' },
                        { word: '들리다', romanization: 'deullida', meaning: 'terdengar', example: '음악이 들려요' },
                        { word: '열리다', romanization: 'yeollida', meaning: 'terbuka', example: '문이 열렸어요' },
                        { word: '닫히다', romanization: 'dathida', meaning: 'tertutup', example: '문이 닫혔어요' },
                    ],
                    grammar: [
                        { pattern: '-이/히/리/기-', explanation: 'Suffiks pasif', examples: ['보다→보이다', '듣다→들리다'] },
                    ],
                    tips: ['Pasif Korea berbeda dari aktif + 되다'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Passive of 보다?', questionId: 'Pasif dari 보다?', options: ['보다', '보이다', '보되다', '봐지다'], answer: '보이다', order: 1 },
                ],
            },
            {
                title: '사동사 (Causative)',
                titleId: 'Bentuk Kausatif',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '먹이다', romanization: 'meogida', meaning: 'memberi makan', example: '아기에게 우유를 먹여요' },
                        { word: '입히다', romanization: 'iphida', meaning: 'memakaikan', example: '아이에게 옷을 입혀요' },
                        { word: '웃기다', romanization: 'utgida', meaning: 'membuat tertawa', example: '그 영화가 웃겨요' },
                    ],
                    grammar: [
                        { pattern: '-이/히/리/기/우/추-', explanation: 'Suffiks kausatif', examples: ['먹다→먹이다', '입다→입히다'] },
                    ],
                    tips: ['Kausatif = membuat seseorang melakukan sesuatu'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '아이에게 옷을 ___혀요 (memakaikan)', questionId: '아이에게 옷을 ___혀요', answer: '입', order: 1 },
                ],
            },
            {
                title: '추측 표현 (Guessing)',
                titleId: 'Ekspresi Dugaan',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '~(으)ㄴ/는 것 같다', romanization: '~(eu)n/neun geot gatda', meaning: 'sepertinya', example: '비가 올 것 같아요' },
                        { word: '~나 보다', romanization: '~na boda', meaning: 'kelihatannya', example: '피곤한가 봐요' },
                        { word: '~(으)ㄹ 모양이다', romanization: '~(eu)l moyangida', meaning: 'tampaknya', example: '늦을 모양이에요' },
                    ],
                    tips: ['~것 같다 paling umum dan aman digunakan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Seems like rain" is?', questionId: '"Sepertinya hujan"?', options: ['비가 와요', '비가 올 것 같아요', '비가 옵니다', '비예요'], answer: '비가 올 것 같아요', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Complex Sentences
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '복문 구조',
        titleId: 'Struktur Kalimat Kompleks',
        description: 'Build complex Korean sentences',
        descriptionId: 'Membuat kalimat Korea yang kompleks',
        order: 2,
        canDo: {
            listening: 'Dapat memahami kalimat panjang',
            reading: 'Dapat membaca teks kompleks',
            speaking: 'Dapat membuat kalimat kompleks',
            writing: 'Dapat menulis paragraf terstruktur'
        },
        lessons: [
            {
                title: '~(으)면서 (While)',
                titleId: 'Sambil',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '음악을 들으면서', romanization: 'eumakeul deureumyeonseo', meaning: 'sambil mendengar musik', example: '음악을 들으면서 공부해요' },
                        { word: '걸으면서', romanization: 'georeumyeonseo', meaning: 'sambil jalan', example: '걸으면서 이야기해요' },
                    ],
                    grammar: [
                        { pattern: '~(으)면서', explanation: 'Melakukan dua hal bersamaan', examples: ['TV를 보면서 밥을 먹어요'] },
                    ],
                    tips: ['Subjek harus sama untuk kedua aksi'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '음악을 들으___서 공부해요', questionId: '음악을 들으___서 공부해요', answer: '면', order: 1 },
                ],
            },
            {
                title: '~(으)ㄴ/는데 (Background)',
                titleId: 'Latar Belakang',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '바쁜데', romanization: 'bappeunde', meaning: 'sibuk tapi...', example: '지금 바쁜데 나중에 전화할게요' },
                        { word: '맛있는데', romanization: 'masinneunde', meaning: 'enak tapi...', example: '맛있는데 비싸요' },
                    ],
                    grammar: [
                        { pattern: '~(으)ㄴ/는데', explanation: 'Memberikan konteks/latar', examples: ['시간이 없는데 어떡해요?'] },
                    ],
                    tips: ['Sangat serbaguna - bisa kontras, alasan, atau transisi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Function of ~는데?', questionId: 'Fungsi ~는데?', options: ['Karena', 'Latar belakang/kontras', 'Kalau', 'Meskipun'], answer: 'Latar belakang/kontras', order: 1 },
                ],
            },
            {
                title: '~더라도/~아/어도 (Even if)',
                titleId: 'Meskipun',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '비가 와도', romanization: 'biga wado', meaning: 'meskipun hujan', example: '비가 와도 갈 거예요' },
                        { word: '바쁘더라도', romanization: 'bappeuderado', meaning: 'meskipun sibuk', example: '바쁘더라도 와 주세요' },
                    ],
                    grammar: [
                        { pattern: '~아/어도', explanation: 'Meskipun (umum)', examples: ['늦어도 괜찮아요'] },
                        { pattern: '~더라도', explanation: 'Meskipun (penekanan)', examples: ['힘들더라도 포기하지 마세요'] },
                    ],
                    tips: ['더라도 lebih kuat dari 아/어도'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '비가 와___갈 거예요 (meskipun)', questionId: '비가 와___갈 거예요', answer: '도', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Formal Writing
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '격식체 글쓰기',
        titleId: 'Penulisan Formal',
        description: 'Master formal written Korean',
        descriptionId: 'Kuasai penulisan formal Korea',
        order: 3,
        canDo: {
            listening: 'Dapat memahami bahasa formal',
            reading: 'Dapat membaca dokumen formal',
            speaking: 'Dapat berbicara formal',
            writing: 'Dapat menulis dokumen resmi'
        },
        lessons: [
            {
                title: '격식체 (Formal Style)',
                titleId: 'Gaya Formal',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '~(으)ㅂ니다/습니다', romanization: '~(eu)mnida/seumnida', meaning: 'formal ending', example: '감사합니다' },
                        { word: '~(으)시-', romanization: '~(eu)si-', meaning: 'hormat', example: '사장님께서 말씀하셨습니다' },
                        { word: '~에 관하여', romanization: '~e gwanhayeo', meaning: 'mengenai', example: '이 문제에 관하여...' },
                    ],
                    tips: ['Gunakan 하십시오체 untuk dokumen resmi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Most formal ending?', questionId: 'Akhiran paling formal?', options: ['~해요', '~합니다', '~해', '~하십니다'], answer: '~합니다', order: 1 },
                ],
            },
            {
                title: '이메일 쓰기',
                titleId: 'Menulis Email',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '안녕하십니까', romanization: 'annyeonghashimnikka', meaning: 'salam hormat', example: '' },
                        { word: '~드립니다', romanization: '~deurimnida', meaning: 'memberikan (hormat)', example: '연락드립니다' },
                        { word: '감사드립니다', romanization: 'gamsadeurimnida', meaning: 'terima kasih (formal)', example: '' },
                    ],
                    tips: ['Akhiri dengan 감사드립니다 atau 수고하세요'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '연락___립니다', questionId: '연락___립니다', answer: '드', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Reading Comprehension
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '읽기 이해',
        titleId: 'Pemahaman Bacaan',
        description: 'Improve reading comprehension',
        descriptionId: 'Tingkatkan pemahaman bacaan',
        order: 4,
        canDo: {
            listening: 'Dapat memahami narasi',
            reading: 'Dapat membaca artikel',
            speaking: 'Dapat merangkum bacaan',
            writing: 'Dapat menulis ringkasan'
        },
        lessons: [
            {
                title: '접속사 (Conjunctions)',
                titleId: 'Kata Penghubung',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '그러나', romanization: 'geureona', meaning: 'namun', example: '노력했다. 그러나 실패했다.' },
                        { word: '그래서', romanization: 'geuraeseo', meaning: 'oleh karena itu', example: '비가 왔다. 그래서 집에 있었다.' },
                        { word: '그리고', romanization: 'geurigo', meaning: 'dan', example: '밥을 먹었다. 그리고 커피를 마셨다.' },
                        { word: '하지만', romanization: 'hajiman', meaning: 'tetapi', example: '힘들었다. 하지만 재미있었다.' },
                    ],
                    tips: ['Kata penghubung kunci untuk memahami struktur teks'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"However" in Korean?', questionId: '"Namun" dalam Korea?', options: ['그래서', '그러나', '그리고', '그런데'], answer: '그러나', order: 1 },
                ],
            },
            {
                title: '빠르게 읽기',
                titleId: 'Membaca Cepat',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '주제', romanization: 'juje', meaning: 'topik utama', example: '이 글의 주제는...' },
                        { word: '요약', romanization: 'yoyak', meaning: 'ringkasan', example: '요약하면...' },
                        { word: '핵심', romanization: 'haeksim', meaning: 'inti', example: '핵심 내용은...' },
                    ],
                    tips: ['Baca paragraf pertama dan terakhir untuk ide utama'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '이 글의 ___는... (topik)', questionId: '이 글의 ___는...', answer: '주제', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Business Korean
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '비즈니스 한국어',
        titleId: 'Bahasa Korea Bisnis',
        description: 'Professional Korean for workplace',
        descriptionId: 'Bahasa Korea profesional untuk tempat kerja',
        order: 5,
        canDo: {
            listening: 'Dapat memahami meeting bisnis',
            reading: 'Dapat membaca dokumen bisnis',
            speaking: 'Dapat presentasi',
            writing: 'Dapat menulis laporan'
        },
        lessons: [
            {
                title: '회의 표현',
                titleId: 'Ekspresi Meeting',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '안건', romanization: 'angeon', meaning: 'agenda', example: '오늘의 안건은...' },
                        { word: '의견', romanization: 'uigyeon', meaning: 'pendapat', example: '의견 있으시면 말씀해 주세요' },
                        { word: '동의하다', romanization: 'donguihada', meaning: 'setuju', example: '저도 동의합니다' },
                    ],
                    tips: ['Gunakan 합니다체 dalam meeting'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"I agree" formally?', questionId: '"Saya setuju" formal?', options: ['좋아요', '동의합니다', '그래요', '네'], answer: '동의합니다', order: 1 },
                ],
            },
            {
                title: '발표하기',
                titleId: 'Presentasi',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '~에 대해 발표하겠습니다', romanization: '~e daehae balpyohagesseumnida', meaning: 'akan presentasi tentang', example: '' },
                        { word: '먼저', romanization: 'meonjeo', meaning: 'pertama', example: '먼저 배경을 설명하겠습니다' },
                        { word: '다음으로', romanization: 'daeumeruo', meaning: 'selanjutnya', example: '다음으로 데이터를 보겠습니다' },
                        { word: '마지막으로', romanization: 'majimageuro', meaning: 'terakhir', example: '마지막으로 정리하겠습니다' },
                    ],
                    tips: ['Struktur: 먼저 → 다음으로 → 마지막으로'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___으로 데이터를 보겠습니다', questionId: '___으로 데이터를 보겠습니다', answer: '다음', order: 1 },
                ],
            },
        ],
    },
];

export default koreanB1Courses1to5;
