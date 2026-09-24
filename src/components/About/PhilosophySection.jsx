import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';

export default function PhilosophySection() {
  const { lang, isRTL } = useLanguage();
  const phil = ABOUT_DATA[lang]?.philosophy || ABOUT_DATA.en.philosophy;
  const pillars = phil.pillars || [];

  return (
    <section 
      id="section-philosophy" 
      className={`about-chapter-section philosophy-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 06: Our Firm and What We Believe"
    >
      <div className="container philosophy-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{phil.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{phil.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{phil.chapterTag}</span>
          </div>
        </div>

        {/* Large Monument Core Statement */}
        <div className="philosophy-monument-wrap">
          <blockquote className="philosophy-monument-title">
            “{phil.monumentQuote}”
          </blockquote>
          <p className="philosophy-monument-lead">{phil.lead}</p>
        </div>

        {/* 5 Architectural Belief Columns */}
        <div className="philosophy-pillars-grid" role="list">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="philosophy-pillar-card" role="listitem">
              <div className="pillar-num-row">
                <span className="pillar-num">{pillar.num}</span>
                <span className="pillar-spark">✦</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-rule" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Distinction Callout Bar */}
        <div className="philosophy-distinction-bar">
          <div className="distinction-item">
            <span className="distinction-label">{isRTL ? 'درباره ما' : 'ABOUT'}</span>
            <span className="distinction-val">{isRTL ? 'آنچه باور داریم' : 'WHAT WE BELIEVE'}</span>
          </div>
          <span className="distinction-arrow">→</span>
          <div className="distinction-item">
            <span className="distinction-label">{isRTL ? 'رویکرد' : 'APPROACH'}</span>
            <span className="distinction-val">{isRTL ? 'شیوه عمل ما' : 'HOW WE OPERATE'}</span>
          </div>
          <span className="distinction-arrow">→</span>
          <div className="distinction-item">
            <span className="distinction-label">{isRTL ? 'توانمندی‌ها' : 'CAPABILITIES'}</span>
            <span className="distinction-val">{isRTL ? 'آنچه می‌سازیم' : 'WHAT WE BUILD'}</span>
          </div>
          <span className="distinction-arrow">→</span>
          <div className="distinction-item">
            <span className="distinction-label">{isRTL ? 'پروژه‌ها' : 'WORK'}</span>
            <span className="distinction-val">{isRTL ? 'آنچه محقق کرده‌ایم' : 'WHAT WE DELIVERED'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
