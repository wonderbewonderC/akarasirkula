import React from 'react';
import { useNavigate } from 'react-router-dom';

const hubs = [
    {
        id: 1,
        name: "Hub Bandung Utara",
        badge: "Terdekat",
        address: "Jl. Ir. H. Juanda No. 123, Dago",
        distance: "1.2 km",
        status: "Buka",
        isOpen: true,
    },
    {
        id: 2,
        name: "Hub Citarum",
        badge: "",
        address: "Jl. Citarum No. 45",
        distance: "3.5 km",
        status: "Buka",
        isOpen: true,
    }
];

const HubLocation: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 flex flex-col bg-[#e5e5e5] relative overflow-hidden h-screen">
            
            {/* Header */}
            <div className="bg-surface flex items-center justify-between px-4 py-3 z-20 shadow-sm shrink-0">
                <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-start text-[#334155]">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <h1 className="font-heading-1 text-[20px] text-primary font-bold">AkaraSirkula</h1>
                <button className="w-10 h-10 flex items-center justify-end text-[#334155]">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative">
                {/* Floating Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#475569] shadow-md">
                        <span className="material-symbols-outlined text-[20px]">my_location</span>
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#475569] shadow-md">
                        <span className="material-symbols-outlined text-[20px]">layers</span>
                    </button>
                </div>

                {/* Map Markers */}
                <div className="absolute top-1/3 left-1/4">
                    <div className="w-6 h-6 rounded-full bg-[#86efac] border-2 border-white flex items-center justify-center text-[#065f46] shadow-sm">
                        <span className="material-symbols-outlined text-[12px]">storefront</span>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="bg-[#047857] text-white px-2 py-1 rounded-md font-bold text-[12px] shadow-md mb-1 relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-r-4 after:border-t-4 after:border-l-transparent after:border-r-transparent after:border-t-[#047857]">
                        1.2 km
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#047857] border-2 border-white flex items-center justify-center text-white shadow-md">
                        <span className="material-symbols-outlined text-[16px]">eco</span>
                    </div>
                </div>

                <div className="absolute top-[60%] right-1/4">
                    <div className="w-6 h-6 rounded-full bg-[#86efac] border-2 border-white flex items-center justify-center text-[#065f46] shadow-sm">
                        <span className="material-symbols-outlined text-[12px]">storefront</span>
                    </div>
                </div>
            </div>

            {/* Bottom Sheet */}
            <div className="bg-white rounded-t-[24px] z-20 absolute bottom-[72px] left-0 right-0 max-w-[430px] mx-auto pb-4 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                {/* Drag Handle */}
                <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1.5 rounded-full bg-[#cbd5e1]"></div>
                </div>

                <div className="px-lg pb-4">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="font-heading-2 text-[20px] text-[#0f172a] font-bold">Lokasi Hub</h2>
                            <p className="font-body-regular text-[14px] text-[#64748b]">Temukan titik setor terdekat</p>
                        </div>
                        <button className="flex items-center gap-2 border border-[#cbd5e1] rounded-full px-3 py-1.5 hover:bg-[#f8fafc] transition-colors">
                            <span className="material-symbols-outlined text-[18px] text-[#334155]">tune</span>
                            <span className="font-label-button text-[14px] text-[#334155]">Filter</span>
                        </button>
                    </div>
                    
                    {/* Horizontal Scrolling List */}
                    <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar -mx-lg px-lg">
                        {hubs.map((hub, idx) => (
                            <div key={hub.id} className={`w-[260px] shrink-0 rounded-[16px] border ${idx === 0 ? 'border-primary' : 'border-[#cbd5e1]'} bg-white p-4 flex flex-col gap-3 shadow-sm relative overflow-hidden`}>
                                {/* Active Left Border Accent */}
                                {idx === 0 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
                                
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-heading-2 text-[16px] text-[#0f172a] font-bold leading-tight line-clamp-1">{hub.name}</h3>
                                    {hub.badge && (
                                        <span className="bg-[#6ee7b7] text-[#064e3b] px-2 py-0.5 rounded font-label-button text-[10px] shrink-0">
                                            {hub.badge}
                                        </span>
                                    )}
                                </div>
                                
                                <p className="font-body-regular text-[13px] text-[#64748b] leading-tight line-clamp-1">{hub.address}</p>
                                
                                <div className="flex items-center gap-2 text-[13px]">
                                    <div className="flex items-center gap-1 text-[#047857] font-bold">
                                        <span className="material-symbols-outlined text-[16px]">directions_walk</span>
                                        {hub.distance}
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                                    <div className="flex items-center gap-1 text-[#047857]">
                                        <div className="w-2 h-2 rounded-full bg-[#047857]"></div>
                                        {hub.status}
                                    </div>
                                </div>

                                <button className={`w-full h-10 rounded-[8px] font-label-button text-[14px] flex items-center justify-center gap-2 transition-colors mt-1 ${
                                    idx === 0 
                                    ? 'bg-[#047857] text-white hover:bg-[#065f46]' 
                                    : 'bg-[#f1f5f9] text-[#94a3b8]'
                                }`}>
                                    {idx === 0 && <span className="material-symbols-outlined text-[18px]">navigation</span>}
                                    Petunjuk Arah
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </main>
    );
};

export default HubLocation;
