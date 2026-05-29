import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterStep1: React.FC = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/register-step2');
    };

    // Calculate password strength (dummy logic)
    const getStrength = () => {
        if (password.length === 0) return { label: '', bars: 0 };
        if (password.length < 6) return { label: 'Lemah', bars: 1 };
        if (password.length < 10) return { label: 'Sedang', bars: 2 };
        return { label: 'Kuat', bars: 3 };
    };

    const strength = getStrength();

    return (
        <main className="flex-1 flex flex-col bg-surface-container-lowest relative overflow-x-hidden min-h-screen">
            {/* Custom Top App Bar with Step Indicator */}
            <header className="sticky top-0 z-30 bg-surface-container-lowest flex flex-col pt-md transition-all">
                <div className="flex items-center justify-between px-lg pb-sm">
                    <button 
                        onClick={() => navigate(-1)}
                        aria-label="Go back" 
                        className="w-10 h-10 flex items-center justify-center -ml-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 text-on-surface"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <h1 className="font-heading-2 text-[18px] text-on-surface font-semibold">
                        Daftar
                    </h1>
                    <span className="font-label-button text-[14px] text-n400-inactive">
                        1/2
                    </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full px-lg pb-md">
                    <div className="flex h-[4px] gap-1 rounded-full overflow-hidden">
                        <div className="flex-1 bg-primary rounded-full"></div>
                        <div className="flex-1 bg-surface-dim rounded-full"></div>
                    </div>
                </div>
            </header>
            
            <div className="px-lg pt-sm pb-xl flex flex-col flex-1">
                {/* Header Text */}
                <div className="mb-6">
                    <h2 className="font-heading-1 text-[24px] font-bold text-[#1a1f2c]">Buat Akun Anda</h2>
                    <p className="font-body-regular text-[14px] text-n600-secondary-text mt-1.5 leading-relaxed">
                        Mari mulai perjalanan daur ulang Anda bersama AkaraSirkula.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleNext} className="flex flex-col gap-4 flex-1">
                    
                    {/* Nama Lengkap */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-label-button text-[14px] text-[#1a1f2c]" htmlFor="name">
                            Nama Lengkap
                        </label>
                        <input 
                            type="text" 
                            id="name"
                            placeholder="Masukkan nama lengkap" 
                            className="w-full h-[48px] px-4 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular placeholder:text-n400-inactive"
                            required
                        />
                    </div>

                    {/* Email / No Telepon */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-label-button text-[14px] text-[#1a1f2c]" htmlFor="emailOrPhone">
                            Email atau Nomor Telepon
                        </label>
                        <input 
                            type="text" 
                            id="emailOrPhone"
                            placeholder="Masukkan email atau no. telepon" 
                            className="w-full h-[48px] px-4 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular placeholder:text-n400-inactive"
                            required
                        />
                    </div>

                    {/* Kata Sandi */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-label-button text-[14px] text-[#1a1f2c]" htmlFor="password">
                            Kata Sandi
                        </label>
                        <div className="relative">
                            <input 
                                type="password" 
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan kata sandi" 
                                className="w-full h-[48px] pl-4 pr-10 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular placeholder:text-n400-inactive"
                                required
                            />
                            <button 
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-n400-inactive hover:text-n600-secondary-text"
                            >
                                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                            </button>
                        </div>
                        {/* Password Strength Indicator */}
                        {password.length > 0 && (
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex-1 flex gap-1 h-1">
                                    <div className={`flex-1 rounded-full ${strength.bars >= 1 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
                                    <div className={`flex-1 rounded-full ${strength.bars >= 2 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
                                    <div className={`flex-1 rounded-full ${strength.bars >= 3 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
                                </div>
                                <span className="font-caption text-[12px] text-n600-secondary-text">{strength.label}</span>
                            </div>
                        )}
                    </div>

                    {/* Konfirmasi Kata Sandi */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-label-button text-[14px] text-[#1a1f2c]" htmlFor="confirmPassword">
                            Konfirmasi Kata Sandi
                        </label>
                        <div className="relative">
                            <input 
                                type="password" 
                                id="confirmPassword"
                                placeholder="Ulangi kata sandi" 
                                className="w-full h-[48px] pl-4 pr-10 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular placeholder:text-n400-inactive"
                                required
                            />
                            <button 
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-n400-inactive hover:text-n600-secondary-text"
                            >
                                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                            </button>
                        </div>
                    </div>

                    {/* Checkbox Syarat Ketentuan */}
                    <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                            <input type="checkbox" className="peer w-5 h-5 appearance-none border border-n300-border rounded checked:bg-primary checked:border-primary transition-colors cursor-pointer" required />
                            <span className="material-symbols-outlined absolute text-on-primary text-[16px] pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                        </div>
                        <span className="font-body-regular text-[13px] text-n600-secondary-text leading-tight">
                            Saya setuju dengan <a href="#" className="text-primary font-semibold hover:underline">Syarat & Ketentuan</a> dan <a href="#" className="text-primary font-semibold hover:underline">Kebijakan Privasi</a> yang berlaku di AkaraSirkula.
                        </span>
                    </label>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* Submit Button */}
                    <div className="mt-8 pb-4">
                        <button 
                            type="submit" 
                            className="w-full h-[48px] bg-primary text-on-primary rounded-xl font-label-button text-[16px] font-semibold hover:bg-[#005c3d] transition-colors active:scale-[0.98]"
                        >
                            Lanjut
                        </button>

                        {/* Login Link */}
                        <div className="mt-6 text-center">
                            <span className="font-body-regular text-[14px] text-n600-secondary-text">
                                Sudah punya akun?{' '}
                            </span>
                            <Link to="/login" className="font-label-button text-[14px] text-primary hover:underline font-semibold">
                                Masuk
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default RegisterStep1;
