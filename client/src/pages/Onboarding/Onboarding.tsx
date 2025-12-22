import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, CheckCircle, ChevronRight, ChevronLeft, Globe, Award, Sparkles, BookOpen, Star, Rocket } from 'lucide-react';
import { Button, Loading } from '../../components/common';
import { useAuthStore, useUserStore } from '../../stores';
import { LANGUAGES, LEVELS, GOALS } from '../../utils/constants';

export const Onboarding: React.FC = () => {
    const navigate = useNavigate();
    const { user, updateProfile, isLoading } = useAuthStore();
    const { fetchLeaderboard, fetchAchievements } = useUserStore();
    const [step, setStep] = React.useState(1);
    const [selectedLanguage, setSelectedLanguage] = React.useState<string | null>(null);
    const [selectedLevel, setSelectedLevel] = React.useState<string | null>(null);
    const [selectedGoal, setSelectedGoal] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (user?.targetLanguage) setSelectedLanguage(user.targetLanguage);
        if (user?.currentLevel) setSelectedLevel(user.currentLevel);
    }, [user]);

    // Handle Next button for step 1 (Language)
    const handleStep1Next = () => {
        if (!selectedLanguage) return;

        // Optimistic update - move next immediately
        setStep(2);

        // Save in background
        updateProfile({ targetLanguage: selectedLanguage }).catch(error => {
            console.error('Failed to update language:', error);
        });
    };

    // Handle Next button for step 2 (Level)
    const handleStep2Next = () => {
        if (!selectedLevel) return;

        // Optimistic update - move next immediately
        setStep(3);

        // Save in background
        updateProfile({ level: selectedLevel }).catch(error => {
            console.error('Failed to update level:', error);
        });
    };

    // Handle Next button for step 3 (Goal)
    const handleStep3Next = () => {
        if (!selectedGoal) return;

        // Optimistic update - move next immediately
        setStep(4);

        // Save goal in background
        updateProfile({ goal: selectedGoal }).catch(error => {
            console.error('Failed to update goal:', error);
        });
    };

    const handleComplete = async () => {
        try {
            await Promise.all([
                fetchLeaderboard(),
                fetchAchievements()
            ]);
        } catch (error) {
            console.error("Failed to initialize user data:", error);
        }
        navigate('/');
    };

    if (isLoading && !user) {
        return <Loading fullScreen text="Memuat profil..." />;
    }

    const renderStep1 = () => (
        <div className="flex flex-col gap-8 animate-in slide-in-from-right-8 fade-in duration-500">
            <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe size={32} className="text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">Bahasa apa yang ingin Anda pelajari?</h1>
                <p className="text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">Pilih bahasa tujuan untuk memulai perjalanan belajar Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full px-4">
                {Object.values(LANGUAGES).map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setSelectedLanguage(lang.code)}
                        className={`group relative flex flex-col items-center gap-4 p-8 rounded-xl border-2 transition-all duration-200 ${selectedLanguage === lang.code
                            ? 'bg-primary border-primary text-white shadow-md'
                            : 'bg-white border-slate-200 hover:border-primary/30 hover:shadow-sm'
                            }`}
                    >
                        <span className="text-5xl">{lang.flag}</span>
                        <span className={`text-lg font-semibold ${selectedLanguage === lang.code ? 'text-white' : 'text-slate-700'
                            }`}>
                            {lang.nameId}
                        </span>
                        {selectedLanguage === lang.code && (
                            <div className="absolute top-6 right-6">
                                <CheckCircle className="text-white fill-white/20" size={28} />
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-4">
                <Button
                    onClick={handleStep1Next}
                    disabled={!selectedLanguage}
                    className="px-8 py-3 text-lg font-semibold"
                    rightIcon={<ChevronRight size={20} />}
                >
                    Lanjutkan
                </Button>
            </div>
        </div>
    );

    const renderStep2 = () => {
        const currentLang = selectedLanguage ? LANGUAGES[selectedLanguage as keyof typeof LANGUAGES] : null;

        return (
            <div className="flex flex-col gap-8 animate-in slide-in-from-right-8 fade-in duration-500">
                <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Award size={32} className="text-accent" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900">Seberapa jauh kemampuan Anda?</h1>
                    <p className="text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">Kami akan menyesuaikan materi dengan tingkat kemampuan {currentLang?.nameId} Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto w-full px-4">
                    {Object.values(LEVELS).map((level) => {
                        const Icon = level.code === 'beginner' ? Star : level.code === 'elementary' ? BookOpen : level.code === 'intermediate' ? Rocket : Award;
                        const colorClass = level.code === 'beginner' ? 'text-green-500 bg-green-50 group-hover:bg-green-100' :
                            level.code === 'elementary' ? 'text-teal-500 bg-teal-50 group-hover:bg-teal-100' :
                                level.code === 'intermediate' ? 'text-blue-500 bg-blue-50 group-hover:bg-blue-100' :
                                    'text-accent bg-accent/10 group-hover:bg-accent/20';

                        return (
                            <button
                                key={level.code}
                                onClick={() => setSelectedLevel(level.code)}
                                className={`group p-5 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-5 ${selectedLevel === level.code
                                    ? 'bg-accent border-accent text-white shadow-md'
                                    : 'bg-white border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${selectedLevel === level.code ? 'bg-white/10 text-white' : colorClass}`}>
                                    <Icon size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-lg font-bold mb-1 ${selectedLevel === level.code ? 'text-white' : 'text-slate-900'}`}>{level.name}</h3>
                                    <p className={`text-sm font-medium leading-relaxed ${selectedLevel === level.code ? 'text-white/70' : 'text-slate-500'}`}>{level.description}</p>
                                </div>
                                {selectedLevel === level.code && <CheckCircle className="text-white" size={24} />}
                            </button>
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                    <Button
                        variant="secondary"
                        onClick={() => setStep(1)}
                        className="px-6 py-3"
                        leftIcon={<ChevronLeft size={20} />}
                    >
                        Kembali
                    </Button>
                    <Button
                        onClick={handleStep2Next}
                        disabled={!selectedLevel}
                        className="px-8 py-3 text-lg font-semibold"
                        rightIcon={<ChevronRight size={20} />}
                    >
                        Lanjutkan
                    </Button>
                </div>
            </div>
        );
    };

    const renderStep3 = () => (
        <div className="flex flex-col gap-8 animate-in slide-in-from-right-8 fade-in duration-500">
            <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-warning/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target size={32} className="text-warning" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">Apa tujuan utama Anda?</h1>
                <p className="text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">Ini membantu kami merekomendasikan latihan yang paling relevan.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto w-full px-4">
                {Object.values(GOALS).map((goal) => (
                    <button
                        key={goal.id}
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`group p-5 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${selectedGoal === goal.id
                            ? 'bg-primary border-primary text-white shadow-md'
                            : 'bg-white border-slate-200 hover:border-primary/20'
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0 bg-white shadow-sm border ${selectedGoal === goal.id ? 'border-white/20' : 'border-slate-100'}`}>
                            {goal.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className={`text-lg font-bold ${selectedGoal === goal.id ? 'text-white' : 'text-slate-900'}`}>{goal.label}</h3>
                        </div>
                        {selectedGoal === goal.id && <CheckCircle className="text-white fill-white/20" size={24} />}
                    </button>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-4">
                <Button
                    variant="secondary"
                    onClick={() => setStep(2)}
                    className="px-6 py-3"
                    leftIcon={<ChevronLeft size={20} />}
                >
                    Kembali
                </Button>
                <Button
                    onClick={handleStep3Next}
                    disabled={!selectedGoal}
                    className="px-8 py-3 text-lg font-semibold"
                    rightIcon={<ChevronRight size={20} />}
                >
                    Lanjutkan
                </Button>
            </div>
        </div>
    );

    const renderStep4 = () => (
        <div className="flex flex-col gap-8 animate-in zoom-in duration-500 max-w-lg mx-auto w-full px-4 text-center py-8">
            <div className="mx-auto">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <Sparkles size={40} className="text-white" />
                </div>
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">Akun Siap!</h1>
                <p className="text-base text-slate-500">
                    Profil Anda telah berhasil dibuat. Mari mulai belajar!
                </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-full space-y-4">
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="text-slate-500 font-medium text-sm">Bahasa</span>
                        <span className="font-semibold text-slate-900 flex items-center gap-2">
                            {selectedLanguage && LANGUAGES[selectedLanguage as keyof typeof LANGUAGES].flag} {selectedLanguage && LANGUAGES[selectedLanguage as keyof typeof LANGUAGES].nameId}
                        </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="text-slate-500 font-medium text-sm">Level</span>
                        <span className="font-semibold text-slate-900 capitalize">{selectedLevel && LEVELS[selectedLevel as keyof typeof LEVELS]?.name}</span>
                    </div>
                </div>

                <Button
                    onClick={handleComplete}
                    className="w-full h-12 font-semibold shadow-sm"
                    rightIcon={<ChevronRight size={18} />}
                >
                    Mulai Belajar
                </Button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-background-light flex flex-col">
            <header className="px-6 py-6 md:px-12 md:py-8 flex justify-between items-center max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-white text-[18px]">auto_awesome</span>
                    </div>
                    <span className="font-bold text-xl text-slate-900 hidden md:block">CMI<span className="text-primary">Learn</span></span>
                </div>
                {step < 4 && (
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-500 ease-out"
                                style={{ width: `${(step / 3) * 100}%` }}
                            />
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-12 text-right">Step {step}/3</span>
                    </div>
                )}
            </header>

            <main className="flex-1 flex flex-col justify-center pb-20">
                <div className={step === 1 ? 'block' : 'hidden'}>{renderStep1()}</div>
                <div className={step === 2 ? 'block' : 'hidden'}>{renderStep2()}</div>
                <div className={step === 3 ? 'block' : 'hidden'}>{renderStep3()}</div>
                <div className={step === 4 ? 'block' : 'hidden'}>{renderStep4()}</div>
            </main>
        </div>
    );
};
