import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrainerProfile from './components/TrainerProfile';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PricingCard from './components/PricingCard';
import Contact from './components/Contact';
import ScrollAnimation from './components/ScrollAnimation';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ScrollAnimation>
          <Services />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <TrainerProfile />
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <PricingCard />
        </ScrollAnimation>
        <ScrollAnimation delay={0.5}>
          <Testimonials />
        </ScrollAnimation>
        <ScrollAnimation delay={0.6}>
          <Contact />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}

export default App;