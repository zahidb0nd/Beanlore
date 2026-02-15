import React from 'react';

const VibeCheck = () => {
    return (
        <section className="py-12 px-4 max-w-6xl mx-auto my-12">
            <div className="mb-8 px-2">
                <h3 className="text-2xl font-bold text-text mb-2">Vibe Check</h3>
                <p className="text-text-light text-sm">Experience the calm in the chaos</p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px]">

                {/* 1. Large Vibe Image (Top Left) */}
                <div className="md:col-span-2 md:row-span-3 rounded-3xl overflow-hidden shadow-lg relative group h-64 md:h-auto">
                    <img
                        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
                        alt="Cafe Interior Vibe"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </div>

                {/* 2. Outdoor Seating (Top Right - Converted to Image Card) */}
                <div className="md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden shadow-lg relative group h-48 md:h-auto">
                    <img
                        src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80"
                        alt="Outdoor Seating"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                        <h4 className="text-white font-bold text-xl">Outdoor Seating</h4>
                    </div>
                </div>

                {/* 3. Aesthetic (Text Card) */}
                <div className="bg-beige md:bg-white rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">📸</div>
                    <h4 className="font-semibold text-coffee">Aesthetic</h4>
                    <p className="text-xs text-text-light">Instagram-ready corners</p>
                </div>

                {/* 4. Cozy Spot (Text Card) */}
                <div className="bg-beige md:bg-white rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">📖</div>
                    <h4 className="font-semibold text-coffee">Cozy Spot</h4>
                    <p className="text-xs text-text-light">Perfect for reading</p>
                </div>

                {/* 5. Coffee Art Image */}
                <div className="rounded-3xl overflow-hidden shadow-lg relative group h-40 md:h-auto">
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80" alt="Latte Art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* 6. Slow Vibe (Text Card) */}
                <div className="bg-beige md:bg-white rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">☕</div>
                    <h4 className="font-semibold text-coffee">Slow Vibe</h4>
                    <p className="text-xs text-text-light">Relax & unwind</p>
                </div>

            </div>
        </section>
    );
};

export default VibeCheck;
