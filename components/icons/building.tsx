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

const BuildingIcon = () => {
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
        <motion.rect
          width="16"
          height="20"
          x="4"
          y="2"
          rx="2"
          ry="2"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M9 22v-4h6v4"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M8 6h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M16 6h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M12 6h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M12 10h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M12 14h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M16 10h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M16 14h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M8 10h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <motion.path
          d="M8 14h.01"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { BuildingIcon };

