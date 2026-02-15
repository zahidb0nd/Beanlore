import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Cozy Coffee Shop Ambience"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-0">

                {/* Text Content */}
                <div className="text-white flex-1 animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium mb-6 shadow-lg">
                        ☕ Premium Coffee Roasters
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
                        Beanlore <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-latte to-white">Jayanagar</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg font-light leading-relaxed">
                        Your quiet corner in the chaos. Experience artisanal coffee and gourmet bites in a floating sanctuary.
                    </p>

                    {/* Ratings & Info Badge */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="flex items-center bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-xl" role="img" aria-label="Rating: 3.9 out of 5 stars">
                            <span className="text-yellow-400 mr-1.5 text-lg">★</span>
                            <span className="font-bold text-lg mr-1">3.9</span>
                            <span className="mx-2 text-white/40">|</span>
                            <span className="text-sm text-white/80">137 Google Reviews</span>
                        </div>
                        <div className="flex items-center bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-xl">
                            <span className="text-white/80 text-sm">₹400–600 / person</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:08047362636"
                            className="group bg-coffee hover:bg-coffee-dark text-white font-semibold py-4 px-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <span>Call Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-12 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </a>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold py-4 px-8 rounded-3xl shadow-lg hover:bg-white hover:text-coffee transition-all duration-300 transform hover:-translate-y-1 text-center"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>

                {/* Floating "Anti-Gravity" Visual Accent (Desktop only) */}
                <div className="hidden md:block w-80 lg:w-96 relative animate-float">
                    <div className="absolute inset-0 bg-coffee/20 blur-3xl rounded-full"></div>
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            alt="Latte Art"
                            className="w-full h-64 object-cover rounded-3xl shadow-inner"
                        />
                        <div className="p-4 text-center">
                            <p className="text-white/90 font-medium italic">"Best Latte in Block 5"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
