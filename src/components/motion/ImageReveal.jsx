import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { cinematicImageVariants } from './variants';
import { DURATION } from './motionConfig';
import { useInViewObserver } from './useInViewObserver';

const toWebp = (url) => (url ? url.replace(/\.(jpg|jpeg|png)$/, '.webp') : url);

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
  width,
  height,
  className = '',
  imageClassName = '',
  delay = 0,
  duration = DURATION.IMAGE,
  viewport,
  trigger
}) {
  const [ref, isInView] = useInViewObserver({ 
    once: viewport?.once ?? true, 
    amount: viewport?.amount ?? 0.15 
  });
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);
  const isControlled = typeof trigger === 'boolean';

  if (reducedMotion) {
    if (src) {
      return (
        <div className={`motion-image-static ${className}`}>
          <picture>
            <source srcSet={toWebp(src)} type="image/webp" />
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={`motion-image-inner ${imageClassName}`}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      );
    }
    return <div className={`motion-image-static ${className}`}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={`motion-image-reveal-wrapper ${className}`}
      style={{ overflow: 'hidden', position: 'relative' }}
      variants={cinematicImageVariants}
      initial="hidden"
      animate={isControlled ? (trigger ? 'visible' : 'hidden') : (isInView ? 'visible' : 'hidden')}
      custom={{ delay, duration }}
    >
      {src ? (
        <picture>
          <source srcSet={toWebp(src)} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`motion-image-inner ${imageClassName}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
            decoding="async"
          />
        </picture>
      ) : (
        children
      )}
    </m.div>
  );
}
