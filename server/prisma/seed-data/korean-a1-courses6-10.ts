// Korean A1 Courses 6-10 - Workplace, Shopping, Directions, Food, Health
// CEFR Level A1 (≈TOPIK 1)

export const koreanA1Courses6to10 = [
    // Course 6: Workplace Korean
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '직장 한국어',
        titleId: 'Bahasa Korea di Tempat Kerja',
        description: 'Essential Korean for workplace',
        descriptionId: 'Bahasa Korea penting untuk tempat kerja',
        order: 6,
        canDo: {
            listening: 'Dapat memahami instruksi kerja sederhana',
            reading: 'Dapat membaca peringatan keselamatan',
            speaking: 'Dapat berkomunikasi dengan rekan kerja',
            writing: 'Dapat mengisi formulir sederhana'
        },
        lessons: [
            {
                title: '지시 받기',
                titleId: 'Menerima Instruksi',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '네, 알겠습니다', romanization: 'ne, algetsseumnida', meaning: 'Ya, saya mengerti', example: '' },
                        { word: '끝났습니다', romanization: 'kkeunnatsseumnida', meaning: 'Sudah selesai', example: '일이 끝났습니다' },
                        { word: '도와주세요', romanization: 'dowajuseyo', meaning: 'Tolong bantu', example: '' },
                        { word: '여기에 놓으세요', romanization: 'yeogie nouseyo', meaning: 'Taruh di sini', example: '' },
                    ],
                    tips: ['Selalu jawab 네, 알겠습니다 saat menerima instruksi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say "I finished"?', questionId: 'Bagaimana bilang "Sudah selesai"?', options: ['시작했습니다', '끝났습니다', '알겠습니다', '괜찮아요'], answer: '끝났습니다', order: 1 },
                ],
            },
            {
                title: '안전 용어',
                titleId: 'Istilah Keselamatan',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '위험해요!', romanization: 'wiheomhaeyo!', meaning: 'Bahaya!', example: '' },
                        { word: '조심하세요', romanization: 'josimhaseyo', meaning: 'Hati-hati', example: '' },
                        { word: '헬멧', romanization: 'helmet', meaning: 'Helm', example: '헬멧을 쓰세요' },
                        { word: '안전 제일', romanization: 'anjeon jeil', meaning: 'Keselamatan utama', example: '' },
                        { word: '비상구', romanization: 'bisanggu', meaning: 'Pintu darurat', example: '' },
                    ],
                    tips: ['위험해요! adalah kata penting untuk keselamatan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What to shout for danger?', questionId: 'Apa yang diteriakkan saat bahaya?', options: ['조심하세요', '위험해요', '끝났습니다', '네'], answer: '위험해요', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Shopping
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '쇼핑',
        titleId: 'Belanja',
        description: 'Shopping in Korea',
        descriptionId: 'Belanja di Korea',
        order: 7,
        canDo: {
            listening: 'Dapat memahami harga',
            reading: 'Dapat membaca label harga',
            speaking: 'Dapat bertanya harga dan membeli',
            writing: 'Dapat menulis daftar belanja'
        },
        lessons: [
            {
                title: '가격 물어보기',
                titleId: 'Menanyakan Harga',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '이거 얼마예요?', romanization: 'igeo eolmayeyo?', meaning: 'Ini berapa?', example: '' },
                        { word: '~원이에요', romanization: '~won-ieyo', meaning: '~ won', example: '오천 원이에요' },
                        { word: '비싸요', romanization: 'bissayo', meaning: 'Mahal', example: '' },
                        { word: '싸요', romanization: 'ssayo', meaning: 'Murah', example: '' },
                    ],
                    tips: ['Selalu gunakan 저기요 atau 여기요 untuk menarik perhatian'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to ask "How much?"', questionId: 'Bagaimana bertanya "Berapa?"', options: ['뭐예요', '어디예요', '얼마예요', '언제예요'], answer: '얼마예요', order: 1 },
                ],
            },
            {
                title: '사기',
                titleId: 'Membeli',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '이거 주세요', romanization: 'igeo juseyo', meaning: 'Saya mau ini', example: '' },
                        { word: '카드로', romanization: 'kadeuro', meaning: 'Dengan kartu', example: '카드로 할게요' },
                        { word: '현금으로', romanization: 'hyeongeumuro', meaning: 'Dengan tunai', example: '' },
                        { word: '영수증', romanization: 'yeongsujeung', meaning: 'Struk', example: '영수증 주세요' },
                    ],
                    tips: ['Korea sangat cashless - kartu diterima hampir di mana-mana'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '이거 ___. (Saya mau ini)', questionId: '이거 ___.', answer: '주세요', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Directions
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '길 안내',
        titleId: 'Arah dan Petunjuk',
        description: 'Getting around in Korea',
        descriptionId: 'Bepergian di Korea',
        order: 8,
        canDo: {
            listening: 'Dapat memahami petunjuk arah',
            reading: 'Dapat membaca papan stasiun',
            speaking: 'Dapat bertanya arah',
            writing: 'Dapat menulis alamat'
        },
        lessons: [
            {
                title: '장소 물어보기',
                titleId: 'Bertanya Lokasi',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '~이/가 어디예요?', romanization: '~i/ga eodiyeyo?', meaning: 'Di mana ~?', example: '역이 어디예요?' },
                        { word: '여기/거기/저기', romanization: 'yeogi/geogi/jeogi', meaning: 'Di sini/situ/sana', example: '화장실은 저기예요' },
                        { word: '오른쪽/왼쪽/직진', romanization: 'oreunjjok/oenjjok/jikjin', meaning: 'Kanan/Kiri/Lurus', example: '오른쪽으로 가세요' },
                    ],
                    tips: ['Gunakan 어디예요? untuk bertanya lokasi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to ask "Where is the station?"', questionId: 'Bagaimana bertanya "Di mana stasiun?"', options: ['역이 뭐예요', '역이 어디예요', '역이 언제예요', '역이 누구예요'], answer: '역이 어디예요', order: 1 },
                ],
            },
            {
                title: '대중교통',
                titleId: 'Transportasi Umum',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '지하철', romanization: 'jihacheol', meaning: 'Kereta bawah tanah', example: '지하철로 가요' },
                        { word: '버스', romanization: 'beoseu', meaning: 'Bus', example: '버스 정류장이 어디예요?' },
                        { word: '택시', romanization: 'taeksi', meaning: 'Taksi', example: '택시를 불러 주세요' },
                        { word: '환승', romanization: 'hwanseung', meaning: 'Transfer', example: '2호선으로 환승하세요' },
                    ],
                    tips: ['T-money atau Kakao Pay sangat berguna untuk transportasi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 환승?', questionId: 'Apa 환승?', options: ['Tiket', 'Transfer', 'Stasiun', 'Platform'], answer: 'Transfer', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Food
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '음식과 식당',
        titleId: 'Makanan dan Restoran',
        description: 'Ordering food in Korean',
        descriptionId: 'Memesan makanan dalam bahasa Korea',
        order: 9,
        canDo: {
            listening: 'Dapat memahami menu dan rekomendasi',
            reading: 'Dapat membaca menu',
            speaking: 'Dapat memesan makanan',
            writing: 'Dapat menulis pesanan'
        },
        lessons: [
            {
                title: '음식 이름',
                titleId: 'Nama Makanan',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: '밥', romanization: 'bap', meaning: 'Nasi', example: '밥 주세요' },
                        { word: '김치', romanization: 'gimchi', meaning: 'Kimchi', example: '' },
                        { word: '불고기', romanization: 'bulgogi', meaning: 'Bulgogi', example: '' },
                        { word: '비빔밥', romanization: 'bibimbap', meaning: 'Bibimbap', example: '' },
                        { word: '삼겹살', romanization: 'samgyeopsal', meaning: 'Daging perut babi', example: '' },
                    ],
                    tips: ['Makanan Korea umumnya disajikan dengan banyak side dish (반찬)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 밥?', questionId: 'Apa 밥?', options: ['Air', 'Nasi', 'Roti', 'Mie'], answer: 'Nasi', order: 1 },
                ],
            },
            {
                title: '주문하기',
                titleId: 'Memesan Makanan',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '~주세요', romanization: '~juseyo', meaning: 'Tolong ~', example: '비빔밥 주세요' },
                        { word: '메뉴판', romanization: 'menyupan', meaning: 'Menu', example: '메뉴판 주세요' },
                        { word: '물', romanization: 'mul', meaning: 'Air', example: '물 주세요' },
                        { word: '맵지 않게', romanization: 'maepji anke', meaning: 'Tidak pedas', example: '맵지 않게 해 주세요' },
                    ],
                    tips: ['Di Korea, air minum gratis di restoran'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '비빔밥 ___. (Tolong bibimbap)', questionId: '비빔밥 ___.', answer: '주세요', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Health
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '건강과 응급',
        titleId: 'Kesehatan dan Darurat',
        description: 'Health and emergency situations',
        descriptionId: 'Kesehatan dan situasi darurat',
        order: 10,
        canDo: {
            listening: 'Dapat memahami pertanyaan dokter',
            reading: 'Dapat membaca label obat',
            speaking: 'Dapat menjelaskan gejala',
            writing: 'Dapat mengisi formulir medis'
        },
        lessons: [
            {
                title: '몸',
                titleId: 'Bagian Tubuh',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: '머리', romanization: 'meori', meaning: 'Kepala', example: '머리가 아파요' },
                        { word: '배', romanization: 'bae', meaning: 'Perut', example: '배가 아파요' },
                        { word: '손/발', romanization: 'son/bal', meaning: 'Tangan/Kaki', example: '' },
                        { word: '눈/코/귀', romanization: 'nun/ko/gwi', meaning: 'Mata/Hidung/Telinga', example: '' },
                    ],
                    tips: ['~가/이 아파요 = ~ sakit'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '머리가 ___요 (Kepala sakit)', questionId: '머리가 ___요', answer: '아파', order: 1 },
                ],
            },
            {
                title: '병원과 약국',
                titleId: 'Rumah Sakit dan Apotek',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '열이 나요', romanization: 'yeori nayo', meaning: 'Demam', example: '' },
                        { word: '감기', romanization: 'gamgi', meaning: 'Flu', example: '감기에 걸렸어요' },
                        { word: '병원', romanization: 'byeongwon', meaning: 'Rumah sakit', example: '병원에 가고 싶어요' },
                        { word: '약', romanization: 'yak', meaning: 'Obat', example: '약 주세요' },
                    ],
                    tips: ['Di Korea, obat bisa dibeli di 약국 (apotek)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 병원?', questionId: 'Apa 병원?', options: ['Apotek', 'Rumah sakit', 'Klinik', 'Puskesmas'], answer: 'Rumah sakit', order: 1 },
                ],
            },
            {
                title: '긴급 상황',
                titleId: 'Situasi Darurat',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '도와주세요!', romanization: 'dowajuseyo!', meaning: 'Tolong!', example: '' },
                        { word: '경찰', romanization: 'gyeongchal', meaning: 'Polisi', example: '경찰을 불러 주세요' },
                        { word: '구급차', romanization: 'gugeupcha', meaning: 'Ambulans', example: '' },
                        { word: '불이야!', romanization: 'buriya!', meaning: 'Kebakaran!', example: '' },
                    ],
                    tips: ['Nomor darurat: 112 (polisi), 119 (ambulans/pemadam)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Emergency number for police in Korea?', questionId: 'Nomor darurat polisi Korea?', options: ['110', '112', '119', '911'], answer: '112', order: 1 },
                ],
            },
        ],
    },
];

export default koreanA1Courses6to10;
