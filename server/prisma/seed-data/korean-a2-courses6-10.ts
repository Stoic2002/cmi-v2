// Korean A2 Courses 6-10 - Travel, Shopping, Food, Social, Culture
// CEFR Level A2 (≈TOPIK 2)

export const koreanA2Courses6to10 = [
    // Course 6: Travel & Transportation
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '여행과 교통',
        titleId: 'Perjalanan dan Transportasi',
        description: 'Travel and transportation in Korea',
        descriptionId: 'Perjalanan dan transportasi di Korea',
        order: 6,
        canDo: {
            listening: 'Dapat memahami pengumuman transportasi',
            reading: 'Dapat membaca jadwal dan peta',
            speaking: 'Dapat bertanya tentang rute',
            writing: 'Dapat menulis rencana perjalanan'
        },
        lessons: [
            {
                title: '대중교통 이용하기',
                titleId: 'Menggunakan Transportasi Umum',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '환승', romanization: 'hwanseung', meaning: 'transfer', example: '2호선으로 환승하세요' },
                        { word: '내리다', romanization: 'naerida', meaning: 'turun', example: '다음 역에서 내리세요' },
                        { word: '갈아타다', romanization: 'garatada', meaning: 'pindah', example: '여기서 갈아타세요' },
                    ],
                    grammar: [
                        { pattern: '~(으)면 되다', explanation: 'Cukup dengan...', examples: ['3번 출구로 나가면 돼요'] },
                    ],
                    tips: ['Gunakan KakaoMap atau NaverMap untuk navigasi'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '다음 역에서 ___세요 (turun)', questionId: '다음 역에서 ___세요', answer: '내리', order: 1 },
                ],
            },
            {
                title: '길 묻기 (Asking Directions)',
                titleId: 'Bertanya Arah',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '어떻게 가요?', romanization: 'eotteoke gayo', meaning: 'Bagaimana perginya?', example: '명동 어떻게 가요?' },
                        { word: '돌아가다', romanization: 'doragada', meaning: 'berputar/kembali', example: '저기서 돌아가세요' },
                        { word: '건너편', romanization: 'geonneopyeon', meaning: 'seberang', example: '건너편에 있어요' },
                    ],
                    tips: ['Tunjuk peta di HP jika kesulitan menjelaskan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Across the street?', questionId: 'Di seberang jalan?', options: ['저쪽', '건너편', '앞', '뒤'], answer: '건너편', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Shopping & Services
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '쇼핑과 서비스',
        titleId: 'Belanja dan Layanan',
        description: 'Shopping and service interactions',
        descriptionId: 'Belanja dan interaksi layanan',
        order: 7,
        canDo: {
            listening: 'Dapat memahami penjelasan produk',
            reading: 'Dapat membaca label produk',
            speaking: 'Dapat bernegosiasi dan bertanya',
            writing: 'Dapat mengisi formulir pemesanan'
        },
        lessons: [
            {
                title: '물건 사기',
                titleId: 'Membeli Barang',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '입어 봐도 돼요?', romanization: 'ibeo bwado dwaeyo', meaning: 'Boleh coba?', example: '' },
                        { word: '다른 색 있어요?', romanization: 'dareun saek isseoyo', meaning: 'Ada warna lain?', example: '' },
                        { word: '싸게 해 주세요', romanization: 'ssage hae juseyo', meaning: 'Murahkan dong', example: '' },
                    ],
                    grammar: [
                        { pattern: '~아/어 보다', explanation: 'Mencoba', examples: ['입어 보세요 (coba pakai)', '먹어 봐요 (coba makan)'] },
                    ],
                    tips: ['Tawar-menawar umum di pasar tradisional'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '입어 ___도 돼요? (boleh coba)', questionId: '입어 ___도 돼요?', answer: '봐', order: 1 },
                ],
            },
            {
                title: '환불과 교환',
                titleId: 'Retur dan Tukar',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '환불', romanization: 'hwanbul', meaning: 'refund', example: '환불해 주세요' },
                        { word: '교환', romanization: 'gyohwan', meaning: 'tukar', example: '사이즈 교환하고 싶어요' },
                        { word: '영수증', romanization: 'yeongsujeung', meaning: 'struk', example: '영수증 있으세요?' },
                    ],
                    tips: ['Bawa struk dan produk dalam kondisi baik'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 환불?', questionId: 'Apa 환불?', options: ['Tukar', 'Refund', 'Beli', 'Struk'], answer: 'Refund', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Food & Restaurants
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '음식과 식당',
        titleId: 'Makanan dan Restoran',
        description: 'Dining and food culture',
        descriptionId: 'Makan dan budaya makanan',
        order: 8,
        canDo: {
            listening: 'Dapat memahami rekomendasi menu',
            reading: 'Dapat membaca menu lengkap',
            speaking: 'Dapat memesan dengan preferensi',
            writing: 'Dapat menulis review makanan'
        },
        lessons: [
            {
                title: '주문하기',
                titleId: 'Memesan Makanan',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '이거로 할게요', romanization: 'igeoro halgeyo', meaning: 'Saya pilih ini', example: '' },
                        { word: '추천해 주세요', romanization: 'chucheonhae juseyo', meaning: 'Rekomendasikan dong', example: '' },
                        { word: '덜 맵게 해 주세요', romanization: 'deol maepge hae juseyo', meaning: 'Kurangi pedasnya', example: '' },
                    ],
                    grammar: [
                        { pattern: '~(으)ㄹ게요', explanation: 'Akan... (keputusan)', examples: ['이거 먹을게요 (saya akan makan ini)'] },
                    ],
                    tips: ['Katakan 덜 맵게 untuk mengurangi pedas'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '이거로 ___게요', questionId: '이거로 ___게요', answer: '할', order: 1 },
                ],
            },
            {
                title: '할랄/채식 (Halal/Vegetarian)',
                titleId: 'Makanan Halal/Vegetarian',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '할랄', romanization: 'hallal', meaning: 'halal', example: '할랄 음식 있어요?' },
                        { word: '돼지고기', romanization: 'dwaejigogi', meaning: 'daging babi', example: '돼지고기 빼 주세요' },
                        { word: '채식', romanization: 'chaesik', meaning: 'vegetarian', example: '채식 메뉴 있어요?' },
                    ],
                    tips: ['Korea banyak makanan dengan babi - selalu tanyakan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 돼지고기?', questionId: 'Apa 돼지고기?', options: ['Ayam', 'Sapi', 'Babi', 'Ikan'], answer: 'Babi', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Social Interactions
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '사회적 상호작용',
        titleId: 'Interaksi Sosial',
        description: 'Social interactions and relationships',
        descriptionId: 'Interaksi sosial dan hubungan',
        order: 9,
        canDo: {
            listening: 'Dapat memahami percakapan sosial',
            reading: 'Dapat membaca pesan dan undangan',
            speaking: 'Dapat berbicara dalam situasi sosial',
            writing: 'Dapat menulis pesan kepada teman'
        },
        lessons: [
            {
                title: '초대하기/거절하기',
                titleId: 'Mengajak dan Menolak',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '같이 갈래요?', romanization: 'gachi gallaeyo', meaning: 'Mau pergi bareng?', example: '' },
                        { word: '좀 어려울 것 같아요', romanization: 'jom eoryeoul geot gatayo', meaning: 'Sepertinya agak sulit', example: '' },
                        { word: '다음에 꼭', romanization: 'daeume kkok', meaning: 'Lain kali pasti', example: '다음에 꼭 같이 가요!' },
                    ],
                    grammar: [
                        { pattern: '~ㄹ 것 같다', explanation: 'Sepertinya akan...', examples: ['비가 올 것 같아요'] },
                    ],
                    tips: ['Jangan menolak langsung - gunakan "어려울 것 같아요"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite decline?', questionId: 'Menolak sopan?', options: ['안 가요', '싫어요', '좀 어려울 것 같아요', '못 가'], answer: '좀 어려울 것 같아요', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Korean Culture
    {
        language: 'ko',
        level: 'A2',
        localStandard: 'TOPIK 2',
        title: '한국 문화',
        titleId: 'Budaya Korea',
        description: 'Understanding Korean culture',
        descriptionId: 'Memahami budaya Korea',
        order: 10,
        canDo: {
            listening: 'Dapat memahami tentang budaya Korea',
            reading: 'Dapat membaca tentang tradisi',
            speaking: 'Dapat berbicara tentang budaya',
            writing: 'Dapat menulis tentang pengalaman budaya'
        },
        lessons: [
            {
                title: '명절 (Holidays)',
                titleId: 'Hari Raya',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '설날', romanization: 'seollal', meaning: 'Tahun Baru Lunar', example: '설날에 떡국을 먹어요' },
                        { word: '추석', romanization: 'chuseok', meaning: 'Harvest Festival', example: '추석에 송편을 만들어요' },
                        { word: '세배', romanization: 'sebae', meaning: 'sujud hormat', example: '어른들께 세배를 해요' },
                    ],
                    tips: ['Selama 설날 dan 추석, banyak toko tutup'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 설날?', questionId: 'Apa 설날?', options: ['Natal', 'Tahun Baru Lunar', 'Chuseok', 'Ulang Tahun'], answer: 'Tahun Baru Lunar', order: 1 },
                ],
            },
            {
                title: '예절 (Etiquette)',
                titleId: 'Etika',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '존댓말', romanization: 'jondaenmal', meaning: 'bahasa sopan', example: '어른에게는 존댓말을 써요' },
                        { word: '두 손으로', romanization: 'du sonuro', meaning: 'dengan dua tangan', example: '두 손으로 받으세요' },
                        { word: '나이', romanization: 'nai', meaning: 'umur', example: '나이가 중요해요' },
                    ],
                    tips: ['Terima dan berikan dengan dua tangan untuk sopan'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '두 ___으로 받으세요', questionId: '두 ___으로 받으세요', answer: '손', order: 1 },
                ],
            },
        ],
    },
];

export default koreanA2Courses6to10;
