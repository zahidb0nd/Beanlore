import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Ananya S.",
            initials: "AS",
            text: "It’s a perfect spot to relax with a good book while enjoying great coffee. The vibe is unmatched in Jayanagar.",
            stars: 5,
            date: "2 weeks ago"
        },
        {
            name: "Rahul K.",
            initials: "RK",
            text: "The Liquid Tiramisu is to die for! Creamy, rich, and just perfect. Love the outdoor seating area.",
            stars: 5,
            date: "1 month ago"
        },
        {
            name: "Meera P.",
            initials: "MP",
            text: "Peaceful vibe. Great place to work or catch up with friends. The staff is very polite and the service is quick.",
            stars: 5,
            date: "3 weeks ago"
        }
    ];

    return (
        <section className="py-16 bg-beige/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-text mb-2">What People Say</h3>
                    <div className="flex justify-center items-center gap-1 text-yellow-500 text-lg">
                        <span className="font-bold">4.8</span>
                        <span>★★★★★</span>
                        <span className="text-text-light text-sm ml-2">(from 132+ Google reviews)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-md">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm ${index % 2 === 0 ? 'bg-coffee' : 'bg-latte'}`}>
                                    {review.initials}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-text">{review.name}</h4>
                                    <p className="text-[10px] text-text-light">Local Guide • 12 reviews</p>
                                </div>
                                <div className="ml-auto text-xs text-gray-400">{review.date}</div>
                            </div>

                            {/* Stars */}
                            <div className="flex text-yellow-400 text-sm mb-3">
                                {'★'.repeat(review.stars)}
                            </div>

                            {/* Text */}
                            <p className="text-text text-sm leading-relaxed">"{review.text}"</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-coffee font-medium text-sm hover:underline">
                        Read all 132 reviews on Google Maps →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
