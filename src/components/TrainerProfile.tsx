import React from 'react';
import { motion } from 'framer-motion';
import { contactSectionId } from './Contact';
import FadeInSection from './FadeInSection';

const TrainerProfile = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById(contactSectionId);
    if (contactSection) {
      const offset = 0;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="trainer" className="bg-[#F3F4F6] py-12 md:py-20">
      <div className="container mx-auto px-0 md:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark"
        >
          Meet Your Trainer
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-center mb-12 md:mb-16 text-dark/80 font-[GT-Walsheim-Framer-Medium]"
        >
          Estrella Wierikx
        </motion.h3>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-12 -mx-0">
          {/* Video Section - Full width on mobile, left side on desktop */}
          <div className="w-screen md:w-1/2 mb-8 md:mb-0">
            <FadeInSection delay={200}>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] md:rounded-2xl overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/trainer-profile-photo.jpg"
                >
                  <source src="/videos/trainer-profile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </FadeInSection>
          </div>

          {/* Content Section - Full width on mobile, right side on desktop */}
          <div className="w-full md:w-1/2">
            <FadeInSection delay={400}>
              <div className="space-y-8 px-4 md:px-0">
                <h3 className="text-3xl font-bold text-dark">Why choose <span className="font-bold">FitByEs</span> online coaching?</h3>
                
                <div className="space-y-6 text-gray-700">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="leading-relaxed max-w-none md:max-w-xl"
                  >
                    As a <span className="font-bold">former competitive swimmer</span>, I know what it's like to live and breathe sports— untill suddenly my world turned upside down. A <span className="font-bold">sudden injury</span> forced me to quit my <span className="font-bold">professional sports career</span>. This forced me to <span className="font-bold">rebuild my career</span> and rediscover my <span className="font-bold">passion</span> <span className="font-bold">for fitness.</span> That journey taught me how it feels to lose your way in sport, no matter the circumstances. I struggled to balance fitness with daily life, and like many, made mistakes along the way. These experiences taught me how to <span className="font-bold">rebuild</span>, <span className="font-bold">rediscover</span> my passion, and find <span className="font-bold">happiness</span> again.
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="leading-relaxed max-w-none md:max-w-xl"
                  >
                    This is why I'm <span className="font-bold">passionate</span> about helping others. I understand the <span className="font-bold">challenges</span>, whether you're trying to get back into fitness, preparing for a race, or simply finding the right balance between exercise and everyday life. I started my journey as a <span className="font-bold">group</span> <span className="font-bold">trainer</span> at Saints and Stars and over time, I've learned there how to help people at all stages of their fitness journey. My goal is to help you build <span className="font-bold">confidence</span>, <span className="font-bold">rediscover</span> the joy of movement, and create a <span className="font-bold">sustainable plan</span> that works for you.
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="leading-relaxed max-w-none md:max-w-xl"
                  >
                    Together, we'll work step by step to achieve your <span className="font-bold">goals</span> with a <span className="font-bold">personalized approach</span> tailored to your unique needs. Most importantly, we'll focus on helping you feel <span className="font-bold">strong</span>, <span className="font-bold">empowered</span>, and <span className="font-bold">excited</span> about your fitness journey again. As my sports hero once said, <span className="italic">"You can't put a limit on anything – the more you dream, the farther you get."</span>
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="text-lg font-semibold text-primary-dark"
                  >
                    <span className="font-bold">No limits—let's turn your dreams into reality!</span>
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="pt-4 flex justify-center"
                >
                  <button
                    onClick={scrollToContact}
                    className="bg-[#5C6AC4] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center group shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.25)] transform hover:scale-95 active:scale-90"
                  >
                    Train with Me
                    <span className="ml-3 text-xl group-hover:-translate-x-1.5 translate-x-1.5 transition-transform duration-300">→</span>
                  </button>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;