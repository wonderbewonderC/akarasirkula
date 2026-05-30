import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const EditProfile: React.FC = () => {
    const navigate = useNavigate();
    const { user, updateUser } = useAuth();
    
    // State form
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [phone, setPhone] = useState('0812-3456-7890');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Update context global
        updateUser({
            name: name,
            email: email
        });
        alert('Profil berhasil diperbarui!');
        navigate(-1);
    };

    return (
        <div className="w-full max-w-[430px] mx-auto bg-surface shadow-sm min-h-screen relative flex flex-col">
            
            {/* Top App Bar */}
            <header className="flex justify-between items-center px-lg h-nav-height w-full bg-surface z-10 sticky top-0 border-b border-n300-border">
                <button 
                    onClick={() => navigate(-1)}
                    aria-label="Go back" 
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors scale-95 active:scale-90"
                >
                    <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
                </button>
                <h1 className="font-heading-2 text-[18px] text-on-background font-bold text-center flex-1">Edit Profil</h1>
                <div className="w-10"></div>
            </header>

            <main className="flex-1 flex flex-col px-lg pt-xxl pb-[100px] overflow-y-auto">
                {/* Profile Photo Section */}
                <div className="flex flex-col items-center justify-center mb-xxl relative">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-surface shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                        <img 
                            alt="User Profile Photo" 
                            className="w-full h-full object-cover" 
                            src="https://picsum.photos/seed/8/400/400"
                        />
                    </div>
                    <button 
                        aria-label="Edit Profile Photo" 
                        className="absolute bottom-0 right-1/2 translate-x-12 translate-y-2 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[#059669] transition-colors scale-95 active:scale-90"
                    >
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                </div>

                {/* Form Fields */}
                <form className="flex flex-col gap-lg flex-1" onSubmit={handleSave}>
                    {/* Full Name */}
                    <div className="flex flex-col gap-xs">
                        <label className="font-caption text-[12px] text-n600-secondary-text ml-sm" htmlFor="fullName">Nama Lengkap</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-n400-inactive">person</span>
                            <input 
                                className="w-full h-12 bg-surface-container-lowest border border-n300-border rounded-lg pl-10 pr-md font-body-regular text-[14px] text-on-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
                                id="fullName" 
                                name="fullName" 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-xs">
                        <label className="font-caption text-[12px] text-n600-secondary-text ml-sm" htmlFor="email">Email</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-n400-inactive">mail</span>
                            <input 
                                className="w-full h-12 bg-surface-container-lowest border border-n300-border rounded-lg pl-10 pr-md font-body-regular text-[14px] text-on-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
                                id="email" 
                                name="email" 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-xs">
                        <label className="font-caption text-[12px] text-n600-secondary-text ml-sm" htmlFor="phone">Nomor Telepon</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-n400-inactive">call</span>
                            <input 
                                className="w-full h-12 bg-surface-container-lowest border border-n300-border rounded-lg pl-10 pr-md font-body-regular text-[14px] text-on-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
                                id="phone" 
                                name="phone" 
                                type="tel" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col gap-xs mb-xxl">
                        <label className="font-caption text-[12px] text-n600-secondary-text ml-sm">Jenis Kelamin</label>
                        <div className="flex gap-md">
                            <label className="flex-1 relative cursor-pointer">
                                <input defaultChecked className="peer sr-only" name="gender" type="radio" value="Laki-laki" />
                                <div className="w-full h-12 flex items-center justify-center bg-surface-container-lowest border border-n300-border rounded-lg font-body-regular text-[14px] text-n600-secondary-text peer-checked:border-primary peer-checked:bg-[#D1FAE5] peer-checked:text-primary transition-all">
                                    Laki-laki
                                </div>
                            </label>
                            <label className="flex-1 relative cursor-pointer">
                                <input className="peer sr-only" name="gender" type="radio" value="Perempuan" />
                                <div className="w-full h-12 flex items-center justify-center bg-surface-container-lowest border border-n300-border rounded-lg font-body-regular text-[14px] text-n600-secondary-text peer-checked:border-primary peer-checked:bg-[#D1FAE5] peer-checked:text-primary transition-all">
                                    Perempuan
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto pt-lg">
                        <button 
                            className="w-full h-12 bg-primary text-white font-label-button text-[14px] font-bold rounded-[12px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[#059669] transition-all scale-100 active:scale-95" 
                            type="submit"
                        >
                            Simpan Perubahan
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default EditProfile;
