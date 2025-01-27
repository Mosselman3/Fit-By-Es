import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ProgramFeatures, { buildMuscleFeatures } from '../components/ProgramFeatures';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FadeInSection from '../components/FadeInSection';
import { contactSectionId } from '../components/Contact';

const BuildMuscle = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const contactSection = document.getElementById(contactSectionId);
    
    if (contactSection) {
      const offset = 0;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <FadeInSection>
          <section className="relative pt-20 pb-8 lg:pt-32 lg:pb-16 bg-primary text-dark">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Build Muscle Programs
                </h1>
                <p className="text-xl mb-4 md:mb-8">
                  Build strength and muscle with expert guidance, proper technique, and progressive training plans.
                </p>
                <div className="flex justify-center mt-6 md:mt-8">
                  <button
                    onClick={scrollToContact}
                    className="bg-[#5C6AC4] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center group shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.25)] transform hover:scale-95 active:scale-90"
                  >
                    Start Building
                    <span className="ml-2 md:ml-3 text-xl group-hover:-translate-x-1.5 translate-x-1.5 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="bg-white">
            <div className="max-w-[1920px] mx-auto lg:px-8 lg:py-16">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] lg:rounded-2xl overflow-hidden">
                  <img
                    src="/images/build-muscle-photo.jpg"
                    alt="Build Muscle Training"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold">
                      Your Journey to Building Strength
                    </h2>
                    <div className="mt-4 space-y-6">
                      <p className="text-lg text-gray-600">
                        Our <span className="italic">Build Muscle</span> program is designed to help you increase muscle mass, strength, and overall fitness. We understand that muscle building is a process that takes time and dedication, which is why we focus on progressive training and nutrition to get you the results you desire.
                      </p>
                      <p className="text-lg text-gray-600">
                        With our <span className="font-semibold">online one-on-one coaching & motivation</span>, you'll get personalized guidance and support to help you achieve your muscle-building goals. Our program offers:
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
                    {[
                      <span key="1">A <span className="font-semibold">customized muscle-building plan</span> tailored to your goals and fitness level</span>,
                      <span key="2"><span className="font-semibold">Nutritional support</span>, including guidance on <span className="font-semibold">macros</span>, protein intake, and meal planning for muscle growth</span>,
                      <span key="3"><span className="font-semibold">Regular check-ins</span> to track your progress and make necessary adjustments</span>,
                      <span key="4"><span className="font-semibold">Ongoing communication</span> to keep you motivated and on track</span>,
                      <span key="5"><span className="font-semibold">Flexible scheduling</span> to fit your lifestyle and training preferences</span>
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-lg text-gray-600 pt-4">
                    Start your muscle-building journey today—I'm here to help you gain strength, confidence, and achieve your physique goals!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <ProgramFeatures {...buildMuscleFeatures} />
        </FadeInSection>
        
        <FadeInSection>
          <FAQ />
        </FadeInSection>
        
        <FadeInSection>
          <Contact 
            prefilledAnswer="build-muscle"
            startFromQuestion={2}
          />
        </FadeInSection>
        
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default BuildMuscle;
