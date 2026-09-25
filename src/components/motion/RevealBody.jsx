import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { bodyTextVariants } from './variants';
import { DURATION, STAGGER } from './motionConfig';
import { useInViewObserver } from './useInViewObserver';

/**
 * =========================================================
 * RevealBody Component
 * Subtle, sophisticated motion for paragraphs, descriptions,
 * and editorial body copy (opacity: 0 -> 1, translateY: 12px -> 0).
 * =========================================================
 */
export default function RevealBody({
  children,
  className = '',
  as: Component = 'p',
  delay = STAGGER.BODY_DELAY,
  duration = DURATION.BODY,
  y = 12,
  viewport,
  trigger
}) {
  const [ref, isInView] = useInViewObserver({ 
    once: viewport?.once ?? true, 
    amount: viewport?.amount ?? 0.15 
  });
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);

  const MotionComponent = m[Component] || m.p;
  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    return <Component className={`reveal-body-static ${className}`}>{children}</Component>;
  }

  return (
    <MotionComponent
      ref={ref}
      className={`reveal-body-root ${className}`}
      variants={bodyTextVariants}
      initial="hidden"
      animate={isControlled ? (trigger ? 'visible' : 'hidden') : (isInView ? 'visible' : 'hidden')}
      custom={{ delay, duration, y }}
    >
      {children}
    </MotionComponent>
  );
}
