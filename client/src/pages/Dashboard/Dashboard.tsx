import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BookOpen,
    MessageCircle,
    Zap,
    Flame,
    School,
    Target,
    TrendingUp,
    Play,
    CheckCircle,
    Trophy,
    ArrowUpRight,
    ArrowRight
} from 'lucide-react';
import { ShimmerDashboard } from '../../components/common';
import { useAuthStore, useUserStore, useCourseStore } from '../../stores';
import { LANGUAGES, LEVELS } from '../../utils/constants';

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const { progress, fetchProgress } = useUserStore();
    const { courses, fetchCourses } = useCourseStore();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            await Promise.all([
                fetchProgress(),
                fetchCourses(user?.targetLanguage),
            ]);
            setIsLoading(false);
        };
        loadData();
    }, [user?.targetLanguage]);

    if (isLoading) {
        return <ShimmerDashboard />;
    }

    const languageInfo = user?.targetLanguage
        ? LANGUAGES[user.targetLanguage as keyof typeof LANGUAGES]
        : null;
    const levelInfo = user?.currentLevel
        ? LEVELS[user.currentLevel as keyof typeof LEVELS]
        : null;

    // Derived stats or defaults
    const totalXP = progress?.xp || 0;
    const dayStreak = progress?.streak || 0;
    const completedLessons = progress?.completedLessons || 0;
    const quizAccuracy = progress?.quizAccuracy || 0;

    return (
        <div className="flex flex-col gap-10 pb-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6">

            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-in slide-in-from-top-4 duration-500">
                <div className="flex flex-col">
                    <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2">
                        Selamat Datang, <span className="text-primary">{user?.name}!</span>
                    </h1>
                    <div className="flex items-center gap-2 text-slate-500">
                        <span className="text-xl">{languageInfo?.flag}</span>
                        <p className="text-sm font-medium">{languageInfo?.nameId} • {levelInfo?.name}</p>
                    </div>
                </div>
                {/* Action buttons removed as per request */}
            </header>

            {/* Stats Overview */}
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stat Card 1: Total XP */}
                    <div className="relative overflow-hidden p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow transition-all duration-200">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap size={80} className="text-primary" />
                        </div>
                        <div className="flex flex-col gap-1 relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 rounded-lg bg-yellow-50 text-yellow-600">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                                <span className="text-sm font-semibold text-slate-500">Total XP</span>
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{totalXP.toLocaleString()}</p>
                            <p className="text-xs font-medium text-green-500 flex items-center gap-1 mt-1">
                                <TrendingUp size={14} /> +150 hari ini
                            </p>
                        </div>
                    </div>

                    {/* Stat Card 2: Streak */}
                    <div className="relative overflow-hidden p-6 rounded-2xl bg-white border border-gray-100 shadow-soft group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Flame size={80} className="text-orange-500" />
                        </div>
                        <div className="flex flex-col gap-1 relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 rounded-lg bg-orange-50 text-orange-500">
                                    <Flame size={24} fill="currentColor" />
                                </div>
                                <span className="text-sm font-semibold text-slate-500">Hari Berturut</span>
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{dayStreak} Hari</p>
                            <p className="text-xs font-medium text-slate-400 mt-1">
                                Pertahankan apinya!
                            </p>
                        </div>
                    </div>

                    {/* Stat Card 3: Completed Lessons */}
                    <div className="relative overflow-hidden p-6 rounded-2xl bg-white border border-gray-100 shadow-soft group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <CheckCircle size={80} className="text-blue-500" />
                        </div>
                        <div className="flex flex-col gap-1 relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
                                    <School size={24} />
                                </div>
                                <span className="text-sm font-semibold text-slate-500">Pelajaran</span>
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{completedLessons}</p>
                            <p className="text-xs font-medium text-slate-400 mt-1">
                                Selesai
                            </p>
                        </div>
                    </div>

                    {/* Stat Card 4: Quiz Accuracy */}
                    <div className="relative overflow-hidden p-6 rounded-2xl bg-white border border-gray-100 shadow-soft group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target size={80} className="text-accent" />
                        </div>
                        <div className="flex flex-col gap-1 relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                    <Target size={24} />
                                </div>
                                <span className="text-sm font-semibold text-slate-500">Akurasi Quiz</span>
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{quizAccuracy}%</p>
                            <p className="text-xs font-medium text-green-500 flex items-center gap-1 mt-1">
                                <ArrowUpRight size={14} /> Memuaskan
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mulai Sekarang (Quick Actions) */}
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">Mulai Sekarang</h2>
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Action Card 1: Resume */}
                    <div
                        onClick={() => navigate('/courses')}
                        className="flex flex-col justify-between p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow hover:border-primary/20 transition-all cursor-pointer"
                    >
                        <div>
                            <div className="size-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                                <Play size={28} fill="currentColor" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Lanjut Belajar</h3>
                            <p className="text-sm text-slate-600">Lanjutkan pelajaran terakhir Anda</p>
                        </div>
                        <div className="mt-6 flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                            Mulai <ArrowRight size={18} className="ml-1" />
                        </div>
                    </div>

                    {/* Action Card 2: AI Tutor */}
                    <div
                        onClick={() => navigate('/ai-tutor')}
                        className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-100 shadow-soft hover:shadow-md transition-all cursor-pointer group"
                    >
                        <div>
                            <div className="size-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Tanya Tutor AI</h3>
                            <p className="text-sm text-slate-600">Latih percakapan atau tanyakan grammar.</p>
                        </div>
                        <div className="mt-6 flex items-center text-slate-500 font-bold text-sm group-hover:text-primary transition-colors">
                            Chat Sekarang
                        </div>
                    </div>

                    {/* Action Card 3: Daily Challenge */}
                    <div
                        onClick={() => navigate('/leaderboard')}
                        className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-100 shadow-soft hover:shadow-md transition-all cursor-pointer group"
                    >
                        <div>
                            <div className="size-12 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Trophy size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Tantangan Harian</h3>
                            <p className="text-sm text-slate-600">Selesaikan kuis kosa kata dalam 2 menit.</p>
                        </div>
                        <div className="mt-6 flex items-center text-slate-500 font-bold text-sm group-hover:text-primary transition-colors">
                            Ambil Tantangan (+50 XP)
                        </div>
                    </div>
                </div>
            </section>

            {/* My Courses */}
            {courses.length > 0 && (
                <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Kursus Saya</h2>
                        <span onClick={() => navigate('/courses')} className="text-sm font-bold text-primary hover:underline cursor-pointer">Lihat Semua</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        {courses.slice(0, 3).map((course, index) => {
                            const progressPercent = course.totalLessons > 0 ? Math.round((course.completedLessons / course.totalLessons) * 100) : 0;
                            // Just some dummy colored backgrounds for variety instead of real images for now
                            const bgGradients = [
                                'bg-blue-500',
                                'bg-emerald-500',
                                'bg-orange-500'
                            ];
                            const bgGradient = bgGradients[index % bgGradients.length];

                            return (
                                <div
                                    key={course.id}
                                    onClick={() => navigate(`/courses/${course.id}`)}
                                    className="flex flex-col md:flex-row items-center gap-6 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                                >
                                    <div className="w-full md:w-auto flex items-center gap-4 flex-1">
                                        <div className={`size-16 rounded-xl ${bgGradient} shrink-0 shadow-sm flex items-center justify-center text-white`}>
                                            <BookOpen size={28} className="opacity-80" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-primary transition-colors">{course.titleId}</h3>
                                            <p className="text-sm text-slate-500 mt-1 capitalize">{course.level}</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                                        <div className="flex justify-between text-xs font-bold">
                                            <span className="text-slate-500">Progress</span>
                                            <span className="text-slate-900">{progressPercent}%</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPercent}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-auto flex justify-end">
                                        <button className="px-5 py-2 rounded-lg bg-gray-50 text-slate-900 text-sm font-bold border border-gray-200 group-hover:bg-gray-100 transition-colors">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
};

