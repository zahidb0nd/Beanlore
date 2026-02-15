import React from 'react';

const Location = () => {
    return (
        <section id="location" className="py-12 px-4 max-w-4xl mx-auto mb-20 md:mb-12">
            <div className="bg-white rounded-4xl overflow-hidden shadow-lg relative">
                <div className="flex flex-col md:flex-row">
                    {/* Contact Info */}
                    <div className="p-8 pb-4 md:w-1/2">
                        <h3 className="text-2xl font-bold text-text mb-6">Visit Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-xl" aria-hidden="true">📍</span>
                                <p className="text-text-light text-sm">
                                    <strong>Beanlore – Jayanagar</strong><br />
                                    123, 4th Block, Jayanagar,<br />
                                    Bengaluru, Karnataka 560041
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl" aria-hidden="true">🕒</span>
                                <p className="text-text-light text-sm">
                                    Open Daily: 8:00 AM – 11:00 PM
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl" aria-hidden="true">📞</span>
                                <a href="tel:+919876543210" className="text-coffee font-medium text-sm hover:underline">+91 98765 43210</a>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-3">
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-semibold py-3 px-6 rounded-xl text-center hover:bg-green-600 transition-colors flex justify-center items-center gap-2">
                                <span aria-hidden="true">💬</span> WhatsApp Us
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full h-64 md:w-1/2 md:h-auto bg-gray-200 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.257697412763!2d77.57018335!3d12.9254533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        >
                        </iframe>

                        {/* Mobile Overlay Button */}
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
                            <span className="bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg">Open in Google Maps</span>
                        </a>
                        {/* Desktop Overlay Button - Always visible on hover? User said "Map UX: Ensure the map section has a 'Open in Google Maps' button overlay for mobile users." 
                        I'll add it for mobile primarily as requested.
                     */}
                        <div className="absolute bottom-4 right-4 pointer-events-none md:hidden">
                            <span className="bg-white/90 backdrop-blur text-xs px-2 py-1 rounded shadow">Tap to open</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Location;
