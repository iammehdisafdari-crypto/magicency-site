import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';

export default function MagicencySystem() {
  const { lang, isRTL } = useLanguage();
  const data = ABOUT_DATA[lang]?.system || ABOUT_DATA.en.system;
  const stages = data.stages || [];
  
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const layoutRef = useRef(null);
  const stageRefs = useRef([]);

  // Track scroll through the system section
  const { scrollYProgress } = useScroll({
    target: layoutRef,
    offset: ['start start', 'end end']
  });

  // Smooth fade-out & downwards glide at the last step and end of the section
  const visualOpacity = useTransform(scrollYProgress, [0, 0.85, 0.98], [1, 1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 0.85, 0.98], [0, 0, 48]);
  const visualScale = useTransform(scrollYProgress, [0, 0.85, 0.98], [1, 1, 0.94]);

  // Synchronize active stage index efficiently using IntersectionObserver (zero scroll layout thrashing)
  useEffect(() => {
    if (!stageRefs.current || stageRefs.current.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.stageIndex);
            if (!isNaN(idx)) {
              setActiveStageIdx((prev) => (prev !== idx ? idx : prev));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0
      }
    );

    stageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stages.length]);

  const activeStage = stages[activeStageIdx] || stages[0];

  const scrollToStage = (idx) => {
    const el = stageRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section 
      id="section-03" 
      className={`about-chapter-section system-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 03: The Magicency System"
    >
      <div className="container system-container">
        
        {/* Section Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{data.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{data.eyebrow}</span>
          </div>
          <div className="system-compounding-badge">
            <span className="badge-spark">✦</span>
            <span>{data.chapterTag}</span>
          </div>
        </div>

        <div className="system-intro-block">
          <h2 className="system-main-headline">{data.title}</h2>
          <p className="system-main-sub">{data.subtitle}</p>
        </div>

        {/* Sticky Storytelling Split Container */}
        <div ref={layoutRef} className="system-sticky-layout">
          
          {/* LEFT: Persistent Evolving Visual System */}
          <div className="system-visual-sticky-col">
            <motion.div 
              style={{
                opacity: visualOpacity,
                y: visualY,
                scale: visualScale
              }}
              className="sticky-visual-wrapper"
            >
              <div className="system-canvas-box">
                
                {/* SVG Reactive Stage Constellation */}
                <svg className="system-dynamic-svg" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="systemGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF5500" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FF8833" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Progressive Background Geometry Layers */}
                  <circle cx="250" cy="250" r="210" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4" />
                  <circle cx="250" cy="250" r="100" fill="none" stroke={activeStageIdx >= 2 ? 'rgba(255,85,0,0.3)' : 'rgba(255,255,255,0.05)'} strokeWidth="1.2" />

                  {/* Central Compounding Nexus Node (GPU accelerated without SVG filter) */}
                  <circle 
                    cx="250" 
                    cy="250" 
                    r={30 + activeStageIdx * 6} 
                    fill="rgba(255, 85, 0, 0.14)" 
                    stroke="#FF5500" 
                    strokeWidth="1.5"
                    className="nexus-core-pulse"
                  />
                  <circle cx="250" cy="250" r="5" fill="#FFFFFF" />

                  {/* 6 Peripheral Orbit Nodes, lighting up progressively based on activeStageIdx */}
                  {stages.map((stg, idx) => {
                    const angle = (idx * 60 - 90) * (Math.PI / 180);
                    const nx = 250 + 160 * Math.cos(angle);
                    const ny = 250 + 160 * Math.sin(angle);
                    const isPassed = idx <= activeStageIdx;
                    const isCurrent = idx === activeStageIdx;

                    return (
                      <g 
                        key={stg.num} 
                        className={`orbit-node-group ${isCurrent ? 'is-current' : ''}`}
                        onClick={() => scrollToStage(idx)}
                        style={{ cursor: 'pointer' }}
                      >
                        {/* Progressive Connection Line to Center */}
                        {isPassed && (
                          <line 
                            x1="250" 
                            y1="250" 
                            x2={nx} 
                            y2={ny} 
                            stroke="url(#systemGlow)" 
                            strokeWidth={isCurrent ? 2 : 1.2}
                            strokeDasharray={isCurrent ? 'none' : '4 4'}
                          />
                        )}

                        {/* Peripheral connecting polygon edges as stages progress */}
                        {idx > 0 && idx <= activeStageIdx && (
                          <line 
                            x1={250 + 160 * Math.cos(((idx - 1) * 60 - 90) * (Math.PI / 180))}
                            y1={250 + 160 * Math.sin(((idx - 1) * 60 - 90) * (Math.PI / 180))}
                            x2={nx}
                            y2={ny}
                            stroke="#FF5500"
                            strokeWidth="1.5"
                          />
                        )}

                        {/* Node circle */}
                        <circle 
                          cx={nx} 
                          cy={ny} 
                          r={isCurrent ? 14 : isPassed ? 10 : 6} 
                          fill={isCurrent ? '#FF5500' : isPassed ? 'rgba(255,85,0,0.4)' : '#12141A'}
                          stroke={isPassed ? '#FF5500' : 'rgba(255,255,255,0.2)'}
                          strokeWidth="1.5"
                        />
                        {isCurrent && (
                          <circle cx={nx} cy={ny} r={22} fill="none" stroke="rgba(255,85,0,0.5)" strokeWidth="1" strokeDasharray="3 3" className="node-ping-ring" />
                        )}
                        <text 
                          x={nx} 
                          y={ny + (ny > 250 ? 24 : -16)} 
                          textAnchor="middle" 
                          fill={isCurrent ? '#FFFFFF' : isPassed ? '#9BA3AF' : '#4B5563'}
                          fontSize="10"
                          fontFamily="monospace"
                          fontWeight={isCurrent ? '700' : '400'}
                        >
                          {stg.num}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Persistent Telemetry Display Box */}
                <div className="visual-telemetry-hud">
                  <div className="hud-top-meta">
                    <span className="hud-stage-num">PHASE {activeStage.num} / 06</span>
                    <span className="hud-stage-code">{activeStage.code}</span>
                  </div>
                  <div className="hud-telemetry-status">
                    <span className="hud-live-spark">●</span>
                    <span className="hud-status-text">{activeStage.telemetryState}</span>
                  </div>
                  <div className="hud-artifact-pill">
                    <span className="artifact-label">OUTPUT //</span>
                    <span className="artifact-name">{activeStage.artifact}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* RIGHT: Active Stage Content (Scrollable Flow) */}
          <div className="system-stages-content-col">
            {stages.map((stage, idx) => {
              const isActive = idx === activeStageIdx;
              return (
                <div
                  key={stage.num}
                  ref={(el) => (stageRefs.current[idx] = el)}
                  data-stage-index={idx}
                  onClick={() => scrollToStage(idx)}
                  className={`stage-story-card ${isActive ? 'is-active' : ''}`}
                >
                  <div className="stage-card-indicator">
                    <span className="stage-num-badge">{stage.num}</span>
                    <span className="stage-code-badge">{stage.code}</span>
                    <span className="stage-step-count">0{idx + 1} OF 06</span>
                  </div>

                  <h3 className="stage-card-title">{stage.title}</h3>
                  <p className="stage-card-lead">{stage.lead}</p>
                  <p className="stage-card-detail">{stage.detail}</p>

                  <div className="stage-card-artifact">
                    <span className="artifact-badge-k">KEY DELIVERABLE</span>
                    <span className="artifact-badge-v">{stage.artifact}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
