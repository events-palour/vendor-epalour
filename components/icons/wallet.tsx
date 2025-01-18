'use client';

import { Wallet } from 'lucide-react';
import { motion, useAnimation } from 'motion/react';
import type { Transition } from 'motion/react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const WalletIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <motion.div
        initial={false}
        animate={controls}
        variants={{
          normal: { scale: 1 },
          animate: { scale: 1.1 },
        }}
        transition={defaultTransition}
      >
        <Wallet
          size={24}
          strokeWidth={2}
          className="text-black"
        />
      </motion.div>
    </div>
  );
};

export { WalletIcon };

