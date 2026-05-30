import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProfileUMKM: React.FC = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    return (
        <main className="flex-1 overflow-y-auto pt-lg pb-xl bg-background">
            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 bg-surface flex justify-between items-center px-lg h-nav-height max-w-[430px] mx-auto">
                <button className="text-on-surface-variant hover:opacity-80 transition-opacity flex items-center justify-center p-sm rounded-full">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
                </button>
                <h1 className="font-display-lg text-[24px] font-bold text-primary">AkaraSirkula</h1>
                <button 
                    onClick={() => navigate('/umkm/notifications')}
                    className="text-on-surface-variant hover:opacity-80 transition-opacity flex items-center justify-center p-sm rounded-full"
                >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
                </button>
            </header>

            {/* Profile Header Section */}
            <section className="flex flex-col items-center px-lg pt-[80px] pb-xxl">
                <div className="relative mb-lg mt-md">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface shadow-md bg-n100-surface">
                        <img alt="Profile Photo" className="w-full h-full object-cover" src="https://picsum.photos/seed/22/400/400" />
                    </div>
                    <button 
                        onClick={() => navigate('/umkm/profile/edit')}
                        className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-sm hover:scale-95 transition-transform"
                    >
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                </div>
                <h2 className="font-heading-1 text-[24px] font-bold text-on-surface mb-xs">{user?.name || 'Kriya Daur'}</h2>
                <div className="flex items-center gap-xs text-n600-secondary-text font-body-regular text-[14px] mb-md">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>{user?.location || 'Bandung, Jawa Barat'}</span>
                </div>
                <div className="flex items-center gap-sm bg-primary-container/10 px-md py-sm rounded-full border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="font-label-button text-[14px] font-bold text-primary">Verified Partner</span>
                </div>
            </section>

            {/* Metrics Row (Bento Grid Style) */}
            <section className="px-lg mb-xxl">
                <div className="grid grid-cols-3 gap-md">
                    <div className="bg-surface rounded-xl p-md flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-n300-border/50 hover:-translate-y-1 transition-transform">
                        <span className="material-symbols-outlined text-primary mb-sm">inventory_2</span>
                        <span className="font-heading-2 text-[18px] font-bold text-on-surface">124</span>
                        <span className="font-caption text-[12px] text-n600-secondary-text text-center mt-xs">Produk Aktif</span>
                    </div>
                    <div className="bg-surface rounded-xl p-md flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-n300-border/50 hover:-translate-y-1 transition-transform">
                        <span className="material-symbols-outlined text-tertiary mb-sm">task_alt</span>
                        <span className="font-heading-2 text-[18px] font-bold text-on-surface">892</span>
                        <span className="font-caption text-[12px] text-n600-secondary-text text-center mt-xs">Pesanan Selesai</span>
                    </div>
                    <div className="bg-surface rounded-xl p-md flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-n300-border/50 hover:-translate-y-1 transition-transform">
                        <span className="material-symbols-outlined text-warning-amber mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-heading-2 text-[18px] font-bold text-on-surface">4.8</span>
                        <span className="font-caption text-[12px] text-n600-secondary-text text-center mt-xs">Rating Toko</span>
                    </div>
                </div>
            </section>

            {/* Menu List */}
            <section className="px-lg flex flex-col gap-sm">
                <button 
                    onClick={() => navigate('/umkm/store')}
                    className="flex items-center justify-between p-lg bg-surface rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-n300-border/40 hover:bg-surface-container-low transition-colors active:scale-95 duration-200"
                >
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">storefront</span>
                        </div>
                        <span className="font-body-lg text-[16px] font-bold text-on-surface">Informasi Toko</span>
                    </div>
                    <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                </button>
                
                <button 
                    onClick={() => navigate('/umkm/withdraw')}
                    className="flex items-center justify-between p-lg bg-surface rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-n300-border/40 hover:bg-surface-container-low transition-colors active:scale-95 duration-200"
                >
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                        </div>
                        <span className="font-body-lg text-[16px] font-bold text-on-surface">Rekening Bank & Saldo</span>
                    </div>
                    <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                </button>
                
                <button className="flex items-center justify-between p-lg bg-surface rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-n300-border/40 hover:bg-surface-container-low transition-colors active:scale-95 duration-200">
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">notifications_active</span>
                        </div>
                        <span className="font-body-lg text-[16px] font-bold text-on-surface">Pengaturan Notifikasi</span>
                    </div>
                    <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                </button>
                
                <button className="flex items-center justify-between p-lg bg-surface rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-n300-border/40 hover:bg-surface-container-low transition-colors active:scale-95 duration-200">
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">help_center</span>
                        </div>
                        <span className="font-body-lg text-[16px] font-bold text-on-surface">Pusat Bantuan</span>
                    </div>
                    <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                </button>
                
                <button className="flex items-center justify-between p-lg bg-surface rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-n300-border/40 hover:bg-surface-container-low transition-colors active:scale-95 duration-200">
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">info</span>
                        </div>
                        <span className="font-body-lg text-[16px] font-bold text-on-surface">Tentang AkaraSirkula</span>
                    </div>
                    <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                </button>

                {/* Logout Button */}
                <button 
                    onClick={() => {
                        logout();
                        navigate('/login');
                    }}
                    className="flex items-center justify-between p-lg bg-surface rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-error-container/50 mt-sm hover:bg-error-container/20 transition-colors active:scale-95 duration-200"
                >
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center text-error-ruby">
                            <span className="material-symbols-outlined">logout</span>
                        </div>
                        <span className="font-body-lg text-[16px] text-error-ruby font-bold">Keluar</span>
                    </div>
                </button>
            </section>
        </main>
    );
};

export default ProfileUMKM;
