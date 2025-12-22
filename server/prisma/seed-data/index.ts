// Index file for all CEFR course data
// Exports all courses organized by language and level (A1 → C2)

// A1 Courses
import { japaneseA1Courses } from './japanese-a1-course1';
import { japaneseA1Courses2to5 } from './japanese-a1-courses2-5';
import { japaneseA1Courses6to10 } from './japanese-a1-courses6-10';
import { koreanA1Courses1to5 } from './korean-a1-courses1-5';
import { koreanA1Courses6to10 } from './korean-a1-courses6-10';
import { englishA1Courses1to5 } from './english-a1-courses1-5';
import { englishA1Courses6to10 } from './english-a1-courses6-10';

// A2 Courses
import { japaneseA2Courses1to5 } from './japanese-a2-courses1-5';
import { japaneseA2Courses6to10 } from './japanese-a2-courses6-10';
import { koreanA2Courses1to5 } from './korean-a2-courses1-5';
import { koreanA2Courses6to10 } from './korean-a2-courses6-10';
import { englishA2Courses1to5 } from './english-a2-courses1-5';
import { englishA2Courses6to10 } from './english-a2-courses6-10';

// B1 Courses
import { japaneseB1Courses1to5 } from './japanese-b1-courses1-5';
import { japaneseB1Courses6to10 } from './japanese-b1-courses6-10';
import { koreanB1Courses1to5 } from './korean-b1-courses1-5';
import { koreanB1Courses6to10 } from './korean-b1-courses6-10';
import { englishB1Courses1to5 } from './english-b1-courses1-5';
import { englishB1Courses6to10 } from './english-b1-courses6-10';

// B2 Courses
import { japaneseB2Courses1to5 } from './japanese-b2-courses1-5';
import { japaneseB2Courses6to10 } from './japanese-b2-courses6-10';
import { koreanB2Courses1to5 } from './korean-b2-courses1-5';
import { koreanB2Courses6to10 } from './korean-b2-courses6-10';
import { englishB2Courses1to5 } from './english-b2-courses1-5';
import { englishB2Courses6to10 } from './english-b2-courses6-10';

// C1 Courses
import { japaneseC1Courses1to5 } from './japanese-c1-courses1-5';
import { japaneseC1Courses6to10 } from './japanese-c1-courses6-10';
import { koreanC1Courses1to5 } from './korean-c1-courses1-5';
import { koreanC1Courses6to10 } from './korean-c1-courses6-10';
import { englishC1Courses1to5 } from './english-c1-courses1-5';
import { englishC1Courses6to10 } from './english-c1-courses6-10';

// C2 Courses
import { japaneseC2Courses1to5 } from './japanese-c2-courses1-5';
import { japaneseC2Courses6to10 } from './japanese-c2-courses6-10';
import { koreanC2Courses1to5 } from './korean-c2-courses1-5';
import { koreanC2Courses6to10 } from './korean-c2-courses6-10';
import { englishC2Courses1to5 } from './english-c2-courses1-5';
import { englishC2Courses6to10 } from './english-c2-courses6-10';

// Japanese courses by level
export const allJapaneseA1Courses = [...japaneseA1Courses, ...japaneseA1Courses2to5, ...japaneseA1Courses6to10];
export const allJapaneseA2Courses = [...japaneseA2Courses1to5, ...japaneseA2Courses6to10];
export const allJapaneseB1Courses = [...japaneseB1Courses1to5, ...japaneseB1Courses6to10];
export const allJapaneseB2Courses = [...japaneseB2Courses1to5, ...japaneseB2Courses6to10];
export const allJapaneseC1Courses = [...japaneseC1Courses1to5, ...japaneseC1Courses6to10];
export const allJapaneseC2Courses = [...japaneseC2Courses1to5, ...japaneseC2Courses6to10];

// Korean courses by level
export const allKoreanA1Courses = [...koreanA1Courses1to5, ...koreanA1Courses6to10];
export const allKoreanA2Courses = [...koreanA2Courses1to5, ...koreanA2Courses6to10];
export const allKoreanB1Courses = [...koreanB1Courses1to5, ...koreanB1Courses6to10];
export const allKoreanB2Courses = [...koreanB2Courses1to5, ...koreanB2Courses6to10];
export const allKoreanC1Courses = [...koreanC1Courses1to5, ...koreanC1Courses6to10];
export const allKoreanC2Courses = [...koreanC2Courses1to5, ...koreanC2Courses6to10];

