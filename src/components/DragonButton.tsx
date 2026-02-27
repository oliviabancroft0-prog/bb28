import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Mock useRouter for Vite environment, but user can replace with 'next/navigation'
const useRouter = () => {
  return {
    push: (url: string) => {
      console.log(`Navigating to ${url}`);
      // Simulate Next.js router push using history API
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };
};

export const DragonButton: React.FC = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isFiring, setIsFiring] = useState(false);
  const router = useRouter();

  // Occasional blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleTakeFlight = () => {
    setIsFiring(true);
    
    // Scroll to the bespoke content mastery section after a short delay to let the fire start
    setTimeout(() => {
      const section = document.getElementById('strategy');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);

    // Reset firing state after the animation
    setTimeout(() => setIsFiring(false), 1200);
  };

  return (
    <div className="relative flex flex-col items-center">
      <motion.button
        onClick={handleTakeFlight}
        whileHover="hover"
        whileTap="tap"
        initial="idle"
        className="relative group cursor-pointer outline-none"
      >
        {/* Soft Glow Effect on Hover */}
        <motion.div
          variants={{
            hover: { opacity: 0.6, scale: 1.2 },
            idle: { opacity: 0, scale: 1 }
          }}
          className="absolute inset-0 bg-orange-400 blur-3xl rounded-full pointer-events-none"
        />

        <motion.div
          variants={{
            idle: { y: [0, -15, 0] },
            tap: { scale: [1, 0.8, 1.1, 1] }
          }}
          transition={{
            idle: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            tap: { duration: 0.4 }
          }}
          className="relative w-48 h-48 flex items-center justify-center"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            {/* Wings */}
            <motion.path
              d="M60,80 Q30,40 20,80 T60,100"
              fill="#FF99CC"
              stroke="#FF66AA"
              strokeWidth="2"
              animate={{ rotate: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              style={{ originX: "60px", originY: "90px" }}
            />
            <motion.path
              d="M140,80 Q170,40 180,80 T140,100"
              fill="#FF99CC"
              stroke="#FF66AA"
              strokeWidth="2"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              style={{ originX: "140px", originY: "90px" }}
            />

            {/* Body */}
            <circle cx="100" cy="110" r="60" fill="#FFCCEE" stroke="#FF99CC" strokeWidth="3" />
            
            {/* Belly */}
            <ellipse cx="100" cy="130" rx="40" ry="30" fill="#FFF0F5" />

            {/* Eyes */}
            <g>
              {/* Left Eye */}
              <circle cx="75" cy="100" r="12" fill="white" />
              <motion.circle 
                cx="75" cy="100" r={isBlinking ? 0.1 : 8} 
                fill="#333" 
                animate={{ scaleY: isBlinking ? 0.1 : 1 }}
              />
              <circle cx="72" cy="97" r="3" fill="white" opacity="0.8" />
              
              {/* Right Eye */}
              <circle cx="125" cy="100" r="12" fill="white" />
              <motion.circle 
                cx="125" cy="100" r={isBlinking ? 0.1 : 8} 
                fill="#333"
                animate={{ scaleY: isBlinking ? 0.1 : 1 }}
              />
              <circle cx="122" cy="97" r="3" fill="white" opacity="0.8" />
            </g>

            {/* Mouth Area */}
            <motion.ellipse 
              cx="100" cy="130" rx="10" ry="6" 
              fill="#FF66AA" 
              animate={isFiring ? { scale: [1, 1.5, 1.2] } : {}}
            />
            
            {/* Cheeks */}
            <circle cx="60" cy="115" r="8" fill="#FFB6C1" opacity="0.6" />
            <circle cx="140" cy="115" r="8" fill="#FFB6C1" opacity="0.6" />

            {/* Small Horns */}
            <path d="M80,55 L75,40 L90,52 Z" fill="#FF99CC" />
            <path d="M120,55 L125,40 L110,52 Z" fill="#FF99CC" />
          </svg>

          {/* Fire from mouth when firing - shooting downwards */}
          {isFiring && (
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 30 }}
              animate={{ 
                scale: [1, 3, 6], 
                opacity: [1, 1, 0],
                y: [30, 100, 200] 
              }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 z-20"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full blur-xl" />
              <div className="absolute inset-0 w-12 h-12 bg-yellow-400 rounded-full blur-lg scale-75" />
              <div className="absolute inset-0 w-12 h-12 bg-red-500 rounded-full blur-2xl scale-125 opacity-50" />
            </motion.div>
          )}
        </motion.div>

        <motion.span
          variants={{
            hover: { y: 10, opacity: 1 },
            idle: { y: 0, opacity: 0.7 }
          }}
          className="block mt-4 text-[#FF69B4] font-bold tracking-[0.3em] text-[10px] uppercase"
        >
          HIYA IM LIV
        </motion.span>
      </motion.button>
    </div>
  );
};
