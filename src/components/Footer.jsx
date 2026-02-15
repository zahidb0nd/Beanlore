import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-coffee-dark text-white/90 py-12 md:py-16 rounded-t-[3rem] mt-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Beanlore</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                        Your quiet corner in Jayanagar. <br /> Since 2024.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/beanloreindia" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors shadow-lg hover:-translate-y-1 transform duration-300"
                            aria-label="Follow us on Instagram">
                            <span className="text-lg" aria-hidden="true">📷</span>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Explore</h4>
                    <ul className="space-y-2 text-sm text-white/70">
                        <li><a href="#menu" className="hover:text-latte transition-colors">Full Menu</a></li>
                        <li><a href="#about" className="hover:text-latte transition-colors">Our Story</a></li>
                        <li><a href="#location" className="hover:text-latte transition-colors">Visit Us</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="font-semibold text-white mb-4">Visit Us</h4>
                    <address className="not-italic text-sm text-white/70 space-y-2">
                        <p>#84 & 85, 5th Main Road, 5th Block, Jayanagar</p>
                        <p>Bengaluru, Karnataka 560041</p>
                        <p className="pt-2"><a href="tel:08047362636" className="hover:text-latte transition-colors">080 4736 2636</a></p>
                        <p><a href="mailto:hello@beanlore.com" className="hover:text-latte transition-colors">hello@beanlore.com</a></p>
                    </address>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
                <p>&copy; {year} Beanlore Cafe. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
