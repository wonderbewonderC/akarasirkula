import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetorEstimasi: React.FC = () => {
    const navigate = useNavigate();
    
    // Simulate state for sliders (0-10 for plastic, 0-5 for logam)
    const [plastikWeight, setPlastikWeight] = useState(3.5);
    const [logamWeight, setLogamWeight] = useState(1.5);

    // Calculate points (100 pts/kg for plastic, 150 pts/kg for logam)
    const plastikPoints = Math.round(plastikWeight * 100);
    const logamPoints = Math.round(logamWeight * 150);
    const totalPoints = plastikPoints + logamPoints;

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-x-hidden h-screen">
            
            {/* Header */}
            <div className="bg-surface flex items-center justify-center px-4 py-4 z-20 relative border-b border-n300-border shrink-0">
                <button onClick={() => navigate(-1)} className="absolute left-4 w-10 h-10 flex items-center justify-start text-[#0f172a]">
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </button>
                <h1 className="font-heading-1 text-[18px] text-[#0f172a] font-bold">Setor Limbah</h1>
            </div>

            <div className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
                
                {/* Progress Indicator */}
                <div className="flex justify-center items-center gap-2 py-6">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="w-8 h-[2px] bg-primary"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="w-8 h-[2px] bg-[#e2e8f0]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#cbd5e1]"></div>
                </div>

                <div className="px-lg pb-6 text-center">
                    <h2 className="font-heading-1 text-[24px] text-[#0f172a] font-bold mb-2">Estimasi Berat</h2>
                    <p className="font-body-regular text-[14px] text-[#475569] leading-relaxed">
                        Geser slider untuk memperkirakan berat limbah yang akan Anda setor pada kategori yang dipilih.
                    </p>
                </div>

                <div className="px-lg flex flex-col gap-4">
                    
                    {/* Plastik Card */}
                    <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
                                </div>
                                <h3 className="font-heading-2 text-[18px] text-[#0f172a] font-bold">Plastik</h3>
                            </div>
                            <span className="bg-[#f1f5f9] text-[#475569] px-3 py-1 rounded-full font-body-regular text-[12px]">
                                Batas: 10 kg
                            </span>
                        </div>

                        {/* Slider Area */}
                        <div className="relative mb-6 mt-8">
                            <div className="absolute -top-8 left-[35%] -translate-x-1/2 bg-[#dcfce7] text-[#047857] px-2 py-0.5 rounded font-label-button text-[12px]">
                                {plastikWeight} kg
                            </div>
                            <input 
                                type="range" 
                                min="0" max="10" step="0.5"
                                value={plastikWeight}
                                onChange={(e) => setPlastikWeight(parseFloat(e.target.value))}
                                className="w-full h-2 bg-[#e2e8f0] rounded-full appearance-none accent-primary outline-none"
                            />
                            <div className="flex justify-between items-center mt-2 text-[#94a3b8] font-body-regular text-[12px]">
                                <span>0 kg</span>
                                <span>10 kg</span>
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-[#f1f5f9] mb-4"></div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1.5 text-[#475569]">
                                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                <span className="font-body-regular text-[14px]">Estimasi</span>
                            </div>
                            <span className="font-heading-1 text-[18px] text-[#047857] font-bold">{plastikPoints} Poin</span>
                        </div>
                    </div>

                    {/* Logam Card */}
                    <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center text-[#334155]">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
                                </div>
                                <h3 className="font-heading-2 text-[18px] text-[#0f172a] font-bold">Logam</h3>
                            </div>
                            <span className="bg-[#f1f5f9] text-[#475569] px-3 py-1 rounded-full font-body-regular text-[12px]">
                                Batas: 5 kg
                            </span>
                        </div>

                        {/* Slider Area */}
                        <div className="relative mb-6 mt-8">
                            <div className="absolute -top-8 left-[30%] -translate-x-1/2 bg-[#dcfce7] text-[#047857] px-2 py-0.5 rounded font-label-button text-[12px]">
                                {logamWeight} kg
                            </div>
                            <input 
                                type="range" 
                                min="0" max="5" step="0.5"
                                value={logamWeight}
                                onChange={(e) => setLogamWeight(parseFloat(e.target.value))}
                                className="w-full h-2 bg-[#e2e8f0] rounded-full appearance-none accent-primary outline-none"
                            />
                            <div className="flex justify-between items-center mt-2 text-[#94a3b8] font-body-regular text-[12px]">
                                <span>0 kg</span>
                                <span>5 kg</span>
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-[#f1f5f9] mb-4"></div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1.5 text-[#475569]">
                                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                <span className="font-body-regular text-[14px]">Estimasi</span>
                            </div>
                            <span className="font-heading-1 text-[18px] text-[#047857] font-bold">{logamPoints} Poin</span>
                        </div>
                    </div>

                    {/* Total Box */}
                    <div className="bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] border border-[#dcfce7] rounded-[16px] p-5 flex flex-col items-center mt-2">
                        <span className="font-body-regular text-[14px] text-[#475569] mb-1">Total Estimasi Poin</span>
                        <h2 className="font-heading-1 text-[32px] text-[#047857] font-bold mb-4">{totalPoints} Poin</h2>
                        
                        <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-lg flex items-start gap-2">
                            <span className="material-symbols-outlined text-[#F59E0B] text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                            <p className="font-body-regular text-[12px] text-[#475569] leading-tight">
                                Poin final akan disesuaikan setelah kurir atau petugas dropbox memverifikasi berat aktual limbah Anda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Button */}
            <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-surface p-lg z-30">
                <button 
                    onClick={() => navigate('/setor-jadwal')}
                    className="w-full bg-[#047857] text-white h-[56px] rounded-[12px] font-label-button text-[16px] flex items-center justify-center gap-2 shadow-sm hover:bg-[#065f46] transition-colors active:scale-[0.98]"
                >
                    Lanjutkan
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
            
        </main>
    );
};

export default SetorEstimasi;
