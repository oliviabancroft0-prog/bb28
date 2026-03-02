import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Users, BarChart3, Zap, Database, Instagram, Twitter, Youtube } from 'lucide-react';

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
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    { icon: <Users size={24} />, title: 'INFLUENCERS', desc: '72% of the students attended on scholarship', color: 'text-blue-500' },
    { icon: <BarChart3 size={24} />, title: 'ROI', desc: '20% of its student body is currently under scholarship', color: 'text-cyan-500' },
    { icon: <Zap size={24} />, title: 'SCALE', desc: 'More than 1000 scholarships have been awarded', color: 'text-emerald-500' },
    { icon: <Database size={24} />, title: 'DATABASE', desc: 'Anatolia College has always relied on donations', color: 'text-purple-500' },
  ];

  return (
    <section
      id={id}
      className="relative min-h-screen w-full bg-white text-zinc-900 overflow-hidden py-24 md:py-32 snap-start"
    >
      {/* Background Decorative Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50/50 -skew-x-12 translate-x-1/4 pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Top Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          
          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="flex flex-col items-start"
          >
            <motion.h2
              variants={revealVariants}
              className="text-4xl md:text-6xl font-serif font-bold leading-tight text-zinc-950 mb-8"
            >
              Bramingham: <span className="text-pink-primary italic">All-in-One</span> Content Mastery Done Right
            </motion.h2>

            <motion.p
              variants={revealVariants}
              className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-md mb-12 font-light"
            >
              Identify, recruit & activate the world's most engaging social influencers.
            </motion.p>

            <motion.button
              variants={revealVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 0, 170, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-pink-primary text-white font-bold tracking-[0.2em] text-xs uppercase rounded-full flex items-center gap-3"
            >
              Get Started
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Right Column: Image with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-zinc-200/50 bg-white">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Social Icons */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 left-10 z-20 w-12 h-12 bg-cyan-400 text-white rounded-2xl flex items-center justify-center shadow-lg rotate-12"
            >
              <Twitter size={20} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-6 z-20 w-12 h-12 bg-purple-500 text-white rounded-2xl flex items-center justify-center shadow-lg -rotate-12"
            >
              <Instagram size={20} />
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 -left-6 z-20 w-12 h-12 bg-pink-500 text-white rounded-2xl flex items-center justify-center shadow-lg rotate-6"
            >
              <Youtube size={20} />
            </motion.div>
          </motion.div>
        </div>

        {/* Middle Centered Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-32"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-6">
            Take control of your influencer program.
          </h3>
          <p className="text-zinc-500 text-lg font-light">
            Helping talented creators unlock their full potential through strategic management and elite production.
          </p>
        </motion.div>

        {/* Bottom Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={revealVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-zinc-50 group-hover:bg-white group-hover:shadow-xl transition-all duration-300 ${feature.color}`}>
                {feature.icon}
              </div>
              <h4 className="text-xs font-bold tracking-[0.3em] text-zinc-900 mb-4 uppercase">
                {feature.title}
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <button className="text-pink-primary text-[10px] font-bold tracking-[0.4em] uppercase hover:tracking-[0.5em] transition-all duration-300 flex items-center gap-2 mx-auto">
            Check out all the features <ArrowRight size={12} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
