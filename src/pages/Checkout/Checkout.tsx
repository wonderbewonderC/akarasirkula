import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from '../../components/Shared/TopAppBar';

const Checkout: React.FC = () => {
    const navigate = useNavigate();

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to Success or Home
        navigate('/home');
    };

    return (
        <main className="flex-1 flex flex-col bg-surface-container-lowest relative overflow-x-hidden min-h-screen">
            <TopAppBar title="Checkout" showBack={true} />
            
            <div className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
                
                {/* Shipping Address */}
                <div className="bg-surface px-lg py-md mt-2">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                        <h2 className="font-heading-2 text-[15px] text-on-surface">Alamat Pengiriman</h2>
                    </div>
                    
                    <div className="flex items-start justify-between border border-primary/20 bg-primary/5 rounded-xl p-3">
                        <div className="flex flex-col gap-1">
                            <span className="font-heading-2 text-[14px] text-on-surface">Rumah - Dita</span>
                            <span className="font-body-regular text-[13px] text-n600-secondary-text">081234567890</span>
                            <span className="font-body-regular text-[13px] text-n600-secondary-text mt-1 leading-relaxed">
                                Jl. Melati No. 45, RT 01/RW 02, Kec. Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12110
                            </span>
                        </div>
                        <span className="material-symbols-outlined text-n400-inactive text-[20px] mt-1">chevron_right</span>
                    </div>
                </div>

                {/* Order Items */}
                <div className="bg-surface px-lg py-md mt-2">
                    <div className="flex items-center gap-2 mb-3 border-b border-n300-border pb-3">
                        <span className="material-symbols-outlined text-n600-secondary-text text-[20px]">store</span>
                        <h2 className="font-heading-2 text-[14px] text-on-surface">EcoCraft Bandung</h2>
                    </div>
                    
                    <div className="flex gap-3 mb-4">
                        <div className="w-20 h-20 rounded-xl bg-surface-variant overflow-hidden shrink-0">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB25-9jQxR9N0bK_QZ9D7K4J-F5qE1F7c_T0zO_P6Z_C1b_5u-J7W4K_3R6rZ3N_s_0M_x_3L_Z_C_0_9_E_3_s_Z_4b_1H_O_K" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <h3 className="font-heading-2 text-[14px] text-on-surface leading-tight mb-1">Tas Tote Kain Perca Ramah Lingkungan</h3>
                            <span className="font-body-regular text-[12px] text-n600-secondary-text mb-auto">Varian: Biru Laut</span>
                            
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-primary text-[16px]">generating_tokens</span>
                                    <span className="font-heading-2 text-[14px] text-primary">15.000 pts</span>
                                </div>
                                <span className="font-body-regular text-[12px] text-on-surface">x 1</span>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="border border-n300-border rounded-xl p-3 flex justify-between items-center bg-surface-container-lowest">
                        <div className="flex flex-col">
                            <span className="font-heading-2 text-[14px] text-on-surface mb-1">Reguler (2-3 Hari)</span>
                            <span className="font-body-regular text-[12px] text-n600-secondary-text">JNE - Rp 15.000</span>
                        </div>
                        <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                    </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-surface px-lg py-md mt-2 mb-4">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-on-surface text-[20px]">receipt_long</span>
                        <h2 className="font-heading-2 text-[15px] text-on-surface">Rincian Pembayaran</h2>
                    </div>

                    <div className="flex flex-col gap-2 border-b border-n300-border pb-3 mb-3">
                        <div className="flex justify-between items-center">
                            <span className="font-body-regular text-[13px] text-n600-secondary-text">Subtotal Produk</span>
                            <span className="font-body-regular text-[13px] text-on-surface">15.000 pts</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-body-regular text-[13px] text-n600-secondary-text">Ongkos Kirim</span>
                            <span className="font-body-regular text-[13px] text-on-surface">Rp 15.000</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-body-regular text-[13px] text-n600-secondary-text">Biaya Layanan</span>
                            <span className="font-body-regular text-[13px] text-on-surface">Rp 1.000</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-heading-2 text-[15px] text-on-surface">Total Tagihan</span>
                        <div className="text-right">
                            <div className="font-heading-2 text-[16px] text-primary">15.000 pts</div>
                            <div className="font-heading-2 text-[14px] text-on-surface">+ Rp 16.000</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Payment Bar */}
            <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-surface border-t border-n300-border p-lg flex items-center justify-between z-30 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col">
                    <span className="font-body-regular text-[12px] text-n600-secondary-text mb-0.5">Total Pembayaran</span>
                    <div className="flex items-center gap-1">
                        <span className="font-heading-2 text-[16px] text-primary">15k pts</span>
                        <span className="font-body-regular text-[14px] text-on-surface">+ Rp 16k</span>
                    </div>
                </div>
                
                <button 
                    onClick={handlePayment}
                    className="bg-primary text-on-primary h-[48px] px-8 rounded-xl font-label-button text-[15px] shadow-sm hover:bg-[#005c3d] transition-colors active:scale-[0.98]"
                >
                    Bayar
                </button>
            </div>

        </main>
    );
};

export default Checkout;
