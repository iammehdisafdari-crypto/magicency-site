import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PRINCIPLES_LIST } from '../../data/growthArchitecture';

export default function PrinciplesSection() {
  const { t, isRTL } = useLanguage();
  const p = t.approach?.principles || {};

  return (
    <section className="approach-section approach-principles-section" id="our-principles">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{p.eyebrow}</span>
          </div>

          <h2 className="approach-section-title">
            {p.headline}
          </h2>

          <p className="principles-intro-lead">
            {p.listIntro}
          </p>
        </div>

        {/* Editorial Rejection & Conviction Rows */}
        <div className="principles-editorial-stream">
          {PRINCIPLES_LIST.map((item, idx) => (
            <motion.div
              key={idx}
              className="principle-editorial-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="principle-col-dont">
                <span className="dont-strikethrough-tag">✕</span>
                <span className="dont-term">{isRTL ? item.dontFa : item.dontEn}</span>
              </div>

              <div className="principle-col-divider" aria-hidden="true">
                <span className="col-divider-dash" />
              </div>

              <div className="principle-col-do">
                <span className="do-conviction-check">✓</span>
                <p className="do-conviction-text">{isRTL ? item.doFa : item.doEn}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confident Concluding Conviction Frame */}
        <div className="principles-conclusion-frame">
          <div className="conclusion-quotemark" aria-hidden="true">“</div>
          <p className="principles-conclusion-statement">
            {p.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
