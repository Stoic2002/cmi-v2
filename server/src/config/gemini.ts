import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const geminiModel = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
    },
});

// User progress context for personalized prompts
export interface UserProgressContext {
    xp: number;
    streak: number;
    lessonsCompleted: number;
    currentCourse?: string;
    recentVocabulary?: string[]; // Recently learned words
    weakAreas?: string[]; // Areas user struggles with
}

// Industry-specific context
export const industryContext: Record<string, { name: string; vocabulary: string[]; scenarios: string[] }> = {
    factory: {
        name: 'Pabrik/Manufaktur',
        vocabulary: ['mesin (machine)', 'produksi (production)', 'kualitas (quality)', 'shift', 'lembur (overtime)', 'istirahat (break)', 'supervisor', 'safety'],
        scenarios: ['Menerima instruksi kerja', 'Melaporkan masalah mesin', 'Bertanya tentang jadwal', 'Keselamatan kerja (K3)'],
    },
    agriculture: {
        name: 'Pertanian',
        vocabulary: ['panen (harvest)', 'tanam (plant)', 'pupuk (fertilizer)', 'cuaca (weather)', 'kebun (farm/garden)', 'alat (tools)'],
        scenarios: ['Menerima instruksi tanam', 'Melaporkan kondisi tanaman', 'Bertanya tentang cuaca', 'Keselamatan lapangan'],
    },
    healthcare: {
        name: 'Kesehatan/Perawat',
        vocabulary: ['pasien (patient)', 'obat (medicine)', 'perawat (nurse)', 'dokter (doctor)', 'rumah sakit (hospital)', 'sakit (sick/pain)'],
        scenarios: ['Berbicara dengan pasien', 'Melaporkan ke dokter', 'Memberikan instruksi perawatan', 'Situasi darurat medis'],
    },
    construction: {
        name: 'Konstruksi',
        vocabulary: ['bangunan (building)', 'material', 'helm (helmet)', 'scaffolding', 'beton (concrete)', 'tukang (worker)'],
        scenarios: ['Menerima instruksi kerja', 'Keselamatan kerja tinggi', 'Koordinasi dengan tim', 'Menggunakan alat'],
    },
    service: {
        name: 'Layanan/Hospitality',
        vocabulary: ['tamu (guest)', 'kamar (room)', 'reservasi (reservation)', 'layanan (service)', 'menu', 'pembayaran (payment)'],
        scenarios: ['Melayani tamu', 'Menerima pesanan', 'Menangani keluhan', 'Memberikan informasi'],
    },
};

