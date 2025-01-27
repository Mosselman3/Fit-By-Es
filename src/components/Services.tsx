import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.5 }
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
    <section id="services" className="pb-12 pt-32 lg:pb-[90px] lg:pt-[160px]">
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
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[640px] text-center lg:mb-20">
              <span className="mb-2 block text-[1.3em] font-bold text-primary">
                My Services
              </span>
              <h2 className="mb-3 text-[2.9em] font-bold leading-[1.2] text-dark">
                Fitness that Works for{' '}
                <span className="highlight-text" ref={highlightRef} data-aos="fade-up">
                  You
                </span>
              </h2>
              <p className="text-base text-body-color">
              Personalized plans for sustainable progress—whether you're aiming to improve your health, prepare for competitions, lose weight, or build muscle.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Get Fit & Improve Health"
            details="Boost your energy and improve your health with personalized fitness programs tailored to your needs."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Heart with pulse line for health/fitness */}
                <path
                  d="M12 21L10.5 19.5C5.5 14.5 2 11.2 2 7.5C2 4.4 4.4 2 7.5 2C9.2 2 10.9 2.8 12 4.1C13.1 2.8 14.8 2 16.5 2C19.6 2 22 4.4 22 7.5C22 11.2 18.5 14.5 13.5 19.5L12 21Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12H8L10 8L14 16L16 12H18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            learnMoreLink="/services/get-fit"
          />
          <ServiceCard
            title="Sports Competition Coaching"
            details="Excel in swimming, running, cycling, or triathlon with expert coaching and tailored training plans."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simple running person */}
                <path
                  d="M14.5 3.5C14.5 4.33 13.83 5 13 5C12.17 5 11.5 4.33 11.5 3.5C11.5 2.67 12.17 2 13 2C13.83 2 14.5 2.67 14.5 3.5Z"
                  fill="white"
                />
                <path
                  d="M9 17.5L11.5 13L14 14.5V21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 8.5L13 5L9 7L10.5 11"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 10C19 10 20 9.5 21 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Ground line */}
                <path
                  d="M4 21H20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
            learnMoreLink="/services/sports-coaching"
          />
          <ServiceCard
            title="Weight Loss Programs"
            details="Achieve sustainable weight loss with plans that combine fitness, nutrition, and motivation."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main body outline */}
                <path
                  d="M8 6C8 6 10 7 12 7C14 7 16 6 16 6V18C16 18 14 17 12 17C10 17 8 18 8 18V6Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Waist curve */}
                <path
                  d="M8 12C8 12 10 11 12 11C14 11 16 12 16 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Left arrow */}
                <path
                  d="M7 12H4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 12L5 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 12L5 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Right arrow */}
                <path
                  d="M17 12H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 12L19 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 12L19 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
            learnMoreLink="/services/weight-loss"
          />
          <ServiceCard
            title="Build Muscle Programs"
            details="Build strength and muscle with personalized workout plans and expert guidance."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left weight plate */}
                <circle cx="6" cy="12" r="3" stroke="white" strokeWidth="2" />
                {/* Right weight plate */}
                <circle cx="18" cy="12" r="3" stroke="white" strokeWidth="2" />
                {/* Handle */}
                <path
                  d="M6 12H18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Left grip */}
                <path
                  d="M8 9V15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Right grip */}
                <path
                  d="M16 9V15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
            learnMoreLink="/services/build-muscle"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details, learnMoreLink }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(learnMoreLink);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
        <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          {icon}
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold text-dark ">
          {title}
        </h4>
        <p className="text-body-color ">{details}</p>
        <button
          onClick={handleClick}
          className="mt-4 inline-block text-[#5C6AC4] font-semibold hover:underline group text-left"
        >
          Learn More <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
};