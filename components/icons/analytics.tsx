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

const AnalyticsIcon = () => {
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
        width="28"
        height="28"
        viewBox="17.477 14.31 29.045 35.381"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M24.099,14.81h15.801c3.381,0,6.122,2.741,6.122,6.122v22.137c0,3.381-2.741,6.122-6.122,6.122H24.099c-3.381,0-6.122-2.741-6.122-6.122V20.932C17.978,17.551,20.718,14.81,24.099,14.81z"
        />
        <motion.line
          variants={pathVariants}
          initial="normal"
          animate={controls}
          x1="25" y1="37.038" x2="32" y2="37.038"
        />
        <motion.line
          variants={pathVariants}
          initial="normal"
          animate={controls}
          x1="25" y1="42.288" x2="35.5" y2="42.288"
        />
        <motion.polyline
          variants={pathVariants}
          initial="normal"
          animate={controls}
          points="25,29.341 28.5,24.788 32.795,29.341 39,23.135"
        />
        <motion.polyline
          variants={pathVariants}
          initial="normal"
          animate={controls}
          points="39,28.306 39,23.135 33.829,23.135"
        />
      </svg>
    </div>
  );
};

export { AnalyticsIcon };

