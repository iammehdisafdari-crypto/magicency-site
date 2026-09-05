import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';
import { RotateCw, ArrowDown, CornerDownLeft } from 'lucide-react';

export default function OperatingSystem() {
  const { t, isRTL } = useLanguage();
  const os = t.approach?.operatingSystem || {};
  const loopNodes = os.loopNodes || [];

  return (
    <section className="approach-os-section" aria-label="The Magicency Operating System">
      <div className="container approach-os-container">
        
        {/* Header Block */}
        <div className="os-header-block">
          <span className="approach-tag-label">{os.badge || 'THE OPERATING SYSTEM'}</span>
          <h2 className="os-main-title">
            {os.headline || 'A system designed to learn.'}
          </h2>
          <p className="os-lead-statement">
            {os.lead}
          </p>
          <p className="os-body-statement">
            {os.body}
          </p>
        </div>

        {/* Continuous Flow Architecture Visualization */}
        <div className="os-architecture-schematic">
          <div className="os-schematic-inner">
            
            {/* The Cycle Nodes Track */}
            <div className="os-nodes-chain">
              {loopNodes.map((node, idx) => (
                <div key={node.id} className="os-chain-element">
                  <div className={`os-chain-card ${node.id === 'insight' || node.id === 'learning' ? 'is-core-hub' : ''}`}>
                    <span className="os-chain-index">0{idx + 1}</span>
                    <span className="os-chain-title">{node.label}</span>
                  </div>
                  
                  {idx < loopNodes.length - 1 && (
                    <div className="os-chain-connector" aria-hidden="true">
                      <span className="chain-arrow">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Loopback Circuit Banner: Learning -> Returns to Insight */}
            <div className="os-loopback-circuit">
              <div className="loopback-indicator-line" />
              <div className="loopback-badge">
                <RotateCw size={14} className="circuit-spin-icon text-orange" />
                <span className="text-gradient-amber">{os.loopNote || '↺ THE SYSTEM CYCLES CONTINUOUSLY BACK TO INSIGHT'}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
