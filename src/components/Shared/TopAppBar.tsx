import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TopAppBarProps {
    title: string;
    showBack?: boolean;
    showMenu?: boolean;
    showSearch?: boolean;
    showNotifications?: boolean;
    customRight?: React.ReactNode;
}

const TopAppBar: React.FC<TopAppBarProps> = ({ 
    title, 
    showBack = false, 
    showMenu = false, 
    showSearch = false, 
    showNotifications = false,
    customRight
}) => {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur-md flex items-center justify-between px-lg py-md transition-all">
            <div className="flex items-center gap-sm flex-1">
                {showBack && (
                    <button 
                        onClick={() => navigate(-1)}
                        aria-label="Go back" 
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors active:scale-95 text-on-surface-variant"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                )}
                {showMenu && (
                    <button 
                        aria-label="Menu" 
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors active:scale-95 text-on-surface-variant"
                    >
                        <span className="material-symbols-outlined text-[24px]">menu</span>
                    </button>
                )}
                {!showBack && !showMenu && <div className="w-10 h-10" />} {/* Spacer to center title if needed */}
            </div>

            <h1 className="font-heading-2 text-heading-2 text-on-surface flex-1 text-center whitespace-nowrap truncate px-2">
                {title}
            </h1>

            <div className="flex items-center justify-end gap-sm flex-1">
                {showSearch && (
                    <button 
                        aria-label="Search" 
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant"
                    >
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    </button>
                )}
                {showNotifications && (
                    <button 
                        aria-label="Notifications" 
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant relative"
                    >
                        <span className="material-symbols-outlined text-[24px]">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-error-ruby rounded-full border border-surface"></span>
                    </button>
                )}
                {customRight}
                {!showSearch && !showNotifications && !customRight && <div className="w-10 h-10" />} {/* Spacer to center title if needed */}
            </div>
        </header>
    );
};

export default TopAppBar;
