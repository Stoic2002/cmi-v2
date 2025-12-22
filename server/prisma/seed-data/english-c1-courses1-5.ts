// English C1 Courses 1-5 - Academic Advanced, Professional Expert, Rhetoric, Research Advanced, Media Expert
// CEFR Level C1

export const englishC1Courses1to5 = [
    // Course 1: Advanced Academic English
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Advanced Academic English',
        titleId: 'Bahasa Inggris Akademik Lanjutan',
        description: 'Master academic English for research',
        descriptionId: 'Kuasai Bahasa Inggris akademik untuk riset',
        order: 1,
        canDo: {
            listening: 'Dapat memahami kuliah dan diskusi akademik',
            reading: 'Dapat membaca jurnal dan paper',
            speaking: 'Dapat mempresentasikan penelitian',
            writing: 'Dapat menulis paper akademik'
        },
        lessons: [
            {
                title: 'Research Paper Writing',
                titleId: 'Menulis Paper Riset',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'Based on previous research...', meaning: 'Berdasarkan penelitian sebelumnya...', example: '' },
                        { word: 'This study hypothesizes that...', meaning: 'Penelitian ini menghipotesiskan bahwa...', example: '' },
                        { word: 'The findings suggest that...', meaning: 'Temuan menunjukkan bahwa...', example: '' },
                    ],
                    tips: ['Struktur: Abstract → Intro → Methods → Results → Discussion → Conclusion'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'The findings ___ that...', questionId: 'The findings ___ that...', answer: 'suggest', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Professional Expert
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Professional Expert',
        titleId: 'Ahli Profesional',
        description: 'Expert-level business English',
        descriptionId: 'Bahasa Inggris bisnis tingkat ahli',
        order: 2,
        canDo: {
            listening: 'Dapat memahami negosiasi kompleks',
            reading: 'Dapat membaca kontrak dan laporan keuangan',
            speaking: 'Dapat memimpin meeting internasional',
            writing: 'Dapat menulis proposal dan kontrak'
        },
        lessons: [
            {
                title: 'High-Stakes Negotiation',
                titleId: 'Negosiasi Tingkat Tinggi',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'We might be able to accommodate...', meaning: 'Kami mungkin bisa mengakomodasi...', example: '' },
                        { word: 'Subject to board approval...', meaning: 'Dengan persetujuan dewan...', example: '' },
                        { word: 'This is contingent upon...', meaning: 'Ini tergantung pada...', example: '' },
                    ],
                    tips: ['Negosiasi tingkat tinggi: selalu beri ruang untuk fleksibilitas'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'This is ___ upon...', questionId: 'This is ___ upon...', answer: 'contingent', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Rhetoric & Persuasion
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Rhetoric & Persuasion',
        titleId: 'Retorika dan Persuasi',
        description: 'Master the art of persuasion',
        descriptionId: 'Kuasai seni persuasi',
        order: 3,
        canDo: {
            listening: 'Dapat menganalisis teknik retorika',
            reading: 'Dapat membaca dan menganalisis pidato',
            speaking: 'Dapat berbicara dengan persuasif',
            writing: 'Dapat menulis dengan teknik retorika'
        },
        lessons: [
            {
                title: 'Rhetorical Devices',
                titleId: 'Perangkat Retorika',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: 'ethos', meaning: 'kredibilitas', example: 'Ethos establishes speaker credibility.' },
                        { word: 'pathos', meaning: 'emosi', example: 'Pathos appeals to emotions.' },
                        { word: 'logos', meaning: 'logika', example: 'Logos uses evidence and facts.' },
                    ],
                    tips: ['Aristotle: ethos + pathos + logos = persuasi efektif'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Emotional appeal is?', questionId: 'Daya tarik emosional adalah?', options: ['Ethos', 'Pathos', 'Logos', 'Kairos'], answer: 'Pathos', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Advanced Research Skills
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Advanced Research Skills',
        titleId: 'Keterampilan Riset Lanjutan',
        description: 'Conduct advanced research in English',
        descriptionId: 'Melakukan riset lanjutan dalam Bahasa Inggris',
        order: 4,
        canDo: {
            listening: 'Dapat memahami presentasi riset kompleks',
            reading: 'Dapat membaca metodologi kompleks',
            speaking: 'Dapat mendiskusikan metodologi',
            writing: 'Dapat menulis proposal riset'
        },
        lessons: [
            {
                title: 'Critical Literature Review',
                titleId: 'Tinjauan Pustaka Kritis',
                order: 1, xpReward: 50,
                content: {
                    vocabulary: [
                        { word: 'synthesize', meaning: 'menyintesis', example: 'Synthesize findings from multiple studies.' },
                        { word: 'juxtapose', meaning: 'membandingkan secara langsung', example: '' },
                        { word: 'elucidate', meaning: 'menjelaskan', example: '' },
                    ],
                    tips: ['Lit review: summarize → synthesize → critique → identify gaps'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '___ findings from multiple studies.', questionId: '___ findings from multiple studies.', answer: 'Synthesize', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Media Expert
    {
        language: 'en',
        level: 'C1',
        localStandard: null,
        title: 'Media Expert',
        titleId: 'Ahli Media',
        description: 'Expert-level media analysis',
        descriptionId: 'Analisis media tingkat ahli',
        order: 5,
        canDo: {
            listening: 'Dapat menganalisis konten media kompleks',
            reading: 'Dapat membaca dan mengkritik media',
            speaking: 'Dapat berdiskusi tentang media dengan kritis',
            writing: 'Dapat menulis analisis media mendalam'
        },
        lessons: [
            {
                title: 'Critical Media Analysis',
                titleId: 'Analisis Media Kritis',
                order: 1, xpReward: 45,
                content: {
                    vocabulary: [
                        { word: 'framing', meaning: 'pembingkaian', example: 'Media framing influences perception.' },
                        { word: 'agenda setting', meaning: 'pengaturan agenda', example: '' },
                        { word: 'gatekeeping', meaning: 'penyaringan berita', example: '' },
                    ],
                    tips: ['Media literacy: who says what, to whom, with what effect?'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Media influence on what we think about?', questionId: 'Pengaruh media pada apa yang kita pikirkan?', options: ['Framing', 'Agenda setting', 'Gatekeeping', 'Priming'], answer: 'Agenda setting', order: 1 },
                ],
            },
        ],
    },
];

export default englishC1Courses1to5;
