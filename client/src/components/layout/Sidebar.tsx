import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Home,
    BookOpen,
    MessageCircle, // Replaced Robot with MessageCircle as Smart Toy equivalent
    Users,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    School,
    Zap,
    Flame
} from 'lucide-react';
import { useAuthStore } from '../../stores';

export const Sidebar: React.FC = () => {
    const { user, logout } = useAuthStore();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const navItems = [
        { to: '/dashboard', icon: Home, label: 'Beranda' },
        { to: '/courses', icon: BookOpen, label: 'Pelajaran' },
        { to: '/ai-tutor', icon: MessageCircle, label: 'Tutor AI' },
        { to: '/leaderboard', icon: Users, label: 'Peringkat' }, // Renamed from Komunitas
        { to: '/profile', icon: Settings, label: 'Profil' }, // Renamed from Pengaturan
    ];

    return (
        <aside
            className={`h-full py-4 pl-4 pr-0 flex flex-col shrink-0 transition-all duration-300 relative z-20 ${isCollapsed ? 'w-24' : 'w-72'
                }`}
        >
            <div className={`glass-panel w-full h-full rounded-2xl flex flex-col border-r-0 relative transition-all duration-300 shadow-card`}>

                {/* Toggle Button - Fix position to be aligned with logo and visible */}
                <button
                    onClick={toggleSidebar}
                    className="absolute -right-3 top-7 w-6 h-6 bg-white border border-gray-100 rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-primary z-50 transform hover:scale-110 transition-all"
                >
                    {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>

                {/* Header */}
                <div className={`p-6 flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''} transition-all`}>
                    <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-glow shrink-0">
                        <School size={24} />
                    </div>
                    {!isCollapsed && (
                        <div className="animate-in fade-in duration-300">
                            <h1 className="text-xl font-bold text-slate-900 dark:text-gray-900 tracking-tight whitespace-nowrap">CMI Learn</h1>
                        </div>
                    )}
                </div>

                {/* User Profile Summary - Only visible when expanded */}
                {!isCollapsed && user && (
                    <div className="px-6 mb-6 animate-in fade-in slide-in-from-left-4 duration-300">
                        <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-11 rounded-full bg-gray-100 border border-primary/20 shrink-0 overflow-hidden">
                                    <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-sm text-slate-800 truncate">{user.name}</p>
                                    <p className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full inline-block mt-1">
                                        Level {user.currentLevel === 'beginner' ? 1 : user.currentLevel === 'elementary' ? 2 : user.currentLevel === 'intermediate' ? 3 : 4}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-1">
                                <div className="flex items-center gap-1.5" title="Total XP">
                                    <Zap size={18} className="text-yellow-500 fill-yellow-500" />
                                    <span className="text-xs font-bold text-slate-600">{user.xp} XP</span>
                                </div>
                                <div className="flex items-center gap-1.5" title="Day Streak">
                                    <Flame size={18} className="text-orange-500 fill-orange-500" />
                                    <span className="text-xs font-bold text-slate-600">{user.streak} Hari</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Collapsed XP/Streak icons */}
                {isCollapsed && user && (
                    <div className="px-2 mb-6 flex flex-col items-center gap-2 animate-in fade-in duration-300">
                        <div className="p-2 rounded-xl bg-yellow-50 text-yellow-500" title={`${user.xp} XP`}>
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <div className="p-2 rounded-xl bg-orange-50 text-orange-500" title={`${user.streak} Days`}>
                            <Flame size={20} fill="currentColor" />
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto scrollbar-thin">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${isActive
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                } ${isCollapsed ? 'justify-center px-2' : ''}`
                            }
                            title={isCollapsed ? item.label : undefined}
                        >
                            <item.icon
                                size={22}
                                className={`shrink-0 transition-colors ${!isCollapsed ? 'group-hover:text-primary' : ''
                                    }`}
                            />
                            {!isCollapsed && (
                                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer */}
                <div className="p-6 mt-auto">
                    <button
                        onClick={logout}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors w-full group ${isCollapsed ? 'justify-center px-2' : ''
                            }`}
                        title="Keluar"
                    >
                        <LogOut size={22} className="shrink-0" />
                        {!isCollapsed && <span className="text-sm font-medium">Keluar</span>}
                    </button>
                </div>
            </div>
        </aside>
    );
};

