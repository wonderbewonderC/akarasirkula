import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-x-hidden min-h-screen pb-24">
            
            {/* Header / Product Image Area */}
            <div className="relative w-full aspect-square bg-surface-variant">
                <img 
                    src="https://images.unsplash.com/photo-1597484661643-2f5fef640df1?auto=format&fit=crop&q=80&w=400"
                    alt="Product" 
                    className="w-full h-full object-cover"
                />
                
                {/* Floating Navigation */}
                <div className="absolute top-md left-md right-md flex justify-between items-center z-20">
                    <button 
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-surface/80 backdrop-blur-md text-on-surface hover:bg-surface transition-colors shadow-sm"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface/80 backdrop-blur-md text-on-surface hover:bg-surface transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-[24px]">share</span>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface/80 backdrop-blur-md text-on-surface hover:bg-surface transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-[24px]">favorite_border</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Info Section */}
            <div className="bg-surface rounded-t-[32px] -mt-8 z-20 relative px-lg pt-8 pb-4 flex flex-col gap-4 shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
                
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded-full font-label-button text-[11px] flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">verified</span> Verified UMKM</span>
                        <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-full font-label-button text-[11px]">Stok: 12</span>
                    </div>
                    
                    <h1 className="font-heading-1 text-[22px] text-on-surface leading-tight mb-2 font-bold">Tas Tote Kanvas Daur Ulang</h1>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-end gap-1">
                            <span className="material-symbols-outlined text-primary text-[24px]">eco</span>
                            <span className="font-display-lg text-[24px] text-primary font-bold leading-none">2,500</span>
                            <span className="font-body-regular text-[14px] text-n600-secondary-text mb-0.5">Poin</span>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-n300-border my-2"></div>

                {/* Partner Info */}
                <div className="flex items-center justify-between border border-n300-border rounded-[12px] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" alt="Partner" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-heading-2 text-[15px] text-on-surface">Kriya Lestari Bali</h3>
                            <div className="flex items-center gap-1 text-n600-secondary-text">
                                <span className="material-symbols-outlined text-[14px]">location_on</span>
                                <span className="font-body-regular text-[12px]">Denpasar, Bali</span>
                            </div>
                        </div>
                    </div>
                    <button className="text-n400-inactive hover:text-on-surface transition-colors">
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                </div>

                <div className="h-[1px] w-full bg-n300-border my-2"></div>

                {/* Description */}
                <div>
                    <h3 className="font-heading-2 text-[16px] font-bold text-on-surface mb-2">Deskripsi Produk</h3>
                    <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                        Tas jinjing serbaguna yang dirancang untuk kebutuhan sehari-hari. Dibuat dari 100% serat kanvas hasil daur ulang limbah tekstil lokal. Sangat kuat, mudah dicuci, dan ramah lingkungan.
                    </p>
                </div>
                
                <div className="border border-n300-border rounded-[12px] p-3 flex justify-between items-center mt-2 cursor-pointer hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#dcfce7] w-8 h-8 rounded-full flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[18px]">history</span>
                        </div>
                        <span className="font-heading-2 text-[14px] font-bold">Jejak Sirkular</span>
                    </div>
                    <span className="material-symbols-outlined text-n400-inactive text-[20px]">expand_more</span>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-surface border-t border-n300-border p-4 flex gap-3 z-30 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                <div className="bg-[#f1f5f9] h-[48px] rounded-lg flex items-center justify-between px-3 min-w-[100px]">
                    <button className="text-n600-secondary-text hover:text-on-surface transition-colors">
                        <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <span className="font-body-regular text-[16px] mx-2">1</span>
                    <button className="text-n600-secondary-text hover:text-on-surface transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                </div>
                <button onClick={() => navigate('/checkout')} className="flex-1 bg-[#006c49] text-on-primary h-[48px] rounded-lg font-label-button text-[14px] font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-[#005c3d] transition-colors active:scale-[0.98]">
                    <span className="material-symbols-outlined text-[20px]">shopping_cart_checkout</span>
                    Tambah ke Keranjang
                </button>
            </div>

        </main>
    );
};

export default ProductDetail;
