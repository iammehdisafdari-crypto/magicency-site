import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { ArrowUpRight } from 'lucide-react';

export default function AmbitionCTA() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
  const { navigate } = useRouter();
  const data = ABOUT_DATA[lang]?.finalCta || ABOUT_DATA.en.finalCta;

  return (
    <section 
      id="section-09" 
      className={`about-chapter-section final-cta-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 09: Final Call to Action"
    >
      {/* Visual Ambient Field */}
      <div className="final-cta-ambient-glow" aria-hidden="true" />

      <div className="container final-cta-container">
        
        {/* Section Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{data.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{data.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{data.badge}</span>
          </div>
        </div>

        {/* Narrative Conclusion Oversized Typography */}
        <div className="final-cta-monument-wrap">
          <h2 className="final-cta-monument-title">
            <span className="title-row block">{data.headlinePart1}</span>
            <span className="title-row block highlight-orange">{data.headlinePart2}</span>
          </h2>

          <p className="final-cta-lead">{data.lead}</p>

          {/* Action Hub */}
          <div className="final-cta-actions-row">
            {/* Primary Action Button (Triggers Project Discovery Modal) */}
            <motion.button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="final-cta-primary-btn"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="btn-glow-dot" />
              <span className="btn-text">{data.ctaButton}</span>
              <span className="btn-arrow" aria-hidden="true">{isRTL ? '←' : '→'}</span>
            </motion.button>

            {/* Secondary Action */}
            <button
              type="button"
              onClick={() => navigate('/work')}
              className="final-cta-secondary-link"
            >
              <span>{data.secondaryAction}</span>
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="final-cta-direct-line">
            <span className="direct-dot">●</span>
            <span className="direct-text">{data.directContact}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
