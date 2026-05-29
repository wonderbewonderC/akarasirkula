import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 overflow-y-auto pb-nav-height pt-md px-lg bg-surface-container-lowest">
            {/* TopAppBar */}
            <header className="sticky top-0 z-40 bg-surface-container-lowest flex justify-between items-center h-nav-height w-full mb-md">
                <div className="flex items-center gap-md">
                    <button 
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors scale-95 active:scale-90"
                    >
                        <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
                    </button>
                    <h1 className="font-heading-2 text-[18px] font-bold text-primary">Notifications</h1>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors scale-95 active:scale-90">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                </button>
            </header>

            {/* Hari Ini Group */}
            <section className="mb-xxl">
                <h2 className="font-heading-2 text-[16px] font-bold text-on-surface mb-md">Hari Ini</h2>
                <div className="flex flex-col gap-md">
                    {/* Unread Notification: Pickup Status */}
                    <div className="bg-surface-container-low rounded-xl p-md border border-primary-container/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative overflow-hidden transition-colors hover:bg-surface-container-high cursor-pointer">
                        {/* Unread Indicator */}
                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-container"></div>
                        <div className="flex items-start gap-md">
                            <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                            </div>
                            <div className="flex-1 pr-sm">
                                <h3 className="font-label-button text-[14px] font-bold text-on-surface mb-1">Penjemputan Sedang Berjalan</h3>
                                <p className="font-body-regular text-[12px] text-n600-secondary-text mb-2 line-clamp-2">Pahlawan Hijau kami, Budi, sedang menuju ke lokasimu untuk mengambil sampah daur ulang.</p>
                                <span className="font-caption text-[10px] text-n400-inactive">10:42 AM</span>
                            </div>
                        </div>
                    </div>

                    {/* Unread Notification: Points */}
                    <div className="bg-surface-container-low rounded-xl p-md border border-primary-container/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative overflow-hidden transition-colors hover:bg-surface-container-high cursor-pointer">
                        {/* Unread Indicator */}
                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-container"></div>
                        <div className="flex items-start gap-md">
                            <div className="w-12 h-12 rounded-full bg-[#fef3c7] text-warning-amber flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                            </div>
                            <div className="flex-1 pr-sm">
                                <h3 className="font-label-button text-[14px] font-bold text-on-surface mb-1">+50 Poin Masuk!</h3>
                                <p className="font-body-regular text-[12px] text-n600-secondary-text mb-2 line-clamp-2">Yeay! Setor sampahmu berhasil divalidasi. Poin sudah ditambahkan ke dompetmu.</p>
                                <span className="font-caption text-[10px] text-n400-inactive">08:15 AM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kemarin Group */}
            <section className="mb-xxl">
                <h2 className="font-heading-2 text-[16px] font-bold text-on-surface mb-md">Kemarin</h2>
                <div className="flex flex-col gap-md">
                    {/* Read Notification: Market */}
                    <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-surface-container-low cursor-pointer border border-n100-surface">
                        <div className="flex items-start gap-md opacity-80">
                            <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">shopping_bag</span>
                            </div>
                            <div className="flex-1 pr-sm">
                                <h3 className="font-label-button text-[14px] font-bold text-on-surface mb-1">Pesanan Pasar Selesai</h3>
                                <p className="font-body-regular text-[12px] text-n600-secondary-text mb-2 line-clamp-2">Tas belanja ramah lingkungan pesananmu telah tiba. Terima kasih telah berbelanja hijau!</p>
                                <span className="font-caption text-[10px] text-n400-inactive">Kemarin, 14:30</span>
                            </div>
                        </div>
                    </div>

                    {/* Read Notification: System/Account */}
                    <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-surface-container-low cursor-pointer border border-n100-surface">
                        <div className="flex items-start gap-md opacity-80">
                            <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <div className="flex-1 pr-sm">
                                <h3 className="font-label-button text-[14px] font-bold text-on-surface mb-1">Level Akun Naik</h3>
                                <p className="font-body-regular text-[12px] text-n600-secondary-text mb-2 line-clamp-2">Selamat! Kamu sekarang adalah 'Eco Warrior'. Nikmati keuntungan eksklusif di Market.</p>
                                <span className="font-caption text-[10px] text-n400-inactive">Kemarin, 09:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minggu Lalu Group */}
            <section className="mb-xxl">
                <h2 className="font-heading-2 text-[16px] font-bold text-on-surface mb-md">Minggu Lalu</h2>
                <div className="flex flex-col gap-md">
                    {/* Read Notification: Pickup Success */}
                    <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-surface-container-low cursor-pointer border border-n100-surface">
                        <div className="flex items-start gap-md opacity-70">
                            <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div className="flex-1 pr-sm">
                                <h3 className="font-label-button text-[14px] font-bold text-on-surface mb-1">Setor Selesai</h3>
                                <p className="font-body-regular text-[12px] text-n600-secondary-text mb-2 line-clamp-2">5kg Kardus dan 2kg Plastik berhasil disetor. Lingkungan berterima kasih padamu!</p>
                                <span className="font-caption text-[10px] text-n400-inactive">24 Okt 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Notifications;
