// Japanese A2 Courses 1-5 - Verb Conjugation, Adjectives, Sentences, Conversations, Work
// CEFR Level A2 (≈JLPT N4)

export const japaneseA2Courses1to5 = [
    // Course 1: Verb Conjugation Basics
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '動詞の活用',
        titleId: 'Konjugasi Kata Kerja',
        description: 'Master Japanese verb conjugation patterns',
        descriptionId: 'Kuasai pola konjugasi kata kerja Jepang',
        order: 1,
        canDo: {
            listening: 'Dapat memahami kalimat dengan berbagai bentuk kata kerja',
            reading: 'Dapat membaca teks dengan konjugasi kata kerja',
            speaking: 'Dapat menggunakan kata kerja dalam berbagai bentuk',
            writing: 'Dapat menulis kalimat dengan konjugasi yang benar'
        },
        lessons: [
            {
                title: '動詞グループ (Verb Groups)',
                titleId: 'Kelompok Kata Kerja',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'グループ1 (五段動詞)', romanization: 'godan doushi', meaning: 'Kata kerja U', example: '書く、読む、話す' },
                        { word: 'グループ2 (一段動詞)', romanization: 'ichidan doushi', meaning: 'Kata kerja RU', example: '食べる、見る、起きる' },
                        { word: 'グループ3 (不規則動詞)', romanization: 'fukisoku doushi', meaning: 'Tidak beraturan', example: 'する、来る' },
                    ],
                    grammar: [
                        { pattern: 'Group 1: -u ending (kaku, yomu)', explanation: 'Kata kerja berakhiran u', examples: ['書く → 書きます', '読む → 読みます'] },
                        { pattern: 'Group 2: -ru ending (taberu, miru)', explanation: 'Kata kerja berakhiran ru', examples: ['食べる → 食べます', '見る → 見ます'] },
                    ],
                    tips: ['Kenali grup untuk konjugasi yang benar'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: '食べる belongs to which group?', questionId: '食べる termasuk grup mana?', options: ['Group 1', 'Group 2', 'Group 3', 'None'], answer: 'Group 2', order: 1 },
                    { type: 'multiple_choice', question: '書く belongs to which group?', questionId: '書く termasuk grup mana?', options: ['Group 1', 'Group 2', 'Group 3', 'None'], answer: 'Group 1', order: 2 },
                ],
            },
            {
                title: 'ます形 (Polite Form)',
                titleId: 'Bentuk Sopan (Masu)',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '行きます', romanization: 'ikimasu', meaning: 'pergi (sopan)', example: '会社に行きます' },
                        { word: '食べます', romanization: 'tabemasu', meaning: 'makan (sopan)', example: 'ご飯を食べます' },
                        { word: '見ます', romanization: 'mimasu', meaning: 'melihat (sopan)', example: 'テレビを見ます' },
                        { word: 'します', romanization: 'shimasu', meaning: 'melakukan (sopan)', example: '仕事をします' },
                        { word: '来ます', romanization: 'kimasu', meaning: 'datang (sopan)', example: '日本に来ます' },
                    ],
                    grammar: [
                        { pattern: 'Dictionary → ます', explanation: 'Ubah ke bentuk sopan', examples: ['書く → 書きます', '食べる → 食べます'] },
                    ],
                    tips: ['Gunakan ます form di tempat kerja dan situasi formal'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '読む → 読___ます', questionId: '読む → 読___ます', answer: 'み', order: 1 },
                    { type: 'multiple_choice', question: 'What is する in masu form?', questionId: 'Apa bentuk masu dari する?', options: ['すます', 'します', 'しります', 'するます'], answer: 'します', order: 2 },
                ],
            },
            {
                title: 'て形 (Te-form)',
                titleId: 'Bentuk -Te',
                order: 3, xpReward: 35,
                content: {
                    vocabulary: [
                        { word: '書いて', romanization: 'kaite', meaning: 'menulis (te)', example: '名前を書いてください' },
                        { word: '食べて', romanization: 'tabete', meaning: 'makan (te)', example: '食べてから行きます' },
                        { word: '見て', romanization: 'mite', meaning: 'melihat (te)', example: '見てください' },
                        { word: 'して', romanization: 'shite', meaning: 'melakukan (te)', example: '掃除をしてください' },
                        { word: '来て', romanization: 'kite', meaning: 'datang (te)', example: '早く来てください' },
                    ],
                    grammar: [
                        { pattern: 'Te-form rules for Group 1', explanation: 'Perubahan tergantung akhiran', examples: ['く→いて', 'ぐ→いで', 'む/ぬ/ぶ→んで', 'す→して', 'う/つ/る→って'] },
                    ],
                    tips: ['Te-form SANGAT PENTING - diperlukan untuk banyak konstruksi'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 読む in te-form?', questionId: 'Apa bentuk te dari 読む?', options: ['読んで', '読いて', '読って', '読みて'], answer: '読んで', order: 1 },
                    { type: 'fill_blank', question: '行く → 行___', questionId: '行く → 行___', answer: 'って', order: 2 },
                ],
            },
            {
                title: 'ない形 (Negative Form)',
                titleId: 'Bentuk Negatif',
                order: 4, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '行かない', romanization: 'ikanai', meaning: 'tidak pergi', example: '今日は行かない' },
                        { word: '食べない', romanization: 'tabenai', meaning: 'tidak makan', example: '朝ごはんを食べない' },
                        { word: 'しない', romanization: 'shinai', meaning: 'tidak melakukan', example: '運動をしない' },
                        { word: '来ない', romanization: 'konai', meaning: 'tidak datang', example: '明日来ない' },
                    ],
                    grammar: [
                        { pattern: 'Negative form rules', explanation: 'Group 1: -u → -anai, Group 2: -ru → -nai', examples: ['書く → 書かない', '食べる → 食べない'] },
                    ],
                    tips: ['Pengecualian: ある → ない (bukan あらない)'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '飲む → 飲___ない', questionId: '飲む → 飲___ない', answer: 'ま', order: 1 },
                ],
            },
            {
                title: 'た形 (Past Form)',
                titleId: 'Bentuk Lampau',
                order: 5, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '行った', romanization: 'itta', meaning: 'pergi (lampau)', example: '昨日東京に行った' },
                        { word: '食べた', romanization: 'tabeta', meaning: 'makan (lampau)', example: 'ラーメンを食べた' },
                        { word: 'した', romanization: 'shita', meaning: 'melakukan (lampau)', example: '宿題をした' },
                        { word: '来た', romanization: 'kita', meaning: 'datang (lampau)', example: '日本に来た' },
                    ],
                    grammar: [
                        { pattern: 'Past form = Te-form + た/だ', explanation: 'Sama dengan te-form tapi akhiran ta/da', examples: ['書いて → 書いた', '読んで → 読んだ'] },
                    ],
                    tips: ['Bentuk lampau pola sama dengan te-form'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What is 飲む in past form?', questionId: 'Apa bentuk lampau dari 飲む?', options: ['飲んだ', '飲いた', '飲った', '飲みた'], answer: '飲んだ', order: 1 },
                ],
            },
        ],
    },

    // Course 2: Adjective Patterns
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '形容詞のパターン',
        titleId: 'Pola Kata Sifat',
        description: 'Master i-adjectives and na-adjectives',
        descriptionId: 'Kuasai kata sifat -i dan -na',
        order: 2,
        canDo: {
            listening: 'Dapat memahami deskripsi dengan kata sifat',
            reading: 'Dapat membaca teks deskriptif',
            speaking: 'Dapat mendeskripsikan orang dan benda',
            writing: 'Dapat menulis kalimat deskriptif'
        },
        lessons: [
            {
                title: 'い形容詞 (I-adjectives)',
                titleId: 'Kata Sifat -I',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '高い', romanization: 'takai', meaning: 'tinggi/mahal', example: 'この建物は高いです' },
                        { word: '安い', romanization: 'yasui', meaning: 'murah', example: '安いですね！' },
                        { word: '暑い', romanization: 'atsui', meaning: 'panas', example: '今日は暑いです' },
                        { word: '寒い', romanization: 'samui', meaning: 'dingin', example: '部屋が寒い' },
                        { word: '忙しい', romanization: 'isogashii', meaning: 'sibuk', example: '今週は忙しいです' },
                    ],
                    grammar: [
                        { pattern: 'い adjective + です', explanation: 'Bentuk sopan', examples: ['高い → 高いです', '安い → 安いです'] },
                        { pattern: 'Negative: い → くない', explanation: 'Bentuk negatif', examples: ['高い → 高くない', '安い → 安くない'] },
                    ],
                    tips: ['Pengecualian: いい → よくない (bukan いくない)'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '高い → 高___ない', questionId: '高い → 高___ない', answer: 'く', order: 1 },
                ],
            },
            {
                title: 'な形容詞 (Na-adjectives)',
                titleId: 'Kata Sifat -Na',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '静か(な)', romanization: 'shizuka', meaning: 'tenang', example: '静かな場所が好きです' },
                        { word: '便利(な)', romanization: 'benri', meaning: 'nyaman/praktis', example: 'この駅は便利です' },
                        { word: '元気(な)', romanization: 'genki', meaning: 'sehat/bersemangat', example: 'お元気ですか？' },
                        { word: '有名(な)', romanization: 'yuumei', meaning: 'terkenal', example: '有名なレストランです' },
                        { word: '大切(な)', romanization: 'taisetsu', meaning: 'penting', example: '大切な書類です' },
                    ],
                    grammar: [
                        { pattern: 'な adjective + な + noun', explanation: 'Modifikasi kata benda', examples: ['静かな部屋', '便利な場所'] },
                        { pattern: 'Negative: な adj + じゃない', explanation: 'Bentuk negatif', examples: ['静か → 静かじゃない'] },
                    ],
                    tips: ['Tanpa な sebelum です: 静かです (bukan 静かなです)'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to say "quiet room"?', questionId: 'Bagaimana bilang "kamar tenang"?', options: ['静かの部屋', '静かな部屋', '静かい部屋', '静かに部屋'], answer: '静かな部屋', order: 1 },
                ],
            },
            {
                title: '形容詞の過去形',
                titleId: 'Bentuk Lampau Kata Sifat',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '高かった', romanization: 'takakatta', meaning: 'mahal (lampau)', example: '去年は高かった' },
                        { word: '静かだった', romanization: 'shizuka datta', meaning: 'tenang (lampau)', example: '昔は静かだった' },
                        { word: '忙しくなかった', romanization: 'isogashikunakatta', meaning: 'tidak sibuk (lampau)', example: '昨日は忙しくなかった' },
                    ],
                    grammar: [
                        { pattern: 'い adj: い → かった', explanation: 'Lampau positif', examples: ['高い → 高かった'] },
                        { pattern: 'い adj: くない → くなかった', explanation: 'Lampau negatif', examples: ['高くない → 高くなかった'] },
                        { pattern: 'な adj: だ → だった', explanation: 'Lampau', examples: ['静かだ → 静かだった'] },
                    ],
                    tips: ['いい → よかった (bukan いかった)'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '安い → 安___った', questionId: '安い → 安___った', answer: 'か', order: 1 },
                ],
            },
        ],
    },

    // Course 3: Basic Sentence Structures
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '基本的な文型',
        titleId: 'Struktur Kalimat Dasar',
        description: 'Essential grammar patterns for communication',
        descriptionId: 'Pola tata bahasa penting untuk komunikasi',
        order: 3,
        canDo: {
            listening: 'Dapat memahami kalimat kompleks sederhana',
            reading: 'Dapat membaca teks dengan berbagai struktur',
            speaking: 'Dapat membuat kalimat yang lebih kompleks',
            writing: 'Dapat menulis paragraf sederhana'
        },
        lessons: [
            {
                title: '〜たい・〜たがる (Want to)',
                titleId: 'Ingin Melakukan',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '食べたい', romanization: 'tabetai', meaning: 'ingin makan', example: 'ラーメンが食べたいです' },
                        { word: '行きたい', romanization: 'ikitai', meaning: 'ingin pergi', example: '日本に行きたいです' },
                        { word: '見たい', romanization: 'mitai', meaning: 'ingin melihat', example: '映画を見たいです' },
                    ],
                    grammar: [
                        { pattern: 'Verb (masu stem) + たい', explanation: 'Menyatakan keinginan', examples: ['食べ + たい = 食べたい', '行き + たい = 行きたい'] },
                    ],
                    tips: ['〜たい digunakan untuk diri sendiri, 〜たがる untuk orang lain'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '飲み___です (ingin minum)', questionId: '飲み___です', answer: 'たい', order: 1 },
                ],
            },
            {
                title: '〜ている (Progressive/State)',
                titleId: 'Sedang / Keadaan',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '食べている', romanization: 'tabeteiru', meaning: 'sedang makan', example: '今、ご飯を食べています' },
                        { word: '住んでいる', romanization: 'sundeiru', meaning: 'tinggal (keadaan)', example: '東京に住んでいます' },
                        { word: '知っている', romanization: 'shitteiru', meaning: 'tahu (keadaan)', example: 'その人を知っています' },
                    ],
                    grammar: [
                        { pattern: 'Te-form + いる', explanation: 'Progressive atau state', examples: ['食べている (sedang makan)', '結婚している (sudah menikah)'] },
                    ],
                    tips: ['Bisa berarti "sedang" atau "keadaan" tergantung kata kerja'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What does 住んでいます mean?', questionId: 'Apa arti 住んでいます?', options: ['Sedang pindah', 'Tinggal di', 'Akan tinggal', 'Pernah tinggal'], answer: 'Tinggal di', order: 1 },
                ],
            },
            {
                title: '〜てもいい・〜てはいけない (Permission)',
                titleId: 'Izin dan Larangan',
                order: 3, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '食べてもいいですか', romanization: 'tabetemo ii desu ka', meaning: 'Boleh makan?', example: 'ここで食べてもいいですか？' },
                        { word: '入ってはいけません', romanization: 'haitte wa ikemasen', meaning: 'Dilarang masuk', example: 'ここに入ってはいけません' },
                    ],
                    grammar: [
                        { pattern: 'Te-form + もいい', explanation: 'Meminta/memberi izin', examples: ['写真を撮ってもいいですか？'] },
                        { pattern: 'Te-form + はいけない', explanation: 'Larangan', examples: ['ここで喫煙してはいけません'] },
                    ],
                    tips: ['Pola ini sangat penting untuk situasi kerja'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '帰っても___ですか (Boleh pulang?)', questionId: '帰っても___ですか', answer: 'いい', order: 1 },
                ],
            },
        ],
    },

    // Course 4: Daily Conversations
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '日常会話',
        titleId: 'Percakapan Sehari-hari',
        description: 'Natural conversations for daily life',
        descriptionId: 'Percakapan alami untuk kehidupan sehari-hari',
        order: 4,
        canDo: {
            listening: 'Dapat memahami percakapan sehari-hari',
            reading: 'Dapat membaca dialog dan pesan',
            speaking: 'Dapat berbicara dalam berbagai situasi',
            writing: 'Dapat menulis pesan dan catatan'
        },
        lessons: [
            {
                title: '約束をする (Making Plans)',
                titleId: 'Membuat Janji',
                order: 1, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: '都合', romanization: 'tsugou', meaning: 'ketersediaan/kondisi', example: '明日、都合はいかがですか？' },
                        { word: '暇', romanization: 'hima', meaning: 'waktu luang', example: '週末、暇ですか？' },
                        { word: '予定', romanization: 'yotei', meaning: 'jadwal/rencana', example: '今週の予定は？' },
                    ],
                    grammar: [
                        { pattern: '〜ませんか (Invitation)', explanation: 'Mengajak', examples: ['映画を見ませんか？'] },
                        { pattern: '〜ましょう (Let\'s)', explanation: 'Mari kita...', examples: ['一緒に行きましょう'] },
                    ],
                    tips: ['〜ませんか lebih sopan dari 〜ましょうか'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to invite someone to eat?', questionId: 'Bagaimana mengajak makan?', options: ['食べます', '食べてください', '一緒に食べませんか', '食べましょう'], answer: '一緒に食べませんか', order: 1 },
                ],
            },
            {
                title: '理由を言う (Giving Reasons)',
                titleId: 'Memberikan Alasan',
                order: 2, xpReward: 25,
                content: {
                    vocabulary: [
                        { word: 'から', romanization: 'kara', meaning: 'karena', example: '忙しいから、行けません' },
                        { word: 'ので', romanization: 'node', meaning: 'karena (sopan)', example: '病気なので、休みます' },
                    ],
                    grammar: [
                        { pattern: '[reason]から、[result]', explanation: 'Menyatakan alasan', examples: ['暑いから、窓を開けました'] },
                        { pattern: '[reason]ので、[result]', explanation: 'Menyatakan alasan (sopan)', examples: ['具合が悪いので、帰ります'] },
                    ],
                    tips: ['ので lebih sopan, gunakan di situasi formal'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '雨___、出かけません (Karena hujan)', questionId: '雨___、出かけません', answer: 'だから', order: 1 },
                ],
            },
        ],
    },

    // Course 5: Work Communication
    {
        language: 'ja',
        level: 'A2',
        localStandard: 'JLPT N4',
        title: '仕事のコミュニケーション',
        titleId: 'Komunikasi Kerja',
        description: 'Professional communication skills',
        descriptionId: 'Keterampilan komunikasi profesional',
        order: 5,
        canDo: {
            listening: 'Dapat memahami instruksi kerja kompleks',
            reading: 'Dapat membaca email dan memo kerja',
            speaking: 'Dapat berkomunikasi secara profesional',
            writing: 'Dapat menulis email kerja sederhana'
        },
        lessons: [
            {
                title: '報告する (Reporting)',
                titleId: 'Melaporkan',
                order: 1, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: '報告します', romanization: 'houkoku shimasu', meaning: 'melaporkan', example: '結果を報告します' },
                        { word: '完了しました', romanization: 'kanryou shimashita', meaning: 'sudah selesai', example: '作業が完了しました' },
                        { word: '確認してください', romanization: 'kakunin shite kudasai', meaning: 'mohon periksa', example: '書類を確認してください' },
                    ],
                    grammar: [
                        { pattern: '〜と思います (I think)', explanation: 'Menyatakan pendapat', examples: ['問題ないと思います'] },
                    ],
                    tips: ['Selalu gunakan keigo (bahasa sopan) saat berbicara dengan atasan'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'How to report completion?', questionId: 'Bagaimana melaporkan selesai?', options: ['終わった', '完了しました', 'できた', '終わり'], answer: '完了しました', order: 1 },
                ],
            },
            {
                title: 'お願いする (Making Requests)',
                titleId: 'Meminta Tolong',
                order: 2, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'お願いできますか', romanization: 'onegai dekimasu ka', meaning: 'Bisakah Anda...?', example: 'ちょっとお願いできますか？' },
                        { word: '〜ていただけますか', romanization: '~te itadakemasu ka', meaning: 'Maukah Anda...?', example: '教えていただけますか？' },
                        { word: '申し訳ありません', romanization: 'moushiwake arimasen', meaning: 'Mohon maaf (formal)', example: '遅れて申し訳ありません' },
                    ],
                    grammar: [
                        { pattern: 'Te-form + いただけますか', explanation: 'Meminta dengan sangat sopan', examples: ['手伝っていただけますか？'] },
                    ],
                    tips: ['Ini adalah bentuk permintaan paling sopan di tempat kerja'],
                },
                quizzes: [
                    { type: 'fill_blank', question: '確認して___ますか？(Maukah Anda memeriksa?)', questionId: '確認して___ますか？', answer: 'いただけ', order: 1 },
                ],
            },
            {
                title: '電話対応 (Phone Etiquette)',
                titleId: 'Etika Telepon',
                order: 3, xpReward: 30,
                content: {
                    vocabulary: [
                        { word: 'もしもし', romanization: 'moshimoshi', meaning: 'Halo (telepon)', example: 'もしもし、田中です' },
                        { word: '少々お待ちください', romanization: 'shoushou omachi kudasai', meaning: 'Mohon tunggu sebentar', example: '' },
                        { word: '失礼します', romanization: 'shitsurei shimasu', meaning: 'Permisi (menutup)', example: '' },
                    ],
                    tips: ['Jawab telepon dengan nama perusahaan + nama sendiri'],
                },
                quizzes: [
                    { type: 'multiple_choice', question: 'What to say when answering phone?', questionId: 'Apa yang diucapkan saat angkat telepon?', options: ['はい', 'もしもし', 'こんにちは', 'ありがとう'], answer: 'もしもし', order: 1 },
                ],
            },
        ],
    },
];

export default japaneseA2Courses1to5;
