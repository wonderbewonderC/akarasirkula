import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterSuccess: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Automatically navigate to login or home after 3 seconds
        const timer = setTimeout(() => {
            navigate('/login');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <main className="flex-1 flex flex-col items-center justify-center bg-surface relative overflow-hidden min-h-screen">
            <div className="flex flex-col items-center z-10 animate-fade-in-up">
                {/* Big Green Circle (Success) */}
                <div className="w-32 h-32 mb-8 rounded-full bg-primary flex items-center justify-center shadow-[0_8px_32px_rgba(16,185,129,0.3)] animate-bounce">
                    <span className="material-symbols-outlined text-[64px] text-on-primary" style={{ fontVariationSettings: "'wght' 700" }}>
                        check
                    </span>
                </div>
                
                <h1 className="font-heading-1 text-heading-1 text-on-surface text-center mb-2">
                    Pendaftaran Berhasil!
                </h1>
                <p className="font-body-regular text-[14px] text-n600-secondary-text text-center max-w-[280px]">
                    Akun Anda telah dibuat. Mengarahkan Anda ke halaman masuk...
                </p>
            </div>
        </main>
    );
};

export default RegisterSuccess;
