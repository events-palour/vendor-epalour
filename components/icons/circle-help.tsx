'use client';

import type { Transition } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const CircleHelpIcon = () => {
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
        x="0px"
        y="0px"
        viewBox="12.249774932861328 11.960000038146973 39.50045394897461 40.08000183105469"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
       <motion.path
          d="M42.5,30.296v-4.661c0-3.896-3.159-7.055-7.055-7.055h-6.89c-3.896,0-7.055,3.159-7.055,7.055v4.661"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M39,50.08L39,50.08c1.933,0,3.5-1.567,3.5-3.5v-2.477"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M19.653,44.103c-3.883,0-7.018-3.206-6.9-7.116c0.113-3.778,3.41-6.691,7.19-6.691l1.279,0c1.12,0,2.028,0.908,2.028,2.028v9.75c0,1.12-0.908,2.028-2.028,2.028H19.653z"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M44.347,44.103c3.883,0,7.018-3.206,6.9-7.116c-0.113-3.778-3.41-6.691-7.19-6.691l-1.279,0c-1.12,0-2.028,0.908-2.028,2.028v9.75c0,1.12,0.908,2.028,2.028,2.028H44.347z"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M30.838,12.46h8.427c2.753,0,4.985,2.232,4.985,4.985v2.16c0,2.753-2.232,4.985-4.985,4.985h-8.627c-0.243,0-0.44,0.197-0.44,0.44v0.033c0,1.135-0.829,2.148-1.959,2.255c-1.296,0.124-2.386-0.892-2.386-2.162v-5.552v-1.088v-1.072C25.853,14.692,28.085,12.46,30.838,12.46z"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M38.031,51.54H36.38c-0.535,0-0.969-0.434-0.969-0.969v-1.272c0-0.535,0.434-0.969,0.969-0.969h1.652c0.535,0,0.969,0.434,0.969,0.969v1.272C39,51.106,38.566,51.54,38.031,51.54z"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="39.54"
          y1="18.58"
          x2="39.54"
          y2="18.58"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="35.082"
          y1="18.58"
          x2="35.082"
          y2="18.58"
          initial={false}
          variants={{
            normal: { pathLength: 1 },
            animate: { pathLength: 0.8 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.line
          x1="30.625"
          y1="18.58"
          x2="30.625"
          y2="18.58"
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

export { CircleHelpIcon };