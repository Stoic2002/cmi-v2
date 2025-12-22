// Korean A2 Courses 1-5 - Verb Conjugation, Adjectives, Formal Speech, Conversations, Work
// CEFR Level A2 (≈TOPIK 2)

export const koreanA2Courses1to5 = [
    // Course 1: Verb Conjugation Basics
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '동사 활용',
        titleId: 'Konjugasi Kata Kerja',
        description: 'Master Korean verb conjugation patterns',
        descriptionId: 'Kuasai pola konjugasi kata kerja Korea',
        order: 1,
        canDo: {
            listening: 'Dapat memahami berbagai bentuk kata kerja',
            reading: 'Dapat membaca teks dengan berbagai konjugasi',
            speaking: 'Dapat menggunakan berbagai bentuk kata kerja',
            writing: 'Dapat menulis dengan konjugasi yang benar'
        },
        lessons: [
            {
                title: '해요체 (Polite Informal)',
                titleId: 'Bentuk Sopan Informal (Haeyo)',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '가요', romanization: 'gayo', meaning: 'pergi (sopan)', example: '학교에 가요' },
                        { word: '먹어요', romanization: 'meogeoyo', meaning: 'makan (sopan)', example: '밥을 먹어요' },
                        { word: '마셔요', romanization: 'masyeoyo', meaning: 'minum (sopan)', example: '물을 마셔요' },
                        { word: '해요', romanization: 'haeyo', meaning: 'melakukan (sopan)', example: '운동을 해요' },
                    ],
                    grammar: [
                        { pattern: 'Stem + 아/어요', explanation: 'Bentuk sopan informal', examples: ['가다 → 가요', '먹다 → 먹어요', '하다 → 해요'] },
                    ],
                    tips: ['Gunakan 아요 setelah vokal ㅏ atau ㅗ, 어요 untuk lainnya'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '오다 → 와___', questionId: '오다 → 와___', answer: '요', order: 1 },
                    { type: 'multiple_choice', question: 'What is 먹다 in haeyo form?', questionId: 'Apa bentuk haeyo dari 먹다?', options: ['먹아요', '먹어요', '먹오요', '먹요'], answer: '먹어요', order: 2 },
                ],
            },
            {
                title: '합니다체 (Formal Polite)',
                titleId: 'Bentuk Formal Sopan (Hamnida)',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '갑니다', romanization: 'gamnida', meaning: 'pergi (formal)', example: '회사에 갑니다' },
                        { word: '먹습니다', romanization: 'meokseumnida', meaning: 'makan (formal)', example: '점심을 먹습니다' },
                        { word: '합니다', romanization: 'hamnida', meaning: 'melakukan (formal)', example: '일을 합니다' },
                    ],
                    grammar: [
                        { pattern: 'Stem + ㅂ/습니다', explanation: 'Bentuk formal', examples: ['가다 → 갑니다', '먹다 → 먹습니다'] },
                    ],
                    tips: ['Gunakan 합니다체 di tempat kerja, presentasi, berita'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '읽다 in formal?', questionId: '읽다 dalam formal?', options: ['읽습니다', '읽니다', '읽합니다', '읽입니다'], answer: '읽습니다', order: 1 },
                ],
            },
            {
                title: '과거형 (Past Tense)',
                titleId: 'Bentuk Lampau',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '갔어요', romanization: 'gasseoyo', meaning: 'pergi (lampau)', example: '어제 시장에 갔어요' },
                        { word: '먹었어요', romanization: 'meogeosseoyo', meaning: 'makan (lampau)', example: '점심을 먹었어요' },
                        { word: '했어요', romanization: 'haesseoyo', meaning: 'melakukan (lampau)', example: '숙제를 했어요' },
                    ],
                    grammar: [
                        { pattern: 'Stem + 았/었어요', explanation: 'Bentuk lampau', examples: ['가다 → 갔어요', '먹다 → 먹었어요'] },
                    ],
                    tips: ['Lampau formal: 았/었습니다'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '마시다 → 마___어요', questionId: '마시다 → 마___어요', answer: '셨', order: 1 },
                ],
            },
            {
                title: '부정형 (Negative)',
                titleId: 'Bentuk Negatif',
                order: 4, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '안 가요', romanization: 'an gayo', meaning: 'tidak pergi', example: '오늘은 안 가요' },
                        { word: '못 먹어요', romanization: 'mot meogeoyo', meaning: 'tidak bisa makan', example: '매운 음식을 못 먹어요' },
                        { word: '~지 않아요', romanization: '~ji anayo', meaning: 'tidak...', example: '알지 않아요' },
                    ],
                    grammar: [
                        { pattern: '안 + verb', explanation: 'Tidak (pilihan)', examples: ['안 가요', '안 먹어요'] },
                        { pattern: '못 + verb', explanation: 'Tidak bisa (kemampuan)', examples: ['못 해요', '못 와요'] },
                    ],
                    tips: ['안 = tidak mau, 못 = tidak bisa'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Cannot speak Korean?', questionId: 'Tidak bisa bicara Korea?', options: ['한국어 안 해요', '한국어 못 해요', '한국어 지 않아요', '한국어 없어요'], answer: '한국어 못 해요', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Adjective Patterns
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '형용사 패턴',
        titleId: 'Pola Kata Sifat',
        description: 'Using adjectives correctly',
        descriptionId: 'Menggunakan kata sifat dengan benar',
        order: 2,
        canDo: {
            listening: 'Dapat memahami deskripsi',
            reading: 'Dapat membaca teks deskriptif',
            speaking: 'Dapat mendeskripsikan orang dan benda',
            writing: 'Dapat menulis deskripsi'
        },
        lessons: [
            {
                title: '형용사 활용',
                titleId: 'Konjugasi Kata Sifat',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '좋아요', romanization: 'joayo', meaning: 'bagus (sopan)', example: '날씨가 좋아요' },
                        { word: '비싸요', romanization: 'bissayo', meaning: 'mahal (sopan)', example: '이 가방이 비싸요' },
                        { word: '작아요', romanization: 'jagayo', meaning: 'kecil (sopan)', example: '방이 작아요' },
                    ],
                    grammar: [
                        { pattern: 'Adjective stem + 아/어요', explanation: 'Bentuk sopan', examples: ['좋다 → 좋아요', '크다 → 커요'] },
                    ],
                    tips: ['Kata sifat Korea dikonjugasi sama seperti kata kerja'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '예쁘다 → 예뻐___', questionId: '예쁘다 → 예뻐___', answer: '요', order: 1 },
                ],
            },
            {
                title: '형용사 + 명사',
                titleId: 'Kata Sifat + Kata Benda',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '좋은 날씨', romanization: 'joeun nalssi', meaning: 'cuaca bagus', example: '좋은 날씨네요!' },
                        { word: '비싼 가방', romanization: 'bissan gabang', meaning: 'tas mahal', example: '비싼 가방을 샀어요' },
                        { word: '큰 집', romanization: 'keun jip', meaning: 'rumah besar', example: '큰 집에 살고 싶어요' },
                    ],
                    grammar: [
                        { pattern: 'ㄴ/은 + noun', explanation: 'Modifikasi kata benda', examples: ['좋다 → 좋은', '크다 → 큰', '작다 → 작은'] },
                    ],
                    tips: ['Hapus 다, tambah ㄴ/은'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say "delicious food"?', questionId: 'Bagaimana bilang "makanan enak"?', options: ['맛있다 음식', '맛있는 음식', '맛있은 음식', '맛있어 음식'], answer: '맛있는 음식', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Formal vs Informal Speech
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '존댓말과 반말',
        titleId: 'Bahasa Formal dan Informal',
        description: 'Understanding Korean speech levels',
        descriptionId: 'Memahami tingkat kesopanan Korea',
        order: 3,
        canDo: {
            listening: 'Dapat membedakan level kesopanan',
            reading: 'Dapat membaca berbagai gaya bahasa',
            speaking: 'Dapat menggunakan level yang tepat',
            writing: 'Dapat menulis dengan tingkat yang sesuai'
        },
        lessons: [
            {
                title: '존댓말 (Formal Speech)',
                titleId: 'Bahasa Formal',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '드시다', romanization: 'deusida', meaning: 'makan (hormat)', example: '식사 드세요 (silakan makan)' },
                        { word: '주무시다', romanization: 'jumusida', meaning: 'tidur (hormat)', example: '안녕히 주무세요' },
                        { word: '계시다', romanization: 'gyesida', meaning: 'ada (hormat)', example: '사장님 계세요?' },
                    ],
                    grammar: [
                        { pattern: '-(으)세요', explanation: 'Hormat untuk perintah/pertanyaan', examples: ['가세요', '드세요', '잡수세요'] },
                    ],
                    tips: ['Gunakan bahasa hormat untuk atasan dan orang tua'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite "please eat"?', questionId: 'Sopan untuk "silakan makan"?', options: ['먹어요', '먹으세요', '드세요', '잡수'], answer: '드세요', order: 1 },
                ],
            },
            {
                title: '반말 (Informal Speech)',
                titleId: 'Bahasa Informal',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '가', romanization: 'ga', meaning: 'pergi (casual)', example: '어디 가?' },
                        { word: '뭐 해?', romanization: 'mwo hae', meaning: 'lagi apa?', example: '지금 뭐 해?' },
                        { word: '알았어', romanization: 'arasseo', meaning: 'oke/mengerti', example: '알았어, 기다려' },
                    ],
                    grammar: [
                        { pattern: 'Hapus 요', explanation: 'Informal dari haeyo', examples: ['가요 → 가', '해요 → 해', '먹어요 → 먹어'] },
                    ],
                    tips: ['Gunakan HANYA dengan teman sebaya atau yang lebih muda'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '가요 → ___', questionId: '가요 → ___', answer: '가', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Daily Conversations
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '일상 대화',
        titleId: 'Percakapan Sehari-hari',
        description: 'Natural daily conversations',
        descriptionId: 'Percakapan sehari-hari yang natural',
        order: 4,
        canDo: {
            listening: 'Dapat memahami percakapan sehari-hari',
            reading: 'Dapat membaca dialog dan pesan',
            speaking: 'Dapat berbicara dalam situasi harian',
            writing: 'Dapat menulis pesan chat'
        },
        lessons: [
            {
                title: '약속하기 (Making Plans)',
                titleId: 'Membuat Janji',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '시간 있어요?', romanization: 'sigan isseoyo', meaning: 'Ada waktu?', example: '내일 시간 있어요?' },
                        { word: '같이 갈래요?', romanization: 'gachi gallaeyo', meaning: 'Mau pergi bareng?', example: '영화 같이 갈래요?' },
                        { word: '약속', romanization: 'yaksok', meaning: 'janji', example: '약속이 있어요' },
                    ],
                    grammar: [
                        { pattern: '-(으)ㄹ래요?', explanation: 'Mengajak/menawarkan', examples: ['갈래요? (mau pergi?)', '먹을래요? (mau makan?)'] },
                    ],
                    tips: ['-(으)ㄹ래요 sangat casual - untuk teman'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '같이 영화 볼___요?', questionId: '같이 영화 볼___요?', answer: '래', order: 1 },
                ],
            },
            {
                title: '이유 말하기 (Giving Reasons)',
                titleId: 'Memberikan Alasan',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '~아/어서', romanization: '~aseo/eoseo', meaning: 'karena', example: '피곤해서 집에 있어요' },
                        { word: '~(으)니까', romanization: '~(eu)nikka', meaning: 'karena', example: '비가 오니까 우산을 가져가세요' },
                    ],
                    grammar: [
                        { pattern: '~아/어서', explanation: 'Karena (netral)', examples: ['바빠서 못 갔어요'] },
                        { pattern: '~(으)니까', explanation: 'Karena (penekanan)', examples: ['추우니까 문 닫으세요'] },
                    ],
                    tips: ['아/어서 untuk fakta, (으)니까 untuk perintah/saran'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '"Because I am tired"?', questionId: '"Karena saya lelah"?', options: ['피곤해요', '피곤해서', '피곤하니까', '피곤한'], answer: '피곤해서', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Work Communication
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '직장 소통',
        titleId: 'Komunikasi Kerja',
        description: 'Professional workplace communication',
        descriptionId: 'Komunikasi profesional di tempat kerja',
        order: 5,
        canDo: {
            listening: 'Dapat memahami instruksi dan meeting',
            reading: 'Dapat membaca email kerja',
            speaking: 'Dapat berkomunikasi secara profesional',
            writing: 'Dapat menulis email bisnis'
        },
        lessons: [
            {
                title: '보고하기 (Reporting)',
                titleId: 'Melaporkan',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '보고드립니다', romanization: 'bogodeurimnida', meaning: 'saya laporkan', example: '결과를 보고드립니다' },
                        { word: '완료했습니다', romanization: 'wanlyo haesseumnida', meaning: 'sudah selesai', example: '업무를 완료했습니다' },
                        { word: '확인해 주세요', romanization: 'hwaginhae juseyo', meaning: 'mohon periksa', example: '서류를 확인해 주세요' },
                    ],
                    tips: ['Gunakan 합니다체 saat melaporkan ke atasan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to report completion?', questionId: 'Bagaimana melaporkan selesai?', options: ['끝났어요', '완료했습니다', '다 했어', '끝'], answer: '완료했습니다', order: 1 },
                ],
            },
            {
                title: '부탁하기 (Making Requests)',
                titleId: 'Meminta Tolong',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '부탁드립니다', romanization: 'butakdeurimnida', meaning: 'mohon bantuan', example: '잘 부탁드립니다' },
                        { word: '~해 주시겠어요?', romanization: '~hae jusigesseoyo', meaning: 'Maukah Anda...?', example: '도와주시겠어요?' },
                        { word: '죄송합니다만', romanization: 'joesonghamnidaman', meaning: 'Maaf tapi...', example: '죄송합니다만, 다시 설명해 주시겠어요?' },
                    ],
                    grammar: [
                        { pattern: '~해 주시겠어요?', explanation: 'Permintaan sopan', examples: ['확인해 주시겠어요?'] },
                    ],
                    tips: ['Awali dengan 죄송합니다만 untuk lebih sopan'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '확인해 주시___어요?', questionId: '확인해 주시___어요?', answer: '겠', order: 1 },
                ],
            },
        ],
    },
];

export default koreanA2Courses1to5;
