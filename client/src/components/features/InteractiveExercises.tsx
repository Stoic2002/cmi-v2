import React from 'react';
import { Check, X, Shuffle, Trophy, ArrowRight, Type, RefreshCcw, BookOpen, FileText, Globe } from 'lucide-react';
import { Button, Card, CardBody } from '../../components/common';
import { useAuthStore } from '../../stores';
import { LANGUAGES } from '../../utils/constants';

type ExerciseType = 'matching' | 'fill_blank' | 'word_order' | 'particle' | 'conjugation' | 'translate';

interface Exercise {
    id: string;
    type: ExerciseType;
    level: 'N5' | 'N4' | 'N3' | 'TOPIK1' | 'TOPIK2' | 'A1' | 'A2' | 'B1';
    category: string;
    question: string;
    questionHint?: string;
    data: any;
    answer: any;
    explanation?: string;
}

// ============================================
// JAPANESE EXERCISES (20+)
// ============================================
const japaneseExercises: Exercise[] = [
    // === PARTICLE EXERCISES ===
    {
        id: 'ja-p1',
        type: 'particle',
        level: 'N5',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '私___日本に行きます。(Saya pergi ke Jepang)',
        data: {
            sentence: '私___日本に行きます',
            options: ['は', 'が', 'を', 'に'],
        },
        answer: 'は',
        explanation: 'は (wa) digunakan untuk menandai topik kalimat. "私は" = "Saya (sebagai topik)"',
    },
    {
        id: 'ja-p2',
        type: 'particle',
        level: 'N5',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '水___飲みます。(Minum air)',
        data: {
            sentence: '水___飲みます',
            options: ['は', 'が', 'を', 'に'],
        },
        answer: 'を',
        explanation: 'を (wo) menandai objek langsung dari kata kerja. "水を飲む" = "Minum air"',
    },
    {
        id: 'ja-p3',
        type: 'particle',
        level: 'N5',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '駅___行きます。(Pergi ke stasiun)',
        data: {
            sentence: '駅___行きます',
            options: ['は', 'が', 'を', 'に'],
        },
        answer: 'に',
        explanation: 'に (ni) menunjukkan tujuan/arah. "駅に行く" = "Pergi ke stasiun"',
    },
    {
        id: 'ja-p4',
        type: 'particle',
        level: 'N5',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '電車___乗ります。(Naik kereta)',
        data: {
            sentence: '電車___乗ります',
            options: ['は', 'が', 'を', 'に'],
        },
        answer: 'に',
        explanation: 'に (ni) digunakan dengan kata kerja "乗る" (naik). "電車に乗る" = "Naik kereta"',
    },
    {
        id: 'ja-p5',
        type: 'particle',
        level: 'N5',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '友達___会います。(Bertemu teman)',
        data: {
            sentence: '友達___会います',
            options: ['は', 'が', 'を', 'に'],
        },
        answer: 'に',
        explanation: 'に (ni) digunakan dengan kata kerja "会う" (bertemu). Orang yang ditemui ditandai dengan に',
    },

    // === CONJUGATION EXERCISES ===
    {
        id: 'ja-c1',
        type: 'conjugation',
        level: 'N5',
        category: 'conjugation',
        question: 'Ubah ke bentuk ます (masu/formal):',
        questionHint: '食べる (taberu) = makan',
        data: {
            word: '食べる',
            romanization: 'taberu',
        },
        answer: '食べます',
        explanation: 'Untuk ichidan verb (berakhir -る), ganti る dengan ます → 食べます (tabemasu)',
    },
    {
        id: 'ja-c2',
        type: 'conjugation',
        level: 'N5',
        category: 'conjugation',
        question: 'Ubah ke bentuk ます (masu/formal):',
        questionHint: '行く (iku) = pergi',
        data: {
            word: '行く',
            romanization: 'iku',
        },
        answer: '行きます',
        explanation: 'Untuk godan verb berakhir -く, ganti く dengan きます → 行きます (ikimasu)',
    },
    {
        id: 'ja-c3',
        type: 'conjugation',
        level: 'N5',
        category: 'conjugation',
        question: 'Ubah ke bentuk negatif:',
        questionHint: '分かります (wakarimasu) = mengerti',
        data: {
            word: '分かります',
            romanization: 'wakarimasu',
        },
        answer: '分かりません',
        explanation: 'Untuk bentuk negatif formal, ganti ます dengan ません → 分かりません (wakarimasen)',
    },
    {
        id: 'ja-c4',
        type: 'conjugation',
        level: 'N5',
        category: 'conjugation',
        question: 'Ubah ke bentuk lampau:',
        questionHint: '食べます (tabemasu) = makan',
        data: {
            word: '食べます',
            romanization: 'tabemasu',
        },
        answer: '食べました',
        explanation: 'Untuk bentuk lampau formal, ganti ます dengan ました → 食べました (tabemashita)',
    },
    {
        id: 'ja-c5',
        type: 'conjugation',
        level: 'N4',
        category: 'conjugation',
        question: 'Ubah ke bentuk て (te-form):',
        questionHint: '待つ (matsu) = menunggu',
        data: {
            word: '待つ',
            romanization: 'matsu',
        },
        answer: '待って',
        explanation: 'Untuk verb berakhir -つ, ganti つ dengan って → 待って (matte)',
    },

    // === FILL IN THE BLANK ===
    {
        id: 'ja-f1',
        type: 'fill_blank',
        level: 'N5',
        category: 'vocabulary',
        question: 'Lengkapi kalimat:',
        questionHint: 'Selamat pagi (formal)',
        data: {
            sentence: 'おはよう___',
            options: ['ございます', 'さん', 'です', 'ます'],
        },
        answer: 'ございます',
        explanation: 'おはようございます adalah ucapan selamat pagi yang formal',
    },
    {
        id: 'ja-f2',
        type: 'fill_blank',
        level: 'N5',
        category: 'vocabulary',
        question: 'Lengkapi kalimat:',
        questionHint: 'Terima kasih (formal)',
        data: {
            sentence: 'ありがとう___',
            options: ['ございます', 'さん', 'です', 'ます'],
        },
        answer: 'ございます',
        explanation: 'ありがとうございます adalah ucapan terima kasih yang formal',
    },
    {
        id: 'ja-f3',
        type: 'fill_blank',
        level: 'N5',
        category: 'grammar',
        question: 'Lengkapi kalimat:',
        questionHint: 'Ini adalah buku.',
        data: {
            sentence: 'これは本___',
            options: ['です', 'ます', 'だ', 'か'],
        },
        answer: 'です',
        explanation: 'です digunakan untuk kalimat formal setelah kata benda',
    },

    // === MATCHING ===
    {
        id: 'ja-m1',
        type: 'matching',
        level: 'N5',
        category: 'vocabulary',
        question: 'Cocokkan kata dengan artinya:',
        data: {
            pairs: [
                { word: '仕事', meaning: 'Pekerjaan' },
                { word: '会社', meaning: 'Perusahaan' },
                { word: '工場', meaning: 'Pabrik' },
                { word: '休憩', meaning: 'Istirahat' },
            ],
        },
        answer: null,
    },
    {
        id: 'ja-m2',
        type: 'matching',
        level: 'N5',
        category: 'vocabulary',
        question: 'Cocokkan kata dengan artinya:',
        data: {
            pairs: [
                { word: '安全', meaning: 'Keselamatan' },
                { word: '危険', meaning: 'Bahaya' },
                { word: 'ヘルメット', meaning: 'Helm' },
                { word: '手袋', meaning: 'Sarung tangan' },
            ],
        },
        answer: null,
    },

    // === WORD ORDER ===
    {
        id: 'ja-w1',
        type: 'word_order',
        level: 'N5',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionHint: 'Saya pergi ke Jepang',
        data: {
            words: ['私は', '日本に', '行きます', '。'],
        },
        answer: '私は 日本に 行きます 。',
    },
    {
        id: 'ja-w2',
        type: 'word_order',
        level: 'N5',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionHint: 'Saya minum air',
        data: {
            words: ['私は', '水を', '飲みます', '。'],
        },
        answer: '私は 水を 飲みます 。',
    },

    // === TRANSLATE ===
    {
        id: 'ja-t1',
        type: 'translate',
        level: 'N5',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionHint: 'すみません、もう一度お願いします',
        data: {
            options: [
                'Maaf, tolong ulangi sekali lagi',
                'Terima kasih banyak',
                'Saya tidak mengerti',
                'Hati-hati'
            ],
        },
        answer: 'Maaf, tolong ulangi sekali lagi',
        explanation: 'すみません = Maaf/Permisi, もう一度 = sekali lagi, お願いします = tolong',
    },
    {
        id: 'ja-t2',
        type: 'translate',
        level: 'N5',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionHint: '終わりました',
        data: {
            options: [
                'Sudah selesai',
                'Mulai sekarang',
                'Saya mengerti',
                'Tolong bantu'
            ],
        },
        answer: 'Sudah selesai',
        explanation: '終わる = selesai, ました = bentuk lampau formal',
    },
];

