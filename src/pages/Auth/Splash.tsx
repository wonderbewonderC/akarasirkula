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
            <div className="flex flex-col items-center z-10 animate-fade-in-up">
                <div className="w-48 h-48 mb-8 rounded-[40px] bg-primary-container shadow-[0_8px_32px_rgba(16,185,129,0.3)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-container" style={{ fontSize: '96px', fontVariationSettings: "'FILL' 1" }}>
                        eco
                    </span>
                </div>
                
                <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
                    AkaraSirkula
                </h1>
                <p className="font-body-lg text-body-lg text-n600-secondary-text mt-2 text-center max-w-[280px]">
                    Langkah Kecil, Dampak Sirkular.
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
