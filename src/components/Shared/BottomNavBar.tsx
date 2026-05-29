import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const BottomNavBar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="fixed bottom-0 w-full z-50 max-w-[430px] left-1/2 -translate-x-1/2 bg-surface shadow-sm border-t border-outline-variant">
            <div className="flex justify-around items-center h-nav-height px-md">
                
                {/* Home */}
                <NavLink to="/home" className={({ isActive }) => 
                    `flex flex-col items-center justify-center rounded-xl w-16 h-14 transition-all duration-200 ${isActive ? 'text-primary font-bold after:content-[\'\'] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 transform scale-90' : 'text-n400-inactive hover:bg-surface-container-low'}`
                }>
                    {({ isActive }) => (
                        <>
                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>home</span>
                            <span className="font-nav-label text-nav-label mt-1">Home</span>
                        </>
                    )}
                </NavLink>

                {/* History */}
                <NavLink to="/history" className={({ isActive }) => 
                    `flex flex-col items-center justify-center rounded-xl w-16 h-14 transition-all duration-200 ${isActive ? 'text-primary font-bold after:content-[\'\'] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 transform scale-90' : 'text-n400-inactive hover:bg-surface-container-low'}`
                }>
                    {({ isActive }) => (
                        <>
                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>history</span>
                            <span className="font-nav-label text-[10px] mt-1">Riwayat</span>
                        </>
                    )}
                </NavLink>

                {/* Setor (FAB) */}
                <div className="relative flex flex-col items-center justify-center w-16 h-14">
                    <NavLink to={{ search: location.search, hash: '#setor' }} className="absolute -top-6 flex items-center justify-center w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:bg-[#005c3d] transition-all active:scale-95 border-[4px] border-surface">
                        <span className="material-symbols-outlined text-[28px]">add</span>
                    </NavLink>
                    <span className="font-nav-label text-[10px] text-primary absolute bottom-1">Setor</span>
                </div>

                {/* Market */}
                <NavLink to="/market" className={({ isActive }) => 
                    `flex flex-col items-center justify-center rounded-xl w-16 h-14 transition-all duration-200 ${isActive ? 'text-primary font-bold after:content-[\'\'] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 transform scale-90' : 'text-n400-inactive hover:bg-surface-container-low'}`
                }>
                    {({ isActive }) => (
                        <>
                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>storefront</span>
                            <span className="font-nav-label text-[10px] mt-1">Market</span>
                        </>
                    )}
                </NavLink>

                {/* Profile */}
                <NavLink to="/profile" className={({ isActive }) => 
                    `flex flex-col items-center justify-center rounded-xl w-16 h-14 transition-all duration-200 ${isActive ? 'text-primary font-bold after:content-[\'\'] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 transform scale-90' : 'text-n400-inactive hover:bg-surface-container-low'}`
                }>
                    {({ isActive }) => (
                        <>
                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>person</span>
                            <span className="font-nav-label text-[10px] mt-1">Profil</span>
                        </>
                    )}
                </NavLink>

            </div>
        </nav>
    );
};

export default BottomNavBar;
