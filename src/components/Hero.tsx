import React from 'react';
import { FitnessForm } from './FitnessForm/index';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
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

          <div className="lg:w-1/2 w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="mb-8">
                <h2 className="text-primary text-2xl font-bold">Start Your Journey Today</h2>
                <p className="text-gray-600 mt-2">Tell us about your fitness goals</p>
              </div>
              <FitnessForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;