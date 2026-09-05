import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function ManifestoBeliefs() {
  const { t, isRTL } = useLanguage();
  const beliefsData = t.about?.beliefs || {};
  const items = beliefsData.items || [];

  const [activeIdx, setActiveIdx] = useState(0);

  const activeItem = items[activeIdx] || items[0] || {};

  return (
    <section className="manifesto-section" aria-label="Magicency Beliefs Manifesto">
      <div className="container manifesto-container">

        {/* Section Heading Bar */}
        <div className="manifesto-header-bar">
          <div className="manifesto-eyebrow-pill">
            <span className="dot-pulse" />
            <span>{beliefsData.eyebrow || '02 / PHILOSOPHICAL FOUNDATION'}</span>
          </div>
          <h2 className="manifesto-section-title">
            {beliefsData.title || 'What We Believe.'}
          </h2>
          <p className="manifesto-section-subtitle">
            {beliefsData.subtitle || 'Five non-negotiable principles that guide every system we engineer.'}
          </p>
        </div>

        {/* Manifesto Interaction Engine: No Generic Value Cards */}
        <div className="manifesto-interactive-stage">
          
          {/* Left / Top Spine: Large Progressive Index List */}
          <div className="manifesto-spine-list" role="tablist" aria-label="Beliefs Index">
            {items.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={item.id || idx}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIdx(idx)}
                  className={`manifesto-spine-node ${isSelected ? 'is-active' : ''}`}
                >
                  <span className="node-numeral">{item.number}</span>
                  <div className="node-text-wrap">
                    <span className="node-headline">{item.title}</span>
                    <span className="node-essence">{item.explanation}</span>
                  </div>
                  <span className="node-focus-indicator" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          {/* Right / Display Area: Oversized Typography & Progressive Reveal */}
          <div className="manifesto-display-canvas">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="manifesto-display-card"
              >
                {/* Massive Architectural Ghost Numeral */}
                <span className="manifesto-giant-ghost" aria-hidden="true">
                  {activeItem.number}
                </span>

                <div className="manifesto-display-content">
                  <div className="manifesto-card-tag">
                    <span className="tag-spark">✦</span>
                    <span className="tag-text">PRINCIPLE {activeItem.number} // NON-NEGOTIABLE</span>
                  </div>

                  <h3 className="manifesto-display-title">
                    {activeItem.title}
                  </h3>

                  <div className="manifesto-separator-line" />

                  <p className="manifesto-display-explanation">
                    {activeItem.explanation}
                  </p>

                  <p className="manifesto-display-elaboration">
                    {activeItem.elaboration}
                  </p>

                  {/* Editorial Telemetry Seal */}
                  <div className="manifesto-telemetry-badge">
                    <span className="telemetry-label">DISCIPLINE ENFORCEMENT //</span>
                    <span className="telemetry-status">TESTED IN ACTIVE MARKETS</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
