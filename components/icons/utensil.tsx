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

const UtensilsIcon = () => {
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
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M7 2v20"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
        />
      </svg>
    </div>
  );
};

export { UtensilsIcon };

