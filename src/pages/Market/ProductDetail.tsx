import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-x-hidden min-h-screen pb-24">
            
            {/* Header / Product Image Area */}
            <div className="relative w-full aspect-square bg-surface-variant">
                <img 
                    src="https://picsum.photos/seed/14/400/400"
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
                        <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded font-label-button text-[11px]">Upcycle</span>
                        <div className="flex items-center gap-1 text-[#F59E0B]">
                            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="font-label-button text-[13px] text-on-surface">4.8 <span className="text-n600-secondary-text font-body-regular">(120 ulasan)</span></span>
                        </div>
                    </div>
                    
                    <h1 className="font-heading-1 text-[22px] text-on-surface leading-tight mb-2">Tas Tote Kain Perca Ramah Lingkungan</h1>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-end gap-1">
                            <span className="material-symbols-outlined text-primary text-[24px]">generating_tokens</span>
                            <span className="font-display-lg text-[28px] text-primary font-bold leading-none">15.000</span>
                            <span className="font-body-regular text-[14px] text-n600-secondary-text mb-1">pts</span>
                        </div>
                        <span className="font-body-regular text-[13px] text-n600-secondary-text">Terjual 150+</span>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-n300-border my-2"></div>

                {/* Partner Info */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden">
                            <img src="https://i.pravatar.cc/150?img=12" alt="Partner" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-heading-2 text-[15px] text-on-surface">EcoCraft Bandung</h3>
                            <div className="flex items-center gap-1 text-n600-secondary-text">
                                <span className="material-symbols-outlined text-[14px]">location_on</span>
                                <span className="font-body-regular text-[12px]">Kota Bandung</span>
                            </div>
                        </div>
                    </div>
                    <button className="px-4 py-2 rounded-full border border-primary text-primary font-label-button text-[13px] hover:bg-primary/5 transition-colors">
                        Kunjungi Toko
                    </button>
                </div>

                <div className="h-[1px] w-full bg-n300-border my-2"></div>

                {/* Description */}
                <div>
                    <h3 className="font-heading-2 text-[16px] text-on-surface mb-2">Deskripsi Produk</h3>
                    <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                        Tas tote bag unik yang dibuat dari 100% kain perca sisa industri garmen lokal. Setiap tas memiliki motif yang unik dan tidak ada yang sama persis. Sangat kuat untuk membawa laptop atau buku, sekaligus membantu mengurangi limbah tekstil di lingkungan kita.
                        <br/><br/>
                        Ukuran: 35 x 40 cm<br/>
                        Material: Katun & Kanvas daur ulang
                    </p>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-surface border-t border-n300-border p-4 flex gap-3 z-30 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                <button className="w-[52px] h-[52px] rounded-xl border border-n300-border flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                </button>
                <button className="flex-1 bg-surface-variant text-on-surface-variant h-[52px] rounded-xl font-label-button text-[15px] hover:bg-[#cbd2e8] transition-colors">
                    Beli Langsung
                </button>
                <button onClick={() => navigate('/checkout')} className="flex-1 bg-primary text-on-primary h-[52px] rounded-xl font-label-button text-[15px] flex items-center justify-center gap-2 shadow-sm hover:bg-[#005c3d] transition-colors active:scale-[0.98]">
                    Tukar Poin
                </button>
            </div>

        </main>
    );
};

export default ProductDetail;
