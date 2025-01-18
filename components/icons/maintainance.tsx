'use client';

import type { Transition } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const ToolIcon = () => {
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
        viewBox="14.31325912475586 14.312702178955078 35.373477935791016 35.37459945678711"
        fill="none"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M44.76,28.603c0.411,0.044,0.82-0.101,1.113-0.393l2.913-2.913c0.405-0.405,0.515-1.019,0.275-1.54l-0.776-1.687c-0.398-0.865-1.537-1.069-2.211-0.396l-0.97,0.97c-1.035,1.035-2.714,1.035-3.749,0c-1.035-1.035-1.035-2.714,0-3.749l0.97-0.97c0.674-0.674,0.47-1.813-0.396-2.211l-1.687-0.776c-0.52-0.239-1.135-0.13-1.54,0.275l-2.913,2.913c-0.292,0.292-0.437,0.702-0.393,1.113l0.565,5.298L24.538,35.962l-5.298-0.565c-0.411-0.044-0.82,0.101-1.113,0.393l-2.913,2.913c-0.405,0.405-0.515,1.019-0.275,1.54l0.776,1.687c0.398,0.865,1.537,1.069,2.211,0.396l0.97-0.97c1.035-1.035,2.714-1.035,3.749,0c1.035,1.035,1.035,2.714,0,3.749l-0.97,0.97c-0.674,0.674-0.47,1.813,0.396,2.211l1.687,0.776c0.52,0.239,1.135,0.13,1.54-0.275l2.913-2.913c0.292-0.292,0.437-0.702,0.393-1.113l-0.565-5.298l11.425-11.425L44.76,28.603z"
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
          d="M47.401,42.779L24.983,22.624l-0.426-1.775c-0.257-1.071-0.922-2-1.854-2.588l-3.978-2.511c-0.854-0.482-1.925-0.336-2.618,0.357l0,0c-0.693,0.693-0.84,1.764-0.357,2.618l2.511,3.978c0.588,0.931,1.517,1.597,2.588,1.854l1.775,0.426l20.155,22.418c1.245,1.438,3.449,1.517,4.794,0.172C48.918,46.228,48.839,44.024,47.401,42.779z"
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
          x1="40.528"
          y1="36.6"
          x2="36.613"
          y2="40.516"
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

export { ToolIcon };

