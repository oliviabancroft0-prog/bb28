import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SectionProps {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  logData: {
    title: string;
    quote: string;
    stats: { label: string; value: string }[];
    results: string[];
  };
}

export const PremiumWhiteSection: React.FC<SectionProps> = ({
  id,
  number,
  title,
  description,
  imageUrl,
  logData,
}) => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Split title into lines for masked reveal
  const titleLines = title.split(' ');
  const firstHalf = titleLines.slice(0, Math.ceil(titleLines.length / 2)).join(' ');
  const secondHalf = titleLines.slice(Math.ceil(titleLines.length / 2)).join(' ');

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex items-center bg-white text-zinc-900 overflow-hidden py-24 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="flex flex-col items-start"
          >
            {/* Eyebrow Label */}
            <motion.span
              variants={revealVariants}
              className="text-pink-primary text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6"
            >
              Section {number} • {logData.title}
            </motion.span>

            {/* Masked Headline Reveal */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-zinc-950"
              >
                {firstHalf}
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8 md:mb-10">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-pink-primary italic"
              >
                {secondHalf}
              </motion.h2>
            </div>

            {/* Supporting Paragraph */}
            <motion.p
              variants={revealVariants}
              className="text-zinc-600 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light"
            >
              {description}
            </motion.p>

            {/* Feature Mini Cards */}
            <motion.div 
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4 w-full mb-12"
            >
              {logData.results.map((result, index) => (
                <motion.div
                  key={index}
                  variants={revealVariants}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                  className="group p-5 bg-zinc-50 rounded-2xl border border-zinc-100 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="mt-1 text-pink-primary group-hover:rotate-12 transition-transform duration-300">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-sm md:text-base text-zinc-700 font-medium leading-tight">
                    {result}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={revealVariants} className="flex flex-wrap items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 0, 170, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-pink-primary text-white font-bold tracking-[0.2em] text-xs uppercase rounded-full transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-zinc-400 hover:text-pink-primary font-bold tracking-[0.2em] text-xs uppercase transition-colors duration-300"
              >
                View Case Study
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: yParallax }}
            className="relative w-full aspect-square md:aspect-auto md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-200/50"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle floating decorative element */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-24 h-24 bg-pink-primary/10 backdrop-blur-md rounded-3xl border border-white/20"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
