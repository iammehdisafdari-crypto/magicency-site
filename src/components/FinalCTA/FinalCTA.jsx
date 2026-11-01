import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FoldRevealSection, FoldRevealText } from '../FoldReveal';
import CTA from '../Common/CTA';
import './FinalCTA.css';

export default function FinalCTA() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();

  const isPersian = lang === 'fa';

  const content = {
    eyebrow: isPersian ? '۰۱ / شروع یک مسیر' : '01 / START SOMETHING',
    headline: isPersian ? 'گام بعدی را هوشمندانه بردارید.' : 'MAKE THE NEXT MOVE.',
    supportingLine1: isPersian ? 'استراتژی، خلاقیت و فناوری،' : 'Strategy, creative, and technology',
    supportingLine2: isPersian ? 'هماهنگ برای رشد مقیاس‌پذیر شما.' : 'built around your growth.',
    ctaText: isPersian ? 'شروع پروژه' : 'START A PROJECT'
  };

  return (
    <section 
      id="contact" 
      className="final-cta-section" 
      aria-label={content.headline}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container final-cta-container">
        <FoldRevealSection
          replay={true}
          stagger={0.12}
          start="top 85%"
          end="bottom top"
          className="final-cta-header"
        >
          <p className="final-cta-eyebrow">
            <span className="final-cta-eyebrow-dash" aria-hidden="true">—</span>
            <span>{content.eyebrow}</span>
          </p>
          <FoldRevealText
            as="h2"
            className="final-cta-headline"
            text={content.headline}
            splitBy="word"
            hinge="top"
            duration={0.7}
            stagger={0.035}
            perspective={900}
            creaseShading={0.25}
          />
          <FoldRevealText
            as="p"
            className="final-cta-supporting"
            text={`${content.supportingLine1}\n${content.supportingLine2}`}
            splitBy="word"
            hinge="top"
            duration={0.65}
            stagger={0.025}
            perspective={900}
            creaseShading={0.2}
          />
        </FoldRevealSection>

        <div className="final-cta-action">
          <CTA
            variant="primary"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            trackingName="start_project"
            trackingLocation="final_cta_section"
            ariaLabel={content.ctaText}
            className="final-cta-btn"
          >
            {content.ctaText}
          </CTA>
        </div>
      </div>
    </section>
  );
}
