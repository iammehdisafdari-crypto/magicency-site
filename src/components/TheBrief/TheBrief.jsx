import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './TheBrief.css';

// Visual artifact mappings for each direction choice
const DIRECTION_MEDIA = {
  grow: {
    img: '/assets/capabilities/experimentation.jpg',
    badge: 'GROWTH // ACQUISITION & TELEMETRY',
    color: '#00F59B',
    accentClass: 'accent-grow'
  },
  reposition: {
    img: '/assets/capabilities/creative.jpg',
    badge: 'POSITIONING // BRAND & OFFER ARCHITECTURE',
    color: '#FF8833',
    accentClass: 'accent-reposition'
  },
  build: {
    img: '/assets/work/velox_primary.jpg',
    badge: 'BUILD // HIGH-CONVERTING INTERFACE & APP',
    color: '#00F59B',
    accentClass: 'accent-build'
  },
  fix: {
    img: '/assets/work/synapse_primary.jpg',
    badge: 'DIAGNOSTICS // FRICTION & CRO AUDIT',
    color: '#FF5500',
    accentClass: 'accent-fix'
  },
  other: {
    img: '/assets/capabilities/growth_systems.jpg',
    badge: 'BESPOKE // SYSTEMIC GROWTH PROTOCOL',
    color: '#FF8833',
    accentClass: 'accent-other'
  }
};

