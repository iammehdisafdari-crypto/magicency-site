import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants } from './variants';

export default function Stagger({
  children,
  className = '',
  as: Component = 'div',
  stagger = 0.08,
  delay = 0,
  trigger
}) {
  const MotionComponent = motion[Component] || motion.div;
  const isControlled = typeof trigger === 'boolean';

  return (
    <MotionComponent
      className={`motion-stagger-group ${className}`}
      variants={staggerContainerVariants}
      initial="hidden"
      {...(isControlled
        ? { animate: trigger ? 'visible' : 'hidden' }
        : {
            whileInView: 'visible',
            viewport: { once: true, amount: 0.15 }
          })}
      custom={{ stagger, delay }}
    >
      {children}
    </MotionComponent>
  );
}
