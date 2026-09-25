import React from 'react';
import { m } from 'framer-motion';
import { staggerContainerVariants } from './variants';
import { useInViewObserver } from './useInViewObserver';

export default function Stagger({
  children,
  className = '',
  as: Component = 'div',
  stagger = 0.08,
  delay = 0,
  trigger
}) {
  const [ref, isInView] = useInViewObserver({ once: true, amount: 0.15 });
  const MotionComponent = m[Component] || m.div;
  const isControlled = typeof trigger === 'boolean';

  return (
    <MotionComponent
      ref={ref}
      className={`motion-stagger-group ${className}`}
      variants={staggerContainerVariants}
      initial="hidden"
      animate={isControlled ? (trigger ? 'visible' : 'hidden') : (isInView ? 'visible' : 'hidden')}
      custom={{ stagger, delay }}
    >
      {children}
    </MotionComponent>
  );
}
