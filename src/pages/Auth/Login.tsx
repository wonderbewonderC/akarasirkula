import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = React.useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Extract name from email (e.g. ahmad.santoso@email.com -> Ahmad Santoso)
        const namePart = email.split('@')[0] || '';
        const generatedName = namePart
            .split('.')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Simple auth simulation for UMKM role
        if (email.toLowerCase().includes('umkm')) {
            login({
                id: '2',
                name: generatedName || 'Kriya Daur UMKM',
                email: email,
                role: 'umkm',
                balance: 2450000,
                location: 'Bandung, Jawa Barat',
                joinDate: '2023-01-15'
            });
            navigate('/umkm/dashboard');
        } else {
            login({
                id: '1',
                name: generatedName || 'Ahmad Santoso',
                email: email,
                role: 'user',
                points: 1250,
                location: 'Jakarta Selatan',
                joinDate: '2024-05-10'
            });
            navigate('/home');
        }
    };

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-x-hidden min-h-screen pb-10">
            {/* Custom Header Area */}
            <div className="relative h-[240px] w-full bg-primary-container shrink-0 rounded-b-[40px] overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80 z-10"></div>
                <img 
                    src="https://picsum.photos/seed/1/400/400"
                    alt="Eco Background" 
                    className="w-full h-full object-cover mix-blend-overlay"
                />
                
                {/* Back Button */}
                <button 
                    onClick={() => navigate('/onboarding')}
                    className="absolute top-md left-md z-20 w-10 h-10 flex items-center justify-center rounded-full bg-surface/20 backdrop-blur-md text-on-primary hover:bg-surface/30 transition-colors"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </button>

                <div className="absolute bottom-lg left-lg z-20">
                    <h1 className="font-display-lg text-display-lg text-on-primary">Selamat Datang<br/>Kembali</h1>
                    <p className="font-body-regular text-body-regular text-on-primary/80 mt-1">
                        Masuk untuk melanjutkan aksi sirkularmu.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="px-lg pt-xl flex flex-col flex-1">
                <form onSubmit={handleLogin} className="flex flex-col gap-md flex-1">
                    
                    {/* Email Input */}
                    <div className="flex flex-col gap-1">
                        <label className="font-label-button text-[14px] text-on-surface" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-n400-inactive text-[20px]">
                                mail
                            </span>
                            <input 
                                type="email" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan email Anda" 
                                className="w-full h-[48px] pl-10 pr-4 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular placeholder:text-n400-inactive"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col gap-1">
                        <label className="font-label-button text-[14px] text-on-surface" htmlFor="password">
                            Kata Sandi
                        </label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-n400-inactive text-[20px]">
                                lock
                            </span>
                            <input 
                                type="password" 
                                id="password"
                                placeholder="Masukkan kata sandi" 
                                className="w-full h-[48px] pl-10 pr-10 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular placeholder:text-n400-inactive"
                                required
                            />
                            <button 
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-n400-inactive hover:text-on-surface-variant p-1"
                            >
                                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                            </button>
                        </div>
                    </div>

                    {/* Lupa Kata Sandi */}
                    <div className="flex justify-end mt-[-4px]">
                        <button type="button" className="font-label-button text-[12px] text-primary hover:underline">
                            Lupa kata sandi?
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full h-[48px] mt-4 bg-primary text-on-primary rounded-xl font-label-button text-label-button shadow-md hover:bg-[#005c3d] transition-colors active:scale-[0.98]"
                    >
                        Masuk
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-4">
                        <div className="flex-1 h-[1px] bg-n300-border"></div>
                        <span className="font-caption text-[12px] text-n600-secondary-text">Atau masuk dengan</span>
                        <div className="flex-1 h-[1px] bg-n300-border"></div>
                    </div>

                    {/* Google Login (Simulated) */}
                    <button 
                        type="button" 
                        className="w-full h-[48px] border border-n300-border bg-surface-container-lowest rounded-xl font-label-button text-label-button flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors active:scale-[0.98]"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                    </button>
                </form>
                
                {/* Register Link */}
                <div className="mt-8 text-center">
                    <span className="font-body-regular text-[14px] text-n600-secondary-text">
                        Belum punya akun?{' '}
                    </span>
                    <Link to="/register-step1" className="font-label-button text-[14px] text-primary hover:underline">
                        Daftar sekarang
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Login;
