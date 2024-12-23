import React, { useEffect, useRef } from "react";

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
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <style jsx>{`
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
      `}</style>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[640px] text-center lg:mb-20">
              <span className="mb-2 block text-[1.2em] font-semibold text-primary">
                My Services
              </span>
              <h2 className="mb-3 text-[2.9em] font-bold leading-[1.2] text-dark">
                Fitness that Works for{' '}
                <span className="highlight-text" ref={highlightRef} data-aos="fade-up">
                  You
                </span>
              </h2>
              <p className="text-base text-body-color">
                Programs focussed on steady progress and no quick fixes. Based on a 3-Pillar Framework for gradual results that are designed to last
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Get Fit & Improve Health Programs"
            details="Boost your energy and improve your health with personalized fitness programs tailored to your needs."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12H4C3.44772 12 3 12.4477 3 13V25C3 25.5523 3.44772 26 4 26H8C8.55228 26 9 25.5523 9 25V13C9 12.4477 8.55228 12 8 12Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 12H28C27.4477 12 27 12.4477 27 13V25C27 25.5523 27.4477 26 28 26H32C32.5523 26 33 25.5523 33 25V13C33 12.4477 32.5523 12 32 12Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 19H27"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            learnMoreLink="/get-fit"
          />
          <ServiceCard
            title="Sports Competition Coaching"
            details="Excel in swimming, running, cycling, or triathlon with expert coaching and tailored training plans."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 17.25L18 10.5L24.75 17.25"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 25.5V10.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.5 25.5H7.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            learnMoreLink="/sports-coaching"
          />
          <ServiceCard
            title="Weight Loss Programs"
            details="Achieve sustainable weight loss with plans that combine fitness, nutrition, and motivation."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 21C20.4853 21 22.5 18.9853 22.5 16.5C22.5 14.0147 20.4853 12 18 12C15.5147 12 13.5 14.0147 13.5 16.5C13.5 18.9853 15.5147 21 18 21Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            learnMoreLink="/weight-loss"
          />
          <ServiceCard
            title="Build Muscle Programs"
            details="Build strength and sculpt your physique with programs focused on technique and progression."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 16.5L18 21L22.5 16.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            learnMoreLink="/build-muscle"
          />
          <ServiceCard
            title="Download Training Schedules"
            details="Directly download your Training Schemes for Running, Swimming, Cycling and Triathlon."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3V24"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 15L18 24L27 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 30H33"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            learnMoreLink="/training-schedules"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details, learnMoreLink }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark ">
            {title}
          </h4>
          <p className="text-body-color ">{details}</p>
          <a
            href={learnMoreLink}
            className="mt-4 inline-block text-primary font-semibold hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};