import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SYSTEM_PILLARS } from '../../data/growthArchitecture';

export default function SystemNotSilos() {
  const { t, lang } = useLanguage();
  const pillarsMeta = t.approach?.pillars || {};
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="approach-section pillars-visual-section" id="the-architecture">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-editorial-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{pillarsMeta.eyebrow}</span>
          </div>

          <motion.h2
            className="section-editorial-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {pillarsMeta.headline}
          </motion.h2>

          <motion.p
            className="section-editorial-lead"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {pillarsMeta.lead}
          </motion.p>
        </div>

        {/* ONE LARGE INTEGRATED VISUAL COMPOSITION */}
        <motion.div
          className="architecture-monolith-stage"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Visual Canvas Backdrop */}
          <div className="monolith-media-canvas">
            <img
              src="/whatwedo-1.webp"
              alt="Three Pillars of Growth Architecture"
              className="monolith-media-img"
              loading="lazy"
            />
            <div className="monolith-scrim" />
            <div className="monolith-signal-grid" aria-hidden="true" />
          </div>

          {/* 3 Integrated Architectural Focal Points Overlaid Across The Visual */}
          <div className="monolith-pillars-overlay">
            {SYSTEM_PILLARS.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              const category = lang === 'fa' ? pillar.categoryFa : pillar.categoryEn;
              const question = lang === 'fa' ? pillar.questionFa : pillar.questionEn;
              const desc = lang === 'fa' ? pillar.descFa : pillar.descEn;

              return (
                <div
                  key={pillar.num}
                  className={`integrated-pillar-panel ${isSelected ? 'is-active' : ''}`}
                  onMouseEnter={() => setActivePillar(idx)}
                  onClick={() => setActivePillar(idx)}
                >
                  <div className="pillar-header-line">
                    <span className="pillar-serial">{pillar.num}</span>
                    <span className="pillar-tag">{category}</span>
                  </div>

                  <h3 className="pillar-focus-question">{question}</h3>

                  <p className="pillar-focus-desc">{desc}</p>

                  <div className="pillar-anchor-dot">
                    <span className="dot-ring" />
                    <span className="dot-core" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Architectural Legend Bar */}
          <div className="monolith-legend-bar" aria-hidden="true">
            <span className="legend-tag">ONE SYNCHRONIZED COMMERCIAL ENGINE</span>
            <span className="legend-flow">CUSTOMER → OFFER → SYSTEM</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
