import React from 'react';

const SignaturePicks = () => {
    const handleImageError = (e) => {
        e.target.src = '/images/placeholder-cafe.jpg'; // Fallback to local JPG
        e.target.onerror = null; // Prevent infinite loop if fallback fails
    };

    const items = [
        {
            title: "Hazelnut Coffee",
            desc: "Rich espresso infused with roasted hazelnut notes, topped with velvety foam.",
            // Reliable Hazelnut Coffee image
            img: "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Liquid Tiramisu",
            desc: "Our signature dessert drink. Creamy mascarpone meets bold espresso.",
            // Reliable Tiramisu image
            img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            badge: "Must Try"
        },
        {
            title: "Gourmet Sandwiches",
            desc: "Freshly baked artisan bread filled with premium ingredients and house sauces.",
            // Swapped to Pexels image provided by user
            img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            title: "Fresh Bakes",
            desc: "Daily selection of croissants, muffins, and pastries baked to perfection.",
            // Reliable Pastries image
            img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="menu" className="py-20 px-4 max-w-6xl mx-auto" aria-labelledby="menu-heading">
            <div className="flex justify-between items-end mb-12 px-2">
                <div>
                    <h3 id="menu-heading" className="text-3xl font-bold text-coffee">Signature Picks</h3>
                    <p className="text-text-light mt-2 text-lg">Loved by Jayanagar locals</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {items.map((item, index) => (
                    <article
                        key={index}
                        className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-white/50"
                    >
                        <div className="h-52 w-full overflow-hidden bg-gray-100 relative">
                            {/* Added bg-gray-100 as immediate loading state background */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                                onError={handleImageError}
                            />
                            {/* Gradient Overlay on image for text contrast if needed */}
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6 relative">
                            <div className="flex justify-between items-start mb-2 gap-2">
                                <h4 className="font-bold text-lg text-text leading-tight group-hover:text-coffee transition-colors">{item.title}</h4>
                                {item.badge && (
                                    <span className="text-[10px] font-bold text-white bg-coffee px-2 py-1 rounded-full shadow-md whitespace-nowrap">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <p className="text-text-light text-sm line-clamp-3 leading-relaxed">{item.desc}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="flex justify-center">
                <a href="#" className="bg-coffee hover:bg-coffee-dark text-white font-semibold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    View Full Menu
                </a>
            </div>
        </section>
    );
};

export default SignaturePicks;