import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Parallax({
  children,
  className = '',
  offset = 24
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

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (disabled) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`motion-parallax-container ${className}`} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y, willChange: 'transform' }}>
        {children}
      </motion.div>
    </div>
  );
}
