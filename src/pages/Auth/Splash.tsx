import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Automatically navigate to onboarding after 2.5 seconds
        const timer = setTimeout(() => {
            navigate('/onboarding');
        }, 2500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <main className="flex-1 flex flex-col items-center justify-center bg-surface relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-tertiary-container/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

            {/* Logo Container */}
            <div className="flex flex-col items-center justify-center animate-fade-in-up">
                <img 
                    src="/logo.png" 
                    alt="AkaraSirkula Logo" 
                    className="w-32 h-32 mb-lg object-contain"
                    onError={(e) => {
                        // Fallback jika logo.png belum dimasukkan
                        e.currentTarget.style.display = 'none';
                        const fallbackText = document.getElementById('logo-fallback-text');
                        if (fallbackText) fallbackText.style.display = 'block';
                    }}
                />
                <h1 id="logo-fallback-text" className="font-display-lg text-[32px] font-bold text-on-primary mb-xs" style={{ display: 'none' }}>
                    AkaraSirkula
                </h1>
                <p className="font-body-lg text-[16px] text-primary-container text-center max-w-[280px]">
                    Langkah kecil untuk bumi, <br/>
                    berdampak besar untuk semua.
                </p>
            </div>

            {/* Loading Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '300ms' }}></div>
            </div>
        </main>
    );
};

export default Splash;
