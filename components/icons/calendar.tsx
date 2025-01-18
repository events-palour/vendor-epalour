'use client';

import type { Transition } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const CalendarIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="11.773000717163086 11.194999694824219 40.454002380371094 40.11000061035156"
        fill="none"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M39.537,50.805H22.391c-5.588,0-10.118-4.53-10.118-10.118V26.935c0-5.588,4.53-10.118,10.118-10.118h19.218c5.588,0,10.118,4.53,10.118,10.118v12.052c0,1.086-0.444,2.125-1.23,2.875l-8.215,7.844C41.542,50.411,40.559,50.805,39.537,50.805z"
          fill="#FFFFFF"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M49.963,39.756h-5.76c-2.182,0-3.951,1.769-3.951,3.951v5.371c0,0.963,1.154,1.457,1.851,0.792l8.616-8.226C51.433,40.961,50.95,39.756,49.963,39.756z"
          fill="#FFFFFF"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M25.169,11.695c-0.827,0-1.5,0.673-1.5,1.5v7.731c0,0.827,0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5v-7.731C26.669,12.368,25.997,11.695,25.169,11.695z"
          fill="#FFFFFF"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M37.556,11.695c-0.827,0-1.5,0.673-1.5,1.5v7.731c0,0.827,0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5v-7.731C39.056,12.368,38.383,11.695,37.556,11.695z"
          fill="#FFFFFF"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="22.614"
          y1="34.182"
          x2="28.049"
          y2="34.182"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="36.302"
          y1="34.182"
          x2="41.737"
          y2="34.182"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="22.614"
          y1="41.345"
          x2="28.049"
          y2="41.345"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="13.257"
          y1="26.875"
          x2="50.728"
          y2="26.875"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M25.169,13.195v7.731"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="37.556"
          y1="20.889"
          x2="37.556"
          y2="13.195"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
      </svg>
    </div>
  );
};

export { CalendarIcon };

