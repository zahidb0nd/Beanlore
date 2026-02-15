import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SignaturePicks from './components/SignaturePicks';
import VibeCheck from './components/VibeCheck';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="bg-beige text-text font-sans antialiased overflow-x-hidden pb-20 md:pb-0">
      <Hero />
      <About />
      <SignaturePicks />
      <VibeCheck />
      <Testimonials />
      <Location />
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
