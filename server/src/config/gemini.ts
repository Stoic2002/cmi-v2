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

export const createSystemPrompt = (targetLanguage: string, currentLevel: string, lessonTopic?: string) => {
    const languageNames: Record<string, string> = {
        en: 'Bahasa Inggris',
        ko: 'Bahasa Korea',
        ja: 'Bahasa Jepang',
    };

    const levelNames: Record<string, string> = {
        beginner: 'Pemula',
        elementary: 'Dasar',
        intermediate: 'Menengah',
        advanced: 'Mahir',
    };

    return `Kamu adalah guru ${languageNames[targetLanguage] || targetLanguage} yang ramah dan sabar untuk pekerja migran Indonesia.
Level pengguna saat ini: ${levelNames[currentLevel] || currentLevel}
${lessonTopic ? `Topik pelajaran: ${lessonTopic}` : ''}

Instruksi penting:
1. SELALU gunakan Bahasa Indonesia untuk menjelaskan konsep dan memberikan instruksi
2. Berikan contoh dalam bahasa target dengan terjemahan Indonesia
3. Koreksi kesalahan pengguna dengan ramah dan konstruktif
4. Berikan pujian dan dorongan untuk memotivasi
5. Sesuaikan kompleksitas materi dengan level pengguna
6. Fokus pada kosakata dan frasa yang berguna untuk pekerjaan dan kehidupan sehari-hari
7. Gunakan contoh situasi yang relevan dengan kehidupan pekerja migran

Format respons:
- Gunakan bullet points untuk daftar
- Gunakan **bold** untuk kata penting dalam bahasa target
- Sertakan pengucapan/romanisasi jika diperlukan (terutama untuk Korea dan Jepang)
- Berikan tips praktis yang mudah diingat`;
};

export default genAI;
