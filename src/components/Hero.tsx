import React from 'react';
import { motion } from 'framer-motion';
import { contactSectionId } from './Contact';

const Hero = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Get the contact section element
    const contactSection = document.getElementById(contactSectionId);
    
    if (contactSection) {
      // Calculate offset considering any fixed headers or other elements
      const offset = 0; // Adjust this value if you have a fixed header
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Smooth scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white relative">
      <div className="container mx-auto px-4">
        <div className="min-h-[800px] relative flex flex-col lg:block pt-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-8 pt-4 lg:pt-16 relative z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[2.9em] leading-[1.2] font-[GT-Walsheim-Framer-Medium] font-bold"
            >
              Ready to become the best version of yourself?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[1.2em] opacity-90"
            >
              Personal coaching to help you feel confident, get fit, and perform at your best.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="h-1 w-20 bg-white/80 rounded"></div>
              <span className="text-[1.2em] font-medium">Online Sports Coaching by Estrella Wierikx</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <button
                onClick={scrollToContact}
                className="mt-8 bg-[#5C6AC4] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center group shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.25)] transform hover:scale-95 active:scale-90"
              >
                Start Today
                <span className="ml-3 text-xl group-hover:-translate-x-1.5 translate-x-1.5 transition-transform duration-300">→</span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-full lg:w-[45%] lg:absolute lg:bottom-0 lg:right-8 mt-12 lg:mt-0"
          >
            <div className="w-full max-w-lg mx-auto lg:ml-auto">
              <img
                src="/images/hero-component-photo.png"
                alt="Estrella Wierikx - Personal Trainer"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;