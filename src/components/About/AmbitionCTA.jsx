import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { ArrowUpRight } from 'lucide-react';

import CTA from '../Common/CTA';

export default function AmbitionCTA() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
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
            <CTA
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              trackingName="start_project"
              trackingLocation="about_final_cta"
              ariaLabel={data.ctaButton}
            >
              {data.ctaButton}
            </CTA>

            <CTA
              variant="secondary"
              href="/work"
              trackingName="explore_work"
              trackingLocation="about_final_cta"
              arrowDirection="up-right"
              ariaLabel={data.secondaryAction}
            >
              {data.secondaryAction}
            </CTA>
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
