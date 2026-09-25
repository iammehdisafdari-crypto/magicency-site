import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPOUNDING_CYCLES } from '../../data/growthArchitecture';

export default function CompoundingIntelligenceSection() {
  const { t, isRTL } = useLanguage();
  const comp = t.approach?.compounding || {};
  const [activeCycleIndex, setActiveCycleIndex] = useState(2); // default on 3rd cycle

  const activeCycle = COMPOUNDING_CYCLES[activeCycleIndex];

  return (
    <section className="approach-section approach-compounding-section" id="compounding-growth">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{comp.eyebrow}</span>
          </div>

          <h2 className="approach-section-title">
            {comp.headline}
          </h2>

          <h3 className="compounding-core-goal">
            {comp.supportingMessage}
          </h3>

          {/* 4 Compounding Axioms */}
          <div className="compounding-axioms-grid">
            <div className="compounding-axiom-card">
              <span className="axiom-signal-num">01</span>
              <p className="axiom-p">{comp.explanation1}</p>
            </div>
            <div className="compounding-axiom-card">
              <span className="axiom-signal-num">02</span>
              <p className="axiom-p">{comp.explanation2}</p>
            </div>
            <div className="compounding-axiom-card">
              <span className="axiom-signal-num">03</span>
              <p className="axiom-p">{comp.explanation3}</p>
            </div>
            <div className="compounding-axiom-card card-accent-glow">
              <span className="axiom-signal-num">04</span>
              <p className="axiom-p">{comp.explanation4}</p>
            </div>
          </div>
        </div>

        {/* Subtle Visual of Repeated Growth Cycles Becoming Increasingly Sophisticated */}
        <div className="compounding-intelligence-visual-frame">
          <div className="cycles-controller-bar" role="tablist" aria-label="Compounding Growth Cycles">
            {COMPOUNDING_CYCLES.map((cycleItem, idx) => {
              const isSelected = idx === activeCycleIndex;
              return (
                <button
                  key={cycleItem.cycle}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCycleIndex(idx)}
                  className={`cycle-tab-btn ${isSelected ? 'active' : ''}`}
                >
                  <span className="cycle-badge-num">{cycleItem.cycle}</span>
                  <span className="cycle-tab-name">{isRTL ? cycleItem.nameFa : cycleItem.nameEn}</span>
                </button>
              );
            })}
          </div>

          {/* Architectural Accumulation Diagram (Vector Schematic of Iterative Sophistication) */}
          <div className="cycles-architectural-stage">
            <div className="cycles-svg-container" aria-hidden="true">
              <svg
                className="cycles-vector-canvas"
                viewBox="0 0 600 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="cycleLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C58A3A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B93A7" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Base Grid Crosshairs */}
                <line x1="50" y1="160" x2="550" y2="160" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 6" />
                <line x1="300" y1="30" x2="300" y2="290" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 6" />

                {/* Cycle 1 Loop */}
                <ellipse
                  cx="300"
                  cy="160"
                  rx="140"
                  ry="60"
                  stroke={activeCycleIndex >= 0 ? '#8B93A7' : 'rgba(255,255,255,0.08)'}
                  strokeWidth={activeCycleIndex === 0 ? '2' : '1'}
                  strokeDasharray="4 4"
                  opacity={activeCycleIndex >= 0 ? 0.7 : 0.2}
                />

                {/* Cycle 2 Loop (Sharper, more concentrated) */}
                <ellipse
                  cx="300"
                  cy="160"
                  rx="200"
                  ry="90"
                  stroke={activeCycleIndex >= 1 ? '#C58A3A' : 'rgba(255,255,255,0.08)'}
                  strokeWidth={activeCycleIndex === 1 ? '2.5' : '1.5'}
                  opacity={activeCycleIndex >= 1 ? 0.8 : 0.2}
                />

                {/* Cycle 3 Loop (High-density institutional intelligence) */}
                <ellipse
                  cx="300"
                  cy="160"
                  rx="260"
                  ry="125"
                  stroke={activeCycleIndex >= 2 ? 'url(#cycleLineGrad)' : 'rgba(255,255,255,0.08)'}
                  strokeWidth={activeCycleIndex === 2 ? '3' : '1.5'}
                  opacity={activeCycleIndex >= 2 ? 1 : 0.2}
                />

                {/* Concentric Intelligence Nodes */}
                <circle cx="300" cy="160" r="14" fill="#07101C" stroke="#C58A3A" strokeWidth="2" />
                <circle cx="300" cy="160" r="4" fill="#C58A3A" />
                <text x="300" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">CORE</text>

                {/* Intersecting data trajectory marks */}
                <circle cx="160" cy="160" r="4" fill="#8B93A7" />
                <circle cx="440" cy="160" r="4" fill="#8B93A7" />
                <circle cx="100" cy="160" r="5" fill="#C58A3A" />
                <circle cx="500" cy="160" r="5" fill="#C58A3A" />
                <circle cx="40" cy="160" r="6" fill="#C58A3A" />
                <circle cx="560" cy="160" r="6" fill="#C58A3A" />
              </svg>
            </div>

            {/* Cycle Details */}
            <div className="cycle-intel-details">
              <div className="cycle-intel-header">
                <span className="cycle-tag-code">ACCUMULATED INTELLIGENCE // CYCLE {activeCycle.cycle}</span>
                <span className="cycle-metric-highlight">{activeCycle.leverageMetricEn}</span>
              </div>

              <h4 className="cycle-intel-focus-title">
                {isRTL ? activeCycle.focusFa : activeCycle.focusEn}
              </h4>

              <div className="cycle-knowledge-gain-box">
                <span className="gain-label">{isRTL ? 'دانش انباشته‌شده در سیستم:' : 'ACCUMULATED SYSTEM KNOWLEDGE:'}</span>
                <p className="gain-text">
                  {isRTL ? activeCycle.knowledgeGainedFa : activeCycle.knowledgeGainedEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
