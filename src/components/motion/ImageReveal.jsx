import React from 'react';
import { motion } from 'framer-motion';
import { imageMaskVariants, imageInnerVariants } from './variants';

export default function ImageReveal({
  children,
  src,
  alt = '',
  className = '',
  imageClassName = '',
  delay = 0,
  duration,
  trigger
}) {
  const isControlled = typeof trigger === 'boolean';

  return (
    <motion.div
      className={`motion-image-reveal-wrapper ${className}`}
      style={{ overflow: 'hidden', position: 'relative' }}
      variants={imageMaskVariants}
      initial="hidden"
      {...(isControlled
        ? { animate: trigger ? 'visible' : 'hidden' }
        : {
            whileInView: 'visible',
            viewport: { once: true, amount: 0.15 }
          })}
      custom={{ delay, duration }}
    >
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          className={`motion-image-inner ${imageClassName}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          variants={imageInnerVariants}
          custom={{ delay, duration }}
        />
      ) : (
        <motion.div
          className={`motion-image-inner ${imageClassName}`}
          style={{ width: '100%', height: '100%' }}
          variants={imageInnerVariants}
          custom={{ delay, duration }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
