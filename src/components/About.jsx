import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 px-6 max-w-4xl mx-auto text-center animate-fade-in-up delay-100" aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-coffee font-medium text-sm tracking-widest uppercase mb-3">The Beanlore Story</h2>
            <p className="text-2xl md:text-3xl font-serif text-text mb-6 leading-snug">
                A sanctuary for slow conversations and artisanal brews.
            </p>
            <p className="text-text-light leading-relaxed mb-8">
                Nestled in the heart of Jayanagar, Beanlore offers a relaxing atmosphere surrounded by lush greenery. Whether you're here for our handcrafted desserts, a quiet reading spot, or just to unwind, we promise a warm, premium experience that feels like a hug in a mug.
            </p>
            <div className="w-16 h-1 bg-latte mx-auto rounded-full" aria-hidden="true"></div>
        </section>
    );
};

export default About;
