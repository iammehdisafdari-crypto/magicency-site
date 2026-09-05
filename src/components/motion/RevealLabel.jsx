import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { labelVariants } from './variants';
import { DURATION, VIEWPORT } from './motionConfig';

/**
 * =========================================================
 * RevealLabel Component
 * Subtle, minimal motion for badges, small eyebrow tags,
 * category markers, and metadata (y: 8px -> 0, opacity: 0 -> 1).
 * =========================================================
 */
export default function RevealLabel({
  children,
  className = '',
  as: Component = 'span',
  delay = 0,
  duration = DURATION.LABEL,
  viewport = VIEWPORT,
  trigger
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const MotionComponent = motion[Component] || motion.span;
  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    return <Component className={`reveal-label-static ${className}`}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={`reveal-label-root ${className}`}
      variants={labelVariants}
      initial="hidden"
      {...(isControlled
        ? { animate: trigger ? 'visible' : 'hidden' }
        : {
            whileInView: 'visible',
            viewport: viewport || VIEWPORT
          })}
      custom={{ delay, duration }}
    >
      {children}
    </MotionComponent>
  );
}
