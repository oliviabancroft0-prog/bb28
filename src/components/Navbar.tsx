import React from 'react';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-black/10 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <span 
          className="font-sans text-4xl md:text-5xl font-black tracking-[-0.1em] leading-none select-none"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg')",
            backgroundSize: "150% auto",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            filter: "drop-shadow(0 0 1px rgba(255,255,255,0.3))",
            transform: "scaleX(1.2)",
            transformOrigin: "left center"
          }}
        >
          B/B
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {['STRATEGY', 'MARKETING', 'ENGAGEMENT', 'REVENUE', 'TALENT', 'OLIVIA'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="interactive text-[10px] tracking-[0.2em] font-semibold text-white/70 hover:text-pink-primary transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="interactive px-6 py-2 border border-pink-primary/30 text-pink-primary text-[10px] tracking-[0.2em] font-bold hover:bg-pink-primary hover:text-white transition-all duration-500 rounded-full">
        GET IN TOUCH
      </button>
    </motion.nav>
  );
};
