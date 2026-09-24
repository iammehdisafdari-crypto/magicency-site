import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import CTA from '../Common/CTA';

export default function HowWeWorkBridge() {
  const { lang, isRTL } = useLanguage();
  const data = ABOUT_DATA[lang]?.howWeWork || ABOUT_DATA.en.howWeWork;
  const stages = data.stages || [];
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  return (
    <section 
      id="section-how-we-work" 
      className={`about-chapter-section how-we-work-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 07: How We Work — The 6-Layer Bridge"
    >
      <div className="container how-we-work-container">
        
        {/* Section Meta Header */}
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

        <div className="how-we-work-intro">
          <h2 className="how-we-work-headline">{data.headline}</h2>
          <p className="how-we-work-lead">{data.lead}</p>
        </div>

        {/* Continuous Visual Editorial Flow (No Generic Card Grid) */}
        <div className="continuous-workflow-sequence" role="list">
          
          {/* Continuous Architectural Spine */}
          <div className="sequence-spine-line" aria-hidden="true">
            <div 
              className="sequence-active-fill"
              style={{ width: `${((activeStageIdx + 1) / stages.length) * 100}%` }}
            />
          </div>

          {/* Sequential Step Nodes */}
          <div className="sequence-nodes-row">
            {stages.map((stage, idx) => {
              const isActive = activeStageIdx === idx;
              const isPast = idx <= activeStageIdx;

              return (
                <div 
                  key={stage.num}
                  role="listitem"
                  tabIndex={0}
                  onClick={() => setActiveStageIdx(idx)}
                  onFocus={() => setActiveStageIdx(idx)}
                  className={`sequence-node-item ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
                >
                  <div className="node-marker">
                    <span className="node-num">{stage.num}</span>
                    <span className="node-dot" />
                  </div>

                  <div className="node-editorial-content">
                    <span className="node-code">{stage.code}</span>
                    <h3 className="node-title">{stage.title}</h3>
                    <p className="node-desc">{stage.desc}</p>
                  </div>

                  {idx < stages.length - 1 && (
                    <span className="node-flow-arrow" aria-hidden="true">→</span>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bridge Action to Full Approach Page */}
        <div className="how-we-work-bridge-cta-row">
          <div className="bridge-note-box">
            <span className="bridge-spark">✦</span>
            <span className="bridge-text">
              {isRTL 
                ? 'صفحه «رویکرد» شیوه دقیق عملکرد سیستم و ۶ لایه آن را به تفکیک واکاوی می‌کند.'
                : 'The dedicated /approach page deconstructs how each layer operates in commercial detail.'}
            </span>
          </div>

          <CTA
            variant="secondary"
            size="compact"
            href="/approach"
            trackingName="explore_approach_bridge"
            trackingLocation="about_how_we_work"
            arrowDirection="up-right"
            ariaLabel={data.bridgeCta}
            className="how-we-work-cta-btn"
          >
            {data.bridgeCta}
          </CTA>
        </div>

      </div>
    </section>
  );
}
