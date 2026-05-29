import React from 'react';
import { useNavigate } from 'react-router-dom';

const SetorKonfirmasi: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 flex flex-col bg-surface-container-lowest pt-[48px] px-lg pb-xxl relative overflow-y-auto hide-scrollbar">
            
            {/* Top Navigation & Progress */}
            <div className="flex justify-between items-center mb-md">
                <div>
                    <h2 className="font-heading-2 text-[18px] font-bold text-on-surface">Setor Limbah</h2>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                        <div className="w-8 h-[2px] bg-primary-container"></div>
                        <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                        <div className="w-8 h-[2px] bg-primary-container"></div>
                        <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                        <div className="w-8 h-[2px] bg-primary-container"></div>
                        <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                        <span className="font-caption text-[12px] text-primary ml-2">step 4</span>
                    </div>
                </div>
                <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
            </div>

            <h3 className="font-heading-2 text-[16px] font-medium text-on-surface mb-lg">Cek sebelum konfirmasi</h3>

            {/* Receipt Card */}
            <div className="bg-surface-container-lowest border border-n300-border rounded-2xl p-lg shadow-sm flex flex-col gap-md flex-1 content-start mb-lg relative overflow-hidden">
                
                {/* Method */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D1FAE5] flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-[24px]">local_shipping</span>
                    </div>
                    <div>
                        <h4 className="font-label-button text-[14px] font-bold text-on-surface">Dijemput</h4>
                        <span className="font-caption text-[12px] text-n600-secondary-text">Kurir akan datang ke lokasimu</span>
                    </div>
                </div>

                <div className="w-full border-t border-dashed border-n300-border"></div>

                {/* Waste Items */}
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-[20px]">🧴</span>
                            <span className="font-body-regular text-[14px] text-on-surface">Plastik</span>
                        </div>
                        <span className="font-label-button text-[14px] font-bold text-on-surface">~3.5 kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-[20px]">🔧</span>
                            <span className="font-body-regular text-[14px] text-on-surface">Logam</span>
                        </div>
                        <span className="font-label-button text-[14px] font-bold text-on-surface">~1.5 kg</span>
                    </div>
                </div>

                <div className="w-full border-t border-dashed border-n300-border"></div>

                {/* Address & Date */}
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-start">
                        <span className="material-symbols-outlined text-n400-inactive text-[20px]">location_on</span>
                        <span className="font-body-regular text-[14px] text-on-surface leading-tight">
                            Jl. Merdeka No.12, Sumur Bandung<br/>
                            <span className="text-[12px] text-n600-secondary-text">Catatan: Dekat warung bu siti</span>
                        </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="material-symbols-outlined text-n400-inactive text-[20px]">calendar_month</span>
                        <span className="font-body-regular text-[14px] text-on-surface">Kamis, 22 Mei — <span className="font-bold">Pagi (07-10)</span></span>
                    </div>
                </div>

                <div className="w-full border-t border-dashed border-n300-border"></div>

                {/* Total Points */}
                <div className="flex flex-col items-center justify-center py-sm">
                    <span className="font-body-regular text-[14px] text-n600-secondary-text">Total Estimasi Poin</span>
                    <span className="font-display-lg text-[32px] font-bold text-primary-container mt-1">575 Poin</span>
                </div>

                <div className="w-full border-t border-dashed border-n300-border"></div>

                {/* Info Text */}
                <div className="flex items-start gap-2 bg-surface-container-low p-3 rounded-lg border border-surface-dim">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">info</span>
                    <span className="font-caption text-[12px] text-on-surface-variant leading-tight">Poin final dihitung berdasarkan berat aktual ketika ditimbang di hub.</span>
                </div>
                
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-sm pb-md">
                <button 
                    onClick={() => navigate('/setor-success')}
                    className="w-full h-14 rounded-full font-label-button text-[16px] font-bold bg-primary-container text-white active:scale-95 transition-all shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
                >
                    Konfirmasi Setor
                </button>
            </div>

        </main>
    );
};

export default SetorKonfirmasi;
