import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

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
            <button
              type="button"
              className="approach-primary-cta-btn"
              onClick={handleOpenDiscovery}
              aria-label={closing.ctaButton || (isRTL ? 'شروع پروژه' : 'START A PROJECT')}
            >
              <span className="btn-glow-border" />
              <span className="btn-inner">
                <span className="btn-label">{closing.ctaButton || (isRTL ? 'شروع پروژه' : 'START A PROJECT')}</span>
                <span className="btn-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    {isRTL ? (
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    ) : (
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    )}
                  </svg>
                </span>
              </span>
            </button>
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
