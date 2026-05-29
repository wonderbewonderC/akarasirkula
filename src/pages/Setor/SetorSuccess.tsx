import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetorSuccess: React.FC = () => {
    const navigate = useNavigate();
    const [confetti, setConfetti] = useState<{ id: number; color: string; left: number; delay: number; duration: number; rotate: number }[]>([]);

    useEffect(() => {
        const colors = ['#006c49', '#10b981', '#85f8c4', '#F59E0B'];
        const pieceCount = 60;
        const newConfetti = [];

        for (let i = 0; i < pieceCount; i++) {
            newConfetti.push({
                id: i,
                color: colors[Math.floor(Math.random() * colors.length)],
                left: Math.random() * 100,
                delay: Math.random() * 0.5,
                duration: Math.random() * 1.5 + 1.5,
                rotate: Math.random() * 360,
            });
        }
        setConfetti(newConfetti);
    }, []);

    return (
        <main className="flex-1 flex flex-col bg-surface-container-lowest relative overflow-hidden min-h-screen">
            
            {/* Confetti Container */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {confetti.map((piece) => (
                    <div
                        key={piece.id}
                        className="absolute w-2.5 h-5 -top-5 opacity-0"
                        style={{
                            backgroundColor: piece.color,
                            left: `${piece.left}%`,
                            transform: `rotate(${piece.rotate}deg)`,
                            animation: `confettiFall ${piece.duration}s ease-in ${piece.delay}s forwards`,
                        }}
                    ></div>
                ))}
            </div>

            <style>{`
                @keyframes popIn {
                    0% { transform: scale(0.5); opacity: 0; }
                    70% { transform: scale(1.15); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-pop-in {
                    animation: popIn 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
                @keyframes confettiFall {
                    0% { opacity: 1; transform: translateY(0) rotateZ(0deg) rotateY(0deg); }
                    100% { opacity: 0; transform: translateY(100vh) rotateZ(360deg) rotateY(360deg); }
                }
            `}</style>

            <div className="flex-grow flex flex-col justify-center items-center z-10 px-lg py-xxl h-full">
                {/* Success Animation Icon */}
                <div className="relative flex justify-center items-center mb-10">
                    {/* Outer subtle pulse ring */}
                    <div className="absolute w-24 h-24 bg-[#10b981]/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                    {/* Main Checkmark Circle */}
                    <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center shadow-lg shadow-[#10b981]/40 animate-pop-in">
                        <span className="material-symbols-outlined text-white text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            check
                        </span>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3 px-2 max-w-[300px] animate-pop-in" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                    <h1 className="font-heading-1 text-[24px] text-on-surface font-bold">Setoranmu Tercatat!</h1>
                    <p className="font-body-regular text-[14px] text-n600-secondary-text">
                        Estimasi 575 poin pending sedang menunggu verifikasi.
                    </p>
                </div>

                {/* Info Card/Badge */}
                <div className="mt-8 bg-[#f1f3ff] border border-[#d3daef] rounded-lg px-4 py-3 flex items-center gap-3 animate-pop-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                    <span className="material-symbols-outlined text-[#F59E0B] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        pending_actions
                    </span>
                    <span className="font-body-regular text-[14px] text-on-surface font-medium">Proses 1-2 Hari Kerja</span>
                </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="w-full flex flex-col gap-3 px-lg pb-8 z-10 animate-pop-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                <button 
                    onClick={() => navigate('/history')}
                    className="w-full bg-[#006c49] text-white font-label-button text-[14px] py-[14px] rounded-lg shadow-[0_4px_14px_rgba(0,108,73,0.3)] flex justify-center items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
                >
                    Lihat Status
                </button>
                <button 
                    onClick={() => navigate('/home')}
                    className="w-full bg-transparent border border-[#6c7a71] text-[#006c49] font-label-button text-[14px] py-[14px] rounded-lg flex justify-center items-center gap-2 hover:bg-[#e9edff] transition-all active:scale-[0.98]"
                >
                    Kembali ke Home
                </button>
            </div>
        </main>
    );
};

export default SetorSuccess;
