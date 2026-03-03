import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  number: string;
  title: string;
  description: string;
  bgColor: string;
  logData: {
    title: string;
    quote: string;
    stats: { label: string; value: string }[];
    results: string[];
  };
}

export const FanEngagementSection: React.FC<SectionProps> = ({
  id,
  number,
  title,
  description,
  bgColor,
  logData,
}) => {
  // Simple SVG Line Chart component
  const LineChart = () => (
    <div className="w-full h-32 mt-8 relative">
      <svg viewBox="0 0 400 100" className="w-full h-full">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0,80 L40,75 L80,85 L120,70 L160,78 L200,60 L240,65 L280,45 L320,55 L360,30 L400,10"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          d="M0,80 L40,75 L80,85 L120,70 L160,78 L200,60 L240,65 L280,45 L320,55 L360,30 L400,10 L400,100 L0,100 Z"
          fill="url(#chartGradient)"
        />
      </svg>
    </div>
  );

  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex items-center py-24 md:py-32 snap-start overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-white mb-8">
              Proven Track Record of <span className="italic">Excellence</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-md mb-12 font-light">
              {description} We deliver consistent growth and unparalleled fan satisfaction.
            </p>

            <LineChart />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Main Hero Stat */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-7xl md:text-9xl font-serif font-bold text-white mb-2"
              >
                {logData.stats[1].value}
              </motion.div>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase font-medium">
                Average Fan Lifetime Value
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  {logData.stats[0].value}
                </span>
                <span className="text-white/50 text-xs tracking-[0.1em] uppercase font-medium">
                  Response Time
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  24/7
                </span>
                <span className="text-white/50 text-xs tracking-[0.1em] uppercase font-medium">
                  Management
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  98%
                </span>
                <span className="text-white/50 text-xs tracking-[0.1em] uppercase font-medium">
                  Fan Satisfaction
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  ~6+
                </span>
                <span className="text-white/50 text-xs tracking-[0.1em] uppercase font-medium">
                  Years Experience
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
