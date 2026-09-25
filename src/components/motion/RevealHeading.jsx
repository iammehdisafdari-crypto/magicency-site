import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { maskedLineVariants } from './variants';
import { DURATION, STAGGER } from './motionConfig';
import { useInViewObserver } from './useInViewObserver';

/**
 * =========================================================
 * RevealHeading Component
 * Line-based masked typography reveal for major headings.
 * Concept: Each visual line starts below its visible clipping area
 * and smoothly reveals with cubic-bezier(0.22, 1, 0.36, 1).
 * =========================================================
 */
function normalizeHeadingLines(children) {
  if (Array.isArray(children)) return children;
  if (typeof children === 'string') return children.split('\n');
  return [children];
}

export default function RevealHeading({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
  duration = DURATION.HEADLINE,
  stagger = STAGGER.HEADLINE_LINE,
  viewport,
  trigger
}) {
  const [ref, isInView] = useInViewObserver({ 
    once: viewport?.once ?? true, 
    amount: viewport?.amount ?? 0.15 
  });
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);

  // Normalize children into an array of lines if string with \n or array
  const lines = normalizeHeadingLines(children);

  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    return (
      <Component className={`reveal-heading-static ${className}`}>
        {children}
      </Component>
    );
  }

  const MotionComponent = m[Component] || m.h2;

  return (
    <MotionComponent
      ref={ref}
      className={`reveal-heading-root ${className}`}
      initial="hidden"
      animate={isControlled ? (trigger ? 'visible' : 'hidden') : (isInView ? 'visible' : 'hidden')}
    >
      {lines.map((line, idx) => (
        <span
          key={typeof line === 'string' ? `${line}-${idx}` : idx}
          className="motion-line-mask"
          style={{
            display: 'block',
            overflow: 'hidden',
            lineHeight: 'inherit'
          }}
        >
          <m.span
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity'
            }}
            variants={maskedLineVariants}
            custom={{
              delay: delay + idx * stagger,
              duration
            }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </MotionComponent>
  );
}
