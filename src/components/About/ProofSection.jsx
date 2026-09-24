import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import CTA from '../Common/CTA';

export default function ProofSection() {
  const { lang, isRTL } = useLanguage();
  const proof = ABOUT_DATA[lang]?.proof || ABOUT_DATA.en.proof;
  const metrics = proof.metrics || [];
  const principles = proof.principles || [];

  return (
    <section 
      id="section-proof" 
      className={`about-chapter-section proof-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 03: Verified Proof and Scale"
    >
      <div className="container proof-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{proof.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{proof.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{proof.chapterTag}</span>
          </div>
        </div>

        <div className="proof-intro-block">
          <h2 className="proof-headline">{proof.title}</h2>
          <p className="proof-lead">{proof.lead}</p>
        </div>

        {/* 4 Audited Metric Blocks (100% Verified from Real Projects) */}
        <div className="proof-metrics-grid">
          {metrics.map((metric, idx) => (
            <div key={idx} className="proof-metric-card">
              <div className="metric-top-bar">
                <span className="metric-client-tag">{metric.client}</span>
                <span className="metric-verified-dot" title="Audited Telemetry">● AUDITED DATA</span>
              </div>

              <div className="metric-number-display">
                <span className="metric-giant-number">{metric.num}</span>
              </div>

              <h3 className="metric-label">{metric.label}</h3>
              <p className="metric-detail">{metric.detail}</p>

              <div className="metric-bottom-rule" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Measurable Operating Principles */}
        {principles.length > 0 && (
          <div className="proof-principles-grid">
            {principles.map((pr) => (
              <div key={pr.code} className="proof-principle-item">
                <span className="principle-code">{pr.code} // AUDITED PROTOCOL</span>
                <h4 className="principle-title">{pr.title}</h4>
                <p className="principle-desc">{pr.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Verified Case Study Seal & Navigation Link */}
        <div className="proof-bottom-anchor">
          <div className="case-study-seal">
            <span className="seal-spark">✦</span>
            <span className="seal-note">{proof.caseStudyNote}</span>
          </div>

          <CTA
            variant="secondary"
            size="compact"
            href="/work"
            trackingName="explore_documented_work"
            trackingLocation="about_proof_section"
            arrowDirection="up-right"
            ariaLabel={isRTL ? 'مشاهده همه پروژه‌های مستند' : 'EXPLORE DOCUMENTED WORK'}
            className="proof-explore-cta"
          >
            {isRTL ? 'مشاهده همه پروژه‌های مستند' : 'EXPLORE DOCUMENTED WORK'}
          </CTA>
        </div>

      </div>
    </section>
  );
}
