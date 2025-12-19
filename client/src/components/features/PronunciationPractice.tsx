import React from 'react';
import { Mic, MicOff, Volume2, RefreshCw, CheckCircle, XCircle, ChevronLeft, ChevronRight, Hand, Briefcase, AlertTriangle, Hash, Home } from 'lucide-react';
import { Button, Card, CardBody } from '../../components/common';
import { useAuthStore } from '../../stores';
import { LANGUAGES } from '../../utils/constants';

interface PracticeWord {
    id: string;
    word: string;
    romanization?: string;
    meaning: string;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
    tips?: string;
}

// ============================================
// JAPANESE (日本語) - 50+ words
// ============================================
const japaneseWords: PracticeWord[] = [
    // Greetings (Salam & Sapaan)
    { id: 'ja-g1', word: 'おはようございます', romanization: 'Ohayou gozaimasu', meaning: 'Selamat pagi', difficulty: 'easy', category: 'greetings' },
    { id: 'ja-g2', word: 'こんにちは', romanization: 'Konnichiwa', meaning: 'Halo/Selamat siang', difficulty: 'easy', category: 'greetings' },
    { id: 'ja-g3', word: 'こんばんは', romanization: 'Konbanwa', meaning: 'Selamat malam', difficulty: 'easy', category: 'greetings' },
    { id: 'ja-g4', word: 'さようなら', romanization: 'Sayounara', meaning: 'Selamat tinggal', difficulty: 'easy', category: 'greetings' },
    { id: 'ja-g5', word: 'お疲れ様です', romanization: 'Otsukaresama desu', meaning: 'Terima kasih atas kerja kerasnya', difficulty: 'medium', category: 'greetings', tips: 'Digunakan saat pulang kerja atau setelah menyelesaikan tugas' },
    { id: 'ja-g6', word: 'お先に失礼します', romanization: 'Osaki ni shitsurei shimasu', meaning: 'Permisi, saya duluan', difficulty: 'hard', category: 'greetings', tips: 'Digunakan saat pulang lebih dulu dari rekan kerja' },
    { id: 'ja-g7', word: 'よろしくお願いします', romanization: 'Yoroshiku onegaishimasu', meaning: 'Mohon bantuannya', difficulty: 'medium', category: 'greetings' },
    { id: 'ja-g8', word: 'ありがとうございます', romanization: 'Arigatou gozaimasu', meaning: 'Terima kasih (formal)', difficulty: 'easy', category: 'greetings' },
    { id: 'ja-g9', word: 'すみません', romanization: 'Sumimasen', meaning: 'Permisi/Maaf', difficulty: 'easy', category: 'greetings' },
    { id: 'ja-g10', word: '失礼します', romanization: 'Shitsurei shimasu', meaning: 'Permisi (masuk/keluar ruangan)', difficulty: 'medium', category: 'greetings' },

    // Work Instructions (Instruksi Kerja)
    { id: 'ja-w1', word: 'ここに置いてください', romanization: 'Koko ni oite kudasai', meaning: 'Tolong taruh di sini', difficulty: 'medium', category: 'work' },
    { id: 'ja-w2', word: '手伝ってください', romanization: 'Tetsudatte kudasai', meaning: 'Tolong bantu', difficulty: 'easy', category: 'work' },
    { id: 'ja-w3', word: '確認してください', romanization: 'Kakunin shite kudasai', meaning: 'Tolong periksa', difficulty: 'medium', category: 'work' },
    { id: 'ja-w4', word: 'もう一度お願いします', romanization: 'Mou ichido onegaishimasu', meaning: 'Tolong ulangi sekali lagi', difficulty: 'medium', category: 'work' },
    { id: 'ja-w5', word: 'わかりました', romanization: 'Wakarimashita', meaning: 'Saya mengerti', difficulty: 'easy', category: 'work' },
    { id: 'ja-w6', word: 'すぐやります', romanization: 'Sugu yarimasu', meaning: 'Saya akan segera melakukannya', difficulty: 'medium', category: 'work' },
    { id: 'ja-w7', word: '終わりました', romanization: 'Owarimashita', meaning: 'Sudah selesai', difficulty: 'easy', category: 'work' },
    { id: 'ja-w8', word: '休憩してください', romanization: 'Kyuukei shite kudasai', meaning: 'Silakan istirahat', difficulty: 'medium', category: 'work' },
    { id: 'ja-w9', word: 'これは何ですか', romanization: 'Kore wa nan desu ka', meaning: 'Ini apa?', difficulty: 'easy', category: 'work' },
    { id: 'ja-w10', word: 'どこに持っていきますか', romanization: 'Doko ni motte ikimasu ka', meaning: 'Bawa kemana?', difficulty: 'hard', category: 'work' },

    // Safety (Keselamatan Kerja - K3)
    { id: 'ja-s1', word: '危ない！', romanization: 'Abunai!', meaning: 'Bahaya!', difficulty: 'easy', category: 'safety', tips: 'Teriak keras saat ada bahaya!' },
    { id: 'ja-s2', word: '気をつけて', romanization: 'Ki wo tsukete', meaning: 'Hati-hati', difficulty: 'easy', category: 'safety' },
    { id: 'ja-s3', word: 'ヘルメットをかぶってください', romanization: 'Herumetto wo kabutte kudasai', meaning: 'Tolong pakai helm', difficulty: 'hard', category: 'safety' },
    { id: 'ja-s4', word: '安全第一', romanization: 'Anzen daiichi', meaning: 'Keselamatan utama', difficulty: 'medium', category: 'safety' },
    { id: 'ja-s5', word: '止まれ！', romanization: 'Tomare!', meaning: 'Berhenti!', difficulty: 'easy', category: 'safety' },
    { id: 'ja-s6', word: '消火器はどこですか', romanization: 'Shoukaki wa doko desu ka', meaning: 'Di mana alat pemadam?', difficulty: 'hard', category: 'safety' },
    { id: 'ja-s7', word: '逃げてください', romanization: 'Nigete kudasai', meaning: 'Tolong mengungsi', difficulty: 'medium', category: 'safety' },
    { id: 'ja-s8', word: '触らないでください', romanization: 'Sawaranaide kudasai', meaning: 'Jangan disentuh', difficulty: 'medium', category: 'safety' },
    { id: 'ja-s9', word: '手袋をしてください', romanization: 'Tebukuro wo shite kudasai', meaning: 'Tolong pakai sarung tangan', difficulty: 'medium', category: 'safety' },
    { id: 'ja-s10', word: '救急車を呼んでください', romanization: 'Kyuukyuusha wo yonde kudasai', meaning: 'Tolong panggil ambulans', difficulty: 'hard', category: 'safety' },

    // Numbers & Time (Angka & Waktu)
    { id: 'ja-n1', word: '一つ', romanization: 'Hitotsu', meaning: 'Satu (benda)', difficulty: 'easy', category: 'numbers' },
    { id: 'ja-n2', word: '二つ', romanization: 'Futatsu', meaning: 'Dua (benda)', difficulty: 'easy', category: 'numbers' },
    { id: 'ja-n3', word: '三つ', romanization: 'Mittsu', meaning: 'Tiga (benda)', difficulty: 'easy', category: 'numbers' },
    { id: 'ja-n4', word: '何時ですか', romanization: 'Nanji desu ka', meaning: 'Jam berapa?', difficulty: 'easy', category: 'numbers' },
    { id: 'ja-n5', word: '今日', romanization: 'Kyou', meaning: 'Hari ini', difficulty: 'easy', category: 'numbers' },
    { id: 'ja-n6', word: '明日', romanization: 'Ashita', meaning: 'Besok', difficulty: 'easy', category: 'numbers' },
    { id: 'ja-n7', word: '来週', romanization: 'Raishuu', meaning: 'Minggu depan', difficulty: 'medium', category: 'numbers' },
    { id: 'ja-n8', word: '午前中', romanization: 'Gozenchuu', meaning: 'Pagi hari', difficulty: 'medium', category: 'numbers' },
    { id: 'ja-n9', word: '午後', romanization: 'Gogo', meaning: 'Sore hari', difficulty: 'easy', category: 'numbers' },
    { id: 'ja-n10', word: '百', romanization: 'Hyaku', meaning: 'Seratus', difficulty: 'easy', category: 'numbers' },

    // Daily Life (Kehidupan Sehari-hari)
    { id: 'ja-d1', word: 'いただきます', romanization: 'Itadakimasu', meaning: 'Selamat makan', difficulty: 'easy', category: 'daily', tips: 'Diucapkan sebelum makan' },
    { id: 'ja-d2', word: 'ごちそうさまでした', romanization: 'Gochisousama deshita', meaning: 'Terima kasih atas makanannya', difficulty: 'medium', category: 'daily', tips: 'Diucapkan setelah makan' },
    { id: 'ja-d3', word: 'お腹が空きました', romanization: 'Onaka ga sukimashita', meaning: 'Saya lapar', difficulty: 'medium', category: 'daily' },
    { id: 'ja-d4', word: '疲れました', romanization: 'Tsukaremashita', meaning: 'Saya lelah', difficulty: 'easy', category: 'daily' },
    { id: 'ja-d5', word: '具合が悪いです', romanization: 'Guai ga warui desu', meaning: 'Saya tidak enak badan', difficulty: 'medium', category: 'daily' },
    { id: 'ja-d6', word: 'トイレはどこですか', romanization: 'Toire wa doko desu ka', meaning: 'Di mana toilet?', difficulty: 'easy', category: 'daily' },
    { id: 'ja-d7', word: 'いくらですか', romanization: 'Ikura desu ka', meaning: 'Berapa harganya?', difficulty: 'easy', category: 'daily' },
    { id: 'ja-d8', word: '電話番号を教えてください', romanization: 'Denwa bangou wo oshiete kudasai', meaning: 'Tolong beri tahu nomor telepon', difficulty: 'hard', category: 'daily' },
    { id: 'ja-d9', word: '住所はどこですか', romanization: 'Juusho wa doko desu ka', meaning: 'Alamatnya di mana?', difficulty: 'medium', category: 'daily' },
    { id: 'ja-d10', word: '日本語がわかりません', romanization: 'Nihongo ga wakarimasen', meaning: 'Saya tidak mengerti bahasa Jepang', difficulty: 'medium', category: 'daily' },
];

