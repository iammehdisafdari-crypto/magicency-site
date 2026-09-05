import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function RequestDeconstruction() {
  const { t, isRTL } = useLanguage();
  const d = t.approach?.deconstruction || {};
  const [activeProblemId, setActiveProblemId] = useState(d.problems?.[0]?.id || 'positioning');

  const problems = d.problems || [];
  const activeProblem = problems.find((p) => p.id === activeProblemId) || problems[0];

  return (
    <section className="approach-section deconstruction-section" aria-label="Request Deconstruction">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header text-center">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{d.badge || '01 / DIAGNOSIS'}</span>
          </div>
          <h2 className="approach-section-title">{d.title}</h2>
          <p className="approach-section-subtext">{d.subtext}</p>
        </div>

        {/* Interactive Deconstruction Stage */}
        <div className="deconstruction-stage">
          {/* Surface Request Source Block */}
          <div className="surface-request-card">
            <div className="card-top-bar">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="source-label">{d.requestPrompt}</span>
            </div>
            <div className="request-quote-content">
              <span className="quote-mark">“</span>
              <p className="request-quote-text">{d.requestQuote?.replace(/["“]/g, '')}</p>
              <span className="quote-mark">”</span>
            </div>
            <div className="deconstruct-arrow-pulse">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>

          {/* Branching SVG Connections */}
          <div className="deconstruction-branches-grid">
            {problems.map((prob, idx) => {
              const isSelected = prob.id === activeProblemId;
              return (
                <motion.div
                  key={prob.id}
                  className={`deconstruction-node ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveProblemId(prob.id)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="node-indicator">
                    <span className="node-num">0{idx + 1}</span>
                    <span className="node-signal" />
                  </div>
                  <h3 className="node-title">{prob.title}</h3>
                  <p className="node-desc">{prob.desc}</p>
                  
                  <div className="node-status-bar">
                    <span className="status-label">{isRTL ? 'تحلیل ریشه‌ای' : 'ROOT CAUSE'}</span>
                    <span className="status-tag">{isRTL ? 'فعال' : 'ACTIVE'}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Deep Insight Highlight Display */}
          {activeProblem && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProblem.id}
                className="deconstruction-deep-insight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="insight-pulse-indicator" />
                <div className="insight-text-group">
                  <span className="insight-pretitle">
                    {d.revealedTitle} // {activeProblem.title}
                  </span>
                  <p className="insight-body">{activeProblem.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
