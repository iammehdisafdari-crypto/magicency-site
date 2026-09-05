import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function CapabilitiesCTA() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const closing = t.capabilities?.closing || {};

  const handleOpenDiscovery = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="capabilities-section capabilities-cta-section" aria-label="Capabilities Project Initiation">
      <div className="container">
        <div className="capabilities-cta-card">
          {/* Ambient Glow */}
          <div className="cta-ambient-glow" aria-hidden="true" />

          {/* Eyebrow */}
          <div className="capabilities-eyebrow-pill">
            <span className="capabilities-pill-indicator" />
            <span className="capabilities-pill-text">
              {closing.eyebrow || (isRTL ? 'شروع همکاری' : 'GET STARTED')}
            </span>
          </div>

          {/* Large Statement */}
          <div className="cta-statement-wrap">
            <h2 className="cta-statement-title">
              <span className="statement-row">{closing.statementLine1}</span>
              <span className="statement-row highlight-amber">{closing.statementLine2}</span>
            </h2>
          </div>

          {/* Action Button */}
          <div className="cta-action-wrap">
            <button
              type="button"
              className="capabilities-primary-btn"
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
          <div className="cta-footnote">
            <span className="footnote-dot" />
            <span className="footnote-text">
              {isRTL
                ? 'مشاوره تشخیصی اولیه // مهندسی سیستم اختصاصی رشد'
                : 'DIAGNOSTIC ARCHITECTURE DISCOVERY // TAILORED SYSTEM ENGINEERING'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
