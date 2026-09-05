import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { Reveal, editorialVariants, EASING } from '../motion';

export default function WorkFeaturedCase() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
  
  // Find flagship case (Velox Financial)
  const flagship = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];

  return (
    <section className="work-featured-section shared-section" aria-label="Flagship Case Study">
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
          <h2 className="work-featured-client-name">
            {flagship.client[lang] || flagship.client.en}
          </h2>
          <p className="work-featured-project-subtitle">
            {flagship.title[lang] || flagship.title.en}
          </p>
        </div>

        {/* Monolithic Cinematic Visual Media */}
        <div className="work-featured-media-stage">
          <div className="work-featured-media-inner">
            <img 
              src={flagship.media.primary} 
              alt={flagship.client[lang] || flagship.client.en}
              className="work-featured-image"
              loading="eager"
            />
            <div className="work-featured-media-overlay" />

            {/* Media HUD Overlay */}
            <div className="work-featured-hud">
              <div className="hud-badge">
                <span className="hud-pulse-dot" />
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
              <span className="triptych-num">01</span>
              <span className="triptych-label">
                {lang === 'fa' ? 'چالش بنیادین بیزنس' : 'THE CHALLENGE'}
              </span>
            </div>
            <p className="triptych-text">
              {flagship.challenge[lang] || flagship.challenge.en}
            </p>
          </div>

          {/* Column 02: THE MOVE */}
          <div className="work-triptych-col highlight-col">
            <div className="triptych-header">
              <span className="triptych-num">02</span>
              <span className="triptych-label">
                {lang === 'fa' ? 'اقدام و مهندسی مجیکنسـی' : 'THE MOVE'}
              </span>
            </div>
            <p className="triptych-text">
              {flagship.theMove[lang] || flagship.theMove.en}
            </p>
          </div>

          {/* Column 03: THE OUTCOME */}
          <div className="work-triptych-col">
            <div className="triptych-header">
              <span className="triptych-num">03</span>
              <span className="triptych-label">
                {lang === 'fa' ? 'دست‌آورد ملموس بیزنس' : 'THE OUTCOME'}
              </span>
            </div>
            <p className="triptych-text">
              {flagship.outcome[lang] || flagship.outcome.en}
            </p>
            <div className="triptych-highlights">
              {(flagship.qualitativeHighlights[lang] || flagship.qualitativeHighlights.en).map((h, i) => (
                <div key={i} className="triptych-highlight-item">
                  <span className="highlight-check">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Flagship Footer Action Row */}
        <div className="work-featured-action-bar">
          <div className="featured-case-note">
            <span className="note-indicator">✦</span>
            <span>
              {lang === 'fa'
                ? 'مهندسی صفر تا صد سیستم ثبت‌نام، تله‌متری داده و زیرساخت تبدیل در پلتفرم ولوکس'
                : 'Engineered zero-latency onboarding, telemetry data streams & conversion engine for Velox.'}
            </span>
          </div>

          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="work-featured-cta-btn"
            aria-label={lang === 'fa' ? 'درخواست گفتگوی استراتژیک' : 'Discuss a Similar Architecture'}
          >
            <span>{lang === 'fa' ? 'گفتگوی استراتژیک این پرونده' : 'DISCUSS THIS ARCHITECTURE'}</span>
            <span className="cta-icon">
              {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
