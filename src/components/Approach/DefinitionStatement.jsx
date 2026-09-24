import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function DefinitionStatement() {
  const { t, isRTL } = useLanguage();
  const statement = t.approach?.statement || {};

  return (
    <section className="approach-section definition-media-section" id="the-definition">
      <div className="container">
        <div className="definition-media-grid">
          
          {/* 55% DOMINANT EDITORIAL IMAGE FRAME */}
          <motion.div
            className="definition-visual-col"
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="editorial-media-wrapper">
              <img
                src="/assets/capabilities/strategy.webp"
                alt="System of Connected Decisions"
                className="editorial-media-img"
                loading="lazy"
              />
              <div className="editorial-media-scrim" />
              
              {/* Media Telemetry Overlay */}
              <div className="editorial-media-caption">
                <span className="caption-tag">FIG. 01 // ARCHITECTURAL BASELINE</span>
                <span className="caption-title">
                  {isRTL ? 'پیوند استراتژی تجاری و اقتصاد واحد' : 'COMMERCIAL UNIT ECONOMICS ALIGNMENT'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* 45% CONCISE STATEMENT & EDITORIAL COPY */}
          <div className="definition-content-col">
            <div className="approach-eyebrow-pill">
              <span className="approach-pill-indicator" />
              <span className="approach-pill-text">{statement.eyebrow}</span>
            </div>

            <motion.h2 
              className="definition-large-statement"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {statement.headline}
            </motion.h2>

            <motion.div
              className="definition-concise-body"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="statement-lead-paragraph">
                {statement.p1}
              </p>
              
              <div className="definition-conviction-quote">
                <span className="quote-accent-bar" aria-hidden="true" />
                <p className="quote-text">
                  {isRTL
                    ? 'رشد در انجام کارهای بیشتر بازاریابی نیست؛ در پیوند تصمیم‌ها، آزمودن شواهد و ایجاد هم‌افزایی تصاعدی است.'
                    : 'Growth is not about doing more marketing. It is about understanding the business, making better decisions, and allowing what is learned to compound.'}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
