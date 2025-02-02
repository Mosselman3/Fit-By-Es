import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes your online personal training different?",
    answer: "I offer personalized coaching that's truly tailored to you. Whether you're training for a race, getting back in shape, or just looking to get stronger, I create a plan that works for your unique goals. You'll get expert guidance, flexibility, and the support you need for lasting results."
  },
  {
    question: "How much does online coaching cost?",
    answer: "The price depends on your preferences and which FitByEs package you choose. Packages start from € 75 per month. I'm happy to tell more, please get in touch for more details on which plan fits your needs."
  },
  {
    question: "How often will we communicate during training?",
    answer: "Communication depends on what works best for you. We'll find the right balance to keep you motivated and on track."
  },
  {
    question: "What's included in the personal training programme?",
    answer: "A custom plan with workouts, nutrition support, progress check-ins, and ongoing support, tailored to your goals and progress."
  },
  {
    question: "How do I get started with online coaching?",
    answer: "Starting is easy with our 3-step approach:\n1. Fill Out the Form – Share your goals and get started.\n2. Book Your FREE Intake – Schedule a session via Calendly with personal confirmation.\n3. Begin Your Custom Plan – Discuss our approach and create your plan together.\n\nAfter booking your intake, I'll personally reach out via WhatsApp to confirm and answer any questions you might have!"
  },
  {
    question: "Do I need special equipment or a gym membership?",
    answer: "It depends on your goals. I can design workouts for home with minimal equipment or create a gym-based plan, depending on your preference."
  },
  {
    question: "How do you ensure proper form and technique?",
    answer: "You'll get video instructions and feedback. If needed, we can also do real-time check-ins to ensure you're performing exercises correctly."
  },
  {
    question: "How soon will I see results?",
    answer: "Results depend on consistency and effort, but with dedication, you can start seeing progress in just a few weeks."
  },
  {
    question: "Is online coaching effective?",
    answer: "Absolutely! Compared to 1-on-1 coaching on location, where you might only see each other for a couple of hours per week, online coaching provides continuous support and accountability. You can always reach out via WhatsApp with any questions, keeping your progress alive and on track. With a personalized plan, flexibility to train on your schedule, and ongoing guidance, you'll receive the motivation and structure needed to achieve your goals."
  },
  {
    question: "How often should I train?",
    answer: "The frequency of your workouts depends on the program you choose, but we generally recommend training at least 2 times per week for the best results."
  },
  {
    question: "How is my progress tracked?",
    answer: "Progress is measured in multiple ways. In addition to tracking weight, circumference measurements, and progress photos (if you choose to share them), you'll complete a short evaluation form at the end of each week. This form helps assess what went well, what can be improved, how well you've slept, and how consistently you've followed your training plan."
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-dark"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 30 
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          {faqData.slice(0, showAllQuestions ? undefined : 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 20 
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="mb-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-6 bg-primary-light rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-dark pr-8 my-auto">{item.question}</h3>
                  <span className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                {expandedIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-body-color text-lg leading-relaxed"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
          
          {/* Preview of the next question */}
          {!showAllQuestions && faqData.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-[40px] overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-white/0 via-white/60 to-white" />
              <div className="opacity-30">
                <div className="p-6 bg-primary-light rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-dark pr-8 truncate">
                      {faqData[3]?.question || ''}
                    </h3>
                    <span>▼</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Expand/Collapse button */}
          {faqData.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => setShowAllQuestions(!showAllQuestions)}
                className="inline-flex items-center gap-2 text-[#5C6AC4] font-semibold transform transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>{showAllQuestions ? 'Show less' : 'Show more'}</span>
                <motion.span
                  animate={{ 
                    rotate: showAllQuestions ? 180 : 0,
                    y: !showAllQuestions ? [0, -4, 0] : 0
                  }}
                  transition={{ 
                    rotate: { duration: 0.3 },
                    y: {
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                      repeatType: "reverse"
                    }
                  }}
                  className="text-xl"
                >
                  ↓
                </motion.span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
