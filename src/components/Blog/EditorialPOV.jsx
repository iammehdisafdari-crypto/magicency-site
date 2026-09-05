import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EDITORIAL_PRINCIPLES } from '../../data/blogData';

export default function EditorialPOV() {
  const { t, isRTL } = useLanguage();
  const pov = t.blog?.pov || {};

  return (
    <section className="editorial-pov-section" aria-label="Editorial Point of View">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-pov-header">
          <div className="pov-badge-wrap">
            <span className="pov-dot" />
            <span className="pov-badge-text">{pov.badge || 'EDITORIAL CREED'}</span>
          </div>

          <h2 className="pov-headline">
            {pov.headline}
          </h2>

          <p className="pov-subline">
            {pov.subline}
          </p>
        </div>

        {/* 3 Editorial Principles Triptych */}
        <div className="pov-principles-grid">
          {EDITORIAL_PRINCIPLES.map((prin, idx) => (
            <motion.div
              key={prin.id}
              className="pov-principle-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="principle-top-line">
                <span className="principle-num">{prin.num}</span>
                <span className="principle-tag">{isRTL ? prin.tagFa : prin.tagEn}</span>
              </div>

              <h3 className="principle-question">
                {isRTL ? prin.questionFa : prin.questionEn}
              </h3>

              <p className="principle-desc">
                {isRTL ? prin.descFa : prin.descEn}
              </p>

              <div className="principle-corner-bracket" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
