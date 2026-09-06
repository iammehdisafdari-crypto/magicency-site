import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';

export default function ApproachNarrative() {
  const { lang, isRTL } = useLanguage();
  const data = ABOUT_DATA[lang]?.approach || ABOUT_DATA.en.approach;
  const steps = data.steps || [];
  
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <section 
      id="section-05" 
      className={`about-chapter-section approach-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 05: Our Approach"
    >
      <div className="container approach-container">
        
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

        <div className="approach-intro-block">
          <h2 className="approach-headline">{data.title}</h2>
          <p className="approach-lead">{data.lead}</p>
        </div>

        {/* Progressive System Path Bar */}
        <div className="system-workflow-path-track" aria-hidden="true">
          <div 
            className="workflow-progress-line"
            style={{ width: `${((activeStepIdx + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Asymmetric 5-Step Editorial Sequence */}
        <div className="approach-steps-grid" role="list">
          {steps.map((step, idx) => {
            const isSelected = activeStepIdx === idx;
            const isPassed = idx <= activeStepIdx;
            return (
              <div
                key={step.num}
                role="listitem"
                tabIndex={0}
                onClick={() => setActiveStepIdx(idx)}
                onFocus={() => setActiveStepIdx(idx)}
                className={`approach-step-card ${isSelected ? 'is-selected' : ''} ${isPassed ? 'is-passed' : ''}`}
              >
                <div className="step-card-header">
                  <div className="step-num-circle">
                    <span>{step.num}</span>
                  </div>
                  <span className="step-tag-pill">{step.tag}</span>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>

                <div className="step-card-footer">
                  <span className="step-phase-label">PHASE 0{idx + 1} // DISCIPLINE</span>
                  <span className="step-select-spark">{isSelected ? '✦' : '→'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
