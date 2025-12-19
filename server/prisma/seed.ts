import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting comprehensive curriculum seeding...');

    // Clear existing data
    await prisma.userAchievement.deleteMany();
    await prisma.quizAttempt.deleteMany();
    await prisma.userProgress.deleteMany();
    await prisma.aIConversation.deleteMany();
    await prisma.quiz.deleteMany();
    await prisma.lesson.deleteMany();
    await prisma.course.deleteMany();
    await prisma.achievement.deleteMany();
    await prisma.user.deleteMany();

    console.log('✓ Cleared existing data');

    // Create demo users
    const hashedPassword = await bcrypt.hash('password123', 10);

    await prisma.user.create({
        data: {
            email: 'demo@cmi.com',
            password: hashedPassword,
            name: 'Demo User',
            targetLanguage: 'ja',
            currentLevel: 'beginner',
            xp: 150,
            streak: 5,
            lastActiveDate: new Date(),
        },
    });

    await prisma.user.create({
        data: {
            email: 'korea@cmi.com',
            password: hashedPassword,
            name: 'Korea Learner',
            targetLanguage: 'ko',
            currentLevel: 'beginner',
            xp: 0,
            streak: 0,
            lastActiveDate: new Date(),
        },
    });

    await prisma.user.create({
        data: {
            email: 'english@cmi.com',
            password: hashedPassword,
            name: 'English Learner',
            targetLanguage: 'en',
            currentLevel: 'beginner',
            xp: 0,
            streak: 0,
            lastActiveDate: new Date(),
        },
    });

    console.log('✓ Created demo users');

    // Create achievements
    await Promise.all([
        prisma.achievement.create({
            data: {
                name: 'First Steps',
                nameId: 'Langkah Pertama',
                description: 'Complete your first lesson',
                descriptionId: 'Selesaikan pelajaran pertama',
                icon: 'target',
                condition: { type: 'lessons_completed', value: 1 },
                xpReward: 50,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'Week Warrior',
                nameId: 'Pejuang Mingguan',
                description: 'Maintain a 7-day streak',
                descriptionId: 'Pertahankan streak 7 hari',
                icon: 'flame',
                condition: { type: 'streak', value: 7 },
                xpReward: 100,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'Quiz Master',
                nameId: 'Master Quiz',
                description: 'Answer 50 quizzes correctly',
                descriptionId: 'Jawab 50 quiz dengan benar',
                icon: 'trophy',
                condition: { type: 'quizzes_correct', value: 50 },
                xpReward: 200,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'Chatterbox',
                nameId: 'Tukang Ngobrol',
                description: 'Have 10 AI conversations',
                descriptionId: 'Lakukan 10 percakapan dengan AI',
                icon: 'message-circle',
                condition: { type: 'conversations', value: 10 },
                xpReward: 100,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'N5 Ready',
                nameId: 'Siap JLPT N5',
                description: 'Complete all N5 level courses',
                descriptionId: 'Selesaikan semua kursus level N5',
                icon: 'award',
                condition: { type: 'courses_completed', value: 3 },
                xpReward: 500,
            },
        }),
    ]);
    console.log('✓ Created achievements');

    // ============================================
    // JAPANESE COURSES (JLPT N5 Level)
    // ============================================
    const japaneseCourses = [
        // Course 1: Hiragana Mastery
        {
            language: 'ja',
            level: 'beginner',
            title: 'ひらがなマスター',
            titleId: 'Menguasai Hiragana',
            description: 'Master all 46 basic Hiragana characters',
            descriptionId: 'Kuasai 46 karakter Hiragana dasar - fondasi membaca Jepang',
            order: 1,
            lessons: [
                {
                    title: 'あ行 (A-row)',
                    titleId: 'Baris A: あいうえお',
                    order: 1,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'あ', romanization: 'a', meaning: 'vokal a', example: 'あさ (asa) - pagi' },
                            { word: 'い', romanization: 'i', meaning: 'vokal i', example: 'いえ (ie) - rumah' },
                            { word: 'う', romanization: 'u', meaning: 'vokal u', example: 'うみ (umi) - laut' },
                            { word: 'え', romanization: 'e', meaning: 'vokal e', example: 'えき (eki) - stasiun' },
                            { word: 'お', romanization: 'o', meaning: 'vokal o', example: 'おかね (okane) - uang' },
                        ],
                        tips: [
                            'Ini adalah 5 vokal dasar Jepang, sama seperti vokal Indonesia',
                            'Latihan menulis: tulis setiap karakter 10 kali',
                            'Ingat urutan: A-I-U-E-O (bukan A-E-I-O-U seperti Indonesia)',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'How do you read あ?', questionId: 'Bagaimana membaca あ?', options: ['a', 'i', 'u', 'e'], answer: 'a', order: 1 },
                        { type: 'multiple_choice', question: 'Which character sounds like "u"?', questionId: 'Karakter mana yang berbunyi "u"?', options: ['あ', 'い', 'う', 'え'], answer: 'う', order: 2 },
                        { type: 'fill_blank', question: 'あ、い、___、え、お', questionId: 'あ、い、___、え、お', answer: 'う', order: 3 },
                    ],
                },
                {
                    title: 'か行 (Ka-row)',
                    titleId: 'Baris Ka: かきくけこ',
                    order: 2,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'か', romanization: 'ka', meaning: 'ka', example: 'かさ (kasa) - payung' },
                            { word: 'き', romanization: 'ki', meaning: 'ki', example: 'きって (kitte) - perangko' },
                            { word: 'く', romanization: 'ku', meaning: 'ku', example: 'くるま (kuruma) - mobil' },
                            { word: 'け', romanization: 'ke', meaning: 'ke', example: 'けいたい (keitai) - HP' },
                            { word: 'こ', romanization: 'ko', meaning: 'ko', example: 'こども (kodomo) - anak' },
                        ],
                        tips: [
                            'Baris Ka = vokal + konsonan K',
                            'Kata penting: くるま (kuruma) = mobil',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What is か in romaji?', questionId: 'Apa か dalam romaji?', options: ['ka', 'ki', 'ku', 'ga'], answer: 'ka', order: 1 },
                        { type: 'multiple_choice', question: 'How do you write "ki" in hiragana?', questionId: 'Bagaimana menulis "ki" dalam hiragana?', options: ['か', 'き', 'く', 'け'], answer: 'き', order: 2 },
                    ],
                },
                {
                    title: 'さ行 (Sa-row)',
                    titleId: 'Baris Sa: さしすせそ',
                    order: 3,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'さ', romanization: 'sa', meaning: 'sa', example: 'さくら (sakura) - bunga sakura' },
                            { word: 'し', romanization: 'shi', meaning: 'shi (bukan si)', example: 'しごと (shigoto) - pekerjaan' },
                            { word: 'す', romanization: 'su', meaning: 'su', example: 'すし (sushi) - sushi' },
                            { word: 'せ', romanization: 'se', meaning: 'se', example: 'せんせい (sensei) - guru' },
                            { word: 'そ', romanization: 'so', meaning: 'so', example: 'そと (soto) - luar' },
                        ],
                        tips: [
                            'PENTING: し dibaca "shi" bukan "si"',
                            'しごと (shigoto) = pekerjaan - kata penting untuk pekerja!',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'How do you pronounce し?', questionId: 'Bagaimana mengucapkan し?', options: ['si', 'shi', 'su', 'sha'], answer: 'shi', order: 1 },
                        { type: 'fill_blank', question: 'しご___ (pekerjaan)', questionId: 'しご___ (pekerjaan)', answer: 'と', order: 2 },
                    ],
                },
                {
                    title: 'た行 (Ta-row)',
                    titleId: 'Baris Ta: たちつてと',
                    order: 4,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'た', romanization: 'ta', meaning: 'ta', example: 'たべる (taberu) - makan' },
                            { word: 'ち', romanization: 'chi', meaning: 'chi (bukan ti)', example: 'ちず (chizu) - peta' },
                            { word: 'つ', romanization: 'tsu', meaning: 'tsu (bukan tu)', example: 'つくえ (tsukue) - meja' },
                            { word: 'て', romanization: 'te', meaning: 'te', example: 'てがみ (tegami) - surat' },
                            { word: 'と', romanization: 'to', meaning: 'to', example: 'とけい (tokei) - jam' },
                        ],
                        tips: [
                            'PENTING: ち = "chi", つ = "tsu"',
                            'たべる (taberu) = makan - kata kerja penting!',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'How do you read つ?', questionId: 'Bagaimana membaca つ?', options: ['tu', 'tsu', 'su', 'chi'], answer: 'tsu', order: 1 },
                        { type: 'multiple_choice', question: 'Which is correct for "chi"?', questionId: 'Mana yang benar untuk "chi"?', options: ['た', 'ち', 'つ', 'て'], answer: 'ち', order: 2 },
                    ],
                },
                {
                    title: 'な行 (Na-row)',
                    titleId: 'Baris Na: なにぬねの',
                    order: 5,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'な', romanization: 'na', meaning: 'na', example: 'なまえ (namae) - nama' },
                            { word: 'に', romanization: 'ni', meaning: 'ni', example: 'にほん (nihon) - Jepang' },
                            { word: 'ぬ', romanization: 'nu', meaning: 'nu', example: 'ぬの (nuno) - kain' },
                            { word: 'ね', romanization: 'ne', meaning: 'ne', example: 'ねこ (neko) - kucing' },
                            { word: 'の', romanization: 'no', meaning: 'no', example: 'のみもの (nomimono) - minuman' },
                        ],
                        tips: [
                            'にほん (nihon) = Jepang - harus tahu!',
                            'Partikel の (no) sangat penting dalam grammar Jepang',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What does にほん mean?', questionId: 'Apa arti にほん?', options: ['Indonesia', 'Jepang', 'Korea', 'China'], answer: 'Jepang', order: 1 },
                    ],
                },
            ],
        },

        // Course 2: Basic Greetings & Self-Introduction
        {
            language: 'ja',
            level: 'beginner',
            title: '挨拶と自己紹介',
            titleId: 'Salam & Perkenalan Diri',
            description: 'Essential greetings and how to introduce yourself',
            descriptionId: 'Salam penting dan cara memperkenalkan diri - wajib untuk lingkungan kerja',
            order: 2,
            lessons: [
                {
                    title: '基本の挨拶 (Basic Greetings)',
                    titleId: 'Salam Dasar',
                    order: 1,
                    xpReward: 25,
                    content: {
                        vocabulary: [
                            { word: 'おはようございます', romanization: 'Ohayou gozaimasu', meaning: 'Selamat pagi (formal)', example: 'おはようございます、社長！' },
                            { word: 'こんにちは', romanization: 'Konnichiwa', meaning: 'Halo / Selamat siang', example: 'こんにちは、山田さん。' },
                            { word: 'こんばんは', romanization: 'Konbanwa', meaning: 'Selamat malam', example: 'こんばんは。お疲れ様です。' },
                            { word: 'さようなら', romanization: 'Sayounara', meaning: 'Selamat tinggal', example: 'さようなら、また明日！' },
                            { word: 'おやすみなさい', romanization: 'Oyasuminasai', meaning: 'Selamat tidur', example: 'おやすみなさい。' },
                        ],
                        grammar: [
                            {
                                pattern: 'Waktu + salam yang tepat',
                                explanation: 'Gunakan salam sesuai waktu: pagi (おはよう), siang/sore (こんにちは), malam (こんばんは)',
                                examples: ['06:00-10:00 → おはようございます', '10:00-18:00 → こんにちは', '18:00+ → こんばんは'],
                            },
                        ],
                        tips: [
                            'Di tempat kerja, SELALU gunakan bentuk formal (ございます)',
                            'Membungkuk sekitar 15° saat menyapa atasan',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What greeting do you use in the morning?', questionId: 'Salam apa untuk pagi hari?', options: ['こんにちは', 'おはようございます', 'こんばんは', 'おやすみなさい'], answer: 'おはようございます', order: 1 },
                        { type: 'multiple_choice', question: 'What is the formal way to say good night?', questionId: 'Cara formal mengatakan selamat tidur?', options: ['おやすみ', 'おやすみなさい', 'こんばんは', 'さようなら'], answer: 'おやすみなさい', order: 2 },
                    ],
                },
                {
                    title: '職場の挨拶 (Workplace Greetings)',
                    titleId: 'Salam di Tempat Kerja',
                    order: 2,
                    xpReward: 30,
                    content: {
                        vocabulary: [
                            { word: 'お疲れ様です', romanization: 'Otsukaresama desu', meaning: 'Terima kasih atas kerja kerasnya', example: 'お疲れ様です。今日は大変でしたね。' },
                            { word: 'お先に失礼します', romanization: 'Osaki ni shitsurei shimasu', meaning: 'Permisi, saya duluan', example: 'お先に失礼します。また明日！' },
                            { word: '失礼します', romanization: 'Shitsurei shimasu', meaning: 'Permisi (masuk/keluar ruangan)', example: '失礼します。入ってもいいですか？' },
                            { word: 'よろしくお願いします', romanization: 'Yoroshiku onegaishimasu', meaning: 'Mohon bantuannya', example: '新人の田中です。よろしくお願いします。' },
                            { word: 'お世話になっております', romanization: 'Osewa ni natte orimasu', meaning: 'Terima kasih atas perhatiannya', example: 'いつもお世話になっております。' },
                        ],
                        tips: [
                            'お疲れ様です adalah salam PALING PENTING di tempat kerja Jepang',
                            'Saat pulang lebih dulu, WAJIB ucapkan お先に失礼します',
                            'よろしくお願いします digunakan saat minta tolong atau pertama bertemu',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What do you say when leaving work before others?', questionId: 'Apa yang diucapkan saat pulang duluan?', options: ['さようなら', 'お先に失礼します', 'おやすみなさい', 'ありがとう'], answer: 'お先に失礼します', order: 1 },
                        { type: 'multiple_choice', question: 'Which phrase means "Thank you for your hard work"?', questionId: 'Frasa mana yang berarti "Terima kasih atas kerja kerasnya"?', options: ['よろしくお願いします', 'お疲れ様です', '失礼します', 'すみません'], answer: 'お疲れ様です', order: 2 },
                    ],
                },
                {
                    title: '自己紹介 (Self-Introduction)',
                    titleId: 'Perkenalan Diri',
                    order: 3,
                    xpReward: 30,
                    content: {
                        vocabulary: [
                            { word: '私は〜です', romanization: 'Watashi wa ~ desu', meaning: 'Saya adalah ~', example: '私はアマドです。' },
                            { word: '〜から来ました', romanization: '~ kara kimashita', meaning: 'Saya datang dari ~', example: 'インドネシアから来ました。' },
                            { word: '〜で働いています', romanization: '~ de hataraite imasu', meaning: 'Saya bekerja di ~', example: '工場で働いています。' },
                            { word: '〜歳です', romanization: '~ sai desu', meaning: 'Umur ~ tahun', example: '25歳です。' },
                            { word: '趣味は〜です', romanization: 'Shumi wa ~ desu', meaning: 'Hobi saya adalah ~', example: '趣味はサッカーです。' },
                        ],
                        grammar: [
                            {
                                pattern: '私は [nama] です。[negara]から来ました。',
                                explanation: 'Pola dasar perkenalan diri',
                                examples: [
                                    '私はアマドです。インドネシアから来ました。(Saya Ahmad. Saya dari Indonesia.)',
                                    '私はスリです。ジャワから来ました。(Saya Sri. Saya dari Jawa.)',
                                ],
                            },
                        ],
                        tips: [
                            'Perkenalan formal: Nama → Asal → Pekerjaan → Mohon bantuan',
                            'Akhiri SELALU dengan よろしくお願いします',
                            'Contoh lengkap: "私はアマドです。インドネシアから来ました。よろしくお願いします。"',
                        ],
                    },
                    quizzes: [
                        { type: 'fill_blank', question: '私は___です。(Saya adalah Ahmad)', questionId: '私は___です。(Saya adalah Ahmad)', answer: 'アマド', order: 1 },
                        { type: 'multiple_choice', question: 'How do you say "I came from Indonesia"?', questionId: 'Bagaimana mengatakan "Saya dari Indonesia"?', options: ['インドネシアに行きます', 'インドネシアから来ました', 'インドネシアが好きです', 'インドネシアを知っています'], answer: 'インドネシアから来ました', order: 2 },
                    ],
                },
            ],
        },

        // Course 3: Numbers & Counting
        {
            language: 'ja',
            level: 'beginner',
            title: '数字と数え方',
            titleId: 'Angka & Cara Menghitung',
            description: 'Learn Japanese numbers and counting systems',
            descriptionId: 'Pelajari angka Jepang dan sistem menghitung - penting untuk pekerjaan',
            order: 3,
            lessons: [
                {
                    title: '基本の数字 1-10',
                    titleId: 'Angka Dasar 1-10',
                    order: 1,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: '一 (いち)', romanization: 'ichi', meaning: '1', example: '一つください。' },
                            { word: '二 (に)', romanization: 'ni', meaning: '2', example: '二人です。' },
                            { word: '三 (さん)', romanization: 'san', meaning: '3', example: '三時に会いましょう。' },
                            { word: '四 (よん/し)', romanization: 'yon/shi', meaning: '4', example: '四日間働きます。' },
                            { word: '五 (ご)', romanization: 'go', meaning: '5', example: '五時に終わります。' },
                            { word: '六 (ろく)', romanization: 'roku', meaning: '6', example: '六月に帰ります。' },
                            { word: '七 (なな/しち)', romanization: 'nana/shichi', meaning: '7', example: '七時に起きます。' },
                            { word: '八 (はち)', romanization: 'hachi', meaning: '8', example: '八時から働きます。' },
                            { word: '九 (きゅう/く)', romanization: 'kyuu/ku', meaning: '9', example: '九月に来ました。' },
                            { word: '十 (じゅう)', romanization: 'juu', meaning: '10', example: '十人います。' },
                        ],
                        tips: [
                            '4 dan 7 punya 2 cara baca - よん/なな lebih umum',
                            '9 juga punya 2 cara - きゅう lebih umum dari く',
                            'Hafalkan urutan: いち、に、さん、よん、ご、ろく、なな、はち、きゅう、じゅう',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What is 5 in Japanese?', questionId: 'Apa 5 dalam bahasa Jepang?', options: ['さん', 'よん', 'ご', 'ろく'], answer: 'ご', order: 1 },
                        { type: 'multiple_choice', question: 'How do you read 七?', questionId: 'Bagaimana membaca 七?', options: ['roku', 'nana', 'hachi', 'juu'], answer: 'nana', order: 2 },
                    ],
                },
                {
                    title: '大きい数字 11-100',
                    titleId: 'Angka Besar 11-100',
                    order: 2,
                    xpReward: 25,
                    content: {
                        vocabulary: [
                            { word: '十一 (じゅういち)', romanization: 'juu-ichi', meaning: '11', example: '十一時です。' },
                            { word: '二十 (にじゅう)', romanization: 'ni-juu', meaning: '20', example: '二十人来ます。' },
                            { word: '三十 (さんじゅう)', romanization: 'san-juu', meaning: '30', example: '三十分待ってください。' },
                            { word: '五十 (ごじゅう)', romanization: 'go-juu', meaning: '50', example: '五十円です。' },
                            { word: '百 (ひゃく)', romanization: 'hyaku', meaning: '100', example: '百円ショップ。' },
                        ],
                        grammar: [
                            {
                                pattern: 'Puluhan = [angka] + じゅう',
                                explanation: 'Untuk puluhan, tambahkan じゅう setelah angka',
                                examples: ['20 = にじゅう', '30 = さんじゅう', '40 = よんじゅう'],
                            },
                        ],
                        tips: [
                            'Pola: 十 + angka = belasan (11 = じゅういち)',
                            'Pola: angka + 十 = puluhan (20 = にじゅう)',
                            '100円ショップ (hyaku-en shop) = toko serba 100 yen',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'How do you say 25 in Japanese?', questionId: 'Bagaimana mengatakan 25 dalam bahasa Jepang?', options: ['にじゅう', 'にじゅうご', 'ごじゅうに', 'じゅうご'], answer: 'にじゅうご', order: 1 },
                    ],
                },
            ],
        },

        // Course 4: Workplace Japanese
        {
            language: 'ja',
            level: 'beginner',
            title: '職場の日本語',
            titleId: 'Bahasa Jepang di Tempat Kerja',
            description: 'Essential Japanese for the workplace',
            descriptionId: 'Bahasa Jepang penting untuk lingkungan kerja - instruksi, laporan, K3',
            order: 4,
            lessons: [
                {
                    title: '指示を受ける (Receiving Instructions)',
                    titleId: 'Menerima Instruksi',
                    order: 1,
                    xpReward: 30,
                    content: {
                        vocabulary: [
                            { word: 'はい、わかりました', romanization: 'Hai, wakarimashita', meaning: 'Ya, saya mengerti', example: '「これを運んでください」「はい、わかりました」' },
                            { word: 'すみません、もう一度お願いします', romanization: 'Sumimasen, mou ichido onegaishimasu', meaning: 'Maaf, tolong ulangi', example: 'すみません、もう一度お願いします。' },
                            { word: 'ここに置いてください', romanization: 'Koko ni oite kudasai', meaning: 'Tolong taruh di sini', example: '箱をここに置いてください。' },
                            { word: '終わりました', romanization: 'Owarimashita', meaning: 'Sudah selesai', example: '仕事が終わりました。' },
                            { word: '手伝ってください', romanization: 'Tetsudatte kudasai', meaning: 'Tolong bantu', example: 'ちょっと手伝ってください。' },
                        ],
                        tips: [
                            'SELALU jawab dengan はい saat diberi instruksi',
                            'Jika tidak mengerti, jangan diam - minta ulangi dengan sopan',
                            'Setelah selesai, lapor dengan 終わりました',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What do you say when you understand an instruction?', questionId: 'Apa yang dikatakan saat mengerti instruksi?', options: ['いいえ', 'すみません', 'はい、わかりました', 'ありがとう'], answer: 'はい、わかりました', order: 1 },
                        { type: 'multiple_choice', question: 'How do you ask someone to repeat?', questionId: 'Bagaimana meminta seseorang mengulang?', options: ['もう一度お願いします', '終わりました', '手伝ってください', 'わかりました'], answer: 'もう一度お願いします', order: 2 },
                    ],
                },
                {
                    title: '安全用語 (Safety Terms)',
                    titleId: 'Istilah Keselamatan (K3)',
                    order: 2,
                    xpReward: 35,
                    content: {
                        vocabulary: [
                            { word: '危ない！', romanization: 'Abunai!', meaning: 'Bahaya!', example: '危ない！止まって！' },
                            { word: '気をつけて', romanization: 'Ki wo tsukete', meaning: 'Hati-hati', example: '滑りやすいから、気をつけて。' },
                            { word: 'ヘルメットをかぶってください', romanization: 'Herumetto wo kabutte kudasai', meaning: 'Tolong pakai helm', example: '現場ではヘルメットをかぶってください。' },
                            { word: '安全第一', romanization: 'Anzen daiichi', meaning: 'Keselamatan utama', example: '安全第一で作業しましょう。' },
                            { word: '消火器', romanization: 'Shoukaki', meaning: 'Alat pemadam', example: '消火器はどこですか？' },
                            { word: '非常口', romanization: 'Hijouguchi', meaning: 'Pintu darurat', example: '非常口を確認してください。' },
                        ],
                        tips: [
                            '危ない！ adalah kata PALING PENTING untuk keselamatan - teriak keras!',
                            '安全第一 (Anzen Daiichi) = slogan K3 di semua pabrik Jepang',
                            'Hafalkan lokasi 消火器 dan 非常口 di tempat kerja Anda',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What do you shout when there is danger?', questionId: 'Apa yang diteriakkan saat ada bahaya?', options: ['気をつけて', '危ない', '終わりました', 'はい'], answer: '危ない', order: 1 },
                        { type: 'multiple_choice', question: 'What does 安全第一 mean?', questionId: 'Apa arti 安全第一?', options: ['Kerja cepat', 'Keselamatan utama', 'Istirahat dulu', 'Pulang duluan'], answer: 'Keselamatan utama', order: 2 },
                    ],
                },
            ],
        },
    ];

    // ============================================
    // KOREAN COURSES (TOPIK Level 1-2)
    // ============================================
    const koreanCourses = [
        {
            language: 'ko',
            level: 'beginner',
            title: '한글 마스터',
            titleId: 'Menguasai Hangul',
            description: 'Master the Korean alphabet (Hangul)',
            descriptionId: 'Kuasai alfabet Korea (Hangul) - fondasi untuk membaca dan menulis',
            order: 1,
            lessons: [
                {
                    title: '기본 모음 (Basic Vowels)',
                    titleId: 'Vokal Dasar',
                    order: 1,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'ㅏ', romanization: 'a', meaning: 'vokal a', example: '아 (a) - ah' },
                            { word: 'ㅓ', romanization: 'eo', meaning: 'vokal eo (antara e dan o)', example: '어 (eo)' },
                            { word: 'ㅗ', romanization: 'o', meaning: 'vokal o', example: '오 (o)' },
                            { word: 'ㅜ', romanization: 'u', meaning: 'vokal u', example: '우 (u)' },
                            { word: 'ㅡ', romanization: 'eu', meaning: 'vokal eu (seperti u tapi bibir rata)', example: '으 (eu)' },
                            { word: 'ㅣ', romanization: 'i', meaning: 'vokal i', example: '이 (i)' },
                        ],
                        tips: [
                            'Hangul diciptakan Raja Sejong tahun 1443 - alfabet paling ilmiah!',
                            'ㅓ (eo) tidak ada di bahasa Indonesia - latih terus!',
                            'ㅡ (eu) seperti "e" di kata "enak" tapi bibir rata',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'How do you read ㅏ?', questionId: 'Bagaimana membaca ㅏ?', options: ['a', 'o', 'u', 'i'], answer: 'a', order: 1 },
                        { type: 'multiple_choice', question: 'Which vowel sounds like "eo"?', questionId: 'Vokal mana yang berbunyi "eo"?', options: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ'], answer: 'ㅓ', order: 2 },
                    ],
                },
                {
                    title: '기본 자음 (Basic Consonants)',
                    titleId: 'Konsonan Dasar',
                    order: 2,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'ㄱ', romanization: 'g/k', meaning: 'seperti g atau k', example: '가 (ga) - pergi' },
                            { word: 'ㄴ', romanization: 'n', meaning: 'seperti n', example: '나 (na) - saya' },
                            { word: 'ㄷ', romanization: 'd/t', meaning: 'seperti d atau t', example: '다 (da) - semua' },
                            { word: 'ㅁ', romanization: 'm', meaning: 'seperti m', example: '마 (ma)' },
                            { word: 'ㅂ', romanization: 'b/p', meaning: 'seperti b atau p', example: '바 (ba)' },
                            { word: 'ㅅ', romanization: 's', meaning: 'seperti s', example: '사 (sa)' },
                        ],
                        tips: [
                            'ㄱ di awal kata = g, di akhir = k',
                            'Hangul dibaca dari kiri ke kanan, atas ke bawah',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What sound does ㄴ make?', questionId: 'Bunyi apa yang dihasilkan ㄴ?', options: ['m', 'n', 'g', 's'], answer: 'n', order: 1 },
                    ],
                },
            ],
        },
        {
            language: 'ko',
            level: 'beginner',
            title: '인사와 소개',
            titleId: 'Salam & Perkenalan',
            description: 'Korean greetings and self-introduction',
            descriptionId: 'Salam Korea dan cara memperkenalkan diri',
            order: 2,
            lessons: [
                {
                    title: '기본 인사 (Basic Greetings)',
                    titleId: 'Salam Dasar',
                    order: 1,
                    xpReward: 25,
                    content: {
                        vocabulary: [
                            { word: '안녕하세요', romanization: 'Annyeonghaseyo', meaning: 'Halo (formal)', example: '안녕하세요, 사장님!' },
                            { word: '감사합니다', romanization: 'Gamsahamnida', meaning: 'Terima kasih (formal)', example: '도와주셔서 감사합니다.' },
                            { word: '죄송합니다', romanization: 'Joesonghamnida', meaning: 'Maaf (formal)', example: '늦어서 죄송합니다.' },
                            { word: '안녕히 가세요', romanization: 'Annyeonghi gaseyo', meaning: 'Selamat jalan (kpd yg pergi)', example: '안녕히 가세요, 수고하세요!' },
                            { word: '안녕히 계세요', romanization: 'Annyeonghi gyeseyo', meaning: 'Selamat tinggal (kpd yg tinggal)', example: '안녕히 계세요!' },
                        ],
                        tips: [
                            '안녕하세요 digunakan kapan saja - pagi, siang, malam',
                            'Di Korea, ada 2 versi selamat tinggal tergantung siapa yang pergi',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What does 안녕하세요 mean?', questionId: 'Apa arti 안녕하세요?', options: ['Terima kasih', 'Maaf', 'Halo', 'Selamat tinggal'], answer: 'Halo', order: 1 },
                    ],
                },
                {
                    title: '직장 인사 (Workplace Greetings)',
                    titleId: 'Salam di Tempat Kerja',
                    order: 2,
                    xpReward: 30,
                    content: {
                        vocabulary: [
                            { word: '수고하셨습니다', romanization: 'Sugohasyeosseumnida', meaning: 'Terima kasih atas kerja kerasnya', example: '오늘도 수고하셨습니다!' },
                            { word: '잘 부탁드립니다', romanization: 'Jal butakdeurimnida', meaning: 'Mohon bantuannya', example: '신입입니다. 잘 부탁드립니다.' },
                            { word: '먼저 들어가겠습니다', romanization: 'Meonjeo deureogagessseumnida', meaning: 'Saya duluan (pulang)', example: '먼저 들어가겠습니다. 수고하세요!' },
                            { word: '알겠습니다', romanization: 'Algessseumnida', meaning: 'Saya mengerti', example: '네, 알겠습니다!' },
                        ],
                        tips: [
                            '수고하셨습니다 = frasa PALING PENTING di kantor Korea',
                            'Saat pulang duluan, ucapkan 먼저 들어가겠습니다',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What do you say when leaving work first?', questionId: 'Apa yang dikatakan saat pulang duluan?', options: ['안녕히 가세요', '먼저 들어가겠습니다', '감사합니다', '안녕하세요'], answer: '먼저 들어가겠습니다', order: 1 },
                    ],
                },
            ],
        },
    ];

    // ============================================
    // ENGLISH COURSES (IELTS Prep)
    // ============================================
    const englishCourses = [
        {
            language: 'en',
            level: 'beginner',
            title: 'English Basics',
            titleId: 'Dasar Bahasa Inggris',
            description: 'Fundamental English for daily communication',
            descriptionId: 'Bahasa Inggris dasar untuk komunikasi sehari-hari',
            order: 1,
            lessons: [
                {
                    title: 'Greetings & Introductions',
                    titleId: 'Salam & Perkenalan',
                    order: 1,
                    xpReward: 15,
                    content: {
                        vocabulary: [
                            { word: 'Hello', meaning: 'Halo', example: 'Hello, how are you?' },
                            { word: 'Good morning', meaning: 'Selamat pagi', example: 'Good morning, sir!' },
                            { word: 'Good afternoon', meaning: 'Selamat siang', example: 'Good afternoon, everyone.' },
                            { word: 'Good evening', meaning: 'Selamat malam', example: 'Good evening, nice to meet you.' },
                            { word: 'Goodbye', meaning: 'Selamat tinggal', example: 'Goodbye, see you tomorrow!' },
                            { word: 'My name is...', meaning: 'Nama saya...', example: 'My name is Ahmad.' },
                            { word: 'Nice to meet you', meaning: 'Senang bertemu denganmu', example: 'Nice to meet you, I am from Indonesia.' },
                        ],
                        grammar: [
                            {
                                pattern: 'Subject + am/is/are + noun',
                                explanation: 'Digunakan untuk memperkenalkan diri',
                                examples: ['I am Ahmad.', 'She is Maria.', 'We are workers.'],
                            },
                        ],
                        tips: [
                            'Selalu tersenyum saat menyapa',
                            'Jabat tangan dengan mantap tapi tidak terlalu keras',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What does "Hello" mean?', questionId: 'Apa arti "Hello"?', options: ['Halo', 'Selamat tinggal', 'Terima kasih', 'Maaf'], answer: 'Halo', order: 1 },
                        { type: 'fill_blank', question: 'Nice to ___ you!', questionId: 'Nice to ___ you!', answer: 'meet', order: 2 },
                    ],
                },
                {
                    title: 'Numbers 1-100',
                    titleId: 'Angka 1-100',
                    order: 2,
                    xpReward: 15,
                    content: {
                        vocabulary: [
                            { word: 'One', meaning: 'Satu', example: 'I have one book.' },
                            { word: 'Two', meaning: 'Dua', example: 'Two cups of coffee, please.' },
                            { word: 'Three', meaning: 'Tiga', example: 'There are three people.' },
                            { word: 'Ten', meaning: 'Sepuluh', example: 'I work ten hours a day.' },
                            { word: 'Twenty', meaning: 'Dua puluh', example: 'Twenty dollars.' },
                            { word: 'Fifty', meaning: 'Lima puluh', example: 'Fifty percent.' },
                            { word: 'Hundred', meaning: 'Seratus', example: 'One hundred percent!' },
                        ],
                        tips: [
                            'Latih mengucapkan angka 1-100 setiap hari',
                            'Penting untuk menyebutkan harga dan jam',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What is "lima" in English?', questionId: 'Apa "lima" dalam Bahasa Inggris?', options: ['Four', 'Five', 'Six', 'Seven'], answer: 'Five', order: 1 },
                    ],
                },
            ],
        },
        {
            language: 'en',
            level: 'beginner',
            title: 'Workplace English',
            titleId: 'Bahasa Inggris Kerja',
            description: 'Essential English for Australian workplaces',
            descriptionId: 'Bahasa Inggris penting untuk tempat kerja di Australia',
            order: 2,
            lessons: [
                {
                    title: 'Receiving Instructions',
                    titleId: 'Menerima Instruksi',
                    order: 1,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'I understand', meaning: 'Saya mengerti', example: 'Yes, I understand.' },
                            { word: 'Could you repeat that?', meaning: 'Bisakah Anda mengulang?', example: 'Sorry, could you repeat that please?' },
                            { word: 'Please put it here', meaning: 'Tolong taruh di sini', example: 'Please put the box here.' },
                            { word: "I'm done / I'm finished", meaning: 'Saya sudah selesai', example: "I'm done with this task." },
                            { word: 'Can you help me?', meaning: 'Bisakah kamu membantu?', example: 'Excuse me, can you help me?' },
                        ],
                        tips: [
                            'Selalu jawab "Yes" atau "I understand" saat diberi instruksi',
                            'Jangan malu bertanya jika tidak mengerti',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'How do you ask someone to repeat?', questionId: 'Bagaimana meminta seseorang mengulang?', options: ['I understand', 'Could you repeat that?', 'I am done', 'Thank you'], answer: 'Could you repeat that?', order: 1 },
                    ],
                },
                {
                    title: 'Safety at Work',
                    titleId: 'Keselamatan Kerja',
                    order: 2,
                    xpReward: 25,
                    content: {
                        vocabulary: [
                            { word: 'Danger!', meaning: 'Bahaya!', example: 'Danger! Stay back!' },
                            { word: 'Be careful', meaning: 'Hati-hati', example: 'Be careful, the floor is wet.' },
                            { word: 'Wear your helmet', meaning: 'Pakai helm Anda', example: 'Please wear your helmet at all times.' },
                            { word: 'Safety first', meaning: 'Keselamatan utama', example: 'Remember, safety first!' },
                            { word: 'Emergency exit', meaning: 'Pintu darurat', example: 'The emergency exit is there.' },
                            { word: 'Fire extinguisher', meaning: 'Alat pemadam', example: 'Where is the fire extinguisher?' },
                        ],
                        tips: [
                            'Di Australia, K3 (WHS - Work Health Safety) sangat ketat',
                            'Selalu ikuti peraturan keselamatan - pelanggaran bisa kena denda!',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What do you shout when there is danger?', questionId: 'Apa yang diteriakkan saat ada bahaya?', options: ['Hello', 'Danger', 'Thank you', 'Goodbye'], answer: 'Danger', order: 1 },
                        { type: 'fill_blank', question: 'Safety ___! (Keselamatan utama)', questionId: 'Safety ___! (Keselamatan utama)', answer: 'first', order: 2 },
                    ],
                },
            ],
        },
    ];

    // Create all courses
    const allCourses = [...japaneseCourses, ...koreanCourses, ...englishCourses];

    for (const courseData of allCourses) {
        const { lessons, ...courseInfo } = courseData;

        const course = await prisma.course.create({
            data: courseInfo,
        });

        for (const lessonData of lessons) {
            const { quizzes, ...lessonInfo } = lessonData;

            const lesson = await prisma.lesson.create({
                data: {
                    ...lessonInfo,
                    courseId: course.id,
                },
            });

            if (quizzes) {
                for (const quizData of quizzes) {
                    await prisma.quiz.create({
                        data: {
                            ...quizData,
                            lessonId: lesson.id,
                            xpReward: 5,
                        },
                    });
                }
            }
        }
    }

    console.log('✓ Created comprehensive curriculum');

    // Summary
    const courseCount = await prisma.course.count();
    const lessonCount = await prisma.lesson.count();
    const quizCount = await prisma.quiz.count();
    const achievementCount = await prisma.achievement.count();

    console.log(`
╔═══════════════════════════════════════════╗
║   CMI Learning - Curriculum Complete!     ║
╠═══════════════════════════════════════════╣
║   Courses:      ${courseCount.toString().padStart(3)}                       ║
║   Lessons:      ${lessonCount.toString().padStart(3)}                       ║
║   Quizzes:      ${quizCount.toString().padStart(3)}                       ║
║   Achievements: ${achievementCount.toString().padStart(3)}                       ║
╠═══════════════════════════════════════════╣
║   Demo Accounts:                          ║
║   demo@cmi.com (Japanese)                 ║
║   korea@cmi.com (Korean)                  ║
║   english@cmi.com (English)               ║
║   Password: password123                   ║
╚═══════════════════════════════════════════╝
  `);
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
