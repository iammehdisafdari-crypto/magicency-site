import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function CompoundingGrowthNetwork() {
  const { t, isRTL } = useLanguage();
  const c = t.approach?.compounding || {};
  const [activeStepIndex, setActiveStepIndex] = useState(4); // Default to full compounding scale

  const steps = c.steps || [
    '1 DECISION',
    'DECISION + LEARNING',
    'DECISION + LEARNING + DATA',
    'DECISION + LEARNING + DATA + EXPERIENCE',
    'COMPOUNDING SCALE'
  ];

  return (
    <section className="approach-section compounding-section" aria-label="Compounding Growth Network">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header text-center">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{c.badge || '04 / COMPOUNDING'}</span>
          </div>
          <h2 className="approach-section-title">{c.headline}</h2>
          <div className="compounding-axiom-box">
            <p className="axiom-text">{c.axiom}</p>
          </div>
        </div>

        {/* Compounding Progressive Concentric Visual & Step Controller */}
        <div className="compounding-stage">
          {/* Visual Ripple Diagram */}
          <div className="compounding-visual-container">
            <svg 
              className="compounding-concentric-svg" 
              viewBox="0 0 500 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="compoundGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 107, 44, 0.4)" />
                  <stop offset="70%" stopColor="rgba(255, 107, 44, 0.08)" />
                  <stop offset="100%" stopColor="rgba(255, 107, 44, 0)" />
                </radialGradient>
              </defs>

              {/* Central Core Glow */}
              <circle cx="250" cy="250" r="240" fill="url(#compoundGlow)" opacity={0.3 + (activeStepIndex + 1) * 0.14} />

              {/* Expanding Concentric Orbit Rings based on active step */}
              {[60, 105, 150, 195, 235].map((radius, idx) => {
                const isReached = idx <= activeStepIndex;
                const isCurrent = idx === activeStepIndex;
                return (
                  <g key={`ring-${idx}`}>
                    <circle
                      cx="250"
                      cy="250"
                      r={radius}
                      stroke={isReached ? (isCurrent ? '#ff5500' : 'rgba(255, 107, 44, 0.35)') : 'rgba(255, 255, 255, 0.05)'}
                      strokeWidth={isCurrent ? 2 : 1}
                      strokeDasharray={isReached ? 'none' : '4 6'}
                      className={isCurrent ? 'active-expanding-ring' : ''}
                    />
                    {/* Ring orbit satellite dot */}
                    {isReached && (
                      <circle
                        cx={250 + radius * Math.cos((idx * 1.3) + 0.4)}
                        cy={250 + radius * Math.sin((idx * 1.3) + 0.4)}
                        r={isCurrent ? 5 : 3}
                        fill={isCurrent ? '#ffffff' : '#ff5500'}
                      />
                    )}
                  </g>
                );
              })}

              {/* Central Origin Node */}
              <circle cx="250" cy="250" r="30" fill="#0c0c0e" stroke="#ff5500" strokeWidth="2" />
              <text
                x="250"
                y="254"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="800"
                letterSpacing={isRTL ? "0" : "1"}
              >
                {isRTL ? 'هسته' : 'ORIGIN'}
              </text>
            </svg>

            {/* Active Output State Floating Card */}
            <div className="compounding-active-label">
              <span className="step-count">CYCLE 0{activeStepIndex + 1} / 05</span>
              <h3 className="step-name">{steps[activeStepIndex]}</h3>
              <p className="step-subtext">{c.subtext}</p>
            </div>
          </div>

          {/* Interactive Step Selector Pill Grid */}
          <div className="compounding-stepper-track">
            {steps.map((st, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={`step-btn-${idx}`}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`compounding-step-btn ${isSelected ? 'active' : ''}`}
                >
                  <span className="step-btn-num">0{idx + 1}</span>
                  <span className="step-btn-text">{st}</span>
                  <span className="step-btn-indicator" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
