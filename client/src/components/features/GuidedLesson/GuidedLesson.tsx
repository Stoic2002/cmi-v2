import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, Loader2, GraduationCap, RotateCcw, ChevronRight, BookOpen, Target, HelpCircle } from 'lucide-react';
import { Button, Card, CardBody } from '../../common';
import { guidedLessonApi } from '../../../services/api';
import { useAuthStore } from '../../../stores';
import { LANGUAGES } from '../../../utils/constants';

interface Topic {
    id: string;
    title: string;
    description: string;
    category: string;
}

interface GuidedLessonProps {
    lessonId?: string;
    onComplete?: () => void;
}

export const GuidedLesson: React.FC<GuidedLessonProps> = ({ lessonId, onComplete }) => {
    const { user } = useAuthStore();
    const [mode, setMode] = React.useState<'learn' | 'practice' | 'quiz'>('learn');
    const [topics, setTopics] = React.useState<Topic[]>([]);
    const [selectedTopic, setSelectedTopic] = React.useState<string | null>(null);
    const [sessionId, setSessionId] = React.useState<string | null>(null);
    const [messages, setMessages] = React.useState<Array<{ role: 'ai' | 'user'; content: string }>>([]);
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [step, setStep] = React.useState(0);
    const [totalSteps, setTotalSteps] = React.useState(0);
    const [isComplete, setIsComplete] = React.useState(false);
    const [xpEarned, setXpEarned] = React.useState(0);
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    const languageInfo = user?.targetLanguage
        ? LANGUAGES[user.targetLanguage as keyof typeof LANGUAGES]
        : null;

    React.useEffect(() => {
        loadTopics();
    }, []);

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const loadTopics = async () => {
        try {
            const { data } = await guidedLessonApi.getTopics();
            setTopics(data.topics);
        } catch (error) {
            console.error('Failed to load topics:', error);
        }
    };

    const startSession = async () => {
        setIsLoading(true);
        try {
            const { data } = await guidedLessonApi.start({
                lessonId,
                topic: selectedTopic || undefined,
                mode,
            });

            setSessionId(data.sessionId);
            setStep(data.step);
            setTotalSteps(data.totalSteps);
            setXpEarned(data.xpEarned);
            setMessages([{ role: 'ai', content: data.message }]);
        } catch (error) {
            console.error('Failed to start session:', error);
        }
        setIsLoading(false);
    };

    const sendResponse = async () => {
        if (!input.trim() || !sessionId || isLoading) return;

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const { data } = await guidedLessonApi.respond({
                sessionId,
                userResponse: userMessage,
            });

            setMessages(prev => [...prev, { role: 'ai', content: data.message }]);
            setStep(data.step);
            setXpEarned(prev => prev + data.xpEarned);

            if (data.isComplete) {
                setIsComplete(true);
                setSessionId(null);
                onComplete?.();
            }
        } catch (error) {
            console.error('Failed to send response:', error);
        }
        setIsLoading(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendResponse();
        }
    };

    const resetSession = () => {
        setSessionId(null);
        setMessages([]);
        setStep(0);
        setIsComplete(false);
        setXpEarned(0);
    };

    // Mode selection screen
    if (!sessionId && !isComplete) {
        return (
            <div className="flex flex-col h-full p-4 md:p-6">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <GraduationCap size={32} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Belajar Terbimbing</h2>
                    <p className="text-slate-500">Pilih mode dan topik untuk memulai sesi belajar dengan guru AI</p>
                </div>

                {/* Mode Selection */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                        { id: 'learn', label: 'Belajar', icon: BookOpen, desc: 'Pelajari konsep baru' },
                        { id: 'practice', label: 'Latihan', icon: Target, desc: 'Latih kemampuanmu' },
                        { id: 'quiz', label: 'Quiz', icon: HelpCircle, desc: 'Uji pemahamanmu' },
                    ].map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setMode(m.id as typeof mode)}
                            className={`p-4 rounded-xl border-2 transition-all text-center ${mode === m.id
                                ? 'bg-primary/10 border-primary text-primary'
                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                }`}
                        >
                            <m.icon size={24} className="mx-auto mb-2" />
                            <span className="font-semibold text-sm block">{m.label}</span>
                        </button>
                    ))}
                </div>

                {/* Topic Selection */}
                <div className="flex-1 overflow-y-auto mb-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-3">Pilih Topik</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {topics.map((topic) => (
                            <button
                                key={topic.id}
                                onClick={() => setSelectedTopic(topic.id)}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${selectedTopic === topic.id
                                    ? 'bg-primary/10 border-primary'
                                    : 'bg-white border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                <span className={`font-semibold block mb-1 ${selectedTopic === topic.id ? 'text-primary' : 'text-slate-900'}`}>
                                    {topic.title}
                                </span>
                                <span className="text-xs text-slate-500">{topic.description}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Start Button */}
                <Button
                    onClick={startSession}
                    disabled={isLoading}
                    isLoading={isLoading}
                    className="w-full h-14 text-lg font-semibold"
                    rightIcon={<ChevronRight size={20} />}
                >
                    Mulai Sesi {languageInfo?.nameId}
                </Button>
            </div>
        );
    }

    // Completion screen
    if (isComplete) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <GraduationCap size={48} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Sesi Selesai! 🎉</h2>
                <p className="text-slate-500 mb-4">Kerja bagus! Kamu sudah menyelesaikan sesi belajar.</p>
                <div className="bg-amber-50 px-6 py-3 rounded-xl text-amber-600 font-bold mb-6">
                    +{xpEarned} XP Diperoleh!
                </div>
                <Button onClick={resetSession} leftIcon={<RotateCcw size={18} />}>
                    Mulai Sesi Baru
                </Button>
            </div>
        );
    }

    // Active session screen
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Sesi Belajar</h3>
                        <p className="text-xs text-slate-500">Step {step}/{totalSteps}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        />
                    </div>
                    <span className="text-xs font-bold text-amber-500">+{xpEarned} XP</span>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${msg.role === 'user'
                            ? 'bg-primary text-white rounded-br-none'
                            : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none shadow-sm'
                            }`}>
                            {msg.role === 'ai' ? (
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                        strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
                                        ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                                        ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                                        li: ({ children }) => <li className="ml-2">{children}</li>,
                                        code: ({ children }) => <code className="bg-slate-100 px-1 py-0.5 rounded text-primary font-mono text-xs">{children}</code>,
                                        h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                                        h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                                        h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
                                        blockquote: ({ children }) => <blockquote className="border-l-2 border-primary/50 pl-3 italic text-slate-600">{children}</blockquote>,
                                    }}
                                >
                                    {msg.content}
                                </ReactMarkdown>
                            ) : (
                                <p>{msg.content}</p>
                            )}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-5 py-3 shadow-sm">
                            <Loader2 size={16} className="animate-spin text-slate-400" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white/50 backdrop-blur-sm border-t border-slate-100">
                <Card className="border border-slate-200 shadow-lg overflow-hidden rounded-2xl">
                    <CardBody className="p-2">
                        <div className="flex items-end gap-2">
                            <textarea
                                className="flex-1 max-h-24 min-h-[44px] p-3 text-sm text-slate-900 placeholder-slate-400 bg-transparent border-none outline-none resize-none"
                                placeholder="Ketik jawaban Anda..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={isLoading}
                                rows={1}
                            />
                            <Button
                                onClick={sendResponse}
                                disabled={!input.trim() || isLoading}
                                className="w-10 h-10 p-0 rounded-xl"
                            >
                                <Send size={18} />
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};
