import React from "react";

const Service = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Weight Loss & Build Muscle"
            details="Custom training programme and guidance."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG for this service icon */}
              </svg>
            }
            learnMoreLink="/weight-loss"
          />
          <ServiceCard
            title="Sports Competition Coaching"
            details="Custom training programme and guidance for your sports events."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG for this service icon */}
              </svg>
            }
            learnMoreLink="/sports-coaching"
          />
          <ServiceCard
            title="Postpartum Pregnancy Recovery Program"
            details="Custom training program for getting back in shape after pregnancy."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG for this service icon */}
              </svg>
            }
            learnMoreLink="/postpartum-recovery"
          />
          <ServiceCard
            title="Sport Event Training Schedules"
            details="Schemes for running (5-10-21-42 km), Swimming, and Triathlon."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG for this service icon */}
              </svg>
            }
            learnMoreLink="/sport-event-schedules"
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