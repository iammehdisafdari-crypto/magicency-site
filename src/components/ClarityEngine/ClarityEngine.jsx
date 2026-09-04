import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './ClarityEngine.css';

export default function ClarityEngine() {
  const { t, setIsModalOpen, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const data = t.clarityEngine;

  // Track scroll progress across 380vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // Track active phase index
  const [activePhase, setActivePhase] = useState(0); // 0: Chaos, 1: Alignment, 2: Clarity, 3: Decision
  const [hoveredDecision, setHoveredDecision] = useState(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.28) {
        setActivePhase(0);
      } else if (latest < 0.58) {
        setActivePhase(1);
      } else if (latest < 0.84) {
        setActivePhase(2);
      } else {
        setActivePhase(3);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // =========================================================
  // SCROLL-DRIVEN ANAMORPHIC TRANSFORMS (CHAOS -> CLARITY)
  // =========================================================

  // Shard 01: Top Left -> Centers
  const s1X = useTransform(smoothProgress, [0.0, 0.45, 0.65], [isRTL ? 220 : -220, isRTL ? 60 : -60, 0]);
  const s1Y = useTransform(smoothProgress, [0.0, 0.45, 0.65], [-120, -30, 0]);
  const s1Rotate = useTransform(smoothProgress, [0.0, 0.45, 0.65], [-24, -6, 0]);
  const s1Blur = useTransform(smoothProgress, [0.0, 0.35, 0.60], ["blur(8px)", "blur(3px)", "blur(0px)"]);
  const s1Opacity = useTransform(smoothProgress, [0.0, 0.20, 0.60, 0.70], [0.35, 0.8, 1, 0]);

  // Shard 02: Bottom Right -> Centers
  const s2X = useTransform(smoothProgress, [0.0, 0.45, 0.65], [isRTL ? -240 : 240, isRTL ? -70 : 70, 0]);
  const s2Y = useTransform(smoothProgress, [0.0, 0.45, 0.65], [140, 40, 0]);
  const s2Rotate = useTransform(smoothProgress, [0.0, 0.45, 0.65], [28, 8, 0]);
  const s2Blur = useTransform(smoothProgress, [0.0, 0.35, 0.60], ["blur(10px)", "blur(4px)", "blur(0px)"]);
  const s2Opacity = useTransform(smoothProgress, [0.0, 0.20, 0.60, 0.70], [0.3, 0.75, 1, 0]);

  // Shard 03: Top Right -> Centers
  const s3X = useTransform(smoothProgress, [0.0, 0.45, 0.65], [isRTL ? -180 : 180, isRTL ? -50 : 50, 0]);
  const s3Y = useTransform(smoothProgress, [0.0, 0.45, 0.65], [-130, -35, 0]);
  const s3Rotate = useTransform(smoothProgress, [0.0, 0.45, 0.65], [18, 4, 0]);
  const s3Blur = useTransform(smoothProgress, [0.0, 0.35, 0.60], ["blur(6px)", "blur(2px)", "blur(0px)"]);
  const s3Opacity = useTransform(smoothProgress, [0.0, 0.20, 0.60, 0.70], [0.4, 0.85, 1, 0]);

  // Shard 04: Bottom Left -> Centers
  const s4X = useTransform(smoothProgress, [0.0, 0.45, 0.65], [isRTL ? 200 : -200, isRTL ? 50 : -50, 0]);
  const s4Y = useTransform(smoothProgress, [0.0, 0.45, 0.65], [120, 30, 0]);
  const s4Rotate = useTransform(smoothProgress, [0.0, 0.45, 0.65], [-18, -4, 0]);
  const s4Blur = useTransform(smoothProgress, [0.0, 0.35, 0.60], ["blur(9px)", "blur(3px)", "blur(0px)"]);
  const s4Opacity = useTransform(smoothProgress, [0.0, 0.20, 0.60, 0.70], [0.3, 0.7, 1, 0]);

  // The Crystallized Statement Resolution (Snaps in at 0.58 -> 1.0)
  const crystallizedOpacity = useTransform(smoothProgress, [0.55, 0.64, 1.0], [0, 1, 1]);
  const crystallizedScale = useTransform(smoothProgress, [0.55, 0.65, 0.84], [0.88, 1, 0.94]);
  const crystallizedY = useTransform(smoothProgress, [0.78, 0.88], [0, -36]);

  // Decision Sequence Grid Reveal (0.78 -> 1.0)
  const decisionOpacity = useTransform(smoothProgress, [0.78, 0.86, 1.0], [0, 1, 1]);
  const decisionY = useTransform(smoothProgress, [0.78, 0.86], [50, 0]);

  // Stage state label text
  const stateLabelText = 
    activePhase === 0 ? data.states.chaos :
    activePhase === 1 ? data.states.signal :
    activePhase === 2 ? data.states.clarity :
    data.states.decision;

  return (
    <section 
      ref={containerRef}
      id="approach"
      className="clarity-engine-section"
    >
      {/* Pinned Sticky Viewport */}
      <div className="clarity-sticky-viewport">
        {/* Ambient Dark Atmospheric Layers */}
        <div className="clarity-ambient-void" />
        <div className="clarity-crosshair-layer" />

        {/* Global Micro Phase Indicator */}
        <div className="clarity-phase-badge-pill">
          <span className="phase-pulse-dot" />
          <span className="phase-text">{stateLabelText}</span>
        </div>

        {/* Stage 1 & 2: Anamorphic Shards of Noise / Uncertainty Floating & Converging */}
        <div className="anamorphic-shards-field" aria-hidden="true">
          <motion.div 
            className="shattered-text-particle shard-1"
            style={{ x: s1X, y: s1Y, rotate: s1Rotate, filter: s1Blur, opacity: s1Opacity }}
          >
            <span>{data.shatteredWords[0]}</span>
          </motion.div>

          <motion.div 
            className="shattered-text-particle shard-2"
            style={{ x: s2X, y: s2Y, rotate: s2Rotate, filter: s2Blur, opacity: s2Opacity }}
          >
            <span>{data.shatteredWords[1]}</span>
          </motion.div>

          <motion.div 
            className="shattered-text-particle shard-3"
            style={{ x: s3X, y: s3Y, rotate: s3Rotate, filter: s3Blur, opacity: s3Opacity }}
          >
            <span>{data.shatteredWords[2]}</span>
          </motion.div>

          <motion.div 
            className="shattered-text-particle shard-4"
            style={{ x: s4X, y: s4Y, rotate: s4Rotate, filter: s4Blur, opacity: s4Opacity }}
          >
            <span>{data.shatteredWords[3]}</span>
          </motion.div>
        </div>

        {/* =========================================================
            STAGE 3: THE CRYSTALLIZED RESOLUTION (CLARITY CREATES GROWTH)
            ========================================================= */}
        <motion.div 
          className="crystallized-statement-stage"
          style={{ 
            opacity: crystallizedOpacity, 
            scale: crystallizedScale, 
            y: crystallizedY 
          }}
        >
          <div className="clarity-eyebrow-line">
            <span className="spark-icon">✦</span>
            <span>{data.eyebrow}</span>
          </div>

          <h2 className="clarity-monumental-headline">
            <span className="headline-part">{data.statementRow1}</span>
            <span className="headline-part">{data.statementRow2}</span>
            <span className="headline-part amber-crystallized">{data.statementHighlight}</span>
          </h2>

          <p className="clarity-subheadline-p">
            {data.subheadline}
          </p>
        </motion.div>

        {/* =========================================================
            STAGE 4: THE 8-STAGE DECISION SEQUENCE & OPTICAL PRISM
            ========================================================= */}
        <motion.div 
          className="decision-sequence-prism-deck"
          style={{ opacity: decisionOpacity, y: decisionY }}
        >
          <div className="decision-sequence-grid">
            {data.decisionSequence.map((step, idx) => {
              const isHovered = hoveredDecision === idx;
              return (
                <div 
                  key={step.code}
                  className={`decision-node-card ${isHovered ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredDecision(idx)}
                  onMouseLeave={() => setHoveredDecision(null)}
                >
                  <div className="node-top-code">
                    <span className="node-code-num">{step.code}</span>
                    <span className="node-step-badge">{step.step}</span>
                  </div>
                  <p className="node-desc-text">
                    {step.desc}
                  </p>
                  <div className="node-connector-line" />
                </div>
              );
            })}
          </div>

          {/* Strategic CTA Action */}
          <div className="clarity-cta-wrapper">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(true)}
              className="clarity-btn-orange"
            >
              <span>{data.cta}</span>
              <span className="btn-arrow-icon">➔</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
