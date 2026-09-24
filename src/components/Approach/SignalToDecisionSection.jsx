import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SIGNAL_TO_DECISION_STEPS } from '../../data/growthArchitecture';

export default function SignalToDecisionSection() {
  const { t, isRTL } = useLanguage();
  const s2d = t.approach?.signalsToDecisions || {};
  const [activeStepIndex, setActiveStepIndex] = useState(3); // Default on 'DECISION'

  const activeStep = SIGNAL_TO_DECISION_STEPS[activeStepIndex];

  return (
    <section className="approach-section approach-signal-decision-section" id="signals-to-decisions">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{s2d.eyebrow}</span>
          </div>

          <h2 className="approach-section-title">
            {s2d.headline}
          </h2>

          <div className="approach-editorial-lead-statement">
            <p className="lead-statement-p">{s2d.supporting1}</p>
            <p className="lead-statement-p highlight-white">{s2d.supporting2}</p>
          </div>
        </div>

        {/* Analytical Decision Pipeline Visualization */}
        <div className="signal-decision-pipeline-frame">
          {/* Linear Transformation Track */}
          <div className="pipeline-track" role="tablist" aria-label="Signal to Decision Sequence">
            {SIGNAL_TO_DECISION_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`pipeline-step-node ${isSelected ? 'active' : ''}`}
                >
                  <div className="step-node-top">
                    <span className="step-node-index">{step.num}</span>
                    <span className="step-node-pulse" />
                  </div>
                  <h4 className="step-node-title">{isRTL ? step.nameFa : step.nameEn}</h4>
                  <span className="step-node-sub">{isRTL ? step.subFa : step.subEn}</span>
                  {idx < SIGNAL_TO_DECISION_STEPS.length - 1 && (
                    <span className="pipeline-step-arrow" aria-hidden="true">→</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Analytical Telemetry Inspector Box */}
          <div className="pipeline-inspector-panel">
            <div className="inspector-panel-header">
              <div className="inspector-title-group">
                <span className="inspector-phase-tag">PHASE {activeStep.num} // ARCHITECTURAL LOGIC</span>
                <h3 className="inspector-title">{isRTL ? activeStep.nameFa : activeStep.nameEn}</h3>
              </div>
              <div className="inspector-meta-tag">
                <span className="meta-dot" />
                <span>{isRTL ? activeStep.subFa : activeStep.subEn}</span>
              </div>
            </div>

            <p className="inspector-detail-desc">
              {isRTL ? activeStep.detailFa : activeStep.detailEn}
            </p>

            {/* Contextual telemetry breakdown */}
            <div className="inspector-telemetry-specs">
              <div className="spec-metric-item">
                <span className="spec-metric-label">{isRTL ? 'معیار ارزیابی' : 'RESOLUTION FOCUS'}</span>
                <span className="spec-metric-val">DETERMINISTIC INTENT</span>
              </div>
              <div className="spec-metric-item">
                <span className="spec-metric-label">{isRTL ? 'سرعت پردازش' : 'DECISION LATENCY'}</span>
                <span className="spec-metric-val">&lt; 24H ITERATION</span>
              </div>
              <div className="spec-metric-item">
                <span className="spec-metric-label">{isRTL ? 'پیامد عملیاتی' : 'SYSTEM OUTCOME'}</span>
                <span className="spec-metric-val">CAC COMPRESSION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
