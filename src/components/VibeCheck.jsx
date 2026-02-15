import React from 'react';

const VibeCheck = () => {
    const handleImageError = (e) => {
        e.target.src = '/images/placeholder-cafe.jpg';
        e.target.onerror = null;
    };

    return (
        <section className="py-20 px-4 max-w-6xl mx-auto my-12">
            <div className="mb-10 px-2">
                <h3 className="text-3xl font-bold text-coffee mb-2">Vibe Check</h3>
                <p className="text-text-light text-lg">Experience the calm in the chaos</p>
            </div>

            {/* Bento Grid - Anti-Gravity Style */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[650px]">

                {/* 1. Large Vibe Image (Top Left) */}
                <div className="md:col-span-2 md:row-span-3 rounded-[2.5rem] overflow-hidden shadow-2xl relative group h-80 md:h-auto transform hover:rotate-[-0.5deg] hover:scale-[1.01] transition-all duration-500 z-0 hover:z-10 border-4 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                        alt="Cafe Interior Vibe"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <p className="font-medium">✨ Warm Ambience</p>
                    </div>
                </div>

                {/* 2. Outdoor Seating (Top Right) */}
                <div className="md:col-span-2 md:row-span-1 rounded-[2rem] overflow-hidden shadow-xl relative group h-56 md:h-auto transform hover:rotate-[0.5deg] hover:-translate-y-1 transition-all duration-500 border-4 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1504194921103-f8396924c348?auto=format&fit=crop&w=600&q=80"
                        alt="Outdoor Seating"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        onError={handleImageError}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-6">
                        <h4 className="text-white font-bold text-2xl drop-shadow-lg">Outdoor Seating</h4>
                    </div>
                </div>

                {/* 3. Aesthetic (Text Card) */}
                <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-6 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                    <div className="text-4xl mb-3 animate-bounce shadow-sm rounded-full p-2 bg-beige">📸</div>
                    <h4 className="font-bold text-coffee text-lg">Aesthetic</h4>
                    <p className="text-sm text-text-light mt-1">Instagram-ready corners</p>
                </div>

                {/* 4. Cozy Spot (Text Card) */}
                <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-6 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                    <div className="text-4xl mb-3 animate-pulse shadow-sm rounded-full p-2 bg-beige">📖</div>
                    <h4 className="font-bold text-coffee text-lg">Cozy Spot</h4>
                    <p className="text-sm text-text-light mt-1">Perfect for reading</p>
                </div>

                {/* 5. Coffee Art Image */}
                <div className="rounded-[2rem] overflow-hidden shadow-xl relative group h-48 md:h-auto transform hover:rotate-[-1deg] transition-all duration-500 border-4 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80"
                        alt="Latte Art"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={handleImageError}
                    />
                </div>

                {/* 6. Slow Vibe (Text Card) */}
                <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-6 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                    <div className="text-4xl mb-3 animate-pulse shadow-sm rounded-full p-2 bg-beige">☕</div>
                    <h4 className="font-bold text-coffee text-lg">Slow Vibe</h4>
                    <p className="text-sm text-text-light mt-1">Relax & unwind</p>
                </div>

            </div>
        </section>
    );
};

export default VibeCheck;
