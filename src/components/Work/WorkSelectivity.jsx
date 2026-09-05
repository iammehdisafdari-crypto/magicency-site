import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SELECTIVITY_DATA } from '../../data/projectsData';
import { Stagger, editorialVariants } from '../motion';

export default function WorkSelectivity() {
  const { lang, isRTL } = useLanguage();
  const data = SELECTIVITY_DATA[lang] || SELECTIVITY_DATA.en;

  return (
    <section className="work-selectivity-section shared-section" aria-label="Selectivity & Credibility">
      <div className="container work-selectivity-container">

        {/* Statement Block */}
        <div className="work-selectivity-header">
          <span className="work-section-eyebrow">{data.badge}</span>
          <h2 className="work-selectivity-title">{data.headline}</h2>
          <p className="work-selectivity-subtext">{data.subtext}</p>
        </div>

        {/* Qualitative Commercial Outcomes Strip */}
        <div className="work-outcomes-strip">
          <Stagger stagger={0.08} className="work-outcomes-grid">
            {data.qualitativeStrip.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={editorialVariants}
                className="work-outcome-card"
              >
                <div className="outcome-card-top">
                  <span className="outcome-card-num">0{idx + 1}</span>
                  <span className="outcome-pulse-indicator" />
                </div>
                <h3 className="outcome-card-label">{item.label}</h3>
                <p className="outcome-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

      </div>
    </section>
  );
}
