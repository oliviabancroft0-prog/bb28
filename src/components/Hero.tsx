import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToFirst = () => {
    const firstSection = document.getElementById('strategy');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start px-4">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-pink-and-purple-smoke-background-40342-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 md:space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none">
            BRAMINGHAM <br />
            <span className="text-pink-primary italic">BARELY</span>
          </h1>
          
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <p className="text-pink-primary tracking-[0.3em] md:tracking-[0.5em] font-bold text-xs md:text-base uppercase">
              Where UK Creators Take Flight
            </p>
            <p className="text-white/40 text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] font-light uppercase">
              London • Est. 2024 • OnlyFans Management Agency
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 md:mt-16"
        >
          <motion.button
            onClick={scrollToFirst}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-pink-primary text-white font-bold tracking-[0.4em] text-xs uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,0,170,0.6)]"
          >
            <span className="relative z-10">Take Flight</span>
            
            {/* Thrust/Shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
            />
            
            {/* Particle thrust simulation */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-white/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
