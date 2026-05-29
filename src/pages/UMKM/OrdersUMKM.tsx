import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersUMKM: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'baru' | 'diproses' | 'selesai'>('baru');

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-x-hidden pb-lg">
            {/* TopAppBar */}
            <header className="w-full top-0 sticky bg-surface z-40">
                <div className="flex justify-between items-center px-lg h-nav-height w-full max-w-[430px] mx-auto">
                    <button 
                        onClick={() => navigate(-1)}
                        className="text-primary scale-95 active:scale-90 transition-transform p-sm -ml-sm"
                    >
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_back</span>
                    </button>
                    <h1 className="font-heading-2 text-[18px] text-primary font-bold absolute left-1/2 -translate-x-1/2">Pesanan UMKM</h1>
                    <div className="w-[40px]"></div> {/* Spacer */}
                </div>
                
                {/* Tabs */}
                <div className="flex border-b border-n300-border px-lg">
                    <button 
                        onClick={() => setActiveTab('baru')}
                        className={`flex-1 py-sm font-label-button text-[14px] font-bold relative flex justify-center items-center gap-2 transition-colors ${activeTab === 'baru' ? 'text-primary border-b-2 border-primary' : 'text-n600-secondary-text hover:bg-surface-container-high'}`}
                    >
                        Baru
                        <span className="w-2 h-2 rounded-full bg-error-ruby"></span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('diproses')}
                        className={`flex-1 py-sm font-label-button text-[14px] font-bold transition-colors ${activeTab === 'diproses' ? 'text-primary border-b-2 border-primary' : 'text-n600-secondary-text hover:bg-surface-container-high'}`}
                    >
                        Diproses
                    </button>
                    <button 
                        onClick={() => setActiveTab('selesai')}
                        className={`flex-1 py-sm font-label-button text-[14px] font-bold transition-colors ${activeTab === 'selesai' ? 'text-primary border-b-2 border-primary' : 'text-n600-secondary-text hover:bg-surface-container-high'}`}
                    >
                        Selesai
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="p-lg flex flex-col gap-md">
                {activeTab === 'baru' && (
                    <>
                        {/* Order Card 1 */}
                        <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-n300-border flex flex-col gap-sm">
                            <div className="flex justify-between items-center border-b border-n300-border pb-sm">
                                <div className="flex items-center gap-sm">
                                    <span className="font-label-button text-[14px] font-bold text-on-surface">#ORD-A8F3</span>
                                    <span className="bg-warning-amber/10 text-warning-amber font-caption text-[12px] px-2 py-1 rounded-md">Menunggu Diproses</span>
                                </div>
                                <span className="font-caption text-[12px] text-n600-secondary-text">Hari ini, 10:24</span>
                            </div>
                            
                            <div className="flex gap-md pt-sm">
                                <img alt="Tas Belanja" className="w-[60px] h-[60px] rounded-md object-cover border border-n300-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDek-bFxNwUVp7-JjiFNEz9tDw5s5biOqQfdywMbU_x_q1ec6B-Sn7kbsMTI0YrQvlKAOdq99p1b72cvjdrYVrhIo-nUpyPVgscehMZEy9qt2pqkfJ6lUEuGkDZYqyvJEypS5KmCRhJEoqasyhiJlUV8-M84LXKA4CuKDU61oAxEW4WW05zN5b_1ZhH8y3UgdxS0nYYvkw32kklkWO8owDXSELGaIqSFEf5TR7PCY8lymLn1Rd68NewpZkZDOH2A0QEySx6RZ0NLCM" />
                                <div className="flex flex-col flex-1 justify-center">
                                    <h3 className="font-body-lg text-[16px] font-bold text-on-surface line-clamp-1">Tas Belanja Kanvas Recycled</h3>
                                    <p className="font-caption text-[12px] text-n600-secondary-text">2x Barang</p>
                                </div>
                            </div>
                            
                            <div className="bg-surface-container-low rounded-md p-sm flex items-center gap-md mt-sm">
                                <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed font-label-button text-[14px] font-bold">
                                    AS
                                </div>
                                <div>
                                    <p className="font-caption text-[12px] text-n600-secondary-text">Pembeli</p>
                                    <p className="font-label-button text-[14px] font-bold text-on-surface">Ahmad Santoso</p>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-sm pt-sm border-t border-n300-border">
                                <div className="flex flex-col">
                                    <span className="font-caption text-[12px] text-n600-secondary-text">Total Pendapatan</span>
                                    <span className="font-heading-2 text-[18px] font-bold text-primary">Rp 150.000</span>
                                </div>
                                <button className="bg-primary-container text-on-primary hover:bg-[#059669] transition-colors py-2 px-4 rounded-lg font-label-button text-[14px] font-bold scale-100 active:scale-95 duration-200">
                                    Proses Pesanan
                                </button>
                            </div>
                        </div>

                        {/* Order Card 2 */}
                        <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-n300-border flex flex-col gap-sm">
                            <div className="flex justify-between items-center border-b border-n300-border pb-sm">
                                <div className="flex items-center gap-sm">
                                    <span className="font-label-button text-[14px] font-bold text-on-surface">#ORD-B2C1</span>
                                    <span className="bg-warning-amber/10 text-warning-amber font-caption text-[12px] px-2 py-1 rounded-md">Menunggu Diproses</span>
                                </div>
                                <span className="font-caption text-[12px] text-n600-secondary-text">Kemarin, 16:45</span>
                            </div>
                            
                            <div className="flex gap-md pt-sm">
                                <img alt="Set Alat Makan" className="w-[60px] h-[60px] rounded-md object-cover border border-n300-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx-BQ9kMuu98elaR4fOMKpk_SP6ATUYSOR0EN40i3bMSqIzIAtq3gXbW2pIjqMFEHkXYHDms3XPWnCG1TcM6Nl3PYm9QfzJMSR1-dK7CekNmfu_J2i5_AmISsD8W2bgmz_d6GF-hkzjBowX-2AMEnpWcQDzmXqiIUQPDFOCamy164-Vw4tgYmYYRH8mbHXYbX-In15C4vabOJh3zsOcN0ty7kalh6Cu-Z0Zgmm4Np2aU-lvpeM_Y8yee0XvKbrsplt2EgIZvTedSM" />
                                <div className="flex flex-col flex-1 justify-center">
                                    <h3 className="font-body-lg text-[16px] font-bold text-on-surface line-clamp-1">Set Alat Makan Bambu</h3>
                                    <p className="font-caption text-[12px] text-n600-secondary-text">1x Barang</p>
                                </div>
                            </div>
                            
                            <div className="bg-surface-container-low rounded-md p-sm flex items-center gap-md mt-sm">
                                <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed font-label-button text-[14px] font-bold">
                                    BW
                                </div>
                                <div>
                                    <p className="font-caption text-[12px] text-n600-secondary-text">Pembeli</p>
                                    <p className="font-label-button text-[14px] font-bold text-on-surface">Budi Wijaya</p>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-sm pt-sm border-t border-n300-border">
                                <div className="flex flex-col">
                                    <span className="font-caption text-[12px] text-n600-secondary-text">Total Pendapatan</span>
                                    <span className="font-heading-2 text-[18px] font-bold text-primary">Rp 45.000</span>
                                </div>
                                <button className="bg-primary-container text-on-primary hover:bg-[#059669] transition-colors py-2 px-4 rounded-lg font-label-button text-[14px] font-bold scale-100 active:scale-95 duration-200">
                                    Proses Pesanan
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'diproses' && (
                    <div className="py-xl text-center text-n600-secondary-text font-body-regular text-[14px]">
                        Belum ada pesanan yang sedang diproses.
                    </div>
                )}

                {activeTab === 'selesai' && (
                    <div className="py-xl text-center text-n600-secondary-text font-body-regular text-[14px]">
                        Belum ada pesanan yang selesai.
                    </div>
                )}
            </div>
        </main>
    );
};

export default OrdersUMKM;
