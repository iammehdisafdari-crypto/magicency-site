import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function ScrollProgress() {
  const { isRTL } = useLanguage();
  const { scrollYProgress } = useScroll();

  return (
    <div 
      className="about-scroll-progress-track"
      aria-hidden="true"
    >
      <motion.div 
        className="about-scroll-progress-bar"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: isRTL ? 'right center' : 'left center'
        }}
      />
    </div>
  );
}
