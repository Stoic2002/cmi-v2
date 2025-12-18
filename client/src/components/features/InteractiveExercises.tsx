import React from 'react';
import { Check, X, Shuffle, Trophy, ArrowRight } from 'lucide-react';
import { Button, Card, CardBody } from '../../components/common';
import { useAuthStore } from '../../stores';
import { LANGUAGES } from '../../utils/constants';

type ExerciseType = 'matching' | 'fill_blank' | 'word_order';

interface Exercise {
    type: ExerciseType;
    question: string;
    data: any;
    answer: any;
}

const exercises: Record<string, Exercise[]> = {
    en: [
        {
            type: 'matching',
            question: 'Cocokkan kata dengan artinya:',
            data: {
                pairs: [
                    { word: 'Hello', meaning: 'Halo' },
                    { word: 'Thank you', meaning: 'Terima kasih' },
                    { word: 'Goodbye', meaning: 'Selamat tinggal' },
                    { word: 'Please', meaning: 'Tolong' },
                ],
            },
            answer: null,
        },
        {
            type: 'fill_blank',
            question: 'Lengkapi kalimat:',
            data: {
                sentence: 'Good ___, how are you today?',
                options: ['morning', 'hello', 'bye', 'night'],
            },
            answer: 'morning',
        },
        {
            type: 'word_order',
            question: 'Susun kata menjadi kalimat yang benar:',
            data: {
                words: ['you', 'How', 'are', '?'],
            },
            answer: 'How are you ?',
        },
    ],
    ko: [
        {
            type: 'matching',
            question: '단어와 뜻을 연결하세요:',
            data: {
                pairs: [
                    { word: '안녕하세요', meaning: 'Halo' },
                    { word: '감사합니다', meaning: 'Terima kasih' },
                    { word: '네', meaning: 'Ya' },
                    { word: '아니요', meaning: 'Tidak' },
                ],
            },
            answer: null,
        },
    ],
    ja: [
        {
            type: 'matching',
            question: '言葉と意味を合わせてください:',
            data: {
                pairs: [
                    { word: 'こんにちは', meaning: 'Halo' },
                    { word: 'ありがとう', meaning: 'Terima kasih' },
                    { word: 'はい', meaning: 'Ya' },
                    { word: 'いいえ', meaning: 'Tidak' },
                ],
            },
            answer: null,
        },
    ],
};

