import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function DecisionPhilosophy() {
  const { t, isRTL } = useLanguage();
  const dp = t.approach?.decisionPhilosophy || {};
  const decisions = dp.decisions || [];

  return (
    <section className="approach-decision-section" aria-label="Decision-Making Philosophy">
      <div className="container approach-decision-container">
        
        {/* Header Block */}
        <div className="decision-header-block">
          <span className="approach-tag-label">{dp.badge || 'DECISION ARCHITECTURE'}</span>
          <h2 className="decision-main-title">
            {dp.headline || 'Every output is a business decision.'}
          </h2>
          <p className="decision-main-sub">
            {dp.subheadline}
          </p>
        </div>

        {/* Large Editorial Typographic Sequence (Not generic cards) */}
        <div className="decision-editorial-sequence">
          {decisions.map((item, idx) => (
            <motion.div 
              key={idx}
              className="decision-row-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: EASING.PRIMARY }}
            >
              <div className="decision-index-col">
                <span className="decision-num">0{idx + 1}</span>
              </div>

              <div className="decision-main-col">
                <div className="decision-statement-row">
                  <span className="decision-output-name">{item.output}</span>
                  <span className="decision-is-verb text-gradient-amber">{item.is}</span>
                </div>
                <p className="decision-consequence-desc">
                  {item.desc}
                </p>
              </div>

              <div className="decision-decor-line" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
