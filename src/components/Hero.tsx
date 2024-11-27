import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white relative">
      <div className="container mx-auto px-4">
        <div className="min-h-[800px] relative flex flex-col lg:block">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-8 pt-24 lg:pt-40 relative z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Transform Your Life with Personal Training
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl opacity-90"
            >
              Expert guidance and personalized programs to help you achieve your fitness goals.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="h-1 w-20 bg-white/80 rounded"></div>
              <span className="text-lg font-medium">Professional Training by Estrella Wierikx</span>
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
                src="/images/trainer-profile.png"
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