import React from 'react';

const Hero = () => {
    return (
        <header className="relative h-[85vh] w-full overflow-hidden rounded-b-4xl shadow-lg" role="banner">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Beanlore Cafe Interior"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" aria-hidden="true"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 pb-12 text-white max-w-4xl mx-auto">
                <div className="animate-fade-in-up">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                        Jayanagar, Bengaluru
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
                        Your Quiet Corner <br className="hidden md:block" />
                        in the Chaos of Jayanagar.
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-4 font-light">
                        Where Coffee Meets Calm.
                    </p>

                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <div className="flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30" role="img" aria-label="Rating: 4.8 out of 5 stars based on 132+ reviews">
                            <span className="text-yellow-400 mr-1" aria-hidden="true">★</span>
                            <span className="font-medium">4.8</span>
                            <span className="mx-1 opacity-60" aria-hidden="true">|</span>
                            <span className="opacity-90">132+ Local Reviews</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                            ₹400–600
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href="#location" className="flex-1 bg-coffee text-white font-semibold py-3.5 px-6 rounded-2xl text-center shadow-lg hover:bg-coffee-dark transition-colors duration-300" aria-label="Reserve a table at Beanlore">
                            Reserve a Table
                        </a>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex-1 bg-transparent border-2 border-white text-white font-semibold py-3.5 px-6 rounded-2xl text-center shadow-lg hover:bg-white hover:text-coffee transition-all duration-300" aria-label="Get directions to Beanlore on Google Maps">
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
