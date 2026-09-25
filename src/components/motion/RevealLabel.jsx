import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { labelVariants } from './variants';
import { DURATION } from './motionConfig';
import { useInViewObserver } from './useInViewObserver';

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
  viewport,
  trigger
}) {
  const [ref, isInView] = useInViewObserver({ 
    once: viewport?.once ?? true, 
    amount: viewport?.amount ?? 0.15 
  });
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);

  const MotionComponent = m[Component] || m.span;
  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    return <Component className={`reveal-label-static ${className}`}>{children}</Component>;
  }

  return (
    <MotionComponent
      ref={ref}
      className={`reveal-label-root ${className}`}
      variants={labelVariants}
      initial="hidden"
      animate={isControlled ? (trigger ? 'visible' : 'hidden') : (isInView ? 'visible' : 'hidden')}
      custom={{ delay, duration }}
    >
      {children}
    </MotionComponent>
  );
}
