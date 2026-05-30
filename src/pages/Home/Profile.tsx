import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    return (
        <main className="flex-1 flex flex-col pt-nav-height pb-[100px] px-lg overflow-y-auto bg-background text-on-surface">
            
            {/* Profile Header */}
            <section className="flex flex-col items-center mt-xl mb-xxl">
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-md border-2 border-primary-container">
                    <img 
                        alt="Profile photo" 
                        className="w-full h-full object-cover" 
                        src="https://picsum.photos/seed/13/400/400"
                    />
                </div>
                <h2 className="font-heading-1 text-[24px] font-bold text-on-surface mb-xs">{user?.name || 'Ahmad Rizky'}</h2>
                <p className="font-body-regular text-[14px] text-on-surface-variant">{user?.email || 'ahmad.rizky@example.com'}</p>
            </section>

            {/* Stats Grid (Bento Style) */}
            <section className="grid grid-cols-3 gap-md mb-xxl">
                <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center border border-n300-border">
                    <span className="material-symbols-outlined text-primary-container mb-xs" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
                    <span className="font-heading-2 text-[18px] font-bold text-on-surface">45kg</span>
                    <span className="font-caption text-[12px] text-n600-secondary-text">Disetor</span>
                </div>
                
                <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center border border-n300-border">
                    <span className="material-symbols-outlined text-primary-container mb-xs" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                    <span className="font-heading-2 text-[18px] font-bold text-on-surface">12</span>
                    <span className="font-caption text-[12px] text-n600-secondary-text">Produk</span>
                </div>
                
                <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center border border-n300-border bg-gradient-to-br from-surface-container-lowest to-surface-container-low">
                    <span className="material-symbols-outlined text-[#416656] mb-xs" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                    <span className="font-label-button text-[14px] font-semibold text-on-surface text-center">Sejak</span>
                    <span className="font-caption text-[12px] text-n600-secondary-text text-center">Jan '26</span>
                </div>
            </section>

            {/* Menu List */}
            <section className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-n300-border overflow-hidden mb-xxl">
                <ul className="divide-y divide-n300-border">
                    <li>
                        <Link to="/profile/edit" className="w-full flex items-center justify-between p-lg hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                            <div className="flex items-center gap-md">
                                <span className="material-symbols-outlined text-on-surface-variant">person_edit</span>
                                <span className="font-body-lg text-[16px] font-medium text-on-surface">Edit Profil</span>
                            </div>
                            <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile/address" className="w-full flex items-center justify-between p-lg hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                            <div className="flex items-center gap-md">
                                <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
                                <span className="font-body-lg text-[16px] font-medium text-on-surface">Alamat Tersimpan</span>
                            </div>
                            <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                        </Link>
                    </li>
                    <li>
                        <button className="w-full flex items-center justify-between p-lg hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                            <div className="flex items-center gap-md">
                                <span className="material-symbols-outlined text-on-surface-variant">notifications_active</span>
                                <span className="font-body-lg text-[16px] font-medium text-on-surface">Pengaturan Notifikasi</span>
                            </div>
                            <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                        </button>
                    </li>
                </ul>
            </section>
            
            <section className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-n300-border overflow-hidden mb-xxl">
                <ul className="divide-y divide-n300-border">
                    <li>
                        <button className="w-full flex items-center justify-between p-lg hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                            <div className="flex items-center gap-md">
                                <span className="material-symbols-outlined text-on-surface-variant">help_center</span>
                                <span className="font-body-lg text-[16px] font-medium text-on-surface">Bantuan dan FAQ</span>
                            </div>
                            <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                        </button>
                    </li>
                    <li>
                        <button className="w-full flex items-center justify-between p-lg hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                            <div className="flex items-center gap-md">
                                <span className="material-symbols-outlined text-on-surface-variant">info</span>
                                <span className="font-body-lg text-[16px] font-medium text-on-surface">Tentang AkaraSirkula</span>
                            </div>
                            <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                        </button>
                    </li>
                    {/* Logout */}
                    <li className="p-lg">
                        <button 
                            onClick={() => {
                                logout();
                                navigate('/login');
                            }}
                            className="w-full bg-error-container text-error-ruby font-label-button text-[14px] font-bold py-[14px] rounded-lg shadow-sm hover:bg-[#FCA5A5] active:scale-[0.98] transition-all flex justify-center items-center gap-sm"
                        >
                            <span className="material-symbols-outlined text-[18px]">logout</span>
                            Keluar
                        </button>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default Profile;
