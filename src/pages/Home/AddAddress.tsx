import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddAddress: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[430px] mx-auto bg-surface shadow-sm min-h-screen relative flex flex-col">
            {/* TopAppBar */}
            <header className="flex justify-between items-center px-lg w-full h-nav-height bg-surface shadow-sm sticky top-0 z-50">
                <button 
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-n100-surface transition-colors active:scale-95"
                >
                    <span className="material-symbols-outlined text-n600-secondary-text">arrow_back</span>
                </button>
                <h1 className="font-heading-2 text-[18px] text-on-surface text-center flex-1 pr-10 font-bold">Tambah Alamat Baru</h1>
            </header>

            {/* Main Content Canvas */}
            <main className="flex-1 overflow-y-auto hide-scrollbar pb-32">
                
                {/* Map Preview Section */}
                <div className="p-lg">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-n100-surface shadow-sm border border-n300-border mb-md group cursor-pointer">
                        {/* Map Placeholder Image */}
                        <img 
                            alt="Map Preview" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                            src="https://picsum.photos/seed/6/400/400"
                        />
                        {/* Center Pin */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="material-symbols-outlined text-[32px] text-error-ruby drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                        </div>
                        {/* Overlay Button */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <button className="bg-surface text-on-surface font-label-button text-[14px] px-4 py-2 rounded-lg shadow-sm border border-n300-border flex items-center gap-2 active:scale-95 transition-transform font-bold">
                                <span className="material-symbols-outlined text-[16px] text-primary">my_location</span>
                                Pilih di Peta
                            </button>
                        </div>
                    </div>
                    <p className="font-caption text-[12px] text-n600-secondary-text text-center">Pastikan pin lokasi sesuai dengan alamat Anda.</p>
                </div>

                {/* Form Fields Section */}
                <div className="px-lg pb-lg flex flex-col gap-lg">
                    
                    {/* Label Alamat */}
                    <div>
                        <label className="block font-body-lg text-[14px] font-bold text-on-surface mb-sm">Label Alamat</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-[20px] text-n400-inactive">home</span>
                            </div>
                            <input 
                                className="w-full pl-10 pr-3 py-3 rounded-lg border border-n300-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-regular text-[14px] bg-surface-container-lowest" 
                                placeholder="Misal: Rumah, Kantor, Kos" 
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Nama Penerima */}
                    <div>
                        <label className="block font-body-lg text-[14px] font-bold text-on-surface mb-sm">Nama Penerima</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-[20px] text-n400-inactive">person</span>
                            </div>
                            <input 
                                className="w-full pl-10 pr-3 py-3 rounded-lg border border-n300-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-regular text-[14px] bg-surface-container-lowest" 
                                placeholder="Nama lengkap penerima" 
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Nomor Telepon */}
                    <div>
                        <label className="block font-body-lg text-[14px] font-bold text-on-surface mb-sm">Nomor Telepon</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-[20px] text-n400-inactive">phone</span>
                            </div>
                            <input 
                                className="w-full pl-10 pr-3 py-3 rounded-lg border border-n300-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-regular text-[14px] bg-surface-container-lowest" 
                                placeholder="08xx xxxx xxxx" 
                                type="tel"
                            />
                        </div>
                    </div>

                    {/* Detail Alamat */}
                    <div>
                        <label className="block font-body-lg text-[14px] font-bold text-on-surface mb-sm">Detail Alamat</label>
                        <textarea 
                            className="w-full p-3 rounded-lg border border-n300-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-regular text-[14px] bg-surface-container-lowest resize-none" 
                            placeholder="Nama jalan, gedung, no. rumah/unit, RT/RW, kecamatan, kota" 
                            rows={3}
                        ></textarea>
                    </div>

                    {/* Catatan */}
                    <div>
                        <label className="block font-body-lg text-[14px] font-bold text-on-surface mb-sm">Catatan (Opsional)</label>
                        <div className="relative">
                            <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-[20px] text-n400-inactive">description</span>
                            </div>
                            <input 
                                className="w-full pl-10 pr-3 py-3 rounded-lg border border-n300-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-regular text-[14px] bg-surface-container-lowest" 
                                placeholder="Warna pagar, instruksi khusus kurir, dll" 
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Set as Default Checkbox */}
                    <div className="flex items-center mt-2 mb-md">
                        <input 
                            className="w-5 h-5 text-primary bg-surface-container-lowest border-n300-border rounded focus:ring-primary focus:ring-2" 
                            id="default-address" 
                            type="checkbox"
                        />
                        <label 
                            className="ml-3 font-body-regular text-[14px] text-n600-secondary-text cursor-pointer" 
                            htmlFor="default-address"
                        >
                            Jadikan sebagai alamat utama
                        </label>
                    </div>

                </div>
            </main>

            {/* Fixed Bottom CTA */}
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] p-lg bg-surface border-t border-n300-border z-50">
                <button 
                    onClick={() => navigate(-1)}
                    className="w-full bg-primary-container text-white font-label-button text-[16px] font-bold py-4 rounded-xl shadow-md hover:bg-[#059669] active:scale-[0.98] transition-all duration-200 flex justify-center items-center gap-2"
                >
                    Simpan Alamat
                </button>
            </div>
        </div>
    );
};

export default AddAddress;
