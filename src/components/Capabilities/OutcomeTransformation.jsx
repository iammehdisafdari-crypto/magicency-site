import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { OUTCOME_FLOW } from '../../data/capabilitiesData';

export default function OutcomeTransformation() {
  const { t, isRTL } = useLanguage();
  const o = t.capabilities?.outcome || {};
  const stages = OUTCOME_FLOW.stages;

  return (
    <section className="capabilities-section outcome-transformation-section" aria-label="From Capability to Outcome">
      <div className="container">
        {/* Section Header */}
        <div className="capabilities-section-header text-center">
          <div className="capabilities-eyebrow-pill">
            <span className="capabilities-pill-indicator" />
            <span className="capabilities-pill-text">{o.badge || '04 / TRANSFORMATION'}</span>
          </div>
          <h2 className="capabilities-section-title">{o.title}</h2>
          <p className="capabilities-section-subtext">{o.subtext}</p>
        </div>

        {/* 3-Beat Visual Transformation Flow */}
        <div className="transformation-pipeline-stage">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.id}>
              <motion.div
                className={`transformation-step-card ${stage.id === 'system' ? 'highlight-system' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="step-card-header">
                  <span className="step-tag">{isRTL ? stage.tagFa : stage.tagEn}</span>
                  <span className="step-order">0{idx + 1}</span>
                </div>
                <h3 className="step-title">{isRTL ? stage.titleFa : stage.titleEn}</h3>
                <p className="step-subtitle">{isRTL ? stage.subtitleFa : stage.subtitleEn}</p>
                <div className="step-bottom-indicator">
                  <span className="step-live-dot" />
                  <span className="step-status">{isRTL ? 'تکمیل‌شده' : 'SYNCHRONIZED'}</span>
                </div>
              </motion.div>

              {idx < stages.length - 1 && (
                <div className="transformation-step-arrow" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    {isRTL ? (
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    ) : (
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    )}
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
