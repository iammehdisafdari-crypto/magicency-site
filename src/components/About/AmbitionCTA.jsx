import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { FoldRevealSection, FoldRevealText } from '../FoldReveal';
import CTA from '../Common/CTA';

export default function AmbitionCTA() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
  const ctaData = ABOUT_DATA[lang]?.finalCta || ABOUT_DATA.en.finalCta;

  return (
    <section 
      id="section-cta" 
      className={`about-chapter-section final-cta-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 11: Final Call to Action"
    >
      {/* Visual Ambient Field */}
      <div className="final-cta-ambient-glow" aria-hidden="true" />

      <div className="container final-cta-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{ctaData.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{ctaData.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{ctaData.badge}</span>
          </div>
        </div>

        {/* Narrative Conclusion Oversized Typography */}
        <FoldRevealSection replay={true} stagger={0.12} className="final-cta-monument-wrap">
          <FoldRevealText
            as="h2"
            className="final-cta-monument-title"
            text={`${ctaData.headlinePart1}\n${ctaData.headlinePart2}`}
            highlightWords={[ctaData.headlinePart2]}
          />

          <FoldRevealText
            as="p"
            className="final-cta-lead"
            text={ctaData.lead}
          />

          {/* Action Hub */}
          <div className="final-cta-actions-row">
            <CTA
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              trackingName="start_strategic_conversation"
              trackingLocation="about_final_cta"
              ariaLabel={ctaData.ctaButton}
            >
              {ctaData.ctaButton}
            </CTA>

            <CTA
              variant="secondary"
              href="/work"
              trackingName="explore_work_final"
              trackingLocation="about_final_cta"
              arrowDirection="up-right"
              ariaLabel={ctaData.secondaryAction}
            >
              {ctaData.secondaryAction}
            </CTA>
          </div>

          <div className="final-cta-direct-line">
            <span className="direct-dot">●</span>
            <span className="direct-text">{ctaData.directContact}</span>
          </div>

        </FoldRevealSection>

      </div>
    </section>
  );
}
