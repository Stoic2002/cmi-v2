import React from 'react';
import { Send, Loader2, MessageCircle, Mic, Users, BookOpen, Languages, Plus, Sparkles, Wand2 } from 'lucide-react';
import { Button, Card, CardBody } from '../../components/common';
import { PronunciationPractice, InteractiveExercises } from '../../components/features';
import { useAuthStore, useAITutorStore } from '../../stores';
import { AI_TUTOR_MODES, LANGUAGES } from '../../utils/constants';

const modeIcons: Record<string, React.ReactNode> = {
    free_chat: <MessageCircle size={20} />,
    pronunciation: <Mic size={20} />,
    roleplay: <Users size={20} />,
    grammar_drill: <BookOpen size={20} />,
    vocabulary: <Languages size={20} />,
};

export const AITutor: React.FC = () => {
    const { user } = useAuthStore();
    const {
        messages,
        currentMode,
        scenarios,
        isSending,
        sendMessage,
        setMode,
        startNewConversation,
        fetchScenarios,
    } = useAITutorStore();

    const [input, setInput] = React.useState('');
    const [selectedScenario, setSelectedScenario] = React.useState<string | null>(null);
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    const languageInfo = user?.targetLanguage
        ? LANGUAGES[user.targetLanguage as keyof typeof LANGUAGES]
        : null;

    React.useEffect(() => {
        fetchScenarios();
    }, []);

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isSending) return;

        const message = input;
        setInput('');

        await sendMessage(message, currentMode, selectedScenario || undefined);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleModeChange = (mode: string) => {
        setMode(mode);
        startNewConversation();
        setSelectedScenario(null);
    };

    const handleNewChat = () => {
        startNewConversation();
        setSelectedScenario(null);
    };

    // Check if mode uses interactive component instead of chat
    const isInteractiveMode = currentMode === 'pronunciation' || currentMode === 'grammar_drill';

    const renderMainContent = () => {
        // Pronunciation mode - use PronunciationPractice component
        if (currentMode === 'pronunciation') {
            return <PronunciationPractice />;
        }

        // Grammar drill mode - use InteractiveExercises component
        if (currentMode === 'grammar_drill') {
            return <InteractiveExercises />;
        }

        // Chat-based modes (free_chat, roleplay, vocabulary)
        return (
            <div className="flex flex-col h-full relative">
                <div className="flex-shrink-0 pb-4 border-b border-gray-100 mb-4 bg-white/80 backdrop-blur-md sticky top-0 z-10 w-full rounded-t-3xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-xl text-primary">
                            {modeIcons[currentMode]}
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">
                                {AI_TUTOR_MODES[currentMode as keyof typeof AI_TUTOR_MODES]?.name || 'AI Tutor'}
                            </h2>
                            <p className="text-xs text-slate-500 font-medium">
                                Belajar {languageInfo?.nameId} dengan AI
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 mb-4 scrollbar-thin">
                    {messages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-60">
                            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4 animate-pulse">
                                <Sparkles size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Mulai Percakapan</h3>
                            <p className="max-w-xs text-slate-500">
                                Ketik pesan untuk mulai belajar {languageInfo?.nameId} dengan AI Tutor.
                                {currentMode === 'roleplay' && ' Pilih skenario di samping untuk roleplay.'}
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 shadow-sm text-sm font-medium leading-relaxed ${msg.role === 'user'
                                        ? 'bg-primary text-white rounded-br-none shadow-primary/20'
                                        : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none shadow-soft'
                                        }`}>
                                        {msg.content.split('\n').map((line, i) => (
                                            <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {isSending && (
                                <div className="flex w-full justify-start">
                                    <div className="bg-white border border-slate-100 text-slate-400 rounded-2xl rounded-bl-none px-5 py-3 shadow-sm flex items-center gap-2">
                                        <Loader2 size={16} className="animate-spin" />
                                        <span className="text-xs font-bold">Sedang mengetik...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>

                <div className="flex-shrink-0 mt-auto sticky bottom-0 bg-white/50 backdrop-blur-sm pt-2 pb-1 rounded-b-3xl">
                    <Card className="border border-slate-200 shadow-lg shadow-slate-200/50 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all rounded-2xl overflow-hidden">
                        <CardBody className="p-2 bg-white">
                            <div className="flex items-end gap-2">
                                <textarea
                                    className="flex-1 max-h-32 min-h-[44px] p-3 text-sm text-slate-900 placeholder-slate-400 bg-transparent border-none outline-none resize-none"
                                    placeholder="Ketik pesan Anda..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    disabled={isSending}
                                    rows={1}
                                />
                                <Button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isSending}
                                    className={`w-10 h-10 p-0 rounded-xl flex items-center justify-center transition-all ${!input.trim() || isSending
                                        ? 'bg-slate-100 text-slate-400'
                                        : 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25'
                                        }`}
                                >
                                    <Send size={18} className={input.trim() && !isSending ? 'ml-0.5' : ''} />
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    };

    return (
        <div className="h-[calc(100vh-2rem)] flex flex-col md:flex-row gap-6 max-w-7xl mx-auto pb-2 w-full">
            {/* Sidebar - Mode Selection */}
            <aside className="w-full md:w-72 lg:w-80 flex-shrink-0 flex flex-col gap-6 overflow-y-auto scrollbar-none pb-8">
                {/* Header */}
                <div className="flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="p-2 bg-primary/10 rounded-xl text-primary">
                        <Wand2 size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-slate-900">AI Tutor</h1>
                        <p className="text-slate-500 text-xs font-medium">Pilih mode belajar</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-2 shadow-soft border border-slate-100">
                    <h3 className="text-xs font-bold text-slate-400 uppercase mb-2 px-3 pt-2">Mode</h3>
                    <div className="flex flex-col gap-1">
                        {Object.values(AI_TUTOR_MODES).map((mode) => (
                            <button
                                key={mode.id}
                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left text-sm font-bold transition-all ${currentMode === mode.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                                onClick={() => handleModeChange(mode.id)}
                            >
                                <div className={`${currentMode === mode.id ? 'text-white' : 'text-slate-400'}`}>
                                    {modeIcons[mode.id]}
                                </div>
                                <span>{mode.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {currentMode === 'roleplay' && scenarios.length > 0 && (
                    <div className="animate-in slide-in-from-left-4 fade-in duration-300 bg-white rounded-3xl p-4 shadow-soft border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase mb-3 px-1">Pilih Skenario</h3>
                        <div className="flex flex-col gap-2">
                            {scenarios.map((scenario) => (
                                <button
                                    key={scenario.id}
                                    className={`p-3 rounded-2xl text-left transition-all border ${selectedScenario === scenario.id
                                        ? 'bg-primary/10 border-primary/30 shadow-md shadow-primary/10'
                                        : 'bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-200'
                                        }`}
                                    onClick={() => setSelectedScenario(scenario.id)}
                                >
                                    <span className={`block text-sm font-semibold mb-1 ${selectedScenario === scenario.id ? 'text-primary' : 'text-slate-700'
                                        }`}>
                                        {scenario.title}
                                    </span>
                                    <span className="block text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                        {scenario.description}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {!isInteractiveMode && (
                    <Button
                        variant="outline"
                        className="mt-auto justify-start border-slate-200 text-slate-600 hover:text-primary hover:border-primary/20 hover:bg-primary/5 rounded-2xl h-12"
                        onClick={handleNewChat}
                        leftIcon={<Plus size={18} />}
                    >
                        Percakapan Baru
                    </Button>
                )}
            </aside>

            {/* Main Content Area */}
            <main className={`flex-1 flex flex-col min-w-0 bg-white rounded-[2.5rem] border border-slate-100 shadow-soft h-full ${isInteractiveMode ? 'p-0 overflow-hidden' : 'p-4 md:p-6'
                }`}>
                {renderMainContent()}
            </main>
        </div>
    );
};
