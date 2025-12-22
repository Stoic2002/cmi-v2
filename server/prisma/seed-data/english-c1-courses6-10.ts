// English C1 Courses 6-10 - Translation, Literature Advanced, Global Communication, Complex Grammar, IELTS/TOEFL Expert
// CEFR Level C1

export const englishC1Courses6to10 = [
    // Course 6: Translation Skills
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Translation Skills',
        titleId: 'Keterampilan Terjemahan',
        description: 'Master Indonesian-English translation',
        descriptionId: 'Kuasai terjemahan Indonesia-Inggris',
        order: 6,
        canDo: {
            listening: 'Dapat menerjemahkan percakapan',
            reading: 'Dapat menerjemahkan teks kompleks',
            speaking: 'Dapat melakukan interpretasi',
            writing: 'Dapat menerjemahkan dokumen'
        },
        lessons: [
            {
                title: 'Translation Techniques',
                titleId: 'Teknik Terjemahan',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'localization', meaning: 'lokalisasi', example: 'Localization adapts content for local audience.' },
                        { word: 'transcreation', meaning: 'transkreasi', example: '' },
                    ],
                    tips: ['Transcreation = translation + recreation for marketing'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___ adapts content for local audience.', questionId: '___ adapts content for local audience.', answer: 'Localization', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Literature Advanced
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Literature Advanced',
        titleId: 'Sastra Lanjutan',
        description: 'Advanced literary analysis',
        descriptionId: 'Analisis sastra lanjutan',
        order: 7,
        canDo: {
            listening: 'Dapat memahami diskusi sastra kompleks',
            reading: 'Dapat menganalisis karya sastra klasik',
            speaking: 'Dapat mendiskusikan teori sastra',
            writing: 'Dapat menulis kritik sastra'
        },
        lessons: [
            {
                title: 'Literary Criticism',
                titleId: 'Kritik Sastra',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: 'postmodernism', meaning: 'postmodernisme', example: '' },
                        { word: 'narrative arc', meaning: 'alur narasi', example: '' },
                        { word: 'unreliable narrator', meaning: 'narator tidak dapat dipercaya', example: '' },
                    ],
                    tips: ['Berbagai lensa kritik: feminist, postcolonial, psychoanalytic'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'An ___ narrator cannot be trusted.', questionId: 'An ___ narrator cannot be trusted.', answer: 'unreliable', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Global Communication
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Global Communication',
        titleId: 'Komunikasi Global',
        description: 'Communicate effectively across cultures',
        descriptionId: 'Berkomunikasi efektif lintas budaya',
        order: 8,
        canDo: {
            listening: 'Dapat memahami berbagai aksen dan dialek',
            reading: 'Dapat membaca perspektif global',
            speaking: 'Dapat berkomunikasi dengan audiens internasional',
            writing: 'Dapat menulis untuk audiens global'
        },
        lessons: [
            {
                title: 'Global English Varieties',
                titleId: 'Variasi Bahasa Inggris Global',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: 'lingua franca', meaning: 'bahasa penghubung', example: 'English is the global lingua franca.' },
                        { word: 'World Englishes', meaning: 'variasi Inggris dunia', example: '' },
                    ],
                    tips: ['Pahami: British, American, Australian, Singapore, Indian English'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'English is the global ___ franca.', questionId: 'English is the global ___ franca.', answer: 'lingua', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Complex Grammar Mastery
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Complex Grammar Mastery',
        titleId: 'Penguasaan Grammar Kompleks',
        description: 'Master nuanced grammar structures',
        descriptionId: 'Kuasai struktur grammar yang bernuansa',
        order: 9,
        canDo: {
            listening: 'Dapat memahami nuansa grammar',
            reading: 'Dapat membaca teks dengan grammar kompleks',
            speaking: 'Dapat berbicara dengan presisi grammar',
            writing: 'Dapat menulis dengan grammar yang sophisticated'
        },
        lessons: [
            {
                title: 'Subjunctive Mood',
                titleId: 'Modus Subjungtif',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'I recommend that he be...', meaning: 'Saya merekomendasikan agar dia...', example: '' },
                        { word: 'If I were you...', meaning: 'Jika saya jadi Anda...', example: '' },
                        { word: 'It is essential that she attend...', meaning: 'Penting bahwa dia hadir...', example: '' },
                    ],
                    tips: ['Subjunctive: base form setelah recommend, suggest, insist, etc.'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'I recommend that he ___ (be) there.', questionId: 'I recommend that he ___ there.', answer: 'be', order: 1 },
                ],
            },
        ],
    },

    // Course 10: IELTS/TOEFL Expert
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'IELTS/TOEFL Expert',
        titleId: 'Ahli IELTS/TOEFL',
        description: 'Achieve top scores in proficiency tests',
        descriptionId: 'Raih skor tertinggi di tes kemampuan',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab semua tipe soal',
            reading: 'Dapat menjawab dengan akurasi tinggi',
            speaking: 'Dapat berbicara dengan lancar dan alami',
            writing: 'Dapat menulis esai skor tinggi'
        },
        lessons: [
            {
                title: 'Band 7+ Writing',
                titleId: 'Writing Skor 7+',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'cohesive devices', meaning: 'perangkat kohesi', example: '' },
                        { word: 'lexical resource', meaning: 'sumber leksikal', example: '' },
                        { word: 'task response', meaning: 'respons terhadap tugas', example: '' },
                    ],
                    tips: ['Kriteria: Task Response, Coherence, Lexical Resource, Grammar'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'IELTS writing criteria count?', questionId: 'Jumlah kriteria IELTS writing?', options: ['2', '3', '4', '5'], answer: '4', order: 1 },
                ],
            },
            {
                title: 'TOEFL iBT 100+ Strategy',
                titleId: 'Strategi TOEFL iBT 100+',
                order: 2, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'integrated task', meaning: 'tugas terintegrasi', example: '' },
                        { word: 'note-taking strategy', meaning: 'strategi pencatatan', example: '' },
                    ],
                    tips: ['Integrated: Read + Listen → Write/Speak'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'TOEFL iBT max score is ___.', questionId: 'TOEFL iBT max score is ___.', answer: '120', order: 1 },
                ],
            },
        ],
    },
];

export default englishC1Courses6to10;
