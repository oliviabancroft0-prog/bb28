import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  isVisible: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 2 seconds
    const interval = 30; // update every 30ms
    const steps = duration / interval;
    const increment = 100 / steps;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-pink-primary text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase flex items-center"
            >
              <span>LOADING</span>
              <span className="ml-4 tabular-nums w-[4ch] text-right">{progress}%</span>
            </motion.div>
            
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 bg-pink-primary origin-left"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
