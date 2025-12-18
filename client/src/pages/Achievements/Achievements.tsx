import React from 'react';
import { Trophy, Lock, Star, CheckCircle } from 'lucide-react';
import { Card, CardBody, Loading } from '../../components/common';
import { useUserStore } from '../../stores';

export const Achievements: React.FC = () => {
    const { achievements, fetchAchievements, isLoading } = useUserStore();

    React.useEffect(() => {
        fetchAchievements();
    }, []);

    if (isLoading && achievements.length === 0) {
        return <Loading fullScreen text="Memuat pencapaian..." />;
    }

    const earnedCount = achievements.filter(a => a.earnedAt).length;
    const totalXP = achievements.filter(a => a.earnedAt).reduce((sum, a) => sum + a.xpReward, 0);

    return (
        <div className="flex flex-col gap-8 pb-10 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="p-2 bg-accent/10 rounded-xl text-accent">
                    <Trophy size={28} />
                </div>
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900">Pencapaian</h1>
                    <p className="text-slate-500 text-sm font-medium">Kumpulkan badge dan dapatkan XP bonus</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-primary text-white border-none shadow-md relative overflow-hidden hover:-translate-y-0.5 transition-transform">
                    <div className="absolute top-0 right-0 p-16 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
                    <CardBody className="flex items-center p-6 gap-6 relative z-10">
                        <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg">
                            <Star size={32} className="text-yellow-300 fill-yellow-300" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-black tracking-tight">{earnedCount}<span className="text-white/60 text-xl font-medium">/{achievements.length}</span></span>
                            <span className="text-white/80 font-medium">Terkumpul</span>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-amber-500 text-white border-none shadow-md relative overflow-hidden hover:-translate-y-0.5 transition-transform">
                    <div className="absolute top-0 right-0 p-16 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
                    <CardBody className="flex items-center p-6 gap-6 relative z-10">
                        <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg">
                            <Trophy size={32} className="text-yellow-100" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-black tracking-tight">+{totalXP.toLocaleString()}</span>
                            <span className="text-amber-100 font-medium">Total XP Bonus</span>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => {
                    const isEarned = !!achievement.earnedAt;
                    const progress = achievement.progress !== undefined ? Math.min(achievement.progress, 100) : 0;

                    return (
                        <Card
                            key={achievement.id}
                            className={`transition-all duration-300 overflow-hidden relative group ${isEarned
                                ? 'border-2 border-primary/20 bg-white shadow-sm hover:-translate-y-0.5'
                                : 'bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                        >
                            <CardBody className="p-6 h-full flex flex-col items-center text-center z-10 relative">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 ${isEarned
                                    ? 'bg-white shadow-md shadow-primary/10 ring-4 ring-primary/5'
                                    : 'bg-slate-100 grayscale opacity-40'
                                    }`}>
                                    {isEarned ? (
                                        <span className="drop-shadow-sm filter">{achievement.icon}</span>
                                    ) : (
                                        <Lock size={32} className="text-slate-400" />
                                    )}
                                </div>

                                <h3 className={`font-bold text-lg mb-2 ${isEarned ? 'text-slate-900' : 'text-slate-500'}`}>
                                    {achievement.nameId}
                                </h3>

                                <p className="text-sm text-slate-500 mb-6 flex-1 leading-relaxed">
                                    {achievement.descriptionId}
                                </p>

                                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 ${isEarned ? 'bg-amber-50 text-amber-600 border border-amber-100 shadow-sm' : 'bg-slate-100 text-slate-400'
                                    }`}>
                                    <Star size={12} fill="currentColor" />
                                    <span>+{achievement.xpReward} XP</span>
                                </div>

                                {isEarned && (
                                    <div className="absolute top-4 right-4 text-green-500 bg-white rounded-full p-1 shadow-sm border border-green-100 animate-in zoom-in duration-300">
                                        <CheckCircle size={20} fill="currentColor" className="text-green-500 bg-white rounded-full" />
                                    </div>
                                )}

                                {!isEarned && achievement.progress !== undefined && (
                                    <div className="w-full mt-auto pt-4 border-t border-slate-100 border-dashed">
                                        <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                                            <span>Progress</span>
                                            <span>{Math.round(progress)}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </CardBody>

                            {/* Decorative glow for earned items */}
                            {isEarned && (
                                <div className="absolute top-0 left-0 w-full h-32 bg-primary/5 pointer-events-none" />
                            )}
                        </Card>
                    );
                })}
            </div>

            {achievements.length === 0 && (
                <Card className="text-center py-12 border-dashed border-2 bg-slate-50/50 shadow-none">
                    <CardBody>
                        <Trophy size={48} className="mx-auto text-slate-300 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Belum Ada Pencapaian</h3>
                        <p className="text-slate-500">Mulai belajar untuk mendapatkan pencapaian!</p>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};
