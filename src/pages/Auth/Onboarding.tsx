import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const onboardingData = [
    {
        id: 1,
        title: "Pilah & Setor Limbah",
        description: "Ubah sampah anorganikmu menjadi nilai. Mulai dari botol plastik, kertas, hingga elektronik.",
        image: "https://picsum.photos/seed/2/400/400", // Just a placeholder, we can adjust if needed
        icon: "recycling",
        color: "bg-primary-container text-on-primary-container"
    },
    {
        id: 2,
        title: "Kumpulkan Akara Points",
        description: "Setiap gram sampah yang disetor akan dikonversi menjadi Akara Points. Kumpulkan dan nikmati keuntungannya.",
        image: "https://picsum.photos/seed/3/400/400", 
        icon: "generating_tokens",
        color: "bg-tertiary-container text-on-tertiary-container"
    },
    {
        id: 3,
        title: "Dukung Bisnis Berkelanjutan",
        description: "Tukarkan poin Anda dengan produk upcycle unik atau belanja kebutuhan harian dari mitra UMKM kami.",
        image: "https://picsum.photos/seed/4/400/400", 
        icon: "storefront",
        color: "bg-secondary-container text-on-secondary-container"
    }
];

const Onboarding: React.FC = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < onboardingData.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            navigate('/login');
        }
    };

    const handleSkip = () => {
        navigate('/login');
    };

    const currentData = onboardingData[currentStep];

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-hidden">
            {/* Top section: Skip Button & Image area */}
            <div className="relative h-[55vh] w-full bg-surface-container flex flex-col pt-lg">
                <div className="flex justify-end px-lg z-10 relative">
                    <button 
                        onClick={handleSkip}
                        className="font-label-button text-label-button text-n600-secondary-text hover:text-on-surface px-4 py-2"
                    >
                        Lewati
                    </button>
                </div>
                
                <div className="flex-1 flex items-center justify-center relative px-xl pb-lg">
                    {/* Floating elements background effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className={`w-64 h-64 rounded-full blur-3xl ${currentData.color.split(' ')[0]}`}></div>
                    </div>
                    
                    {/* Main illustration/icon placeholder since actual images might be broken links or need standardizing */}
                    <div className="relative z-10 w-full max-w-[280px] aspect-square rounded-full bg-surface/80 backdrop-blur-sm border-[4px] border-surface shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex items-center justify-center">
                        <span className={`material-symbols-outlined ${currentData.color.split(' ')[1]}`} style={{ fontSize: '180px', fontVariationSettings: "'FILL' 1" }}>
                            {currentData.icon}
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom section: Content & Controls */}
            <div className="flex-1 bg-surface rounded-t-[32px] -mt-6 z-20 shadow-[0_-8px_24px_rgba(0,0,0,0.04)] px-xl pt-[40px] pb-xl flex flex-col">
                
                {/* Content */}
                <div className="text-center flex-1 flex flex-col">
                    <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">
                        {currentData.title}
                    </h2>
                    <p className="font-body-lg text-body-lg text-n600-secondary-text max-w-[300px] mx-auto">
                        {currentData.description}
                    </p>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-sm my-xl">
                    {onboardingData.map((_, index) => (
                        <div 
                            key={index} 
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentStep ? 'w-8 bg-primary' : 'w-2 bg-surface-variant'
                            }`}
                        />
                    ))}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center w-full gap-lg">
                    <button 
                        onClick={handleSkip}
                        className={`font-label-button text-label-button py-3 px-6 rounded-full transition-colors ${
                            currentStep === onboardingData.length - 1 ? 'invisible' : 'text-on-surface-variant hover:bg-surface-container-low'
                        }`}
                    >
                        Lewati
                    </button>
                    
                    <button 
                        onClick={handleNext}
                        className="bg-primary text-on-primary py-3 px-8 rounded-full font-label-button text-label-button shadow-md flex items-center gap-xs hover:bg-[#005c3d] transition-colors active:scale-95 ml-auto"
                    >
                        {currentStep === onboardingData.length - 1 ? 'Mulai Sekarang' : 'Lanjut'}
                        {currentStep !== onboardingData.length - 1 && (
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        )}
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Onboarding;
