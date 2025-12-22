import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    User,
    Mail,
    Globe,
    Calendar,
    Edit2,
    LogOut,
    Award,
    Camera,
    TrendingUp,
    Zap,
    Flame,
    BookOpen,
    Target
} from 'lucide-react';
import { Button, Input, ConfirmDialog } from '../../components/common';
import { useAuthStore, useUserStore } from '../../stores';
import { LANGUAGES, LEVELS } from '../../utils/constants';

export const Profile: React.FC = () => {
    const navigate = useNavigate();
    const { user, logout, updateProfile } = useAuthStore();
    const { progress, fetchProgress } = useUserStore();
    const [isEditing, setIsEditing] = React.useState(false);
    const [isSaving, setIsSaving] = React.useState(false);
    const [showLogoutDialog, setShowLogoutDialog] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: user?.name || '',
        targetLanguage: user?.targetLanguage || 'en',
        currentLevel: user?.currentLevel || 'A1',
    });

    React.useEffect(() => {
        fetchProgress();
    }, []);

    React.useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                targetLanguage: user.targetLanguage,
                currentLevel: user.currentLevel,
            });
        }
    }, [user]);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await updateProfile(formData);
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
        setIsSaving(false);
    };

    const handleCancel = () => {
        if (user) {
            setFormData({
                name: user.name,
                targetLanguage: user.targetLanguage,
                currentLevel: user.currentLevel,
            });
        }
        setIsEditing(false);
    };

    const languageInfo = user?.targetLanguage
        ? LANGUAGES[user.targetLanguage as keyof typeof LANGUAGES]
        : null;
    const levelInfo = user?.currentLevel
        ? LEVELS[user.currentLevel as keyof typeof LEVELS]
        : null;

    const memberSince = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString('id-ID', {
            month: 'long',
            year: 'numeric'
        })
        : '-';

    return (
        <div className="flex flex-col gap-8 pb-10 max-w-5xl mx-auto w-full">

            {/* Header */}
            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <User size={28} />
                </div>
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">Profil Saya</h2>
                    <p className="text-slate-500 text-sm font-medium">Kelola informasi dan statistik belajar Anda</p>
                </div>
            </div>

            {/* Profile Info Card (Glass Panel) */}
            <div className="glass-panel rounded-3xl shadow-soft overflow-hidden transition-all duration-300 relative border border-white/60">
                <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="p-8 md:p-10 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                        <div className="flex items-center gap-6">
                            <div className="relative group">
                                <div className="size-20 md:size-24 rounded-full bg-primary/10 border-2 border-primary/20 p-1 shadow-sm">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-bold text-primary tracking-tighter">
                                        {user?.name.charAt(0).toUpperCase()}
                                    </div>
                                </div>
                                <button className="absolute bottom-1 right-1 bg-white shadow-md border border-primary/10 p-1.5 rounded-full text-slate-500 hover:text-primary hover:scale-110 transition-all">
                                    <Camera size={18} />
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{user?.name}</h3>
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Mail size={16} />
                                    <span>{user?.email}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium border border-green-200">Online</span>
                                    <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium border border-primary/20">Pro Member</span>
                                </div>
                            </div>
                        </div>

                        {!isEditing && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                            >
                                <Edit2 size={18} />
                                Edit Profil
                            </button>
                        )}
                    </div>

                    {isEditing ? (
                        <div className="bg-white/50 border border-white/60 p-6 rounded-2xl animate-in fade-in slide-in-from-top-4">
                            <div className="space-y-6">
                                <Input
                                    label="Nama Lengkap"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Bahasa Target</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {Object.values(LANGUAGES).map((lang) => (
                                            <button
                                                key={lang.code}
                                                className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${formData.targetLanguage === lang.code
                                                    ? 'border-primary bg-primary/5 text-primary ring-2 ring-primary/10'
                                                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                                                    }`}
                                                onClick={() => setFormData({ ...formData, targetLanguage: lang.code as 'en' | 'ko' | 'ja' })}
                                            >
                                                <span className="text-2xl">{lang.flag}</span>
                                                <span className="font-bold text-sm">{lang.nameId}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Level</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {Object.values(LEVELS).map((level) => (
                                            <button
                                                key={level.code}
                                                className={`px-4 py-3 rounded-xl border text-sm font-bold transition-all ${formData.currentLevel === level.code
                                                    ? 'border-primary bg-primary/5 text-primary ring-2 ring-primary/10'
                                                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                                                    }`}
                                                onClick={() => setFormData({ ...formData, currentLevel: level.code })}
                                            >
                                                {level.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                                    <Button variant="ghost" onClick={handleCancel}>Batal</Button>
                                    <Button onClick={handleSave} isLoading={isSaving}>Simpan Perubahan</Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white/50 border border-white/60 p-4 rounded-2xl hover:bg-white/80 transition-colors shadow-sm">
                                <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                                    <Globe size={16} /> Bahasa Target
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{languageInfo?.flag}</span>
                                    <span className="font-bold text-lg text-slate-900">{languageInfo?.nameId}</span>
                                </div>
                            </div>

                            <div className="bg-white/50 border border-white/60 p-4 rounded-2xl hover:bg-white/80 transition-colors shadow-sm">
                                <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                                    <TrendingUp size={16} /> Level
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-lg text-slate-900">{levelInfo?.name}</span>
                                    {/* CEFR level is now directly stored, show local standard if available */}
                                    {levelInfo?.localStandard && user?.targetLanguage && levelInfo.localStandard[user.targetLanguage as keyof typeof levelInfo.localStandard] !== '-' && (
                                        <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded border border-yellow-200">
                                            {levelInfo.localStandard[user.targetLanguage as keyof typeof levelInfo.localStandard]}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="bg-white/50 border border-white/60 p-4 rounded-2xl hover:bg-white/80 transition-colors shadow-sm">
                                <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                                    <Calendar size={16} /> Bergabung
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-lg text-slate-900">{memberSince}</span>
                                </div>
                            </div>

                            <div className="bg-white/50 border border-white/60 p-4 rounded-2xl hover:bg-white/80 transition-colors shadow-sm">
                                <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                                    <Mail size={16} /> Email
                                </div>
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <span className="font-bold text-base text-slate-900 truncate" title={user?.email}>
                                        {user?.email}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/10"></div>
            </div>

            {/* Statistics Grid */}
            <h3 className="text-xl font-bold text-slate-900 mt-4 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
                <Award className="text-primary" size={24} /> Statistik Belajar
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                {/* XP Card */}
                <div className="bg-white rounded-2xl p-5 shadow-soft border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                                <Zap size={20} fill="currentColor" />
                            </div>
                            <span className="text-sm font-medium text-slate-500">Total XP</span>
                        </div>
                        <p className="text-3xl font-black text-slate-900 tracking-tight">{user?.xp.toLocaleString()}</p>
                        <p className="text-xs text-green-600 font-medium mt-1 flex items-center">
                            <TrendingUp size={14} className="mr-0.5" /> +150 minggu ini
                        </p>
                    </div>
                </div>

                {/* Streak Card */}
                <div className="bg-white rounded-2xl p-5 shadow-soft border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                <Flame size={20} fill="currentColor" />
                            </div>
                            <span className="text-sm font-medium text-slate-500">Hari Streak</span>
                        </div>
                        <p className="text-3xl font-black text-slate-900 tracking-tight">{user?.streak}</p>
                        <p className="text-xs text-slate-500 font-medium mt-1">Hari berturut-turut!</p>
                    </div>
                </div>

                {/* Lessons Card */}
                <div className="bg-white rounded-2xl p-5 shadow-soft border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                <BookOpen size={20} />
                            </div>
                            <span className="text-sm font-medium text-slate-500">Pelajaran</span>
                        </div>
                        <p className="text-3xl font-black text-slate-900 tracking-tight">{progress?.completedLessons || 0}</p>
                        <p className="text-xs text-slate-500 font-medium mt-1">Selesai</p>
                    </div>
                </div>

                {/* Quiz Card */}
                <div className="bg-white rounded-2xl p-5 shadow-soft border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 bg-accent/10 text-accent rounded-lg">
                                <Target size={20} />
                            </div>
                            <span className="text-sm font-medium text-slate-500">Kuis</span>
                        </div>
                        <p className="text-3xl font-black text-slate-900 tracking-tight">{progress?.quizzesTaken || 0}</p>
                        <p className="text-xs text-green-600 font-medium mt-1">Avg. Score {progress?.quizAccuracy || 0}%</p>
                    </div>
                </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <User size={20} className="text-slate-500" /> Pengaturan Akun
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                            <LogOut size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Keluar dari Akun</p>
                            <p className="text-sm text-slate-500">Akhiri sesi anda di perangkat ini</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowLogoutDialog(true)}
                        className="w-full md:w-auto px-6 py-2.5 rounded-lg border border-red-200 text-red-600 font-bold hover:bg-red-50 transition-colors"
                    >
                        Keluar
                    </button>
                </div>
            </div>

            {/* Logout Confirmation Dialog */}
            <ConfirmDialog
                isOpen={showLogoutDialog}
                onClose={() => setShowLogoutDialog(false)}
                onConfirm={() => {
                    logout();
                    navigate('/login');
                }}
                title="Keluar dari Akun"
                message="Apakah Anda yakin ingin keluar dari akun? Anda perlu login kembali untuk mengakses aplikasi."
                confirmText="Ya, Keluar"
                cancelText="Tidak"
                variant="danger"
            />

        </div>
    );
};
