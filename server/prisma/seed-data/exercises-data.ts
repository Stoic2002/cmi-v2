// Interactive Exercises Seed Data

export const exercisesData = [
    // ============================================
    // JAPANESE EXERCISES
    // ============================================
    // === PARTICLE ===
    {
        language: 'ja',
        type: 'particle',
        level: 'A1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionId: 'Pilih partikel yang tepat:',
        hint: '私___学生です。(Saya adalah pelajar)',
        data: {
            sentence: '私___学生です',
            options: ['は', 'が', 'を', 'に'],
        },
        answer: 'は',
        explanation: 'は (wa) adalah partikel topik. "私は" = "Saya adalah..." (sebagai topik)',
        order: 1,
    },
    {
        language: 'ja',
        type: 'particle',
        level: 'A1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionId: 'Pilih partikel yang tepat:',
        hint: '水___飲みます。(Minum air)',
        data: {
            sentence: '水___飲みます',
            options: ['は', 'が', 'を', 'に'],
        },
        answer: 'を',
        explanation: 'を (wo) menandai objek langsung dari kata kerja. "水を飲む" = "Minum air"',
        order: 2,
    },
    {
        language: 'ja',
        type: 'particle',
        level: 'A1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionId: 'Pilih partikel yang tepat:',
        hint: '駅___行きます。(Pergi ke stasiun)',
        data: {
            sentence: '駅___行きます',
            options: ['は', 'が', 'を', 'に'],
        },
        answer: 'に',
        explanation: 'に (ni) menunjukkan tujuan/arah. "駅に行く" = "Pergi ke stasiun"',
        order: 3,
    },
    // === CONJUGATION ===
    {
        language: 'ja',
        type: 'conjugation',
        level: 'A1',
        category: 'conjugation',
        question: 'Ubah ke bentuk ます (masu/formal):',
        questionId: 'Ubah ke bentuk ます (masu/formal):',
        hint: '食べる (taberu) = makan',
        data: {
            word: '食べる',
            romanization: 'taberu',
        },
        answer: '食べます',
        explanation: 'Untuk ichidan verb, hilangkan る dan tambahkan ます → 食べます (tabemasu)',
        order: 4,
    },
    {
        language: 'ja',
        type: 'conjugation',
        level: 'A1',
        category: 'conjugation',
        question: 'Ubah ke bentuk negatif:',
        questionId: 'Ubah ke bentuk negatif:',
        hint: '分かります (wakarimasu) = mengerti',
        data: {
            word: '分かります',
            romanization: 'wakarimasu',
        },
        answer: '分かりません',
        explanation: 'Untuk bentuk negatif formal, ganti ます dengan ません → 分かりません (wakarimasen)',
        order: 5,
    },
    // === FILL BLANK ===
    {
        language: 'ja',
        type: 'fill_blank',
        level: 'A1',
        category: 'vocabulary',
        question: 'Lengkapi kalimat:',
        questionId: 'Lengkapi kalimat:',
        hint: 'Selamat pagi (formal)',
        data: {
            sentence: 'おはよう___',
            options: ['ございます', 'さん', 'です', 'ます'],
        },
        answer: 'ございます',
        explanation: 'おはようございます adalah ucapan selamat pagi yang formal',
        order: 6,
    },
    // === MATCHING ===
    {
        language: 'ja',
        type: 'matching',
        level: 'A1',
        category: 'vocabulary',
        question: 'Cocokkan kata dengan artinya:',
        questionId: 'Cocokkan kata dengan artinya:',
        hint: 'Kosakata dasar tempat kerja',
        data: {
            pairs: [
                { word: '仕事', meaning: 'Pekerjaan' },
                { word: '会社', meaning: 'Perusahaan' },
                { word: '工場', meaning: 'Pabrik' },
                { word: '休憩', meaning: 'Istirahat' },
            ],
        },
        answer: {},
        order: 7,
    },
    // === WORD ORDER ===
    {
        language: 'ja',
        type: 'word_order',
        level: 'A1',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionId: 'Susun kata menjadi kalimat yang benar:',
        hint: 'Saya minum air',
        data: {
            words: ['私は', '水を', '飲みます', '。'],
        },
        answer: '私は 水を 飲みます 。',
        order: 8,
    },
    // === TRANSLATE ===
    {
        language: 'ja',
        type: 'translate',
        level: 'A1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionId: 'Apa arti dari kalimat ini?',
        hint: 'すみません、もう一度お願いします',
        data: {
            options: [
                'Maaf, tolong ulangi sekali lagi',
                'Terima kasih banyak',
                'Saya tidak mengerti',
                'Hati-hati di jalan'
            ],
        },
        answer: 'Maaf, tolong ulangi sekali lagi',
        explanation: 'すみません = maaf, もう一度 = sekali lagi, お願いします = tolong',
        order: 9,
    },

    // ============================================
    // KOREAN EXERCISES
    // ============================================
    // === PARTICLE ===
    {
        language: 'ko',
        type: 'particle',
        level: 'A1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionId: 'Pilih partikel yang tepat:',
        hint: '저___학생이에요. (Saya adalah pelajar)',
        data: {
            sentence: '저___학생이에요',
            options: ['는', '가', '를', '에'],
        },
        answer: '는',
        explanation: '는/은 adalah partikel topik. Setelah vokal pakai 는, setelah konsonan pakai 은',
        order: 1,
    },
    {
        language: 'ko',
        type: 'particle',
        level: 'A1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionId: 'Pilih partikel yang tepat:',
        hint: '물___마셔요. (Minum air)',
        data: {
            sentence: '물___마셔요',
            options: ['는', '가', '를', '에'],
        },
        answer: '를',
        explanation: '를/을 menandai objek. Setelah vokal pakai 를, setelah konsonan pakai 을',
        order: 2,
    },
    {
        language: 'ko',
        type: 'particle',
        level: 'A1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionId: 'Pilih partikel yang tepat:',
        hint: '회사___가요. (Pergi ke kantor)',
        data: {
            sentence: '회사___가요',
            options: ['는', '가', '를', '에'],
        },
        answer: '에',
        explanation: '에 menunjukkan tujuan/arah. "회사에 가다" = "Pergi ke kantor"',
        order: 3,
    },
    // === CONJUGATION ===
    {
        language: 'ko',
        type: 'conjugation',
        level: 'A1',
        category: 'conjugation',
        question: 'Ubah ke bentuk 요 (formal):',
        questionId: 'Ubah ke bentuk 요 (formal):',
        hint: '먹다 (meokda) = makan',
        data: {
            word: '먹다',
            romanization: 'meokda',
        },
        answer: '먹어요',
        explanation: '먹다 → 먹 + 어요 = 먹어요 (meogeoyo)',
        order: 4,
    },
    {
        language: 'ko',
        type: 'conjugation',
        level: 'A1',
        category: 'conjugation',
        question: 'Ubah ke bentuk negatif:',
        questionId: 'Ubah ke bentuk negatif:',
        hint: '알아요 (arayo) = mengerti',
        data: {
            word: '알아요',
            romanization: 'arayo',
        },
        answer: '몰라요',
        explanation: 'Bentuk negatif dari 알다 adalah 모르다 → 몰라요 (mollayo)',
        order: 5,
    },
    // === FILL BLANK ===
    {
        language: 'ko',
        type: 'fill_blank',
        level: 'A1',
        category: 'vocabulary',
        question: 'Lengkapi kalimat:',
        questionId: 'Lengkapi kalimat:',
        hint: 'Terima kasih (formal)',
        data: {
            sentence: '감사___',
            options: ['합니다', '해요', '하다', '했어요'],
        },
        answer: '합니다',
        explanation: '감사합니다 adalah ucapan terima kasih formal',
        order: 6,
    },
    // === MATCHING ===
    {
        language: 'ko',
        type: 'matching',
        level: 'A1',
        category: 'vocabulary',
        question: 'Cocokkan kata dengan artinya:',
        questionId: 'Cocokkan kata dengan artinya:',
        hint: 'Kosakata dasar tempat kerja',
        data: {
            pairs: [
                { word: '일', meaning: 'Pekerjaan' },
                { word: '회사', meaning: 'Perusahaan' },
                { word: '공장', meaning: 'Pabrik' },
                { word: '휴식', meaning: 'Istirahat' },
            ],
        },
        answer: {},
        order: 7,
    },
    // === WORD ORDER ===
    {
        language: 'ko',
        type: 'word_order',
        level: 'A1',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionId: 'Susun kata menjadi kalimat yang benar:',
        hint: 'Saya minum air',
        data: {
            words: ['저는', '물을', '마셔요', '.'],
        },
        answer: '저는 물을 마셔요 .',
        order: 8,
    },
    // === TRANSLATE ===
    {
        language: 'ko',
        type: 'translate',
        level: 'A1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionId: 'Apa arti dari kalimat ini?',
        hint: '다시 한번 말씀해 주세요',
        data: {
            options: [
                'Tolong ulangi sekali lagi',
                'Terima kasih banyak',
                'Saya tidak mengerti',
                'Hati-hati'
            ],
        },
        answer: 'Tolong ulangi sekali lagi',
        explanation: '다시 = lagi, 한번 = sekali, 말씀하다 = berbicara (honorific), 주세요 = tolong',
        order: 9,
    },

    // ============================================
    // ENGLISH EXERCISES
    // ============================================
    // === FILL BLANK ===
    {
        language: 'en',
        type: 'fill_blank',
        level: 'A1',
        category: 'grammar',
        question: 'Lengkapi kalimat dengan verb to be yang tepat:',
        questionId: 'Lengkapi kalimat dengan verb to be yang tepat:',
        hint: 'I ___ a worker.',
        data: {
            sentence: 'I ___ a worker.',
            options: ['am', 'is', 'are', 'be'],
        },
        answer: 'am',
        explanation: '"I" selalu diikuti "am". I am = Saya adalah',
        order: 1,
    },
    {
        language: 'en',
        type: 'fill_blank',
        level: 'A1',
        category: 'grammar',
        question: 'Lengkapi kalimat dengan verb to be yang tepat:',
        questionId: 'Lengkapi kalimat dengan verb to be yang tepat:',
        hint: 'She ___ my supervisor.',
        data: {
            sentence: 'She ___ my supervisor.',
            options: ['am', 'is', 'are', 'be'],
        },
        answer: 'is',
        explanation: 'He/She/It selalu diikuti "is"',
        order: 2,
    },
    {
        language: 'en',
        type: 'fill_blank',
        level: 'A1',
        category: 'grammar',
        question: 'Lengkapi kalimat dengan verb to be yang tepat:',
        questionId: 'Lengkapi kalimat dengan verb to be yang tepat:',
        hint: 'They ___ from Indonesia.',
        data: {
            sentence: 'They ___ from Indonesia.',
            options: ['am', 'is', 'are', 'be'],
        },
        answer: 'are',
        explanation: 'We/You/They selalu diikuti "are"',
        order: 3,
    },
    // === CONJUGATION ===
    {
        language: 'en',
        type: 'conjugation',
        level: 'A1',
        category: 'conjugation',
        question: 'Ubah ke bentuk present continuous:',
        questionId: 'Ubah ke bentuk present continuous:',
        hint: 'I (work) at the factory now.',
        data: {
            word: 'work',
            context: 'I ___ at the factory now.',
        },
        answer: 'am working',
        explanation: 'Present continuous: be + verb-ing. I am working = Saya sedang bekerja',
        order: 4,
    },
    {
        language: 'en',
        type: 'conjugation',
        level: 'A1',
        category: 'conjugation',
        question: 'Ubah ke bentuk past tense:',
        questionId: 'Ubah ke bentuk past tense:',
        hint: 'I (finish) my shift yesterday.',
        data: {
            word: 'finish',
            context: 'I ___ my shift yesterday.',
        },
        answer: 'finished',
        explanation: 'Regular verb + ed untuk past tense. finish → finished',
        order: 5,
    },
    // === MATCHING ===
    {
        language: 'en',
        type: 'matching',
        level: 'A1',
        category: 'vocabulary',
        question: 'Cocokkan kata dengan artinya:',
        questionId: 'Cocokkan kata dengan artinya:',
        hint: 'Kosakata dasar tempat kerja',
        data: {
            pairs: [
                { word: 'Factory', meaning: 'Pabrik' },
                { word: 'Supervisor', meaning: 'Pengawas' },
                { word: 'Schedule', meaning: 'Jadwal' },
                { word: 'Overtime', meaning: 'Lembur' },
            ],
        },
        answer: {},
        order: 6,
    },
    // === WORD ORDER ===
    {
        language: 'en',
        type: 'word_order',
        level: 'A1',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionId: 'Susun kata menjadi kalimat yang benar:',
        hint: 'Saya bekerja di pabrik',
        data: {
            words: ['I', 'work', 'at', 'the', 'factory', '.'],
        },
        answer: 'I work at the factory .',
        order: 7,
    },
    // === TRANSLATE ===
    {
        language: 'en',
        type: 'translate',
        level: 'A1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionId: 'Apa arti dari kalimat ini?',
        hint: 'Excuse me, could you repeat that please?',
        data: {
            options: [
                'Maaf, bisakah Anda mengulanginya?',
                'Terima kasih banyak',
                'Saya tidak mengerti',
                'Sampai jumpa besok'
            ],
        },
        answer: 'Maaf, bisakah Anda mengulanginya?',
        explanation: 'Excuse me = Maaf, could you = bisakah Anda, repeat = mengulangi',
        order: 8,
    },
    {
        language: 'en',
        type: 'translate',
        level: 'A1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionId: 'Apa arti dari kalimat ini?',
        hint: 'Please wear safety equipment.',
        data: {
            options: [
                'Tolong kenakan peralatan keselamatan',
                'Hati-hati saat bekerja',
                'Jangan lupa istirahat',
                'Saya ingin pulang'
            ],
        },
        answer: 'Tolong kenakan peralatan keselamatan',
        explanation: 'Please = tolong, wear = kenakan, safety equipment = peralatan keselamatan',
        order: 9,
    },
];
