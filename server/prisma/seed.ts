import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

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

    // Create demo user
    const hashedPassword = await bcrypt.hash('password123', 10);
    const demoUser = await prisma.user.create({
        data: {
            email: 'demo@cmi.com',
            password: hashedPassword,
            name: 'Demo User',
            targetLanguage: 'en',
            currentLevel: 'beginner',
            xp: 150,
            streak: 5,
            lastActiveDate: new Date(),
        },
    });
    console.log('✓ Created demo user');

    // Create achievements
    const achievements = await Promise.all([
        prisma.achievement.create({
            data: {
                name: 'First Steps',
                nameId: 'Langkah Pertama',
                description: 'Complete your first lesson',
                descriptionId: 'Selesaikan pelajaran pertama',
                icon: '🎯',
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
                icon: '🔥',
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
                icon: '🏆',
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
                icon: '💬',
                condition: { type: 'conversations', value: 10 },
                xpReward: 100,
            },
        }),
    ]);
    console.log('✓ Created achievements');

    // ========== ENGLISH COURSES ==========
    const englishCourses = [
        {
            language: 'en',
            level: 'beginner',
            title: 'English Basics',
            titleId: 'Dasar Bahasa Inggris',
            description: 'Learn fundamental English vocabulary and phrases',
            descriptionId: 'Pelajari kosakata dan frasa dasar Bahasa Inggris',
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
                            'Kontak mata menunjukkan kepercayaan diri',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What does "Hello" mean?', questionId: 'Apa arti "Hello"?', options: ['Halo', 'Selamat tinggal', 'Terima kasih', 'Maaf'], answer: 'Halo', order: 1 },
                        { type: 'multiple_choice', question: 'How do you say "Selamat pagi" in English?', questionId: 'Bagaimana cara mengatakan "Selamat pagi" dalam Bahasa Inggris?', options: ['Good night', 'Good morning', 'Good evening', 'Good afternoon'], answer: 'Good morning', order: 2 },
                        { type: 'fill_blank', question: 'Nice to ___ you!', questionId: 'Nice to ___ you!', answer: 'meet', order: 3 },
                    ],
                },
                {
                    title: 'Numbers & Counting',
                    titleId: 'Angka & Berhitung',
                    order: 2,
                    xpReward: 15,
                    content: {
                        vocabulary: [
                            { word: 'One', meaning: 'Satu', example: 'I have one book.' },
                            { word: 'Two', meaning: 'Dua', example: 'Two cups of coffee, please.' },
                            { word: 'Three', meaning: 'Tiga', example: 'There are three people.' },
                            { word: 'Four', meaning: 'Empat', example: 'Four seasons in a year.' },
                            { word: 'Five', meaning: 'Lima', example: 'Five fingers on one hand.' },
                            { word: 'Ten', meaning: 'Sepuluh', example: 'I work ten hours a day.' },
                            { word: 'Hundred', meaning: 'Seratus', example: 'One hundred percent!' },
                        ],
                        tips: [
                            'Latih mengucapkan angka 1-100 setiap hari',
                            'Hitung benda-benda di sekitar Anda dalam Bahasa Inggris',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What is "five" in Indonesian?', questionId: 'Apa arti "five" dalam Bahasa Indonesia?', options: ['Empat', 'Lima', 'Enam', 'Tujuh'], answer: 'Lima', order: 1 },
                        { type: 'fill_blank', question: 'Three + Two = ___', questionId: 'Three + Two = ___', answer: 'Five', order: 2 },
                    ],
                },
                {
                    title: 'Days & Time',
                    titleId: 'Hari & Waktu',
                    order: 3,
                    xpReward: 15,
                    content: {
                        vocabulary: [
                            { word: 'Monday', meaning: 'Senin', example: 'I start work on Monday.' },
                            { word: 'Tuesday', meaning: 'Selasa', example: 'Meeting is on Tuesday.' },
                            { word: 'Wednesday', meaning: 'Rabu', example: 'Wednesday is my day off.' },
                            { word: 'Today', meaning: 'Hari ini', example: 'Today is a good day.' },
                            { word: 'Tomorrow', meaning: 'Besok', example: 'See you tomorrow!' },
                            { word: 'Yesterday', meaning: 'Kemarin', example: 'I was busy yesterday.' },
                            { word: 'What time is it?', meaning: 'Jam berapa sekarang?', example: 'Excuse me, what time is it?' },
                        ],
                        tips: [
                            'Ingat: Sunday adalah hari libur di banyak negara Barat',
                            'Jam kerja biasanya 9 AM - 5 PM',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What day comes after Monday?', questionId: 'Hari apa setelah Monday?', options: ['Sunday', 'Tuesday', 'Wednesday', 'Friday'], answer: 'Tuesday', order: 1 },
                        { type: 'fill_blank', question: 'What ___ is it? It is 3 PM.', questionId: 'What ___ is it? It is 3 PM.', answer: 'time', order: 2 },
                    ],
                },
            ],
        },
        {
            language: 'en',
            level: 'beginner',
            title: 'Workplace English',
            titleId: 'Bahasa Inggris di Tempat Kerja',
            description: 'Essential English for the workplace',
            descriptionId: 'Bahasa Inggris penting untuk tempat kerja',
            order: 2,
            lessons: [
                {
                    title: 'Office Vocabulary',
                    titleId: 'Kosakata Kantor',
                    order: 1,
                    xpReward: 15,
                    content: {
                        vocabulary: [
                            { word: 'Office', meaning: 'Kantor', example: 'I work in an office.' },
                            { word: 'Boss', meaning: 'Bos/Atasan', example: 'My boss is very kind.' },
                            { word: 'Meeting', meaning: 'Rapat', example: 'We have a meeting at 10 AM.' },
                            { word: 'Break', meaning: 'Istirahat', example: 'Let\'s take a break.' },
                            { word: 'Deadline', meaning: 'Tenggat waktu', example: 'The deadline is tomorrow.' },
                        ],
                        tips: [
                            'Datang tepat waktu ke meeting',
                            'Selalu bawa buku catatan ke rapat',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'What is "rapat" in English?', questionId: 'Apa "rapat" dalam Bahasa Inggris?', options: ['Meeting', 'Eating', 'Reading', 'Sleeping'], answer: 'Meeting', order: 1 },
                    ],
                },
            ],
        },
    ];

    // ========== KOREAN COURSES ==========
    const koreanCourses = [
        {
            language: 'ko',
            level: 'beginner',
            title: '한국어 기초',
            titleId: 'Dasar Bahasa Korea',
            description: 'Learn Korean alphabet and basic phrases',
            descriptionId: 'Pelajari huruf Korea dan frasa dasar',
            order: 1,
            lessons: [
                {
                    title: '한글 자음 (Consonants)',
                    titleId: 'Konsonan Hangul',
                    order: 1,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'ㄱ', romanization: 'g/k', meaning: 'seperti g atau k', example: '가 (ga) - pergi' },
                            { word: 'ㄴ', romanization: 'n', meaning: 'seperti n', example: '나 (na) - saya' },
                            { word: 'ㄷ', romanization: 'd/t', meaning: 'seperti d atau t', example: '다 (da) - semua' },
                            { word: 'ㄹ', romanization: 'r/l', meaning: 'antara r dan l', example: '라 (ra)' },
                            { word: 'ㅁ', romanization: 'm', meaning: 'seperti m', example: '마 (ma)' },
                        ],
                        tips: [
                            'Hangul diciptakan oleh Raja Sejong pada 1443',
                            'Hanya ada 14 konsonan dan 10 vokal dasar',
                            'Latihan menulis setiap hari selama 15 menit',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'Bagaimana bunyi ㄱ?', questionId: 'Bagaimana bunyi ㄱ?', options: ['g/k', 'n', 'm', 'r/l'], answer: 'g/k', order: 1 },
                        { type: 'multiple_choice', question: 'Huruf mana yang berbunyi "n"?', questionId: 'Huruf mana yang berbunyi "n"?', options: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅁ'], answer: 'ㄴ', order: 2 },
                    ],
                },
                {
                    title: '인사 (Greetings)',
                    titleId: 'Salam dalam Bahasa Korea',
                    order: 2,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: '안녕하세요', romanization: 'Annyeonghaseyo', meaning: 'Halo (formal)', example: '안녕하세요, 저는 아마드입니다.' },
                            { word: '감사합니다', romanization: 'Gamsahamnida', meaning: 'Terima kasih (formal)', example: '도와주셔서 감사합니다.' },
                            { word: '죄송합니다', romanization: 'Joesonghamnida', meaning: 'Maaf (formal)', example: '늦어서 죄송합니다.' },
                            { word: '네', romanization: 'Ne', meaning: 'Ya', example: '네, 알겠습니다.' },
                            { word: '아니요', romanization: 'Aniyo', meaning: 'Tidak', example: '아니요, 괜찮아요.' },
                        ],
                        grammar: [
                            {
                                pattern: '저는 [nama]입니다',
                                explanation: 'Cara memperkenalkan diri secara formal',
                                examples: ['저는 아마드입니다 (Saya Ahmad)', '저는 인도네시아 사람입니다 (Saya orang Indonesia)'],
                            },
                        ],
                        tips: [
                            'Selalu gunakan bahasa formal (존댓말) dengan atasan',
                            'Membungkuk sedikit saat menyapa menunjukkan rasa hormat',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'Apa arti "안녕하세요"?', questionId: 'Apa arti "안녕하세요"?', options: ['Selamat tinggal', 'Halo', 'Terima kasih', 'Maaf'], answer: 'Halo', order: 1 },
                        { type: 'fill_blank', question: '감사___니다 (Terima kasih)', questionId: '감사___니다 (Terima kasih)', answer: '합', order: 2 },
                    ],
                },
            ],
        },
    ];

    // ========== JAPANESE COURSES ==========
    const japaneseCourses = [
        {
            language: 'ja',
            level: 'beginner',
            title: '日本語の基礎',
            titleId: 'Dasar Bahasa Jepang',
            description: 'Learn Hiragana and basic Japanese phrases',
            descriptionId: 'Pelajari Hiragana dan frasa dasar Bahasa Jepang',
            order: 1,
            lessons: [
                {
                    title: 'ひらがな あ行 (Hiragana A-row)',
                    titleId: 'Hiragana Baris A',
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
                            'Hiragana adalah salah satu dari 3 sistem penulisan Jepang',
                            'Ada 46 karakter hiragana dasar',
                            'Latih menulis setiap karakter minimal 10 kali',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'Bagaimana cara membaca あ?', questionId: 'Bagaimana cara membaca あ?', options: ['a', 'i', 'u', 'e'], answer: 'a', order: 1 },
                        { type: 'multiple_choice', question: 'Karakter mana yang berbunyi "u"?', questionId: 'Karakter mana yang berbunyi "u"?', options: ['あ', 'い', 'う', 'え'], answer: 'う', order: 2 },
                    ],
                },
                {
                    title: '挨拶 (Greetings)',
                    titleId: 'Salam dalam Bahasa Jepang',
                    order: 2,
                    xpReward: 20,
                    content: {
                        vocabulary: [
                            { word: 'おはようございます', romanization: 'Ohayou gozaimasu', meaning: 'Selamat pagi (formal)', example: 'おはようございます、先生!' },
                            { word: 'こんにちは', romanization: 'Konnichiwa', meaning: 'Halo / Selamat siang', example: 'こんにちは、お元気ですか?' },
                            { word: 'こんばんは', romanization: 'Konbanwa', meaning: 'Selamat malam', example: 'こんばんは、田中さん。' },
                            { word: 'ありがとうございます', romanization: 'Arigatou gozaimasu', meaning: 'Terima kasih (formal)', example: 'ご親切にありがとうございます。' },
                            { word: 'すみません', romanization: 'Sumimasen', meaning: 'Permisi / Maaf', example: 'すみません、トイレはどこですか?' },
                        ],
                        grammar: [
                            {
                                pattern: '私は [nama] です',
                                explanation: 'Cara memperkenalkan diri: Watashi wa [nama] desu',
                                examples: ['私はアマドです (Saya Ahmad)', '私はインドネシア人です (Saya orang Indonesia)'],
                            },
                        ],
                        tips: [
                            'Membungkuk adalah bagian penting dari budaya Jepang',
                            'Gunakan "san" (さん) setelah nama orang sebagai tanda hormat',
                        ],
                    },
                    quizzes: [
                        { type: 'multiple_choice', question: 'Apa arti "ありがとうございます"?', questionId: 'Apa arti "ありがとうございます"?', options: ['Selamat tinggal', 'Maaf', 'Terima kasih', 'Halo'], answer: 'Terima kasih', order: 1 },
                        { type: 'multiple_choice', question: 'Bagaimana mengatakan "Selamat pagi" secara formal?', questionId: 'Bagaimana mengatakan "Selamat pagi" secara formal?', options: ['こんにちは', 'こんばんは', 'おはようございます', 'さようなら'], answer: 'おはようございます', order: 2 },
                    ],
                },
            ],
        },
    ];

    // Create all courses
    const allCourses = [...englishCourses, ...koreanCourses, ...japaneseCourses];

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

    console.log('✓ Created courses, lessons, and quizzes');

    // Summary
    const courseCount = await prisma.course.count();
    const lessonCount = await prisma.lesson.count();
    const quizCount = await prisma.quiz.count();
    const achievementCount = await prisma.achievement.count();

    console.log(`
╔═══════════════════════════════════════════╗
║   🌱 Database Seeding Complete!           ║
╠═══════════════════════════════════════════╣
║   Courses:      ${courseCount.toString().padStart(3)}                       ║
║   Lessons:      ${lessonCount.toString().padStart(3)}                       ║
║   Quizzes:      ${quizCount.toString().padStart(3)}                       ║
║   Achievements: ${achievementCount.toString().padStart(3)}                       ║
╠═══════════════════════════════════════════╣
║   Demo Account:                           ║
║   Email: demo@cmi.com                     ║
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
