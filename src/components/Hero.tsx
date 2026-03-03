import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Mouse } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error: any) {
          // If it was interrupted by power saving, we can't do much but we can try again on first interaction
          console.warn("Video autoplay failed or was interrupted:", error.message);
          
          const handleFirstInteraction = () => {
            videoRef.current?.play().catch(() => {});
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('mousedown', handleFirstInteraction);
          };
          
          window.addEventListener('touchstart', handleFirstInteraction);
          window.addEventListener('mousedown', handleFirstInteraction);
        }
      }
    };

    playVideo();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('strategy');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start px-4">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover opacity-70"
          src="https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/Fukumean.mp4"
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
        <div className="relative w-8 h-12 rounded-full border-2 border-yellow-400 flex justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-yellow-400 rounded-full"
          />
        </div>
        <span className="text-yellow-400 text-[10px] font-bold tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll down
        </span>
      </motion.button>
    </section>
  );
};
