import React from 'react';

const HargaLimbah: React.FC = () => {
    return (
        <main className="flex-1 pt-nav-height pb-[100px] px-lg overflow-y-auto bg-background text-on-background">
            
            {/* Page Header Section */}
            <div className="mt-lg mb-xxl flex justify-between items-center">
                <div>
                    <h2 className="font-heading-2 text-[18px] font-bold text-on-surface">Harga Limbah Hari Ini</h2>
                    <p className="font-caption text-[12px] text-n600-secondary-text mt-1">Diperbarui pada 24 Okt, 08:00 WIB</p>
                </div>
                <button className="bg-surface-container w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors active:scale-95">
                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                </button>
            </div>

            {/* Bento Grid Layout for Waste Prices */}
            <div className="grid grid-cols-2 gap-md mb-xxl">
                {/* Plastik Card */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col justify-between aspect-square active:scale-[0.98] transition-transform cursor-pointer group">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-secondary-container text-[#00714e] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">water_bottle</span>
                        </div>
                        <span className="bg-primary-container text-white font-caption text-[10px] px-2 py-1 rounded-full shadow-sm font-bold">100 pt/kg</span>
                    </div>
                    <div className="mt-auto">
                        <h3 className="font-label-button text-[14px] font-semibold text-on-surface">Plastik</h3>
                        <p className="font-nav-label text-[10px] text-n600-secondary-text mt-1">PET, HDPE, PVC</p>
                    </div>
                </div>

                {/* Kertas Card */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col justify-between aspect-square active:scale-[0.98] transition-transform cursor-pointer group">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">description</span>
                        </div>
                        <span className="bg-primary-container text-white font-caption text-[10px] px-2 py-1 rounded-full shadow-sm font-bold">80 pt/kg</span>
                    </div>
                    <div className="mt-auto">
                        <h3 className="font-label-button text-[14px] font-semibold text-on-surface">Kertas</h3>
                        <p className="font-nav-label text-[10px] text-n600-secondary-text mt-1">Kardus, HVS, Koran</p>
                    </div>
                </div>

                {/* Minyak Card (Full Width in Grid) */}
                <div className="col-span-2 bg-white/70 backdrop-blur-md rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white/50 flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer group">
                    <div className="flex items-center gap-md">
                        <div className="w-12 h-12 rounded-full bg-warning-amber/10 text-warning-amber flex items-center justify-center group-hover:bg-warning-amber group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">oil_barrel</span>
                        </div>
                        <div>
                            <h3 className="font-label-button text-[14px] font-semibold text-on-surface">Minyak Jelantah</h3>
                            <p className="font-nav-label text-[10px] text-n600-secondary-text mt-0.5">Minyak sisa penggorengan</p>
                        </div>
                    </div>
                    <span className="bg-primary-container text-white font-caption text-[12px] px-3 py-1.5 rounded-full shadow-sm font-bold">120 pt/L</span>
                </div>

                {/* Kain Perca Card */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col justify-between aspect-square active:scale-[0.98] transition-transform cursor-pointer group">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">checkroom</span>
                        </div>
                        <span className="bg-primary-container text-white font-caption text-[10px] px-2 py-1 rounded-full shadow-sm font-bold">90 pt/kg</span>
                    </div>
                    <div className="mt-auto">
                        <h3 className="font-label-button text-[14px] font-semibold text-on-surface">Kain Perca</h3>
                        <p className="font-nav-label text-[10px] text-n600-secondary-text mt-1">Sisa tekstil bersih</p>
                    </div>
                </div>

                {/* Logam Card */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col justify-between aspect-square active:scale-[0.98] transition-transform cursor-pointer group">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">recycling</span>
                        </div>
                        <span className="bg-primary-container text-white font-caption text-[10px] px-2 py-1 rounded-full shadow-sm font-bold">150 pt/kg</span>
                    </div>
                    <div className="mt-auto">
                        <h3 className="font-label-button text-[14px] font-semibold text-on-surface">Logam</h3>
                        <p className="font-nav-label text-[10px] text-n600-secondary-text mt-1">Aluminium, Besi, Kuningan</p>
                    </div>
                </div>
            </div>

            {/* Footer Info Card */}
            <div className="bg-surface-container-low rounded-xl p-lg flex items-start gap-md border border-n300-border/50">
                <span className="material-symbols-outlined text-tertiary">info</span>
                <p className="font-body-regular text-[14px] text-on-surface-variant">Nilai poin berdasarkan berat aktual di hub. Pastikan limbah dalam keadaan terpilah dan bersih untuk nilai maksimal.</p>
            </div>
            
        </main>
    );
};

export default HargaLimbah;
