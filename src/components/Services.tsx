import React, { useEffect } from 'react';

const services = [
  {
    icon: '👥',
    title: "Group Training",
    description: "High-energy group sessions for all fitness levels.",
    link: "#contact"
  },
  {
    icon: '🏆',
    title: "Personal Training",
    description: "Tailored one-on-one sessions to meet your specific goals.",
    link: "#contact"
  },
  {
    icon: '🥗',
    title: "Nutrition Coaching",
    description: "Expert advice on nutrition to complement your fitness routine.",
    link: "#contact"
  },
  {
    icon: '👶',
    title: "Post-Pregnancy Fitness",
    description: "Safe and effective workouts for new mothers.",
    link: "#contact"
  }
];

const Services = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 fade-in">Let me help you Achieve Your Fitness and Health Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center fade-in">
              <div className="mb-4 text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="mb-4 text-sm">{service.description}</p>
              <a 
                href={service.link} 
                className="cta-button cta-button-primary mt-auto text-sm"
                onClick={(e) => handleSmoothScroll(e, service.link)}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;