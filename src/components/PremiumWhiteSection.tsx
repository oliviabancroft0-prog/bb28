import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Eye, Zap, ShieldCheck, CreditCard, TrendingUp } from 'lucide-react';

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
  imageUrl,
}) => {
  return (
    <section
      id={id}
      className="relative min-h-screen w-full bg-white text-zinc-900 overflow-hidden py-24 md:py-32 snap-start flex flex-col"
    >
      <div className="container mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center">
        {/* Top Section: Hero Split */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          
          {/* Left: Heading & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-8 px-4 py-2 bg-zinc-100 rounded-full">
              <div className="w-5 h-5 bg-pink-primary rounded-full flex items-center justify-center">
                <Star size={12} className="text-white" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                UK's Biggest & Boldest Agency
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tight text-zinc-950 mb-12">
              Domination <br />
              Done <br />
              Smoothly
            </h2>

            <div className="flex items-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-zinc-900 text-white font-bold tracking-[0.2em] text-xs uppercase rounded-2xl"
              >
                Get Started
              </motion.button>
              <button className="flex items-center gap-2 text-zinc-900 font-bold tracking-widest text-xs uppercase border-b-2 border-zinc-900 pb-1">
                Our Tech
              </button>
            </div>
          </motion.div>

          {/* Right: Portrait & Floating Cards */}
          <div className="relative">
            {/* Main Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full overflow-hidden shadow-2xl rounded-3xl"
            >
              <img 
                src={imageUrl} 
                className="w-full h-auto block" 
                alt="Olivia"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Grid Pattern Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-10 pointer-events-none z-0">
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>
          </div>
        </div>

        {/* Bottom Section: Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-end pt-20 border-t border-zinc-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-2xl md:text-3xl font-serif leading-tight text-zinc-900">
              Place your trust <Star size={24} className="inline text-pink-primary mx-2" /> in us to provide 
              a seamless and hassle-free <Eye size={24} className="inline text-zinc-400 mx-2" /> experience 
              as you navigate the world of <TrendingUp size={24} className="inline text-zinc-900 mx-2" /> premium insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: <ShieldCheck size={20} />, text: "Discreet & Secure Management" },
              { icon: <Zap size={20} />, text: "Proprietary Growth Algorithms" },
              { icon: <CreditCard size={20} />, text: "Automated Revenue Optimization" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-4">
                  <div className="text-zinc-400 group-hover:text-pink-primary transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-zinc-600 group-hover:text-zinc-950 transition-colors">
                    {item.text}
                  </span>
                </div>
                <ArrowRight size={16} className="text-zinc-300 group-hover:translate-x-2 transition-transform" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

