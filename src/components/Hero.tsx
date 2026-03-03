import React from 'react';
import { motion } from 'motion/react';
import { Mouse } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('strategy');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/448620471_1120898959206141_6879917844997512699_n.webp"
          alt="Bramingham Barely Hero"
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      {/* Scroll Down Button at the bottom */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 group"
      >
        <div className="relative w-8 h-12 rounded-full border-2 border-pink-primary flex justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-pink-primary rounded-full"
          />
        </div>
        <span className="text-pink-primary text-[10px] font-bold tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll down
        </span>
      </motion.button>
    </section>
  );
};
