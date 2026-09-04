import React from 'react';
import { motion } from 'framer-motion';
import { maskedLineVariants } from './variants';

export default function TextReveal({
  children,
  className = '',
  as: Component = 'div',
  delay = 0,
  duration,
  stagger = 0.08,
  trigger = true
}) {
  // If children is a string with line breaks or an array of lines
  const lines = Array.isArray(children)
    ? children
    : typeof children === 'string'
    ? children.split('\n')
    : [children];

  return (
    <Component className={`motion-text-reveal-container ${className}`}>
      {lines.map((line, idx) => (
        <span
          key={idx}
          className="motion-text-mask"
          style={{
            display: 'block',
            overflow: 'hidden',
            lineHeight: 'inherit'
          }}
        >
          <motion.span
            style={{ display: 'inline-block', willChange: 'transform, opacity' }}
            variants={maskedLineVariants}
            initial="hidden"
            animate={trigger ? 'visible' : 'hidden'}
            custom={{
              delay: delay + idx * stagger,
              duration
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
