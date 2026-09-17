import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
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
        <div className="final-cta-header">
          <p className="final-cta-eyebrow">
            <span className="final-cta-eyebrow-dash" aria-hidden="true">—</span>
            <span>{content.eyebrow}</span>
          </p>
          <h2 className="final-cta-headline">
            {content.headline}
          </h2>
          <p className="final-cta-supporting">
            {content.supportingLine1}
            <br className="final-cta-break" />
            {content.supportingLine2}
          </p>
        </div>

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
