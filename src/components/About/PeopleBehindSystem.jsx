import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';

export default function PeopleBehindSystem() {
  const { lang, isRTL } = useLanguage();
  const people = ABOUT_DATA[lang]?.people || ABOUT_DATA.en.people;
  const operatingModel = people.operatingModel || [];
  const workspace = people.workspace;

  return (
    <section 
      id="section-people" 
      className={`about-chapter-section people-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 05: The People Behind the System"
    >
      <div className="container people-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{people.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{people.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{people.chapterTag}</span>
          </div>
        </div>

        <div className="people-intro-block">
          <h2 className="people-headline">{people.headline}</h2>
          <p className="people-lead">{people.lead}</p>
        </div>

        {/* Operating Model Grid (Strategy-Led, Specialist-Driven, Tech-Enabled, Collaborative) */}
        <div className="people-model-grid" role="list">
          {operatingModel.map((model) => (
            <div key={model.num} className="people-model-card" role="listitem">
              <div className="model-card-header">
                <span className="model-num">{model.num}</span>
                <span className="model-code">{model.code}</span>
              </div>
              <h3 className="model-title">{model.title}</h3>
              <p className="model-desc">{model.desc}</p>
              <div className="model-bottom-accent" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Studio Reality & Workspace Showcase (No Fake Portraits or AI People) */}
        {workspace && (
          <div className="people-workspace-stage">
            <div className="workspace-photo-container">
              <img 
                src={workspace.image} 
                alt="Magicency Strategic Systems Studio" 
                className="workspace-panoramic-photo"
                width="1400"
                height="700"
                loading="lazy"
                decoding="async"
              />
              <div className="workspace-gradient-vignette" />
              <div className="workspace-caption-tag">
                <span className="caption-live-dot" />
                <span>{workspace.caption}</span>
              </div>
            </div>

            <div className="workspace-narrative-overlay">
              <h3 className="workspace-narrative-title">{workspace.headline}</h3>
              <p className="workspace-narrative-copy">{workspace.copy}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
