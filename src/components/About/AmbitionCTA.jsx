import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function AmbitionCTA() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const ambitionData = t.about?.ambition || {};

  return (
    <section className="ambition-cta-section" aria-label="The Ambition and Closing Call to Action">
      {/* Visual Loop Ambient Aura */}
      <div className="ambition-aura-glow" aria-hidden="true" />

      <div className="container ambition-cta-container">
        
        {/* =========================================================
            CLOSED-LOOP VISUAL RECURSION: HERO THEME RETURNS IN UNITY
            ========================================================= */}
        <div className="ambition-closed-loop-stage" aria-hidden="true">
          <svg className="closed-loop-svg" viewBox="0 0 800 320">
            <defs>
              <linearGradient id="loopGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4500" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#FFA500" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Harmonious Infinity / Closed Loop Orbit */}
            <path
              d="M 200,160 C 200,90 320,90 400,160 C 480,230 600,230 600,160 C 600,90 480,90 400,160 C 320,230 200,230 200,160 Z"
              fill="none"
              stroke="url(#loopGoldGrad)"
              strokeWidth="2"
              filter="url(#glowFilter)"
              className="infinite-orbit-path"
            />

            {/* Orbiting Satellite Luminous Points */}
            <circle cx="200" cy="160" r="4" fill="#FF4500" className="satellite-pulse" />
            <circle cx="400" cy="160" r="5" fill="#FFA500" className="satellite-pulse" />
            <circle cx="600" cy="160" r="4" fill="#FF4500" className="satellite-pulse" />
          </svg>

          {/* Core Telemetry Tag */}
          <div className="loop-status-pill">
            <span className="status-spark">✦</span>
            <span>{ambitionData.badge || 'CLOSED-LOOP IMPACT // 2026'}</span>
          </div>
        </div>

        {/* =========================================================
            FINAL EMOTIONAL STATEMENT
            ========================================================= */}
        <div className="ambition-content-core">
          <div className="ambition-eyebrow-tag">
            <span>{ambitionData.eyebrow || '05 / THE AMBITION'}</span>
          </div>

          <h2 className="ambition-headline">
            {ambitionData.headline || 'Build things that matter.'}
          </h2>

          <p className="ambition-copy">
            {ambitionData.copy || 'We want to work with businesses where better thinking, better systems, and better execution can create meaningful change.'}
          </p>

          <div className="ambition-closing-question">
            <span>{ambitionData.closingQuestion || 'WHAT ARE YOU TRYING TO CHANGE?'}</span>
          </div>

          {/* Primary Action Button: Triggers Existing Project Discovery Modal */}
          <div className="ambition-cta-wrapper">
            <motion.button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="ambition-primary-btn"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Start a Project with Magicency"
            >
              <span className="btn-spark">✱</span>
              <span className="btn-label">{ambitionData.ctaLabel || 'START A PROJECT'}</span>
              <span className="btn-arrow" aria-hidden="true">{isRTL ? '←' : '→'}</span>
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}
