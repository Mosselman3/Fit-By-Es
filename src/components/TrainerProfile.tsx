import React from 'react';

const TrainerProfile = () => {
  return (
    <section id="trainer" className="py-16 bg-gray-100 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-10">Meet Your Trainer</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="/images/trainer-profile.png"
              alt="Trainer Profile"
              width="426"
              height="640"
              className="w-full max-w-md mx-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6">Why Choose Me as Your Trainer?</h3>
            
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                As a former competitive swimmer, I know what it's like to live and breathe sports—until life throws you a curveball. A sudden injury turned my world upside down, forcing me to rebuild my career and rediscover my passion for fitness. That journey taught me how it feels to lose your way in sport, no matter the circumstances.
              </p>
              
              <p className="leading-relaxed">
                This is why I'm passionate about helping others. I understand the challenges, whether you're trying to get back into fitness, preparing for a race, or simply finding the right balance between exercise and everyday life. My goal is to help you build confidence, rediscover the joy of movement, and create a sustainable plan that works for you.
              </p>
              
              <p className="leading-relaxed">
                Together, we'll work step by step to achieve your goals with a personalized approach tailored to your unique needs. But most importantly, we'll focus on helping you feel strong, empowered, and excited about your fitness journey again.
              </p>
              
              <p className="text-lg font-medium text-primary">
                Let's find your balance and make your goals a reality!
              </p>
            </div>

            <div className="mt-8">
              <a href="#contact" className="cta-button cta-button-secondary inline-block">
                Train with Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;