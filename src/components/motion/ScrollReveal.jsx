import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * =========================================================
 * ScrollReveal Component
 * Links typography movement directly to scroll progress.
 * Subtle vertical trajectory: 60px -> 0px -> -20px.
 * =========================================================
 */
export default function ScrollReveal({
  children,
  className = '',
  as: Component = 'div',
  startY = 60,
  endY = -20
}) {
  const ref = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 0.45, 1], [startY, 0, endY]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.85, 1], [0, 1, 1, 0.7]);

  if (reducedMotion) {
    return <Component className={`scroll-reveal-static ${className}`}>{children}</Component>;
  }

  const MotionComponent = motion[Component] || motion.div;

  return (
    <div ref={ref} className="scroll-reveal-wrapper">
      <MotionComponent
        style={{ y, opacity, willChange: 'transform, opacity' }}
        className={`scroll-reveal-content ${className}`}
      >
        {children}
      </MotionComponent>
    </div>
  );
}
