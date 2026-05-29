import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from '../../components/Shared/TopAppBar';

const RegisterStep2: React.FC = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState<'user' | 'umkm' | null>(null);

    const handleNext = () => {
        if (role === 'user') {
            navigate('/register-success');
        } else if (role === 'umkm') {
            navigate('/register-step3');
        }
    };

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-x-hidden min-h-screen">
            <TopAppBar title="Pilih Peran" showBack={true} />
            
            <div className="px-lg pt-md pb-xl flex flex-col flex-1">
                {/* Header Text */}
                <div className="mb-xl">
                    <h2 className="font-heading-1 text-heading-1 text-on-surface">Bagaimana Anda ingin berpartisipasi?</h2>
                    <p className="font-body-regular text-[14px] text-n600-secondary-text mt-2">
                        Pilih peran utama Anda di ekosistem AkaraSirkula. Anda tetap bisa menikmati fitur sirkular lainnya.
                    </p>
                </div>

                {/* Role Selection Cards */}
                <div className="flex flex-col gap-4 flex-1">
                    
                    {/* Option 1: Donor & Pembeli */}
                    <label 
                        className={`relative p-lg rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                            role === 'user' 
                            ? 'border-primary bg-primary/5 shadow-[0_4px_16px_rgba(16,185,129,0.1)]' 
                            : 'border-n300-border bg-surface hover:border-outline-variant hover:bg-surface-container-low'
                        }`}
                    >
                        <input 
                            type="radio" 
                            name="role" 
                            value="user" 
                            className="hidden" 
                            checked={role === 'user'}
                            onChange={() => setRole('user')}
                        />
                        
                        {/* Icon Container */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            role === 'user' ? 'bg-primary text-on-primary' : 'bg-surface-variant text-on-surface-variant'
                        }`}>
                            <span className="material-symbols-outlined text-[24px]">person</span>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-1 pr-6">
                            <h3 className="font-heading-2 text-[16px] text-on-surface">Donor & Pembeli</h3>
                            <p className="font-body-regular text-[13px] text-n600-secondary-text leading-relaxed">
                                Saya ingin menyetor limbah, mengumpulkan poin, dan membeli produk upcycle yang ramah lingkungan.
                            </p>
                        </div>

                        {/* Active Indicator (Checkmark) */}
                        <div className={`absolute top-lg right-lg w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                            role === 'user' ? 'bg-primary scale-100 opacity-100' : 'scale-50 opacity-0'
                        }`}>
                            <span className="material-symbols-outlined text-[14px] text-on-primary" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                        </div>
                    </label>

                    {/* Option 2: UMKM Mitra */}
                    <label 
                        className={`relative p-lg rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                            role === 'umkm' 
                            ? 'border-primary bg-primary/5 shadow-[0_4px_16px_rgba(16,185,129,0.1)]' 
                            : 'border-n300-border bg-surface hover:border-outline-variant hover:bg-surface-container-low'
                        }`}
                    >
                        <input 
                            type="radio" 
                            name="role" 
                            value="umkm" 
                            className="hidden" 
                            checked={role === 'umkm'}
                            onChange={() => setRole('umkm')}
                        />
                        
                        {/* Icon Container */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            role === 'umkm' ? 'bg-primary text-on-primary' : 'bg-surface-variant text-on-surface-variant'
                        }`}>
                            <span className="material-symbols-outlined text-[24px]">storefront</span>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-1 pr-6">
                            <h3 className="font-heading-2 text-[16px] text-on-surface">UMKM Mitra</h3>
                            <p className="font-body-regular text-[13px] text-n600-secondary-text leading-relaxed">
                                Saya adalah pelaku usaha yang mengolah limbah atau menjual produk berkelanjutan dan ingin memperluas pasar.
                            </p>
                        </div>

                        {/* Active Indicator (Checkmark) */}
                        <div className={`absolute top-lg right-lg w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                            role === 'umkm' ? 'bg-primary scale-100 opacity-100' : 'scale-50 opacity-0'
                        }`}>
                            <span className="material-symbols-outlined text-[14px] text-on-primary" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                        </div>
                    </label>

                </div>

                {/* Progress Indicators (Step 2 of 2) */}
                <div className="flex justify-center gap-sm my-6">
                    <div className="h-2 rounded-full w-4 bg-primary/40"></div>
                    <div className="h-2 rounded-full w-8 bg-primary"></div>
                </div>

                {/* Submit Button */}
                <button 
                    type="button" 
                    onClick={handleNext}
                    disabled={!role}
                    className={`w-full h-[48px] rounded-xl font-label-button text-label-button shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                        role 
                        ? 'bg-primary text-on-primary hover:bg-[#005c3d]' 
                        : 'bg-n300-border text-n600-secondary-text cursor-not-allowed shadow-none'
                    }`}
                >
                    {role === 'umkm' ? 'Lanjut Isi Profil UMKM' : 'Selesaikan Pendaftaran'}
                    <span className="material-symbols-outlined text-[20px]">
                        {role === 'umkm' ? 'arrow_forward' : 'check_circle'}
                    </span>
                </button>
            </div>
        </main>
    );
};

export default RegisterStep2;
