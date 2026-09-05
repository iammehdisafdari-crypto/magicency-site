import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function PeopleBehindSystem() {
  const { t, isRTL } = useLanguage();
  const peopleData = t.about?.people || {};
  const teamMembers = peopleData.teamMembers || [];
  const disciplines = peopleData.disciplines || [];
  const conceptPath = peopleData.conceptPath || ['PEOPLE', 'DISCIPLINES', 'PERSPECTIVES', 'ONE SYSTEM'];

  const [activeDiscipline, setActiveDiscipline] = useState('strategy');

  return (
    <section className="people-system-section" aria-label="The People Behind the System">
      <div className="container people-system-container">

        {/* =========================================================
            HEADER & EDITORIAL CONCEPT PATH
            ========================================================= */}
        <div className="people-system-header">
          <div className="people-eyebrow-pill">
            <span className="dot-warm" />
            <span>{peopleData.eyebrow || '03 / THE HUMAN LAYER'}</span>
          </div>

          <h2 className="people-system-headline">
            {peopleData.headline || 'The People Behind the System.'}
          </h2>

          <p className="people-system-subline">
            {peopleData.subline || 'Magicency brings together different perspectives, disciplines, and relentless craft into one cohesive practice.'}
          </p>

          {/* Conceptual Pathway Pipeline: PEOPLE → DISCIPLINES → PERSPECTIVES → ONE SYSTEM */}
          <div className="people-concept-pipeline" aria-label="Conceptual Framework Progression">
            {conceptPath.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className={`pipeline-step-node ${idx === conceptPath.length - 1 ? 'is-final' : ''}`}>
                  <span className="step-num">0{idx + 1}</span>
                  <span className="step-name">{step}</span>
                </div>
                {idx < conceptPath.length - 1 && (
                  <span className="pipeline-arrow" aria-hidden="true">
                    {isRTL ? '←' : '→'}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* =========================================================
            EDITORIAL DUALITY: AUTHENTIC LEADERSHIP + STUDIO REALITY
            ========================================================= */}
        <div className="people-editorial-grid">
          
          {/* Main Leadership Portrait Frame */}
          {teamMembers.map((member) => (
            <div key={member.id} className="people-portrait-card">
              <div className="portrait-media-frame">
                <img 
                  src={member.image} 
                  alt={member.alt || member.name} 
                  className="portrait-media-img"
                  loading="lazy"
                />
                <div className="portrait-scrim" />
                
                {/* Meta Floating Tag */}
                <div className="portrait-floating-tag">
                  <span className="tag-amber-pulse" />
                  <span className="tag-label">{member.badge}</span>
                </div>
              </div>

              <div className="portrait-details">
                <div className="portrait-name-row">
                  <h3 className="portrait-name">{member.name}</h3>
                  <span className="portrait-role-badge">{member.role}</span>
                </div>
                <p className="portrait-descriptor">{member.descriptor}</p>
              </div>
            </div>
          ))}

          {/* Studio & Research Anchor (Authentic Workspace / Artifact) */}
          <div className="people-workspace-card">
            <div className="workspace-media-frame">
              <img 
                src={peopleData.workspaceImage || '/assets/about/workspace.jpg'} 
                alt="Magicency Strategic Systems Workspace" 
                className="workspace-media-img"
                loading="lazy"
              />
              <div className="workspace-scrim" />
              <div className="workspace-tag-overlay">
                <span className="workspace-dot" />
                <span>{peopleData.workspaceCaption || 'RESEARCH, SYSTEMS MAPPING & STRATEGIC ITERATION'}</span>
              </div>
            </div>

            <div className="workspace-statement">
              <h4 className="workspace-title">
                {isRTL ? 'معماری بر پایه حقیقت، نه فرضیات.' : 'Architected on reality, not guesswork.'}
              </h4>
              <p className="workspace-desc">
                {isRTL 
                  ? 'هر تصمیم خروجی، حاصل ترکیب تخصص‌های همگرا در یک اتاق فکر منسجم است.'
                  : 'Every output stems from convergent disciplines interrogating problems together in real-time.'}
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================
            DISCIPLINES & PERSPECTIVES MATRIX (HOW WE THINK TOGETHER)
            ========================================================= */}
        <div className="disciplines-convergence-strip">
          <div className="disciplines-strip-header">
            <span className="strip-eyebrow">CONVERGENT DISCIPLINES //</span>
            <span className="strip-title">{isRTL ? 'ترکیب زوایای دید متفاوت در یک سیستم واحد' : 'Different minds. Single aligned velocity.'}</span>
          </div>

          <div className="disciplines-cards-grid">
            {disciplines.map((item) => {
              const isActive = activeDiscipline === item.id;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveDiscipline(item.id)}
                  className={`discipline-card ${isActive ? 'is-active' : ''}`}
                >
                  <div className="card-top-meta">
                    <span className="card-num">{item.num}</span>
                    <span className="card-code">{item.code}</span>
                  </div>
                  <h4 className="card-discipline-title">{item.title}</h4>
                  <p className="card-discipline-desc">{item.description}</p>
                  <div className="card-accent-bar" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
