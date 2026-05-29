import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetorJadwal: React.FC = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('13');
    const [selectedTime, setSelectedTime] = useState('pagi');

    const dates = [
        { day: 'Sen', date: '12' },
        { day: 'Sel', date: '13' },
        { day: 'Rab', date: '14' },
        { day: 'Kam', date: '15' },
        { day: 'Jum', date: '16' },
        { day: 'Sab', date: '17' }
    ];

    return (
        <main className="flex-1 flex flex-col bg-surface relative overflow-hidden h-screen">
            
            {/* Background Overlay (to simulate bottom sheet effect) */}
            <div className="absolute inset-0 bg-[#94a3b8]/50 z-10"></div>

            {/* Bottom Sheet */}
            <div className="bg-white rounded-t-[32px] z-20 absolute bottom-0 left-0 right-0 max-w-[430px] mx-auto pb-4 shadow-[0_-8px_24px_rgba(0,0,0,0.1)] h-[85vh] flex flex-col">
                
                {/* Drag Handle & Header */}
                <div className="flex flex-col px-lg pt-3 pb-2 shrink-0">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-1.5 rounded-full bg-[#cbd5e1]"></div>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-heading-1 text-[20px] text-[#0f172a] font-bold">Jadwal Penjemputan</h2>
                        <button onClick={() => navigate(-1)} className="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#475569] hover:bg-[#e2e8f0]">
                            <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="flex justify-center items-center gap-2 py-4">
                        <div className="w-3 h-3 rounded-full bg-[#047857]"></div>
                        <div className="w-8 h-[2px] bg-[#047857]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#047857]"></div>
                        <div className="w-8 h-[2px] bg-[#047857]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#047857]"></div>
                        <div className="w-8 h-[2px] bg-[#e2e8f0]"></div>
                        <div className="w-3 h-3 rounded-full border-2 border-[#cbd5e1] bg-white"></div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-lg pb-24 hide-scrollbar">
                    
                    {/* Alamat Penjemputan */}
                    <div className="mb-6">
                        <h3 className="font-body-regular text-[14px] text-[#0f172a] mb-2">Alamat Penjemputan</h3>
                        <div className="flex items-center justify-between border border-[#e2e8f0] rounded-[12px] p-4 bg-white">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#94a3b8] text-[20px]">location_on</span>
                                <span className="font-body-regular text-[14px] text-[#334155]">Jl. Merdeka No.12, Bandung</span>
                            </div>
                            <span className="material-symbols-outlined text-[#047857] text-[20px]">edit</span>
                        </div>
                    </div>

                    {/* Pilih Tanggal */}
                    <div className="mb-6">
                        <div className="flex justify-between items-end mb-2">
                            <h3 className="font-body-regular text-[14px] text-[#0f172a]">Pilih Tanggal</h3>
                            <span className="font-body-regular text-[12px] text-[#94a3b8]">Bulan ini</span>
                        </div>
                        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
                            {dates.map((d) => (
                                <button 
                                    key={d.date}
                                    onClick={() => setSelectedDate(d.date)}
                                    className={`w-16 h-20 shrink-0 rounded-[12px] border flex flex-col items-center justify-center gap-1 transition-colors ${
                                        selectedDate === d.date 
                                        ? 'bg-[#047857] border-[#047857] text-white shadow-md' 
                                        : 'bg-white border-[#e2e8f0] text-[#475569] hover:border-[#047857]'
                                    }`}
                                >
                                    <span className="font-body-regular text-[12px]">{d.day}</span>
                                    <span className="font-heading-1 text-[20px] font-bold leading-none">{d.date}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Waktu Penjemputan */}
                    <div className="mb-4">
                        <h3 className="font-body-regular text-[14px] text-[#0f172a] mb-3">Waktu Penjemputan</h3>
                        <div className="flex flex-col gap-3">
                            
                            {/* Pagi */}
                            <button 
                                onClick={() => setSelectedTime('pagi')}
                                className={`flex items-center justify-between p-4 rounded-[12px] border transition-colors ${
                                    selectedTime === 'pagi' 
                                    ? 'bg-[#f0fdf4] border-[#047857]' 
                                    : 'bg-white border-[#e2e8f0]'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedTime === 'pagi' ? 'bg-[#bbf7d0] text-[#047857]' : 'bg-[#f1f5f9] text-[#94a3b8]'}`}>
                                        <span className="material-symbols-outlined">light_mode</span>
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-heading-2 text-[16px] font-bold ${selectedTime === 'pagi' ? 'text-[#0f172a]' : 'text-[#334155]'}`}>Pagi</h4>
                                        <p className="font-body-regular text-[12px] text-[#64748b]">07:00 - 10:00 WIB</p>
                                    </div>
                                </div>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${selectedTime === 'pagi' ? 'bg-[#047857] text-white' : 'border-2 border-[#cbd5e1]'}`}>
                                    {selectedTime === 'pagi' && <span className="material-symbols-outlined text-[16px]">check</span>}
                                </div>
                            </button>

                            {/* Siang */}
                            <button 
                                onClick={() => setSelectedTime('siang')}
                                className={`flex items-center justify-between p-4 rounded-[12px] border transition-colors ${
                                    selectedTime === 'siang' 
                                    ? 'bg-[#f0fdf4] border-[#047857]' 
                                    : 'bg-white border-[#e2e8f0]'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedTime === 'siang' ? 'bg-[#bbf7d0] text-[#047857]' : 'bg-[#e0e7ff] text-[#6366f1]'}`}>
                                        <span className="material-symbols-outlined">minimize</span>
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-heading-2 text-[16px] font-bold ${selectedTime === 'siang' ? 'text-[#0f172a]' : 'text-[#334155]'}`}>Siang</h4>
                                        <p className="font-body-regular text-[12px] text-[#64748b]">11:00 - 14:00 WIB</p>
                                    </div>
                                </div>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${selectedTime === 'siang' ? 'bg-[#047857] text-white' : 'border-2 border-[#cbd5e1]'}`}>
                                    {selectedTime === 'siang' && <span className="material-symbols-outlined text-[16px]">check</span>}
                                </div>
                            </button>

                            {/* Sore */}
                            <button 
                                onClick={() => setSelectedTime('sore')}
                                className={`flex items-center justify-between p-4 rounded-[12px] border transition-colors ${
                                    selectedTime === 'sore' 
                                    ? 'bg-[#f0fdf4] border-[#047857]' 
                                    : 'bg-white border-[#e2e8f0]'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedTime === 'sore' ? 'bg-[#bbf7d0] text-[#047857]' : 'bg-[#f1f5f9] text-[#475569]'}`}>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-heading-2 text-[16px] font-bold ${selectedTime === 'sore' ? 'text-[#0f172a]' : 'text-[#334155]'}`}>Sore</h4>
                                        <p className="font-body-regular text-[12px] text-[#64748b]">15:00 - 17:00 WIB</p>
                                    </div>
                                </div>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${selectedTime === 'sore' ? 'bg-[#047857] text-white' : 'border-2 border-[#cbd5e1]'}`}>
                                    {selectedTime === 'sore' && <span className="material-symbols-outlined text-[16px]">check</span>}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Button */}
            <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white p-lg z-30 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                <button 
                    onClick={() => navigate('/setor-konfirmasi')}
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full h-[56px] rounded-[12px] font-label-button text-[16px] flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-[0.98] ${selectedDate && selectedTime ? 'bg-[#047857] text-white hover:bg-[#065f46]' : 'bg-[#e2e8f0] text-[#94a3b8] cursor-not-allowed'}`}
                >
                    Lanjut Konfirmasi
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
            
        </main>
    );
};

export default SetorJadwal;
