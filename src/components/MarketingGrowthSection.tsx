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
            <div className="space-y-6 mb-12 max-w-xl">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center gap-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Our Partners
            </motion.button>

            {/* Infinite Marquee */}
            <div className="w-full max-w-md overflow-hidden relative py-4">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 opacity-50" style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }} />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 opacity-50" style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }} />
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-16"
              >
                {[...logos, ...logos, ...logos].map((logo, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/20 font-bold tracking-tighter text-2xl">
                    {logo.icon}
                    <span>{logo.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

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
              <span className="text-yellow-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                Our goal
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
                At Bramingham, we're not here for quick wins or hype. We're building something bigger: <span className="italic text-yellow-400">real financial freedom</span> for women who create, on their terms.
              </h3>
              <div className="space-y-4 max-w-md">
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
                  Our mission is simple yet massive:
                </p>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  Help every model we work with smash into the <span className="text-white font-medium">top 1%</span> (where the real money lives – up to 33% of platform revenue) and beyond, anonymously if that's your choice.
                </p>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
