import React from 'react';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-transparent"
    >
      <div className="flex items-center gap-2">
        <div className="relative flex flex-col items-start -rotate-3 scale-[0.375] md:scale-50 origin-left">
          {/* BRAMINGHAM */}
          <span 
            className="font-logo text-3xl md:text-4xl font-normal tracking-tight leading-none select-none"
            style={{
              color: "#FF69B4",
              display: "inline-block",
              WebkitTextStroke: "1.5px black",
              textRendering: "optimizeLegibility",
              fontStyle: "italic"
            }}
          >
            BRAMINGHAM
          </span>
          
          {/* BARELY + STAR */}
          <div className="relative -mt-2 ml-12 flex items-center gap-2">
            <span 
              className="font-script text-4xl md:text-5xl font-normal leading-none select-none"
              style={{
                backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg')",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
                WebkitTextStroke: "1.5px black",
                textRendering: "optimizeLegibility"
              }}
            >
              BARELY
            </span>
            <span 
              className="text-2xl md:text-3xl"
              style={{
                backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg')",
                backgroundSize: "cover",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextStroke: "1px black"
              }}
            >
              ★
            </span>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
      </div>

      <button className="interactive px-6 py-2 border border-pink-primary/30 text-pink-primary text-[10px] tracking-[0.2em] font-bold hover:bg-pink-primary hover:text-white transition-all duration-500 rounded-full">
        GET IN TOUCH
      </button>
    </motion.nav>
  );
};
