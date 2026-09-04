import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './Proof.css';

export default function Proof() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const proofData = t.proof;
  const states = proofData.states;

  // Single source of truth: Scroll progress across 500vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Track active state index (0 to 4)
  const [activeStateIdx, setActiveStateIdx] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      let idx = 0;
      if (v < 0.20) idx = 0;
      else if (v < 0.40) idx = 1;
      else if (v < 0.60) idx = 2;
      else if (v < 0.80) idx = 3;
      else idx = 4;
      setActiveStateIdx(idx);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Click on pipeline navigator node
  const handleSelectNode = (idx) => {
    if (!containerRef.current) return;
    const stageScrollTargets = [0.08, 0.28, 0.48, 0.68, 0.88];
    const targetP = stageScrollTargets[idx];
    const top = containerRef.current.offsetTop + targetP * (containerRef.current.offsetHeight - window.innerHeight);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // State 03 Before/After interactive slider position driven by scroll
  const splitMaskX = useTransform(smoothProgress, [0.42, 0.58], [15, 85]);

  return (
    <section 
      ref={containerRef}
      id="proof"
      className="proof-evidence-section"
      aria-label="Section 7: Proof"
    >
      {/* Sticky Pinned Viewport */}
      <div className="proof-sticky-viewport">
        {/* Ambient Dark Atmospheric Backdrops */}
        <div className="proof-ambient-flare" aria-hidden="true" />
        <div className="proof-noise-layer" aria-hidden="true" />

        {/* =========================================================
            1. TOP HEADER & EVIDENCE TRACKER
            ========================================================= */}
        <div className="proof-header-bar">
          <div className="proof-eyebrow-pill">
            <span className="pill-dot">✦</span>
            <span>{proofData.eyebrow}</span>
          </div>

          <div className="proof-pipeline-tracker">
            {states.map((st, idx) => {
              const isActive = activeStateIdx === idx;
              const isUnlocked = activeStateIdx >= idx;
              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => handleSelectNode(idx)}
                  className={`proof-step-btn ${isActive ? 'is-active' : ''} ${isUnlocked ? 'is-unlocked' : ''}`}
                >
                  <span className="step-num">{st.num}</span>
                  <span className="step-name">{st.code}</span>
                  {idx < 4 && <span className="step-arrow">{isRTL ? '←' : '→'}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            2. CINEMATIC EVIDENCE STAGE (OCCUPIES >75% VIEWPORT)
            ========================================================= */}
        <div className="proof-evidence-stage">
          {/* -------------------------------------------------------
              STATE 01: REAL WORK (High-Resolution Tangible Deliverables)
              ------------------------------------------------------- */}
          {activeStateIdx === 0 && (
            <motion.div 
              key="state-01-work"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="proof-canvas-card work-canvas"
            >
              <div className="work-primary-frame">
                <img 
                  src="/assets/work/velox_primary.jpg" 
                  alt="Velox Financial Desktop Platform Deliverable"
                  className="proof-img" 
                  loading="lazy" 
                />
                <div className="proof-glass-vignette" />
                <div className="proof-meta-tag primary-tag">
                  <span className="dot-green" />
                  <span>{states[0].badge}</span>
                </div>
              </div>

              {/* Floating Mobile Execution Layer */}
              <div className="work-secondary-frame">
                <img 
                  src="/assets/work/velox_secondary.jpg" 
                  alt="Velox Financial Mobile 1-Tap Execution App"
                  className="proof-img" 
                  loading="lazy" 
                />
                <div className="proof-glass-vignette" />
                <div className="proof-meta-tag">
                  <span>MOBILE FLOW DELIVERABLE</span>
                </div>
              </div>

              {/* Minimal Metadata Strip */}
              <div className="work-intel-strip">
                <span className="intel-client">{states[0].client}</span>
                <span className="intel-pipe">/</span>
                <span className="intel-ind">{states[0].industry}</span>
                <span className="intel-pipe">/</span>
                <span className="intel-scope">{states[0].scope}</span>
              </div>
            </motion.div>
          )}

          {/* -------------------------------------------------------
              STATE 02: REAL SIGNALS (Live Telemetry & Measurement Stream)
              ------------------------------------------------------- */}
          {activeStateIdx === 1 && (
            <motion.div 
              key="state-02-signals"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="proof-canvas-card signals-canvas"
            >
              <div className="signals-backdrop-frame">
                <img 
                  src="/assets/ecosystem/analytics_dashboard.jpg" 
                  alt="Velox Financial Live Telemetry and Attribution Engine"
                  className="proof-img blur-img" 
                  loading="lazy" 
                />
                <div className="signals-overlay-gradient" />
              </div>

              <div className="signals-telemetry-hud">
                <div className="hud-header">
                  <div className="hud-badge">
                    <span className="status-live-dot" />
                    <span>{states[1].badge}</span>
                  </div>
                  <span className="hud-timestamp">DETERMINISTIC ATTRIBUTION // 99.4% CONFIDENCE</span>
                </div>

                <div className="hud-metrics-grid">
                  {states[1].metrics.map((m, i) => (
                    <div key={i} className="hud-metric-card">
                      <span className="hud-m-label">{m.label}</span>
                      <span className="hud-m-val">{m.val}</span>
                      <span className="hud-m-sub">{m.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* -------------------------------------------------------
              STATE 03: REAL TRANSFORMATION (Interactive Before/After Split)
              ------------------------------------------------------- */}
          {activeStateIdx === 2 && (
            <motion.div 
              key="state-03-transform"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="proof-canvas-card transform-canvas"
            >
              {/* After: Synchronized Magicency Operating System (Base Layer) */}
              <div className="transform-layer after-layer">
                <img 
                  src="/assets/work/velox_primary.jpg" 
                  alt="After: Magicency High-Intent Synchronized Conversion Architecture"
                  className="proof-img" 
                  loading="lazy" 
                />
                <div className="transform-badge after-badge">
                  <span className="dot-green" />
                  <span>{states[2].afterLabel}</span>
                </div>
              </div>

              {/* Before: Fragmented Stalled Baseline (Revealed by split mask) */}
              <motion.div 
                className="transform-layer before-layer"
                style={{ 
                  clipPath: isRTL 
                    ? `polygon(${splitMaskX.get()}% 0%, 100% 0%, 100% 100%, ${splitMaskX.get()}% 100%)`
                    : `polygon(0% 0%, ${splitMaskX.get()}% 0%, ${splitMaskX.get()}% 100%, 0% 100%)`
                }}
              >
                <img 
                  src="/assets/ecosystem/landing_page.jpg" 
                  alt="Before: Baseline Fragmented Marketing Funnel"
                  className="proof-img desaturate-img" 
                  loading="lazy" 
                />
                <div className="transform-badge before-badge">
                  <span className="dot-red" />
                  <span>{states[2].beforeLabel}</span>
                </div>
              </motion.div>

              {/* Interactive Slicer Line */}
              <div 
                className="transform-slicer-line" 
                style={{ left: `${splitMaskX.get()}%` }}
              >
                <div className="slicer-handle">
                  <span>⇄</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* -------------------------------------------------------
              STATE 04: REAL IMPACT (Action → Signal → Business Outcome)
              ------------------------------------------------------- */}
          {activeStateIdx === 3 && (
            <motion.div 
              key="state-04-impact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="proof-canvas-card impact-canvas"
            >
              <div className="impact-deck-header">
                <div className="proof-meta-tag">
                  <span className="dot-green" />
                  <span>{states[3].badge}</span>
                </div>
                <h4 className="impact-headline-text">{states[3].title}</h4>
              </div>

              <div className="impact-flow-grid">
                {states[3].steps.map((step, i) => (
                  <div key={i} className={`impact-step-box step-${i}`}>
                    <div className="impact-step-label-strip">
                      <span className="step-badge-code">0{i+1}</span>
                      <span className="step-badge-name">{step.label}</span>
                    </div>
                    <div className="impact-step-val-text">{step.val}</div>
                    {i < 2 && <div className="impact-connector-arrow">{isRTL ? '←' : '➔'}</div>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* -------------------------------------------------------
              STATE 05: REAL TRUST (Restrained High-Conviction Evidence Quote)
              ------------------------------------------------------- */}
          {activeStateIdx === 4 && (
            <motion.div 
              key="state-05-trust"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="proof-canvas-card trust-canvas"
            >
              <div className="trust-backdrop-visual">
                <img 
                  src="/assets/work/velox_primary.jpg" 
                  alt="Velox Financial Case Study Evidence Background"
                  className="proof-img deep-dark-img" 
                  loading="lazy" 
                />
              </div>

              <div className="trust-content-deck">
                <div className="trust-eyebrow-tag">
                  <span className="dot-orange" />
                  <span>{states[4].badge}</span>
                </div>
                <blockquote className="trust-quote-text">
                  {states[4].quote}
                </blockquote>
                <div className="trust-attribution-strip">
                  <span className="trust-author">{states[4].author}</span>
                  <span className="trust-pipe">//</span>
                  <span className="trust-company">{states[4].company}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* =========================================================
            3. MINIMAL BOTTOM NARRATIVE DOCK
            ========================================================= */}
        <div className="proof-bottom-dock">
          <div className="dock-narrative">
            <h3 className="dock-main-statement">
              {proofData.headline}
            </h3>
            <p className="dock-sub-statement">
              {proofData.subheadline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