// ============================================
// KOREAN (한국어) - 50+ words
// ============================================
const koreanWords: PracticeWord[] = [
    // Greetings
    { id: 'ko-g1', word: '안녕하세요', romanization: 'Annyeonghaseyo', meaning: 'Halo', difficulty: 'easy', category: 'greetings' },
    { id: 'ko-g2', word: '감사합니다', romanization: 'Gamsahamnida', meaning: 'Terima kasih', difficulty: 'easy', category: 'greetings' },
    { id: 'ko-g3', word: '죄송합니다', romanization: 'Joesonghamnida', meaning: 'Maaf', difficulty: 'medium', category: 'greetings' },
    { id: 'ko-g4', word: '안녕히 가세요', romanization: 'Annyeonghi gaseyo', meaning: 'Selamat tinggal (kpd yg pergi)', difficulty: 'medium', category: 'greetings' },
    { id: 'ko-g5', word: '안녕히 계세요', romanization: 'Annyeonghi gyeseyo', meaning: 'Selamat tinggal (kpd yg tinggal)', difficulty: 'medium', category: 'greetings' },
    { id: 'ko-g6', word: '수고하셨습니다', romanization: 'Sugohasyeosseumnida', meaning: 'Terima kasih atas kerja kerasnya', difficulty: 'hard', category: 'greetings' },
    { id: 'ko-g7', word: '잘 부탁드립니다', romanization: 'Jal butakdeurimnida', meaning: 'Mohon bantuannya', difficulty: 'hard', category: 'greetings' },
    { id: 'ko-g8', word: '실례합니다', romanization: 'Sillyehamnida', meaning: 'Permisi', difficulty: 'medium', category: 'greetings' },
    { id: 'ko-g9', word: '네', romanization: 'Ne', meaning: 'Ya', difficulty: 'easy', category: 'greetings' },
    { id: 'ko-g10', word: '아니요', romanization: 'Aniyo', meaning: 'Tidak', difficulty: 'easy', category: 'greetings' },

    // Work Instructions
    { id: 'ko-w1', word: '여기에 놓아 주세요', romanization: 'Yeogie noa juseyo', meaning: 'Tolong taruh di sini', difficulty: 'medium', category: 'work' },
    { id: 'ko-w2', word: '도와주세요', romanization: 'Dowajuseyo', meaning: 'Tolong bantu', difficulty: 'easy', category: 'work' },
    { id: 'ko-w3', word: '확인해 주세요', romanization: 'Hwaginhae juseyo', meaning: 'Tolong periksa', difficulty: 'medium', category: 'work' },
    { id: 'ko-w4', word: '다시 한번 말씀해 주세요', romanization: 'Dasi hanbeon malsseumhae juseyo', meaning: 'Tolong ulangi sekali lagi', difficulty: 'hard', category: 'work' },
    { id: 'ko-w5', word: '알겠습니다', romanization: 'Algessseumnida', meaning: 'Saya mengerti', difficulty: 'easy', category: 'work' },
    { id: 'ko-w6', word: '바로 하겠습니다', romanization: 'Baro hagessseumnida', meaning: 'Saya akan segera melakukannya', difficulty: 'medium', category: 'work' },
    { id: 'ko-w7', word: '끝났습니다', romanization: 'Kkeunnassseumnida', meaning: 'Sudah selesai', difficulty: 'easy', category: 'work' },
    { id: 'ko-w8', word: '쉬세요', romanization: 'Swiseyo', meaning: 'Silakan istirahat', difficulty: 'easy', category: 'work' },
    { id: 'ko-w9', word: '이게 뭐예요?', romanization: 'Ige mwoyeyo?', meaning: 'Ini apa?', difficulty: 'easy', category: 'work' },
    { id: 'ko-w10', word: '어디로 가져갈까요?', romanization: 'Eodiro gajyeogalkkayo?', meaning: 'Bawa kemana?', difficulty: 'hard', category: 'work' },

    // Safety
    { id: 'ko-s1', word: '위험해요!', romanization: 'Wiheomhaeyo!', meaning: 'Bahaya!', difficulty: 'easy', category: 'safety' },
    { id: 'ko-s2', word: '조심하세요', romanization: 'Josimhaseyo', meaning: 'Hati-hati', difficulty: 'easy', category: 'safety' },
    { id: 'ko-s3', word: '안전모를 쓰세요', romanization: 'Anjeonmoreul sseuseyo', meaning: 'Tolong pakai helm', difficulty: 'hard', category: 'safety' },
    { id: 'ko-s4', word: '안전제일', romanization: 'Anjeonjeil', meaning: 'Keselamatan utama', difficulty: 'medium', category: 'safety' },
    { id: 'ko-s5', word: '멈춰요!', romanization: 'Meomchweoyo!', meaning: 'Berhenti!', difficulty: 'easy', category: 'safety' },
    { id: 'ko-s6', word: '소화기 어디 있어요?', romanization: 'Sohwagi eodi isseoyo?', meaning: 'Di mana alat pemadam?', difficulty: 'hard', category: 'safety' },
    { id: 'ko-s7', word: '대피하세요', romanization: 'Daepihaseyo', meaning: 'Tolong mengungsi', difficulty: 'medium', category: 'safety' },
    { id: 'ko-s8', word: '만지지 마세요', romanization: 'Manjiji maseyo', meaning: 'Jangan disentuh', difficulty: 'medium', category: 'safety' },
    { id: 'ko-s9', word: '장갑을 끼세요', romanization: 'Janggabeul kkiseyo', meaning: 'Tolong pakai sarung tangan', difficulty: 'medium', category: 'safety' },
    { id: 'ko-s10', word: '119에 전화해 주세요', romanization: '119e jeonhwahae juseyo', meaning: 'Tolong hubungi 119 (darurat)', difficulty: 'hard', category: 'safety' },

    // Numbers & Time
    { id: 'ko-n1', word: '하나', romanization: 'Hana', meaning: 'Satu', difficulty: 'easy', category: 'numbers' },
    { id: 'ko-n2', word: '둘', romanization: 'Dul', meaning: 'Dua', difficulty: 'easy', category: 'numbers' },
    { id: 'ko-n3', word: '셋', romanization: 'Set', meaning: 'Tiga', difficulty: 'easy', category: 'numbers' },
    { id: 'ko-n4', word: '지금 몇 시예요?', romanization: 'Jigeum myeot siyeyo?', meaning: 'Jam berapa sekarang?', difficulty: 'medium', category: 'numbers' },
    { id: 'ko-n5', word: '오늘', romanization: 'Oneul', meaning: 'Hari ini', difficulty: 'easy', category: 'numbers' },
    { id: 'ko-n6', word: '내일', romanization: 'Naeil', meaning: 'Besok', difficulty: 'easy', category: 'numbers' },
    { id: 'ko-n7', word: '다음 주', romanization: 'Daeum ju', meaning: 'Minggu depan', difficulty: 'medium', category: 'numbers' },
    { id: 'ko-n8', word: '오전', romanization: 'Ojeon', meaning: 'Pagi hari', difficulty: 'easy', category: 'numbers' },
    { id: 'ko-n9', word: '오후', romanization: 'Ohu', meaning: 'Sore hari', difficulty: 'easy', category: 'numbers' },
    { id: 'ko-n10', word: '백', romanization: 'Baek', meaning: 'Seratus', difficulty: 'easy', category: 'numbers' },

    // Daily Life
    { id: 'ko-d1', word: '잘 먹겠습니다', romanization: 'Jal meokgessseumnida', meaning: 'Selamat makan', difficulty: 'medium', category: 'daily' },
    { id: 'ko-d2', word: '잘 먹었습니다', romanization: 'Jal meogeossseumnida', meaning: 'Terima kasih atas makanannya', difficulty: 'medium', category: 'daily' },
    { id: 'ko-d3', word: '배고파요', romanization: 'Baegopayo', meaning: 'Saya lapar', difficulty: 'easy', category: 'daily' },
    { id: 'ko-d4', word: '피곤해요', romanization: 'Pigonhaeyo', meaning: 'Saya lelah', difficulty: 'easy', category: 'daily' },
    { id: 'ko-d5', word: '아파요', romanization: 'Apayo', meaning: 'Saya sakit', difficulty: 'easy', category: 'daily' },
    { id: 'ko-d6', word: '화장실이 어디예요?', romanization: 'Hwajangsiri eodiyeyo?', meaning: 'Di mana toilet?', difficulty: 'medium', category: 'daily' },
    { id: 'ko-d7', word: '얼마예요?', romanization: 'Eolmayeyo?', meaning: 'Berapa harganya?', difficulty: 'easy', category: 'daily' },
    { id: 'ko-d8', word: '전화번호를 알려주세요', romanization: 'Jeonhwabeonhoreul allyeojuseyo', meaning: 'Tolong beri tahu nomor telepon', difficulty: 'hard', category: 'daily' },
    { id: 'ko-d9', word: '주소가 어디예요?', romanization: 'Jusoga eodiyeyo?', meaning: 'Alamatnya di mana?', difficulty: 'medium', category: 'daily' },
    { id: 'ko-d10', word: '한국어를 못해요', romanization: 'Hangugeoreul mothaeyo', meaning: 'Saya tidak bisa bahasa Korea', difficulty: 'medium', category: 'daily' },
];

