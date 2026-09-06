import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { bodyTextVariants } from './variants';
import { DURATION, STAGGER, VIEWPORT } from './motionConfig';

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
  viewport = VIEWPORT,
  trigger
}) {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);

  const MotionComponent = motion[Component] || motion.p;
  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    return <Component className={`reveal-body-static ${className}`}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={`reveal-body-root ${className}`}
      variants={bodyTextVariants}
      initial="hidden"
      {...(isControlled
        ? { animate: trigger ? 'visible' : 'hidden' }
        : {
            whileInView: 'visible',
            viewport: viewport || VIEWPORT
          })}
      custom={{ delay, duration, y }}
    >
      {children}
    </MotionComponent>
  );
}
