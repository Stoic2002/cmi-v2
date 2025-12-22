// Korean A1 Courses 1-5 - Hangul, Greetings, Numbers, Time, Daily Expressions
// CEFR Level A1 (≈TOPIK 1)

export const koreanA1Courses1to5 = [
    // Course 1: Hangul Master
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '한글 마스터',
        titleId: 'Menguasai Hangul',
        description: 'Master the Korean alphabet',
        descriptionId: 'Kuasai alfabet Korea (Hangul)',
        order: 1,
        canDo: {
            listening: 'Dapat mengenali bunyi Hangul',
            reading: 'Dapat membaca kata sederhana dalam Hangul',
            speaking: 'Dapat mengucapkan semua bunyi Korea',
            writing: 'Dapat menulis huruf Hangul dasar'
        },
        lessons: [
            {
                title: '기본 모음 (Basic Vowels)',
                titleId: 'Vokal Dasar',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'ㅏ', romanization: 'a', meaning: 'vokal a', example: '아 (a)' },
                        { word: 'ㅓ', romanization: 'eo', meaning: 'vokal eo (antara e dan o)', example: '어 (eo)' },
                        { word: 'ㅗ', romanization: 'o', meaning: 'vokal o', example: '오 (o)' },
                        { word: 'ㅜ', romanization: 'u', meaning: 'vokal u', example: '우 (u)' },
                        { word: 'ㅡ', romanization: 'eu', meaning: 'vokal eu', example: '으 (eu)' },
                        { word: 'ㅣ', romanization: 'i', meaning: 'vokal i', example: '이 (i)' },
                    ],
                    tips: ['Hangul diciptakan Raja Sejong tahun 1443', 'ㅓ (eo) tidak ada di Indonesia - latih terus!'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How do you read ㅏ?', questionId: 'Bagaimana membaca ㅏ?', options: ['a', 'o', 'u', 'i'], answer: 'a', order: 1 },
                    { type: 'multiple_choice', question: 'Which vowel is "eo"?', questionId: 'Vokal mana yang "eo"?', options: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ'], answer: 'ㅓ', order: 2 },
                ],
            },
            {
                title: '복합 모음 (Compound Vowels)',
                titleId: 'Vokal Gabungan',
                order: 2, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'ㅐ', romanization: 'ae', meaning: 'ae (seperti e)', example: '개 (gae) - anjing' },
                        { word: 'ㅔ', romanization: 'e', meaning: 'e', example: '게 (ge) - kepiting' },
                        { word: 'ㅘ', romanization: 'wa', meaning: 'wa', example: '과 (gwa) - dan' },
                        { word: 'ㅝ', romanization: 'wo', meaning: 'wo', example: '원 (won) - won' },
                        { word: 'ㅢ', romanization: 'ui', meaning: 'ui', example: '의 (ui) - partikel' },
                    ],
                    tips: ['ㅐ dan ㅔ sekarang diucapkan hampir sama di Korea modern'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 원?', questionId: 'Apa 원?', options: ['Dolar', 'Won', 'Yen', 'Rupiah'], answer: 'Won', order: 1 },
                ],
            },
            {
                title: '기본 자음 (Basic Consonants)',
                titleId: 'Konsonan Dasar',
                order: 3, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'ㄱ', romanization: 'g/k', meaning: 'g atau k', example: '가 (ga)' },
                        { word: 'ㄴ', romanization: 'n', meaning: 'n', example: '나 (na) - saya' },
                        { word: 'ㄷ', romanization: 'd/t', meaning: 'd atau t', example: '다 (da)' },
                        { word: 'ㄹ', romanization: 'r/l', meaning: 'r atau l', example: '라 (ra)' },
                        { word: 'ㅁ', romanization: 'm', meaning: 'm', example: '마 (ma)' },
                        { word: 'ㅂ', romanization: 'b/p', meaning: 'b atau p', example: '바 (ba)' },
                        { word: 'ㅅ', romanization: 's', meaning: 's', example: '사 (sa)' },
                        { word: 'ㅇ', romanization: '-/ng', meaning: 'silent atau ng', example: '아 (a)' },
                        { word: 'ㅈ', romanization: 'j', meaning: 'j', example: '자 (ja)' },
                    ],
                    tips: ['ㅇ di awal = silent, di akhir = ng'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What sound is ㄴ?', questionId: 'Bunyi ㄴ?', options: ['m', 'n', 'g', 's'], answer: 'n', order: 1 },
                ],
            },
            {
                title: '쌍자음과 격자음',
                titleId: 'Konsonan Ganda dan Tegas',
                order: 4, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'ㄲ', romanization: 'kk', meaning: 'k tegas', example: '까 (kka)' },
                        { word: 'ㄸ', romanization: 'tt', meaning: 't tegas', example: '따 (tta)' },
                        { word: 'ㅃ', romanization: 'pp', meaning: 'p tegas', example: '빠 (ppa)' },
                        { word: 'ㅆ', romanization: 'ss', meaning: 's tegas', example: '싸 (ssa)' },
                        { word: 'ㅉ', romanization: 'jj', meaning: 'j tegas', example: '짜 (jja)' },
                    ],
                    tips: ['Konsonan ganda diucapkan dengan lebih tegas/kuat'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How is ㄲ pronounced?', questionId: 'Bagaimana ㄲ diucapkan?', options: ['g', 'k', 'kk', 'gg'], answer: 'kk', order: 1 },
                ],
            },
            {
                title: '받침 (Batchim)',
                titleId: 'Konsonan Akhir',
                order: 5, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '밥', romanization: 'bap', meaning: 'nasi', example: '밥을 먹어요' },
                        { word: '집', romanization: 'jip', meaning: 'rumah', example: '집에 가요' },
                        { word: '한국', romanization: 'hanguk', meaning: 'Korea', example: '한국 사람이에요' },
                    ],
                    tips: ['Batchim = konsonan di bagian bawah blok suku kata'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 밥?', questionId: 'Apa 밥?', options: ['Air', 'Nasi', 'Roti', 'Mie'], answer: 'Nasi', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Greetings
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '인사와 자기소개',
        titleId: 'Salam dan Perkenalan',
        description: 'Korean greetings and self-introduction',
        descriptionId: 'Salam Korea dan perkenalan diri',
        order: 2,
        canDo: {
            listening: 'Dapat memahami salam dan perkenalan',
            reading: 'Dapat membaca teks perkenalan',
            speaking: 'Dapat menyapa dan memperkenalkan diri',
            writing: 'Dapat menulis perkenalan sederhana'
        },
        lessons: [
            {
                title: '기본 인사',
                titleId: 'Salam Dasar',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '안녕하세요', romanization: 'annyeonghaseyo', meaning: 'Halo (formal)', example: '안녕하세요, 사장님!' },
                        { word: '감사합니다', romanization: 'gamsahamnida', meaning: 'Terima kasih (formal)', example: '도와주셔서 감사합니다' },
                        { word: '죄송합니다', romanization: 'joesonghamnida', meaning: 'Maaf (formal)', example: '늦어서 죄송합니다' },
                        { word: '안녕히 가세요', romanization: 'annyeonghi gaseyo', meaning: 'Selamat jalan', example: '' },
                        { word: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', meaning: 'Selamat tinggal', example: '' },
                    ],
                    tips: ['가세요 = untuk yang pergi, 계세요 = untuk yang tinggal'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 안녕하세요?', questionId: 'Apa 안녕하세요?', options: ['Terima kasih', 'Maaf', 'Halo', 'Selamat tinggal'], answer: 'Halo', order: 1 },
                ],
            },
            {
                title: '직장 인사',
                titleId: 'Salam di Tempat Kerja',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '수고하셨습니다', romanization: 'sugohasyeosseumnida', meaning: 'Terima kasih atas kerja kerasnya', example: '오늘도 수고하셨습니다!' },
                        { word: '잘 부탁드립니다', romanization: 'jal butakdeurimnida', meaning: 'Mohon bantuannya', example: '신입입니다. 잘 부탁드립니다' },
                        { word: '먼저 들어가겠습니다', romanization: 'meonjeo deureogagesseumnida', meaning: 'Saya duluan', example: '' },
                    ],
                    tips: ['수고하셨습니다 adalah frasa penting di kantor Korea'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Leaving work first?', questionId: 'Saat pulang duluan?', options: ['안녕히 가세요', '먼저 들어가겠습니다', '감사합니다', '안녕하세요'], answer: '먼저 들어가겠습니다', order: 1 },
                ],
            },
            {
                title: '자기소개',
                titleId: 'Perkenalan Diri',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '저는 ~ 입니다', romanization: 'jeoneun ~ imnida', meaning: 'Saya adalah ~', example: '저는 아마드입니다' },
                        { word: '인도네시아에서 왔습니다', romanization: 'indonesiaeseo wasseumnida', meaning: 'Datang dari Indonesia', example: '' },
                        { word: '만나서 반갑습니다', romanization: 'mannaseo bangapseubnida', meaning: 'Senang bertemu', example: '' },
                    ],
                    grammar: [{ pattern: '저는 [nama]입니다. [negara]에서 왔습니다.', explanation: 'Pola dasar perkenalan', examples: ['저는 아마드입니다. 인도네시아에서 왔습니다.'] }],
                    tips: ['Akhiri dengan 잘 부탁드립니다'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '저는 ___입니다. (Saya adalah Ahmad)', questionId: '저는 ___입니다.', answer: '아마드', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Numbers
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '숫자',
        titleId: 'Angka',
        description: 'Korean number systems',
        descriptionId: 'Sistem angka Korea',
        order: 3,
        canDo: {
            listening: 'Dapat memahami angka dalam percakapan',
            reading: 'Dapat membaca harga dan angka',
            speaking: 'Dapat menyebutkan angka',
            writing: 'Dapat menulis angka'
        },
        lessons: [
            {
                title: '순 한국어 숫자 (Native)',
                titleId: 'Angka Asli Korea',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '하나', romanization: 'hana', meaning: '1', example: '하나 주세요' },
                        { word: '둘', romanization: 'dul', meaning: '2', example: '두 개' },
                        { word: '셋', romanization: 'set', meaning: '3', example: '세 명' },
                        { word: '넷', romanization: 'net', meaning: '4', example: '네 시' },
                        { word: '다섯', romanization: 'daseot', meaning: '5', example: '' },
                        { word: '여섯', romanization: 'yeoseot', meaning: '6', example: '' },
                        { word: '일곱', romanization: 'ilgop', meaning: '7', example: '' },
                        { word: '여덟', romanization: 'yeodeol', meaning: '8', example: '' },
                        { word: '아홉', romanization: 'ahop', meaning: '9', example: '' },
                        { word: '열', romanization: 'yeol', meaning: '10', example: '' },
                    ],
                    tips: ['Angka asli Korea digunakan untuk jam dan menghitung benda'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 다섯?', questionId: 'Apa 다섯?', options: ['3', '4', '5', '6'], answer: '5', order: 1 },
                ],
            },
            {
                title: '한자어 숫자 (Sino-Korean)',
                titleId: 'Angka Sino-Korea',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '일', romanization: 'il', meaning: '1', example: '일 분' },
                        { word: '이', romanization: 'i', meaning: '2', example: '이 월' },
                        { word: '삼', romanization: 'sam', meaning: '3', example: '' },
                        { word: '사', romanization: 'sa', meaning: '4', example: '' },
                        { word: '오', romanization: 'o', meaning: '5', example: '' },
                        { word: '육', romanization: 'yuk', meaning: '6', example: '' },
                        { word: '칠', romanization: 'chil', meaning: '7', example: '' },
                        { word: '팔', romanization: 'pal', meaning: '8', example: '' },
                        { word: '구', romanization: 'gu', meaning: '9', example: '' },
                        { word: '십', romanization: 'sip', meaning: '10', example: '' },
                    ],
                    tips: ['Sino-Korean digunakan untuk tanggal, menit, uang, nomor telepon'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 칠?', questionId: 'Apa 칠?', options: ['5', '6', '7', '8'], answer: '7', order: 1 },
                ],
            },
            {
                title: '큰 숫자와 가격',
                titleId: 'Angka Besar dan Harga',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '백', romanization: 'baek', meaning: '100', example: '백 원' },
                        { word: '천', romanization: 'cheon', meaning: '1000', example: '천 원' },
                        { word: '만', romanization: 'man', meaning: '10000', example: '만 원' },
                        { word: '원', romanization: 'won', meaning: 'won (mata uang)', example: '오천 원입니다' },
                    ],
                    tips: ['1 USD ≈ 1300 Won (kira-kira)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 천?', questionId: 'Apa 천?', options: ['100', '1000', '10000', '100000'], answer: '1000', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Time
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '시간과 날짜',
        titleId: 'Waktu dan Tanggal',
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
                title: '시간',
                titleId: 'Jam',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '~시', romanization: '~si', meaning: 'jam ~', example: '세 시 (jam 3)' },
                        { word: '~분', romanization: '~bun', meaning: 'menit', example: '오 분 (5 menit)' },
                        { word: '반', romanization: 'ban', meaning: 'setengah', example: '세 시 반 (3:30)' },
                        { word: '오전', romanization: 'ojeon', meaning: 'AM', example: '오전 아홉 시' },
                        { word: '오후', romanization: 'ohu', meaning: 'PM', example: '오후 세 시' },
                    ],
                    tips: ['Jam pakai angka asli Korea, menit pakai Sino-Korean'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 세 시 반?', questionId: 'Apa 세 시 반?', options: ['2:30', '3:00', '3:30', '4:30'], answer: '3:30', order: 1 },
                ],
            },
            {
                title: '요일',
                titleId: 'Hari dalam Seminggu',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '월요일', romanization: 'woryoil', meaning: 'Senin', example: '' },
                        { word: '화요일', romanization: 'hwayoil', meaning: 'Selasa', example: '' },
                        { word: '수요일', romanization: 'suyoil', meaning: 'Rabu', example: '' },
                        { word: '목요일', romanization: 'mogyoil', meaning: 'Kamis', example: '' },
                        { word: '금요일', romanization: 'geumyoil', meaning: 'Jumat', example: '' },
                        { word: '토요일', romanization: 'toyoil', meaning: 'Sabtu', example: '' },
                        { word: '일요일', romanization: 'iryoil', meaning: 'Minggu', example: '' },
                    ],
                    tips: ['Hari Korea mirip dengan Jepang - berdasarkan elemen'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 금요일?', questionId: 'Apa 금요일?', options: ['Senin', 'Rabu', 'Jumat', 'Minggu'], answer: 'Jumat', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Daily Expressions
    {
        language: 'ko',
        level: 'A1',
        localStandard: 'TOPIK 1',
        title: '매일 표현',
        titleId: 'Ungkapan Sehari-hari',
        description: 'Common daily expressions',
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
                title: '기본 표현',
                titleId: 'Ungkapan Dasar',
                order: 1, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: '네 / 아니요', romanization: 'ne / aniyo', meaning: 'Ya / Tidak', example: '네, 맞아요' },
                        { word: '알겠습니다', romanization: 'algetsseumnida', meaning: 'Saya mengerti', example: '네, 알겠습니다' },
                        { word: '모르겠습니다', romanization: 'moreugetsseumnida', meaning: 'Saya tidak tahu', example: '' },
                        { word: '괜찮아요', romanization: 'gwaenchanayo', meaning: 'Tidak apa-apa', example: '괜찮아요, 걱정 마세요' },
                    ],
                    tips: ['네 bisa berarti "ya" atau "saya dengar"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say "I understand"?', questionId: 'Bagaimana bilang "Saya mengerti"?', options: ['모르겠습니다', '알겠습니다', '괜찮아요', '아니요'], answer: '알겠습니다', order: 1 },
                ],
            },
            {
                title: '요청하기',
                titleId: 'Meminta Sesuatu',
                order: 2, xpReward: 20,
                content: {
                    vocabulary: [
                        { word: '~주세요', romanization: '~juseyo', meaning: 'Tolong berikan ~', example: '물 주세요' },
                        { word: '잠깐만요', romanization: 'jamkkanmanyo', meaning: 'Sebentar', example: '잠깐만요!' },
                        { word: '다시 한번', romanization: 'dasi hanbeon', meaning: 'Sekali lagi', example: '다시 한번 말씀해 주세요' },
                    ],
                    tips: ['주세요 sangat berguna untuk meminta apapun'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '물 ___. (Tolong air)', questionId: '물 ___.', answer: '주세요', order: 1 },
                ],
            },
        ],
    },
];

export default koreanA1Courses1to5;
