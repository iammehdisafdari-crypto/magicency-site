import React, { useRef } from 'react';
import { m, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { EASING } from './motionConfig';
import { useInViewObserver } from './useInViewObserver';

function normalizeStatementLines(children) {
  if (Array.isArray(children)) {
    return children;
  }
  if (typeof children === 'string') {
    return children.includes('\n') ? children.split('\n') : [children];
  }
  return [children];
}

/**
 * =========================================================
 * RevealStatement Component
 * Designed specifically for large editorial manifesto statements.
 * Splits text into logical phrases/lines and reveals each line
 * with masked vertical motion (110% -> 0%) and progressive cadence.
 * Also responds subtly to continuous scroll position for spatial depth.
 * =========================================================
 */
export default function RevealStatement({
  children,
  className = '',
  as: Component = 'p',
  delay = 0.05,
  duration = 0.85,
  stagger = 0.08,
  viewport,
  scrollLinked = true,
  trigger
}) {
  const containerRef = useRef(null);
  const [inViewRef, isInView] = useInViewObserver({ 
    once: viewport?.once ?? true, 
    amount: viewport?.amount ?? 0.15 
  });
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // Subtle continuous spatial momentum [-14px, 14px]
  const scrollY = useTransform(smoothProgress, [0, 0.5, 1], [14, 0, -14]);

  const isControlled = typeof trigger === 'boolean';

  // Process lines: split by line breaks or sentences
  const lines = normalizeStatementLines(children);

  if (reducedMotion) {
    return <Component className={`reveal-statement-static ${className}`}>{children}</Component>;
  }

  const MotionComponent = m[Component] || m.p;

  return (
    <div ref={containerRef} className="reveal-statement-spatial-frame" style={{ overflow: 'visible' }}>
      <div ref={inViewRef}>
        <MotionComponent 
          className={`reveal-statement-root ${className}`}
          style={scrollLinked && !reducedMotion ? { y: scrollY } : {}}
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
                variants={{
                  hidden: { y: '110%', opacity: 0 },
                  visible: (custom = {}) => ({
                    y: '0%',
                    opacity: 1,
                    transition: {
                      duration: custom.duration || duration,
                      delay: custom.delay || 0,
                      ease: EASING.MOMENTUM
                    }
                  })
                }}
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
      </div>
    </div>
  );
}

