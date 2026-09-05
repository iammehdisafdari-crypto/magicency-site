import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cinematicImageVariants } from './variants';
import { DURATION, VIEWPORT } from './motionConfig';

/**
 * =========================================================
 * ImageReveal Component
 * Cinematic visual entrance: scale 1.04 -> 1, opacity 0 -> 1.
 * Duration: 1.0–1.3s (settles smoothly behind typography).
 * =========================================================
 */
export default function ImageReveal({
  children,
  src,
  alt = '',
  className = '',
  imageClassName = '',
  delay = 0,
  duration = DURATION.IMAGE,
  viewport = VIEWPORT,
  trigger
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    if (src) {
      return (
        <div className={`motion-image-static ${className}`}>
          <img src={src} alt={alt} className={`motion-image-inner ${imageClassName}`} />
        </div>
      );
    }
    return <div className={`motion-image-static ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`motion-image-reveal-wrapper ${className}`}
      style={{ overflow: 'hidden', position: 'relative' }}
      variants={cinematicImageVariants}
      initial="hidden"
      {...(isControlled
        ? { animate: trigger ? 'visible' : 'hidden' }
        : {
            whileInView: 'visible',
            viewport: viewport || VIEWPORT
          })}
      custom={{ delay, duration }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`motion-image-inner ${imageClassName}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        children
      )}
    </motion.div>
  );
}
