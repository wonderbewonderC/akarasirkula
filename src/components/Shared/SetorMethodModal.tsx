import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SetorMethodModal: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    const isHashActive = location.hash === '#setor';

    useEffect(() => {
        if (isHashActive) {
            setIsOpen(true);
            setIsAnimatingOut(false);
        } else if (isOpen) {
            // Trigger exit animation
            setIsAnimatingOut(true);
            const timer = setTimeout(() => {
                setIsOpen(false);
                setIsAnimatingOut(false);
            }, 300); // match transition duration
            return () => clearTimeout(timer);
        }
    }, [isHashActive]);

    const handleClose = () => {
        // Go back to remove the hash, or navigate to current pathname
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate(location.pathname, { replace: true });
        }
    };

    if (!isOpen && !isAnimatingOut) return null;

    return (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end max-w-[430px] mx-auto pointer-events-none">
            
            {/* Backdrop */}
            <div 
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 pointer-events-auto ${
                    isHashActive && !isAnimatingOut ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            ></div>

            {/* Bottom Sheet */}
            <div 
                className={`bg-surface rounded-t-[32px] w-full pb-8 pt-4 px-lg shadow-[0_-8px_24px_rgba(0,0,0,0.1)] relative pointer-events-auto transition-transform duration-300 ease-out ${
                    isHashActive && !isAnimatingOut ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                {/* Drag Handle */}
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-1.5 rounded-full bg-n300-border"></div>
                </div>

                <h2 className="text-center font-heading-2 text-[18px] text-on-surface mb-6">Pilih Metode Setor</h2>

                <div className="flex flex-col gap-4">
                    {/* Dijemput Option */}
                    <button 
                        onClick={() => {
                            handleClose();
                            setTimeout(() => navigate('/setor-jenis'), 300);
                        }}
                        className="w-full flex items-center gap-4 p-4 rounded-[20px] border border-n300-border bg-surface hover:border-primary transition-colors text-left"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#047857] shrink-0">
                            <span className="material-symbols-outlined text-[28px]">local_shipping</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-heading-2 text-[16px] text-on-surface font-bold mb-1">Dijemput</h3>
                            <span className="inline-block bg-[#86efac] text-[#065f46] px-2 py-0.5 rounded font-label-button text-[12px]">
                                Gratis &gt;2kg
                            </span>
                        </div>
                        <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                    </button>

                    {/* Diantar Option */}
                    <button 
                        onClick={() => {
                            handleClose();
                            setTimeout(() => navigate('/hub-lokasi'), 300);
                        }}
                        className="w-full flex items-center gap-4 p-4 rounded-[20px] border border-n300-border bg-surface hover:border-primary transition-colors text-left"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#047857] shrink-0">
                            <span className="material-symbols-outlined text-[28px]">location_on</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-heading-2 text-[16px] text-on-surface font-bold mb-1">Diantar</h3>
                            <p className="font-body-regular text-[13px] text-n600-secondary-text">Bisa langsung diverifikasi</p>
                        </div>
                        <span className="material-symbols-outlined text-n400-inactive">chevron_right</span>
                    </button>
                </div>

                <div className="flex justify-center mt-8">
                    <button onClick={handleClose} className="w-12 h-12 rounded-full border border-n300-border flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors">
                        <span className="material-symbols-outlined text-[24px]">close</span>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default SetorMethodModal;
