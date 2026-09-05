import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * =========================================================
 * ScrollLinkedText Component
 * Continuous spatial responsiveness to scroll progress.
 * Subtle vertical momentum ([-16px, 16px]), scale, and opacity
 * as the user scrolls past oversized typography or statements.
 * =========================================================
 */
export default function ScrollLinkedText({
  children,
  className = '',
  as: Component = 'div',
  yOffset = 16,
  scaleRange = [0.985, 1, 0.995],
  opacityRange = [0.85, 1, 0.85]
}) {
  const ref = useRef(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 992;
    const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setDisabled(isMobile || isReduced);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 0.5, 1], [yOffset, 0, -yOffset]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], scaleRange);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], opacityRange);

  if (disabled) {
    return <Component ref={ref} className={className}>{children}</Component>;
  }

  const MotionComponent = motion[Component] || motion.div;

  return (
    <div ref={ref} className={`scroll-linked-text-wrapper ${className}`} style={{ overflow: 'visible' }}>
      <MotionComponent
        style={{
          y,
          scale,
          opacity,
          willChange: 'transform, opacity'
        }}
      >
        {children}
      </MotionComponent>
    </div>
  );
}
