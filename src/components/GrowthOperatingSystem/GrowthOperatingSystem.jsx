import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import OperatingSystemReactor from './OperatingSystemReactor';
import './GrowthOperatingSystem.css';

export default function GrowthOperatingSystem() {
  const { t, setIsModalOpen, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const osData = t.growthOS;
  const states = osData.states;

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

  // Track active stage index (0 to 5 for 6 stages), strictly initialized to 0 (01 INPUT)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      let idx = 0;
      if (latest < 0.18) {
        idx = 0; // 01 INPUT
      } else if (latest < 0.36) {
        idx = 1; // 02 INSIGHT
      } else if (latest < 0.54) {
        idx = 2; // 03 ACTION
      } else if (latest < 0.72) {
        idx = 3; // 04 SIGNAL
      } else if (latest < 0.88) {
        idx = 4; // 05 OPTIMIZATION
      } else {
        idx = 5; // 06 COMPOUNDING
      }
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Click on navigator pill scrolls smoothly to that stage's position
  const handleSelectState = (idx) => {
    if (!containerRef.current) return;
    const stageScrollTargets = [0.06, 0.26, 0.45, 0.63, 0.80, 0.94];
    const targetP = stageScrollTargets[idx];
    const top = containerRef.current.offsetTop + targetP * (containerRef.current.offsetHeight - window.innerHeight);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const currentState = states[activeIndex] || states[0];

  return (
    <section 
      ref={containerRef}
      id="growth-os"
      className="growth-os-section"
      aria-label="Growth Operating System"
    >
      {/* Sticky Pinned Viewport */}
      <div className="os-sticky-viewport">
        {/* Background Volumetric Glow & Grid */}
        <div className="os-ambient-flare" aria-hidden="true" />
        <div className="os-grid-mesh" aria-hidden="true" />

        {/* Global Section Progress Bar */}
        <div className="os-progress-bar-wrap">
          <motion.div 
            className="os-progress-fill" 
            style={{ scaleX: smoothProgress, transformOrigin: isRTL ? 'right' : 'left' }}
          />
        </div>

        <div className="container os-content-container">
          {/* =========================================================
              1. EDITORIAL INTRO HEADER
              ========================================================= */}
          <div className="os-header-deck">
            <div className="os-eyebrow-pill">
              <span className="pill-spark">⚡</span>
              <span>{osData.eyebrow}</span>
            </div>

            <h2 className="os-main-headline">
              {osData.headline.split('\n').map((line, idx) => (
                <span key={idx} className="os-headline-line">{line}</span>
              ))}
            </h2>

            <p className="os-subheadline">
              {osData.subheadline}
            </p>
          </div>

          {/* =========================================================
              2. INTERACTIVE OPERATING CYCLE TRACK (6 NODES)
              ========================================================= */}
          <div className="os-cycle-track-wrapper">
            <div className="os-cycle-track" role="tablist">
              {states.map((st, idx) => {
                const isActive = activeIndex === idx;
                const isPast = idx < activeIndex;
                return (
                  <button
                    key={st.id}
                    type="button"
                    role="tab"
                    onClick={() => handleSelectState(idx)}
                    className={`os-track-node-btn ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
                    aria-selected={isActive}
                  >
                    <span className="track-step-num">{st.step}</span>
                    <span className="track-step-label">{st.id.toUpperCase()}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeTrackGlow" 
                        className="track-active-indicator" 
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Micro Status Beacon */}
            <div className="os-track-status-line">
              <span className="status-live-beacon" />
              <span className="status-text">{osData.modeLive}</span>
            </div>
          </div>

          {/* =========================================================
              3. CENTRAL INTERACTIVE OPERATING SYSTEM STAGE
              Two Columns: Live Reactor Vector Engine + Real-time Telemetry Console
              ========================================================= */}
          <div className="os-stage-grid">
            {/* Left Column: Mathematical Reactor Vector Visualization */}
            <div className="os-reactor-column">
              <div className="reactor-card-container">
                <div className="reactor-status-header">
                  <div className="reactor-step-code">
                    <span className="reactor-code-dot" />
                    <span>{currentState.code}</span>
                  </div>
                  <div className="reactor-cycle-badge">
                    <span>STAGE {currentState.step} / 06</span>
                  </div>
                </div>

                {/* Reactive Vector Engine */}
                <OperatingSystemReactor 
                  activeStateId={currentState.id} 
                />
              </div>
            </div>

            {/* Right Column: Active State Inspection Console */}
            <div className="os-console-column">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentState.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="console-card-panel"
                >
                  {/* Stage Tag */}
                  <div className="console-state-badge">
                    <span>STAGE {currentState.step} : {currentState.id.toUpperCase()}</span>
                  </div>

                  {/* Main Action Statement */}
                  <h3 className="console-title-headline">
                    «{currentState.title}»
                  </h3>

                  {/* Executive Mechanism */}
                  <p className="console-statement-p">
                    {currentState.statement}
                  </p>

                  <p className="console-mechanism-p">
                    {currentState.mechanism}
                  </p>

                  {/* Real-time Telemetry Readout Box */}
                  <div className="console-telemetry-box">
                    <div className="telemetry-box-row">
                      <span className="telemetry-box-label">{currentState.telemetry.label}</span>
                      <span className="telemetry-box-status">{currentState.telemetry.status}</span>
                    </div>
                    <div className="telemetry-box-metric">
                      {currentState.telemetry.metric}
                    </div>
                    <div className="telemetry-box-signal">
                      <span className="signal-pulse-dot" />
                      <span>{currentState.telemetry.signalState}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =========================================================
              4. BOTTOM STRATEGIC CONVERSION STRIP
              ========================================================= */}
          <div className="os-bottom-cta-strip">
            <p className="os-cta-lead">
              {osData.bottomCta.statement}
            </p>
            <button 
              type="button" 
              onClick={() => setIsModalOpen(true)}
              className="os-btn-orange"
            >
              <span>{osData.bottomCta.btn}</span>
              <span className="btn-arrow-icon">{isRTL ? '←' : '→'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
