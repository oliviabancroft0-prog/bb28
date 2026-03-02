import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  isVisible: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
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
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-pink-primary text-2xl md:text-4xl font-serif italic tracking-[0.2em] uppercase"
            >
              bad girls dont die
            </motion.h1>
          </div>
          
          {/* Progress Bar */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full h-1 bg-pink-primary origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
