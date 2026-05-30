import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['Semua', 'Upcycle', 'Sembako', 'Kriya', 'Lainnya'];

const products = [
    {
        id: 1,
        name: "Tas Belanja Anyam Plastik Premium",
        partner: "UMKM Karya Hijau",
        price: "1,250 pts",
        image: "https://images.unsplash.com/photo-1597484661643-2f5fef640df1?auto=format&fit=crop&q=80&w=400",
        rating: "4.8",
        sold: "120"
    },
    {
        id: 2,
        name: "Buku Catatan Kertas Daur Ulang",
        partner: "Daur Kertas Co.",
        price: "450 pts",
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400",
        rating: "4.9",
        sold: "500+"
    },
    {
        id: 3,
        name: "Vas Bunga Kaca Hijau Estetik",
        partner: "Kaca Kreasi",
        price: "850 pts",
        image: "https://images.unsplash.com/photo-1601633535925-e51c89f5bc51?auto=format&fit=crop&q=80&w=400",
        rating: "4.7",
        sold: "85"
    },
    {
        id: 4,
        name: "Pouch Serbaguna Kain Denim",
        partner: "Denim Reborn",
        price: "600 pts",
        image: "https://images.unsplash.com/photo-1558024920-b41e1887dc32?auto=format&fit=crop&q=80&w=400",
        rating: "4.9",
        sold: "1k+"
    }
];

const Market: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Semua');

    return (
        <main className="flex-1 flex flex-col bg-surface overflow-y-auto overflow-x-hidden pb-24 hide-scrollbar">
            
            {/* Sticky Header with Search */}
            <div className="sticky top-0 z-30 bg-surface/90 backdrop-blur-md pt-md pb-sm px-lg transition-all">
                <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-n400-inactive">
                            search
                        </span>
                        <input 
                            type="text" 
                            placeholder="Cari produk sirkular..." 
                            className="w-full h-11 pl-10 pr-4 rounded-xl border border-n300-border bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-regular text-[14px]"
                        />
                    </div>
                    <button className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors shrink-0">
                        <span className="material-symbols-outlined">filter_list</span>
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="px-lg flex flex-col flex-1">
                
                {/* Header Text & Points */}
                <div className="flex justify-between items-end mt-4 mb-6">
                    <div>
                        <h1 className="font-heading-1 text-[24px] text-on-surface">Tukar Poin</h1>
                        <p className="font-body-regular text-[13px] text-n600-secondary-text mt-1">Dukung UMKM & kurangi emisi</p>
                    </div>
                    <div className="bg-primary/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-primary">generating_tokens</span>
                        <span className="font-heading-2 text-[14px] text-primary">2,450 pts</span>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar -mx-lg px-lg">
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full font-label-button text-[13px] whitespace-nowrap transition-colors ${
                                activeCategory === cat 
                                ? 'bg-primary text-on-primary shadow-sm' 
                                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-low'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-4 mt-2">
                    {products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col bg-surface rounded-2xl border border-n300-border overflow-hidden hover:border-primary/50 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            {/* Image Box */}
                            <div className="aspect-square bg-surface-variant relative overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-[12px] text-[#F59E0B]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="font-label-button text-[11px] text-on-surface">{product.rating}</span>
                                </div>
                            </div>
                            
                            {/* Info Box */}
                            <div className="p-3 flex flex-col flex-1">
                                <span className="font-caption text-[10px] text-n600-secondary-text mb-1 truncate">
                                    {product.partner}
                                </span>
                                <h3 className="font-heading-2 text-[13px] text-on-surface leading-tight mb-2 line-clamp-2">
                                    {product.name}
                                </h3>
                                
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="font-heading-2 text-[14px] text-primary">{product.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
};

export default Market;
