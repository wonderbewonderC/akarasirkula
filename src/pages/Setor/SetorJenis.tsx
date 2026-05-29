import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetorJenis: React.FC = () => {
    const navigate = useNavigate();
    const [selectedJenis, setSelectedJenis] = useState<string[]>([]);

    const toggleJenis = (jenis: string) => {
        if (selectedJenis.includes(jenis)) {
            setSelectedJenis(selectedJenis.filter(j => j !== jenis));
        } else {
            setSelectedJenis([...selectedJenis, jenis]);
        }
    };

    return (
        <main className="flex-1 flex flex-col bg-surface-container-lowest pt-[48px] px-lg pb-xxl relative">
            
            {/* Top Navigation & Progress */}
            <div className="flex justify-between items-center mb-md">
                <div>
                    <h2 className="font-heading-2 text-[18px] font-bold text-on-surface">Setor Limbah</h2>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                        <div className="w-8 h-[2px] bg-n300-border"></div>
                        <div className="w-2 h-2 rounded-full bg-n300-border"></div>
                        <div className="w-8 h-[2px] bg-n300-border"></div>
                        <div className="w-2 h-2 rounded-full bg-n300-border"></div>
                        <span className="font-caption text-[12px] text-n400-inactive ml-2">step 1</span>
                    </div>
                </div>
                <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
            </div>

            <h3 className="font-heading-2 text-[16px] font-medium text-on-surface mb-lg">Limbah apa yang ingin kamu setor?</h3>

            {/* Waste Types Grid */}
            <div className="grid grid-cols-3 gap-md flex-1 content-start">
                {/* Plastik */}
                <button 
                    onClick={() => toggleJenis('Plastik')}
                    className={`flex flex-col items-center justify-center gap-2 p-md rounded-xl border ${selectedJenis.includes('Plastik') ? 'bg-[#D1FAE5] border-primary-container shadow-sm scale-[0.98]' : 'bg-surface border-n300-border'} transition-all`}
                >
                    <span className="text-[32px]">🧴</span>
                    <span className={`font-label-button text-[12px] ${selectedJenis.includes('Plastik') ? 'font-bold text-primary-container' : 'text-n600-secondary-text'}`}>Plastik</span>
                </button>

                {/* Kertas */}
                <button 
                    onClick={() => toggleJenis('Kertas')}
                    className={`flex flex-col items-center justify-center gap-2 p-md rounded-xl border ${selectedJenis.includes('Kertas') ? 'bg-[#D1FAE5] border-primary-container shadow-sm scale-[0.98]' : 'bg-surface border-n300-border'} transition-all`}
                >
                    <span className="text-[32px]">📄</span>
                    <span className={`font-label-button text-[12px] ${selectedJenis.includes('Kertas') ? 'font-bold text-primary-container' : 'text-n600-secondary-text'}`}>Kertas</span>
                </button>

                {/* Minyak Jelantah */}
                <button 
                    onClick={() => toggleJenis('Minyak')}
                    className={`flex flex-col items-center justify-center gap-2 p-md rounded-xl border ${selectedJenis.includes('Minyak') ? 'bg-[#D1FAE5] border-primary-container shadow-sm scale-[0.98]' : 'bg-surface border-n300-border'} transition-all`}
                >
                    <span className="text-[32px]">💧</span>
                    <span className={`font-label-button text-[12px] text-center leading-tight ${selectedJenis.includes('Minyak') ? 'font-bold text-primary-container' : 'text-n600-secondary-text'}`}>Minyak<br/>Jelantah</span>
                </button>

                {/* Kain Perca */}
                <button 
                    onClick={() => toggleJenis('Kain')}
                    className={`flex flex-col items-center justify-center gap-2 p-md rounded-xl border ${selectedJenis.includes('Kain') ? 'bg-[#D1FAE5] border-primary-container shadow-sm scale-[0.98]' : 'bg-surface border-n300-border'} transition-all`}
                >
                    <span className="text-[32px]">✂️</span>
                    <span className={`font-label-button text-[12px] text-center leading-tight ${selectedJenis.includes('Kain') ? 'font-bold text-primary-container' : 'text-n600-secondary-text'}`}>Kain<br/>Perca</span>
                </button>

                {/* Logam */}
                <button 
                    onClick={() => toggleJenis('Logam')}
                    className={`flex flex-col items-center justify-center gap-2 p-md rounded-xl border ${selectedJenis.includes('Logam') ? 'bg-[#D1FAE5] border-primary-container shadow-sm scale-[0.98]' : 'bg-surface border-n300-border'} transition-all`}
                >
                    <span className="text-[32px]">🔧</span>
                    <span className={`font-label-button text-[12px] ${selectedJenis.includes('Logam') ? 'font-bold text-primary-container' : 'text-n600-secondary-text'}`}>Logam</span>
                </button>

                {/* Lainnya */}
                <button 
                    onClick={() => toggleJenis('Lainnya')}
                    className={`flex flex-col items-center justify-center gap-2 p-md rounded-xl border ${selectedJenis.includes('Lainnya') ? 'bg-[#D1FAE5] border-primary-container shadow-sm scale-[0.98]' : 'bg-surface border-n300-border'} transition-all`}
                >
                    <span className="text-[32px]">📦</span>
                    <span className={`font-label-button text-[12px] ${selectedJenis.includes('Lainnya') ? 'font-bold text-primary-container' : 'text-n600-secondary-text'}`}>Lainnya</span>
                </button>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-lg">
                <button 
                    onClick={() => navigate('/setor-estimasi')}
                    disabled={selectedJenis.length === 0}
                    className={`w-full h-14 rounded-full font-label-button text-[16px] font-bold transition-all shadow-[0_4px_12px_rgba(16,185,129,0.2)] ${selectedJenis.length > 0 ? 'bg-primary-container text-white active:scale-95' : 'bg-n300-border text-n400-inactive opacity-50 cursor-not-allowed'}`}
                >
                    Lanjut
                </button>
            </div>

        </main>
    );
};

export default SetorJenis;
