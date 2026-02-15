import React from 'react';

const MobileNav = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 p-4 pb-6 md:hidden z-50 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]" aria-label="Mobile quick actions">
            <div className="flex justify-between items-center gap-4 max-w-md mx-auto">
                <a href="tel:+919876543210" className="flex flex-col items-center text-text-light hover:text-coffee active:scale-95 transition-transform" aria-label="Call Beanlore">
                    <span className="text-xl mb-1" aria-hidden="true">📞</span>
                    <span className="text-[10px] font-medium uppercase tracking-wide">Call</span>
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-text-light hover:text-coffee active:scale-95 transition-transform" aria-label="Get directions to Beanlore">
                    <span className="text-xl mb-1" aria-hidden="true">🧭</span>
                    <span className="text-[10px] font-medium uppercase tracking-wide">Directions</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-text-light hover:text-coffee active:scale-95 transition-transform" aria-label="Contact us on WhatsApp">
                    <span className="text-xl mb-1" aria-hidden="true">💬</span>
                    <span className="text-[10px] font-medium uppercase tracking-wide">WhatsApp</span>
                </a>
                <a href="#location" className="bg-coffee text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform" aria-label="Reserve a table">
                    Reserve
                </a>
            </div>
        </nav>
    );
};

export default MobileNav;
