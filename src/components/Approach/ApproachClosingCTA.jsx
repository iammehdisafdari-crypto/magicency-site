import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import CTA from '../Common/CTA';

export default function ApproachClosingCTA() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const closing = t.approach?.closing || {};

  const handleOpenDiscovery = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="approach-section approach-closing-section" aria-label="Closing Statement and Project Discovery">
      <div className="container">
        <div className="approach-closing-card">
          {/* Ambient Glow */}
          <div className="closing-ambient-glow" aria-hidden="true" />

          {/* Eyebrow */}
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{isRTL ? 'پایان بریف‌های سطحی' : 'THE VERDICT'}</span>
          </div>

          {/* Core Philosophy Statement */}
          <div className="closing-statement-wrap">
            <h2 className="closing-statement-text">
              {closing.statement?.split('\n').map((line, i) => (
                <span key={i} className={`statement-line ${i === 1 ? 'highlight-amber' : ''}`}>
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* Primary Action Button */}
          <div className="closing-cta-action">
            <CTA
              variant="primary"
              onClick={handleOpenDiscovery}
              trackingName="start_project"
              trackingLocation="approach_closing_section"
              ariaLabel={closing.ctaButton || (isRTL ? 'شروع پروژه' : 'START A PROJECT')}
              className="approach-closing-cta"
            >
              {closing.ctaButton || (isRTL ? 'شروع پروژه' : 'START A PROJECT')}
            </CTA>
          </div>

          {/* Minimal Footnote */}
          <div className="closing-footnote">
            <span className="footnote-dot" />
            <span className="footnote-text">
              {isRTL 
                ? 'مشاوره استراتژیک تشخیصی // بدون کلیشه‌های متداول آژانسی' 
                : 'DIAGNOSTIC STRATEGIC INITIATION // NO AGENCY TEMPLATES'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
