import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ElevationLog } from './ElevationLog';
import { ArrowRight } from 'lucide-react';

interface SectionProps {
  id: string;
  number: string;
  title: string;
  description: string;
  videoUrl: string;
  logData: {
    title: string;
    quote: string;
    stats: { label: string; value: string }[];
    results: string[];
  };
}

export const CinematicSection: React.FC<SectionProps> = ({
  id,
  number,
  title,
  description,
  videoUrl,
  logData,
}) => {
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <section
      id={id}
      className="relative h-screen w-full flex items-center overflow-hidden snap-start"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-40"
        >
          <source src={videoUrl} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="block text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-serif text-pink-primary/10 absolute -top-16 -left-6 md:-top-32 md:-left-20 pointer-events-none"
          >
            {number}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-4 md:mb-8">
              {title}
            </h2>
            <p className="text-base md:text-xl text-white/60 max-w-xl mb-8 md:mb-12 leading-relaxed font-light">
              {description}
            </p>

            <button
              onClick={() => setIsLogOpen(true)}
              className="group flex items-center gap-4 text-pink-primary tracking-[0.3em] font-bold text-xs uppercase"
            >
              <span>Open Elevation Log</span>
              <div className="w-12 h-[1px] bg-pink-primary/30 group-hover:w-20 transition-all duration-500" />
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>
      </div>

      <ElevationLog
        isOpen={isLogOpen}
        onClose={() => setIsLogOpen(false)}
        data={logData}
      />
    </section>
  );
};
