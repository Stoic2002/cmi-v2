import React from 'react';
import { Mic, MicOff, Volume2, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { Button, Card, CardBody } from '../../components/common';
import { useAuthStore } from '../../stores';
import { LANGUAGES } from '../../utils/constants';

interface PracticeWord {
    word: string;
    romanization?: string;
    meaning: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

const practiceWords: Record<string, PracticeWord[]> = {
    en: [
        { word: 'Hello', meaning: 'Halo', difficulty: 'easy' },
        { word: 'Thank you', meaning: 'Terima kasih', difficulty: 'easy' },
        { word: 'Good morning', meaning: 'Selamat pagi', difficulty: 'easy' },
        { word: 'Excuse me', meaning: 'Permisi', difficulty: 'medium' },
        { word: 'I understand', meaning: 'Saya mengerti', difficulty: 'medium' },
        { word: 'Could you help me?', meaning: 'Bisakah Anda membantu saya?', difficulty: 'hard' },
    ],
    ko: [
        { word: '안녕하세요', romanization: 'Annyeonghaseyo', meaning: 'Halo', difficulty: 'easy' },
        { word: '감사합니다', romanization: 'Gamsahamnida', meaning: 'Terima kasih', difficulty: 'easy' },
        { word: '죄송합니다', romanization: 'Joesonghamnida', meaning: 'Maaf', difficulty: 'medium' },
        { word: '잘 부탁드립니다', romanization: 'Jal butakdeurimnida', meaning: 'Mohon bantuannya', difficulty: 'hard' },
    ],
    ja: [
        { word: 'こんにちは', romanization: 'Konnichiwa', meaning: 'Halo', difficulty: 'easy' },
        { word: 'ありがとうございます', romanization: 'Arigatou gozaimasu', meaning: 'Terima kasih', difficulty: 'easy' },
        { word: 'すみません', romanization: 'Sumimasen', meaning: 'Permisi/Maaf', difficulty: 'medium' },
        { word: 'よろしくお願いします', romanization: 'Yoroshiku onegaishimasu', meaning: 'Mohon bantuannya', difficulty: 'hard' },
    ],
};

export const PronunciationPractice: React.FC = () => {
    const { user } = useAuthStore();
    const [isRecording, setIsRecording] = React.useState(false);
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [result, setResult] = React.useState<'correct' | 'incorrect' | null>(null);
    const [score, setScore] = React.useState({ correct: 0, total: 0 });
    const [isPlaying, setIsPlaying] = React.useState(false);

    const language = user?.targetLanguage || 'en';
    const words = practiceWords[language] || practiceWords.en;
    const currentWord = words[currentWordIndex];
    const languageInfo = LANGUAGES[language as keyof typeof LANGUAGES];

    const handlePlayAudio = () => {
        if ('speechSynthesis' in window) {
            setIsPlaying(true);
            const utterance = new SpeechSynthesisUtterance(currentWord.word);

            // Set language based on target
            const langCode = language === 'ko' ? 'ko-KR' : language === 'ja' ? 'ja-JP' : 'en-US';
            utterance.lang = langCode;
            utterance.rate = 0.8; // Slower for learning

            utterance.onend = () => setIsPlaying(false);
            utterance.onerror = () => setIsPlaying(false);

            speechSynthesis.speak(utterance);
        }
    };

    const handleStartRecording = async () => {
        try {
            // Check for browser support
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                alert('Browser Anda tidak mendukung Speech Recognition. Gunakan Chrome untuk fitur ini.');
                return;
            }

            setIsRecording(true);
            setResult(null);

            const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
            const recognition = new SpeechRecognition();

            const langCode = language === 'ko' ? 'ko-KR' : language === 'ja' ? 'ja-JP' : 'en-US';
            recognition.lang = langCode;
            recognition.interimResults = false;
            recognition.maxAlternatives = 3;

            recognition.onresult = (event: any) => {
                const results = event.results[0];
                let isCorrect = false;

                // Check all alternatives
                for (let i = 0; i < results.length; i++) {
                    const transcript = results[i].transcript.toLowerCase().trim();
                    const target = currentWord.word.toLowerCase().trim();

                    // Fuzzy match - allow some flexibility
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

            // Auto-stop after 5 seconds
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
            // Reset to beginning
            setCurrentWordIndex(0);
            setResult(null);
        }
    };

    const handleReset = () => {
        setCurrentWordIndex(0);
        setResult(null);
        setScore({ correct: 0, total: 0 });
    };

    // Simple Levenshtein distance for fuzzy matching
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

    return (
        <div className="flex flex-col items-center gap-8 py-4 w-full h-full max-w-2xl mx-auto">
            <div className="text-center w-full">
                <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-1">
                    🎤 Latihan Pengucapan
                </h2>
                <p className="text-gray-500 font-medium text-sm">
                    Dengarkan dan ucapkan dalam {languageInfo?.nameId}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Skor: {score.correct}/{score.total}
                </div>
            </div>

            <Card className="w-full relative overflow-visible border-none ring-1 ring-gray-100 shadow-xl bg-white/80 backdrop-blur-md">
                <CardBody className="p-8 flex flex-col items-center gap-6">
                    <div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${currentWord.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                            currentWord.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                            }`}
                    >
                        {currentWord.difficulty === 'easy' ? 'Mudah' : currentWord.difficulty === 'medium' ? 'Sedang' : 'Sulit'}
                    </div>

                    <div className="flex flex-col items-center text-center gap-2 mt-4">
                        <span className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {currentWord.word}
                        </span>
                        {currentWord.romanization && (
                            <span className="text-xl text-primary font-medium">
                                {currentWord.romanization}
                            </span>
                        )}
                        <p className="text-gray-500 font-medium text-lg mt-2">{currentWord.meaning}</p>
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

            <div className="w-full flex items-center justify-between mt-auto">
                <Button variant="ghost" onClick={handleReset} leftIcon={<RefreshCw size={18} />}>
                    Mulai Ulang
                </Button>
                <div className="flex gap-1.5">
                    {words.map((_, index) => (
                        <span
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentWordIndex
                                ? 'bg-primary w-4'
                                : index < currentWordIndex
                                    ? 'bg-primary/30'
                                    : 'bg-gray-200'
                                }`}
                        />
                    ))}
                </div>
                <Button onClick={handleNext}>
                    {currentWordIndex < words.length - 1 ? 'Lanjut' : 'Selesai'}
                </Button>
            </div>
        </div>
    );
};
