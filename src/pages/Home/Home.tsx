import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Home: React.FC = () => {
    const { user } = useAuth();

    return (
        <main className="flex-1 flex flex-col bg-surface-container-lowest overflow-y-auto overflow-x-hidden pb-24 hide-scrollbar">
            
            {/* Header Area */}
            <div className="flex justify-between items-center px-lg pt-lg pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant border border-n300-border flex items-center justify-center overflow-hidden">
                        <span className="font-body-regular text-[12px] text-n600-secondary-text">img</span>
                    </div>
                    <div>
                        <p className="font-body-regular text-[12px] text-n600-secondary-text">Selamat pagi,</p>
                        <h1 className="font-heading-2 text-[16px] text-primary font-bold">{user?.name || 'USER'}</h1>
                    </div>
                </div>
                
                <Link to="/notifications" className="w-10 h-10 flex items-center justify-end text-primary">
                    <span className="material-symbols-outlined">notifications</span>
                </Link>
            </div>

            <div className="px-lg flex flex-col gap-4">
                
                {/* Balance Card */}
                <div className="bg-gradient-to-r from-primary to-[#008f5d] rounded-[20px] p-5 shadow-md flex flex-col text-on-primary relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2 relative z-10">
                        <span className="font-body-regular text-[14px]">Akara Points kamu</span>
                        <div className="bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-md">
                            <span className="font-bold text-[10px] tracking-wider">AKTIF</span>
                        </div>
                    </div>
                    
                    <h2 className="font-display-lg text-[36px] font-bold leading-none mb-4 relative z-10">1,250</h2>
                    
                    <div className="h-[1px] w-full bg-white/20 mb-3 relative z-10"></div>
                    
                    <div className="flex items-center gap-1.5 relative z-10">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        <span className="font-body-regular text-[12px]">150 poin pending</span>
                    </div>
                </div>

                {/* Main Actions */}
                <div className="grid grid-cols-2 gap-3 mt-1">
                    {/* Setor Limbah */}
                    <Link to="/hub-lokasi" className="bg-[#dcfce7] rounded-[16px] p-4 flex flex-col items-center justify-center gap-3 hover:bg-[#bbf7d0] transition-colors border border-transparent">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                            <span className="material-symbols-outlined text-[24px]">delete</span>
                        </div>
                        <span className="font-heading-2 text-[14px] text-primary">Setor Limbah</span>
                    </Link>

                    {/* Belanja Produk */}
                    <Link to="/market" className="bg-surface rounded-[16px] p-4 flex flex-col items-center justify-center gap-3 border border-n300-border hover:bg-surface-container-low transition-colors shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-n600-secondary-text shadow-sm">
                            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                        </div>
                        <span className="font-heading-2 text-[14px] text-on-surface">Belanja Produk</span>
                    </Link>
                </div>

                {/* Quick Actions */}
                <div className="bg-surface rounded-[16px] p-5 shadow-sm border border-n300-border flex justify-between items-center mt-1">
                    {/* Action 1 */}
                    <Link to="/harga-limbah" className="flex flex-col items-center gap-2 cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] group-hover:bg-[#e2e8f0] transition-colors">
                            <span className="material-symbols-outlined text-[20px]">sell</span>
                        </div>
                        <span className="font-body-regular text-[11px] text-[#475569]">Harga Limbah</span>
                    </Link>

                    {/* Action 2 */}
                    <Link to="/hub-lokasi" className="flex flex-col items-center gap-2 cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] group-hover:bg-[#e2e8f0] transition-colors">
                            <span className="material-symbols-outlined text-[20px]">location_on</span>
                        </div>
                        <span className="font-body-regular text-[11px] text-[#475569]">Lokasi Hub</span>
                    </Link>

                    {/* Action 3 */}
                    <Link to="/dampak" className="flex flex-col items-center gap-2 cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] group-hover:bg-[#e2e8f0] transition-colors">
                            <span className="material-symbols-outlined text-[20px]">eco</span>
                        </div>
                        <span className="font-body-regular text-[11px] text-[#475569]">Dampak</span>
                    </Link>

                    {/* Action 4 */}
                    <div className="flex flex-col items-center gap-2 cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] group-hover:bg-[#e2e8f0] transition-colors">
                            <span className="material-symbols-outlined text-[20px]">help_outline</span>
                        </div>
                        <span className="font-body-regular text-[11px] text-[#475569]">Bantuan</span>
                    </div>
                </div>

                {/* Produk Untukmu */}
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-heading-2 text-[18px] text-[#1e293b]">Produk Untukmu</h3>
                        <Link to="/market" className="font-label-button text-[14px] text-primary hover:underline">Lihat Semua</Link>
                    </div>
                    
                    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar -mx-lg px-lg">
                        {/* Item 1 */}
                        <Link to="/product/1" className="w-[160px] shrink-0 bg-surface rounded-[16px] border border-n300-border overflow-hidden hover:border-primary/50 transition-colors shadow-sm flex flex-col relative group">
                            <div className="h-[140px] bg-[#d1d5db] relative flex items-center justify-center">
                                <span className="font-body-regular text-[12px] text-n600-secondary-text">img</span>
                                <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-n400-inactive hover:text-[#F59E0B] shadow-sm z-10">
                                    <span className="material-symbols-outlined text-[16px]">favorite_border</span>
                                </button>
                            </div>
                            <div className="p-3">
                                <h4 className="font-body-regular text-[14px] text-[#334155] mb-2 truncate">Tas Daur Ulang</h4>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">eco</span>
                                    <span className="font-heading-2 text-[14px] text-primary">250 Poin</span>
                                </div>
                            </div>
                        </Link>

                        {/* Item 2 */}
                        <Link to="/product/2" className="w-[160px] shrink-0 bg-surface rounded-[16px] border border-n300-border overflow-hidden hover:border-primary/50 transition-colors shadow-sm flex flex-col relative group">
                            <div className="h-[140px] bg-[#d1d5db] relative flex items-center justify-center">
                                <span className="font-body-regular text-[12px] text-n600-secondary-text">img</span>
                                <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-n400-inactive hover:text-[#F59E0B] shadow-sm z-10">
                                    <span className="material-symbols-outlined text-[16px]">favorite_border</span>
                                </button>
                            </div>
                            <div className="p-3">
                                <h4 className="font-body-regular text-[14px] text-[#334155] mb-2 truncate">Pot PET</h4>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">eco</span>
                                    <span className="font-heading-2 text-[14px] text-primary">180 Poin</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Home;