// ============================================
// ENGLISH - 50+ words
// ============================================
const englishWords: PracticeWord[] = [
    // Greetings
    { id: 'en-g1', word: 'Good morning', meaning: 'Selamat pagi', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g2', word: 'Good afternoon', meaning: 'Selamat siang', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g3', word: 'Good evening', meaning: 'Selamat malam', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g4', word: 'Nice to meet you', meaning: 'Senang bertemu Anda', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g5', word: 'How are you?', meaning: 'Apa kabar?', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g6', word: "I'm fine, thank you", meaning: 'Saya baik, terima kasih', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g7', word: 'Excuse me', meaning: 'Permisi', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g8', word: "I'm sorry", meaning: 'Maaf', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g9', word: 'Thank you very much', meaning: 'Terima kasih banyak', difficulty: 'easy', category: 'greetings' },
    { id: 'en-g10', word: "You're welcome", meaning: 'Sama-sama', difficulty: 'easy', category: 'greetings' },

    // Work Instructions
    { id: 'en-w1', word: 'Please put it here', meaning: 'Tolong taruh di sini', difficulty: 'easy', category: 'work' },
    { id: 'en-w2', word: 'Can you help me?', meaning: 'Bisakah kamu membantu saya?', difficulty: 'easy', category: 'work' },
    { id: 'en-w3', word: 'Please check this', meaning: 'Tolong periksa ini', difficulty: 'easy', category: 'work' },
    { id: 'en-w4', word: 'Could you repeat that?', meaning: 'Bisakah Anda mengulangnya?', difficulty: 'medium', category: 'work' },
    { id: 'en-w5', word: 'I understand', meaning: 'Saya mengerti', difficulty: 'easy', category: 'work' },
    { id: 'en-w6', word: "I'll do it right away", meaning: 'Saya akan segera melakukannya', difficulty: 'medium', category: 'work' },
    { id: 'en-w7', word: "It's done", meaning: 'Sudah selesai', difficulty: 'easy', category: 'work' },
    { id: 'en-w8', word: 'Take a break', meaning: 'Istirahat dulu', difficulty: 'easy', category: 'work' },
    { id: 'en-w9', word: 'What is this?', meaning: 'Ini apa?', difficulty: 'easy', category: 'work' },
    { id: 'en-w10', word: 'Where should I put this?', meaning: 'Di mana saya harus menaruh ini?', difficulty: 'medium', category: 'work' },

    // Safety
    { id: 'en-s1', word: 'Danger!', meaning: 'Bahaya!', difficulty: 'easy', category: 'safety' },
    { id: 'en-s2', word: 'Be careful', meaning: 'Hati-hati', difficulty: 'easy', category: 'safety' },
    { id: 'en-s3', word: 'Please wear a helmet', meaning: 'Tolong pakai helm', difficulty: 'medium', category: 'safety' },
    { id: 'en-s4', word: 'Safety first', meaning: 'Keselamatan utama', difficulty: 'easy', category: 'safety' },
    { id: 'en-s5', word: 'Stop!', meaning: 'Berhenti!', difficulty: 'easy', category: 'safety' },
    { id: 'en-s6', word: 'Where is the fire extinguisher?', meaning: 'Di mana alat pemadam?', difficulty: 'hard', category: 'safety' },
    { id: 'en-s7', word: 'Please evacuate', meaning: 'Tolong mengungsi', difficulty: 'medium', category: 'safety' },
    { id: 'en-s8', word: "Don't touch", meaning: 'Jangan disentuh', difficulty: 'easy', category: 'safety' },
    { id: 'en-s9', word: 'Wear your gloves', meaning: 'Pakai sarung tangan', difficulty: 'easy', category: 'safety' },
    { id: 'en-s10', word: 'Call an ambulance', meaning: 'Panggil ambulans', difficulty: 'medium', category: 'safety' },

    // Numbers & Time
    { id: 'en-n1', word: 'One', meaning: 'Satu', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n2', word: 'Two', meaning: 'Dua', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n3', word: 'Three', meaning: 'Tiga', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n4', word: 'What time is it?', meaning: 'Jam berapa?', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n5', word: 'Today', meaning: 'Hari ini', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n6', word: 'Tomorrow', meaning: 'Besok', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n7', word: 'Next week', meaning: 'Minggu depan', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n8', word: 'In the morning', meaning: 'Pagi hari', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n9', word: 'In the afternoon', meaning: 'Sore hari', difficulty: 'easy', category: 'numbers' },
    { id: 'en-n10', word: 'One hundred', meaning: 'Seratus', difficulty: 'easy', category: 'numbers' },

    // Daily Life
    { id: 'en-d1', word: "Let's eat", meaning: 'Mari makan', difficulty: 'easy', category: 'daily' },
    { id: 'en-d2', word: 'The food was delicious', meaning: 'Makanannya enak', difficulty: 'easy', category: 'daily' },
    { id: 'en-d3', word: "I'm hungry", meaning: 'Saya lapar', difficulty: 'easy', category: 'daily' },
    { id: 'en-d4', word: "I'm tired", meaning: 'Saya lelah', difficulty: 'easy', category: 'daily' },
    { id: 'en-d5', word: "I don't feel well", meaning: 'Saya tidak enak badan', difficulty: 'medium', category: 'daily' },
    { id: 'en-d6', word: 'Where is the toilet?', meaning: 'Di mana toilet?', difficulty: 'easy', category: 'daily' },
    { id: 'en-d7', word: 'How much is this?', meaning: 'Berapa harganya?', difficulty: 'easy', category: 'daily' },
    { id: 'en-d8', word: 'Can I have your phone number?', meaning: 'Boleh minta nomor telepon?', difficulty: 'medium', category: 'daily' },
    { id: 'en-d9', word: "What's your address?", meaning: 'Alamatnya di mana?', difficulty: 'easy', category: 'daily' },
    { id: 'en-d10', word: "I don't speak English well", meaning: 'Saya tidak lancar bahasa Inggris', difficulty: 'medium', category: 'daily' },
];