// ============================================
// KOREAN EXERCISES (20+)
// ============================================
const koreanExercises: Exercise[] = [
    // === PARTICLE EXERCISES ===
    {
        id: 'ko-p1',
        type: 'particle',
        level: 'TOPIK1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '저___학생입니다. (Saya adalah pelajar)',
        data: {
            sentence: '저___학생입니다',
            options: ['는', '가', '를', '에'],
        },
        answer: '는',
        explanation: '는 digunakan sebagai penanda topik setelah konsonan. "저는" = "Saya (sebagai topik)"',
    },
    {
        id: 'ko-p2',
        type: 'particle',
        level: 'TOPIK1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '물___마셔요. (Minum air)',
        data: {
            sentence: '물___마셔요',
            options: ['은', '이', '를', '에'],
        },
        answer: '를',
        explanation: '를 menandai objek langsung setelah vokal. "물을" = "air (sebagai objek)"',
    },
    {
        id: 'ko-p3',
        type: 'particle',
        level: 'TOPIK1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '회사___가요. (Pergi ke kantor)',
        data: {
            sentence: '회사___가요',
            options: ['는', '가', '를', '에'],
        },
        answer: '에',
        explanation: '에 menunjukkan tujuan/arah. "회사에 가다" = "Pergi ke kantor"',
    },
    {
        id: 'ko-p4',
        type: 'particle',
        level: 'TOPIK1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '친구___만나요. (Bertemu teman)',
        data: {
            sentence: '친구___만나요',
            options: ['는', '가', '를', '에서'],
        },
        answer: '를',
        explanation: '를 digunakan dengan kata kerja 만나다 (bertemu). "친구를 만나다" = "Bertemu teman"',
    },
    {
        id: 'ko-p5',
        type: 'particle',
        level: 'TOPIK1',
        category: 'particle',
        question: 'Pilih partikel yang tepat:',
        questionHint: '공장___일해요. (Bekerja di pabrik)',
        data: {
            sentence: '공장___일해요',
            options: ['는', '가', '를', '에서'],
        },
        answer: '에서',
        explanation: '에서 menunjukkan tempat aksi berlangsung. "공장에서 일하다" = "Bekerja di pabrik"',
    },

    // === CONJUGATION EXERCISES ===
    {
        id: 'ko-c1',
        type: 'conjugation',
        level: 'TOPIK1',
        category: 'conjugation',
        question: 'Ubah ke bentuk formal -습니다/ㅂ니다:',
        questionHint: '먹다 (meokda) = makan',
        data: {
            word: '먹다',
            romanization: 'meokda',
        },
        answer: '먹습니다',
        explanation: 'Setelah konsonan, tambahkan -습니다 → 먹습니다 (meokseumnida)',
    },
    {
        id: 'ko-c2',
        type: 'conjugation',
        level: 'TOPIK1',
        category: 'conjugation',
        question: 'Ubah ke bentuk formal -습니다/ㅂ니다:',
        questionHint: '가다 (gada) = pergi',
        data: {
            word: '가다',
            romanization: 'gada',
        },
        answer: '갑니다',
        explanation: 'Setelah vokal, tambahkan -ㅂ니다 → 갑니다 (gamnida)',
    },
    {
        id: 'ko-c3',
        type: 'conjugation',
        level: 'TOPIK1',
        category: 'conjugation',
        question: 'Ubah ke bentuk negatif dengan 안:',
        questionHint: '먹어요 (meogeoyo) = makan',
        data: {
            word: '먹어요',
            romanization: 'meogeoyo',
        },
        answer: '안 먹어요',
        explanation: 'Tambahkan 안 di depan kata kerja untuk bentuk negatif → 안 먹어요 (an meogeoyo)',
    },
    {
        id: 'ko-c4',
        type: 'conjugation',
        level: 'TOPIK1',
        category: 'conjugation',
        question: 'Ubah ke bentuk lampau:',
        questionHint: '먹어요 (meogeoyo) = makan',
        data: {
            word: '먹어요',
            romanization: 'meogeoyo',
        },
        answer: '먹었어요',
        explanation: 'Untuk bentuk lampau, tambahkan 었/았 → 먹었어요 (meogeosseoyo)',
    },
    {
        id: 'ko-c5',
        type: 'conjugation',
        level: 'TOPIK1',
        category: 'conjugation',
        question: 'Ubah ke bentuk perintah sopan:',
        questionHint: '기다리다 (gidarida) = menunggu',
        data: {
            word: '기다리다',
            romanization: 'gidarida',
        },
        answer: '기다리세요',
        explanation: 'Untuk perintah sopan, tambahkan -세요 → 기다리세요 (gidariseyo)',
    },

    // === FILL IN THE BLANK ===
    {
        id: 'ko-f1',
        type: 'fill_blank',
        level: 'TOPIK1',
        category: 'vocabulary',
        question: 'Lengkapi kalimat:',
        questionHint: 'Terima kasih (formal)',
        data: {
            sentence: '감사___',
            options: ['합니다', '하세요', '해요', '했어요'],
        },
        answer: '합니다',
        explanation: '감사합니다 adalah ucapan terima kasih yang formal',
    },
    {
        id: 'ko-f2',
        type: 'fill_blank',
        level: 'TOPIK1',
        category: 'grammar',
        question: 'Lengkapi kalimat:',
        questionHint: 'Ini adalah buku.',
        data: {
            sentence: '이것은 책___',
            options: ['입니다', '있습니다', '합니다', '됩니다'],
        },
        answer: '입니다',
        explanation: '입니다 digunakan untuk kalimat formal "adalah" setelah kata benda',
    },

    // === MATCHING ===
    {
        id: 'ko-m1',
        type: 'matching',
        level: 'TOPIK1',
        category: 'vocabulary',
        question: '단어와 뜻을 연결하세요:',
        data: {
            pairs: [
                { word: '일', meaning: 'Pekerjaan' },
                { word: '회사', meaning: 'Perusahaan' },
                { word: '공장', meaning: 'Pabrik' },
                { word: '휴식', meaning: 'Istirahat' },
            ],
        },
        answer: null,
    },
    {
        id: 'ko-m2',
        type: 'matching',
        level: 'TOPIK1',
        category: 'vocabulary',
        question: '단어와 뜻을 연결하세요:',
        data: {
            pairs: [
                { word: '안전', meaning: 'Keselamatan' },
                { word: '위험', meaning: 'Bahaya' },
                { word: '안전모', meaning: 'Helm' },
                { word: '장갑', meaning: 'Sarung tangan' },
            ],
        },
        answer: null,
    },

    // === WORD ORDER ===
    {
        id: 'ko-w1',
        type: 'word_order',
        level: 'TOPIK1',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionHint: 'Saya pergi ke Korea',
        data: {
            words: ['저는', '한국에', '가요', '.'],
        },
        answer: '저는 한국에 가요 .',
    },
    {
        id: 'ko-w2',
        type: 'word_order',
        level: 'TOPIK1',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionHint: 'Saya minum kopi',
        data: {
            words: ['저는', '커피를', '마셔요', '.'],
        },
        answer: '저는 커피를 마셔요 .',
    },

    // === TRANSLATE ===
    {
        id: 'ko-t1',
        type: 'translate',
        level: 'TOPIK1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionHint: '다시 한번 말씀해 주세요',
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
    },
    {
        id: 'ko-t2',
        type: 'translate',
        level: 'TOPIK1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionHint: '끝났습니다',
        data: {
            options: [
                'Sudah selesai',
                'Mulai sekarang',
                'Saya mengerti',
                'Tolong bantu'
            ],
        },
        answer: 'Sudah selesai',
        explanation: '끝나다 = selesai, 습니다 = bentuk formal',
    },
];

