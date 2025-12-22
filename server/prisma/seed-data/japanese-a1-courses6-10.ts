// Japanese A1 Courses 6-10 - Daily Expressions, Workplace, Shopping, Directions, Health
// CEFR Level A1 (≈JLPT N5)

export const japaneseA1Courses6to10 = [
    // Course 6: Daily Expressions
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: '毎日の表現',
        titleId: 'Ungkapan Sehari-hari',
        description: 'Common daily expressions and phrases',
        descriptionId: 'Ungkapan umum sehari-hari',
        order: 6,
        canDo: {
            listening: 'Dapat memahami ungkapan umum',
            reading: 'Dapat membaca dialog sederhana',
            speaking: 'Dapat menggunakan ungkapan sehari-hari',
            writing: 'Dapat menulis pesan singkat'
        },
        lessons: [
            {
                title: 'ありがとう・すみません',
                titleId: 'Terima Kasih & Maaf',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'ありがとうございます', romanization: 'arigatou gozaimasu', meaning: 'Terima kasih (formal)', example: 'ご協力ありがとうございます' },
                        { word: 'すみません', romanization: 'sumimasen', meaning: 'Maaf / Permisi', example: 'すみません、ちょっといいですか？' },
                        { word: 'ごめんなさい', romanization: 'gomen nasai', meaning: 'Maaf (saat salah)', example: '遅れてごめんなさい' },
                        { word: 'いいえ', romanization: 'iie', meaning: 'Tidak / Sama-sama', example: 'いいえ、どういたしまして' },
                    ],
                    tips: ['すみません digunakan untuk minta maaf DAN menarik perhatian'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Formal thank you?', questionId: 'Terima kasih formal?', options: ['ありがとう', 'ありがとうございます', 'すみません', 'ごめん'], answer: 'ありがとうございます', order: 1 },
                ],
            },
            {
                title: 'お願いします・〜ください',
                titleId: 'Meminta Tolong',
                order: 2, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'お願いします', romanization: 'onegaishimasu', meaning: 'Tolong / Mohon', example: 'コーヒーをお願いします' },
                        { word: '〜ください', romanization: '~kudasai', meaning: 'Tolong ~', example: '水をください' },
                        { word: 'ちょっと待ってください', romanization: 'chotto matte kudasai', meaning: 'Tolong tunggu sebentar', example: '' },
                    ],
                    tips: ['ください digunakan setelah kata benda atau bentuk -te'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '水を___。(Tolong air)', questionId: '水を___。', answer: 'ください', order: 1 },
                ],
            },
            {
                title: '分かりました・分かりません',
                titleId: 'Mengerti & Tidak Mengerti',
                order: 3, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: '分かりました', romanization: 'wakarimashita', meaning: 'Saya mengerti', example: 'はい、分かりました' },
                        { word: '分かりません', romanization: 'wakarimasen', meaning: 'Saya tidak mengerti', example: '日本語が分かりません' },
                        { word: 'もう一度', romanization: 'mou ichido', meaning: 'Sekali lagi', example: 'もう一度お願いします' },
                    ],
                    tips: ['Selalu jawab 分かりました saat menerima instruksi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say "I understand"?', questionId: 'Bagaimana bilang "Saya mengerti"?', options: ['分かりません', '分かりました', '知りません', '見ました'], answer: '分かりました', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Workplace Japanese
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: '職場の日本語',
        titleId: 'Bahasa Jepang di Tempat Kerja',
        description: 'Essential Japanese for factory and farm work',
        descriptionId: 'Bahasa Jepang penting untuk kerja pabrik dan pertanian',
        order: 7,
        canDo: {
            listening: 'Dapat memahami instruksi kerja sederhana',
            reading: 'Dapat membaca peringatan keselamatan',
            speaking: 'Dapat berkomunikasi dengan rekan kerja',
            writing: 'Dapat mengisi formulir kerja sederhana'
        },
        lessons: [
            {
                title: '指示を受ける',
                titleId: 'Menerima Instruksi',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'はい、わかりました', romanization: 'hai, wakarimashita', meaning: 'Ya, saya mengerti', example: '「これを運んでください」「はい、わかりました」' },
                        { word: 'ここに置いてください', romanization: 'koko ni oite kudasai', meaning: 'Tolong taruh di sini', example: '箱をここに置いてください' },
                        { word: '終わりました', romanization: 'owarimashita', meaning: 'Sudah selesai', example: '仕事が終わりました' },
                        { word: '手伝ってください', romanization: 'tetsudatte kudasai', meaning: 'Tolong bantu', example: 'ちょっと手伝ってください' },
                    ],
                    tips: ['Selalu jawab はい saat diberi instruksi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say "I finished"?', questionId: 'Bagaimana bilang "Sudah selesai"?', options: ['始まりました', '終わりました', 'わかりました', 'できました'], answer: '終わりました', order: 1 },
                ],
            },
            {
                title: '安全用語 (K3)',
                titleId: 'Istilah Keselamatan Kerja',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '危ない！', romanization: 'abunai!', meaning: 'Bahaya!', example: '危ない！止まって！' },
                        { word: '気をつけて', romanization: 'ki wo tsukete', meaning: 'Hati-hati', example: '滑りやすいから、気をつけて' },
                        { word: 'ヘルメット', romanization: 'herumetto', meaning: 'Helm', example: 'ヘルメットをかぶってください' },
                        { word: '安全第一', romanization: 'anzen daiichi', meaning: 'Keselamatan utama', example: '安全第一で作業しましょう' },
                        { word: '非常口', romanization: 'hijouguchi', meaning: 'Pintu darurat', example: '非常口はどこですか？' },
                    ],
                    tips: ['危ない！ adalah kata PALING PENTING untuk keselamatan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What to shout for danger?', questionId: 'Apa yang diteriakkan saat bahaya?', options: ['気をつけて', '危ない', '終わりました', 'はい'], answer: '危ない', order: 1 },
                ],
            },
            {
                title: '報告と質問',
                titleId: 'Laporan dan Pertanyaan',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '問題があります', romanization: 'mondai ga arimasu', meaning: 'Ada masalah', example: '機械に問題があります' },
                        { word: '〜が壊れました', romanization: '~ga kowaremashita', meaning: '~ rusak', example: '機械が壊れました' },
                        { word: '休憩', romanization: 'kyuukei', meaning: 'Istirahat', example: '休憩は何時ですか？' },
                    ],
                    tips: ['Laporkan masalah segera - jangan diam saja'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '機械が___ました。(rusak)', questionId: '機械が___ました。', answer: '壊れ', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Shopping
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: '買い物',
        titleId: 'Belanja',
        description: 'Shopping at stores and convenience stores',
        descriptionId: 'Belanja di toko dan konbini',
        order: 8,
        canDo: {
            listening: 'Dapat memahami harga dan pertanyaan kasir',
            reading: 'Dapat membaca label harga',
            speaking: 'Dapat bertanya harga dan membeli',
            writing: 'Dapat menulis daftar belanja'
        },
        lessons: [
            {
                title: '値段を聞く',
                titleId: 'Menanyakan Harga',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'これはいくらですか？', romanization: 'kore wa ikura desu ka?', meaning: 'Ini berapa?', example: 'すみません、これはいくらですか？' },
                        { word: '〜円です', romanization: '~en desu', meaning: '~ yen', example: '500円です' },
                        { word: '高い', romanization: 'takai', meaning: 'Mahal', example: 'ちょっと高いですね' },
                        { word: '安い', romanization: 'yasui', meaning: 'Murah', example: '安いですね！' },
                    ],
                    tips: ['Selalu gunakan すみません sebelum bertanya'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to ask "How much?"', questionId: 'Bagaimana bertanya "Berapa?"', options: ['何ですか', 'どこですか', 'いくらですか', 'いつですか'], answer: 'いくらですか', order: 1 },
                ],
            },
            {
                title: '買う・支払う',
                titleId: 'Membeli dan Membayar',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'これをください', romanization: 'kore wo kudasai', meaning: 'Saya mau ini', example: 'これを二つください' },
                        { word: 'カードで', romanization: 'kaado de', meaning: 'Dengan kartu', example: 'カードでお願いします' },
                        { word: '現金で', romanization: 'genkin de', meaning: 'Dengan tunai', example: '現金でお願いします' },
                        { word: 'レシート', romanization: 'reshiito', meaning: 'Struk', example: 'レシートをください' },
                    ],
                    tips: ['Di Jepang, masih banyak toko yang cash only'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'これを___ください。(Saya mau ini)', questionId: 'これを___ください。', answer: '二つ', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Directions
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: '道案内と交通',
        titleId: 'Arah dan Transportasi',
        description: 'Getting around and using transportation',
        descriptionId: 'Bepergian dan menggunakan transportasi',
        order: 9,
        canDo: {
            listening: 'Dapat memahami petunjuk arah sederhana',
            reading: 'Dapat membaca papan stasiun',
            speaking: 'Dapat bertanya arah',
            writing: 'Dapat menulis alamat'
        },
        lessons: [
            {
                title: '場所を聞く',
                titleId: 'Bertanya Lokasi',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '〜はどこですか？', romanization: '~wa doko desu ka?', meaning: 'Di mana ~?', example: '駅はどこですか？' },
                        { word: 'ここ・そこ・あそこ', romanization: 'koko・soko・asoko', meaning: 'Di sini / Di situ / Di sana', example: 'トイレはそこです' },
                        { word: '右・左・まっすぐ', romanization: 'migi・hidari・massugu', meaning: 'Kanan / Kiri / Lurus', example: 'まっすぐ行ってください' },
                    ],
                    tips: ['ここ = dekat pembicara, そこ = dekat lawan bicara, あそこ = jauh dari keduanya'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to ask "Where is the station?"', questionId: 'Bagaimana bertanya "Di mana stasiun?"', options: ['駅は何ですか', '駅はどこですか', '駅はいつですか', '駅はだれですか'], answer: '駅はどこですか', order: 1 },
                ],
            },
            {
                title: '電車とバス',
                titleId: 'Kereta dan Bus',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '電車', romanization: 'densha', meaning: 'Kereta', example: '電車で行きます' },
                        { word: 'バス', romanization: 'basu', meaning: 'Bus', example: 'バス停はどこですか？' },
                        { word: 'きっぷ', romanization: 'kippu', meaning: 'Tiket', example: 'きっぷを買います' },
                        { word: '乗り換え', romanization: 'norikae', meaning: 'Transfer/pindah', example: '新宿で乗り換えます' },
                    ],
                    tips: ['Suica/PASMO sangat berguna - bisa pakai di mana-mana'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 乗り換え?', questionId: 'Apa 乗り換え?', options: ['Tiket', 'Transfer', 'Stasiun', 'Platform'], answer: 'Transfer', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Health & Emergency
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: '健康と緊急事態',
        titleId: 'Kesehatan dan Darurat',
        description: 'Health issues and emergency situations',
        descriptionId: 'Masalah kesehatan dan situasi darurat',
        order: 10,
        canDo: {
            listening: 'Dapat memahami pertanyaan dokter sederhana',
            reading: 'Dapat membaca label obat dasar',
            speaking: 'Dapat menjelaskan gejala sakit',
            writing: 'Dapat mengisi formulir medis dasar'
        },
        lessons: [
            {
                title: '体の部分',
                titleId: 'Bagian Tubuh',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: '頭', romanization: 'atama', meaning: 'Kepala', example: '頭が痛いです' },
                        { word: 'お腹', romanization: 'onaka', meaning: 'Perut', example: 'お腹が痛いです' },
                        { word: '手・足', romanization: 'te・ashi', meaning: 'Tangan / Kaki', example: '足が痛いです' },
                        { word: '目・耳・鼻', romanization: 'me・mimi・hana', meaning: 'Mata / Telinga / Hidung', example: '' },
                    ],
                    tips: ['〜が痛いです = ~ sakit'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '頭が___です (Kepala sakit)', questionId: '頭が___です', answer: '痛い', order: 1 },
                ],
            },
            {
                title: '病気と症状',
                titleId: 'Penyakit dan Gejala',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '熱があります', romanization: 'netsu ga arimasu', meaning: 'Demam', example: '熱があります' },
                        { word: '風邪', romanization: 'kaze', meaning: 'Flu/masuk angin', example: '風邪をひきました' },
                        { word: '病院', romanization: 'byouin', meaning: 'Rumah sakit', example: '病院に行きたいです' },
                        { word: '薬', romanization: 'kusuri', meaning: 'Obat', example: '薬をください' },
                    ],
                    tips: ['Di Jepang, obat bisa dibeli di drugstore tanpa resep'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 病院?', questionId: 'Apa 病院?', options: ['Apotek', 'Rumah sakit', 'Klinik', 'Puskesmas'], answer: 'Rumah sakit', order: 1 },
                ],
            },
            {
                title: '緊急事態',
                titleId: 'Situasi Darurat',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '助けて！', romanization: 'tasukete!', meaning: 'Tolong!', example: '助けて！火事です！' },
                        { word: '警察', romanization: 'keisatsu', meaning: 'Polisi', example: '警察を呼んでください' },
                        { word: '救急車', romanization: 'kyuukyuusha', meaning: 'Ambulans', example: '救急車を呼んでください' },
                        { word: '火事', romanization: 'kaji', meaning: 'Kebakaran', example: '火事です！' },
                    ],
                    tips: ['Nomor darurat: 110 (polisi), 119 (ambulans/pemadam)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Emergency number for ambulance?', questionId: 'Nomor darurat ambulans?', options: ['110', '119', '120', '911'], answer: '119', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseA1Courses6to10;
