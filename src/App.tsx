import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrainerProfile from './components/TrainerProfile';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ScrollAnimation from './components/ScrollAnimation';
import Approach from './components/Approach';
import GetFit from './pages/GetFit';
import SportsCoaching from './pages/SportsCoaching';
import WeightLoss from './pages/WeightLoss';
import BuildMuscle from './pages/BuildMuscle';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ScrollAnimation>
          <Services />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <TrainerProfile />
        </ScrollAnimation>
        <ScrollAnimation>
          <Approach />
        </ScrollAnimation>
        <ScrollAnimation>
          <FAQ />
        </ScrollAnimation>
        <ScrollAnimation delay={0.5}>
          <Contact />
        </ScrollAnimation>
      </main>
      <ScrollAnimation delay={0.6}>
        <Testimonials />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/get-fit" element={<GetFit />} />
        <Route path="/services/sports-coaching" element={<SportsCoaching />} />
        <Route path="/services/weight-loss" element={<WeightLoss />} />
        <Route path="/services/build-muscle" element={<BuildMuscle />} />
      </Routes>
    </Router>
  );
}

export default App;