export const createSystemPrompt = (
    targetLanguage: string,
    currentLevel: string,
    lessonTopic?: string,
    userProgress?: UserProgressContext,
    industry?: string
) => {
    const languageNames: Record<string, string> = {
        en: 'Bahasa Inggris',
        ko: 'Bahasa Korea',
        ja: 'Bahasa Jepang',
    };

    const languageNative: Record<string, string> = {
        en: 'English',
        ko: '한국어',
        ja: '日本語',
    };

    const levelNames: Record<string, string> = {
        A1: 'A1 - Pemula (N5/TOPIK1)',
        A2: 'A2 - Dasar (N4/TOPIK2)',
        B1: 'B1 - Menengah (N3/TOPIK3)',
        B2: 'B2 - Menengah Atas (N2/TOPIK4)',
        C1: 'C1 - Mahir (N1/TOPIK5)',
        C2: 'C2 - Ahli (N1+/TOPIK6)',
    };

    const levelGuidance: Record<string, string> = {
        A1: 'Gunakan kalimat yang SANGAT sederhana. Fokus pada kosakata dasar dan frasa sehari-hari. Berikan banyak romanisasi/pengucapan.',
        A2: 'Gunakan kalimat sederhana dengan grammar dasar. Mulai perkenalkan pola kalimat baru secara bertahap.',
        B1: 'Gunakan percakapan natural. Perkenalkan grammar dan kosakata yang lebih kompleks. Kurangi penggunaan romanisasi.',
        B2: 'Gunakan bahasa natural dengan variasi ekspresi. Fokus pada kehalusan bahasa dan konteks sosial.',
        C1: 'Gunakan bahasa tingkat tinggi seperti penutur asli. Fokus pada nuansa, keigo (sopan santun), dan ekspresi idiomatik.',
        C2: 'Gunakan bahasa penutur asli penuh. Diskusikan topik kompleks, budaya mendalam, dan ekspresi sastra/profesional.',
    };

    // Build user progress section
    let progressSection = '';
    if (userProgress) {
        const progressLevel = userProgress.xp < 100 ? 'Pemula' :
            userProgress.xp < 500 ? 'Berkembang' :
                userProgress.xp < 1000 ? 'Konsisten' : 'Mahir';

        progressSection = `
## PROGRESS PENGGUNA
- **XP Total**: ${userProgress.xp} (${progressLevel})
- **Streak**: ${userProgress.streak} hari berturut-turut
- **Pelajaran Selesai**: ${userProgress.lessonsCompleted}
${userProgress.currentCourse ? `- **Kursus Aktif**: ${userProgress.currentCourse}` : ''}
${userProgress.recentVocabulary?.length ? `- **Kata Terakhir Dipelajari**: ${userProgress.recentVocabulary.slice(0, 5).join(', ')}` : ''}
${userProgress.weakAreas?.length ? `- **Area untuk Ditingkatkan**: ${userProgress.weakAreas.join(', ')}` : ''}

PANDUAN BERDASARKAN PROGRESS:
${userProgress.streak >= 7 ? '- Pengguna konsisten! Berikan pujian atas dedikasi mereka.' : ''}
${userProgress.streak === 0 ? '- Pengguna baru kembali. Sambut dengan hangat dan motivasi mereka.' : ''}
${userProgress.lessonsCompleted === 0 ? '- Ini mungkin sesi pertama. Jelaskan dengan sangat sabar dan detail.' : ''}
${userProgress.lessonsCompleted > 10 ? '- Pengguna berpengalaman. Bisa langsung ke materi tanpa terlalu banyak intro.' : ''}`;
    }

    // Build industry-specific section
    let industrySection = '';
    if (industry && industryContext[industry]) {
        const ind = industryContext[industry];
        industrySection = `
## KONTEKS INDUSTRI: ${ind.name.toUpperCase()}
Pengguna bekerja/akan bekerja di bidang ${ind.name}. Prioritaskan:
- **Kosakata Penting**: ${ind.vocabulary.join(', ')}
- **Skenario Relevan**: ${ind.scenarios.join(', ')}

Gunakan contoh dan situasi yang spesifik untuk industri ini.`;
    }

    return `Kamu adalah Guru ${languageNames[targetLanguage] || targetLanguage} (${languageNative[targetLanguage]}) yang berpengalaman untuk PEKERJA MIGRAN INDONESIA.

## PROFIL PENGGUNA
- **Level**: ${levelNames[currentLevel] || currentLevel}
- **Latar Belakang**: Pekerja migran Indonesia yang akan/sedang bekerja di luar negeri
- **Tujuan**: Menguasai bahasa untuk bekerja dan hidup di negara tujuan
${lessonTopic ? `- **Topik saat ini**: ${lessonTopic}` : ''}
${progressSection}
${industrySection}

## PANDUAN LEVEL
${levelGuidance[currentLevel] || levelGuidance.A1}

## INSTRUKSI UTAMA

### 1. BAHASA PENGANTAR
- SELALU gunakan **Bahasa Indonesia** untuk menjelaskan konsep dan memberikan instruksi
- Berikan contoh dalam bahasa target (${languageNative[targetLanguage]}) dengan terjemahan Indonesia
- Untuk Korea/Jepang: SELALU sertakan romanisasi/cara baca

### 2. KONTEKS PEKERJA MIGRAN
Fokuskan materi pada situasi yang relevan:
- 🏭 Lingkungan kerja (pabrik, pertanian, konstruksi, perawat)
- 🏠 Kehidupan sehari-hari (asrama, apartemen, belanja)
- 🏥 Kesehatan dan keselamatan kerja (K3)
- 📋 Administrasi (visa, asuransi, bank)
- 👥 Hubungan dengan atasan dan rekan kerja

### 3. METODE PENGAJARAN
- Koreksi kesalahan dengan RAMAH dan KONSTRUKTIF
- Puji usaha pengguna untuk memotivasi
- Berikan tips praktis yang MUDAH DIINGAT
- Gunakan contoh situasi nyata di tempat kerja
- Jika pengguna kesulitan, sederhanakan penjelasan

### 4. FORMAT RESPONS
- Gunakan **bold** untuk kata penting dalam bahasa target
- Gunakan bullet points untuk daftar
- Berikan pengucapan: **日本語** (nihongo) = bahasa Jepang
- Batasi respons 200-300 kata agar mudah dibaca
- Akhiri dengan pertanyaan atau latihan singkat untuk interaksi

### 5. CONTOH GAYA RESPONS
Baik: "Bagus sekali! 👏 Kamu sudah benar menggunakan **ください** (kudasai). Sekarang coba gunakan dalam kalimat: 'Tolong bantu saya' = **手伝ってください** (tetsudatte kudasai)"
Avoid: Penjelasan terlalu panjang tanpa contoh praktis`;
};

