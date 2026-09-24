import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { OPERATING_MODEL_LAYERS } from '../../data/growthArchitecture';

const STAGE_VISUAL_ASSETS = [
  { img: '/assets/capabilities/strategy.webp', telemetry: 'INPUT // UNIT ECONOMICS & CONSTRAINTS' },
  { img: '/assets/capabilities/analytics.webp', telemetry: 'INSIGHT // DETERMINISTIC COMMERCIAL SIGNALS' },
  { img: '/assets/capabilities/creative.webp', telemetry: 'ACTION // HIGH-CONVICTION CAMPAIGN EXECUTION' },
  { img: '/assets/capabilities/experimentation.webp', telemetry: 'SIGNAL // SERVER-SIDE TELEMETRY' },
  { img: '/assets/capabilities/performance.webp', telemetry: 'OPTIMIZATION // CAPITAL REALLOCATION' },
  { img: '/assets/capabilities/growth_systems.webp', telemetry: 'COMPOUNDING // PERMANENT VALUE ACCRETION' }
];

export default function OperatingModelLayers() {
  const { t, lang, isRTL } = useLanguage();
  const model = t.approach?.operatingModel || {};
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeVisual = STAGE_VISUAL_ASSETS[activeStageIndex];
  const activeLayer = OPERATING_MODEL_LAYERS[activeStageIndex];

  return (
    <section className="approach-section methodology-journey-section" id="the-operating-model">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-editorial-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{model.eyebrow}</span>
          </div>

          <motion.h2
            className="section-editorial-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {model.headline}
          </motion.h2>

          <motion.p
            className="section-editorial-lead"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {model.desc}
          </motion.p>
        </div>

        {/* CINEMATIC VISUAL JOURNEY ACROSS 6 STAGES */}
        <div className="methodology-journey-grid">
          
          {/* LEFT 55%: DYNAMIC EVOLVING VISUAL STAGE */}
          <div className="journey-visual-column">
            <div className="journey-stage-display">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStageIndex}
                  className="journey-media-frame"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={activeVisual.img}
                    alt={activeLayer.nameEn}
                    className="journey-media-img"
                    loading="lazy"
                  />
                  <div className="journey-media-vignette" />
                  
                  {/* Floating HUD Information in Media */}
                  <div className="journey-media-hud">
                    <div className="journey-hud-top">
                      <span className="journey-hud-pulse" />
                      <span className="journey-hud-telemetry">{activeVisual.telemetry}</span>
                    </div>

                    <div className="journey-hud-bottom">
                      <span className="journey-hud-stage-num">{activeLayer.num}</span>
                      <span className="journey-hud-stage-title">
                        {lang === 'fa' ? activeLayer.nameFa : activeLayer.nameEn}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT 45%: SLEEK INTERACTIVE STAGE SELECTOR (1 Sentence per stage) */}
          <div className="journey-stages-column">
            <div className="journey-stages-track">
              {OPERATING_MODEL_LAYERS.map((layer, idx) => {
                const isActive = activeStageIndex === idx;
                const name = lang === 'fa' ? layer.nameFa : layer.nameEn;
                const desc = lang === 'fa' ? layer.descFa : layer.descEn;

                return (
                  <div
                    key={layer.num}
                    className={`journey-stage-item ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveStageIndex(idx)}
                    onMouseEnter={() => setActiveStageIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveStageIndex(idx);
                      }
                    }}
                  >
                    <div className="stage-item-marker">
                      <span className="stage-item-index">{layer.num}</span>
                      <span className="stage-item-glyph">{layer.icon}</span>
                    </div>

                    <div className="stage-item-content">
                      <h3 className="stage-item-title">{name}</h3>
                      <p className="stage-item-sentence">{desc}</p>
                    </div>

                    <div className="stage-item-active-bar" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
