import React from 'react';

const MobileNav = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 p-4 pb-6 md:hidden z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]" aria-label="Mobile quick actions">
            <div className="flex justify-between items-center gap-2 max-w-sm mx-auto">
                <a href="tel:08047362636" className="flex flex-col items-center gap-1 text-text-light hover:text-coffee transition-colors w-16">
                    <span className="text-xl">📞</span>
                    <span className="text-[10px] font-medium">Call</span>
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 text-text-light hover:text-coffee transition-colors w-16">
                    <span className="text-xl">📍</span>
                    <span className="text-[10px] font-medium">Map</span>
                </a>
                <a href="https://wa.me/918047362636" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 text-text-light hover:text-coffee transition-colors w-16">
                    <span className="text-xl">💬</span>
                    <span className="text-[10px] font-medium">Chat</span>
                </a>
                <a href="#location" className="bg-coffee text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform flex items-center gap-2">
                    <span>Reserve</span>
                </a>
            </div>
        </nav>
    );
};

export default MobileNav;
