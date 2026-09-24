import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import CTA from '../Common/CTA';

export default function SelectedExperience() {
  const { lang, isRTL } = useLanguage();
  const exp = ABOUT_DATA[lang]?.selectedExperience || ABOUT_DATA.en.selectedExperience;
  const projects = exp.projects || [];

  return (
    <section 
      id="section-experience" 
      className={`about-chapter-section experience-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 08: Selected Experience and Client Credibility"
    >
      <div className="container experience-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{exp.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{exp.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{exp.chapterTag}</span>
          </div>
        </div>

        <div className="experience-intro">
          <h2 className="experience-headline">{exp.headline}</h2>
          <p className="experience-lead">{exp.lead}</p>
        </div>

        {/* Selected Project Showcase (High Visual Presence: 50-70% Media) */}
        <div className="selected-projects-grid" role="list">
          {projects.map((proj) => (
            <div key={proj.id} className="selected-project-card" role="listitem">
              <div className="project-media-wrap">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="project-cover-image"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-media-vignette" />
                <div className="project-metric-overlay">
                  <span className="metric-pulse-dot">●</span>
                  <span className="metric-badge-text">{proj.metric}</span>
                </div>
              </div>

              <div className="project-meta-box">
                <div className="project-category-row">
                  <span className="project-num">{proj.num}</span>
                  <span className="project-client">{proj.client}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <span className="project-discipline-tag">{proj.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Full Work Portfolio */}
        <div className="experience-footer-row">
          <div className="experience-seal-wrap">
            <span className="seal-spark">✦</span>
            <span className="seal-text">
              {isRTL 
                ? 'تمام پروژه‌ها دارای مستندات کامل فنی، استراتژی جایگاه‌یابی و شواهد تله‌متری هستند.'
                : 'All projects include documented architecture, positioning hypotheses, and verified telemetry.'}
            </span>
          </div>

          <CTA
            variant="secondary"
            size="compact"
            href="/work"
            trackingName="explore_all_work"
            trackingLocation="about_selected_experience"
            arrowDirection="up-right"
            ariaLabel={exp.cta}
            className="experience-cta-btn"
          >
            {exp.cta}
          </CTA>
        </div>

      </div>
    </section>
  );
}
