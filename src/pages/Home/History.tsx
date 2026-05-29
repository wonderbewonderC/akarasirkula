import React, { useState } from 'react';

const History: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'setoran' | 'pembelian'>('setoran');

    return (
        <main className="flex-1 flex flex-col pt-[88px] pb-[100px] px-lg overflow-y-auto bg-surface-container-lowest">
            
            {/* Header section (already handled mostly by layout, but need title) */}
            <h2 className="font-heading-1 text-[24px] font-bold text-on-surface mb-lg">Riwayat</h2>

            {/* Custom Segmented Control / Tabs */}
            <div className="bg-surface-container-low p-1 rounded-full flex relative mb-xl shadow-sm border border-n300-border">
                {/* Active Slider indicator */}
                <div 
                    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full shadow-sm transition-transform duration-300 ease-out ${
                        activeTab === 'setoran' ? 'translate-x-0' : 'translate-x-[calc(100%+8px)]'
                    }`}
                ></div>
                
                <button 
                    onClick={() => setActiveTab('setoran')}
                    className={`flex-1 relative z-10 font-label-button text-[14px] font-semibold py-2 rounded-full transition-colors ${
                        activeTab === 'setoran' ? 'text-on-primary' : 'text-n600-secondary-text hover:text-on-surface'
                    }`}
                >
                    Setoran
                </button>
                <button 
                    onClick={() => setActiveTab('pembelian')}
                    className={`flex-1 relative z-10 font-label-button text-[14px] font-semibold py-2 rounded-full transition-colors ${
                        activeTab === 'pembelian' ? 'text-on-primary' : 'text-n600-secondary-text hover:text-on-surface'
                    }`}
                >
                    Pembelian
                </button>
            </div>

            {/* Content Area - Setoran */}
            {activeTab === 'setoran' && (
                <div className="flex flex-col gap-md">
                    {/* Item 1 - Pending */}
                    <div className="bg-surface-container-lowest border border-n300-border rounded-xl p-md shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
                        <div className="flex justify-between items-start mb-sm">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-n600-secondary-text text-[20px]">recycling</span>
                                <span className="font-label-button text-[14px] font-bold text-on-surface">Plastik, Logam</span>
                            </div>
                            <span className="font-caption text-[12px] font-medium bg-warning-amber/10 text-warning-amber px-2 py-0.5 rounded border border-warning-amber/20">Pending</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-caption text-[12px] text-n600-secondary-text flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">calendar_today</span> 22 Mei 2026 • 14:30
                            </span>
                            <span className="font-body-regular text-[14px] font-bold text-on-surface mt-1">575 poin <span className="text-[12px] font-normal text-n600-secondary-text">est.</span></span>
                        </div>
                    </div>

                    {/* Item 2 - Aktif */}
                    <div className="bg-surface-container-lowest border border-n300-border rounded-xl p-md shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
                        <div className="flex justify-between items-start mb-sm">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-n600-secondary-text text-[20px]">description</span>
                                <span className="font-label-button text-[14px] font-bold text-on-surface">Kertas</span>
                            </div>
                            <span className="font-caption text-[12px] font-medium bg-primary-container/10 text-primary-container px-2 py-0.5 rounded border border-primary-container/20">Aktif</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-caption text-[12px] text-n600-secondary-text flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">calendar_today</span> 20 Mei 2026 • 09:15
                            </span>
                            <span className="font-body-regular text-[14px] font-bold text-primary-container mt-1">+ 120 poin</span>
                        </div>
                    </div>

                    {/* Item 3 - Ditolak */}
                    <div className="bg-surface-container-lowest border border-n300-border rounded-xl p-md shadow-sm opacity-75 active:scale-[0.98] transition-transform cursor-pointer">
                        <div className="flex justify-between items-start mb-sm">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-n600-secondary-text text-[20px]">oil_barrel</span>
                                <span className="font-label-button text-[14px] font-bold text-on-surface">Minyak Jelantah</span>
                            </div>
                            <span className="font-caption text-[12px] font-medium bg-error-container text-error px-2 py-0.5 rounded border border-error/20">Ditolak</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-caption text-[12px] text-n600-secondary-text flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">calendar_today</span> 18 Mei 2026 • 16:45
                            </span>
                            <span className="font-caption text-[12px] text-error mt-1 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">info</span> Terlalu banyak campuran air
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Content Area - Pembelian */}
            {activeTab === 'pembelian' && (
                <div className="flex flex-col gap-md items-center justify-center py-xl text-center">
                    <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center text-n400-inactive mb-sm">
                        <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
                    </div>
                    <h3 className="font-label-button text-[14px] font-bold text-on-surface">Belum ada pembelian</h3>
                    <p className="font-caption text-[12px] text-n600-secondary-text max-w-[250px]">Kumpulkan poin lebih banyak dan tukarkan dengan berbagai produk menarik di Market.</p>
                </div>
            )}

        </main>
    );
};

export default History;
