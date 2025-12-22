// Japanese A2 Courses 6-10 - Travel, Shopping, Food, Social, Kanji
// CEFR Level A2 (≈JLPT N4)

export const japaneseA2Courses6to10 = [
    // Course 6: Travel & Transportation
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '旅行と交通',
        titleId: 'Perjalanan dan Transportasi',
        description: 'Travel and transportation in Japan',
        descriptionId: 'Perjalanan dan transportasi di Jepang',
        order: 6,
        canDo: {
            listening: 'Dapat memahami pengumuman transportasi',
            reading: 'Dapat membaca jadwal dan peta',
            speaking: 'Dapat bertanya tentang rute dan jadwal',
            writing: 'Dapat menulis rencana perjalanan'
        },
        lessons: [
            {
                title: '電車に乗る (Taking Trains)',
                titleId: 'Naik Kereta',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '乗り換え', romanization: 'norikae', meaning: 'pindah kereta', example: '新宿で乗り換えてください' },
                        { word: '各駅停車', romanization: 'kakueki teisha', meaning: 'kereta lokal', example: '各駅停車は遅いです' },
                        { word: '急行', romanization: 'kyuukou', meaning: 'ekspres', example: '急行で行きましょう' },
                        { word: 'ホーム', romanization: 'hoomu', meaning: 'platform', example: '3番ホームから出発します' },
                    ],
                    grammar: [
                        { pattern: '〜で乗り換える', explanation: 'Pindah di...', examples: ['渋谷で乗り換えます'] },
                    ],
                    tips: ['Suica/PASMO sangat berguna - charge dan tap saja'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 乗り換え?', questionId: 'Apa arti 乗り換え?', options: ['Tiket', 'Transfer', 'Platform', 'Stasiun'], answer: 'Transfer', order: 1 },
                ],
            },
            {
                title: '道を聞く (Asking Directions)',
                titleId: 'Bertanya Arah',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '〜はどう行きますか', romanization: '~wa dou ikimasu ka', meaning: 'Bagaimana ke...?', example: '東京駅はどう行きますか？' },
                        { word: '曲がる', romanization: 'magaru', meaning: 'belok', example: '右に曲がってください' },
                        { word: '交差点', romanization: 'kousaten', meaning: 'persimpangan', example: '次の交差点を左に' },
                        { word: '〜の向こう', romanization: '~no mukou', meaning: 'di seberang', example: '銀行の向こうにあります' },
                    ],
                    tips: ['Jangan ragu bertanya - orang Jepang sangat membantu'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '右に___ってください (belok)', questionId: '右に___ってください', answer: '曲が', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Shopping & Services
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '買い物とサービス',
        titleId: 'Belanja dan Layanan',
        description: 'Shopping and using services',
        descriptionId: 'Berbelanja dan menggunakan layanan',
        order: 7,
        canDo: {
            listening: 'Dapat memahami penjelasan produk',
            reading: 'Dapat membaca label dan menu',
            speaking: 'Dapat berkomunikasi saat berbelanja',
            writing: 'Dapat mengisi formulir pemesanan'
        },
        lessons: [
            {
                title: '商品について聞く',
                titleId: 'Bertanya tentang Produk',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'サイズ', romanization: 'saizu', meaning: 'ukuran', example: 'このサイズはありますか？' },
                        { word: '色', romanization: 'iro', meaning: 'warna', example: '他の色はありますか？' },
                        { word: '試着', romanization: 'shichaku', meaning: 'coba pakai', example: '試着してもいいですか？' },
                        { word: '在庫', romanization: 'zaiko', meaning: 'stok', example: '在庫がありますか？' },
                    ],
                    grammar: [
                        { pattern: '〜はありますか', explanation: 'Apakah ada...?', examples: ['Mサイズはありますか？'] },
                    ],
                    tips: ['Ukuran Jepang berbeda - S Jepang = XS di Indonesia'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to ask for trying clothes?', questionId: 'Bagaimana bertanya untuk coba baju?', options: ['着てください', '試着してもいいですか', '着たいです', '着ますか'], answer: '試着してもいいですか', order: 1 },
                ],
            },
            {
                title: '返品と交換',
                titleId: 'Retur dan Tukar',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '返品', romanization: 'henpin', meaning: 'retur', example: '返品できますか？' },
                        { word: '交換', romanization: 'koukan', meaning: 'tukar', example: 'サイズを交換したいです' },
                        { word: 'レシート', romanization: 'reshiito', meaning: 'struk', example: 'レシートはありますか？' },
                    ],
                    tips: ['Simpan struk - biasanya diperlukan untuk retur'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'サイズを___したいです (tukar)', questionId: 'サイズを___したいです', answer: '交換', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Food & Restaurants
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '食事とレストラン',
        titleId: 'Makanan dan Restoran',
        description: 'Dining and food communication',
        descriptionId: 'Makan dan komunikasi soal makanan',
        order: 8,
        canDo: {
            listening: 'Dapat memahami penjelasan menu',
            reading: 'Dapat membaca menu dan resep',
            speaking: 'Dapat memesan dan meminta',
            writing: 'Dapat menulis pesanan'
        },
        lessons: [
            {
                title: '注文する (Ordering)',
                titleId: 'Memesan Makanan',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'ご注文は？', romanization: 'gochuumon wa?', meaning: 'Pesanan Anda?', example: '' },
                        { word: '〜にします', romanization: '~ni shimasu', meaning: 'Saya pilih...', example: 'カレーにします' },
                        { word: 'おすすめ', romanization: 'osusume', meaning: 'rekomendasi', example: 'おすすめは何ですか？' },
                        { word: '〜抜きで', romanization: '~nuki de', meaning: 'tanpa...', example: 'ネギ抜きでお願いします' },
                    ],
                    grammar: [
                        { pattern: '〜にする', explanation: 'Memutuskan untuk...', examples: ['ラーメンにします'] },
                    ],
                    tips: ['Gunakan 〜にします untuk memilih, bukan 〜を食べます'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'カレー___します (Saya pilih kari)', questionId: 'カレー___します', answer: 'に', order: 1 },
                ],
            },
            {
                title: 'アレルギーと好み',
                titleId: 'Alergi dan Preferensi',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'アレルギー', romanization: 'arerugiui', meaning: 'alergi', example: '卵アレルギーがあります' },
                        { word: '苦手', romanization: 'nigate', meaning: 'tidak bisa (makan)', example: '辛いものが苦手です' },
                        { word: 'ベジタリアン', romanization: 'bejitarian', meaning: 'vegetarian', example: 'ベジタリアンメニューはありますか？' },
                    ],
                    tips: ['Penting untuk menyebutkan alergi sebelum memesan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say you have allergy?', questionId: 'Bagaimana bilang punya alergi?', options: ['アレルギーです', 'アレルギーがあります', 'アレルギーをします', 'アレルギーにします'], answer: 'アレルギーがあります', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Social Interactions
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '社会的なやりとり',
        titleId: 'Interaksi Sosial',
        description: 'Social interactions and relationships',
        descriptionId: 'Interaksi sosial dan hubungan',
        order: 9,
        canDo: {
            listening: 'Dapat memahami percakapan santai',
            reading: 'Dapat membaca pesan dan undangan',
            speaking: 'Dapat berbicara dalam situasi sosial',
            writing: 'Dapat menulis pesan kepada teman'
        },
        lessons: [
            {
                title: '誘う・断る (Invite/Decline)',
                titleId: 'Mengajak dan Menolak',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '一緒に〜ませんか', romanization: 'issho ni ~masen ka', meaning: 'Mau...bersama?', example: '一緒に映画を見ませんか？' },
                        { word: 'ちょっと...', romanization: 'chotto...', meaning: 'Agak sulit...', example: 'その日はちょっと...' },
                        { word: '残念ですが', romanization: 'zannen desu ga', meaning: 'Sayangnya...', example: '残念ですが、行けません' },
                    ],
                    grammar: [
                        { pattern: '〜たいんですが、〜', explanation: 'Ingin, tapi...', examples: ['行きたいんですが、予定があります'] },
                    ],
                    tips: ['Menolak langsung dianggap kasar - gunakan "chotto..."'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite way to decline?', questionId: 'Cara sopan menolak?', options: ['いやです', 'だめです', 'ちょっと...', '行きません'], answer: 'ちょっと...', order: 1 },
                ],
            },
            {
                title: '感情を表す (Expressing Feelings)',
                titleId: 'Mengekspresikan Perasaan',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'うれしい', romanization: 'ureshii', meaning: 'senang', example: 'プレゼント、うれしいです！' },
                        { word: '悲しい', romanization: 'kanashii', meaning: 'sedih', example: '別れるのは悲しいです' },
                        { word: '心配', romanization: 'shinpai', meaning: 'khawatir', example: '心配しないでください' },
                        { word: '楽しみ', romanization: 'tanoshimi', meaning: 'menantikan', example: '旅行が楽しみです' },
                    ],
                    tips: ['Orang Jepang cenderung tidak ekspresif - perhatikan konteks'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '旅行が___です (menantikan)', questionId: '旅行が___です', answer: '楽しみ', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Basic Kanji
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '基本漢字',
        titleId: 'Kanji Dasar',
        description: 'Learn 100 essential kanji characters',
        descriptionId: 'Pelajari 100 karakter kanji penting',
        order: 10,
        canDo: {
            listening: 'Dapat mengenali kata dengan kanji umum',
            reading: 'Dapat membaca kanji dasar',
            speaking: 'Dapat mengucapkan kanji dengan benar',
            writing: 'Dapat menulis kanji dasar'
        },
        lessons: [
            {
                title: '数字の漢字 (Number Kanji)',
                titleId: 'Kanji Angka',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '一', romanization: 'ichi / hitotsu', meaning: 'satu', example: '一人 (hitori) - satu orang' },
                        { word: '二', romanization: 'ni / futatsu', meaning: 'dua', example: '二月 (nigatsu) - Februari' },
                        { word: '三', romanization: 'san / mittsu', meaning: 'tiga', example: '三日 (mikka) - tanggal 3' },
                        { word: '十', romanization: 'juu / too', meaning: 'sepuluh', example: '十人 (juunin) - 10 orang' },
                        { word: '百', romanization: 'hyaku', meaning: 'seratus', example: '百円 (hyakuen) - 100 yen' },
                        { word: '千', romanization: 'sen', meaning: 'seribu', example: '千円 (senen) - 1000 yen' },
                    ],
                    tips: ['Kanji angka adalah dasar - hafalkan dulu'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 百?', questionId: 'Apa 百?', options: ['10', '100', '1000', '10000'], answer: '100', order: 1 },
                ],
            },
            {
                title: '日・月・年 (Day/Month/Year)',
                titleId: 'Kanji Waktu',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '日', romanization: 'hi / nichi', meaning: 'hari/matahari', example: '今日 (kyou) - hari ini' },
                        { word: '月', romanization: 'tsuki / getsu', meaning: 'bulan', example: '今月 (kongetsu) - bulan ini' },
                        { word: '年', romanization: 'toshi / nen', meaning: 'tahun', example: '今年 (kotoshi) - tahun ini' },
                        { word: '時', romanization: 'toki / ji', meaning: 'waktu/jam', example: '時間 (jikan) - waktu' },
                        { word: '週', romanization: 'shuu', meaning: 'minggu', example: '今週 (konshuu) - minggu ini' },
                    ],
                    tips: ['Kanji ini muncul di mana-mana - sangat penting'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '今___ (hari ini)', questionId: '今___ (hari ini)', answer: '日', order: 1 },
                ],
            },
            {
                title: '人・男・女 (People)',
                titleId: 'Kanji Orang',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '人', romanization: 'hito / jin / nin', meaning: 'orang', example: '日本人 (nihonjin) - orang Jepang' },
                        { word: '男', romanization: 'otoko', meaning: 'laki-laki', example: '男の人 (otoko no hito)' },
                        { word: '女', romanization: 'onna', meaning: 'perempuan', example: '女の人 (onna no hito)' },
                        { word: '子', romanization: 'ko', meaning: 'anak', example: '子供 (kodomo) - anak-anak' },
                    ],
                    tips: ['人 sangat umum - baca nin setelah angka'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 日本人?', questionId: 'Apa 日本人?', options: ['Orang Indonesia', 'Orang Jepang', 'Orang Korea', 'Orang China'], answer: 'Orang Jepang', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseA2Courses6to10;
