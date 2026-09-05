import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowDown } from 'lucide-react';

export default function QuestionShift() {
  const { t, isRTL } = useLanguage();
  const q = t.approach?.questionShift || {};
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Spatial depth transformation
  // Old question: Starts prominent -> shrinks, recedes backward in 3D space
  const oldScale = useTransform(scrollYProgress, [0.15, 0.45], [1, 0.68]);
  const oldOpacity = useTransform(scrollYProgress, [0.15, 0.45], [1, 0.18]);
  const oldY = useTransform(scrollYProgress, [0.15, 0.45], ['0%', '-24%']);

  // Better question: Emerges from background -> grows dominant and luminescent
  const betterScale = useTransform(scrollYProgress, [0.35, 0.65], [0.82, 1.05]);
  const betterOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0.25, 1]);
  const betterY = useTransform(scrollYProgress, [0.35, 0.65], ['20%', '0%']);

  // Connector line progress
  const lineScaleY = useTransform(scrollYProgress, [0.2, 0.55], [0, 1]);

  return (
    <section ref={containerRef} className="approach-shift-section" aria-label="The Philosophical Shift">
      <div className="container approach-shift-container">
        
        {/* Section Header */}
        <div className="approach-section-header-center">
          <span className="approach-tag-label">{q.badge || 'THE PHILOSOPHICAL SHIFT'}</span>
        </div>

        {/* The Typographic Shift Stage */}
        <div className="approach-shift-stage">
          
          {/* Phase 1: The Old Question (Receding) */}
          <motion.div 
            className="shift-block block-old"
            style={{
              scale: oldScale,
              opacity: oldOpacity,
              y: oldY
            }}
          >
            <span className="shift-sub-tag">{q.oldPerspective}</span>
            <h2 className="shift-headline old-query">
              {q.oldQuestion}
            </h2>
          </motion.div>

          {/* Dynamic Vector Connector */}
          <div className="shift-connector" aria-hidden="true">
            <motion.div 
              className="shift-connector-line" 
              style={{ scaleY: lineScaleY }}
            />
            <div className="shift-connector-dot">
              <ArrowDown size={14} className="shift-arrow-icon" />
            </div>
          </div>

          {/* Phase 2: The Better Question (Dominant Emergence) */}
          <motion.div 
            className="shift-block block-better"
            style={{
              scale: betterScale,
              opacity: betterOpacity,
              y: betterY
            }}
          >
            <span className="shift-sub-tag highlight-amber">{q.betterPerspective}</span>
            <h2 className="shift-headline better-query text-gradient-amber">
              {q.betterQuestion}
            </h2>
          </motion.div>

        </div>

        {/* Philosophical Insight Card */}
        <div className="approach-shift-insight-wrap">
          <div className="approach-shift-insight-box">
            <div className="insight-pulse-glow" aria-hidden="true" />
            <p className="approach-shift-insight-text">
              {q.insight}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
