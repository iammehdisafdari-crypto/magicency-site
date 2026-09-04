import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './GrowthShift.css';

export default function GrowthShift() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const containerRef = useRef(null);
  const data = t.growthShift;

  // Track scroll progress across 400vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // =========================================================
  // SCROLL-DRIVEN CONTINUOUS COMPOSITIONAL TRANSFORMS
  // =========================================================

  // Phase 1 -> 2: Assumption text displacement
  const topTermY = useTransform(smoothProgress, [0.0, 0.20, 0.40], [0, 0, -40]);
  const bottomTermY = useTransform(smoothProgress, [0.0, 0.20, 0.40], [0, 0, 40]);
  const unequalOpScale = useTransform(smoothProgress, [0.18, 0.35, 0.48], [1, 1.3, 0]);
  const unequalOpRotate = useTransform(smoothProgress, [0.18, 0.35], [0, 45]);

  // Phase 2: Friction Leakage Warning Reveal (0.22 -> 0.45)
  const frictionOpacity = useTransform(smoothProgress, [0.22, 0.30, 0.42, 0.48], [0, 1, 1, 0]);
  const frictionScale = useTransform(smoothProgress, [0.22, 0.32], [0.92, 1]);

  // Phase 3: 4-Variable Grid Reveal & Reframe (0.45 -> 0.72)
  const reframeOpacity = useTransform(smoothProgress, [0.45, 0.52, 0.68, 0.75], [0, 1, 1, 0]);
  const reframeScale = useTransform(smoothProgress, [0.45, 0.54, 0.72], [0.9, 1, 1.05]);
  const reframeY = useTransform(smoothProgress, [0.45, 0.54], [30, 0]);

  // Phase 4 & 5: Final Monumental Resolution (0.72 -> 1.0)
  const resolutionOpacity = useTransform(smoothProgress, [0.72, 0.80, 1.0], [0, 1, 1]);
  const resolutionScale = useTransform(smoothProgress, [0.72, 0.82], [0.92, 1]);
  const resolutionY = useTransform(smoothProgress, [0.72, 0.82], [40, 0]);

  // Initial Assumption Opacity (fades out into the reframe)
  const initialEqOpacity = useTransform(smoothProgress, [0.0, 0.38, 0.46], [1, 0.8, 0]);

  return (
    <section 
      ref={containerRef}
      id="shift"
      className="growth-shift-section"
    >
      {/* Sticky Pinned Stage */}
      <div className="shift-sticky-viewport">
        {/* Background Atmospheric Layers */}
        <div className="shift-ambient-void" />
        <div className="shift-grid-lines" />

        {/* Eyebrow Status */}
        <div className="shift-eyebrow-pill">
          <span className="shift-pill-dot">⚡</span>
          <span>{data.eyebrow}</span>
        </div>

        {/* =========================================================
            STAGE 01 & 02: THE INITIAL RIGID ASSUMPTION & FRICTION SPLIT
            ========================================================= */}
        <motion.div 
          className="shift-assumption-equation"
          style={{ opacity: initialEqOpacity }}
        >
          <div className="equation-terms-row">
            <motion.span 
              className="term-block term-left"
              style={{ y: topTermY }}
            >
              {data.assumptionRow1}
            </motion.span>

            <motion.span 
              className="operator-block"
              style={{ 
                scale: unequalOpScale, 
                rotate: unequalOpRotate 
              }}
            >
              {data.assumptionOp}
            </motion.span>

            <motion.span 
              className="term-block term-right"
              style={{ y: bottomTermY }}
            >
              {data.assumptionRow2}
            </motion.span>
          </div>

          {/* Friction & Capital Leakage Alert Gap */}
          <motion.div 
            className="friction-leak-banner"
            style={{ opacity: frictionOpacity, scale: frictionScale }}
          >
            <span className="friction-pulse-icon">⚠️</span>
            <span className="friction-text">{data.frictionLeak}</span>
          </motion.div>
        </motion.div>

        {/* =========================================================
            STAGE 03: THE 4-VARIABLE REFRAME (SYSTEM MATRIX)
            ========================================================= */}
        <motion.div 
          className="shift-reframe-matrix"
          style={{ 
            opacity: reframeOpacity, 
            scale: reframeScale, 
            y: reframeY 
          }}
        >
          <div className="reframe-variables-grid">
            {data.reframeVariables.map((v, idx) => (
              <React.Fragment key={v.symbol}>
                <div className="reframe-var-node">
                  <span className="var-num">{v.symbol}</span>
                  <span className="var-name">{v.label}</span>
                </div>
                {idx < 3 && <span className="reframe-plus-op">+</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="reframe-formula-tag">
            <span>{data.systemFormula}</span>
          </div>
        </motion.div>

        {/* =========================================================
            STAGE 04 & 05: THE MONUMENTAL FINAL RESOLUTION
            ========================================================= */}
        <motion.div 
          className="shift-resolution-stage"
          style={{ 
            opacity: resolutionOpacity, 
            scale: resolutionScale, 
            y: resolutionY 
          }}
        >
          <h2 className="resolution-giant-headline">
            <span className="res-line">{data.resolutionRow1}</span>
            <span className="res-line res-highlight">{data.resolutionHighlight}</span>
          </h2>

          <p className="resolution-sub-text">
            {data.resolutionSub}
          </p>

          <div className="resolution-cta-wrap">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(true)}
              className="shift-btn-orange"
            >
              <span>{data.cta}</span>
              <span className="btn-arrow-char">➔</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
