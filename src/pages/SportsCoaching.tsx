import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ProgramFeatures, { sportsCoachingFeatures } from '../components/ProgramFeatures';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FadeInSection from '../components/FadeInSection';
import { contactSectionId } from '../components/Contact';

const SportsCoaching = () => {
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
                  Sports Competition Coaching
                </h1>
                <p className="text-xl mb-4 md:mb-8">
                  Achieve your best performance in running or triathlon with expert coaching and personalized training plans designed to fit your goals.
                </p>
                <div className="flex justify-center mt-6 md:mt-8">
                  <button
                    onClick={scrollToContact}
                    className="bg-[#5C6AC4] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center group shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.25)] transform hover:scale-95 active:scale-90"
                  >
                    Start Training
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
                    src="/images/sports-coaching-photo.jpg"
                    alt="Sports Competition Training"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold">
                      Your Journey to Success in Sports Competitions
                    </h2>
                    <div className="mt-4 space-y-6">
                      <p className="text-lg text-gray-600">
                        Our <span className="font-semibold">Sport Competition Coaching</span> program is designed to help you reach your peak performance in running or triathlon. With a personalized approach, we'll adapt your training to meet your specific needs and goals, ensuring you're ready to tackle any challenge.
                      </p>
                      <p className="text-lg text-gray-600">
                        Whether you're training for your first race or aiming to improve your time, our program offers:
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
                    {[
                      <span key="1"><span className="font-semibold">Customized Training Plans</span> for running and triathlons, tailored to your goals and current fitness level</span>,
                      <span key="2"><span className="font-semibold">Nutritional Support</span> with easy-to-follow recipes and a weekly meal plan to fuel your training</span>,
                      <span key="3"><span className="font-semibold">Regular Check-ins</span> to track your progress and make adjustments to ensure you're on track to hit your goals</span>,
                      <span key="4"><span className="font-semibold">Ongoing Communication</span> to keep you motivated, provide feedback, and guide you through the highs and lows of training</span>,
                      "Flexible Scheduling to fit training into your lifestyle"
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-lg text-gray-600 pt-4">
                    Take the first step towards achieving your race-day goals — I'm here to guide and support you every step of the way!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <ProgramFeatures {...sportsCoachingFeatures} />
        </FadeInSection>
        
        <FadeInSection>
          <FAQ />
        </FadeInSection>
        
        <FadeInSection>
          <Contact 
            prefilledAnswer="competition"
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

export default SportsCoaching;
