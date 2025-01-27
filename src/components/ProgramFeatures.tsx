import React from 'react';
import { Utensils, Dumbbell, LineChart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

interface ProgramFeaturesProps {
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.21, 1.11, 0.81, 0.99] // spring-like easing
      }}
      className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
    >
      <motion.div 
        whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.2 }
        }}
        className="h-full p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
      >
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.2 + 0.3,
            ease: "easeOut"
          }}
          className="mb-6 p-4 bg-primary/10 rounded-full"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-4 text-dark">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const ProgramFeatures: React.FC<ProgramFeaturesProps> = ({ title, subtitle, features }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </motion.div>
        <div className="flex flex-wrap -mx-4 justify-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Default features configuration for each service type
export const getFitFeatures = {
  title: "What's Included in the Program",
  subtitle: "All the tools and support you need to reach your fitness goals and build a healthier lifestyle.",
  features: [
    {
      title: "Nutrition Support",
      description: "Receive a personalized plan to help you build healthy habits and manage macros, with recipe suggestions to make healthy eating simple.",
      icon: <Utensils className="w-8 h-8 text-primary" />
    },
    {
      title: "Training Plan",
      description: "Get a customized workout plan designed for your needs, whether at home, outside, or in the gym.",
      icon: <Dumbbell className="w-8 h-8 text-primary" />
    },
    {
      title: "Progress Check-ins",
      description: "Weekly or monthly check-ins to monitor your progress and ensure you're on track to reach your goals.",
      icon: <LineChart className="w-8 h-8 text-primary" />
    },
    {
      title: "Daily Support",
      description: "Stay connected via WhatsApp for ongoing guidance, feedback, and updates whenever you need assistance.",
      icon: <MessageCircle className="w-8 h-8 text-primary" />
    }
  ]
};

export const sportsCoachingFeatures = {
  title: "What's Included in the Program",
  subtitle: "Everything you need to perform at your best and achieve your competition goals with expert guidance and support.",
  features: [
    {
      title: "Nutrition Support",
      description: "A personalized nutrition plan to fuel your performance and recovery, with tailored recipes and meal suggestions to keep you energized and on track for race day.",
      icon: <Utensils className="w-8 h-8 text-primary" />
    },
    {
      title: "Training Plan",
      description: "Custom training plans for swimming, running, cycling, or triathlon—designed to suit your competition goals, whether you're training at home, outside, or in the gym.",
      icon: <Dumbbell className="w-8 h-8 text-primary" />
    },
    {
      title: "Progress Check-ins",
      description: "Regular performance check-ins to track improvements, tweak your plan, and ensure you're progressing towards your competition goals.",
      icon: <LineChart className="w-8 h-8 text-primary" />
    },
    {
      title: "Daily Support",
      description: "Ongoing coaching and feedback via WhatsApp to keep you motivated, answer your questions, and ensure you're always on the right path towards success.",
      icon: <MessageCircle className="w-8 h-8 text-primary" />
    }
  ]
};

export const weightLossFeatures = {
  title: "What's Included in the Program",
  subtitle: "All the tools and support you need to reach your weight loss goals in a sustainable and healthy way.",
  features: [
    {
      title: "Nutrition Support",
      description: "A tailored plan that includes simple and healthy meals to keep you on track, with tips on portion and guidance on managing macros for optimal weight loss.",
      icon: <Utensils className="w-8 h-8 text-primary" />
    },
    {
      title: "Training Plan",
      description: "Get a workout plan suited to your fitness level and goals, whether you're training at home, outdoors, or in the gym.",
      icon: <Dumbbell className="w-8 h-8 text-primary" />
    },
    {
      title: "Progress Check-ins",
      description: "Weekly or monthly check-ins to ensure you're on track and to help adjust your plan if needed to keep you moving forward.",
      icon: <LineChart className="w-8 h-8 text-primary" />
    },
    {
      title: "Daily Support",
      description: "Stay connected via WhatsApp for daily guidance, feedback, and motivation whenever you need it.",
      icon: <MessageCircle className="w-8 h-8 text-primary" />
    }
  ]
};

export const buildMuscleFeatures = {
  title: "What's Included in the Program",
  subtitle: "Everything you need to build muscle effectively and sustainably.",
  features: [
    {
      title: "Nutrition Support",
      description: "A support plan designed for muscle growth, including protein-rich meals and guidance on managing your macros to optimize gains.",
      icon: <Utensils className="w-8 h-8 text-primary" />
    },
    {
      title: "Training Plan",
      description: "A workout plan tailored to your muscle-building goals, with exercises suited for your equipment (home, gym, or outdoor workouts).",
      icon: <Dumbbell className="w-8 h-8 text-primary" />
    },
    {
      title: "Progress Check-ins",
      description: "Weekly or monthly check-ins to track your progress, making sure you're building muscle efficiently and adjusting as needed.",
      icon: <LineChart className="w-8 h-8 text-primary" />
    },
    {
      title: "Daily Support",
      description: "Stay connected via WhatsApp for guidance, feedback, and motivation whenever you need it.",
      icon: <MessageCircle className="w-8 h-8 text-primary" />
    }
  ]
};

export default ProgramFeatures;
