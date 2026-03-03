import React from 'react';
import { motion } from 'motion/react';

interface StatItemProps {
  label: string;
  value: string;
  sublabel: string;
  percentage: number;
  description: string;
  isComparison?: boolean;
  comparisonValue?: string;
  comparisonLabel?: string;
}

const StatCircle: React.FC<{ percentage: number; value: string; label: string; size?: "sm" | "md" }> = ({ 
  percentage, 
  value, 
  label,
  size = "md"
}) => {
  const radius = size === "md" ? 40 : 30;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;
  const containerSize = size === "md" ? "w-24 h-24 md:w-32 md:h-32" : "w-20 h-20 md:w-24 md:h-24";

  return (
    <div className={`relative ${containerSize} flex items-center justify-center`}>
      <svg className="absolute w-full h-full -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          className="fill-white/5 stroke-white/10"
          strokeWidth="2"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          className="fill-none stroke-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
          strokeWidth="3"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - progress }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          strokeLinecap="round"
        />
      </svg>
      <div className="text-center z-10 px-2">
        <span className={`${size === "md" ? "text-lg md:text-2xl" : "text-sm md:text-lg"} font-bold text-white block leading-none`}>
          {value}
        </span>
        <span className="text-[6px] md:text-[8px] font-bold tracking-[0.1em] text-white/40 uppercase mt-1 block">
          {label}
        </span>
      </div>
    </div>
  );
};

export const GrowthStats: React.FC = () => {
  const stats = [
    {
      label: "Average vs Our Models",
      isComparison: true,
      value: "£50k+",
      sublabel: "Our Models",
      percentage: 100,
      comparisonValue: "£150",
      comparisonLabel: "Average",
      description: "Most creators earn just £150–£180 monthly. Our anonymous creators smash way beyond the average."
    },
    {
      label: "Revenue Share Dominance",
      value: "76%",
      sublabel: "Top 0.1% Capture",
      percentage: 76,
      description: "The elite take the lion's share. We position models to join that top tier sustainably."
    },
    {
      label: "Revenue Concentration",
      value: "33%",
      sublabel: "Top 1% Earn",
      percentage: 33,
      description: "Proof the big money is at the top. We help models break into consistent six-figure months."
    },
    {
      label: "Agency Valuation Flex",
      value: "$4.3M",
      sublabel: "Asset Based",
      percentage: 100,
      description: "Our valuation is based on assets and proprietary software. Audit done by Deloitte."
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-10 py-8">
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-6 md:gap-8">
            {stat.isComparison ? (
              <div className="flex items-center gap-3">
                <StatCircle percentage={5} value={stat.comparisonValue!} label={stat.comparisonLabel!} size="sm" />
                <div className="w-6 h-[1px] bg-white/20" />
                <StatCircle percentage={stat.percentage} value={stat.value} label={stat.sublabel} size="md" />
              </div>
            ) : (
              <StatCircle percentage={stat.percentage} value={stat.value} label={stat.sublabel} />
            )}
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">{stat.label}</h4>
              <p className="text-white/40 text-xs leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