// ============================================
// ENGLISH EXERCISES (20+)
// ============================================
const englishExercises: Exercise[] = [
    // === FILL IN THE BLANK ===
    {
        id: 'en-f1',
        type: 'fill_blank',
        level: 'A1',
        category: 'grammar',
        question: 'Lengkapi kalimat dengan verb to be yang tepat:',
        questionHint: 'I ___ a worker.',
        data: {
            sentence: 'I ___ a worker.',
            options: ['am', 'is', 'are', 'be'],
        },
        answer: 'am',
        explanation: '"I" selalu diikuti "am". I am = Saya adalah',
    },
    {
        id: 'en-f2',
        type: 'fill_blank',
        level: 'A1',
        category: 'grammar',
        question: 'Lengkapi kalimat:',
        questionHint: 'She ___ working now.',
        data: {
            sentence: 'She ___ working now.',
            options: ['am', 'is', 'are', 'be'],
        },
        answer: 'is',
        explanation: '"She" diikuti "is". She is working = Dia sedang bekerja',
    },
    {
        id: 'en-f3',
        type: 'fill_blank',
        level: 'A1',
        category: 'grammar',
        question: 'Lengkapi kalimat:',
        questionHint: 'We ___ from Indonesia.',
        data: {
            sentence: 'We ___ from Indonesia.',
            options: ['am', 'is', 'are', 'be'],
        },
        answer: 'are',
        explanation: '"We" diikuti "are". We are = Kami adalah',
    },
    {
        id: 'en-f4',
        type: 'fill_blank',
        level: 'A1',
        category: 'grammar',
        question: 'Pilih bentuk lampau yang tepat:',
        questionHint: 'I ___ to work yesterday.',
        data: {
            sentence: 'I ___ to work yesterday.',
            options: ['go', 'goes', 'went', 'going'],
        },
        answer: 'went',
        explanation: '"went" adalah bentuk lampau dari "go". "Yesterday" menandakan waktu lampau.',
    },
    {
        id: 'en-f5',
        type: 'fill_blank',
        level: 'A2',
        category: 'grammar',
        question: 'Pilih kata yang tepat:',
        questionHint: 'I have ___ here for 2 years.',
        data: {
            sentence: 'I have ___ here for 2 years.',
            options: ['work', 'works', 'worked', 'working'],
        },
        answer: 'worked',
        explanation: 'Present perfect: have + past participle (worked)',
    },

    // === MATCHING ===
    {
        id: 'en-m1',
        type: 'matching',
        level: 'A1',
        category: 'vocabulary',
        question: 'Cocokkan kata dengan artinya:',
        data: {
            pairs: [
                { word: 'Job', meaning: 'Pekerjaan' },
                { word: 'Company', meaning: 'Perusahaan' },
                { word: 'Factory', meaning: 'Pabrik' },
                { word: 'Break', meaning: 'Istirahat' },
            ],
        },
        answer: null,
    },
    {
        id: 'en-m2',
        type: 'matching',
        level: 'A1',
        category: 'vocabulary',
        question: 'Cocokkan kata dengan artinya:',
        data: {
            pairs: [
                { word: 'Safety', meaning: 'Keselamatan' },
                { word: 'Danger', meaning: 'Bahaya' },
                { word: 'Helmet', meaning: 'Helm' },
                { word: 'Gloves', meaning: 'Sarung tangan' },
            ],
        },
        answer: null,
    },
    {
        id: 'en-m3',
        type: 'matching',
        level: 'A1',
        category: 'vocabulary',
        question: 'Cocokkan kata dengan artinya:',
        data: {
            pairs: [
                { word: 'Morning', meaning: 'Pagi' },
                { word: 'Afternoon', meaning: 'Siang' },
                { word: 'Evening', meaning: 'Sore' },
                { word: 'Night', meaning: 'Malam' },
            ],
        },
        answer: null,
    },

    // === WORD ORDER ===
    {
        id: 'en-w1',
        type: 'word_order',
        level: 'A1',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionHint: 'Saya bekerja di pabrik',
        data: {
            words: ['I', 'work', 'in', 'a', 'factory', '.'],
        },
        answer: 'I work in a factory .',
    },
    {
        id: 'en-w2',
        type: 'word_order',
        level: 'A1',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionHint: 'Bisakah kamu membantu saya?',
        data: {
            words: ['Can', 'you', 'help', 'me', '?'],
        },
        answer: 'Can you help me ?',
    },
    {
        id: 'en-w3',
        type: 'word_order',
        level: 'A2',
        category: 'grammar',
        question: 'Susun kata menjadi kalimat yang benar:',
        questionHint: 'Di mana toilet?',
        data: {
            words: ['Where', 'is', 'the', 'toilet', '?'],
        },
        answer: 'Where is the toilet ?',
    },

    // === TRANSLATE ===
    {
        id: 'en-t1',
        type: 'translate',
        level: 'A1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionHint: 'Could you repeat that, please?',
        data: {
            options: [
                'Bisakah Anda mengulangnya?',
                'Terima kasih banyak',
                'Saya tidak mengerti',
                'Hati-hati'
            ],
        },
        answer: 'Bisakah Anda mengulangnya?',
        explanation: 'Could = bisakah, repeat = mengulang, please = tolong',
    },
    {
        id: 'en-t2',
        type: 'translate',
        level: 'A1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionHint: "I'm finished",
        data: {
            options: [
                'Saya sudah selesai',
                'Saya mulai',
                'Saya mengerti',
                'Tolong bantu'
            ],
        },
        answer: 'Saya sudah selesai',
        explanation: "I'm = I am, finished = selesai",
    },
    {
        id: 'en-t3',
        type: 'translate',
        level: 'A1',
        category: 'translation',
        question: 'Apa arti dari kalimat ini?',
        questionHint: "Be careful, it's dangerous!",
        data: {
            options: [
                'Hati-hati, ini berbahaya!',
                'Selamat pagi',
                'Terima kasih',
                'Sampai jumpa'
            ],
        },
        answer: 'Hati-hati, ini berbahaya!',
        explanation: 'Be careful = hati-hati, dangerous = berbahaya',
    },

    // === Additional Grammar ===
    {
        id: 'en-f6',
        type: 'fill_blank',
        level: 'A2',
        category: 'grammar',
        question: 'Pilih yang tepat:',
        questionHint: 'I ___ understand. Can you speak slowly?',
        data: {
            sentence: "I ___ understand. Can you speak slowly?",
            options: ["don't", "doesn't", "isn't", "aren't"],
        },
        answer: "don't",
        explanation: '"I" menggunakan "don\'t" untuk kalimat negatif dengan kata kerja.',
    },
    {
        id: 'en-f7',
        type: 'fill_blank',
        level: 'A1',
        category: 'grammar',
        question: 'Pilih kata keterangan yang tepat:',
        questionHint: "I work ___ (dari pukul 8 sampai 5).",
        data: {
            sentence: 'I work ___ 8 to 5.',
            options: ['from', 'at', 'in', 'on'],
        },
        answer: 'from',
        explanation: '"from...to..." digunakan untuk menunjukkan rentang waktu.',
    },
];

