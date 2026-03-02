import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", label: "London" },
  { url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800", label: "Paris" },
  { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800", label: "Milan" },
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", label: "Dubai" },
  { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800", label: "NYC" },
];

const FILTERS = ["All", "London", "Paris", "Milan", "Dubai", "NYC", "Tokyo", "Berlin", "Madrid", "Sydney"];

export const RevenueOptimizationSection: React.FC<SectionProps> = ({ id, title, description }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Parallax and Zoom effects
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1.2, 1]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.4, 0.2]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center snap-start py-20 px-4 md:px-10 overflow-hidden bg-zinc-950"
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/20 to-blue-900/20 backdrop-blur-3xl z-10" />
        <motion.div 
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]"
        >
          <img 
            src={GALLERY_IMAGES[0].url} 
            className="w-full h-full object-cover blur-[120px]" 
            alt="background blur"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Main Card Container */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-10 w-full max-w-7xl bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center py-16 px-6 md:px-20"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-6">
            Model Preview
          </h2>
          <p className="text-zinc-500 text-lg font-light max-w-xl mx-auto">
            {description} Discover the elite talent defining the new standard of digital influence.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl">
          {FILTERS.map((filter, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                i === 0 
                  ? "bg-zinc-900 text-white" 
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
              }`}
            >
              {filter}
            </button>
          ))}
          <button className="px-6 py-2 rounded-full text-xs font-bold tracking-wider bg-zinc-100 text-zinc-500 hover:bg-zinc-200 flex items-center gap-2">
            View More +
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="relative w-full flex justify-center items-center gap-4 md:gap-8 h-[400px] md:h-[500px]">
          {GALLERY_IMAGES.map((img, i) => {
            // Individual parallax/zoom for each image based on scroll
            // We want images to shift and scale differently
            const delay = i * 0.1;
            const y = useTransform(smoothProgress, [0, 1], [100 * (i - 2), -100 * (i - 2)]);
            const imgScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1 + (i === 2 ? 0.1 : 0), 0.9]);
            
            return (
              <motion.div
                key={i}
                style={{ y, scale: imgScale }}
                className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
                  i === 2 
                    ? "w-64 md:w-80 h-full z-30" 
                    : i === 1 || i === 3
                    ? "w-48 md:w-60 h-[85%] z-20 opacity-80"
                    : "w-32 md:w-40 h-[70%] z-10 opacity-60 hidden md:block"
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.label} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-lg">{img.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-16">
          <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300">
            <ChevronLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300">
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
