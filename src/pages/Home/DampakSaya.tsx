import React from 'react';

const DampakSaya: React.FC = () => {
    return (
        <main className="flex-1 flex flex-col pt-nav-height pb-xxl px-lg overflow-y-auto hide-scrollbar gap-xxl bg-surface-container-lowest">
            
            {/* Hero Illustration & Main Metric */}
            <section className="flex flex-col items-center text-center gap-md mt-6">
                <div className="w-48 h-48 rounded-full bg-primary-container/10 flex items-center justify-center relative overflow-hidden mb-sm shadow-[0_8px_32px_rgba(16,185,129,0.15)]">
                    <img 
                        alt="A vibrant, stylized illustration of a globe surrounded by lush green leaves and nature elements. The design is modern, clean, and optimistic, using shades of primary green and soft teals against a bright white background. It conveys a sense of environmental stewardship and circular economy, matching a sleek, eco-minimalist app UI." 
                        className="w-full h-full object-cover mix-blend-multiply opacity-90" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuALzHsfBlBJg3M3Xn2Urd15OZ5TvxV-fxrZSSfrgFEXFzZjQSsmfUcjjvPyHkjRUZfhSV9CV41gOt8vzH7AvOqDMTySPbg36JOmbcIMqiFdDdrFue79oTiqXBHhdcEI0r-tjYeLq6Xb3jJnu4FCXCUOJI3qpC8lVvCTsiGoZg85-EcJ8eF7he4nS67ythfhJ2R2WjeNFfq5PwN_QahwYNRnO__ceQbvuVU7S0162YeIWzdDb_XkroMENFho2LS-cL-sozs_4yVxlrE"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent"></div>
                </div>
                
                <div className="flex flex-col gap-xs">
                    <span className="font-body-regular text-body-regular text-n600-secondary-text">Total Kontribusi Bumi</span>
                    <div className="flex items-baseline justify-center gap-xs">
                        <h2 className="font-display-lg text-[32px] font-bold text-primary">Level 4</h2>
                        <span className="material-symbols-outlined text-warning-amber text-[20px]">military_tech</span>
                    </div>
                </div>
            </section>

            {/* Key Stats Bento Grid */}
            <section className="grid grid-cols-2 gap-md">
                
                {/* Stat 1: Disetor */}
                <div className="col-span-2 bg-surface-container-lowest border border-n300-border rounded-xl p-lg flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container/5 rounded-full blur-xl"></div>
                    <div className="flex flex-col gap-xs z-10">
                        <span className="font-caption text-caption text-n600-secondary-text flex items-center gap-xs">
                            <span className="material-symbols-outlined text-[16px] text-primary-container" style={{ fontVariationSettings: "'FILL' 0" }}>recycling</span>
                            Total Disetor
                        </span>
                        <div className="flex items-baseline gap-xs">
                            <span className="font-heading-1 text-heading-1 text-on-surface">45.2</span>
                            <span className="font-body-regular text-body-regular text-n600-secondary-text">kg</span>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center z-10">
                        <span className="material-symbols-outlined text-primary text-[24px]">scale</span>
                    </div>
                </div>

                {/* Stat 2: Produk */}
                <div className="bg-surface-container-lowest border border-n300-border rounded-xl p-md flex flex-col gap-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="w-8 h-8 rounded-full bg-secondary-container/30 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary text-[18px]">inventory_2</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading-2 text-[18px] font-bold text-on-surface">12</span>
                        <span className="font-caption text-caption text-n600-secondary-text">Produk Ditukar</span>
                    </div>
                </div>

                {/* Stat 3: Poin */}
                <div className="bg-surface-container-lowest border border-n300-border rounded-xl p-md flex flex-col gap-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="w-8 h-8 rounded-full bg-warning-amber/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-warning-amber text-[18px]">stars</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading-2 text-[18px] font-bold text-on-surface">1,250</span>
                        <span className="font-caption text-caption text-n600-secondary-text">Poin Aktif</span>
                    </div>
                </div>
            </section>

            {/* Detailed Impact List (Glassmorphism inspired) */}
            <section className="flex flex-col gap-lg bg-surface-container-low rounded-xl p-lg border border-surface-dim">
                <div className="flex items-center justify-between">
                    <h3 className="font-body-lg text-[16px] font-bold text-on-surface">Dampak Lingkungan</h3>
                    <button className="font-label-button text-[14px] font-semibold text-primary-container hover:opacity-80">Detail</button>
                </div>
                
                <div className="flex flex-col gap-md">
                    {/* Impact Item 1 */}
                    <div className="flex items-center gap-md p-md bg-surface-container-lowest rounded-lg shadow-sm border border-n100-surface">
                        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-[20px]">co2</span>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <span className="font-body-regular text-[14px] text-on-surface">22.6 kg CO2 dihindari</span>
                            <div className="w-full h-1.5 bg-n100-surface rounded-full mt-2">
                                <div className="h-full bg-primary-container rounded-full w-[70%]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Impact Item 2 */}
                    <div className="flex items-center gap-md p-md bg-surface-container-lowest rounded-lg shadow-sm border border-n100-surface">
                        <div className="w-10 h-10 rounded-full bg-[#E6F4EA] flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-[#137333] text-[20px]">park</span>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <span className="font-body-regular text-[14px] text-on-surface">3 pohon diselamatkan</span>
                            <div className="w-full h-1.5 bg-n100-surface rounded-full mt-2">
                                <div className="h-full bg-[#137333] rounded-full w-[45%]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Impact Item 3 */}
                    <div className="flex items-center gap-md p-md bg-surface-container-lowest rounded-lg shadow-sm border border-n100-surface">
                        <div className="w-10 h-10 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-[#1967D2] text-[20px]">water_drop</span>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <span className="font-body-regular text-[14px] text-on-surface">180 liter air bersih</span>
                            <div className="w-full h-1.5 bg-n100-surface rounded-full mt-2">
                                <div className="h-full bg-[#1967D2] rounded-full w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DampakSaya;
