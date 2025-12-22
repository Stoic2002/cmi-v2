// English A1 Courses 1-5 - Alphabet, Greetings, Numbers, Time, Daily Expressions
// CEFR Level A1

export const englishA1Courses1to5 = [
    // Course 1: Alphabet & Pronunciation
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Alphabet & Pronunciation',
        titleId: 'Alfabet dan Pengucapan',
        description: 'Master English letters and sounds',
        descriptionId: 'Kuasai huruf dan bunyi bahasa Inggris',
        order: 1,
        canDo: {
            listening: 'Dapat mengenali bunyi huruf Inggris',
            reading: 'Dapat membaca kata-kata sederhana',
            speaking: 'Dapat mengucapkan alfabet dengan benar',
            writing: 'Dapat menulis huruf A-Z'
        },
        lessons: [
            {
                title: 'A-G Letters',
                titleId: 'Huruf A-G',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'A', meaning: 'a', example: 'Apple, And, Ask' },
                        { word: 'B', meaning: 'bi', example: 'Book, Ball, Big' },
                        { word: 'C', meaning: 'si', example: 'Cat, Cup, Come' },
                        { word: 'D', meaning: 'di', example: 'Dog, Day, Do' },
                        { word: 'E', meaning: 'i', example: 'Egg, End, Every' },
                        { word: 'F', meaning: 'ef', example: 'Food, Fish, Five' },
                        { word: 'G', meaning: 'ji', example: 'Good, Go, Give' },
                    ],
                    tips: ['C bisa berbunyi "k" (cat) atau "s" (city)', 'G bisa berbunyi "g" (go) atau "j" (gym)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How do you pronounce "B"?', questionId: 'Bagaimana mengucapkan "B"?', options: ['a', 'bi', 'si', 'di'], answer: 'bi', order: 1 },
                ],
            },
            {
                title: 'H-N Letters',
                titleId: 'Huruf H-N',
                order: 2, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'H', meaning: 'eich', example: 'Hello, Help, House' },
                        { word: 'I', meaning: 'ai', example: 'I, In, Important' },
                        { word: 'J', meaning: 'jei', example: 'Job, Just, Jump' },
                        { word: 'K', meaning: 'kei', example: 'Keep, Know, Kind' },
                        { word: 'L', meaning: 'el', example: 'Look, Like, Long' },
                        { word: 'M', meaning: 'em', example: 'Make, My, Money' },
                        { word: 'N', meaning: 'en', example: 'Name, No, New' },
                    ],
                    tips: ['K di awal "kn" sering tidak diucapkan: know, knee'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How is "K" in "know" pronounced?', questionId: 'Bagaimana "K" di "know"?', options: ['k-no', 'no', 'ko-no', 'ka-no'], answer: 'no', order: 1 },
                ],
            },
            {
                title: 'O-U Letters',
                titleId: 'Huruf O-U',
                order: 3, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'O', meaning: 'o', example: 'Open, On, Old' },
                        { word: 'P', meaning: 'pi', example: 'Please, Put, People' },
                        { word: 'Q', meaning: 'kyu', example: 'Question, Quick, Quiet' },
                        { word: 'R', meaning: 'ar', example: 'Read, Right, Room' },
                        { word: 'S', meaning: 'es', example: 'See, Say, Some' },
                        { word: 'T', meaning: 'ti', example: 'Take, Time, To' },
                        { word: 'U', meaning: 'yu', example: 'Use, Under, Up' },
                    ],
                    tips: ['Q hampir selalu diikuti U: queen, question, quick'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '_uestion (Pertanyaan)', questionId: '_uestion', answer: 'Q', order: 1 },
                ],
            },
            {
                title: 'V-Z Letters',
                titleId: 'Huruf V-Z',
                order: 4, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'V', meaning: 'vi', example: 'Very, Visit, View' },
                        { word: 'W', meaning: 'dabel yu', example: 'Work, Water, What' },
                        { word: 'X', meaning: 'eks', example: 'Box, Six, Text' },
                        { word: 'Y', meaning: 'wai', example: 'Yes, You, Year' },
                        { word: 'Z', meaning: 'zi/zed', example: 'Zero, Zone, Zoom' },
                    ],
                    tips: ['Z diucapkan "zi" (Amerika) atau "zed" (Inggris/Australia)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Total letters in English alphabet?', questionId: 'Berapa total huruf alfabet Inggris?', options: ['24', '25', '26', '28'], answer: '26', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Greetings
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Greetings & Self-Introduction',
        titleId: 'Salam dan Perkenalan Diri',
        description: 'Essential greetings and introducing yourself',
        descriptionId: 'Salam penting dan cara memperkenalkan diri',
        order: 2,
        canDo: {
            listening: 'Dapat memahami salam dan perkenalan',
            reading: 'Dapat membaca teks perkenalan',
            speaking: 'Dapat menyapa dan memperkenalkan diri',
            writing: 'Dapat menulis perkenalan sederhana'
        },
        lessons: [
            {
                title: 'Basic Greetings',
                titleId: 'Salam Dasar',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'Hello', meaning: 'Halo', example: 'Hello, how are you?' },
                        { word: 'Good morning', meaning: 'Selamat pagi', example: 'Good morning, everyone!' },
                        { word: 'Good afternoon', meaning: 'Selamat siang', example: 'Good afternoon, sir.' },
                        { word: 'Good evening', meaning: 'Selamat malam', example: 'Good evening, nice to meet you.' },
                        { word: 'Goodbye', meaning: 'Selamat tinggal', example: 'Goodbye, see you tomorrow!' },
                        { word: 'See you later', meaning: 'Sampai jumpa', example: 'See you later!' },
                    ],
                    tips: ['Good morning = sampai ~12:00', 'Good afternoon = 12:00-18:00', 'Good evening = setelah 18:00'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Greeting for morning?', questionId: 'Salam untuk pagi?', options: ['Good evening', 'Good afternoon', 'Good morning', 'Good night'], answer: 'Good morning', order: 1 },
                ],
            },
            {
                title: 'Self-Introduction',
                titleId: 'Perkenalan Diri',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'My name is...', meaning: 'Nama saya...', example: 'My name is Ahmad.' },
                        { word: 'I am from...', meaning: 'Saya dari...', example: 'I am from Indonesia.' },
                        { word: 'Nice to meet you', meaning: 'Senang bertemu Anda', example: 'Nice to meet you, I am Ahmad.' },
                        { word: 'I work at...', meaning: 'Saya bekerja di...', example: 'I work at a factory.' },
                    ],
                    grammar: [{ pattern: 'My name is [name]. I am from [country].', explanation: 'Pola dasar perkenalan', examples: ['My name is Ahmad. I am from Indonesia.'] }],
                    tips: ['Jabat tangan dengan mantap tapi tidak terlalu keras'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'My ___ is Ahmad.', questionId: 'My ___ is Ahmad.', answer: 'name', order: 1 },
                ],
            },
            {
                title: 'How are you?',
                titleId: 'Apa Kabar?',
                order: 3, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'How are you?', meaning: 'Apa kabar?', example: 'Hello! How are you?' },
                        { word: 'I am fine, thank you.', meaning: 'Saya baik, terima kasih.', example: '' },
                        { word: 'And you?', meaning: 'Dan kamu?', example: 'I am fine. And you?' },
                        { word: 'Not bad', meaning: 'Lumayan / Tidak buruk', example: 'Not bad, thanks!' },
                    ],
                    tips: ['Selalu tanya balik: "And you?" untuk sopan santun'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Response to "How are you?"', questionId: 'Jawaban untuk "How are you?"', options: ['I am from Indonesia', 'I am fine', 'My name is Ahmad', 'I work here'], answer: 'I am fine', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Numbers
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Numbers & Counting',
        titleId: 'Angka dan Menghitung',
        description: 'Learn English numbers 1-1000+',
        descriptionId: 'Pelajari angka Inggris 1-1000+',
        order: 3,
        canDo: {
            listening: 'Dapat memahami angka dalam percakapan',
            reading: 'Dapat membaca harga dan angka',
            speaking: 'Dapat menyebutkan angka',
            writing: 'Dapat menulis angka'
        },
        lessons: [
            {
                title: '1-20',
                titleId: 'Angka 1-20',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'one', meaning: '1', example: 'I have one book.' },
                        { word: 'two', meaning: '2', example: 'Two cups, please.' },
                        { word: 'three', meaning: '3', example: 'Three people.' },
                        { word: 'four', meaning: '4', example: 'Four days.' },
                        { word: 'five', meaning: '5', example: 'Five minutes.' },
                        { word: 'ten', meaning: '10', example: 'Ten dollars.' },
                        { word: 'eleven', meaning: '11', example: 'Eleven o\'clock.' },
                        { word: 'twelve', meaning: '12', example: 'Twelve months.' },
                        { word: 'twenty', meaning: '20', example: 'Twenty years old.' },
                    ],
                    tips: ['11 dan 12 tidak beraturan: eleven, twelve (bukan ten-one, ten-two)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is "lima" in English?', questionId: 'Apa "lima" dalam Inggris?', options: ['four', 'five', 'six', 'seven'], answer: 'five', order: 1 },
                ],
            },
            {
                title: '21-100',
                titleId: 'Angka 21-100',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'twenty-one', meaning: '21', example: 'Twenty-one years old.' },
                        { word: 'thirty', meaning: '30', example: 'Thirty minutes.' },
                        { word: 'forty', meaning: '40', example: 'Forty dollars.' },
                        { word: 'fifty', meaning: '50', example: 'Fifty percent.' },
                        { word: 'sixty', meaning: '60', example: 'Sixty seconds.' },
                        { word: 'hundred', meaning: '100', example: 'One hundred percent!' },
                    ],
                    tips: ['Puluhan + satuan: twenty-one, thirty-five, forty-nine'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Twenty + five = twenty-___', questionId: 'Twenty + five = twenty-___', answer: 'five', order: 1 },
                ],
            },
            {
                title: '100+ and Prices',
                titleId: 'Angka Besar dan Harga',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'hundred', meaning: '100', example: 'One hundred dollars.' },
                        { word: 'thousand', meaning: '1000', example: 'One thousand people.' },
                        { word: 'million', meaning: '1.000.000', example: 'One million dollars!' },
                        { word: 'dollar', meaning: 'Dolar', example: 'Ten dollars.' },
                        { word: 'cent', meaning: 'Sen', example: 'Fifty cents.' },
                    ],
                    tips: ['Harga: $10.50 dibaca "ten dollars and fifty cents" atau "ten fifty"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 1000?', questionId: 'Apa 1000?', options: ['hundred', 'thousand', 'million', 'billion'], answer: 'thousand', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Time
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Time & Calendar',
        titleId: 'Waktu dan Kalender',
        description: 'Telling time and dates',
        descriptionId: 'Menyebutkan waktu dan tanggal',
        order: 4,
        canDo: {
            listening: 'Dapat memahami waktu dan jadwal',
            reading: 'Dapat membaca jadwal',
            speaking: 'Dapat menyebutkan waktu',
            writing: 'Dapat menulis jadwal'
        },
        lessons: [
            {
                title: 'Telling Time',
                titleId: 'Menyebutkan Jam',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: "o'clock", meaning: 'tepat', example: "It's three o'clock." },
                        { word: 'half past', meaning: 'setengah', example: "It's half past three. (3:30)" },
                        { word: 'quarter past', meaning: 'seperempat lewat', example: "Quarter past three. (3:15)" },
                        { word: 'quarter to', meaning: 'kurang seperempat', example: "Quarter to four. (3:45)" },
                        { word: 'AM / PM', meaning: 'Pagi / Sore-Malam', example: '9 AM, 9 PM' },
                    ],
                    tips: ['8:30 = "eight thirty" atau "half past eight"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is "half past three"?', questionId: 'Apa "half past three"?', options: ['3:00', '3:15', '3:30', '3:45'], answer: '3:30', order: 1 },
                ],
            },
            {
                title: 'Days of the Week',
                titleId: 'Hari dalam Seminggu',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'Monday', meaning: 'Senin', example: 'I work on Monday.' },
                        { word: 'Tuesday', meaning: 'Selasa', example: '' },
                        { word: 'Wednesday', meaning: 'Rabu', example: '' },
                        { word: 'Thursday', meaning: 'Kamis', example: '' },
                        { word: 'Friday', meaning: 'Jumat', example: 'TGIF - Thank God It\'s Friday!' },
                        { word: 'Saturday', meaning: 'Sabtu', example: '' },
                        { word: 'Sunday', meaning: 'Minggu', example: '' },
                    ],
                    tips: ['Weekdays = Senin-Jumat, Weekend = Sabtu-Minggu'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What comes after Thursday?', questionId: 'Apa setelah Thursday?', options: ['Wednesday', 'Friday', 'Saturday', 'Monday'], answer: 'Friday', order: 1 },
                ],
            },
            {
                title: 'Months & Dates',
                titleId: 'Bulan dan Tanggal',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'January', meaning: 'Januari', example: '' },
                        { word: 'February', meaning: 'Februari', example: '' },
                        { word: 'March', meaning: 'Maret', example: '' },
                        { word: 'Today', meaning: 'Hari ini', example: 'Today is Monday.' },
                        { word: 'Tomorrow', meaning: 'Besok', example: 'See you tomorrow!' },
                        { word: 'Yesterday', meaning: 'Kemarin', example: 'I worked yesterday.' },
                    ],
                    tips: ['Tanggal: January 1st, February 2nd, March 3rd, April 4th...'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___ is Monday. (Hari ini)', questionId: '___ is Monday.', answer: 'Today', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Daily Expressions
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Daily Expressions',
        titleId: 'Ungkapan Sehari-hari',
        description: 'Common everyday expressions',
        descriptionId: 'Ungkapan umum sehari-hari',
        order: 5,
        canDo: {
            listening: 'Dapat memahami ungkapan umum',
            reading: 'Dapat membaca dialog sederhana',
            speaking: 'Dapat menggunakan ungkapan sehari-hari',
            writing: 'Dapat menulis pesan singkat'
        },
        lessons: [
            {
                title: 'Thank You & Sorry',
                titleId: 'Terima Kasih & Maaf',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'Thank you', meaning: 'Terima kasih', example: 'Thank you very much!' },
                        { word: 'Thanks', meaning: 'Makasih (informal)', example: 'Thanks a lot!' },
                        { word: "You're welcome", meaning: 'Sama-sama', example: '' },
                        { word: 'Sorry', meaning: 'Maaf', example: 'Sorry, I am late.' },
                        { word: 'Excuse me', meaning: 'Permisi', example: 'Excuse me, can I ask something?' },
                    ],
                    tips: ['Excuse me = untuk menarik perhatian atau minta izin lewat'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Response to "Thank you"?', questionId: 'Jawaban untuk "Thank you"?', options: ['Sorry', "You're welcome", 'Excuse me', 'Please'], answer: "You're welcome", order: 1 },
                ],
            },
            {
                title: 'Please & Requests',
                titleId: 'Tolong & Permintaan',
                order: 2, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'Please', meaning: 'Tolong', example: 'Water, please.' },
                        { word: 'Can I have...?', meaning: 'Bolehkah saya...?', example: 'Can I have some water?' },
                        { word: 'Could you...?', meaning: 'Bisakah Anda...?', example: 'Could you help me?' },
                        { word: 'Wait a moment', meaning: 'Tunggu sebentar', example: 'Please wait a moment.' },
                    ],
                    tips: ['"Could" lebih sopan dari "can"'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Water, ___. (Tolong)', questionId: 'Water, ___.', answer: 'please', order: 1 },
                ],
            },
            {
                title: 'Understanding & Not Understanding',
                titleId: 'Mengerti & Tidak Mengerti',
                order: 3, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'I understand', meaning: 'Saya mengerti', example: 'Yes, I understand.' },
                        { word: "I don't understand", meaning: 'Saya tidak mengerti', example: "Sorry, I don't understand." },
                        { word: 'Can you repeat that?', meaning: 'Bisa ulangi?', example: 'Could you repeat that, please?' },
                        { word: 'Slowly, please', meaning: 'Pelan-pelan', example: 'Can you speak slowly, please?' },
                    ],
                    tips: ['Jangan malu untuk bilang "I don\'t understand" - lebih baik bertanya!'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say you understand?', questionId: 'Bagaimana bilang mengerti?', options: ["I don't understand", 'I understand', 'I am sorry', 'Please repeat'], answer: 'I understand', order: 1 },
                ],
            },
        ],
    },
];

export default englishA1Courses1to5;