// Combine all words by language
const practiceWords: Record<string, PracticeWord[]> = {
    en: englishWords,
    ko: koreanWords,
    ja: japaneseWords,
};

// Category metadata with Lucide icons
const categoryIcons: Record<string, React.ReactNode> = {
    greetings: <Hand size={14} />,
    work: <Briefcase size={14} />,
    safety: <AlertTriangle size={14} />,
    numbers: <Hash size={14} />,
    daily: <Home size={14} />,
};

const categoryLabels: Record<string, string> = {
    greetings: 'Salam & Sapaan',
    work: 'Instruksi Kerja',
    safety: 'Keselamatan (K3)',
    numbers: 'Angka & Waktu',
    daily: 'Sehari-hari',
};

export const PronunciationPractice: React.FC = () => {
    const { user } = useAuthStore();
    const [isRecording, setIsRecording] = React.useState(false);
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [result, setResult] = React.useState<'correct' | 'incorrect' | null>(null);
    const [score, setScore] = React.useState({ correct: 0, total: 0 });
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
    const [masteredWords, setMasteredWords] = React.useState<Set<string>>(new Set());

    const language = user?.targetLanguage || 'en';
    const allWords = practiceWords[language] || practiceWords.en;

    // Filter words by category
    const words = selectedCategory === 'all'
        ? allWords
        : allWords.filter(w => w.category === selectedCategory);

    const currentWord = words[currentWordIndex] || words[0];
    const languageInfo = LANGUAGES[language as keyof typeof LANGUAGES];

    // Get unique categories from current language
    const availableCategories = Array.from(new Set(allWords.map(w => w.category)));

    const handlePlayAudio = () => {
        if ('speechSynthesis' in window) {
            setIsPlaying(true);
            const utterance = new SpeechSynthesisUtterance(currentWord.word);

            const langCode = language === 'ko' ? 'ko-KR' : language === 'ja' ? 'ja-JP' : 'en-AU';
            utterance.lang = langCode;
            utterance.rate = 0.8;

            utterance.onend = () => setIsPlaying(false);
            utterance.onerror = () => setIsPlaying(false);

            speechSynthesis.speak(utterance);
        }
    };

    const handleStartRecording = async () => {
        try {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                alert('Browser Anda tidak mendukung Speech Recognition. Gunakan Chrome untuk fitur ini.');
                return;
            }

            setIsRecording(true);
            setResult(null);

            const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
            const recognition = new SpeechRecognition();

            const langCode = language === 'ko' ? 'ko-KR' : language === 'ja' ? 'ja-JP' : 'en-AU';
            recognition.lang = langCode;
            recognition.interimResults = false;
            recognition.maxAlternatives = 3;

            recognition.onresult = (event: any) => {
                const results = event.results[0];
                let isCorrect = false;

                for (let i = 0; i < results.length; i++) {
                    const transcript = results[i].transcript.toLowerCase().trim();
                    const target = currentWord.word.toLowerCase().trim();

                    if (transcript === target ||
                        transcript.includes(target) ||
                        target.includes(transcript) ||
                        levenshteinDistance(transcript, target) <= 2) {
                        isCorrect = true;
                        break;
                    }
                }

                setResult(isCorrect ? 'correct' : 'incorrect');
                setScore(prev => ({
                    correct: prev.correct + (isCorrect ? 1 : 0),
                    total: prev.total + 1,
                }));

                // Track mastered words
                if (isCorrect) {
                    setMasteredWords(prev => new Set([...prev, currentWord.id]));
                }

                setIsRecording(false);
            };

            recognition.onerror = () => {
                setIsRecording(false);
                setResult('incorrect');
            };

            recognition.onend = () => {
                setIsRecording(false);
            };

            recognition.start();

            setTimeout(() => {
                if (recognition) {
                    recognition.stop();
                }
            }, 5000);

        } catch (error) {
            console.error('Speech recognition error:', error);
            setIsRecording(false);
        }
    };

    const handleNext = () => {
        if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex(prev => prev + 1);
            setResult(null);
        } else {
            setCurrentWordIndex(0);
            setResult(null);
        }
    };

    const handlePrev = () => {
        if (currentWordIndex > 0) {
            setCurrentWordIndex(prev => prev - 1);
            setResult(null);
        }
    };

    const handleReset = () => {
        setCurrentWordIndex(0);
        setResult(null);
        setScore({ correct: 0, total: 0 });
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentWordIndex(0);
        setResult(null);
    };

    const levenshteinDistance = (a: string, b: string): number => {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    };

    if (!currentWord) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-slate-500">Tidak ada kata untuk kategori ini.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 py-4 w-full h-full max-w-2xl mx-auto overflow-auto">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-1">
                    🎤 Latihan Pengucapan
                </h2>
                <p className="text-gray-500 font-medium text-sm">
                    Dengarkan dan ucapkan dalam {languageInfo?.nameId}
                </p>
                <div className="mt-2 flex items-center justify-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        Skor: {score.correct}/{score.total}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        Dikuasai: {masteredWords.size}/{allWords.length}
                    </span>
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
                    📚 Semua ({allWords.length})
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
                        <span className="flex items-center gap-1">{categoryIcons[cat]} {categoryLabels[cat]} ({allWords.filter(w => w.category === cat).length})</span>
                    </button>
                ))}
            </div>

            {/* Word Card */}
            <Card className="w-full relative overflow-visible border-none ring-1 ring-gray-100 shadow-xl bg-white/80 backdrop-blur-md">
                <CardBody className="p-8 flex flex-col items-center gap-6">
                    {/* Difficulty Badge */}
                    <div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${currentWord.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                            currentWord.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                            }`}
                    >
                        {currentWord.difficulty === 'easy' ? 'Mudah' : currentWord.difficulty === 'medium' ? 'Sedang' : 'Sulit'}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                        <span className="flex items-center gap-1">{categoryIcons[currentWord.category]} {categoryLabels[currentWord.category]}</span>
                    </div>

                    {/* Mastered indicator */}
                    {masteredWords.has(currentWord.id) && (
                        <div className="absolute top-12 right-4 text-green-500">
                            <CheckCircle size={20} />
                        </div>
                    )}

                    <div className="flex flex-col items-center text-center gap-2 mt-6">
                        <span className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {currentWord.word}
                        </span>
                        {currentWord.romanization && (
                            <span className="text-xl text-primary font-medium">
                                {currentWord.romanization}
                            </span>
                        )}
                        <p className="text-gray-500 font-medium text-lg mt-2">{currentWord.meaning}</p>

                        {/* Tips */}
                        {currentWord.tips && (
                            <p className="text-xs text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg mt-2 border border-amber-100">
                                💡 {currentWord.tips}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-center w-full mt-2">
                        <Button
                            variant="outline"
                            onClick={handlePlayAudio}
                            disabled={isPlaying}
                            leftIcon={<Volume2 size={20} />}
                            className="rounded-full px-6 hover:bg-gray-50"
                        >
                            {isPlaying ? 'Memutar...' : 'Dengarkan'}
                        </Button>
                    </div>
                </CardBody>
            </Card>

            {/* Recording Button */}
            <div className="flex justify-center w-full py-4">
                <button
                    className={`w-24 h-24 rounded-full flex flex-col items-center justify-center gap-2 transform transition-all duration-300 shadow-xl border-4 ${isRecording
                        ? 'bg-red-500 border-red-200 text-white scale-110 ring-4 ring-red-100 animate-pulse'
                        : result === 'correct'
                            ? 'bg-green-500 border-green-200 text-white hover:scale-105'
                            : result === 'incorrect'
                                ? 'bg-red-500 border-red-200 text-white hover:scale-105'
                                : 'bg-white border-primary text-primary hover:bg-primary/5 hover:scale-105'
                        }`}
                    onClick={handleStartRecording}
                    disabled={isRecording}
                >
                    {isRecording ? (
                        <>
                            <MicOff size={32} />
                            <span className="text-[10px] uppercase font-bold tracking-wide">Stop</span>
                        </>
                    ) : result === 'correct' ? (
                        <>
                            <CheckCircle size={32} />
                            <span className="text-[10px] uppercase font-bold tracking-wide">Benar!</span>
                        </>
                    ) : result === 'incorrect' ? (
                        <>
                            <XCircle size={32} />
                            <span className="text-[10px] uppercase font-bold tracking-wide">Coba Lagi</span>
                        </>
                    ) : (
                        <>
                            <Mic size={32} />
                            <span className="text-[10px] uppercase font-bold tracking-wide">Bicara</span>
                        </>
                    )}
                </button>
            </div>

            {/* Navigation */}
            <div className="w-full flex items-center justify-between mt-auto">
                <Button variant="ghost" onClick={handleReset} leftIcon={<RefreshCw size={18} />}>
                    Mulai Ulang
                </Button>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        onClick={handlePrev}
                        disabled={currentWordIndex === 0}
                        className="p-2"
                    >
                        <ChevronLeft size={20} />
                    </Button>

                    <span className="text-sm text-slate-500 font-medium min-w-[60px] text-center">
                        {currentWordIndex + 1} / {words.length}
                    </span>

                    <Button
                        variant="ghost"
                        onClick={handleNext}
                        className="p-2"
                    >
                        <ChevronRight size={20} />
                    </Button>
                </div>

                <Button onClick={handleNext}>
                    {currentWordIndex < words.length - 1 ? 'Lanjut' : 'Selesai'}
                </Button>
            </div>
        </div>
    );
};
