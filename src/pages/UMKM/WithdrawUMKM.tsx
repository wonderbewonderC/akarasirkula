import React from 'react';
import { useNavigate } from 'react-router-dom';

const WithdrawUMKM: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="w-full max-w-[430px] min-h-screen bg-surface shadow-[0_8px_24px_rgba(0,0,0,0.08)] mx-auto relative flex flex-col overflow-x-hidden">
            {/* Header: Task-focused sub-page */}
            <header className="flex items-center justify-between px-lg h-nav-height bg-surface/90 backdrop-blur-md sticky top-0 z-40 border-b border-surface-variant">
                <button 
                    onClick={() => navigate(-1)}
                    aria-label="Go back" 
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-n100-surface active:scale-95 transition-all"
                >
                    <span className="material-symbols-outlined text-on-surface">arrow_back</span>
                </button>
                <h1 className="font-heading-2 text-[18px] font-bold text-on-surface absolute left-1/2 -translate-x-1/2">Rekening & Saldo</h1>
                <div className="w-10 h-10"></div> {/* Spacer for perfect centering */}
            </header>

            <div className="flex-1 overflow-y-auto pb-xxl hide-scrollbar">
                {/* Balance Section: Bento/Glassmorphism inspired */}
                <section className="px-lg mt-md">
                    <div className="bg-primary rounded-[24px] p-lg text-on-primary shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                        {/* Decorative subtle background shapes */}
                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <span className="font-body-regular text-[14px] text-tertiary-fixed mb-xs flex items-center gap-xs">
                                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                                Saldo Tersedia
                            </span>
                            <h2 className="font-display-lg text-[32px] font-bold mb-lg tracking-tight">Rp 8.450.000</h2>
                            <div className="flex gap-md w-full max-w-[280px]">
                                <button className="flex-1 bg-inverse-primary text-on-primary-fixed font-label-button text-[14px] font-bold py-sm px-lg rounded-xl flex justify-center items-center gap-sm active:scale-95 transition-transform shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">payments</span>
                                    Tarik Dana
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Linked Bank Accounts Section */}
                <section className="px-lg mt-xxl">
                    <div className="flex items-center justify-between mb-lg">
                        <h3 className="font-heading-2 text-[18px] font-bold text-on-surface">Rekening Bank</h3>
                        <button className="text-primary hover:text-secondary-fixed-dim active:scale-95 transition-all font-label-button text-[14px] font-bold flex items-center gap-xs bg-surface-container py-[6px] px-sm rounded-lg">
                            <span className="material-symbols-outlined text-[16px]">add</span>
                            Tambah
                        </button>
                    </div>
                    <div className="flex flex-col gap-sm">
                        {/* Bank Card 1 */}
                        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] p-md flex items-center gap-md shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-body-lg text-[16px] font-bold text-on-surface truncate">Bank BCA</p>
                                <p className="font-body-regular text-[14px] text-n600-secondary-text tracking-wide">**** **** 8901</p>
                                <p className="font-caption text-[12px] text-outline truncate">a.n. PT Ekosistem Hijau</p>
                            </div>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-n400-inactive hover:bg-error-container hover:text-error active:scale-95 transition-all">
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                        </div>
                        {/* Bank Card 2 */}
                        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] p-md flex items-center gap-md shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-body-lg text-[16px] font-bold text-on-surface truncate">Bank Mandiri</p>
                                <p className="font-body-regular text-[14px] text-n600-secondary-text tracking-wide">**** **** 4321</p>
                                <p className="font-caption text-[12px] text-outline truncate">a.n. Budi Susanto</p>
                            </div>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-n400-inactive hover:bg-error-container hover:text-error active:scale-95 transition-all">
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Recent Transactions Section */}
                <section className="px-lg mt-xxl">
                    <div className="flex items-center justify-between mb-lg">
                        <h3 className="font-heading-2 text-[18px] font-bold text-on-surface">Riwayat Transaksi</h3>
                        <a className="text-primary font-body-regular text-[14px] hover:underline" href="#">Lihat Semua</a>
                    </div>
                    <div className="flex flex-col gap-sm">
                        {/* Transaction Item: Income */}
                        <div className="bg-surface-container-lowest rounded-[16px] p-md flex items-center justify-between border border-transparent hover:border-surface-variant transition-colors">
                            <div className="flex items-center gap-md">
                                <div className="w-10 h-10 rounded-full bg-secondary-container/30 text-on-secondary-container flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                                </div>
                                <div>
                                    <p className="font-body-lg text-[16px] font-bold text-on-surface">Penjualan Kompos</p>
                                    <p className="font-caption text-[12px] text-n600-secondary-text">Hari ini, 14:30</p>
                                </div>
                            </div>
                            <p className="font-label-button text-[14px] font-bold text-primary">+ Rp 250.000</p>
                        </div>
                        {/* Transaction Item: Withdrawal */}
                        <div className="bg-surface-container-lowest rounded-[16px] p-md flex items-center justify-between border border-transparent hover:border-surface-variant transition-colors">
                            <div className="flex items-center gap-md">
                                <div className="w-10 h-10 rounded-full bg-error-container/50 text-on-error-container flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                                </div>
                                <div>
                                    <p className="font-body-lg text-[16px] font-bold text-on-surface">Penarikan ke BCA</p>
                                    <p className="font-caption text-[12px] text-n600-secondary-text">Kemarin, 09:15</p>
                                </div>
                            </div>
                            <p className="font-label-button text-[14px] font-bold text-on-surface">- Rp 1.500.000</p>
                        </div>
                        {/* Transaction Item: Income */}
                        <div className="bg-surface-container-lowest rounded-[16px] p-md flex items-center justify-between border border-transparent hover:border-surface-variant transition-colors">
                            <div className="flex items-center gap-md">
                                <div className="w-10 h-10 rounded-full bg-secondary-container/30 text-on-secondary-container flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                                </div>
                                <div>
                                    <p className="font-body-lg text-[16px] font-bold text-on-surface">Pencairan Poin</p>
                                    <p className="font-caption text-[12px] text-n600-secondary-text">12 Okt 2023, 16:45</p>
                                </div>
                            </div>
                            <p className="font-label-button text-[14px] font-bold text-primary">+ Rp 50.000</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default WithdrawUMKM;
