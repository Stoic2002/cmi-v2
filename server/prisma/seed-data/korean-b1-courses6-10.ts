// Korean B1 Courses 6-10 - News, Opinions, Society, Idioms, TOPIK
// CEFR Level B1 (≈TOPIK 3)

export const koreanB1Courses6to10 = [
    // Course 6: News & Media
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '뉴스와 미디어',
        titleId: 'Berita dan Media',
        description: 'Understanding Korean news',
        descriptionId: 'Memahami berita Korea',
        order: 6,
        canDo: {
            listening: 'Dapat memahami berita',
            reading: 'Dapat membaca artikel berita',
            speaking: 'Dapat membahas berita',
            writing: 'Dapat menulis ringkasan berita'
        },
        lessons: [
            {
                title: '뉴스 어휘',
                titleId: 'Kosakata Berita',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '발표하다', romanization: 'balpyohada', meaning: 'mengumumkan', example: '정부가 발표했다' },
                        { word: '조사하다', romanization: 'josahada', meaning: 'menyelidiki', example: '경찰이 조사 중이다' },
                        { word: '영향', romanization: 'yeonghyang', meaning: 'dampak', example: '경제에 영향을 미쳤다' },
                    ],
                    tips: ['Berita Korea sering menggunakan kata Sino-Korean'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 조사하다?', questionId: 'Apa 조사하다?', options: ['Mengumumkan', 'Menyelidiki', 'Mendengar', 'Melihat'], answer: 'Menyelidiki', order: 1 },
                ],
            },
            {
                title: '뉴스 읽기',
                titleId: 'Membaca Berita',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '~에 따르면', romanization: '~e ttareumyeon', meaning: 'menurut', example: '보도에 따르면...' },
                        { word: '~것으로 알려졌다', romanization: '~geoseuro allyeojyeotta', meaning: 'diketahui bahwa', example: '사고가 있었던 것으로 알려졌다' },
                    ],
                    tips: ['Berita sering pakai bentuk pasif'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '보도에 ___르면 (menurut)', questionId: '보도에 ___르면', answer: '따', order: 1 },
                ],
            },
        ],
    },

    // Course 7: Expressing Opinions
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '의견 표현하기',
        titleId: 'Mengekspresikan Pendapat',
        description: 'Express opinions and arguments',
        descriptionId: 'Mengekspresikan pendapat dan argumen',
        order: 7,
        canDo: {
            listening: 'Dapat memahami argumen',
            reading: 'Dapat membaca opini',
            speaking: 'Dapat berdiskusi',
            writing: 'Dapat menulis esai pendapat'
        },
        lessons: [
            {
                title: '의견 말하기',
                titleId: 'Menyampaikan Pendapat',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '~(으)ㄴ/는 것 같다', romanization: '~(eu)n/neun geot gatda', meaning: 'menurut saya', example: '좋은 것 같아요' },
                        { word: '제 생각에는', romanization: 'je saengage-neun', meaning: 'menurut pendapat saya', example: '제 생각에는 좋아요' },
                        { word: '~지 않을까요?', romanization: '~ji anheulkkayo', meaning: 'bukankah...?', example: '문제가 있지 않을까요?' },
                    ],
                    tips: ['~지 않을까요? adalah cara halus menyatakan pendapat'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '제 생각___는 좋아요', questionId: '제 생각___는 좋아요', answer: '에', order: 1 },
                ],
            },
            {
                title: '찬성과 반대',
                titleId: 'Setuju dan Tidak Setuju',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '말씀하신 대로입니다', romanization: 'malsseumhasin daeroimnida', meaning: 'seperti yang Anda katakan', example: '' },
                        { word: '일리가 있어요', romanization: 'illiga isseoyo', meaning: 'ada benarnya', example: '' },
                        { word: '~다고 볼 수 없어요', romanization: '~dago bol su eopseoyo', meaning: 'tidak bisa dibilang', example: '성공이라고 볼 수 없어요' },
                    ],
                    tips: ['Hindari mengatakan "아니요" langsung'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Polite disagreement?', questionId: 'Tidak setuju sopan?', options: ['아니요', '일리가 있어요', '틀렸어요', '싫어요'], answer: '일리가 있어요', order: 1 },
                ],
            },
        ],
    },

    // Course 8: Korean Society
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '한국 사회',
        titleId: 'Masyarakat Korea',
        description: 'Understanding Korean society',
        descriptionId: 'Memahami masyarakat Korea',
        order: 8,
        canDo: {
            listening: 'Dapat memahami tentang masyarakat',
            reading: 'Dapat membaca tentang isu sosial',
            speaking: 'Dapat berbicara tentang budaya',
            writing: 'Dapat menulis tentang masyarakat'
        },
        lessons: [
            {
                title: '사회 문제',
                titleId: 'Isu Sosial',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '취업', romanization: 'chwiup', meaning: 'pekerjaan', example: '취업이 어렵다' },
                        { word: '환경', romanization: 'hwangyeong', meaning: 'lingkungan', example: '환경 문제가 심각하다' },
                        { word: '고령화', romanization: 'goryeonghwa', meaning: 'penuaan', example: '고령화 사회' },
                    ],
                    tips: ['Korea menghadapi isu penuaan populasi dan kompetisi kerja'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 취업?', questionId: 'Apa 취업?', options: ['Pendidikan', 'Pekerjaan', 'Kesehatan', 'Keluarga'], answer: 'Pekerjaan', order: 1 },
                ],
            },
        ],
    },

    // Course 9: Idioms & Proverbs
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: '관용어와 속담',
        titleId: 'Idiom dan Peribahasa',
        description: 'Learn Korean idioms and proverbs',
        descriptionId: 'Pelajari idiom dan peribahasa Korea',
        order: 9,
        canDo: {
            listening: 'Dapat memahami idiom',
            reading: 'Dapat membaca teks dengan idiom',
            speaking: 'Dapat menggunakan idiom',
            writing: 'Dapat menulis dengan idiom'
        },
        lessons: [
            {
                title: '관용어 (Idioms)',
                titleId: 'Idiom',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '손이 크다', romanization: 'soni keuda', meaning: 'dermawan', example: '어머니는 손이 커요' },
                        { word: '발이 넓다', romanization: 'bari neolda', meaning: 'punya banyak koneksi', example: '그는 발이 넓어요' },
                        { word: '눈이 높다', romanization: 'nuni nopda', meaning: 'standar tinggi', example: '눈이 높아서 결혼 못해요' },
                    ],
                    tips: ['Banyak idiom Korea melibatkan bagian tubuh'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '손이 크다 means?', questionId: '손이 크다 artinya?', options: ['Tangan besar', 'Dermawan', 'Malas', 'Cepat'], answer: 'Dermawan', order: 1 },
                ],
            },
            {
                title: '속담 (Proverbs)',
                titleId: 'Peribahasa',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '가는 말이 고와야 오는 말이 곱다', romanization: 'ganeun mari gowaya oneun mari gopda', meaning: 'kata-kata baik menghasilkan kata-kata baik', example: '' },
                        { word: '아는 것이 힘이다', romanization: 'aneun geosi himida', meaning: 'pengetahuan adalah kekuatan', example: '' },
                        { word: '백문이 불여일견', romanization: 'baengmuni buryeoilgyeon', meaning: 'melihat sekali lebih baik dari mendengar 100 kali', example: '' },
                    ],
                    tips: ['Peribahasa sering muncul di TOPIK'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '아는 것이 ___이다', questionId: '아는 것이 ___이다', answer: '힘', order: 1 },
                ],
            },
        ],
    },

    // Course 10: TOPIK Preparation
    {
        language: 'ko',
        level: 'B1',
        localStandard: 'TOPIK 3',
        title: 'TOPIK 준비',
        titleId: 'Persiapan TOPIK',
        description: 'Prepare for TOPIK II exam',
        descriptionId: 'Persiapan ujian TOPIK II',
        order: 10,
        canDo: {
            listening: 'Dapat menjawab soal listening',
            reading: 'Dapat menjawab soal reading',
            speaking: 'Tidak ada speaking di TOPIK',
            writing: 'Dapat menulis esai TOPIK'
        },
        lessons: [
            {
                title: 'TOPIK 문법 정리',
                titleId: 'Ringkasan Grammar TOPIK',
                order: 1, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '~(으)ㄹ 뿐만 아니라', romanization: '~(eu)l ppunman anira', meaning: 'tidak hanya...tapi juga', example: '맛있을 뿐만 아니라 건강에도 좋다' },
                        { word: '~는 한', romanization: '~neun han', meaning: 'selama', example: '노력하는 한 성공할 수 있다' },
                        { word: '~(으)ㄹ 수밖에 없다', romanization: '~(eu)l subakke eopda', meaning: 'tidak punya pilihan selain', example: '갈 수밖에 없어요' },
                    ],
                    tips: ['Fokus pada grammar umum TOPIK 3-4'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '갈 수밖에 ___다', questionId: '갈 수밖에 ___다', answer: '없', order: 1 },
                ],
            },
            {
                title: 'TOPIK 쓰기',
                titleId: 'Menulis TOPIK',
                order: 2, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '서론', romanization: 'seoron', meaning: 'pendahuluan', example: '' },
                        { word: '본론', romanization: 'bonron', meaning: 'isi', example: '' },
                        { word: '결론', romanization: 'gyeollon', meaning: 'kesimpulan', example: '' },
                    ],
                    tips: ['Struktur esai: 서론 (intro) → 본론 (body) → 결론 (conclusion)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Essay structure?', questionId: 'Struktur esai?', options: ['결론-본론-서론', '서론-본론-결론', '본론-서론-결론', '서론-결론-본론'], answer: '서론-본론-결론', order: 1 },
                ],
            },
        ],
    },
];

export default koreanB1Courses6to10;
