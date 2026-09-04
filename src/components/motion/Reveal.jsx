import React from 'react';
import { motion } from 'framer-motion';
import { editorialVariants } from './variants';

export default function Reveal({
  children,
  className = '',
  as: Component = 'div',
  delay = 0,
  duration,
  y = 24,
  trigger
}) {
  const MotionComponent = motion[Component] || motion.div;

  // If trigger prop is passed, use controlled animation; otherwise use whileInView
  const isControlled = typeof trigger === 'boolean';

  return (
    <MotionComponent
      className={`motion-reveal ${className}`}
      variants={editorialVariants}
      initial="hidden"
      {...(isControlled
        ? { animate: trigger ? 'visible' : 'hidden' }
        : {
            whileInView: 'visible',
            viewport: { once: true, amount: 0.15 }
          })}
      custom={{ delay, duration, y }}
    >
      {children}
    </MotionComponent>
  );
}
