import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Zap, Target, TrendingUp, BarChart } from 'lucide-react';
import { GrowthStats } from './GrowthStats';

interface SectionProps {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl?: string;
  bgColor: string;
  logData: {
    title: string;
    quote: string;
    stats: { label: string; value: string }[];
    results: string[];
  };
}

export const MarketingGrowthSection: React.FC<SectionProps> = ({
  id,
  number,
  title,
  description,
  imageUrl,
  bgColor,
  logData,
}) => {
  const logos = [
    { name: 'Airtable', icon: <Globe size={20} /> },
    { name: 'TIDAL', icon: <Zap size={20} /> },
    { name: 'Slack', icon: <Target size={20} /> },
    { name: 'VISA', icon: <TrendingUp size={20} /> },
    { name: 'todoist', icon: <BarChart size={20} /> },
  ];

  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex flex-col items-center py-24 md:py-32 snap-start overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Subtle Star Particles Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Top Hero-style Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-white mb-8">
              OnlyFans isn't a get rich quick lottery for everyone.
            </h2>
            <div className="space-y-6 mb-12 max-w-lg">
              <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                The platform average sits around £100–£150 a month without strategy, support, or scale.
              </p>
              <p className="text-yellow-400 text-xl md:text-2xl leading-relaxed font-bold italic">
                The women I work with? They're hitting £20k, £50k, even £80k+ per month once we dial it in.
              </p>
              <div className="pt-8">
                <GrowthStats />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {imageUrl && (
              <div className="flex flex-col items-center gap-12">
                <div className="relative w-full max-w-md aspect-square">
                  <motion.img
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    src={imageUrl}
                    alt="Abstract Growth Graphic"
                    className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,105,180,0.3)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  Our Partners
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-white font-bold tracking-tighter text-2xl">
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 border border-white/10 overflow-hidden relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-pink-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                Our goal
              </span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                Empowering creators through <span className="italic">Marketing</span> Excellence
              </h3>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-12 max-w-md">
                Our goal is simple yet ambitious: to empower creators of all sizes and industries to unlock their full potential through the transformative power of strategic growth.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest transition-all"
              >
                Try it for free
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </motion.button>
            </div>

            <div className="relative flex justify-center">
              <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-blue-400 to-pink-400 rounded-full opacity-80 blur-3xl absolute inset-0 animate-pulse" />
              <div className="relative z-10 w-full max-w-sm aspect-square bg-white/10 rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
                <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="w-3/4 h-3/4 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center"
                >
                   <div className="w-1/2 h-1/2 bg-white/20 rounded-3xl rotate-45" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
