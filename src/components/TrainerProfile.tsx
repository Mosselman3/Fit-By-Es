import React from 'react';

const TrainerProfile = () => {
  return (
    <section id="trainer" className="py-16 bg-gray-100 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-10">Meet Your Trainer</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/201614271@N03/54064866407/in/dateposted-public/" title="Photo Main Es">
              <img src="https://live.staticflickr.com/65535/54064866407_305c5936b6_z.jpg" width="426" height="640" alt="Photo Main Es" className="rounded-lg elevation-2 w-full max-w-md mx-auto"/>
            </a>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-medium mb-4">Estrella Wierikx</h3>
            <p className="mb-4">
              With over a decade of experience in professional sports and personal training and a robust background in competitive swimming, 
              Estrella is dedicated to empowering clients to reach their health and fitness goals. Her expertise in high-intensity workouts 
              and personalized training programs has enabled many to overcome fitness challenges, resulting in enhanced overall health and lifestyle.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Former Professional Swimmer</li>
              <li>Specialized in High-Intensity Interval Training (HIIT)</li>
              <li>Certified Nutrition and Wellness Coach</li>
            </ul>
            <a href="#contact" className="cta-button cta-button-secondary inline-block">
              Train with Estrella
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;