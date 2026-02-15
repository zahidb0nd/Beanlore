import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-coffee text-white py-12 mt-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Column */}
                    <div className="md:col-span-2">
                        <h4 className="text-xl font-bold mb-3">Beanlore Cafe</h4>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            Your cozy escape in Jayanagar. Where artisanal coffee meets calm atmosphere,
                            surrounded by lush greenery and warm hospitality.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/beanlore" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Follow us on Instagram">
                                <span className="text-lg" aria-hidden="true">📷</span>
                            </a>
                            <a href="https://facebook.com/beanlore" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Follow us on Facebook">
                                <span className="text-lg" aria-hidden="true">👥</span>
                            </a>
                            <a href="mailto:hello@beanlore.com"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Email us">
                                <span className="text-lg" aria-hidden="true">✉️</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h5 className="font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h5>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                            <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
                            <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h5 className="font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h5>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                                    <span aria-hidden="true">📞</span> +91 98765 43210
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@beanlore.com" className="hover:text-white transition-colors">
                                    <span aria-hidden="true">✉️</span> hello@beanlore.com
                                </a>
                            </li>
                            <li className="pt-2">
                                <span className="block text-xs">Open Daily</span>
                                <span className="block">8:00 AM - 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>&copy; {year} Beanlore Cafe. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-white/80 transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white/80 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
