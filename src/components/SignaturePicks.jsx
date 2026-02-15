import React from 'react';

const SignaturePicks = () => {
    const handleImageError = (e) => {
        e.target.src = '/images/placeholder-cafe.svg'; // Fallback to local SVG
    };

    const items = [
        {
            title: "Hazelnut Coffee",
            desc: "Rich espresso infused with roasted hazelnut notes, topped with velvety foam.",
            // Used a highly reliable coffee image from Unsplash
            img: "https://images.unsplash.com/photo-1630906232230-222a7f0535c5?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Liquid Tiramisu",
            desc: "Our signature dessert drink. Creamy mascarpone meets bold espresso.",
            img: "https://images.unsplash.com/photo-1574885014162-dad280ec3ca9?auto=format&fit=crop&w=600&q=80",
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
            img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section id="menu" className="py-12 px-4 max-w-6xl mx-auto" aria-labelledby="menu-heading">
            <div className="flex justify-between items-end mb-8 px-2">
                <div>
                    <h3 id="menu-heading" className="text-2xl font-bold text-text">Signature Picks</h3>
                    <p className="text-text-light text-sm mt-1">Loved by Jayanagar locals</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {items.map((item, index) => (
                    <article key={index} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="h-48 w-full overflow-hidden bg-gray-100">
                            {/* Added bg-gray-100 as immediate loading state background */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                onError={handleImageError}
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                {item.badge && (
                                    <span className="text-xs font-bold text-coffee bg-coffee/10 px-2 py-1 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <p className="text-text-light text-sm line-clamp-2">{item.desc}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="flex justify-center">
                <a href="#" className="bg-coffee text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-coffee-dark transform hover:-translate-y-0.5 transition-all duration-300">
                    View Full Menu
                </a>
            </div>
        </section>
    );
};

export default SignaturePicks;
