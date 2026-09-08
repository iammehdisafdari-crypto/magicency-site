import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function WorkFeaturedCase() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
  
  // Find flagship case (Search Console Organic Growth Engine)
  const flagship = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];

  const imageAltText = lang === 'fa'
    ? 'داشبورد عملکرد سئو در سرچ کنسول گوگل با ۸۴.۱ هزار کلیک ارگانیک و ۵.۱۸ میلیون ایمپرشن'
    : 'Google Search Console verified performance dashboard with 84.1K organic clicks and 5.18M impressions';

  return (
    <section 
      id="organic-growth-engine"
      className="work-featured-section shared-section" 
      aria-labelledby="flagship-case-title"
    >
      <div className="container work-featured-container">

        {/* Top Flagship Header */}
        <div className="work-featured-header-row">
          <div className="work-featured-eyebrow-wrap">
            <span className="work-featured-tag">
              {lang === 'fa' ? 'پرونده برجسته // ۰۱' : 'FLAGSHIP CASE // 01'}
            </span>
            <span className="work-featured-industry">
              {flagship.industry[lang] || flagship.industry.en}
            </span>
          </div>
          <div className="work-featured-year-stamp">
            <span>{flagship.year}</span>
          </div>
        </div>

        {/* Flagship Title & Meta */}
        <div className="work-featured-title-block">
          <h2 id="flagship-case-title" className="work-featured-client-name">
            {flagship.client[lang] || flagship.client.en}
          </h2>
          <p className="work-featured-project-subtitle">
            {flagship.title[lang] || flagship.title.en}
          </p>
        </div>

        {/* Google Search Console Audited Performance Metrics HUD */}
        {flagship.metrics && (
          <div 
            className="work-featured-metrics-grid" 
            role="region" 
            aria-label={lang === 'fa' ? 'شاخص‌های کلیدی عملکرد در سرچ کنسول گوگل' : 'Google Search Console Key Performance Metrics'}
          >
            {flagship.metrics.map((metric) => (
              <div 
                key={metric.id}
                className={`featured-metric-card ${metric.variant ? `highlight-${metric.variant}` : ''}`}
              >
                <div className="metric-card-top">
                  <div className="metric-label-wrap">
                    <span 
                      className={`metric-status-dot ${metric.variant || ''}`} 
                      aria-hidden="true" 
                    />
                    <span className="metric-label">
                      {metric.label[lang] || metric.label.en}
                    </span>
                  </div>
                  {metric.checked && (
                    <span className="metric-badge-indicator" aria-hidden="true">
                      ✓ Active
                    </span>
                  )}
                </div>
                <div className="metric-value-wrap">
                  <span className="metric-number">{metric.value}</span>
                </div>
                <span className="metric-context">
                  {metric.subtext[lang] || metric.subtext.en}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Timeline Verification Strip */}
        {flagship.timeline && (
          <div className="work-featured-timeline-row">
            <span className="timeline-badge-pulse" aria-hidden="true" />
            <span className="timeline-label">
              {flagship.timeline[lang] || flagship.timeline.en}
            </span>
          </div>
        )}

        {/* Monolithic Cinematic Visual Media */}
        <div className="work-featured-media-stage">
          <div className="work-featured-media-inner">
            <img 
              src={flagship.media.primary} 
              alt={imageAltText}
              className="work-featured-image"
              width="1280"
              height="720"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="work-featured-media-overlay" aria-hidden="true" />

            {/* Media HUD Overlay */}
            <div className="work-featured-hud">
              <div className="hud-badge">
                <span className="hud-pulse-dot" aria-hidden="true" />
                <span>{lang === 'fa' ? flagship.media.badgeFa : flagship.media.badgeEn}</span>
              </div>
              <div className="hud-scope-list">
                {(flagship.services[lang] || flagship.services.en).map((srv, idx) => (
                  <span key={idx} className="hud-scope-tag">{srv}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Architectural Breakdown: THE CHALLENGE | THE MOVE | THE OUTCOME */}
        <div className="work-featured-triptych">
          
          {/* Column 01: THE CHALLENGE */}
          <div className="work-triptych-col">
            <div className="triptych-header">
              <span className="triptych-num" aria-hidden="true">01</span>
              <h3 className="triptych-label">
                {lang === 'fa' ? 'چالش بنیادین بیزنس' : 'THE CHALLENGE'}
              </h3>
            </div>
            <p className="triptych-text">
              {flagship.challenge[lang] || flagship.challenge.en}
            </p>
          </div>

          {/* Column 02: THE MOVE */}
          <div className="work-triptych-col highlight-col">
            <div className="triptych-header">
              <span className="triptych-num" aria-hidden="true">02</span>
              <h3 className="triptych-label">
                {lang === 'fa' ? 'اقدام و مهندسی مجیکنسـی' : 'THE MOVE'}
              </h3>
            </div>
            <p className="triptych-text">
              {flagship.theMove[lang] || flagship.theMove.en}
            </p>
          </div>

          {/* Column 03: THE OUTCOME */}
          <div className="work-triptych-col">
            <div className="triptych-header">
              <span className="triptych-num" aria-hidden="true">03</span>
              <h3 className="triptych-label">
                {lang === 'fa' ? 'دست‌آورد ملموس بیزنس' : 'THE OUTCOME'}
              </h3>
            </div>
            <p className="triptych-text">
              {flagship.outcome[lang] || flagship.outcome.en}
            </p>
            <div className="triptych-highlights">
              {(flagship.qualitativeHighlights[lang] || flagship.qualitativeHighlights.en).map((h, i) => (
                <div key={i} className="triptych-highlight-item">
                  <span className="highlight-check" aria-hidden="true">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Flagship Footer Action Row */}
        <div className="work-featured-action-bar">
          <div className="featured-case-note">
            <span className="note-indicator" aria-hidden="true">✦</span>
            <span>
              {flagship.footerNote 
                ? (flagship.footerNote[lang] || flagship.footerNote.en)
                : (lang === 'fa'
                    ? 'مهندسی معماری سئو، بهینه‌سازی بودجه خزش و ثبت ۵.۱۸ میلیون ایمپرشن و ۸۴.۱ هزار کلیک ارگانیک در سرچ کنسول.'
                    : 'Engineered programmatic SEO architecture, crawl optimization & 84.1K click compounding scale.')}
            </span>
          </div>

          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="work-featured-cta-btn"
            aria-label={lang === 'fa' ? 'درخواست گفتگوی استراتژیک این پرونده' : 'Discuss This Architecture'}
          >
            <span>{lang === 'fa' ? 'گفتگوی استراتژیک این پرونده' : 'DISCUSS THIS ARCHITECTURE'}</span>
            <span className="cta-icon" aria-hidden="true">
              {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
