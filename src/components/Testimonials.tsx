import React, { useEffect } from 'react';

const testimonials = [
  {
    content: "Estrella's training sessions have transformed my fitness journey. Her expertise and motivation are unmatched!",
    name: "Sarah J.",
    role: "Group Training Client"
  },
  {
    content: "As a new mom, I was worried about getting back in shape. Estrella's post-pregnancy program was exactly what I needed.",
    name: "Emma L.",
    role: "Post-Pregnancy Client"
  },
  {
    content: "The nutrition advice I received has completely changed my relationship with food. I feel healthier and more energized than ever.",
    name: "Michael R.",
    role: "Nutrition Coaching Client"
  }
];

const Testimonials = () => {
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
    handleScroll(); // Check for visible elements on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary fade-in">What My Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in">
              <p className="mb-4 text-gray-600 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;