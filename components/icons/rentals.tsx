'use client';

import type { Transition } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const ChecklistIcon = () => {
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
        viewBox="17.00080108642578 13.519399642944336 29.998397827148438 36.961097717285156"
        fill="none"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M40.5164,16.8201c3.3088,0,5.9828,2.6741,5.9828,5.9828v21.1948c0,3.3088-2.6741,5.9828-5.9828,5.9828H23.4836c-3.3088,0-5.9828-2.6741-5.9828-5.9828V22.8029c0-3.3088,2.6741-5.9828,5.9828-5.9828H40.5164z"
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
          d="M37.5908,16.8808L37.5908,16.8808c0-1.5803-1.2811-2.8614-2.8613-2.8614h-5.6577c-1.5803,0-2.8613,1.2811-2.8613,2.8613v0c0,1.5803,1.2811,2.8613,2.8613,2.8613h5.6577C36.3098,19.7422,37.5908,18.4611,37.5908,16.8808z"
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
          x1="23.2273"
          y1="28.4563"
          x2="40.7123"
          y2="28.4563"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="23.2273"
          y1="34.7643"
          x2="40.7123"
          y2="34.7643"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="28.5"
          y1="40.8772"
          x2="35.5"
          y2="40.8772"
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

export { ChecklistIcon };

