import React from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ServiceHero({ title, subtitle, imageUrl, imageAlt }: ServiceHeroProps) {
  return (
    <>
      <div className="relative pt-16 pb-40 sm:pt-24 sm:pb-56 lg:pb-80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                {title}
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                {subtitle}
              </p>
            </div>
          </div>
          
          <div className="mt-12 relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
      <section className="hidden lg:block relative py-20 bg-primary text-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Get Fit & Improve Health Programs
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Transform your lifestyle with personalized fitness coaching that focuses on sustainable health improvements and achievable fitness goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
