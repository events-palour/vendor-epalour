'use client';

import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const MicrophoneIcon = () => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start('animate');
  };

  const handleMouseLeave = () => {
    controls.start('normal');
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M19 10v2a7 7 0 0 1-14 0v-2"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.line
          x1="12"
          x2="12"
          y1="19"
          y2="22"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { MicrophoneIcon };

