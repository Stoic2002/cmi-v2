import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../stores';

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login, isLoading, error, clearError } = useAuthStore();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            navigate('/dashboard');
        } catch {
            // Error handled by store
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearError();
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light font-display overflow-hidden selection:bg-primary selection:text-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[120px] opacity-60 mix-blend-multiply animate-pulse"></div>
                <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary/30 blur-[100px] opacity-50 mix-blend-multiply"></div>
                <div className="absolute top-[20%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-accent/10 blur-[80px] opacity-60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" data-alt="subtle noise texture overlay"></div>
            </div>
            <div className="layout-container flex h-full grow flex-col z-10 relative items-center justify-center p-4 sm:p-8">
                <div className="glass-panel w-full max-w-[480px] rounded-xl p-8 sm:p-10 flex flex-col items-center">
                    <div className="flex flex-col items-center w-full mb-8 text-center">
                        <div className="mb-5">
                            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                                <span className="material-symbols-outlined text-white text-[28px]">auto_awesome</span>
                            </div>
                        </div>
                        <h1 className="text-gray-900 tracking-tight text-3xl font-bold mb-2">CMI Learn</h1>
                        <p className="text-gray-500 text-base font-medium">Platform Pembelajaran Bahasa</p>
                    </div>

                    {error && (
                        <div className="w-full mb-6 p-4 rounded-lg bg-error-bg border border-error/20 text-error text-sm font-medium text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                        <div className="group">
                            <label className="block text-gray-500 text-sm font-medium mb-2 ml-1">Email Address</label>
                            <div className="relative flex items-center">
                                <input
                                    className="w-full h-14 pl-12 pr-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 input-gradient"
                                    placeholder="user@example.com"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="material-symbols-outlined absolute left-4 text-gray-400 group-focus-within:text-primary transition-colors">mail</span>
                            </div>
                        </div>
                        <div className="group">
                            <div className="flex justify-between items-center mb-2 ml-1">
                                <label className="block text-gray-500 text-sm font-medium">Password</label>
                            </div>
                            <div className="relative flex items-center">
                                <input
                                    className="w-full h-14 pl-12 pr-12 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 input-gradient"
                                    placeholder="••••••••"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="material-symbols-outlined absolute left-4 text-gray-400 group-focus-within:text-primary transition-colors">lock</span>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors flex items-center"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? 'visibility' : 'visibility_off'}
                                    </span>
                                </button>
                            </div>
                            <div className="flex justify-end mt-2 mr-1">
                                <a className="text-sm text-primary hover:text-primary-hover transition-colors" href="#">Lupa password?</a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-4 w-full h-12 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold text-base shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Memuat...' : 'Masuk'}
                            {!isLoading && <span className="material-symbols-outlined text-xl">arrow_forward</span>}
                        </button>
                    </form>
                    <div className="text-center mt-8">
                        <p className="text-gray-500">
                            Belum punya akun?{' '}
                            <Link className="text-gray-900 font-semibold hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all duration-300" to="/register">
                                Daftar sekarang
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center z-10">
                    <p className="text-gray-400 text-xs font-light tracking-widest uppercase">Powered by AI • Secured by Web3</p>
                </div>
            </div>
        </div>
    );
};
