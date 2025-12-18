import React from 'react';
import { Trophy, Medal, Flame, Crown } from 'lucide-react';
import { Card, CardBody, Loading } from '../../components/common';
import { useUserStore } from '../../stores';
import { LANGUAGES } from '../../utils/constants';

export const Leaderboard: React.FC = () => {
    // const { user } = useAuthStore();
    const { leaderboard, currentUserRank, fetchLeaderboard, isLoading } = useUserStore();
    const [filter, setFilter] = React.useState<string>('all');

    React.useEffect(() => {
        fetchLeaderboard(filter === 'all' ? undefined : filter);
    }, [filter]);

    if (isLoading && leaderboard.length === 0) {
        return <Loading fullScreen text="Memuat peringkat..." />;
    }

    const getRankIcon = (rank: number) => {
        if (rank === 1) return <Crown size={28} className="text-yellow-500 fill-yellow-500 drop-shadow-md" />;
        if (rank === 2) return <Medal size={28} className="text-slate-400 fill-slate-300 drop-shadow-md" />;
        if (rank === 3) return <Medal size={28} className="text-amber-700 fill-amber-600 drop-shadow-md" />;
        return <span className="text-lg font-bold text-slate-400 w-8 text-center">{rank}</span>;
    };

    return (
        <div className="flex flex-col gap-8 pb-10 max-w-4xl mx-auto w-full px-4 sm:px-8 py-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-50 rounded-xl text-yellow-600 border border-yellow-100 shadow-sm md:hidden">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2">
                            Papan Peringkat
                        </h1>
                        <p className="text-slate-500 font-medium text-lg">
                            Lihat peringkat pembelajar dengan XP tertinggi
                        </p>
                    </div>
                </div>
            </div>

            {/* Filters - Completely transparent container */}
            <div className="flex flex-wrap gap-2 sticky top-0 z-10 py-2 bg-white/0">
                <button
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border shadow-sm ${filter === 'all'
                        ? 'bg-primary text-white border-primary shadow-primary/20'
                        : 'bg-white/80 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-white'
                        }`}
                    onClick={() => setFilter('all')}
                >
                    🌍 Semua
                </button>
                {Object.values(LANGUAGES).map(lang => (
                    <button
                        key={lang.code}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border shadow-sm flex items-center gap-2 ${filter === lang.code
                            ? 'bg-primary text-white border-primary shadow-primary/20'
                            : 'bg-white/80 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-white'
                            }`}
                        onClick={() => setFilter(lang.code)}
                    >
                        <span>{lang.flag}</span>
                        {lang.nameId}
                    </button>
                ))}
            </div>

            {/* Current User Rank Header */}
            {currentUserRank && (
                <div className="bg-primary text-white shadow-md rounded-2xl mb-2 animate-in fade-in slide-in-from-bottom-2 duration-500 overflow-hidden">
                    <div className="py-5 px-6 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-white/80 font-bold text-xs mb-1 uppercase tracking-wider">Peringkat Anda Saat Ini</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-extrabold">#{currentUserRank}</span>
                            </div>
                        </div>
                        <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                            <Trophy size={32} className="text-white" />
                        </div>
                    </div>
                </div>
            )}

            {/* Leaderboard List */}
            <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                {leaderboard.length === 0 ? (
                    <Card className="text-center py-16 border-dashed border-2 shadow-none bg-slate-50/50">
                        <CardBody>
                            <Trophy size={48} className="mx-auto text-slate-300 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900">Belum Ada Data</h3>
                            <p className="text-slate-500 text-sm mt-1">Belum ada data peringkat untuk kategori ini</p>
                        </CardBody>
                    </Card>
                ) : (
                    leaderboard.map((entry) => {
                        const langInfo = LANGUAGES[entry.language as keyof typeof LANGUAGES];
                        const isTop3 = entry.rank <= 3;

                        // Refined card styles for a cleaner look
                        let cardClass = "transition-all duration-200 hover:scale-[1.01] hover:shadow-md border";
                        if (entry.rank === 1) cardClass += " border-yellow-200 bg-gradient-to-r from-white to-yellow-50/30";
                        else if (entry.rank === 2) cardClass += " border-slate-200 bg-gradient-to-r from-white to-slate-50/30";
                        else if (entry.rank === 3) cardClass += " border-amber-200 bg-gradient-to-r from-white to-amber-50/30";
                        else cardClass += " border-slate-100 bg-white";

                        if (entry.isCurrentUser) cardClass += " ring-2 ring-primary ring-offset-2";

                        return (
                            <Card
                                key={entry.rank}
                                className={cardClass}
                            >
                                <CardBody className="p-4 flex items-center gap-4">
                                    <div className="flex-shrink-0 w-10 flex justify-center">
                                        {getRankIcon(entry.rank)}
                                    </div>

                                    <div className={`size-12 rounded-full flex items-center justify-center text-lg font-bold border-2 shadow-sm ${isTop3 ? 'bg-white border-white ring-1 ring-slate-100' : 'bg-slate-100 text-slate-500 border-white'
                                        }`}>
                                        {entry.name.charAt(0).toUpperCase()}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`font-bold text-lg truncate ${isTop3 ? 'text-slate-900' : 'text-slate-700'}`}>
                                                {entry.name}
                                            </span>
                                            {entry.isCurrentUser && (
                                                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                                                    Anda
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                                            <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                                                {langInfo?.flag} <span className="capitalize">{entry.level}</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end gap-1">
                                        <div className="font-extrabold text-slate-900 flex items-center gap-1.5 text-lg">
                                            <span className="text-amber-400 drop-shadow-sm">⭐</span>
                                            {entry.xp.toLocaleString()}
                                        </div>
                                        <div className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                                            <Flame size={12} fill="currentColor" />
                                            <span>{entry.streak} hari</span>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        );
                    })
                )}
            </div>
        </div>
    );
};

