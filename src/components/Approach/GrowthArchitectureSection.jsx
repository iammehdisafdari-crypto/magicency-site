import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { GROWTH_ARCHITECTURE_LAYERS } from '../../data/growthArchitecture';

export default function GrowthArchitectureSection() {
  const { t, isRTL } = useLanguage();
  const arch = t.approach?.architecture || {};
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const activeLayer = GROWTH_ARCHITECTURE_LAYERS[activeLayerIndex];

  return (
    <section className="approach-section approach-architecture-section" id="growth-architecture">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{arch.eyebrow}</span>
          </div>

          <h2 className="approach-section-title">
            {arch.headline}
          </h2>

          <p className="approach-section-subtext">
            {arch.subheadline}
          </p>
        </div>

        {/* Interactive Architectural System Visualization */}
        <div className="architecture-system-visualization">
          {/* Top Architectural Highway (Signal Bus across the 6 layers) */}
          <div className="arch-system-flow-nav" role="tablist" aria-label="Growth Operating System Layers">
            {GROWTH_ARCHITECTURE_LAYERS.map((layer, index) => {
              const isActive = index === activeLayerIndex;
              return (
                <button
                  key={layer.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveLayerIndex(index)}
                  className={`arch-layer-step-anchor ${isActive ? 'is-active' : ''}`}
                >
                  <div className="step-anchor-header">
                    <span className="step-num">{layer.num}</span>
                    <span className="step-indicator-dot" />
                  </div>
                  <span className="step-name">{isRTL ? layer.nameFa : layer.nameEn}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeLayerUnderline"
                      className="step-active-underline"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Connected Architectural Signal Conduit SVG */}
          <div className="arch-conduit-svg-frame" aria-hidden="true">
            <svg
              className="arch-conduit-svg"
              viewBox="0 0 1200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="busGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DD0060" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#DD0060" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8B93A7" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Main Spine */}
              <line x1="60" y1="40" x2="1140" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
              
              {/* Active Signal Segment */}
              <line
                x1="60"
                y1="40"
                x2={60 + (activeLayerIndex * 216)}
                y2="40"
                stroke="#DD0060"
                strokeWidth="2.5"
                className="bus-signal-active-stroke"
              />

              {/* Feedback Return Circuit */}
              <path
                d="M 1140,40 C 1140,95 950,105 600,105 C 250,105 60,95 60,40"
                stroke="rgba(221,0,96,0.35)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* 6 Layer Connection Anchors */}
              {[60, 276, 492, 708, 924, 1140].map((cx, idx) => (
                <g key={cx}>
                  <circle
                    cx={cx}
                    cy="40"
                    r={idx === activeLayerIndex ? 7 : 4}
                    fill={idx <= activeLayerIndex ? '#DD0060' : '#07101C'}
                    stroke={idx === activeLayerIndex ? '#FFFFFF' : 'rgba(255,255,255,0.2)'}
                    strokeWidth="1.5"
                  />
                  {idx === activeLayerIndex && (
                    <circle cx={cx} cy="40" r="14" stroke="rgba(221,0,96,0.4)" strokeWidth="1" fill="none" />
                  )}
                </g>
              ))}

              <text x="600" y="116" textAnchor="middle" fill="#8B93A7" fontSize="10" letterSpacing="0.16em">
                {arch.loopReturn}
              </text>
            </svg>
          </div>

          {/* Active Layer Architectural Breakdown */}
          <div className="arch-layer-active-stage">
            <div className="arch-layer-content-grid">
              {/* Left Column: Philosophical Definition & Core Role */}
              <div className="arch-layer-main-col">
                <div className="layer-badge-row">
                  <span className="layer-code-mono">{activeLayer.code}</span>
                  <span className="layer-status-pill">{isRTL ? activeLayer.subtitleFa : activeLayer.subtitleEn}</span>
                </div>

                <h3 className="arch-layer-headline">
                  {isRTL ? activeLayer.titleFa : activeLayer.titleEn}
                </h3>

                <p className="arch-layer-description">
                  {isRTL ? activeLayer.descFa : activeLayer.descEn}
                </p>

                <div className="arch-layer-system-role">
                  <span className="system-role-eyebrow">{isRTL ? 'نقش در معماری سیستم:' : 'SYSTEMIC ROLE:'}</span>
                  <p className="system-role-text">
                    {isRTL ? activeLayer.systemRoleFa : activeLayer.systemRoleEn}
                  </p>
                </div>
              </div>

              {/* Right Column: Signal Telemetry, Inputs & Structural Outputs */}
              <div className="arch-layer-telemetry-col">
                <div className="telemetry-readout-frame">
                  <div className="readout-header">
                    <span className="telemetry-dot" />
                    <span className="readout-label">{isRTL ? activeLayer.telemetryLabelFa : activeLayer.telemetryLabelEn}</span>
                  </div>
                  <div className="readout-value">{isRTL ? activeLayer.telemetryValueFa : activeLayer.telemetryValueEn}</div>
                </div>

                <div className="arch-io-specifications">
                  {/* System Inputs */}
                  <div className="io-group">
                    <span className="io-label">{isRTL ? 'ورودی‌های این لایه (INPUTS):' : 'LAYER INPUTS:'}</span>
                    <ul className="io-list">
                      {(isRTL ? activeLayer.inputsFa : activeLayer.inputsEn).map((item, i) => (
                        <li key={i} className="io-list-item">
                          <span className="io-bullet">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* System Outputs */}
                  <div className="io-group">
                    <span className="io-label">{isRTL ? 'خروجی‌های ارسالی به مرحله بعد (OUTPUTS):' : 'TRANSMITTED OUTPUTS:'}</span>
                    <ul className="io-list io-list-outputs">
                      {(isRTL ? activeLayer.outputsFa : activeLayer.outputsEn).map((item, i) => (
                        <li key={i} className="io-list-item">
                          <span className="io-bullet bullet-accent">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Closed Loop Callout at the base of the architecture */}
            <div className="arch-feedback-conduit-banner">
              <div className="conduit-loop-formula">
                <span className="formula-part">INPUT</span>
                <span className="formula-arrow">→</span>
                <span className="formula-part">INSIGHT</span>
                <span className="formula-arrow">→</span>
                <span className="formula-part">ACTION</span>
                <span className="formula-arrow">→</span>
                <span className="formula-part">SIGNAL</span>
                <span className="formula-arrow">→</span>
                <span className="formula-part">OPTIMIZATION</span>
                <span className="formula-arrow">↓</span>
                <span className="formula-part formula-highlight">COMPOUNDING</span>
                <span className="formula-arrow">↺</span>
                <span className="formula-part formula-return">back to INPUT</span>
              </div>
              <p className="conduit-loop-note">
                {isRTL
                  ? 'این سیستم خطی نیست؛ در هر چرخه، هوشِ حاصل از سنجش و بهینه‌سازی مستقیماً به فاز ورودی بازمی‌گردد تا کمپین‌ها و محصولات بعدی با دقت و بازدهی بالاتری آغاز شوند.'
                  : 'The system is non-linear. Every cycle synthesizes market feedback and feeds high-order intelligence back into INPUT to start the next iteration at a higher baseline.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
