import React from 'react';
import { m } from 'framer-motion';
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
  const MotionComponent = m[Component] || m.div;
  const isControlled = typeof trigger === 'boolean';

  return (
    <MotionComponent
      ref={ref}
      className={`motion-reveal ${className}`}
      variants={editorialVariants}
      initial="hidden"
      animate={isControlled ? (trigger ? 'visible' : 'hidden') : (isInView ? 'visible' : 'hidden')}
      custom={{ delay, duration, y }}
    >
      {children}
    </MotionComponent>
  );
}