export default function TheBrief() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const brief = t.theBrief;

  // Step 1 -> 2 -> 3 -> 4 (Complete)
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDirection, setSelectedDirection] = useState('grow');
  const [selectedObstacle, setSelectedObstacle] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Active visual based on chosen direction
  const activeMedia = DIRECTION_MEDIA[selectedDirection] || DIRECTION_MEDIA.grow;

  const handleSelectDirection = (id) => {
    setSelectedDirection(id);
    setCurrentStep(2);
  };

  const handleSelectObstacle = (id) => {
    setSelectedObstacle(id);
    setCurrentStep(3);
  };

  const handleSelectDestination = (id) => {
    setSelectedDestination(id);
    setCurrentStep(4);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedDirection('grow');
    setSelectedObstacle(null);
    setSelectedDestination(null);
  };

  // Find labels for brief summary
  const directionObj = brief.step1.options.find(o => o.id === selectedDirection);
  const obstacleObj = brief.step2.options.find(o => o.id === selectedObstacle);
  const destinationObj = brief.step3.options.find(o => o.id === selectedDestination);

  return (
    <section 
      id="brief"
      className="the-brief-section"
      aria-label="Section 9: The Brief"
    >
      {/* Background Ambience */}
      <div className="brief-ambient-radial" aria-hidden="true" />
      <div className="brief-grid-mesh" aria-hidden="true" />

      <div className="brief-outer-container container">
        {/* =========================================================
            1. SECTION HEADER
            ========================================================= */}
        <div className="brief-header-deck">
          <div className="brief-eyebrow-pill">
            <span className="pill-dot">⚡</span>
            <span>{brief.eyebrow}</span>
          </div>
          <span className="brief-subeyebrow">{brief.subeyebrow}</span>
        </div>

        {/* =========================================================
            2. THE SYSTEM REMEMBERS: ACCUMULATING STRATEGIC SNAPSHOT
            ========================================================= */}
        <div className="brief-snapshot-bar">
          <div className="snapshot-label">
            <span className="snapshot-dot" />
            <span>{brief.summary.badge}:</span>
          </div>
          <div className="snapshot-chips-row">
            <button 
              type="button" 
              onClick={() => setCurrentStep(1)}
              className={`snapshot-chip chip-direction ${currentStep === 1 ? 'chip-active' : ''}`}
            >
              <span className="chip-step-tag">01 / VECTOR:</span>
              <span className="chip-value">{directionObj?.label || '...'}</span>
            </button>

            {selectedObstacle && (
              <button 
                type="button" 
                onClick={() => setCurrentStep(2)}
                className={`snapshot-chip chip-obstacle ${currentStep === 2 ? 'chip-active' : ''}`}
              >
                <span className="chip-step-tag">02 / OBSTACLE:</span>
                <span className="chip-value">{obstacleObj?.label || '...'}</span>
              </button>
            )}

            {selectedDestination && (
              <button 
                type="button" 
                onClick={() => setCurrentStep(3)}
                className={`snapshot-chip chip-destination ${currentStep === 3 ? 'chip-active' : ''}`}
              >
                <span className="chip-step-tag">03 / TARGET:</span>
                <span className="chip-value">{destinationObj?.label || '...'}</span>
              </button>
            )}
          </div>
        </div>

        {/* =========================================================
            3. INTERACTIVE 2-COLUMN STAGE
            Left: Interactive Decision Canvas
            Right: Responding Visual Environment & Real Deliverable
            ========================================================= */}
        <div className="brief-interactive-stage">
          {/* LEFT: STEP QUESTION & DECISION OPTIONS */}
          <div className="brief-decision-panel">
            <AnimatePresence mode="wait">
              {/* STEP 1: WHAT ARE YOU TRYING TO CHANGE? */}
              {currentStep === 1 && (
                <motion.div 
                  key="step-1"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  transition={{ duration: 0.25 }}
                  className="step-content-deck"
                >
                  <div className="step-badge-indicator">
                    <span>STEP 01 / 03</span>
                  </div>
                  <h3 className="step-main-question">
                    {brief.step1.question}
                  </h3>
                  <p className="step-sub-instruction">
                    {brief.step1.sub}
                  </p>

                  <div className="options-interactive-grid">
                    {brief.step1.options.map((opt) => {
                      const isSelected = selectedDirection === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectDirection(opt.id)}
                          onMouseEnter={() => setSelectedDirection(opt.id)}
                          className={`decision-option-card ${isSelected ? 'is-selected' : ''}`}
                        >
                          <div className="opt-header">
                            <span className="opt-radio-dot" />
                            <span className="opt-title">{opt.label}</span>
                          </div>
                          <p className="opt-context">{opt.context}</p>
                          <span className="opt-action-arrow">{isRTL ? '←' : '→'}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: WHAT'S GETTING IN THE WAY? */}
              {currentStep === 2 && (
                <motion.div 
                  key="step-2"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  transition={{ duration: 0.25 }}
                  className="step-content-deck"
                >
                  <div className="step-badge-indicator">
                    <span>STEP 02 / 03</span>
                  </div>
                  <h3 className="step-main-question">
                    {brief.step2.question}
                  </h3>
                  <p className="step-sub-instruction">
                    {brief.step2.sub}
                  </p>

                  <div className="options-interactive-grid">
                    {brief.step2.options.map((opt) => {
                      const isSelected = selectedObstacle === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectObstacle(opt.id)}
                          className={`decision-option-card ${isSelected ? 'is-selected' : ''}`}
                        >
                          <div className="opt-header">
                            <span className="opt-radio-dot" />
                            <span className="opt-title">{opt.label}</span>
                          </div>
                          <p className="opt-context">{opt.context}</p>
                          <span className="opt-action-arrow">{isRTL ? '←' : '→'}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: WHERE DO YOU WANT TO GO? */}
              {currentStep === 3 && (
                <motion.div 
                  key="step-3"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  transition={{ duration: 0.25 }}
                  className="step-content-deck"
                >
                  <div className="step-badge-indicator">
                    <span>STEP 03 / 03</span>
                  </div>
                  <h3 className="step-main-question">
                    {brief.step3.question}
                  </h3>
                  <p className="step-sub-instruction">
                    {brief.step3.sub}
                  </p>

                  <div className="options-interactive-grid">
                    {brief.step3.options.map((opt) => {
                      const isSelected = selectedDestination === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectDestination(opt.id)}
                          className={`decision-option-card ${isSelected ? 'is-selected' : ''}`}
                        >
                          <div className="opt-header">
                            <span className="opt-radio-dot" />
                            <span className="opt-title">{opt.label}</span>
                          </div>
                          <p className="opt-context">{opt.context}</p>
                          <span className="opt-action-arrow">{isRTL ? '←' : '→'}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: WE HAVE SOMEWHERE TO START (FINAL BRIEF COMPLETE) */}
              {currentStep === 4 && (
                <motion.div 
                  key="step-4-complete"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28 }}
                  className="step-content-deck complete-deck"
                >
                  <div className="complete-badge-pill">
                    <span className="dot-green" />
                    <span>BRIEF SYNCHRONIZED</span>
                  </div>

                  <h3 className="complete-headline">
                    {brief.summary.readyHeadline}
                  </h3>

                  <p className="complete-sub">
                    {brief.summary.readySub}
                  </p>

                  <div className="brief-summary-card">
                    <div className="summary-row">
                      <span className="s-label">STRATEGIC VECTOR:</span>
                      <span className="s-val">{directionObj?.label}</span>
                    </div>
                    <div className="summary-row">
                      <span className="s-label">PRIMARY BOTTLENECK:</span>
                      <span className="s-val">{obstacleObj?.label}</span>
                    </div>
                    <div className="summary-row">
                      <span className="s-label">TARGET OUTCOME:</span>
                      <span className="s-val">{destinationObj?.label}</span>
                    </div>
                  </div>

                  <div className="complete-actions-wrap">
                    <button 
                      type="button" 
                      onClick={() => setIsModalOpen(true)}
                      className="brief-submit-btn"
                    >
                      <span>{brief.summary.ctaBtn}</span>
                    </button>

                    <button 
                      type="button" 
                      onClick={handleReset}
                      className="brief-reset-btn"
                    >
                      <span>{brief.summary.resetBtn}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: THE RESPONDING VISUAL ENVIRONMENT */}
          <div className="brief-visual-canvas">
            <div className="canvas-frame">
              <img 
                src={activeMedia.img} 
                alt="Magicency Strategic Deliverable & Systemic Artifact" 
                className="canvas-deliverable-img" 
                loading="lazy" 
              />
              <div className="canvas-glass-vignette" />
              
              <div className="canvas-meta-badge">
                <span className="badge-pulse" style={{ backgroundColor: activeMedia.color }} />
                <span>{activeMedia.badge}</span>
              </div>

              {/* Dynamic Status Indicator */}
              <div className="canvas-status-footer">
                <span className="status-label">ENVIRONMENT ADAPTATION //</span>
                <span className="status-val">{directionObj?.label || 'GROW FASTER'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            4. FINAL BRAND STATEMENT & RESOLUTION INTO FOOTER
            ========================================================= */}
        <div className="brief-final-resolution">
          <div className="resolution-statement">
            <span className="res-dim">{brief.summary.finalStatement1}</span>
            <span className="res-bold">{brief.summary.finalStatement2}</span>
          </div>
          <div className="resolution-signoff">
            <span>MAGICENCY GROWTH ARCHITECTURE // BRIEF INTAKE ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
