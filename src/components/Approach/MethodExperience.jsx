import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';
import { 
  Search, 
  Target, 
  Compass, 
  Layers, 
  Activity, 
  TrendingUp,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const STAGE_ICONS = [
  Search,
  Target,
  Compass,
  Layers,
  Activity,
  TrendingUp
];

export default function MethodExperience() {
  const { t, isRTL } = useLanguage();
  const m = t.approach?.method || {};
  const stages = m.stages || [];
  const [activeIdx, setActiveIdx] = useState(0);

  const currentStage = stages[activeIdx] || stages[0];
  const CurrentIcon = STAGE_ICONS[activeIdx] || Search;

  return (
    <section className="approach-method-section" aria-label="The Magicency Method Experience">
      <div className="container approach-method-container">
        
        {/* Header Eyebrow & Title */}
        <div className="method-header-block">
          <span className="approach-tag-label">{m.badge || 'THE MAGICENCY METHOD'}</span>
          <h2 className="method-main-title">
            {m.headline || 'A disciplined progression from problem to compounding system.'}
          </h2>
          <p className="method-main-sub">
            {m.subheadline}
          </p>
        </div>

        {/* 6-Stage Interactive Navigator Bar */}
        <div className="method-timeline-nav" role="tablist" aria-label="Methodology Stages">
          {stages.map((stage, idx) => {
            const isActive = idx === activeIdx;
            const isPassed = idx < activeIdx;
            const Icon = STAGE_ICONS[idx] || Search;
            return (
              <button
                key={stage.number}
                role="tab"
                aria-selected={isActive}
                className={`method-nav-step ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="step-badge-circle">
                  <Icon size={14} className="step-badge-icon" />
                </div>
                <div className="step-text-meta">
                  <span className="step-num">{stage.number}</span>
                  <span className="step-name">{stage.title}</span>
                </div>
                <span className="step-progress-line" />
              </button>
            );
          })}
        </div>

        {/* The Viewport Stage Experience */}
        <div className="method-viewport-stage">
          <AnimatePresence mode="wait">
            {currentStage && (
              <motion.div
                key={currentStage.number}
                className="method-stage-card"
                initial={{ opacity: 0, scale: 0.98, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -12 }}
                transition={{ duration: 0.4, ease: EASING.PRIMARY }}
              >
                
                {/* Left Content Column */}
                <div className="stage-content-col">
                  
                  <div className="stage-eyebrow-row">
                    <span className="stage-counter-pill">{currentStage.metric}</span>
                    <span className="stage-short-desc">{currentStage.shortDesc}</span>
                  </div>

                  <h3 className="stage-prominent-title">
                    <span className="stage-giant-num">{currentStage.number}</span>
                    <span className="stage-title-text">{currentStage.title}</span>
                  </h3>

                  <p className="stage-detailed-body">
                    {currentStage.description}
                  </p>

                  <div className="stage-deliverable-box">
                    <span className="deliverable-label">{isRTL ? 'خروجی استراتژیک این فاز' : 'STRATEGIC DELIVERABLE'}</span>
                    <span className="deliverable-value">{currentStage.deliverable}</span>
                  </div>

                  {/* Navigation Controls */}
                  <div className="stage-stepper-controls">
                    <button 
                      className="stage-ctrl-btn"
                      disabled={activeIdx === 0}
                      onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                      aria-label="Previous Stage"
                    >
                      {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                      <span>{isRTL ? 'مرحله قبل' : 'PREVIOUS'}</span>
                    </button>

                    <button 
                      className="stage-ctrl-btn btn-next highlight-orange"
                      disabled={activeIdx === stages.length - 1}
                      onClick={() => setActiveIdx((prev) => Math.min(stages.length - 1, prev + 1))}
                      aria-label="Next Stage"
                    >
                      <span>{isRTL ? 'مرحله بعد' : 'NEXT STAGE'}</span>
                      {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>
                  </div>

                </div>

                {/* Right Visual Architectural Schematic */}
                <div className="stage-schematic-col" aria-hidden="true">
                  <div className="schematic-screen">
                    <div className="schematic-ambient-glow" />
                    
                    <div className="schematic-radar-center">
                      <div className="radar-circle circle-1" />
                      <div className="radar-circle circle-2" />
                      <div className="radar-circle circle-3" />
                      <div className="radar-crosshair-h" />
                      <div className="radar-crosshair-v" />
                      
                      <div className="schematic-core-icon">
                        <CurrentIcon size={36} className="core-icon-svg" />
                      </div>
                    </div>

                    <div className="schematic-footer-telemetry">
                      <div className="telemetry-item">
                        <span className="t-key">{isRTL ? 'وضعیت فاز' : 'STATUS'}</span>
                        <span className="t-val text-gradient-amber">{currentStage.title} // ACTIVE</span>
                      </div>
                      <div className="telemetry-item">
                        <span className="t-key">{isRTL ? 'دقت تصمیم' : 'CONVICTION'}</span>
                        <span className="t-val">99.4% EMPIRICAL</span>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
