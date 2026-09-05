import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { maskedLineVariants } from './variants';
import { DURATION, VIEWPORT } from './motionConfig';

/**
 * =========================================================
 * RevealLine Component
 * Overflow-hidden container wrapping an individual line
 * with custom JSX/typography elements.
 * =========================================================
 */
export default function RevealLine({
  children,
  className = '',
  delay = 0,
  duration = DURATION.HEADLINE,
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

  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    return <span className={`motion-line-static ${className}`}>{children}</span>;
  }

  return (
    <span
      className={`motion-line-mask ${className}`}
      style={{
        display: 'block',
        overflow: 'hidden',
        lineHeight: 'inherit'
      }}
    >
      <motion.span
        style={{
          display: 'inline-block',
          willChange: 'transform, opacity'
        }}
        variants={maskedLineVariants}
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
      </motion.span>
    </span>
  );
}
