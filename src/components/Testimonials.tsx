import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  { id: 1, rating: 5, text: "First time with this trainer. Love the energy! Great playlist and amazing vibe!", date: "January 15, 2024" },
  { id: 2, rating: 5, text: "Amazing class!", date: "February 3, 2024" },
  { id: 3, rating: 5, text: "I loved her energy and music!", date: "March 12, 2024" },
  { id: 4, rating: 5, text: "Lovely instructor and great Marlon Hoffstadt music in final block", date: "April 5, 2024" },
  { id: 5, rating: 5, text: "Ik vind Estrella een hele fijne instructrice, niet te veel poespas gewoon hoe het is. Kom zeker bij haar terug!", date: "May 20, 2024" },
  { id: 6, rating: 5, text: "Best teacher ever, no nonsense and lovely voice", date: "June 8, 2024" },
  { id: 7, rating: 5, text: "Een les door Estrella is sowieso 5 sterren waard, wat een topper!", date: "July 15, 2024" },
  { id: 8, rating: 5, text: "Very motivating and professional yet chill trainer; great music choice as well.", date: "August 22, 2024" },
  { id: 9, rating: 5, text: "Ik schrijf zelden een recensie, maar Estrella gaf zo'n motiverende les. Beste les in tijden.", date: "September 3, 2024" },
  { id: 10, rating: 5, text: "The best best best teacher", date: "October 17, 2024" },
  { id: 11, rating: 5, text: "amazing instructor !!! really gonna miss her. good luck in South America girlie!", date: "November 5, 2024" },
  { id: 12, rating: 5, text: "Es is an Amazing instructor! Love her energy and vibe", date: "December 12, 2024" }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state based on window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonialsToShow = isMobile ? 1 : 3;
  const testimonialIndex = Math.abs(page % testimonials.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-gray-100/80">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold text-dark mb-4">What People Say</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">In my career as a group trainer, I've had the privilege of training thousands of individuals and helping them achieve their health and fitness goals.</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto overflow-hidden px-8 md:px-12">
          <div className={`flex justify-between items-center ${isMobile ? 'gap-0' : 'gap-6'}`}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {isMobile ? (
                <motion.div
                  key={testimonialIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="w-full p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[250px] border border-gray-100"
                >
                  <div className="mb-4 text-xl text-primary">{renderStars(testimonials[testimonialIndex].rating)}</div>
                  <p className="flex-grow text-gray-700 mb-6 text-lg italic">{testimonials[testimonialIndex].text}</p>
                  <p className="text-sm text-primary-dark font-medium">{testimonials[testimonialIndex].date}</p>
                </motion.div>
              ) : (
                <div className="flex gap-6">
                  {testimonials.slice(testimonialIndex, testimonialIndex + testimonialsToShow).map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="w-1/3 p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[250px] border border-gray-100"
                    >
                      <div className="mb-4 text-xl text-primary">{renderStars(testimonial.rating)}</div>
                      <p className="flex-grow text-gray-700 mb-6 text-lg italic">{testimonial.text}</p>
                      <p className="text-sm text-primary-dark font-medium">{testimonial.date}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2.5 md:p-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 z-10 border border-gray-100"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2.5 md:p-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 z-10 border border-gray-100"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newDirection = index > testimonialIndex ? 1 : -1;
                setPage([index, newDirection]);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === testimonialIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;