// Japanese A1 Courses 2-5 - Katakana, Greetings, Numbers, Time
// CEFR Level A1 (≈JLPT N5)

export const japaneseA1Courses2to5 = [
    // Course 2: Katakana Mastery
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: 'カタカナマスター',
        titleId: 'Menguasai Katakana',
        description: 'Master all Katakana characters for foreign words',
        descriptionId: 'Kuasai karakter Katakana untuk kata-kata asing',
        order: 2,
        canDo: {
            listening: 'Dapat mengenali kata serapan dalam percakapan',
            reading: 'Dapat membaca kata-kata asing dalam katakana',
            speaking: 'Dapat mengucapkan kata serapan dengan benar',
            writing: 'Dapat menulis nama dan kata asing dalam katakana'
        },
        lessons: [
            {
                title: 'ア行 (A-row Katakana)',
                titleId: 'Baris A Katakana',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'ア', romanization: 'a', meaning: 'a', example: 'アメリカ (Amerika)' },
                        { word: 'イ', romanization: 'i', meaning: 'i', example: 'インドネシア (Indonesia)' },
                        { word: 'ウ', romanization: 'u', meaning: 'u', example: 'ウイルス (virus)' },
                        { word: 'エ', romanization: 'e', meaning: 'e', example: 'エレベーター (elevator)' },
                        { word: 'オ', romanization: 'o', meaning: 'o', example: 'オレンジ (orange)' },
                    ],
                    tips: ['Katakana digunakan untuk kata asing dan nama'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How is "Indonesia" written?', questionId: 'Bagaimana menulis "Indonesia"?', options: ['インドネシア', 'いんどねしあ', 'アメリカ', 'オーストラリア'], answer: 'インドネシア', order: 1 },
                ],
            },
            {
                title: 'カ・サ行 Katakana',
                titleId: 'Baris Ka dan Sa Katakana',
                order: 2, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'カ', romanization: 'ka', meaning: 'ka', example: 'カメラ (kamera)' },
                        { word: 'キ', romanization: 'ki', meaning: 'ki', example: 'キロ (kilo)' },
                        { word: 'サ', romanization: 'sa', meaning: 'sa', example: 'サラリーマン (salary man)' },
                        { word: 'シ', romanization: 'shi', meaning: 'shi', example: 'シャワー (shower)' },
                        { word: 'ス', romanization: 'su', meaning: 'su', example: 'スーパー (supermarket)' },
                    ],
                    tips: ['シ dibaca "shi" sama seperti hiragana し'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is カメラ?', questionId: 'Apa arti カメラ?', options: ['Kamera', 'Televisi', 'Radio', 'Komputer'], answer: 'Kamera', order: 1 },
                ],
            },
            {
                title: 'タ・ナ・ハ行 Katakana',
                titleId: 'Baris Ta, Na, Ha Katakana',
                order: 3, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'タ', romanization: 'ta', meaning: 'ta', example: 'タクシー (taksi)' },
                        { word: 'テ', romanization: 'te', meaning: 'te', example: 'テレビ (TV)' },
                        { word: 'ナ', romanization: 'na', meaning: 'na', example: 'ナイフ (pisau)' },
                        { word: 'ハ', romanization: 'ha', meaning: 'ha', example: 'ハンバーガー (hamburger)' },
                        { word: 'ヒ', romanization: 'hi', meaning: 'hi', example: 'ヒーター (heater)' },
                    ],
                    tips: ['Banyak kata sehari-hari ditulis dalam katakana'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'タク___ (taksi)', questionId: 'タク___ (taksi)', answer: 'シー', order: 1 },
                ],
            },
            {
                title: 'マ・ヤ・ラ・ワ行 Katakana',
                titleId: 'Baris Ma, Ya, Ra, Wa Katakana',
                order: 4, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'マ', romanization: 'ma', meaning: 'ma', example: 'マクドナルド (McDonald)' },
                        { word: 'ヤ', romanization: 'ya', meaning: 'ya', example: 'ヤフー (Yahoo)' },
                        { word: 'ラ', romanization: 'ra', meaning: 'ra', example: 'ラーメン (ramen)' },
                        { word: 'リ', romanization: 'ri', meaning: 'ri', example: 'リモコン (remote)' },
                        { word: 'ン', romanization: 'n', meaning: 'n', example: 'パン (roti)' },
                    ],
                    tips: ['ン (n) adalah satu-satunya konsonan tunggal'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is ラーメン?', questionId: 'Apa itu ラーメン?', options: ['Ramen', 'Sushi', 'Tempura', 'Udon'], answer: 'Ramen', order: 1 },
                ],
            },
            {
                title: 'Kata-kata Penting dalam Katakana',
                titleId: 'Kata Penting dalam Katakana',
                order: 5, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'コンビニ', romanization: 'konbini', meaning: 'minimarket', example: 'コンビニで買います' },
                        { word: 'アルバイト', romanization: 'arubaito', meaning: 'kerja paruh waktu', example: 'アルバイトをしています' },
                        { word: 'パスポート', romanization: 'pasupooto', meaning: 'paspor', example: 'パスポートを見せてください' },
                        { word: 'ビザ', romanization: 'biza', meaning: 'visa', example: 'ビザが必要です' },
                        { word: 'スマホ', romanization: 'sumaho', meaning: 'smartphone', example: 'スマホを使います' },
                    ],
                    tips: ['Kata-kata ini penting untuk kehidupan sehari-hari di Jepang'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is アルバイト?', questionId: 'Apa アルバイト?', options: ['Kerja paruh waktu', 'Kerja tetap', 'Liburan', 'Belajar'], answer: 'Kerja paruh waktu', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Basic Greetings
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: '挨拶と自己紹介',
        titleId: 'Salam dan Perkenalan Diri',
        description: 'Essential greetings and self-introduction',
        descriptionId: 'Salam penting dan cara memperkenalkan diri',
        order: 3,
        canDo: {
            listening: 'Dapat memahami salam dan perkenalan sederhana',
            reading: 'Dapat membaca teks perkenalan diri',
            speaking: 'Dapat menyapa dan memperkenalkan diri',
            writing: 'Dapat menulis perkenalan diri sederhana'
        },
        lessons: [
            {
                title: '基本の挨拶 (Basic Greetings)',
                titleId: 'Salam Dasar',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'おはようございます', romanization: 'ohayou gozaimasu', meaning: 'Selamat pagi (formal)', example: 'おはようございます、先生！' },
                        { word: 'こんにちは', romanization: 'konnichiwa', meaning: 'Halo / Selamat siang', example: 'こんにちは、山田さん。' },
                        { word: 'こんばんは', romanization: 'konbanwa', meaning: 'Selamat malam', example: 'こんばんは。' },
                        { word: 'さようなら', romanization: 'sayounara', meaning: 'Selamat tinggal', example: 'さようなら、また明日！' },
                        { word: 'おやすみなさい', romanization: 'oyasuminasai', meaning: 'Selamat tidur', example: 'おやすみなさい。' },
                    ],
                    grammar: [{ pattern: '時間 + 挨拶', explanation: 'Gunakan salam sesuai waktu', examples: ['06:00-10:00 → おはようございます', '10:00-18:00 → こんにちは'] }],
                    tips: ['Selalu gunakan bentuk formal di tempat kerja'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Morning greeting?', questionId: 'Salam pagi hari?', options: ['こんにちは', 'おはようございます', 'こんばんは', 'さようなら'], answer: 'おはようございます', order: 1 },
                ],
            },
            {
                title: '職場の挨拶',
                titleId: 'Salam di Tempat Kerja',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'お疲れ様です', romanization: 'otsukaresama desu', meaning: 'Terima kasih atas kerja kerasnya', example: 'お疲れ様です！' },
                        { word: 'お先に失礼します', romanization: 'osaki ni shitsurei shimasu', meaning: 'Permisi, saya duluan', example: 'お先に失礼します。' },
                        { word: 'よろしくお願いします', romanization: 'yoroshiku onegaishimasu', meaning: 'Mohon bantuannya', example: '新人です。よろしくお願いします。' },
                    ],
                    tips: ['お疲れ様です adalah salam PALING PENTING di tempat kerja'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What to say when leaving work first?', questionId: 'Apa yang diucapkan saat pulang duluan?', options: ['さようなら', 'お先に失礼します', 'おやすみなさい', 'ありがとう'], answer: 'お先に失礼します', order: 1 },
                ],
            },
            {
                title: '自己紹介',
                titleId: 'Perkenalan Diri',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '私は〜です', romanization: 'watashi wa ~ desu', meaning: 'Saya adalah ~', example: '私はアマドです。' },
                        { word: '〜から来ました', romanization: '~ kara kimashita', meaning: 'Datang dari ~', example: 'インドネシアから来ました。' },
                        { word: '〜で働いています', romanization: '~ de hataraite imasu', meaning: 'Bekerja di ~', example: '工場で働いています。' },
                    ],
                    grammar: [{ pattern: '私は [nama] です。[negara]から来ました。', explanation: 'Pola dasar perkenalan', examples: ['私はアマドです。インドネシアから来ました。'] }],
                    tips: ['Akhiri dengan よろしくお願いします'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '私は___です。(Saya adalah Ahmad)', questionId: '私は___です。(Saya adalah Ahmad)', answer: 'アマド', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Numbers
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: '数字と数え方',
        titleId: 'Angka dan Cara Menghitung',
        description: 'Learn Japanese numbers 1-1000+',
        descriptionId: 'Pelajari angka Jepang 1-1000+',
        order: 4,
        canDo: {
            listening: 'Dapat memahami angka dalam percakapan',
            reading: 'Dapat membaca harga dan angka',
            speaking: 'Dapat menyebutkan angka dengan benar',
            writing: 'Dapat menulis angka dalam hiragana/kanji'
        },
        lessons: [
            {
                title: '1-10',
                titleId: 'Angka 1-10',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: '一 (いち)', romanization: 'ichi', meaning: '1', example: '一つください' },
                        { word: '二 (に)', romanization: 'ni', meaning: '2', example: '二人です' },
                        { word: '三 (さん)', romanization: 'san', meaning: '3', example: '三時' },
                        { word: '四 (よん)', romanization: 'yon', meaning: '4', example: '四日' },
                        { word: '五 (ご)', romanization: 'go', meaning: '5', example: '五時' },
                        { word: '六 (ろく)', romanization: 'roku', meaning: '6', example: '六月' },
                        { word: '七 (なな)', romanization: 'nana', meaning: '7', example: '七時' },
                        { word: '八 (はち)', romanization: 'hachi', meaning: '8', example: '八時' },
                        { word: '九 (きゅう)', romanization: 'kyuu', meaning: '9', example: '九月' },
                        { word: '十 (じゅう)', romanization: 'juu', meaning: '10', example: '十人' },
                    ],
                    tips: ['4 dan 7 punya 2 cara baca: よん/し dan なな/しち'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 5?', questionId: 'Apa 5 dalam Jepang?', options: ['さん', 'よん', 'ご', 'ろく'], answer: 'ご', order: 1 },
                ],
            },
            {
                title: '11-100',
                titleId: 'Angka 11-100',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '十一', romanization: 'juu-ichi', meaning: '11', example: '十一時' },
                        { word: '二十', romanization: 'ni-juu', meaning: '20', example: '二十人' },
                        { word: '三十', romanization: 'san-juu', meaning: '30', example: '三十分' },
                        { word: '五十', romanization: 'go-juu', meaning: '50', example: '五十円' },
                        { word: '百', romanization: 'hyaku', meaning: '100', example: '百円' },
                    ],
                    grammar: [{ pattern: '[angka] + じゅう = puluhan', explanation: 'Untuk puluhan', examples: ['20 = にじゅう', '30 = さんじゅう'] }],
                    tips: ['100円ショップ (hyaku-en shop) = toko serba 100 yen'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say 25?', questionId: 'Bagaimana 25?', options: ['にじゅう', 'にじゅうご', 'ごじゅうに', 'じゅうご'], answer: 'にじゅうご', order: 1 },
                ],
            },
            {
                title: '100+ dan Harga',
                titleId: 'Angka Besar dan Harga',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '百 (ひゃく)', romanization: 'hyaku', meaning: '100', example: '百円です' },
                        { word: '千 (せん)', romanization: 'sen', meaning: '1000', example: '千円札' },
                        { word: '万 (まん)', romanization: 'man', meaning: '10000', example: '一万円' },
                        { word: '〜円', romanization: '~en', meaning: '~ yen', example: '500円です' },
                    ],
                    tips: ['Jepang tidak pakai koma untuk ribuan, tapi 万 (10.000)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 千?', questionId: 'Apa 千?', options: ['100', '1000', '10000', '100000'], answer: '1000', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Time and Calendar
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: '時間と日付',
        titleId: 'Waktu dan Tanggal',
        description: 'Learn to tell time and dates',
        descriptionId: 'Pelajari cara menyebutkan waktu dan tanggal',
        order: 5,
        canDo: {
            listening: 'Dapat memahami waktu dan jadwal',
            reading: 'Dapat membaca jadwal dan kalender',
            speaking: 'Dapat menyebutkan waktu dan tanggal',
            writing: 'Dapat menulis jadwal sederhana'
        },
        lessons: [
            {
                title: '時間 (Jam)',
                titleId: 'Menyebutkan Jam',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '〜時', romanization: '~ji', meaning: 'jam ~', example: '三時 (jam 3)' },
                        { word: '〜分', romanization: '~fun/pun', meaning: 'menit', example: '五分 (5 menit)' },
                        { word: '午前', romanization: 'gozen', meaning: 'AM/pagi', example: '午前九時' },
                        { word: '午後', romanization: 'gogo', meaning: 'PM/sore', example: '午後三時' },
                        { word: '半', romanization: 'han', meaning: 'setengah', example: '三時半 (3:30)' },
                    ],
                    tips: ['じ untuk jam, ふん/ぷん untuk menit'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 三時半?', questionId: 'Apa 三時半?', options: ['2:30', '3:00', '3:30', '4:30'], answer: '3:30', order: 1 },
                ],
            },
            {
                title: '曜日 (Hari)',
                titleId: 'Hari dalam Seminggu',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '月曜日', romanization: 'getsuyoubi', meaning: 'Senin', example: '月曜日に会いましょう' },
                        { word: '火曜日', romanization: 'kayoubi', meaning: 'Selasa', example: '' },
                        { word: '水曜日', romanization: 'suiyoubi', meaning: 'Rabu', example: '' },
                        { word: '木曜日', romanization: 'mokuyoubi', meaning: 'Kamis', example: '' },
                        { word: '金曜日', romanization: 'kinyoubi', meaning: 'Jumat', example: '' },
                        { word: '土曜日', romanization: 'doyoubi', meaning: 'Sabtu', example: '' },
                        { word: '日曜日', romanization: 'nichiyoubi', meaning: 'Minggu', example: '' },
                    ],
                    tips: ['Hafalkan berdasarkan elemen: 月(bulan), 火(api), 水(air), 木(kayu), 金(emas), 土(tanah), 日(matahari)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 金曜日?', questionId: 'Apa 金曜日?', options: ['Senin', 'Rabu', 'Jumat', 'Minggu'], answer: 'Jumat', order: 1 },
                ],
            },
            {
                title: '月と日付',
                titleId: 'Bulan dan Tanggal',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '一月', romanization: 'ichigatsu', meaning: 'Januari', example: '' },
                        { word: '二月', romanization: 'nigatsu', meaning: 'Februari', example: '' },
                        { word: '〜日', romanization: '~nichi', meaning: 'tanggal ~', example: '一日 (tanggal 1)' },
                        { word: '今日', romanization: 'kyou', meaning: 'hari ini', example: '今日は何日ですか？' },
                        { word: '明日', romanization: 'ashita', meaning: 'besok', example: '明日会いましょう' },
                    ],
                    tips: ['Bulan = angka + 月(gatsu)'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '今日は何___ですか？(Hari ini tanggal berapa?)', questionId: '今日は何___ですか？', answer: '日', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseA1Courses2to5;
