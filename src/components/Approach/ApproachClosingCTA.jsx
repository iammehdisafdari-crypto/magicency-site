import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import CTA from '../Common/CTA';

export default function ApproachClosingCTA() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const closing = t.approach?.closingCta || {};

  const handleOpenDiscovery = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="approach-section closing-visual-cta-section" id="closing-cta" aria-label="Closing Growth Architecture Call to Action">
      {/* Background Cinematic Visual */}
      <div className="closing-media-backdrop">
        <img
          src="/whatwedo-3.webp"
          alt="Engineering Growth Systems"
          className="closing-bg-img"
          loading="lazy"
        />
        <div className="closing-media-scrim" />
      </div>

      <div className="container closing-container">
        <motion.div
          className="closing-cinematic-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{closing.eyebrow}</span>
          </div>

          {/* Headline */}
          <div className="closing-statement-wrap">
            <h2 className="closing-cinematic-headline">
              {closing.headline}
            </h2>
            <p className="closing-cinematic-subhead">
              {closing.subhead}
            </p>
          </div>

          {/* Action Button */}
          <div className="closing-action-wrap">
            <CTA
              variant="primary"
              onClick={handleOpenDiscovery}
              trackingName="start_project"
              trackingLocation="approach_closing_cta"
              ariaLabel={closing.button || (isRTL ? 'شروع عارضه‌یابی رشد' : 'Start Growth Diagnosis')}
              className="approach-closing-cta-button"
            >
              {closing.button || (isRTL ? 'شروع عارضه‌یابی رشد' : 'Start Growth Diagnosis')}
            </CTA>
          </div>

          {/* Minimalist Footnote */}
          <div className="closing-footnote" aria-hidden="true">
            <span className="footnote-pulse-dot" />
            <span className="footnote-text">
              {isRTL
                ? 'استراتژی ← تجربه ← جذب ← سنجش ← بهینه‌سازی ← رشد تصاعدی'
                : 'Strategy → Experience → Acquisition → Measurement → Optimization → Growth'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
