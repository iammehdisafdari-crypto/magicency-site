import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { RefreshCw, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function CompoundingComparison() {
  const { t, isRTL } = useLanguage();
  const c = t.approach?.compounding || {};
  const linear = c.linear || {};
  const compounding = c.compounding || {};

  return (
    <section className="approach-compounding-section" aria-label="Linear Marketing vs Compounding Systems">
      <div className="container approach-compounding-container">
        
        {/* Header Block */}
        <div className="compounding-header-block">
          <span className="approach-tag-label">{c.badge || 'THE OPERATING MODEL'}</span>
          <h2 className="compounding-main-title">
            {c.headline || 'Linear Marketing vs. Compounding Systems'}
          </h2>
          <p className="compounding-main-sub">
            {c.subheadline}
          </p>
        </div>

        {/* The Dual Column Comparison Grid */}
        <div className="compounding-comparison-grid">
          
          {/* Left Column: Linear Marketing (Reset to 0) */}
          <div className="comparison-card card-linear">
            <div className="card-top-bar">
              <div className="card-title-wrap">
                <div className="card-status-badge badge-dim">
                  <AlertTriangle size={14} />
                  <span>{linear.subtitle || 'The Disconnected Agency Trap'}</span>
                </div>
                <h3 className="card-title">{linear.title || 'LINEAR MARKETING'}</h3>
              </div>
            </div>

            <div className="comparison-flow-list">
              {(linear.steps || []).map((step, idx) => (
                <div key={idx} className="comparison-flow-step step-linear">
                  <div className="step-node-col">
                    <span className="node-dot dot-gray" />
                    {idx < (linear.steps || []).length - 1 && <span className="node-line-gray" />}
                  </div>
                  <div className="step-info-col">
                    <h4 className="step-action-title">{step.label}</h4>
                    <p className="step-action-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="card-verdict verdict-linear">
              <RefreshCw size={14} className="verdict-icon" />
              <span>{linear.verdict || 'RESULT: EXPENSIVE, VOLATILE & REPETITIVE'}</span>
            </div>
          </div>

          {/* Right Column: Compounding System (Perpetual Scale) */}
          <div className="comparison-card card-compounding">
            <div className="card-top-bar">
              <div className="card-title-wrap">
                <div className="card-status-badge badge-accent">
                  <ShieldCheck size={14} />
                  <span>{compounding.subtitle || 'The Magicency Growth Flywheel'}</span>
                </div>
                <h3 className="card-title text-gradient-amber">{compounding.title || 'COMPOUNDING SYSTEM'}</h3>
              </div>
            </div>

            <div className="comparison-flow-list">
              {(compounding.steps || []).map((step, idx) => (
                <div key={idx} className="comparison-flow-step step-compounding">
                  <div className="step-node-col">
                    <span className="node-dot dot-amber" />
                    {idx < (compounding.steps || []).length - 1 && <span className="node-line-amber" />}
                  </div>
                  <div className="step-info-col">
                    <h4 className="step-action-title text-white">{step.label}</h4>
                    <p className="step-action-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="card-verdict verdict-compounding">
              <TrendingUp size={16} className="verdict-icon text-orange" />
              <span className="text-gradient-amber">{compounding.verdict || 'RESULT: REDUCING CAC, EXPANDING MOAT & PERPETUAL SCALE'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
