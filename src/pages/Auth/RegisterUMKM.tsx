import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from '../../components/Shared/TopAppBar';

const RegisterUMKM: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to Home or UMKM Dashboard after successful registration
        navigate('/register-success');
    };

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-x-hidden min-h-screen">
            <TopAppBar title="Profil UMKM" showBack={true} />
            
            <div className="px-lg pt-md pb-xl flex flex-col flex-1">
                {/* Header Text */}
                <div className="mb-lg">
                    <h2 className="font-heading-1 text-heading-1 text-on-surface">Lengkapi Profil Usaha</h2>
                    <p className="font-body-regular text-[14px] text-n600-secondary-text mt-1">
                        Informasi ini akan membantu pembeli mengenal bisnis sirkular Anda.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-md flex-1">
                    
                    {/* Logo/Avatar Upload Placeholder */}
                    <div className="flex flex-col items-center justify-center gap-2 mb-2">
                        <div className="w-24 h-24 rounded-full bg-surface-variant border border-dashed border-n400-inactive flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-low transition-colors text-n600-secondary-text">
                            <span className="material-symbols-outlined text-[32px]">add_photo_alternate</span>
                            <span className="font-caption text-[10px] mt-1">Logo Toko</span>
                        </div>
                    </div>

                    {/* Nama Toko Input */}
                    <div className="flex flex-col gap-1">
                        <label className="font-label-button text-[14px] text-on-surface" htmlFor="storeName">
                            Nama Toko / Usaha
                        </label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-n400-inactive text-[20px]">
                                store
                            </span>
                            <input 
                                type="text" 
                                id="storeName"
                                placeholder="Cth: Eco Craft Bandung" 
                                className="w-full h-[48px] pl-10 pr-4 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular placeholder:text-n400-inactive"
                                required
                            />
                        </div>
                    </div>

                    {/* Kategori Usaha */}
                    <div className="flex flex-col gap-1">
                        <label className="font-label-button text-[14px] text-on-surface" htmlFor="category">
                            Kategori Usaha
                        </label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-n400-inactive text-[20px]">
                                category
                            </span>
                            <select 
                                id="category"
                                className="w-full h-[48px] pl-10 pr-10 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular text-on-surface appearance-none"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled className="text-n400-inactive">Pilih kategori utama</option>
                                <option value="kerajinan">Kerajinan Upcycle</option>
                                <option value="fashion">Fashion Berkelanjutan</option>
                                <option value="pupuk">Kompos & Pertanian</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-n400-inactive text-[20px] pointer-events-none">
                                arrow_drop_down
                            </span>
                        </div>
                    </div>

                    {/* Deskripsi Singkat */}
                    <div className="flex flex-col gap-1">
                        <label className="font-label-button text-[14px] text-on-surface" htmlFor="description">
                            Deskripsi Singkat
                        </label>
                        <textarea 
                            id="description"
                            rows={3}
                            placeholder="Ceritakan singkat tentang produk dan misi lingkungan usaha Anda..." 
                            className="w-full p-3 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular placeholder:text-n400-inactive resize-none"
                            required
                        />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full h-[48px] mt-6 bg-primary text-on-primary rounded-xl font-label-button text-label-button shadow-md flex items-center justify-center gap-2 hover:bg-[#005c3d] transition-colors active:scale-[0.98]"
                    >
                        Selesaikan Pendaftaran
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    </button>
                </form>
            </div>
        </main>
    );
};

export default RegisterUMKM;
