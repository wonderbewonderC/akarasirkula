import React from 'react';
import BottomNavUMKM from '../Shared/BottomNavUMKM';

interface UMKMLayoutProps {
    children: React.ReactNode;
}

const UMKMLayout: React.FC<UMKMLayoutProps> = ({ children }) => {
    return (
        <div className="w-full max-w-[430px] mx-auto bg-surface relative shadow-2xl flex flex-col min-h-screen">
            <div className="flex-1 flex flex-col overflow-y-auto pb-[80px]">
                {children}
            </div>
            <BottomNavUMKM />
        </div>
    );
};

export default UMKMLayout;
