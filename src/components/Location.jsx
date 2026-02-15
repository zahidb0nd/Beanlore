import React from 'react';

const Location = () => {
    return (
        <section id="location" className="relative py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">

            {/* Map Container */}
            <div className="w-full md:w-1/2 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 relative group">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.257697412763!2d77.57018335!3d12.9254533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    title="Beanlore Location Map"
                >
                </iframe>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
                    <span className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-transform">Open in Google Maps</span>
                </a>
            </div>

            {/* Info Card - Floating Anti-Gravity Style */}
            <div className="w-full md:w-1/2">
                <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:ml-[-50px] relative z-10 transform hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-coffee mb-6">Find Your Corner</h3>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 group">
                            <span className="text-2xl pt-1 group-hover:scale-110 transition-transform block">📍</span>
                            <div>
                                <p className="text-text font-medium leading-relaxed">
                                    #84 & 85, 5th Main Road, 5th Block,<br />
                                    Jayanagar, Bengaluru,<br />
                                    Karnataka 560041
                                </p>
                                <p className="text-sm text-text-light mt-1 italic">
                                    Near KLM Fashion Mall car parking, 5th Block
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <span className="text-2xl group-hover:scale-110 transition-transform block">📞</span>
                            <a href="tel:08047362636" className="text-text font-medium hover:text-coffee transition-colors">
                                080 4736 2636
                            </a>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <span className="text-2xl pt-1 group-hover:scale-110 transition-transform block">🕒</span>
                            <div>
                                <p className="text-text font-medium">8 AM – 10 PM</p>
                                <p className="text-sm text-text-light">Open Daily</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <span className="text-2xl group-hover:scale-110 transition-transform block">📸</span>
                            <a href="https://instagram.com/beanloreindia" target="_blank" rel="noopener noreferrer" className="text-text font-medium hover:text-coffee transition-colors">
                                @beanloreindia
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-sm text-text-light text-center md:text-left">
                            Reservations available via <a href="https://swiggy.com" target="_blank" rel="noreferrer" className="text-coffee font-semibold hover:underline">Swiggy</a>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Location;
