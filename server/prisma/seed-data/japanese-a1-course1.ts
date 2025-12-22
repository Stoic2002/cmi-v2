// Japanese A1 Courses - CEFR Level A1 (≈JLPT N5)
// This file contains 10 courses for Japanese A1 level

export const japaneseA1Courses = [
    // Course 1: Hiragana Mastery
    {
        language: 'ja',
        level: 'A1',
        localStandard: 'JLPT N5',
        title: 'ひらがなマスター',
        titleId: 'Menguasai Hiragana',
        description: 'Master all 46 basic Hiragana characters',
        descriptionId: 'Kuasai 46 karakter Hiragana dasar',
        order: 1,
        canDo: {
            listening: 'Dapat mengenali bunyi hiragana saat diucapkan',
            reading: 'Dapat membaca kata-kata sederhana dalam hiragana',
            speaking: 'Dapat mengucapkan semua bunyi hiragana dengan benar',
            writing: 'Dapat menulis 46 karakter hiragana dasar'
        },
        lessons: [
            {
                title: 'あ行 (A-row): あいうえお',
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
                        'Ini adalah 5 vokal dasar Jepang',
                        'Urutan: A-I-U-E-O (bukan A-E-I-O-U)',
                    ],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How do you read あ?', questionId: 'Bagaimana membaca あ?', options: ['a', 'i', 'u', 'e'], answer: 'a', order: 1 },
                    { type: 'multiple_choice', question: 'Which is "u"?', questionId: 'Mana yang "u"?', options: ['あ', 'い', 'う', 'え'], answer: 'う', order: 2 },
                    { type: 'fill_blank', question: 'あ、い、___、え、お', questionId: 'あ、い、___、え、お', answer: 'う', order: 3 },
                ],
            },
            {
                title: 'か行 (Ka-row): かきくけこ',
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
                    tips: ['Baris Ka = vokal + konsonan K'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is か in romaji?', questionId: 'Apa か dalam romaji?', options: ['ka', 'ki', 'ku', 'ga'], answer: 'ka', order: 1 },
                    { type: 'multiple_choice', question: 'How do you write "ki"?', questionId: 'Bagaimana menulis "ki"?', options: ['か', 'き', 'く', 'け'], answer: 'き', order: 2 },
                ],
            },
            {
                title: 'さ行 (Sa-row): さしすせそ',
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
                    tips: ['PENTING: し dibaca "shi" bukan "si"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How do you pronounce し?', questionId: 'Bagaimana mengucapkan し?', options: ['si', 'shi', 'su', 'sha'], answer: 'shi', order: 1 },
                ],
            },
            {
                title: 'た行 (Ta-row): たちつてと',
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
                    tips: ['PENTING: ち = "chi", つ = "tsu"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How do you read つ?', questionId: 'Bagaimana membaca つ?', options: ['tu', 'tsu', 'su', 'chi'], answer: 'tsu', order: 1 },
                ],
            },
            {
                title: 'な行 (Na-row): なにぬねの',
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
                    tips: ['にほん (nihon) = Jepang'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What does にほん mean?', questionId: 'Apa arti にほん?', options: ['Indonesia', 'Jepang', 'Korea', 'China'], answer: 'Jepang', order: 1 },
                ],
            },
            {
                title: 'は行 (Ha-row): はひふへほ',
                titleId: 'Baris Ha: はひふへほ',
                order: 6,
                xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'は', romanization: 'ha', meaning: 'ha', example: 'はな (hana) - bunga' },
                        { word: 'ひ', romanization: 'hi', meaning: 'hi', example: 'ひと (hito) - orang' },
                        { word: 'ふ', romanization: 'fu', meaning: 'fu (bukan hu)', example: 'ふね (fune) - kapal' },
                        { word: 'へ', romanization: 'he', meaning: 'he', example: 'へや (heya) - kamar' },
                        { word: 'ほ', romanization: 'ho', meaning: 'ho', example: 'ほん (hon) - buku' },
                    ],
                    tips: ['ふ dibaca "fu" bukan "hu"', 'は sebagai partikel dibaca "wa"'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How do you pronounce ふ?', questionId: 'Bagaimana mengucapkan ふ?', options: ['hu', 'fu', 'bu', 'pu'], answer: 'fu', order: 1 },
                ],
            },
            {
                title: 'ま行 (Ma-row): まみむめも',
                titleId: 'Baris Ma: まみむめも',
                order: 7,
                xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'ま', romanization: 'ma', meaning: 'ma', example: 'まち (machi) - kota' },
                        { word: 'み', romanization: 'mi', meaning: 'mi', example: 'みず (mizu) - air' },
                        { word: 'む', romanization: 'mu', meaning: 'mu', example: 'むし (mushi) - serangga' },
                        { word: 'め', romanization: 'me', meaning: 'me', example: 'め (me) - mata' },
                        { word: 'も', romanization: 'mo', meaning: 'mo', example: 'もり (mori) - hutan' },
                    ],
                    tips: ['みず (mizu) = air - kata penting!'],
                },
                quizzes: [
                    { type: 'fill_blank', question: 'み___ (air)', questionId: 'み___ (air)', answer: 'ず', order: 1 },
                ],
            },
            {
                title: 'や行・ら行 (Ya-row, Ra-row)',
                titleId: 'Baris Ya dan Ra',
                order: 8,
                xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'や', romanization: 'ya', meaning: 'ya', example: 'やま (yama) - gunung' },
                        { word: 'ゆ', romanization: 'yu', meaning: 'yu', example: 'ゆき (yuki) - salju' },
                        { word: 'よ', romanization: 'yo', meaning: 'yo', example: 'よる (yoru) - malam' },
                        { word: 'ら', romanization: 'ra', meaning: 'ra', example: 'らいねん (rainen) - tahun depan' },
                        { word: 'り', romanization: 'ri', meaning: 'ri', example: 'りんご (ringo) - apel' },
                        { word: 'る', romanization: 'ru', meaning: 'ru', example: 'する (suru) - melakukan' },
                        { word: 'れ', romanization: 're', meaning: 're', example: 'れいぞうこ (reizouko) - kulkas' },
                        { word: 'ろ', romanization: 'ro', meaning: 'ro', example: 'ろく (roku) - enam' },
                    ],
                    tips: ['Baris Ya hanya 3 karakter: や、ゆ、よ'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How many characters in Ya-row?', questionId: 'Berapa karakter di baris Ya?', options: ['3', '4', '5', '6'], answer: '3', order: 1 },
                ],
            },
            {
                title: 'わ行・ん (Wa-row, N)',
                titleId: 'Baris Wa dan N',
                order: 9,
                xpReward: 20,
                content: {
                    vocabulary: [
                        { word: 'わ', romanization: 'wa', meaning: 'wa', example: 'わたし (watashi) - saya' },
                        { word: 'を', romanization: 'wo/o', meaning: 'wo (partikel objek)', example: 'ごはんを食べる (gohan wo taberu)' },
                        { word: 'ん', romanization: 'n', meaning: 'n (konsonan tunggal)', example: 'にほん (nihon) - Jepang' },
                    ],
                    tips: ['を hanya digunakan sebagai partikel objek', 'ん adalah satu-satunya konsonan tunggal'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is を used for?', questionId: 'を digunakan untuk?', options: ['Partikel subjek', 'Partikel objek', 'Partikel tempat', 'Partikel waktu'], answer: 'Partikel objek', order: 1 },
                ],
            },
            {
                title: 'Review Hiragana Lengkap',
                titleId: 'Ulasan Hiragana Lengkap',
                order: 10,
                xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'あいうえお', romanization: 'a-i-u-e-o', meaning: '5 vokal dasar', example: '' },
                        { word: 'かきくけこ', romanization: 'ka-ki-ku-ke-ko', meaning: 'Baris K', example: '' },
                        { word: 'さしすせそ', romanization: 'sa-shi-su-se-so', meaning: 'Baris S', example: '' },
                        { word: 'たちつてと', romanization: 'ta-chi-tsu-te-to', meaning: 'Baris T', example: '' },
                        { word: 'なにぬねの', romanization: 'na-ni-nu-ne-no', meaning: 'Baris N', example: '' },
                    ],
                    tips: ['Total 46 karakter hiragana dasar', 'Latih setiap hari untuk menghafal'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'Total hiragana dasar?', questionId: 'Berapa total hiragana dasar?', options: ['42', '44', '46', '48'], answer: '46', order: 1 },
                    { type: 'fill_blank', question: 'し dibaca ___', questionId: 'し dibaca ___', answer: 'shi', order: 2 },
                    { type: 'fill_blank', question: 'つ dibaca ___', questionId: 'つ dibaca ___', answer: 'tsu', order: 3 },
                ],
            },
        ],
    },
];

export default japaneseA1Courses;
