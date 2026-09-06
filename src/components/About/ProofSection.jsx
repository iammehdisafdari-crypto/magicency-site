import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { ArrowUpRight } from 'lucide-react';

export default function ProofSection() {
  const { lang, isRTL } = useLanguage();
  const { navigate } = useRouter();
  const data = ABOUT_DATA[lang]?.proof || ABOUT_DATA.en.proof;
  const metrics = data.metrics || [];

  return (
    <section 
      id="section-06" 
      className={`about-chapter-section proof-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 06: Verified Proof"
    >
      <div className="container proof-container">
        
        {/* Section Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{data.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{data.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{data.chapterTag}</span>
          </div>
        </div>

        <div className="proof-intro-block">
          <h2 className="proof-headline">{data.title}</h2>
          <p className="proof-lead">{data.lead}</p>
        </div>

        {/* Large Numbers & Verified Metrics Grid */}
        <div className="proof-metrics-grid">
          {metrics.map((metric, idx) => (
            <div key={idx} className="proof-metric-card">
              <div className="metric-top-bar">
                <span className="metric-client-tag">{metric.client}</span>
                <span className="metric-verified-dot" title="Verified Architecture">● VERIFIED</span>
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

        {/* Verified Case Study Link Bar */}
        <div className="proof-bottom-anchor">
          <div className="case-study-seal">
            <span className="seal-spark">✦</span>
            <span className="seal-note">{data.caseStudyNote}</span>
          </div>

          <button
            type="button"
            onClick={() => navigate('/work')}
            className="proof-explore-btn"
          >
            <span>{isRTL ? 'مشاهده همه پروژه‌های مهندسی‌شده' : 'EXPLORE DOCUMENTED WORK'}</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
