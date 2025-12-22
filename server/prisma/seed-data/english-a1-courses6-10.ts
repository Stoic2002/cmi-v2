// English A1 Courses 6-10 - Workplace, Shopping, Directions, Food, Health
// CEFR Level A1

export const englishA1Courses6to10 = [
    // Course 6: Workplace English
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Workplace English',
        titleId: 'Bahasa Inggris Kerja',
        description: 'Essential English for Australian/Western workplaces',
        descriptionId: 'Bahasa Inggris untuk tempat kerja',
        order: 6,
        canDo: {
            listening: 'Dapat memahami instruksi kerja sederhana',
            reading: 'Dapat membaca peringatan keselamatan',
            speaking: 'Dapat berkomunikasi dengan rekan kerja',
            writing: 'Dapat mengisi formulir sederhana'
        },
        lessons: [
            {
                title: 'Receiving Instructions',
                titleId: 'Menerima Instruksi',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'I understand', meaning: 'Saya mengerti', example: 'Yes, I understand.' },
                        { word: 'Could you repeat that?', meaning: 'Bisa ulangi?', example: 'Sorry, could you repeat that, please?' },
                        { word: 'Put it here', meaning: 'Taruh di sini', example: 'Please put the box here.' },
                        { word: "I'm done", meaning: 'Sudah selesai', example: "I'm done with this task." },
                        { word: 'Can you help me?', meaning: 'Bisa bantu?', example: 'Excuse me, can you help me?' },
                    ],
                    tips: ['Selalu jawab "Yes" atau "I understand" saat diberi instruksi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to ask for repetition politely?', questionId: 'Bagaimana meminta pengulangan dengan sopan?', options: ['What?', 'Again!', 'Could you repeat that?', 'Say again'], answer: 'Could you repeat that?', order: 1 },
                ],
            },
            {
                title: 'Safety at Work',
                titleId: 'Keselamatan Kerja',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: 'Danger!', meaning: 'Bahaya!', example: 'Danger! Stay back!' },
                        { word: 'Be careful', meaning: 'Hati-hati', example: 'Be careful, the floor is wet.' },
                        { word: 'Wear your helmet', meaning: 'Pakai helm', example: 'Please wear your helmet at all times.' },
                        { word: 'Safety first', meaning: 'Keselamatan utama', example: 'Remember, safety first!' },
                        { word: 'Emergency exit', meaning: 'Pintu darurat', example: 'The emergency exit is there.' },
                        { word: 'Fire extinguisher', meaning: 'Alat pemadam', example: 'Where is the fire extinguisher?' },
                    ],
                    tips: ['Di Australia/UK, K3 (WHS/HSE) sangat ketat - selalu ikuti aturan!'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What to shout for danger?', questionId: 'Apa yang diteriakkan saat bahaya?', options: ['Hello', 'Danger!', 'Thank you', 'Goodbye'], answer: 'Danger!', order: 1 },
                ],
            },
            {
                title: 'Reporting Problems',
                titleId: 'Melaporkan Masalah',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: "There's a problem with...", meaning: 'Ada masalah dengan...', example: "There's a problem with the machine." },
                        { word: "It's not working", meaning: 'Tidak berfungsi', example: 'This machine is not working.' },
                        { word: 'I need help', meaning: 'Saya butuh bantuan', example: 'I need help with this task.' },
                        { word: 'Break time', meaning: 'Waktu istirahat', example: 'When is break time?' },
                    ],
                    tips: ['Laporkan masalah segera - jangan tunggu sampai parah'],
                },
                quizzes: [
                    { type: 'fill_blank', question: "There's a ___ with the machine.", questionId: "There's a ___ with the machine.", answer: 'problem', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Shopping
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Shopping & Transactions',
        titleId: 'Belanja dan Transaksi',
        description: 'Shopping in English-speaking countries',
        descriptionId: 'Belanja di negara berbahasa Inggris',
        order: 7,
        canDo: {
            listening: 'Dapat memahami harga',
            reading: 'Dapat membaca label harga',
            speaking: 'Dapat bertanya harga dan membeli',
            writing: 'Dapat menulis daftar belanja'
        },
        lessons: [
            {
                title: 'Asking Prices',
                titleId: 'Menanyakan Harga',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'How much is this?', meaning: 'Berapa ini?', example: 'Excuse me, how much is this?' },
                        { word: "It's...", meaning: 'Ini...', example: "It's ten dollars." },
                        { word: 'Expensive', meaning: 'Mahal', example: "That's too expensive." },
                        { word: 'Cheap', meaning: 'Murah', example: "That's very cheap!" },
                        { word: 'Discount', meaning: 'Diskon', example: 'Is there a discount?' },
                    ],
                    tips: ['Selalu gunakan "Excuse me" sebelum bertanya'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to ask price?', questionId: 'Bagaimana bertanya harga?', options: ['What is this?', 'How much is this?', 'Where is this?', 'When is this?'], answer: 'How much is this?', order: 1 },
                ],
            },
            {
                title: 'Buying Things',
                titleId: 'Membeli Barang',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: "I'll take this", meaning: 'Saya ambil ini', example: "I'll take this one, please." },
                        { word: 'By card', meaning: 'Dengan kartu', example: 'Can I pay by card?' },
                        { word: 'Cash', meaning: 'Tunai', example: "I'll pay with cash." },
                        { word: 'Receipt', meaning: 'Struk', example: 'Can I have a receipt, please?' },
                        { word: 'Bag', meaning: 'Tas/kantong', example: 'Do you need a bag?' },
                    ],
                    tips: ['Di banyak negara, kantong plastik berbayar'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'Can I pay by ___?', questionId: 'Can I pay by ___?', answer: 'card', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Directions
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Directions & Transportation',
        titleId: 'Arah dan Transportasi',
        description: 'Getting around in English',
        descriptionId: 'Bepergian dengan bahasa Inggris',
        order: 8,
        canDo: {
            listening: 'Dapat memahami petunjuk arah',
            reading: 'Dapat membaca papan stasiun',
            speaking: 'Dapat bertanya arah',
            writing: 'Dapat menulis alamat'
        },
        lessons: [
            {
                title: 'Asking for Directions',
                titleId: 'Bertanya Arah',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'Where is...?', meaning: 'Di mana...?', example: 'Excuse me, where is the station?' },
                        { word: 'Here / There', meaning: 'Di sini / Di sana', example: 'The bathroom is over there.' },
                        { word: 'Right / Left / Straight', meaning: 'Kanan / Kiri / Lurus', example: 'Go straight, then turn left.' },
                        { word: 'Next to', meaning: 'Di sebelah', example: 'It is next to the bank.' },
                        { word: 'Near / Far', meaning: 'Dekat / Jauh', example: 'Is it near here?' },
                    ],
                    tips: ['Gunakan "Excuse me" sebelum bertanya arah'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to ask location?', questionId: 'Bagaimana bertanya lokasi?', options: ['What is the station?', 'Where is the station?', 'When is the station?', 'Who is the station?'], answer: 'Where is the station?', order: 1 },
                ],
            },
            {
                title: 'Transportation',
                titleId: 'Transportasi',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'Bus', meaning: 'Bus', example: 'Where is the bus stop?' },
                        { word: 'Train', meaning: 'Kereta', example: 'I take the train to work.' },
                        { word: 'Taxi', meaning: 'Taksi', example: 'Can you call a taxi, please?' },
                        { word: 'Ticket', meaning: 'Tiket', example: 'One ticket, please.' },
                        { word: 'Transfer / Change', meaning: 'Pindah', example: 'Change at Central Station.' },
                    ],
                    tips: ['Di Australia: tram, di UK: tube/underground, di USA: subway'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is a "ticket"?', questionId: 'Apa itu "ticket"?', options: ['Tiket', 'Bus', 'Kereta', 'Peta'], answer: 'Tiket', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Food
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Food & Dining',
        titleId: 'Makanan dan Restoran',
        description: 'Ordering food in English',
        descriptionId: 'Memesan makanan dalam bahasa Inggris',
        order: 9,
        canDo: {
            listening: 'Dapat memahami menu dan rekomendasi',
            reading: 'Dapat membaca menu',
            speaking: 'Dapat memesan makanan',
            writing: 'Dapat menulis pesanan'
        },
        lessons: [
            {
                title: 'Food Vocabulary',
                titleId: 'Kosakata Makanan',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'Rice', meaning: 'Nasi', example: 'I would like some rice.' },
                        { word: 'Bread', meaning: 'Roti', example: 'Bread and butter, please.' },
                        { word: 'Chicken', meaning: 'Ayam', example: 'Grilled chicken.' },
                        { word: 'Beef', meaning: 'Daging sapi', example: 'Beef steak.' },
                        { word: 'Fish', meaning: 'Ikan', example: 'Fried fish.' },
                        { word: 'Vegetables', meaning: 'Sayuran', example: 'More vegetables, please.' },
                    ],
                    tips: ['Halal food biasanya ada di kota-kota besar'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is "rice"?', questionId: 'Apa "rice"?', options: ['Roti', 'Nasi', 'Mie', 'Kentang'], answer: 'Nasi', order: 1 },
                ],
            },
            {
                title: 'Ordering Food',
                titleId: 'Memesan Makanan',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I would like...', meaning: 'Saya mau...', example: 'I would like the chicken, please.' },
                        { word: 'Can I have...?', meaning: 'Boleh saya...?', example: 'Can I have the menu, please?' },
                        { word: 'Water', meaning: 'Air', example: 'A glass of water, please.' },
                        { word: 'The bill, please', meaning: 'Minta bill', example: 'Can I have the bill, please?' },
                        { word: 'Delicious!', meaning: 'Enak!', example: 'The food was delicious!' },
                    ],
                    tips: ['"I would like" lebih sopan dari "I want"'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I would ___ the chicken.', questionId: 'I would ___ the chicken.', answer: 'like', order: 1 },
                ],
            },
        ],
    },

    // Course 10: Health
    {
        language: 'en',
        level: 'A1',
        localStandard: null,
        title: 'Health & Emergency',
        titleId: 'Kesehatan dan Darurat',
        description: 'Health issues and emergencies',
        descriptionId: 'Masalah kesehatan dan darurat',
        order: 10,
        canDo: {
            listening: 'Dapat memahami pertanyaan dokter',
            reading: 'Dapat membaca label obat',
            speaking: 'Dapat menjelaskan gejala',
            writing: 'Dapat mengisi formulir medis'
        },
        lessons: [
            {
                title: 'Body Parts',
                titleId: 'Bagian Tubuh',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'Head', meaning: 'Kepala', example: 'I have a headache.' },
                        { word: 'Stomach', meaning: 'Perut', example: 'My stomach hurts.' },
                        { word: 'Hand / Foot', meaning: 'Tangan / Kaki', example: 'I hurt my foot.' },
                        { word: 'Eye / Ear / Nose', meaning: 'Mata / Telinga / Hidung', example: '' },
                        { word: 'Back', meaning: 'Punggung', example: 'My back hurts.' },
                    ],
                    tips: ['Gunakan "I have a [body part]-ache" untuk nyeri: headache, stomachache'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I have a head___. (Sakit kepala)', questionId: 'I have a head___.', answer: 'ache', order: 1 },
                ],
            },
            {
                title: 'At the Doctor',
                titleId: 'Di Dokter',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'I feel sick', meaning: 'Saya merasa sakit', example: 'I feel sick. I need a doctor.' },
                        { word: 'I have a fever', meaning: 'Saya demam', example: '' },
                        { word: 'Cold / Flu', meaning: 'Flu', example: 'I have a cold.' },
                        { word: 'Hospital', meaning: 'Rumah sakit', example: 'Where is the hospital?' },
                        { word: 'Medicine', meaning: 'Obat', example: 'I need some medicine.' },
                        { word: 'Pharmacy', meaning: 'Apotek', example: 'Where is the pharmacy?' },
                    ],
                    tips: ['Di negara barat, banyak obat butuh resep dokter'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is "hospital"?', questionId: 'Apa "hospital"?', options: ['Apotek', 'Rumah sakit', 'Klinik', 'Dokter'], answer: 'Rumah sakit', order: 1 },
                ],
            },
            {
                title: 'Emergency Situations',
                titleId: 'Situasi Darurat',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'Help!', meaning: 'Tolong!', example: 'Help! Call an ambulance!' },
                        { word: 'Police', meaning: 'Polisi', example: 'Call the police!' },
                        { word: 'Ambulance', meaning: 'Ambulans', example: 'We need an ambulance!' },
                        { word: 'Fire!', meaning: 'Kebakaran!', example: 'Fire! Get out!' },
                        { word: 'Emergency', meaning: 'Darurat', example: 'This is an emergency!' },
                    ],
                    tips: ['Nomor darurat: 000 (Australia), 911 (USA), 999 (UK)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Emergency number in Australia?', questionId: 'Nomor darurat Australia?', options: ['110', '119', '911', '000'], answer: '000', order: 1 },
                ],
            },
        ],
    },
];

export default englishA1Courses6to10;
