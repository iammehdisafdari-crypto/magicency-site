import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';

export default function PeopleBehindSystem() {
  const { lang, isRTL } = useLanguage();
  const data = ABOUT_DATA[lang]?.people || ABOUT_DATA.en.people;
  const leadMember = data.leadMember;
  const workspace = data.workspace;
  const disciplines = data.disciplines || [];

  const [activeDisciplineIdx, setActiveDisciplineIdx] = useState(0);

  return (
    <section 
      id="section-07" 
      className={`about-chapter-section people-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 07: The People Behind the Work"
    >
      <div className="container people-container">
        
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

        <div className="people-intro-block">
          <h2 className="people-headline">{data.title}</h2>
          <p className="people-lead">{data.lead}</p>
        </div>

        {/* Editorial Duality: Authentic Leadership + Studio Reality */}
        <div className="people-duality-grid">
          
          {/* Main Leadership Portrait Card */}
          {leadMember && (
            <div className="people-leadership-card">
              <div className="portrait-image-wrapper">
                <img 
                  src={leadMember.image} 
                  alt={leadMember.alt || leadMember.name} 
                  className="portrait-photo"
                  loading="lazy"
                />
                <div className="portrait-vignette" />
                <div className="portrait-badge-overlay">
                  <span className="badge-amber-spark">●</span>
                  <span>{leadMember.badge}</span>
                </div>
              </div>

              <div className="portrait-meta-content">
                <div className="portrait-title-row">
                  <h3 className="portrait-member-name">{leadMember.name}</h3>
                  <span className="portrait-member-role">{leadMember.role}</span>
                </div>
                <p className="portrait-member-bio">{leadMember.bio}</p>
              </div>
            </div>
          )}

          {/* Studio / Research Anchor Card */}
          {workspace && (
            <div className="people-workspace-card">
              <div className="workspace-image-wrapper">
                <img 
                  src={workspace.image} 
                  alt="Magicency Strategic Systems Workspace" 
                  className="workspace-photo"
                  loading="lazy"
                />
                <div className="workspace-vignette" />
                <div className="workspace-caption-overlay">
                  <span className="caption-dot" />
                  <span>{workspace.caption}</span>
                </div>
              </div>

              <div className="workspace-meta-content">
                <h4 className="workspace-title">{workspace.headline}</h4>
                <p className="workspace-copy">{workspace.copy}</p>
              </div>
            </div>
          )}

        </div>

        {/* Disciplines & Perspectives Strip */}
        <div className="people-disciplines-section">
          <div className="disciplines-header-row">
            <span className="disciplines-eyebrow">CONVERGENT PERSPECTIVES //</span>
            <span className="disciplines-lead-text">
              {isRTL ? 'زوایای دید متفاوت در یک سیستم واحد' : 'Different disciplines. Single aligned velocity.'}
            </span>
          </div>

          <div className="disciplines-cards-grid">
            {disciplines.map((item, idx) => {
              const isSelected = activeDisciplineIdx === idx;
              return (
                <div 
                  key={item.num}
                  tabIndex={0}
                  onClick={() => setActiveDisciplineIdx(idx)}
                  onFocus={() => setActiveDisciplineIdx(idx)}
                  className={`discipline-editorial-card ${isSelected ? 'is-selected' : ''}`}
                >
                  <div className="card-top-meta">
                    <span className="card-num">{item.num}</span>
                    <span className="card-code">{item.code}</span>
                  </div>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-desc">{item.desc}</p>
                  <div className="card-highlight-bar" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
