import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const EditProfileUMKM: React.FC = () => {
    const navigate = useNavigate();
    const { user, updateUser } = useAuth();
    
    // Form state
    const [name, setName] = React.useState(user?.name || 'Budi Santoso');
    const [email, setEmail] = React.useState(user?.email || 'hello@akarasirkula.com');
    const [phone, setPhone] = React.useState('81234567890');
    const [address, setAddress] = React.useState('Jl. Sudirman No. 123, Kel. Senayan, Kec. Kebayoran Baru, Jakarta Selatan, 12190');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        updateUser({ name, email });
        alert('Profil UMKM berhasil diperbarui!');
        navigate(-1);
    };

    return (
        <div className="w-full max-w-[430px] mx-auto bg-surface shadow-sm relative pb-[80px] min-h-screen">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-surface/90 backdrop-blur-md px-lg h-[64px] flex items-center shadow-sm">
                <button 
                    onClick={() => navigate(-1)}
                    className="p-2 -ml-2 rounded-full hover:bg-n100-surface transition-colors"
                >
                    <span className="material-symbols-outlined text-on-surface">arrow_back</span>
                </button>
                <h1 className="font-heading-2 text-[18px] font-bold ml-sm">Edit Profil</h1>
            </header>

            {/* Content */}
            <main className="px-lg pt-xxl pb-xxl flex flex-col gap-xxl">
                {/* Profile Photo Upload */}
                <section className="flex flex-col items-center gap-md">
                    <div className="relative group cursor-pointer">
                        <img 
                            alt="Profile" 
                            className="w-[100px] h-[100px] rounded-full object-cover border-4 border-surface shadow-sm" 
                            src="https://picsum.photos/seed/17/400/400"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-primary-container w-8 h-8 rounded-full border-2 border-surface flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>edit</span>
                        </div>
                    </div>
                    <p className="font-caption text-[12px] text-n600-secondary-text">Format JPG, PNG (Maks. 5MB)</p>
                </section>

                {/* Form Fields */}
                <section className="flex flex-col gap-lg">
                    {/* Store Name (Disabled/Info) */}
                    <div className="flex flex-col gap-xs">
                        <label className="font-body-regular text-[14px] text-n600-secondary-text">Nama Toko / Bisnis</label>
                        <div className="flex items-center bg-n100-surface px-md py-sm rounded-lg border border-n300-border">
                            <span className="material-symbols-outlined text-n400-inactive mr-sm">storefront</span>
                            <input 
                                className="bg-transparent border-none w-full font-body-regular text-[14px] text-n400-inactive p-0 focus:ring-0" 
                                disabled 
                                type="text" 
                                value="AkaraSirkula Store"
                            />
                            <span className="material-symbols-outlined text-n400-inactive ml-sm text-[18px]">lock</span>
                        </div>
                        <p className="font-caption text-[12px] text-n400-inactive text-xs mt-1">Nama toko tidak dapat diubah.</p>
                    </div>

                    {/* PIC Name */}
                    <div className="flex flex-col gap-xs">
                        <label className="font-body-regular text-[14px] font-medium">Nama Lengkap PIC</label>
                        <div className="flex items-center bg-white px-md py-sm rounded-lg border border-n300-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <span className="material-symbols-outlined text-n600-secondary-text mr-sm">person</span>
                            <input 
                                className="bg-transparent border-none w-full font-body-regular text-[14px] p-0 focus:ring-0 placeholder:text-n400-inactive outline-none" 
                                placeholder="Masukkan nama lengkap" 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Business Email */}
                    <div className="flex flex-col gap-xs">
                        <label className="font-body-regular text-[14px] font-medium">Email Bisnis</label>
                        <div className="flex items-center bg-white px-md py-sm rounded-lg border border-n300-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <span className="material-symbols-outlined text-n600-secondary-text mr-sm">mail</span>
                            <input 
                                className="bg-transparent border-none w-full font-body-regular text-[14px] p-0 focus:ring-0 placeholder:text-n400-inactive outline-none" 
                                placeholder="email@bisnis.com" 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* WhatsApp Number */}
                    <div className="flex flex-col gap-xs">
                        <label className="font-body-regular text-[14px] font-medium">Nomor WhatsApp</label>
                        <div className="flex items-center bg-white px-md py-sm rounded-lg border border-n300-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <span className="font-body-regular text-[14px] text-n600-secondary-text mr-sm border-r border-n300-border pr-sm">+62</span>
                            <input 
                                className="bg-transparent border-none w-full font-body-regular text-[14px] p-0 focus:ring-0 placeholder:text-n400-inactive outline-none" 
                                placeholder="812xxxxxxx" 
                                type="tel" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Business Address */}
                    <div className="flex flex-col gap-xs">
                        <label className="font-body-regular text-[14px] font-medium">Alamat Lengkap Usaha</label>
                        <div className="bg-white px-md py-sm rounded-lg border border-n300-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all flex items-start">
                            <span className="material-symbols-outlined text-n600-secondary-text mr-sm mt-1">location_on</span>
                            <textarea 
                                className="bg-transparent border-none w-full font-body-regular text-[14px] p-0 focus:ring-0 placeholder:text-n400-inactive resize-none outline-none" 
                                placeholder="Masukkan alamat lengkap usaha..." 
                                rows={3}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* Sticky Bottom Button */}
            <div className="fixed bottom-0 w-full max-w-[430px] bg-surface px-lg py-md border-t border-n100-surface shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
                <button 
                    onClick={handleSave}
                    className="w-full bg-primary-container hover:bg-[#059669] text-white font-label-button text-[14px] font-bold py-3 rounded-xl transition-colors active:scale-95 shadow-[0_4px_12px_rgba(16,185,129,0.3)] flex justify-center items-center gap-sm"
                >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>save</span>
                    Simpan Perubahan
                </button>
            </div>
        </div>
    );
};

export default EditProfileUMKM;
