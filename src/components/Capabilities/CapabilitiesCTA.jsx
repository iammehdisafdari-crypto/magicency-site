import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import CTA from '../Common/CTA';

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
            <CTA
              variant="primary"
              onClick={handleOpenDiscovery}
              trackingName="start_project"
              trackingLocation="capabilities_cta_section"
              ariaLabel={closing.ctaButton || (isRTL ? 'شروع پروژه' : 'START A PROJECT')}
              className="capabilities-closing-cta"
            >
              {closing.ctaButton || (isRTL ? 'شروع پروژه' : 'START A PROJECT')}
            </CTA>
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
