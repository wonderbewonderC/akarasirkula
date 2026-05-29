import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const BottomNavUMKM: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="fixed bottom-0 w-full z-50 max-w-[430px] left-1/2 -translate-x-1/2 bg-surface border-t border-n300-border shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
            <div className="flex justify-around items-center h-[80px] w-full px-sm pb-safe">
                
                {/* Beranda */}
                <Link to="/umkm/dashboard" className={`flex flex-col items-center justify-center transition-colors active:scale-90 duration-200 relative pt-sm pb-xs w-16 ${location.pathname === '/umkm/dashboard' ? 'text-primary font-bold' : 'text-n400-inactive hover:text-primary'}`}>
                    <span className="material-symbols-outlined mb-xs text-[24px]" style={{ fontVariationSettings: location.pathname === '/umkm/dashboard' ? "'FILL' 1" : "'FILL' 0" }}>home</span>
                    <span className="font-nav-label text-[10px]">Beranda</span>
                </Link>

                {/* Pesanan */}
                <Link to="/umkm/orders" className={`flex flex-col items-center justify-center transition-colors active:scale-90 duration-200 relative pt-sm pb-xs w-16 ${location.pathname === '/umkm/orders' ? 'text-primary font-bold' : 'text-n400-inactive hover:text-primary'}`}>
                    <span className="material-symbols-outlined mb-xs text-[24px]" style={{ fontVariationSettings: location.pathname === '/umkm/orders' ? "'FILL' 1" : "'FILL' 0" }}>shopping_bag</span>
                    <span className="font-nav-label text-[10px]">Pesanan</span>
                </Link>

                {/* Produk */}
                <Link to="/umkm/products" className={`flex flex-col items-center justify-center transition-colors active:scale-90 duration-200 relative pt-sm pb-xs w-16 ${location.pathname === '/umkm/products' ? 'text-primary font-bold' : 'text-n400-inactive hover:text-primary'}`}>
                    <span className="material-symbols-outlined mb-xs text-[24px]" style={{ fontVariationSettings: location.pathname === '/umkm/products' ? "'FILL' 1" : "'FILL' 0" }}>inventory_2</span>
                    <span className="font-nav-label text-[10px]">Produk</span>
                </Link>

                {/* Profil */}
                <Link to="/umkm/profile" className={`flex flex-col items-center justify-center transition-colors active:scale-90 duration-200 relative pt-sm pb-xs w-16 ${location.pathname === '/umkm/profile' ? 'text-primary font-bold' : 'text-n400-inactive hover:text-primary'}`}>
                    <span className="material-symbols-outlined mb-xs text-[24px]" style={{ fontVariationSettings: location.pathname === '/umkm/profile' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
                    <span className="font-nav-label text-[10px]">Profil</span>
                </Link>
                
            </div>
        </nav>
    );
};

export default BottomNavUMKM;