// English courses by level
export const allEnglishA1Courses = [...englishA1Courses1to5, ...englishA1Courses6to10];
export const allEnglishA2Courses = [...englishA2Courses1to5, ...englishA2Courses6to10];
export const allEnglishB1Courses = [...englishB1Courses1to5, ...englishB1Courses6to10];
export const allEnglishB2Courses = [...englishB2Courses1to5, ...englishB2Courses6to10];
export const allEnglishC1Courses = [...englishC1Courses1to5, ...englishC1Courses6to10];
export const allEnglishC2Courses = [...englishC2Courses1to5, ...englishC2Courses6to10];

// All courses by level
export const allA1Courses = [...allJapaneseA1Courses, ...allKoreanA1Courses, ...allEnglishA1Courses];
export const allA2Courses = [...allJapaneseA2Courses, ...allKoreanA2Courses, ...allEnglishA2Courses];
export const allB1Courses = [...allJapaneseB1Courses, ...allKoreanB1Courses, ...allEnglishB1Courses];
export const allB2Courses = [...allJapaneseB2Courses, ...allKoreanB2Courses, ...allEnglishB2Courses];
export const allC1Courses = [...allJapaneseC1Courses, ...allKoreanC1Courses, ...allEnglishC1Courses];
export const allC2Courses = [...allJapaneseC2Courses, ...allKoreanC2Courses, ...allEnglishC2Courses];

// All courses combined (180 total: 60 per language, 30 per level)
export const allCourses = [...allA1Courses, ...allA2Courses, ...allB1Courses, ...allB2Courses, ...allC1Courses, ...allC2Courses];

// CEFR Can-Do descriptors
export const cefrA1CanDo = {
    listening: 'Dapat memahami kata-kata familiar dan frasa sangat dasar.',
    reading: 'Dapat memahami nama-nama familiar, kata-kata, dan kalimat sangat sederhana.',
    speaking: 'Dapat menggunakan frasa dan kalimat sederhana.',
    writing: 'Dapat menulis kartu pos pendek dan mengisi formulir.',
};

export const cefrA2CanDo = {
    listening: 'Dapat memahami frasa dan ekspresi yang sering digunakan.',
    reading: 'Dapat membaca teks pendek dan sederhana.',
    speaking: 'Dapat berkomunikasi dalam tugas sederhana dan rutin.',
    writing: 'Dapat menulis catatan dan pesan pendek.',
};

export const cefrB1CanDo = {
    listening: 'Dapat memahami poin utama percakapan standar tentang topik familiar.',
    reading: 'Dapat memahami teks dengan bahasa sehari-hari.',
    speaking: 'Dapat menangani situasi yang mungkin muncul saat bepergian.',
    writing: 'Dapat menulis teks sederhana yang koheren.',
};

export const cefrB2CanDo = {
    listening: 'Dapat memahami presentasi panjang dan argumen kompleks.',
    reading: 'Dapat membaca artikel dan laporan tentang isu kontemporer.',
    speaking: 'Dapat berinteraksi dengan lancar dengan penutur asli.',
    writing: 'Dapat menulis esai atau laporan yang menyajikan argumen.',
};

export const cefrC1CanDo = {
    listening: 'Dapat memahami pidato panjang meskipun tidak terstruktur jelas.',
    reading: 'Dapat memahami teks panjang dan kompleks, termasuk sastra.',
    speaking: 'Dapat mengekspresikan diri dengan lancar dan spontan.',
    writing: 'Dapat menghasilkan teks yang jelas dan terstruktur dengan baik.',
};

export const cefrC2CanDo = {
    listening: 'Dapat memahami segala bentuk bahasa lisan dengan mudah.',
    reading: 'Dapat membaca semua bentuk bahasa tulis dengan mudah.',
    speaking: 'Dapat mengekspresikan diri secara spontan dengan presisi tinggi.',
    writing: 'Dapat menulis dalam gaya yang sesuai dengan pembaca yang dituju.',
};

export default allCourses;
