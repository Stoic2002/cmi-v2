import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen, Lightbulb, Volume2, Star, GraduationCap, X } from 'lucide-react';
import { Button, Card, CardBody, Loading } from '../../components/common';
import { GuidedLesson } from '../../components/features';
import { useCourseStore, useQuizStore } from '../../stores';

type LessonTab = 'content' | 'quiz';

export const Lesson: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { currentLesson, fetchLesson, completeLesson, isLoading } = useCourseStore();
    const { quizzes, currentQuizIndex, submitAnswer, nextQuiz, resetQuiz, fetchQuizzes } = useQuizStore();

    const [activeTab, setActiveTab] = React.useState<LessonTab>('content');
    const [quizAnswer, setQuizAnswer] = React.useState('');
    const [quizResult, setQuizResult] = React.useState<{ isCorrect: boolean; message: string } | null>(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [showAIModal, setShowAIModal] = React.useState(false);

    React.useEffect(() => {
        if (id) {
            fetchLesson(id);
            fetchQuizzes(id);
        }
        return () => resetQuiz();
    }, [id]);

    if (isLoading || !currentLesson) {
        return <Loading fullScreen text="Memuat pelajaran..." />;
    }

    const content = currentLesson.content as {
        vocabulary?: Array<{ word: string; romanization?: string; meaning: string; example?: string }>;
        grammar?: Array<{ pattern: string; explanation: string; examples: string[] }>;
        tips?: string[];
    };

    const currentQuiz = quizzes[currentQuizIndex];
    const isLastQuiz = currentQuizIndex >= quizzes.length - 1;

    const handleQuizSubmit = async () => {
        if (!currentQuiz || !quizAnswer.trim()) return;

        setIsSubmitting(true);
        try {
            const result = await submitAnswer(currentQuiz.id, quizAnswer);
            setQuizResult({ isCorrect: result.isCorrect, message: result.message });
        } catch {
            setQuizResult({ isCorrect: false, message: 'Terjadi kesalahan' });
        }
        setIsSubmitting(false);
    };

    const handleNextQuiz = () => {
        setQuizAnswer('');
        setQuizResult(null);
        if (isLastQuiz) {
            // Complete lesson
            completeLesson(id!);
            navigate(`/courses/${currentLesson.course.id}`);
        } else {
            nextQuiz();
        }
    };

    const handleComplete = () => {
        completeLesson(id!);
        navigate(`/courses/${currentLesson.course.id}`);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-2rem)] max-w-5xl mx-auto pb-4 w-full">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 shrink-0 animate-in slide-in-from-top-4 fade-in duration-500">
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(`/courses/${currentLesson.course.id}`)}
                        leftIcon={<ArrowLeft size={18} />}
                        className="shrink-0 w-10 h-10 rounded-lg border border-slate-200 hover:bg-slate-100 justify-center p-0"
                    />
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">{currentLesson.course.titleId}</span>
                        <h1 className="text-xl md:text-2xl font-bold text-slate-900">{currentLesson.titleId}</h1>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-lg border border-amber-100 font-semibold text-sm self-start md:self-auto">
                    <Star size={16} fill="currentColor" /> {currentLesson.xpReward} XP
                </div>
            </header>

            <div className="flex p-1 bg-slate-100 rounded-lg mb-6 w-fit shrink-0 border border-slate-200">
                <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all ${activeTab === 'content'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                        }`}
                    onClick={() => setActiveTab('content')}
                >
                    <BookOpen size={16} />
                    Materi
                </button>
                <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all ${activeTab === 'quiz'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                        }`}
                    onClick={() => setActiveTab('quiz')}
                >
                    <CheckCircle size={16} />
                    Quiz ({quizzes.length})
                </button>
            </div>

            <main className="flex-1 overflow-y-auto pr-2 scrollbar-thin">
                {activeTab === 'content' ? (
                    <div className="flex flex-col gap-8 pb-8">
                        {/* Vocabulary */}
                        {content.vocabulary && content.vocabulary.length > 0 && (
                            <section className="animate-in slide-in-from-bottom-4 fade-in duration-500">
                                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 rounded-full bg-blue-500"></span>
                                    📚 Kosakata Baru
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {content.vocabulary.map((item, index) => (
                                        <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-sm transition-all bg-white">
                                            <CardBody className="p-5">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <span className="text-xl font-bold text-slate-900 block">{item.word}</span>
                                                        {item.romanization && (
                                                            <span className="text-sm text-slate-500 font-mono">({item.romanization})</span>
                                                        )}
                                                    </div>
                                                    <button className="p-2 rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors">
                                                        <Volume2 size={18} />
                                                    </button>
                                                </div>
                                                <p className="text-slate-700 font-medium mb-2 text-base border-b border-slate-100 pb-2">{item.meaning}</p>
                                                {item.example && (
                                                    <p className="text-sm text-slate-600 italic bg-gray-50 p-2 rounded-lg border border-gray-100">"{item.example}"</p>
                                                )}
                                            </CardBody>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Grammar */}
                        {content.grammar && content.grammar.length > 0 && (
                            <section className="animate-in slide-in-from-bottom-8 fade-in duration-700">
                                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 rounded-full bg-accent"></span>
                                    📝 Tata Bahasa
                                </h2>
                                <div className="flex flex-col gap-4">
                                    {content.grammar.map((item, index) => (
                                        <Card key={index} className="border-l-4 border-l-accent overflow-hidden">
                                            <CardBody className="p-5">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-semibold uppercase">Pola</span>
                                                    <h3 className="text-lg font-bold text-slate-900">{item.pattern}</h3>
                                                </div>
                                                <p className="text-slate-700 mb-4 leading-relaxed">{item.explanation}</p>
                                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                                    <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Contoh:</p>
                                                    <ul className="space-y-2">
                                                        {item.examples.map((ex, i) => (
                                                            <li key={i} className="text-slate-700 text-sm flex gap-2 items-start">
                                                                <span className="text-accent">•</span>
                                                                <span>{ex}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Tips */}
                        {content.tips && content.tips.length > 0 && (
                            <section className="animate-in slide-in-from-bottom-12 fade-in duration-700">
                                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 rounded-full bg-amber-500"></span>
                                    💡 Tips
                                </h2>
                                <Card className="bg-amber-50/50 border-amber-100">
                                    <CardBody className="p-5">
                                        <ul className="space-y-4">
                                            {content.tips.map((tip, index) => (
                                                <li key={index} className="flex gap-3 text-slate-700 items-start">
                                                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 border border-amber-200">
                                                        <Lightbulb size={16} fill="currentColor" />
                                                    </div>
                                                    <span className="mt-1 text-sm leading-relaxed font-medium">{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardBody>
                                </Card>
                            </section>
                        )}

                        <div className="flex flex-col md:flex-row justify-between gap-3 pt-6 border-t border-slate-100">
                            <Button
                                variant="outline"
                                onClick={() => setShowAIModal(true)}
                                leftIcon={<GraduationCap size={16} />}
                                className="md:w-auto w-full border-primary/30 text-primary hover:bg-primary/5"
                            >
                                Latihan dengan AI
                            </Button>
                            <Button onClick={() => setActiveTab('quiz')} rightIcon={<ArrowRight size={16} />} className="w-full md:w-auto px-6 shadow-sm">
                                Lanjut ke Quiz
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto py-4">
                        {quizzes.length === 0 ? (
                            <Card className="text-center p-12 border-dashed border-2">
                                <CardBody className="flex flex-col items-center gap-6">
                                    <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                        <CheckCircle size={40} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Quiz Belum Tersedia</h3>
                                        <p className="text-slate-500">Tidak ada quiz untuk pelajaran ini saat ini.</p>
                                    </div>
                                    <Button onClick={handleComplete} className="mt-4">
                                        Selesaikan Pelajaran
                                    </Button>
                                </CardBody>
                            </Card>
                        ) : currentQuiz ? (
                            <Card className="overflow-visible shadow-sm border-slate-200">
                                <CardBody className="p-6 md:p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                                            Soal {currentQuizIndex + 1} dari {quizzes.length}
                                        </span>
                                        <div className="flex gap-1.5">
                                            {quizzes.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentQuizIndex ? 'bg-primary scale-125' :
                                                        idx < currentQuizIndex ? 'bg-primary/30' : 'bg-slate-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-snug">
                                        {currentQuiz.questionId || currentQuiz.question}
                                    </h3>

                                    {currentQuiz.type === 'multiple_choice' && currentQuiz.options ? (
                                        <div className="grid grid-cols-1 gap-3 mb-8">
                                            {(currentQuiz.options as string[]).map((option, index) => {
                                                const isSelected = quizAnswer === option;
                                                const isCorrect = quizResult?.isCorrect;

                                                let buttonClass = "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 font-semibold text-base relative group ";

                                                if (isSelected) {
                                                    if (quizResult) {
                                                        buttonClass += isCorrect
                                                            ? "bg-green-50 border-green-500 text-green-700"
                                                            : "bg-red-50 border-red-500 text-red-700";
                                                    } else {
                                                        buttonClass += "bg-primary/5 border-primary text-primary shadow-sm";
                                                    }
                                                } else if (quizResult && isCorrect === false && option === currentQuiz.answer) {
                                                    buttonClass += "bg-green-50 border-green-500 text-green-700 opacity-70";
                                                } else {
                                                    buttonClass += "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50";
                                                }

                                                return (
                                                    <button
                                                        key={index}
                                                        className={buttonClass}
                                                        onClick={() => !quizResult && setQuizAnswer(option)}
                                                        disabled={!!quizResult}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center text-sm font-bold transition-colors ${isSelected
                                                                ? quizResult
                                                                    ? isCorrect ? 'border-green-500 bg-green-500 text-white' : 'border-red-500 bg-red-500 text-white'
                                                                    : 'border-primary bg-primary text-white'
                                                                : 'border-slate-300 text-slate-400 group-hover:border-slate-400'
                                                                }`}>
                                                                {String.fromCharCode(65 + index)}
                                                            </div>
                                                            {option}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="mb-8">
                                            <input
                                                type="text"
                                                className="w-full p-5 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-semibold text-lg placeholder-slate-300 text-slate-900"
                                                placeholder="Ketik jawaban Anda..."
                                                value={quizAnswer}
                                                onChange={(e) => setQuizAnswer(e.target.value)}
                                                disabled={!!quizResult}
                                                autoFocus
                                            />
                                        </div>
                                    )}

                                    {quizResult && (
                                        <div className={`p-5 rounded-xl mb-6 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 ${quizResult.isCorrect ? 'bg-green-50 text-green-800 border border-green-100' : 'bg-red-50 text-red-800 border border-red-100'
                                            }`}>
                                            <div className={`p-2 rounded-lg shrink-0 ${quizResult.isCorrect ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
                                                }`}>
                                                {quizResult.isCorrect ? <CheckCircle size={20} /> : <div className="w-5 h-5 flex items-center justify-center font-bold text-sm">!</div>}
                                            </div>
                                            <div>
                                                <p className="font-bold text-base mb-1">{quizResult.isCorrect ? 'Jawaban Benar! 🎉' : 'Kurang tepat...'}</p>
                                                <p className="opacity-90 leading-relaxed text-sm">{quizResult.message}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-end border-t border-slate-100 pt-6">
                                        {!quizResult ? (
                                            <Button
                                                onClick={handleQuizSubmit}
                                                isLoading={isSubmitting}
                                                disabled={!quizAnswer.trim()}
                                                className="w-full md:w-auto px-6 shadow-sm"
                                                rightIcon={<ArrowRight size={16} />}
                                            >
                                                Jawab
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={handleNextQuiz}
                                                className={`w-full md:w-auto px-6 ${quizResult.isCorrect
                                                    ? 'bg-green-500 hover:bg-green-600'
                                                    : 'bg-red-500 hover:bg-red-600'
                                                    }`}
                                                rightIcon={<ArrowRight size={16} />}
                                            >
                                                {isLastQuiz ? 'Selesai' : 'Lanjut'}
                                            </Button>
                                        )}
                                    </div>
                                </CardBody>
                            </Card>
                        ) : null}
                    </div>
                )}
            </main>

            {/* AI Practice Modal */}
            {showAIModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl w-full max-w-3xl h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-300">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-100 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Latihan dengan AI</h3>
                                    <p className="text-xs text-slate-500">{currentLesson.titleId}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowAIModal(false)}
                                className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        {/* Modal Content */}
                        <div className="flex-1 overflow-hidden">
                            <GuidedLesson
                                lessonId={id}
                                onComplete={() => setShowAIModal(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
