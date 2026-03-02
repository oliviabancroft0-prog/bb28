import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  number: string;
  title: string;
  description: string;
  logData: {
    title: string;
    quote: string;
    stats: { label: string; value: string }[];
    results: string[];
  };
}

export const TalentConnectionSection: React.FC<SectionProps> = ({ id, title, description }) => {
  return (
    <section
      id={id}
      className="relative h-screen w-full bg-white overflow-hidden flex items-center justify-center snap-start"
    >
      {/* Left Model Image */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200" 
          alt="Talent Left" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/10" />
      </motion.div>

      {/* Right Model Image */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=1200" 
          alt="Talent Right" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/10" />
      </motion.div>

      {/* Center Content Overlay */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white drop-shadow-2xl leading-none mb-8">
            Network <br />
            <span className="italic">Synergy</span>
          </h2>
          
          <p className="text-white font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-12 max-w-lg drop-shadow-lg">
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white text-black font-bold tracking-[0.3em] text-[10px] uppercase transition-all duration-300 hover:bg-black hover:text-white"
          >
            See the Story
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Divider Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 z-0" />
    </section>
  );
};
