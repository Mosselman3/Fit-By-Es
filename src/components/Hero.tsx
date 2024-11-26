import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white relative">
      <div className="container mx-auto px-4">
        <div className="min-h-[800px] relative flex flex-col lg:block">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 pt-24 lg:pt-40 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Life with Personal Training
            </h1>
            <p className="text-xl opacity-90">
              Expert guidance and personalized programs to help you achieve your fitness goals.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-1 w-20 bg-white/80 rounded"></div>
              <span className="text-lg font-medium">Professional Training by Estrella Wierikx</span>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="w-full lg:w-[45%] lg:absolute lg:bottom-0 lg:right-8 mt-12 lg:mt-0">
            <div className="w-full max-w-lg mx-auto lg:ml-auto">
              <img
                src="/images/trainer-profile.png"
                alt="Estrella Wierikx - Personal Trainer"
                className="w-full h-auto object-contain transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;