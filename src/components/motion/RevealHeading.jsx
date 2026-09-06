import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { maskedLineVariants } from './variants';
import { DURATION, STAGGER, VIEWPORT } from './motionConfig';

/**
 * =========================================================
 * RevealHeading Component
 * Line-based masked typography reveal for major headings.
 * Concept: Each visual line starts below its visible clipping area
 * and smoothly reveals with cubic-bezier(0.22, 1, 0.36, 1).
 * =========================================================
 */
export default function RevealHeading({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
  duration = DURATION.HEADLINE,
  stagger = STAGGER.HEADLINE_LINE,
  viewport = VIEWPORT,
  trigger
}) {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);

  // Normalize children into an array of lines if string with \n or array
  const lines = Array.isArray(children)
    ? children
    : typeof children === 'string'
    ? children.split('\n')
    : [children];

  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    return (
      <Component className={`reveal-heading-static ${className}`}>
        {children}
      </Component>
    );
  }

  return (
    <Component className={`reveal-heading-root ${className}`}>
      {lines.map((line, idx) => (
        <span
          key={idx}
          className="motion-line-mask"
          style={{
            display: 'block',
            overflow: 'hidden',
            lineHeight: 'inherit'
          }}
        >
          <motion.span
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity'
            }}
            variants={maskedLineVariants}
            initial="hidden"
            {...(isControlled
              ? { animate: trigger ? 'visible' : 'hidden' }
              : {
                  whileInView: 'visible',
                  viewport: viewport || VIEWPORT
                })}
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
