import React, { useEffect, useRef } from 'react';
import { FitnessForm } from './FitnessForm/index';

const Contact = () => {
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (highlightRef.current) {
      observer.observe(highlightRef.current);
    }

    return () => {
      if (highlightRef.current) {
        observer.unobserve(highlightRef.current);
      }
    };
  }, []);

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="block mb-4 text-xl font-semibold text-primary">
                Your Fitness Transformation
              </span>
              <h2 className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                START <span ref={highlightRef} className="highlight-text">TODAY</span>
              </h2>
              <p className="text-base leading-relaxed text-body-color mb-9">
                Kickstart your fitness journey with our tailored 3-step approach. We're here to support you in achieving your health and fitness goals, one step at a time.
              </p>
              
              {/* Step 1 */}
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <div className="text-3xl font-bold text-primary">1</div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark">
                    Fill Out the Form
                  </h4>
                  <p className="text-base text-body-color">
                    Share your goals and get started.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <div className="text-3xl font-bold text-primary">2</div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark">
                    Book Your FREE Intake
                  </h4>
                  <p className="text-base text-body-color">
                    Schedule a session via Calendly with personal confirmation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <div className="text-3xl font-bold text-primary">3</div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark">
                    Begin Your Custom Plan
                  </h4>
                  <p className="text-base text-body-color">
                    Discuss our approach and create your plan together.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <FitnessForm key="contact-form" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;