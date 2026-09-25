import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { maskedLineVariants } from './variants';
import { DURATION } from './motionConfig';
import { useInViewObserver } from './useInViewObserver';

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
  viewport,
  trigger
}) {
  const [ref, isInView] = useInViewObserver({ 
    once: viewport?.once ?? true, 
    amount: viewport?.amount ?? 0.15 
  });
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);

  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    return <span className={`motion-line-static ${className}`}>{children}</span>;
  }

  return (
    <span
      ref={ref}
      className={`motion-line-mask ${className}`}
      style={{
        display: 'block',
        overflow: 'hidden',
        lineHeight: 'inherit'
      }}
    >
      <m.span
        style={{
          display: 'inline-block',
          willChange: 'transform, opacity'
        }}
        variants={maskedLineVariants}
        initial="hidden"
        animate={isControlled ? (trigger ? 'visible' : 'hidden') : (isInView ? 'visible' : 'hidden')}
        custom={{ delay, duration }}
      >
        {children}
      </m.span>
    </span>
  );
}