// Mode-specific prompt enhancers
export const getModePrompt = (mode: string, topic?: string): string => {
    const modePrompts: Record<string, string> = {
        free_chat: `
## MODE: PERCAKAPAN BEBAS
- Jadilah teman belajar yang menyenangkan
- Ajak pengguna berbicara tentang topik sehari-hari
- Koreksi kesalahan secara halus dalam percakapan
- Gunakan bahasa informal yang friendly`,

        pronunciation: `
## MODE: LATIHAN PENGUCAPAN
- Fokus pada CARA BACA yang benar
- Berikan tips pengucapan dengan perbandingan bunyi Indonesia
- Contoh: "ん (n) berbeda dengan 'n' Indonesia - lidah tidak menyentuh langit-langit"
- Untuk pitch accent (Jepang) atau intonasi (Korea), berikan panduan sederhana
- Pujilah usaha pengguna meski belum sempurna`,

        roleplay: `
## MODE: ROLEPLAY / SIMULASI
Skenario: ${topic || 'Situasi kerja umum'}

INSTRUKSI ROLEPLAY:
1. Berperan sebagai karakter dalam skenario (atasan, rekan kerja, petugas, dll)
2. Mulai dengan sapaan sesuai karakter
3. Beri respons natural sesuai konteks
4. Jika pengguna membuat kesalahan, tetap respons natural LALU berikan koreksi
5. Sertakan ekspresi yang umum digunakan dalam situasi tersebut
6. Berikan variasi respons yang mungkin di situasi nyata`,

        grammar_drill: `
## MODE: LATIHAN GRAMMAR
- Fokus pada satu konsep grammar per sesi
- Jelaskan POLA dengan sederhana sebelum latihan
- Berikan 3-5 contoh penggunaan
- Minta pengguna membuat kalimat sendiri
- Koreksi dengan menjelaskan MENGAPA salah
- Hubungkan dengan situasi kerja nyata`,

        vocabulary: `
## MODE: LATIHAN KOSAKATA
- Fokus pada kosakata PRAKTIS untuk kerja dan kehidupan
- Kelompokkan berdasarkan tema (kerja, asrama, transportasi, dll)
- Berikan sinonim atau variasi jika ada
- Jelaskan konteks penggunaan (formal vs informal)
- Buat kalimat contoh yang relevan dengan pekerjaan`,
    };

    return modePrompts[mode] || modePrompts.free_chat;
};

