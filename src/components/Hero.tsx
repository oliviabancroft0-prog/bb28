import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

import { DragonButton } from './DragonButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/448620471_1120898959206141_6879917844997512699_n.webp"
          alt="Bramingham Barely Hero"
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 md:mt-32 flex justify-center"
        >
          <DragonButton />
        </motion.div>
      </div>
    </section>
  );
};
