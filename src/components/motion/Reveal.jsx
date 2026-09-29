import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { editorialVariants } from './variants';
import { useInViewObserver } from './useInViewObserver';

export default function Reveal({
  children,
  className = '',
  as: Component = 'div',
  delay = 0,
  duration,
  y = 24,
  trigger
}) {
  const [ref, isInView] = useInViewObserver({ once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = m[Component] || m.div;
  const isControlled = typeof trigger === 'boolean';

  if (shouldReduceMotion) {
    return (
      <Component className={`motion-reveal ${className}`}>
        {children}
      </Component>
    );
  }

  return (
    <MotionComponent
      ref={ref}
      className={`motion-reveal reveal-initial ${className}`}
      variants={editorialVariants}
      initial={false}
      animate={isControlled ? (trigger ? 'visible' : 'hidden') : (isInView ? 'visible' : 'hidden')}
      custom={{ delay, duration, y }}
    >
      {children}
    </MotionComponent>
  );
}
