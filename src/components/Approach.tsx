import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section id="approach" className="py-16 bg-primary-light">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 text-dark"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 30 
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          3-Pillar Approach to Online Personal Training
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[1, 2, 3].map((number, index) => (
            <motion.div
              key={number}
              className="bg-white p-8 rounded-2xl shadow-md relative transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.05]"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl shadow-md">
                  {number}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-6 text-center text-dark">
                  {number === 1 ? "Personalization" : number === 2 ? "Connection" : "Accountability"}
                </h3>
                <ul className="space-y-5">
                  {number === 1 ? (
                    <>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Define your workout habits and current fitness level</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Set clear and attainable goals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Tailor workout plans that fit into your daily routine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Nutrition advice to enhance physical performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Improving the plan on the go</span>
                      </li>
                    </>
                  ) : number === 2 ? (
                    <>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Consistent check-ins to build a strong relationship</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Daily communication for questions to provide support and guidance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Improve and maintain your motivation and accountability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Connecting you with a supportive community</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Clear expectations that can be achieved and measured</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Track the set goals and monitor progress</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Use of technology to keep you on schedule</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-xl leading-none mt-1">•</span>
                        <span className="text-body-color text-lg leading-relaxed">Creating habits to ensure long-term success</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