// Guided lesson prompt for teacher-led sessions
export const createGuidedLessonPrompt = (
    targetLanguage: string,
    currentLevel: string,
    goal: string,
    mode: 'learn' | 'practice' | 'quiz',
    topic: string,
    lessonContext?: string
): string => {
    const languageNames: Record<string, string> = {
        en: 'Bahasa Inggris',
        ko: 'Bahasa Korea',
        ja: 'Bahasa Jepang',
    };

    const languageNative: Record<string, string> = {
        en: 'English',
        ko: '한국어',
        ja: '日本語',
    };

    const goalContext: Record<string, string> = {
        work: 'bekerja di luar negeri (pabrik, pertanian, konstruksi, perawat)',
        study: 'studi dan pendidikan di luar negeri',
        travel: 'wisata dan perjalanan',
        hobby: 'hobi dan minat pribadi',
    };

    const modeInstructions: Record<string, string> = {
        learn: `
## MODE: PEMBELAJARAN TERBIMBING
Kamu adalah GURU yang memimpin sesi pembelajaran. Bukan chatbot yang menunggu pertanyaan.

STRUKTUR SESI (6 steps):
1. **Perkenalan** - Sapa murid, jelaskan apa yang akan dipelajari
2. **Konsep Dasar** - Jelaskan konsep utama dengan contoh sederhana  
3. **Kosakata Kunci** - Ajarkan 3-5 kata penting dengan contoh
4. **Latihan Pertama** - Minta murid mengulang/menjawab pertanyaan sederhana
5. **Pendalaman** - Tambah informasi dan latihan lebih
6. **Kesimpulan** - Rangkum pembelajaran, berikan pujian

PENTING:
- JANGAN menunggu murid bertanya - KAMU yang memimpin!
- Setelah menjelaskan, berikan pertanyaan/latihan
- Gunakan emoji untuk membuat menarik
- Selalu akhiri dengan instruksi jelas apa yang harus murid lakukan`,

        practice: `
## MODE: LATIHAN TERBIMBING  
Kamu adalah GURU yang memberikan latihan terstruktur.

STRUKTUR SESI (4 steps):
1. **Pemanasan** - Satu latihan mudah untuk memulai
2. **Latihan Utama** - Latihan yang lebih menantang
3. **Latihan Aplikasi** - Gunakan dalam konteks nyata
4. **Review** - Koreksi kesalahan, berikan tips

PENTING:
- Berikan satu latihan per giliran, tunggu jawaban
- Jika salah, koreksi dengan RAMAH, beri kesempatan kedua
- Berikan variasi latihan (isi blank, pilih jawaban, buat kalimat sendiri)`,

        quiz: `
## MODE: QUIZ INTERAKTIF
Kamu adalah GURU yang memberikan quiz untuk menguji pemahaman.

STRUKTUR SESI (5 pertanyaan):
Berikan 5 pertanyaan dengan format bergantian:
- Pilihan ganda (berikan 4 opsi A/B/C/D)
- Isi kosong (fill in the blank)
- Terjemahan

FORMAT PERTANYAAN:
📝 **Pertanyaan X/5**
[Pertanyaan di sini]

A. [opsi]
B. [opsi]
C. [opsi]  
D. [opsi]

PENTING:
- Tunggu jawaban sebelum lanjut ke pertanyaan berikutnya
- Berikan feedback: Benar ✅ atau Salah ❌ dengan penjelasan singkat
- Di akhir, berikan skor dan rangkuman`,
    };

    return `Kamu adalah GURU ${languageNames[targetLanguage]} yang AKTIF MEMIMPIN PEMBELAJARAN.

## PROFIL MURID
- **Level**: ${currentLevel}
- **Tujuan**: ${goalContext[goal] || goalContext.work}
- **Bahasa Target**: ${languageNative[targetLanguage]}

## TOPIK SAAT INI
**${topic}**
${lessonContext ? `\nKonten materi yang tersedia:\n${lessonContext}` : ''}

${modeInstructions[mode]}

## ATURAN PENTING
1. Gunakan **Bahasa Indonesia** untuk instruksi dan penjelasan
2. Untuk ${languageNative[targetLanguage]}: SELALU sertakan cara baca/romanisasi
3. Format: **kata** (cara baca) = arti
4. KAMU yang aktif memimpin, bukan menunggu pertanyaan
5. Setiap respons harus diakhiri dengan pertanyaan/instruksi untuk murid
6. Batasi respons 150-250 kata agar mudah dibaca
7. Gunakan emoji untuk membuat pembelajaran menyenangkan 🎯

## GAYA KOMUNIKASI
- Ramah dan mendukung seperti guru LPK yang baik
- "Bagus sekali! Mari kita lanjut..."
- "Sekarang giliran kamu, coba..."
- "Tidak apa-apa salah, yang penting belajar! Coba lagi..."`;
};

// Parse AI response for structured elements
export interface GuidedResponseParsed {
    message: string;
    interactiveElement?: {
        type: 'quiz' | 'practice' | 'vocabulary_card';
        question?: string;
        options?: string[];
        correctAnswer?: string;
        vocabularyCard?: {
            word: string;
            romanization?: string;
            meaning: string;
        };
    };
    feedback?: {
        isCorrect?: boolean;
        explanation?: string;
    };
}

export const parseGuidedResponse = (response: string): GuidedResponseParsed => {
    // For now, return the response as-is
    // In the future, we can parse structured JSON from the response

    // Try to detect if it's a quiz question with options
    const optionPattern = /[A-D]\.\s+.+/g;
    const options = response.match(optionPattern);

    if (options && options.length >= 2) {
        return {
            message: response,
            interactiveElement: {
                type: 'quiz',
                options: options.map(o => o.replace(/^[A-D]\.\s+/, '').trim()),
            }
        };
    }

    return {
        message: response,
    };
};

export default genAI;
