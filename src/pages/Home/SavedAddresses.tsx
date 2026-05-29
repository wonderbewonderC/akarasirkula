import React from 'react';
import { useNavigate } from 'react-router-dom';

const SavedAddresses: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[430px] mx-auto bg-surface-bright min-h-screen flex flex-col relative shadow-2xl">
            {/* TopAppBar */}
            <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md flex justify-between items-center px-lg h-nav-height w-full transition-all border-b border-n300-border">
                <button 
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant active:scale-90"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </button>
                <h1 className="font-heading-2 text-[18px] text-primary font-bold tracking-tight">Alamat Tersimpan</h1>
                <div className="w-10"></div>
            </header>

            {/* Main Content Canvas */}
            <main className="flex-1 px-lg py-xl flex flex-col gap-lg overflow-y-auto bg-surface-dim">
                
                {/* Add New Address Button */}
                <button 
                    onClick={() => navigate('/profile/address/add')}
                    className="w-full relative overflow-hidden group flex flex-col items-center justify-center gap-xs py-xl rounded-xl border-2 border-dashed border-primary bg-surface-container-low hover:bg-surface-container transition-all duration-300 active:scale-[0.98] mt-lg"
                >
                    <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                    </div>
                    <span className="font-label-button text-[14px] font-bold text-primary mt-sm">Tambah Alamat Baru</span>
                </button>

                {/* Address List Container */}
                <div className="flex flex-col gap-md mt-sm pb-xxl">
                    
                    {/* Card 1: Rumah (Primary/Default) */}
                    <div className="bg-surface-container-lowest rounded-xl p-lg border border-n300-border shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col gap-md relative overflow-hidden transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                                </div>
                                <h2 className="font-heading-2 text-[16px] font-bold text-on-surface">Rumah</h2>
                            </div>
                            <span className="px-2 py-1 bg-primary-container/10 text-primary-container rounded-md font-caption text-[10px] font-bold tracking-wide uppercase">Utama</span>
                        </div>
                        <div className="pr-xl">
                            <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                                Jl. Hijau Lestari No. 12, RT 04/RW 02<br/>
                                Kelurahan Bumi Bersih, Kecamatan Alam Damai<br/>
                                Jakarta Selatan, 12345
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-lg mt-sm pt-md border-t border-surface-variant">
                            <button className="font-label-button text-[14px] font-bold text-error hover:bg-error-container/50 px-sm py-xs rounded transition-colors active:scale-95 flex items-center gap-xs">
                                <span className="material-symbols-outlined text-[16px]">delete</span> Hapus
                            </button>
                            <button className="font-label-button text-[14px] font-bold text-primary hover:bg-surface-container px-sm py-xs rounded transition-colors active:scale-95 flex items-center gap-xs">
                                <span className="material-symbols-outlined text-[16px]">edit</span> Ubah
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Kantor */}
                    <div className="bg-surface-container-lowest rounded-xl p-lg border border-n300-border shadow-sm flex flex-col gap-md relative overflow-hidden transition-all hover:shadow-md">
                        <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant"></div>
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-n600-secondary-text">
                                    <span className="material-symbols-outlined text-[18px]">work</span>
                                </div>
                                <h2 className="font-heading-2 text-[16px] font-bold text-on-surface">Kantor</h2>
                            </div>
                        </div>
                        <div className="pr-xl">
                            <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                                Gedung Eco-Tower Lt. 8, Suite 801<br/>
                                Jl. Jend. Sudirman Kav. 45<br/>
                                Jakarta Pusat, 10210
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-lg mt-sm pt-md border-t border-surface-variant">
                            <button className="font-label-button text-[14px] font-bold text-error hover:bg-error-container/50 px-sm py-xs rounded transition-colors active:scale-95 flex items-center gap-xs">
                                <span className="material-symbols-outlined text-[16px]">delete</span> Hapus
                            </button>
                            <button className="font-label-button text-[14px] font-bold text-primary hover:bg-surface-container px-sm py-xs rounded transition-colors active:scale-95 flex items-center gap-xs">
                                <span className="material-symbols-outlined text-[16px]">edit</span> Ubah
                            </button>
                        </div>
                    </div>

                    {/* Card 3: Rumah Orang Tua */}
                    <div className="bg-surface-container-lowest rounded-xl p-lg border border-n300-border shadow-sm flex flex-col gap-md relative overflow-hidden transition-all hover:shadow-md">
                        <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant"></div>
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-n600-secondary-text">
                                    <span className="material-symbols-outlined text-[18px]">nature_people</span>
                                </div>
                                <h2 className="font-heading-2 text-[16px] font-bold text-on-surface">Rumah Orang Tua</h2>
                            </div>
                        </div>
                        <div className="pr-xl">
                            <p className="font-body-regular text-[14px] text-n600-secondary-text leading-relaxed">
                                Perumahan Griya Asri Blok B No. 4<br/>
                                Jl. Melati Putih, Depok Barat<br/>
                                Depok, Jawa Barat, 16432
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-lg mt-sm pt-md border-t border-surface-variant">
                            <button className="font-label-button text-[14px] font-bold text-error hover:bg-error-container/50 px-sm py-xs rounded transition-colors active:scale-95 flex items-center gap-xs">
                                <span className="material-symbols-outlined text-[16px]">delete</span> Hapus
                            </button>
                            <button className="font-label-button text-[14px] font-bold text-primary hover:bg-surface-container px-sm py-xs rounded transition-colors active:scale-95 flex items-center gap-xs">
                                <span className="material-symbols-outlined text-[16px]">edit</span> Ubah
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default SavedAddresses;
