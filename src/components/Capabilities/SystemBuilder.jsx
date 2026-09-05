import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SYSTEM_COMBINATIONS } from '../../data/capabilitiesData';

export default function SystemBuilder() {
  const { t, isRTL } = useLanguage();
  const b = t.capabilities?.builder || {};
  const [selectedComboId, setSelectedComboId] = useState(SYSTEM_COMBINATIONS[0].id);

  const activeCombo = SYSTEM_COMBINATIONS.find((c) => c.id === selectedComboId) || SYSTEM_COMBINATIONS[0];

  return (
    <section className="capabilities-section system-builder-section" aria-label="System Builder">
      <div className="container">
        {/* Section Header */}
        <div className="capabilities-section-header text-center">
          <div className="capabilities-eyebrow-pill">
            <span className="capabilities-pill-indicator" />
            <span className="capabilities-pill-text">{b.badge || '02 / ASSEMBLY'}</span>
          </div>
          <h2 className="capabilities-section-title">{b.title}</h2>
          <p className="capabilities-section-subtext">{b.subtext}</p>
        </div>

        {/* System Assembly Arena */}
        <div className="system-builder-stage">
          {/* Challenge Selector Pills */}
          <div className="builder-challenges-bar">
            <span className="challenge-bar-title">{b.challengeLabel || 'SELECT COMMERCIAL CHALLENGE'}</span>
            <div className="challenge-buttons-row">
              {SYSTEM_COMBINATIONS.map((combo) => {
                const isActive = combo.id === selectedComboId;
                const challenge = isRTL ? combo.challengeFa : combo.challengeEn;
                return (
                  <button
                    key={combo.id}
                    type="button"
                    onClick={() => setSelectedComboId(combo.id)}
                    className={`challenge-selector-btn ${isActive ? 'active' : ''}`}
                  >
                    <span className="challenge-bullet" />
                    <span className="challenge-text">{challenge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Assembled System Schematic Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCombo.id}
              className="assembled-schematic-card"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              {/* Top HUD Bar */}
              <div className="schematic-top-bar">
                <div className="schematic-badge">
                  <span className="schematic-pulse" />
                  <span>{b.builtLabel || 'SYSTEM ASSEMBLED'}</span>
                </div>
                <div className="schematic-result-tag">
                  <span>{isRTL ? activeCombo.resultFa : activeCombo.resultEn}</span>
                </div>
              </div>

              {/* Challenge Lead Quote */}
              <div className="schematic-challenge-header">
                <h3 className="challenge-quote">
                  {isRTL ? activeCombo.challengeFa : activeCombo.challengeEn}
                </h3>
                <p className="challenge-summary">
                  {isRTL ? activeCombo.summaryFa : activeCombo.summaryEn}
                </p>
              </div>

              {/* Snapped Components Pipeline */}
              <div className="assembled-components-track">
                {activeCombo.components.map((comp, idx) => (
                  <React.Fragment key={`${comp.nameEn}-${idx}`}>
                    <motion.div
                      className="assembled-component-chip"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.06 }}
                    >
                      <span className="chip-domain-tag">{comp.domainId.toUpperCase()}</span>
                      <span className="chip-title">{isRTL ? comp.nameFa : comp.nameEn}</span>
                      <span className="chip-status-dot" />
                    </motion.div>
                    {idx < activeCombo.components.length - 1 && (
                      <div className="component-pipe-link">
                        <span className="pipe-signal" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Bottom Insight Footer */}
              <div className="schematic-footer-bar">
                <span className="footer-label">{isRTL ? 'معماری راه‌حل' : 'SOLUTION ARCHITECTURE'}</span>
                <span className="footer-val">
                  {isRTL
                    ? 'اتصال ۶ جزء تخصصی در قالب یک سیستم خودگردان رشد'
                    : '6 synchronized components snapped into a self-sustaining growth loop'}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
