import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ElevationLogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    quote: string;
    stats: { label: string; value: string }[];
    results: string[];
  };
}

export const ElevationLog: React.FC<ElevationLogProps> = ({ isOpen, onClose, data }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-glass z-[70] p-8 md:p-12 flex flex-col overflow-y-auto no-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white/50 hover:text-pink-primary transition-colors"
            >
              <X size={32} />
            </button>

            <div className="mt-12">
              <span className="text-pink-primary text-xs tracking-[0.3em] font-bold uppercase">Elevation Log</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 leading-tight">{data.title}</h2>
              
              <div className="mt-12 space-y-12">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-pink-primary/20 font-serif">"</span>
                  <p className="text-xl text-white/80 italic font-serif leading-relaxed">
                    {data.quote}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {data.stats.map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-[10px] text-white/40 tracking-widest uppercase">{stat.label}</p>
                      <p className="text-2xl font-bold text-pink-primary">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] text-white/40 tracking-widest uppercase">Key Deliverables</p>
                  <ul className="space-y-3">
                    {data.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-primary mt-1.5 shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">
              <button className="w-full py-4 bg-pink-primary text-white font-bold tracking-[0.2em] text-xs hover:bg-pink-primary/80 transition-colors">
                APPLY FOR REPRESENTATION
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
