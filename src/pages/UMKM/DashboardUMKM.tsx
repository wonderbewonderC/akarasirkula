import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const DashboardUMKM: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <main className="flex-1 flex flex-col bg-background relative overflow-x-hidden pb-lg">
            {/* TopAppBar */}
            <header className="w-full top-0 sticky bg-surface z-40">
                <div className="flex justify-between items-center h-nav-height px-lg w-full max-w-[430px] mx-auto">
                    <button className="text-on-surface-variant hover:opacity-80 transition-transform active:scale-95 flex items-center justify-center p-sm">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
                    </button>
                    <h1 className="font-heading-2 text-[18px] font-bold text-primary">AkaraSirkula</h1>
                    <button 
                        onClick={() => navigate('/umkm/notifications')}
                        className="text-on-surface-variant hover:opacity-80 transition-transform active:scale-95 flex items-center justify-center p-sm relative"
                    >
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-error-ruby rounded-full border border-surface"></span>
                    </button>
                </div>
            </header>

            {/* Welcome Section & Balance Card */}
            <section className="px-lg pt-lg pb-md">
                <h2 className="font-body-lg text-[16px] text-on-surface mb-sm">Halo, <span className="font-heading-2 text-[18px] font-bold">{user?.name || 'Kriya Daur'}</span></h2>
                <div className="bg-gradient-to-br from-primary-container to-secondary-container rounded-xl p-lg text-on-primary shadow-lg relative overflow-hidden mt-md">
                    {/* Decorative elements */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10">
                        <p className="font-caption text-[12px] text-white/80 mb-xs">Saldo UMKM</p>
                        <h3 className="font-display-lg text-[32px] font-bold text-white mb-md">Rp 2.450.000</h3>
                        <button 
                            onClick={() => navigate('/umkm/withdraw')}
                            className="bg-white text-primary-container font-label-button text-[14px] font-bold py-sm px-lg rounded-lg flex items-center justify-center w-full shadow-sm hover:bg-surface transition-colors active:scale-95"
                        >
                            <span className="material-symbols-outlined mr-sm text-[18px]">account_balance_wallet</span>
                            Tarik Saldo
                        </button>
                    </div>
                </div>
            </section>

            {/* Notification Banner */}
            <section className="px-lg py-sm">
                <div className="bg-surface-container-low border border-tertiary-fixed-dim rounded-lg p-md flex items-start shadow-sm">
                    <div className="bg-tertiary-fixed text-on-tertiary-container rounded-full p-sm mr-md flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-label-button text-[14px] font-bold text-on-surface">Bahan Baku Baru Tersedia!</h4>
                        <p className="font-caption text-[12px] text-n600-secondary-text mt-xs">Plastik PET cacah (5kg) baru saja ditambahkan oleh pengepul terdekat.</p>
                    </div>
                    <button className="text-primary font-label-button text-[14px] font-bold self-center whitespace-nowrap ml-sm">
                        Lihat
                    </button>
                </div>
            </section>

            {/* Metric Cards */}
            <section className="px-lg py-md grid grid-cols-2 gap-md">
                <div className="bg-surface-container-lowest border border-n300-border rounded-lg p-md shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-center">
                    <div className="bg-secondary-fixed text-on-secondary-fixed rounded-full p-sm mb-sm">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                    </div>
                    <p className="font-display-lg text-[32px] font-bold text-on-surface">3</p>
                    <p className="font-caption text-[12px] text-n600-secondary-text">Pesanan Baru</p>
                </div>
                <div className="bg-surface-container-lowest border border-n300-border rounded-lg p-md shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-center">
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed rounded-full p-sm mb-sm">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>category</span>
                    </div>
                    <p className="font-display-lg text-[32px] font-bold text-on-surface">8</p>
                    <p className="font-caption text-[12px] text-n600-secondary-text">Produk Aktif</p>
                </div>
            </section>

            {/* Produkku List */}
            <section className="px-lg py-md">
                <div className="flex justify-between items-center mb-md">
                    <h3 className="font-heading-2 text-[18px] font-bold text-on-surface">Produkku</h3>
                    <button 
                        onClick={() => navigate('/umkm/products')}
                        className="font-label-button text-[14px] text-primary font-bold hover:opacity-80 transition-opacity"
                    >
                        Lihat Semua
                    </button>
                </div>
                
                <div className="flex flex-col gap-md">
                    {/* Product Item 1 */}
                    <div className="bg-surface-container-lowest border border-n300-border rounded-lg p-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center">
                        <div className="w-16 h-16 rounded-md bg-n100-surface overflow-hidden mr-md flex-shrink-0 relative">
                            <img alt="Tas Belanja Daur Ulang" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_oy71CjWTB5wRQx4ve5He2a1eBg14pvVZFuhhZlZyzGdf-7PrcUuGzNfnZzvpc3HUMji73iVjF5HOZGOxlF6BoulKIrck7BkI_zYjMlGWWNw8a3kfHfhc3RH0lUaVBf4Ih-2XCR-89tkWN6PmJOWZ6gTpZFiBnrdtVfrnJmM1o1LMMGB1kJWPxnv5wJF2tSZsIqkw_E-KCLU_oICSE5usWeOmecm7vo6gHPQI9DzSF3vOznIAAAvoKPgbdpIIqrLk6Cjm6esJWco" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-label-button text-[14px] font-bold text-on-surface">Tas Belanja Daur Ulang</h4>
                            <p className="font-caption text-[12px] text-n600-secondary-text mb-xs">Stok: 12 • Terjual: 45</p>
                            <p className="font-body-regular text-[14px] text-primary font-semibold">Rp 85.000</p>
                        </div>
                        <button className="text-on-surface-variant p-sm hover:bg-surface-container-low rounded-full transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                        </button>
                    </div>

                    {/* Product Item 2 */}
                    <div className="bg-surface-container-lowest border border-n300-border rounded-lg p-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center">
                        <div className="w-16 h-16 rounded-md bg-n100-surface overflow-hidden mr-md flex-shrink-0 relative">
                            <img alt="Pot Bunga Estetik" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDeZDJdOlDVj67YT8AXnAAuWbCvTbVw20g0kzLeK6IFaLdvnfj2xsiFyzFoWhHmpPmhk6eAPBsVKVwcKAg9K4wDglQ6bFRmjYhHrk8kUMAfVeRVBRuO-1MjWHp7MwJDMdDc4XWt6ABd_8jrG2eDyqwAAR4gi3B4zywpLEx2KGFegofb0-gLrIvYclPtE1guyHBuHrOcx6nsMFCXKx03XF19mLgTxgW70RMUg99ZC25P5yDw0aANTwn03u-1WpjVfuGvs20IO5tisQ" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-label-button text-[14px] font-bold text-on-surface">Pot Bunga Estetik</h4>
                            <p className="font-caption text-[12px] text-n600-secondary-text mb-xs">Stok: 5 • Terjual: 28</p>
                            <p className="font-body-regular text-[14px] text-primary font-semibold">Rp 45.000</p>
                        </div>
                        <button className="text-on-surface-variant p-sm hover:bg-surface-container-low rounded-full transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DashboardUMKM;
