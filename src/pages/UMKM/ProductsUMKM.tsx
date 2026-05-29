import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsUMKM: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'semua' | 'aktif' | 'draft' | 'ditinjau'>('semua');

    return (
        <main className="flex-1 overflow-y-auto bg-surface pb-lg">
            {/* TopAppBar */}
            <header className="sticky top-0 z-40 bg-surface flex justify-between items-center px-lg h-nav-height w-full">
                <button 
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors scale-95 active:scale-90 text-primary"
                >
                    <span className="material-symbols-outlined text-[24px]">menu</span>
                </button>
                <h1 className="font-heading-2 text-[24px] font-bold text-primary">AkaraSirkula</h1>
                <div className="flex gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors scale-95 active:scale-90 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors scale-95 active:scale-90 text-on-surface-variant relative">
                        <span className="material-symbols-outlined text-[24px]">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-error-ruby rounded-full border border-surface"></span>
                    </button>
                </div>
            </header>

            <div className="px-lg pt-md">
                <h2 className="font-heading-1 text-[24px] font-bold text-on-surface mb-xs">Produk Saya</h2>
                <p className="font-body-regular text-[14px] text-n600-secondary-text mb-md">Kelola etalase sirkuler Anda.</p>

                {/* Filter Chips */}
                <div className="flex gap-sm overflow-x-auto hide-scrollbar pb-md -mx-lg px-lg">
                    <button 
                        onClick={() => setActiveTab('semua')}
                        className={`px-4 py-2 rounded-full font-label-button text-[14px] font-bold whitespace-nowrap transition-colors border ${activeTab === 'semua' ? 'bg-primary text-white border-primary' : 'bg-surface border-n300-border text-n600-secondary-text hover:bg-surface-container-low'}`}
                    >
                        Semua
                    </button>
                    <button 
                        onClick={() => setActiveTab('aktif')}
                        className={`px-4 py-2 rounded-full font-label-button text-[14px] font-bold whitespace-nowrap transition-colors border ${activeTab === 'aktif' ? 'bg-primary text-white border-primary' : 'bg-surface border-n300-border text-n600-secondary-text hover:bg-surface-container-low'}`}
                    >
                        Aktif
                    </button>
                    <button 
                        onClick={() => setActiveTab('draft')}
                        className={`px-4 py-2 rounded-full font-label-button text-[14px] font-bold whitespace-nowrap transition-colors border ${activeTab === 'draft' ? 'bg-primary text-white border-primary' : 'bg-surface border-n300-border text-n600-secondary-text hover:bg-surface-container-low'}`}
                    >
                        Draft
                    </button>
                    <button 
                        onClick={() => setActiveTab('ditinjau')}
                        className={`px-4 py-2 rounded-full font-label-button text-[14px] font-bold whitespace-nowrap transition-colors border ${activeTab === 'ditinjau' ? 'bg-primary text-white border-primary' : 'bg-surface border-n300-border text-n600-secondary-text hover:bg-surface-container-low'}`}
                    >
                        Ditinjau
                    </button>
                </div>

                {/* Product List */}
                <div className="flex flex-col gap-md">
                    {/* Product Card 1 */}
                    {(activeTab === 'semua' || activeTab === 'aktif') && (
                        <div className="bg-surface-container-lowest border border-n300-border rounded-xl p-md shadow-sm flex gap-md relative">
                            <div className="w-[80px] h-[80px] rounded-lg overflow-hidden shrink-0 border border-n300-border">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx-BQ9kMuu98elaR4fOMKpk_SP6ATUYSOR0EN40i3bMSqIzIAtq3gXbW2pIjqMFEHkXYHDms3XPWnCG1TcM6Nl3PYm9QfzJMSR1-dK7CekNmfu_J2i5_AmISsD8W2bgmz_d6GF-hkzjBowX-2AMEnpWcQDzmXqiIUQPDFOCamy164-Vw4tgYmYYRH8mbHXYbX-In15C4vabOJh3zsOcN0ty7kalh6Cu-Z0Zgmm4Np2aU-lvpeM_Y8yee0XvKbrsplt2EgIZvTedSM" alt="Set Alat Mandi Bambu" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-heading-2 text-[16px] font-bold text-on-surface line-clamp-1">Set Alat Mandi Bambu</h3>
                                        <p className="font-caption text-[12px] text-n600-secondary-text mt-1">Stok: 45 • Terjual: 120</p>
                                    </div>
                                    <button className="text-n400-inactive hover:bg-surface-container-low rounded-full p-1 -mr-2 -mt-2">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="font-body-regular text-[14px] font-bold text-primary">1,250 Pts</span>
                                    <span className="bg-[#D1FAE5] text-[#065F46] font-caption text-[10px] font-bold px-2 py-1 rounded-md tracking-wider uppercase">Aktif</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Product Card 2 */}
                    {(activeTab === 'semua' || activeTab === 'draft') && (
                        <div className="bg-surface-container-lowest border border-n300-border rounded-xl p-md shadow-sm flex gap-md relative opacity-80 hover:opacity-100 transition-opacity">
                            <div className="w-[80px] h-[80px] rounded-lg overflow-hidden shrink-0 border border-n300-border">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_oy71CjWTB5wRQx4ve5He2a1eBg14pvVZFuhhZlZyzGdf-7PrcUuGzNfnZzvpc3HUMji73iVjF5HOZGOxlF6BoulKIrck7BkI_zYjMlGWWNw8a3kfHfhc3RH0lUaVBf4Ih-2XCR-89tkWN6PmJOWZ6gTpZFiBnrdtVfrnJmM1o1LMMGB1kJWPxnv5wJF2tSZsIqkw_E-KCLU_oICSE5usWeOmecm7vo6gHPQI9DzSF3vOznIAAAvoKPgbdpIIqrLk6Cjm6esJWco" alt="Tote Bag Upcycle Denim" className="w-full h-full object-cover grayscale-[30%]" />
                            </div>
                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-heading-2 text-[16px] font-bold text-on-surface line-clamp-1">Tote Bag Upcycle Denim</h3>
                                        <p className="font-caption text-[12px] text-n600-secondary-text mt-1">Stok: 0 • Terjual: 0</p>
                                    </div>
                                    <button className="text-n400-inactive hover:bg-surface-container-low rounded-full p-1 -mr-2 -mt-2">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="font-body-regular text-[14px] font-bold text-primary">850 Pts</span>
                                    <span className="bg-surface-container-high text-n600-secondary-text font-caption text-[10px] font-bold px-2 py-1 rounded-md tracking-wider uppercase">Draft</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Product Card 3 */}
                    {(activeTab === 'semua' || activeTab === 'ditinjau') && (
                        <div className="bg-surface-container-lowest border border-n300-border rounded-xl p-md shadow-sm flex gap-md relative">
                            <div className="w-[80px] h-[80px] rounded-lg overflow-hidden shrink-0 border border-n300-border bg-surface-container-low flex items-center justify-center">
                                <span className="material-symbols-outlined text-[32px] text-n400-inactive" style={{ fontVariationSettings: "'FILL' 0" }}>psychiatry</span>
                            </div>
                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-heading-2 text-[16px] font-bold text-on-surface line-clamp-1">Kompos Organik 5kg</h3>
                                        <p className="font-caption text-[12px] text-n600-secondary-text mt-1">Stok: 10 • Terjual: 0</p>
                                    </div>
                                    <button className="text-n400-inactive hover:bg-surface-container-low rounded-full p-1 -mr-2 -mt-2">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="font-body-regular text-[14px] font-bold text-primary">400 Pts</span>
                                    <span className="bg-[#FEF3C7] text-[#92400E] font-caption text-[10px] font-bold px-2 py-1 rounded-md tracking-wider uppercase">Ditinjau</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* FAB (Add Product) */}
            <div className="fixed bottom-[100px] right-lg z-50 md:right-[calc(50%-195px)]">
                <button 
                    onClick={() => navigate('/umkm/products/add')}
                    className="w-[56px] h-[56px] bg-primary text-white rounded-full shadow-[0_4px_12px_rgba(16,185,129,0.4)] flex items-center justify-center active:scale-95 transition-transform border-[3px] border-surface hover:bg-[#059669]"
                >
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                </button>
            </div>
        </main>
    );
};

export default ProductsUMKM;
