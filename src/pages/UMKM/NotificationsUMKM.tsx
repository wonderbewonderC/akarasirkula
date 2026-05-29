import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationsUMKM: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="w-full max-w-[430px] min-h-screen bg-surface shadow-[0_8px_24px_rgba(0,0,0,0.08)] mx-auto relative flex flex-col overflow-x-hidden">
            {/* Header */}
            <header className="flex items-center justify-between px-lg h-nav-height bg-surface/90 backdrop-blur-md sticky top-0 z-40 border-b border-surface-variant">
                <button 
                    onClick={() => navigate(-1)}
                    aria-label="Go back" 
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-n100-surface active:scale-95 transition-all"
                >
                    <span className="material-symbols-outlined text-on-surface">arrow_back</span>
                </button>
                <h1 className="font-heading-2 text-[18px] font-bold text-on-surface absolute left-1/2 -translate-x-1/2">Notifikasi</h1>
                <div className="w-10 h-10"></div> {/* Spacer for perfect centering */}
            </header>

            <div className="flex-1 overflow-y-auto px-lg pt-md pb-xxl hide-scrollbar bg-background">
                
                {/* Hari Ini */}
                <h2 className="font-body-lg text-[16px] font-bold text-n600-secondary-text mb-sm mt-md">Hari Ini</h2>
                <div className="flex flex-col gap-sm">
                    {/* Notification 1 */}
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] p-md flex gap-md shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-body-lg text-[16px] font-bold text-on-surface">Pesanan Baru Diterima</h3>
                                <div className="flex items-center gap-xs">
                                    <span className="font-caption text-[12px] text-n600-secondary-text">10:45</span>
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                            </div>
                            <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                                Pesanan #ORD-0928 untuk 5kg Pupuk Kompos telah diterima dan...
                            </p>
                            <button className="mt-2 text-primary font-label-button text-[14px] font-bold flex items-center gap-xs hover:underline">
                                Lihat Detail <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    {/* Notification 2 */}
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] p-md flex gap-md shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-body-lg text-[16px] font-bold text-on-surface">Pembayaran Terverifikasi</h3>
                                <div className="flex items-center gap-xs">
                                    <span className="font-caption text-[12px] text-n600-secondary-text">08:12</span>
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                            </div>
                            <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                                Pembayaran untuk pesanan #ORD-0925 sebesar Rp 150.000 telah...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Lebih Awal */}
                <h2 className="font-body-lg text-[16px] font-bold text-n600-secondary-text mb-sm mt-xl">Lebih Awal</h2>
                <div className="flex flex-col gap-sm">
                    {/* Notification 3 */}
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] p-md flex gap-md shadow-sm opacity-80">
                        <div className="w-12 h-12 rounded-full bg-surface-container text-n600-secondary-text flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-body-lg text-[16px] font-bold text-on-surface">Penarikan Dana Berhasil</h3>
                                <span className="font-caption text-[12px] text-n600-secondary-text">Kemarin</span>
                            </div>
                            <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                                Penarikan saldo sebesar Rp 500.000 ke rekening Bank BCA anda telah berhasil...
                            </p>
                        </div>
                    </div>

                    {/* Notification 4 */}
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] p-md flex gap-md shadow-sm opacity-80">
                        <div className="w-12 h-12 rounded-full bg-surface-container text-n600-secondary-text flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">inventory_2</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-body-lg text-[16px] font-bold text-on-surface">Alokasi Material Baru</h3>
                                <span className="font-caption text-[12px] text-n600-secondary-text">2 Hari Lalu</span>
                            </div>
                            <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                                Admin telah mengalokasikan 20kg Sampah Plastik PET ke gudang UMKM...
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default NotificationsUMKM;
