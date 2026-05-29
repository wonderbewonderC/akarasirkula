import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductUMKM: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="w-full max-w-[430px] mx-auto min-h-screen pb-xxl bg-background">
            {/* TopAppBar */}
            <header className="w-full top-0 sticky bg-surface dark:bg-surface-dim z-40 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between px-lg h-nav-height w-full max-w-[430px] mx-auto">
                    <button 
                        onClick={() => navigate(-1)}
                        aria-label="Go back" 
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors scale-95 active:scale-90"
                    >
                        <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
                    </button>
                    <h1 className="font-heading-2 text-[18px] font-bold text-primary dark:text-primary-fixed-dim text-center flex-1 pr-10">Add Product</h1>
                </div>
            </header>

            <div className="px-lg mt-lg">
                <form className="space-y-xl">
                    {/* Photo Upload Area */}
                    <section className="space-y-sm">
                        <label className="font-body-lg text-[16px] font-bold text-on-surface">Product Photos</label>
                        <p className="font-caption text-[12px] text-n600-secondary-text mb-md">Upload 1 to 5 high-quality photos. First photo will be the cover.</p>
                        <div className="flex gap-md overflow-x-auto hide-scrollbar pb-sm -mx-lg px-lg">
                            {/* Add Button / Slot 1 */}
                            <button className="min-w-[100px] w-[100px] h-[100px] flex flex-col items-center justify-center bg-surface-container-low border border-dashed border-primary rounded-lg text-primary hover:bg-surface-container transition-colors shrink-0" type="button">
                                <span className="material-symbols-outlined mb-xs">add_a_photo</span>
                                <span className="font-caption text-[12px]">Add Photo</span>
                            </button>
                            {/* Empty Slots for visual guide */}
                            <div className="min-w-[100px] w-[100px] h-[100px] rounded-lg bg-n100-surface border border-n300-border shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-n400-inactive">image</span>
                            </div>
                            <div className="min-w-[100px] w-[100px] h-[100px] rounded-lg bg-n100-surface border border-n300-border shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-n400-inactive">image</span>
                            </div>
                            <div className="min-w-[100px] w-[100px] h-[100px] rounded-lg bg-n100-surface border border-n300-border shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-n400-inactive">image</span>
                            </div>
                            <div className="min-w-[100px] w-[100px] h-[100px] rounded-lg bg-n100-surface border border-n300-border shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-n400-inactive">image</span>
                            </div>
                        </div>
                    </section>

                    {/* Basic Info */}
                    <section className="space-y-md">
                        <div>
                            <label className="block font-body-lg text-[16px] font-bold text-on-surface mb-xs" htmlFor="product_name">Product Name</label>
                            <input 
                                className="w-full bg-surface-container-lowest border border-n300-border rounded-lg px-md py-[10px] font-body-regular text-[14px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-n400-inactive" 
                                id="product_name" 
                                placeholder="e.g. Recycled Tote Bag" 
                                type="text"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-md">
                            <div>
                                <label className="block font-body-lg text-[16px] font-bold text-on-surface mb-xs" htmlFor="price">Price (Points)</label>
                                <div className="relative">
                                    <span className="absolute left-md top-1/2 -translate-y-1/2 material-symbols-outlined text-n400-inactive text-[20px]">stars</span>
                                    <input 
                                        className="w-full bg-surface-container-lowest border border-n300-border rounded-lg pl-[40px] pr-md py-[10px] font-body-regular text-[14px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-n400-inactive" 
                                        id="price" 
                                        placeholder="0" 
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block font-body-lg text-[16px] font-bold text-on-surface mb-xs" htmlFor="stock">Stock</label>
                                <input 
                                    className="w-full bg-surface-container-lowest border border-n300-border rounded-lg px-md py-[10px] font-body-regular text-[14px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-n400-inactive" 
                                    id="stock" 
                                    placeholder="0" 
                                    type="number"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block font-body-lg text-[16px] font-bold text-on-surface mb-xs" htmlFor="description">Description</label>
                            <textarea 
                                className="w-full bg-surface-container-lowest border border-n300-border rounded-lg px-md py-[10px] font-body-regular text-[14px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-n400-inactive resize-none" 
                                id="description" 
                                placeholder="Describe your product, materials used, and dimensions..." 
                                rows={4}
                            ></textarea>
                        </div>
                    </section>

                    {/* Material Usage */}
                    <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-surface-container">
                        <h3 className="font-heading-2 text-[18px] font-bold text-on-surface flex items-center gap-sm mb-md">
                            <span className="material-symbols-outlined text-primary">recycling</span>
                            Raw Material Usage
                        </h3>
                        <div className="space-y-md">
                            <div>
                                <label className="block font-body-regular text-[14px] text-on-surface-variant mb-xs" htmlFor="bahan_baku">Select Material Source</label>
                                <div className="relative">
                                    <select 
                                        className="w-full appearance-none bg-surface border border-n300-border rounded-lg px-md py-[10px] pr-10 font-body-regular text-[14px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                        id="bahan_baku"
                                        defaultValue=""
                                    >
                                        <option disabled value="">Choose material...</option>
                                        <option value="pet">Plastic PET (5kg available)</option>
                                        <option value="hdpe">Plastic HDPE (2.5kg available)</option>
                                        <option value="paper">Cardboard (10kg available)</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-n600-secondary-text">arrow_drop_down</span>
                                </div>
                            </div>
                            <div>
                                <label className="block font-body-regular text-[14px] text-on-surface-variant mb-xs" htmlFor="jumlah_digunakan">Amount Used per Item</label>
                                <div className="flex gap-sm items-center">
                                    <input 
                                        className="flex-1 bg-surface border border-n300-border rounded-lg px-md py-[10px] font-body-regular text-[14px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-n400-inactive" 
                                        id="jumlah_digunakan" 
                                        placeholder="0.0" 
                                        step="0.1" 
                                        type="number"
                                    />
                                    <span className="font-body-regular text-[14px] text-n600-secondary-text w-12">kg</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Submit Button Area */}
                    <div className="pt-lg pb-xl">
                        <button 
                            onClick={() => {
                                alert('Produk berhasil disubmit untuk review!');
                                navigate(-1);
                            }}
                            className="w-full bg-primary-container text-white font-label-button text-[14px] font-bold py-[14px] rounded-lg shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:bg-[#059669] active:scale-[0.98] transition-all flex justify-center items-center gap-sm" 
                            type="button"
                        >
                            Submit untuk Review
                            <span className="material-symbols-outlined text-[18px]">send</span>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default AddProductUMKM;
