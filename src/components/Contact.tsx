import React, { useState, useEffect, useRef } from 'react';
import { FitnessForm } from './FitnessForm/index';

export const contactSectionId = 'contact-section';

interface ContactProps {
  prefilledAnswer?: string;
  startFromQuestion?: number;
}

const Contact: React.FC<ContactProps> = ({ prefilledAnswer, startFromQuestion }) => {
  const [currentQuestion, setCurrentQuestion] = useState(startFromQuestion || 1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({
    ...(prefilledAnswer ? { 1: prefilledAnswer } : {})
  });

  const highlightRef = useRef<HTMLSpanElement>(null);
  const contactRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    if (prefilledAnswer) {
      setAnswers(prev => ({ ...prev, 1: prefilledAnswer }));
      if (startFromQuestion && startFromQuestion > 1) {
        setCurrentQuestion(startFromQuestion);
      }
    }
  }, [prefilledAnswer, startFromQuestion]);

  return (
    <section 
      ref={contactRef}
      id={contactSectionId}
      className="relative z-10 overflow-hidden bg-[#F3F4F6] py-20 lg:py-[120px]"
    >
      <style>
        {`
        @keyframes highlight {
          0% {
            width: 0;
            opacity: 0.5;
          }
          100% {
            width: 100%;
            opacity: 0.3;
          }
        }
        .highlight-text {
          position: relative;
          padding: 0 4px;
          z-index: 1;
        }
        .highlight-text::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 0;
          height: 60%;
          background-color: #ffe44d;
          z-index: -1;
          opacity: 0;
          transform-origin: left;
        }
        .highlight-text.animate::before {
          animation: highlight 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
        }
        `}
      </style>
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
            <div className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100/40 backdrop-blur-sm max-w-4xl mx-auto px-6 py-8 md:py-16 transform transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)]">
              <FitnessForm 
                prefilledAnswer={prefilledAnswer}
                startFromQuestion={startFromQuestion}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;