// Combine all exercises by language
const exercises: Record<string, Exercise[]> = {
    en: englishExercises,
    ko: koreanExercises,
    ja: japaneseExercises,
};

// Category icons with Lucide
const categoryIcons: Record<string, React.ReactNode> = {
    particle: <Type size={14} />,
    conjugation: <RefreshCcw size={14} />,
    vocabulary: <BookOpen size={14} />,
    grammar: <FileText size={14} />,
    translation: <Globe size={14} />,
};

const categoryLabels: Record<string, string> = {
    particle: 'Partikel',
    conjugation: 'Konjugasi',
    vocabulary: 'Kosakata',
    grammar: 'Tata Bahasa',
    translation: 'Terjemahan',
};

export const InteractiveExercises: React.FC = () => {
    const { user } = useAuthStore();
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isComplete, setIsComplete] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

    // Matching state
    const [selectedWord, setSelectedWord] = React.useState<string | null>(null);
    const [matchedPairs, setMatchedPairs] = React.useState<Record<string, string>>({});
    const [shuffledMeanings, setShuffledMeanings] = React.useState<string[]>([]);

    // Fill blank / particle / translate state
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const [showResult, setShowResult] = React.useState(false);

    // Word order state
    const [orderedWords, setOrderedWords] = React.useState<string[]>([]);
    const [availableWords, setAvailableWords] = React.useState<string[]>([]);

    // Conjugation state
    const [conjugationInput, setConjugationInput] = React.useState('');

    const language = user?.targetLanguage || 'en';
    const allExercises = exercises[language] || exercises.en;

    // Filter exercises by category
    const exerciseList = selectedCategory === 'all'
        ? allExercises
        : allExercises.filter(e => e.category === selectedCategory);

    const currentExercise = exerciseList[currentIndex];
    const languageInfo = LANGUAGES[language as keyof typeof LANGUAGES];

    // Get unique categories from current language
    const availableCategories = Array.from(new Set(allExercises.map(e => e.category)));

    React.useEffect(() => {
        initExercise();
    }, [currentIndex, selectedCategory]);

    const initExercise = () => {
        if (!exerciseList[currentIndex]) return;

        const exercise = exerciseList[currentIndex];
        setShowResult(false);
        setSelectedOption(null);
        setConjugationInput('');

        if (exercise.type === 'matching') {
            const meanings = exercise.data.pairs.map((p: any) => p.meaning);
            setShuffledMeanings(shuffleArray([...meanings]));
            setMatchedPairs({});
            setSelectedWord(null);
        } else if (exercise.type === 'word_order') {
            setOrderedWords([]);
            setAvailableWords(shuffleArray([...exercise.data.words]));
        }
    };

    const shuffleArray = (array: string[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const handleMatchingClick = (item: string, isWord: boolean) => {
        if (isWord) {
            setSelectedWord(item);
        } else if (selectedWord) {
            const pair = currentExercise.data.pairs.find((p: any) => p.word === selectedWord);
            if (pair && pair.meaning === item) {
                setMatchedPairs(prev => ({ ...prev, [selectedWord]: item }));
                setScore(prev => prev + 1);
            }
            setSelectedWord(null);
        }
    };

    const handleOptionSubmit = () => {
        setShowResult(true);
        if (selectedOption === currentExercise.answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleConjugationSubmit = () => {
        setShowResult(true);
        const userAnswer = conjugationInput.trim();
        if (userAnswer === currentExercise.answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleWordClick = (word: string, fromOrdered: boolean) => {
        if (fromOrdered) {
            setOrderedWords(prev => prev.filter(w => w !== word));
            setAvailableWords(prev => [...prev, word]);
        } else {
            setAvailableWords(prev => prev.filter(w => w !== word));
            setOrderedWords(prev => [...prev, word]);
        }
    };

    const handleWordOrderSubmit = () => {
        setShowResult(true);
        const userAnswer = orderedWords.join(' ');
        if (userAnswer === currentExercise.answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < exerciseList.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsComplete(true);
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setScore(0);
        setIsComplete(false);
        initExercise();
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentIndex(0);
        setScore(0);
        setIsComplete(false);
    };

    if (isComplete) {
        return (
            <div className="flex flex-col items-center justify-center w-full min-h-[400px] p-4">
                <Card className="max-w-md w-full text-center p-8 bg-white border border-slate-200">
                    <CardBody className="flex flex-col items-center gap-6">
                        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-2 animate-bounce">
                            <Trophy size={48} className="text-yellow-600 fill-yellow-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Latihan Selesai!</h2>
                            <p className="text-gray-500">Hebat! Kamu telah menyelesaikan sesi latihan ini.</p>
                        </div>

                        <div className="w-full bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center justify-around my-2">
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Skor</span>
                                <span className="text-3xl font-bold text-primary">{score}/{exerciseList.length}</span>
                            </div>
                            <div className="w-px h-12 bg-gray-100"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Akurasi</span>
                                <span className={`text-3xl font-bold ${score === exerciseList.length ? 'text-green-500' : 'text-amber-500'}`}>
                                    {Math.round((score / exerciseList.length) * 100)}%
                                </span>
                            </div>
                        </div>

                        <Button onClick={handleReset} className="w-full">
                            Ulangi Latihan
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }

    if (!currentExercise) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-slate-500">Tidak ada latihan untuk kategori ini.</p>
            </div>
        );
    }

    const renderExerciseContent = () => {
        switch (currentExercise.type) {
            case 'matching':
                return (
                    <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto w-full">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-1 text-center">Kata</h4>
                            {currentExercise.data.pairs.map((pair: any) => (
                                <button
                                    key={pair.word}
                                    className={`p-4 rounded-xl text-left font-medium transition-all border-2 relative h-16 flex items-center justify-between ${matchedPairs[pair.word]
                                        ? 'bg-green-50 border-green-200 text-green-700 opacity-60'
                                        : selectedWord === pair.word
                                            ? 'bg-primary/10 border-primary text-primary shadow-md ring-2 ring-primary/20'
                                            : 'bg-white border-gray-200 hover:border-primary/30 hover:shadow-sm'
                                        }`}
                                    onClick={() => !matchedPairs[pair.word] && handleMatchingClick(pair.word, true)}
                                    disabled={!!matchedPairs[pair.word]}
                                >
                                    <span className="truncate">{pair.word}</span>
                                    {matchedPairs[pair.word] && <Check size={18} />}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-1 text-center">Arti</h4>
                            {shuffledMeanings.map((meaning) => {
                                const isMatched = Object.values(matchedPairs).includes(meaning);
                                return (
                                    <button
                                        key={meaning}
                                        className={`p-4 rounded-xl text-left font-medium transition-all border-2 relative h-16 flex items-center justify-between ${isMatched
                                            ? 'bg-green-50 border-green-200 text-green-700 opacity-60'
                                            : 'bg-white border-gray-200 hover:border-primary/30 hover:shadow-sm'
                                            }`}
                                        onClick={() => !isMatched && handleMatchingClick(meaning, false)}
                                        disabled={isMatched}
                                    >
                                        <span className="truncate">{meaning}</span>
                                        {isMatched && <Check size={18} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                );

            case 'particle':
            case 'fill_blank':
            case 'translate':
                return (
                    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
                        {currentExercise.questionHint && (
                            <div className="text-2xl md:text-3xl text-center font-medium leading-relaxed text-gray-800 p-6 bg-gray-50 rounded-2xl border border-gray-100 w-full">
                                {currentExercise.questionHint}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-3 w-full">
                            {currentExercise.data.options.map((option: string) => (
                                <button
                                    key={option}
                                    className={`p-4 rounded-xl text-center font-bold transition-all border-2 ${selectedOption === option
                                        ? showResult
                                            ? option === currentExercise.answer
                                                ? 'bg-green-100 border-green-500 text-green-700'
                                                : 'bg-red-100 border-red-500 text-red-700'
                                            : 'bg-primary/10 border-primary text-primary shadow-sm'
                                        : showResult && option === currentExercise.answer
                                            ? 'bg-green-50 border-green-200 text-green-600 border-dashed'
                                            : 'bg-white border-gray-200 hover:border-gray-300 text-gray-600'
                                        }`}
                                    onClick={() => !showResult && setSelectedOption(option)}
                                    disabled={showResult}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        {showResult && currentExercise.explanation && (
                            <div className={`p-4 rounded-xl text-sm ${selectedOption === currentExercise.answer ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'}`}>
                                💡 {currentExercise.explanation}
                            </div>
                        )}

                        {!showResult && (
                            <Button onClick={handleOptionSubmit} disabled={!selectedOption} className="w-full md:w-auto px-8">
                                Periksa Jawaban
                            </Button>
                        )}
                    </div>
                );

            case 'conjugation':
                return (
                    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
                        <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 w-full">
                            <span className="text-3xl font-bold text-gray-900 block mb-2">{currentExercise.data.word}</span>
                            {currentExercise.data.romanization && (
                                <span className="text-lg text-primary font-medium">({currentExercise.data.romanization})</span>
                            )}
                        </div>

                        <input
                            type="text"
                            value={conjugationInput}
                            onChange={(e) => setConjugationInput(e.target.value)}
                            placeholder="Ketik jawaban Anda..."
                            className={`w-full p-4 rounded-xl border-2 text-center text-xl font-bold outline-none transition-all ${showResult
                                ? conjugationInput.trim() === currentExercise.answer
                                    ? 'border-green-500 bg-green-50 text-green-700'
                                    : 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-200 focus:border-primary'
                                }`}
                            disabled={showResult}
                        />

                        {showResult && (
                            <div className={`p-4 rounded-xl text-center w-full ${conjugationInput.trim() === currentExercise.answer ? 'bg-green-50' : 'bg-red-50'}`}>
                                {conjugationInput.trim() !== currentExercise.answer && (
                                    <p className="text-red-700 font-bold mb-2">Jawaban yang benar: {currentExercise.answer}</p>
                                )}
                                {currentExercise.explanation && (
                                    <p className="text-slate-700 text-sm">💡 {currentExercise.explanation}</p>
                                )}
                            </div>
                        )}

                        {!showResult && (
                            <Button onClick={handleConjugationSubmit} disabled={!conjugationInput.trim()} className="w-full md:w-auto px-8">
                                Periksa Jawaban
                            </Button>
                        )}
                    </div>
                );

            case 'word_order':
                return (
                    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
                        <div className="min-h-[100px] bg-gray-50 rounded-2xl border-2 border-gray-200 p-4 flex flex-wrap gap-2 items-center justify-center border-dashed">
                            {orderedWords.length === 0 ? (
                                <span className="text-gray-400 italic font-medium">Klik kata di bawah untuk menyusun kalimat</span>
                            ) : (
                                orderedWords.map((word, index) => (
                                    <button
                                        key={`${word}-${index}`}
                                        className="px-4 py-2 bg-primary text-white rounded-lg shadow-sm font-bold hover:bg-red-500 hover:scale-105 transition-all text-sm animate-in zoom-in duration-200"
                                        onClick={() => !showResult && handleWordClick(word, true)}
                                    >
                                        {word}
                                    </button>
                                ))
                            )}
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {availableWords.map((word, index) => (
                                <button
                                    key={`${word}-${index}`}
                                    className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-sm font-bold hover:bg-gray-50 hover:border-gray-300 transition-all text-sm"
                                    onClick={() => !showResult && handleWordClick(word, false)}
                                    disabled={showResult}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>

                        {showResult && (
                            <div className={`p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 animate-in slide-in-from-bottom-2 ${orderedWords.join(' ') === currentExercise.answer
                                ? 'bg-green-100 text-green-700 border border-green-200'
                                : 'bg-red-100 text-red-700 border border-red-200'
                                }`}>
                                {orderedWords.join(' ') === currentExercise.answer ? (
                                    <><Check size={20} /> Benar!</>
                                ) : (
                                    <><X size={20} /> Jawaban: {currentExercise.answer}</>
                                )}
                            </div>
                        )}

                        {!showResult && (
                            <Button onClick={handleWordOrderSubmit} disabled={availableWords.length > 0} className="w-full md:w-auto px-8 mx-auto">
                                Periksa Jawaban
                            </Button>
                        )}
                    </div>
                );

            default:
                return null;
        }
    };

    const isExerciseComplete = () => {
        if (currentExercise.type === 'matching') {
            return Object.keys(matchedPairs).length === currentExercise.data?.pairs?.length;
        }
        return showResult;
    };

    return (
        <div className="flex flex-col gap-6 py-4 w-full h-full max-w-3xl mx-auto overflow-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        📝 Latihan Interaktif
                    </h2>
                    <p className="text-sm text-gray-500 font-medium ml-8">{languageInfo?.nameId}</p>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                    {currentIndex + 1} <span className="text-primary/40">/</span> {exerciseList.length}
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
                <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${selectedCategory === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                >
                    📚 Semua ({allExercises.length})
                </button>
                {availableCategories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${selectedCategory === cat
                            ? 'bg-primary text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <span className="flex items-center gap-1">{categoryIcons[cat]} {categoryLabels[cat]} ({allExercises.filter(e => e.category === cat).length})</span>
                    </button>
                ))}
            </div>

            {/* Exercise Card */}
            <Card className="flex-1 min-h-[400px]">
                <CardBody className="p-6 md:p-8 flex flex-col h-full gap-6">
                    {/* Level Badge */}
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">
                            {currentExercise.level}
                        </span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-bold">
                            <span className="flex items-center gap-1">{categoryIcons[currentExercise.category]} {categoryLabels[currentExercise.category]}</span>
                        </span>
                    </div>

                    <p className="text-lg font-medium text-gray-700 border-l-4 border-primary pl-4 py-1">
                        {currentExercise.question}
                    </p>

                    <div className="flex-1 flex flex-col justify-center">
                        {renderExerciseContent()}
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                        <Button variant="ghost" onClick={handleReset} leftIcon={<Shuffle size={18} className="text-gray-400" />}>
                            <span className="text-gray-500">Mulai Ulang</span>
                        </Button>
                        {isExerciseComplete() && (
                            <Button onClick={handleNext} rightIcon={<ArrowRight size={18} />} className="shadow-sm">
                                {currentIndex < exerciseList.length - 1 ? 'Lanjut' : 'Selesai'}
                            </Button>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
