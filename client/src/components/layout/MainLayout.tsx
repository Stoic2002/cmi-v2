import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const MainLayout: React.FC = () => {
    return (
        <div className="relative flex h-screen w-full bg-background-light font-display overflow-hidden selection:bg-primary selection:text-white">
            {/* Global Animated Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[120px] opacity-60 mix-blend-multiply animate-pulse"></div>
                <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary/30 blur-[100px] opacity-50 mix-blend-multiply"></div>
                <div className="absolute top-[20%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-accent/10 blur-[80px] opacity-60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" data-alt="subtle noise texture overlay"></div>
            </div>

            <div className="relative z-10 flex w-full h-full">
                <Sidebar />
                <main className="flex-1 h-full overflow-y-auto p-4 sm:p-8">
                    <div className="w-full max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};