export const InteractiveExercises: React.FC = () => {
    const { user } = useAuthStore();
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isComplete, setIsComplete] = React.useState(false);

    // Matching state
    const [selectedWord, setSelectedWord] = React.useState<string | null>(null);
    const [matchedPairs, setMatchedPairs] = React.useState<Record<string, string>>({});
    const [shuffledMeanings, setShuffledMeanings] = React.useState<string[]>([]);

    // Fill blank state
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const [showResult, setShowResult] = React.useState(false);

    // Word order state
    const [orderedWords, setOrderedWords] = React.useState<string[]>([]);
    const [availableWords, setAvailableWords] = React.useState<string[]>([]);

    const language = user?.targetLanguage || 'en';
    const exerciseList = exercises[language] || exercises.en;
    const currentExercise = exerciseList[currentIndex];
    const languageInfo = LANGUAGES[language as keyof typeof LANGUAGES];

    React.useEffect(() => {
        initExercise();
    }, [currentIndex]);

    const initExercise = () => {
        const exercise = exerciseList[currentIndex];
        setShowResult(false);
        setSelectedOption(null);

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
            // Check if match is correct
            const pair = currentExercise.data.pairs.find((p: any) => p.word === selectedWord);
            if (pair && pair.meaning === item) {
                setMatchedPairs(prev => ({ ...prev, [selectedWord]: item }));
                setScore(prev => prev + 1);
            }
            setSelectedWord(null);
        }
    };

    const handleFillBlankSubmit = () => {
        setShowResult(true);
        if (selectedOption === currentExercise.answer) {
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

    return (
        <div className="flex flex-col gap-6 py-4 w-full h-full max-w-3xl mx-auto">
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

            <Card className="flex-1 min-h-[400px]">
                <CardBody className="p-6 md:p-8 flex flex-col h-full gap-8">
                    <p className="text-lg font-medium text-gray-700 border-l-4 border-primary pl-4 py-1">
                        {currentExercise.question}
                    </p>

                    <div className="flex-1 flex flex-col justify-center">
                        {currentExercise.type === 'matching' && (
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
                        )}

                        {currentExercise.type === 'fill_blank' && (
                            <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
                                <div className="text-2xl md:text-3xl text-center font-medium leading-relaxed text-gray-800 p-6 bg-gray-50 rounded-2xl border border-gray-100 w-full">
                                    {currentExercise.data.sentence.split('___').map((part: string, i: number, arr: string[]) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && (
                                                <span className={`inline-block min-w-[100px] border-b-2 px-2 text-center transition-colors ${selectedOption
                                                    ? showResult
                                                        ? selectedOption === currentExercise.answer ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'
                                                        : 'border-primary text-primary'
                                                    : 'border-gray-300'
                                                    }`}>
                                                    {selectedOption || '___'}
                                                </span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                                    {currentExercise.data.options.map((option: string) => (
                                        <button
                                            key={option}
                                            className={`p-3 rounded-xl text-center font-bold transition-all border-2 ${selectedOption === option
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

                                {!showResult && (
                                    <Button
                                        onClick={handleFillBlankSubmit}
                                        disabled={!selectedOption}
                                        className="w-full md:w-auto px-8"
                                    >
                                        Periksa Jawaban
                                    </Button>
                                )}
                            </div>
                        )}

                        {currentExercise.type === 'word_order' && (
                            <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
                                <div className="min-h-[100px] bg-gray-50 rounded-2xl border-2 border-gray-200 p-4 flex flex-wrap gap-2 items-center justify-center border-dashed">
                                    {orderedWords.length === 0 ? (
                                        <span className="text-gray-400 italic font-medium">Klik kata di bawah untuk menyusun kalimat</span>
                                    ) : (
                                        orderedWords.map((word, index) => (
                                            <button
                                                key={`${word}-${index}`}
                                                className="px-4 py-2 bg-primary text-white rounded-lg shadow-sm font-bold hover:bg-error hover:scale-105 transition-all text-sm animate-in zoom-in duration-200"
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
                                    {availableWords.length === 0 && !showResult && (
                                        <span className="text-sm text-gray-400 italic">Semua kata telah digunakan</span>
                                    )}
                                </div>

                                {showResult && (
                                    <div className={`p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 animate-in slide-in-from-bottom-2 ${orderedWords.join(' ') === currentExercise.answer
                                        ? 'bg-green-100 text-green-700 border border-green-200'
                                        : 'bg-red-100 text-red-700 border border-red-200'
                                        }`}>
                                        {orderedWords.join(' ') === currentExercise.answer ? (
                                            <>
                                                <Check size={20} /> Benar!
                                            </>
                                        ) : (
                                            <>
                                                <X size={20} /> Jawaban: {currentExercise.answer}
                                            </>
                                        )}
                                    </div>
                                )}

                                {!showResult && (
                                    <Button
                                        onClick={handleWordOrderSubmit}
                                        disabled={availableWords.length > 0}
                                        className="w-full md:w-auto px-8 mx-auto"
                                    >
                                        Periksa Jawaban
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                        <Button variant="ghost" onClick={handleReset} leftIcon={<Shuffle size={18} className="text-gray-400" />}>
                            <span className="text-gray-500">Mulai Ulang</span>
                        </Button>
                        {(showResult || Object.keys(matchedPairs).length === currentExercise.data?.pairs?.length) && (
                            <Button onClick={handleNext} rightIcon={<ArrowRight size={18} />} className="shadow-sm">
                                Lanjut
                            </Button>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
