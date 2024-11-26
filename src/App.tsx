import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrainerProfile from './components/TrainerProfile';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PricingCard from './components/PricingCard';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrainerProfile />
        <Services />
        <PricingCard />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;