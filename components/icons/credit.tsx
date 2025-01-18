'use client';

import type { Transition } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const CreditCardIcon = () => {
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
        viewBox="13.999999046325684 17.5 36 29"
        fill="none"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M39.419,39.872H20.373c-3.244,0-5.873-2.63-5.873-5.873V23.873C14.5,20.63,17.13,18,20.373,18h19.045c3.244,0,5.873,2.63,5.873,5.873v10.125C45.292,37.243,42.663,39.872,39.419,39.872z"
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
          d="M43.627,46H24.581c-3.244,0-5.873-2.63-5.873-5.873V30.001c0-3.244,2.63-5.873,5.873-5.873h19.045c3.244,0,5.873,2.63,5.873,5.873v10.125C49.5,43.37,46.87,46,43.627,46z"
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
          x1="49.5"
          y1="33.75"
          x2="18.708"
          y2="33.75"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="49.5"
          y1="39"
          x2="18.708"
          y2="39"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="23.682"
          y1="28.5"
          x2="28.5"
          y2="28.5"
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

export { CreditCardIcon };

