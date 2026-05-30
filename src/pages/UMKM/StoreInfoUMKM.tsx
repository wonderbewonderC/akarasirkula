import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoreInfoUMKM: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 flex flex-col bg-surface-container-lowest relative overflow-x-hidden pb-[80px]">
            {/* Custom Header */}
            <header className="flex justify-between items-center px-lg w-full max-w-[430px] mx-auto h-[64px] bg-surface shadow-sm sticky top-0 z-40">
                <button 
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-n100-surface active:scale-95 transition-transform duration-200 text-on-surface"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 className="font-heading-2 text-[18px] font-bold text-on-surface flex-1 text-center pr-10">Informasi Toko</h1>
            </header>

            {/* Main Content Canvas */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
                {/* Hero / Cover Image */}
                <div className="h-48 w-full bg-surface-container-high relative">
                    <img 
                        className="w-full h-full object-cover" 
                        alt="A brightly lit, modern workshop space" 
                        src="https://picsum.photos/seed/23/400/400"
                    />
                </div>

                {/* Profile Info Section */}
                <div className="px-lg relative -mt-12 flex flex-col items-center">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-full border-4 border-surface bg-white shadow-sm overflow-hidden z-10">
                        <img 
                            className="w-full h-full object-cover" 
                            alt="Profile picture" 
                            src="https://picsum.photos/seed/24/400/400"
                        />
                    </div>

                    {/* Basic Details */}
                    <div className="text-center mt-sm w-full">
                        <h2 className="font-heading-1 text-[24px] font-bold text-on-surface">Kriya Daur Ulang</h2>
                        <div className="flex items-center justify-center gap-xs mt-xs text-n600-secondary-text">
                            <span className="material-symbols-outlined text-[16px]">location_on</span>
                            <span className="font-body-regular text-[14px]">Bandung, Jawa Barat</span>
                        </div>
                        
                        {/* Tags / Badges */}
                        <div className="flex items-center justify-center gap-sm mt-md">
                            <span className="px-sm py-xs bg-tertiary-container text-on-tertiary-container font-caption text-[12px] rounded-lg inline-flex items-center gap-xs">
                                <span className="material-symbols-outlined text-[14px]">recycling</span>
                                Upcycling Specialist
                            </span>
                            <div className="flex items-center gap-xs text-warning-amber">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="font-label-button text-[14px] font-bold text-on-surface">4.9</span>
                                <span className="font-caption text-[12px] text-n600-secondary-text">(128)</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-md w-full mt-xxl">
                        <button className="flex-1 bg-primary text-on-primary font-label-button text-[14px] font-bold py-sm rounded-lg shadow-sm hover:bg-secondary active:scale-[0.98] transition-all flex items-center justify-center gap-sm">
                            <span className="material-symbols-outlined">chat</span>
                            Hubungi
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-n300-border text-on-surface hover:bg-surface-container-low active:scale-[0.98] transition-all">
                            <span className="material-symbols-outlined">share</span>
                        </button>
                    </div>
                </div>

                {/* Social Impact Bento Grid */}
                <div className="px-lg mt-xxl mb-lg">
                    <h3 className="font-heading-2 text-[18px] font-bold text-on-surface mb-md">Social Impact</h3>
                    <div className="grid grid-cols-2 gap-md">
                        {/* Impact Card 1 */}
                        <div className="bg-surface-container-low p-md rounded-xl shadow-sm border border-surface-variant flex flex-col justify-between h-32 relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                            <div className="flex items-center gap-sm z-10">
                                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[18px]">scale</span>
                                </div>
                                <span className="font-body-regular text-[14px] text-on-surface-variant">Waste Processed</span>
                            </div>
                            <div className="z-10 mt-auto">
                                <span className="font-display-lg text-[32px] font-bold text-primary block">1,250</span>
                                <span className="font-caption text-[12px] text-n600-secondary-text">Kilograms diverted</span>
                            </div>
                        </div>

                        {/* Impact Card 2 */}
                        <div className="bg-secondary-container text-on-secondary-container p-md rounded-xl shadow-sm border border-secondary-fixed flex flex-col justify-between h-32 relative overflow-hidden group">
                            <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                            <div className="flex items-center gap-sm z-10">
                                <div className="w-8 h-8 rounded-full bg-white/30 text-on-secondary-container flex items-center justify-center backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                </div>
                                <span className="font-body-regular text-[14px]">Items Sold</span>
                            </div>
                            <div className="z-10 mt-auto">
                                <span className="font-display-lg text-[32px] font-bold block">3,420</span>
                                <span className="font-caption text-[12px] opacity-80">Upcycled products</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="px-lg mt-xxl pb-xxl">
                    <h3 className="font-heading-2 text-[18px] font-bold text-on-surface mb-sm">Tentang Toko</h3>
                    <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                        Kriya Daur Ulang berdedikasi untuk mengubah limbah plastik dan tekstil menjadi barang-barang fungsional bernilai tinggi. Kami memberdayakan pengrajin lokal di sekitar Bandung untuk menciptakan tas, dompet, dan dekorasi rumah yang tidak hanya indah tetapi juga ramah lingkungan. Setiap pembelian Anda membantu mengurangi sampah di TPA.
                    </p>
                    <div className="mt-md flex flex-wrap gap-sm">
                        <span className="px-md py-xs bg-surface-container rounded-full font-caption text-[12px] text-on-surface-variant">100% Recycled</span>
                        <span className="px-md py-xs bg-surface-container rounded-full font-caption text-[12px] text-on-surface-variant">Handmade</span>
                        <span className="px-md py-xs bg-surface-container rounded-full font-caption text-[12px] text-on-surface-variant">Local Artisan</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StoreInfoUMKM;
