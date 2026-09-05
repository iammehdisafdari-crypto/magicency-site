import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';
import { Compass, Sparkles, Monitor, Zap, BarChart3, RotateCw } from 'lucide-react';

const ICONS = {
  strategy: Compass,
  creative: Sparkles,
  digital: Monitor,
  acquisition: Zap,
  measurement: BarChart3
};

export default function SystemLoop() {
  const { t, isRTL } = useLanguage();
  const s = t.approach?.system || {};
  const disciplines = s.disciplines || [];
  const [activeId, setActiveId] = useState('strategy');

  const activeDiscipline = disciplines.find((d) => d.id === activeId) || disciplines[0];

  return (
    <section className="approach-system-section" aria-label="The Connected Disciplines System">
      <div className="container approach-system-container">
        
        {/* Header Block */}
        <div className="system-header-block">
          <span className="approach-tag-label">{s.badge || 'THE CONNECTED SYSTEM'}</span>
          <h2 className="system-main-title">
            {s.headline || 'Nothing works in isolation.'}
          </h2>
          <p className="system-main-sub">
            {s.subheadline}
          </p>
        </div>

        {/* Circular Circuit Feedback Loop Visualization */}
        <div className="system-circuit-wrap">
          
          <div className="circuit-loop-badge">
            <RotateCw size={14} className="circuit-spin-icon" />
            <span>{s.loopTag || 'CLOSED-LOOP OPERATIONAL FEEDBACK'}</span>
          </div>

          <div className="system-nodes-grid">
            {disciplines.map((d, index) => {
              const Icon = ICONS[d.id] || Compass;
              const isCurrent = d.id === activeId;
              return (
                <div 
                  key={d.id} 
                  className={`system-node-item ${isCurrent ? 'is-active' : ''}`}
                  onClick={() => setActiveId(d.id)}
                >
                  <div className="node-icon-housing">
                    <Icon size={20} className="node-icon-svg" />
                    <span className="node-index-badge">0{index + 1}</span>
                  </div>

                  <div className="node-info-text">
                    <h3 className="node-name">{d.name}</h3>
                    <p className="node-role text-gradient-amber">{d.role}</p>
                  </div>

                  {/* Flow arrow connecting to next node */}
                  <div className="node-connector-arrow" aria-hidden="true">
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback return loop banner */}
          <div className="system-feedback-banner">
            <div className="feedback-line-pulse" />
            <div className="feedback-content">
              <span className="feedback-tag">{isRTL ? 'اصل بنیادین حلقه یادگیری' : 'THE SYSTEM LEARNS'}</span>
              <p className="feedback-text">{s.loopReturn}</p>
            </div>
          </div>

          {/* Active Discipline Detailed Breakdown */}
          {activeDiscipline && (
            <motion.div 
              key={activeDiscipline.id}
              className="system-discipline-deepdive"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASING.PRIMARY }}
            >
              <div className="deepdive-header">
                <span className="deepdive-name">{activeDiscipline.name}</span>
                <span className="deepdive-role text-gradient-amber">{activeDiscipline.role}</span>
              </div>
              <p className="deepdive-body">
                {activeDiscipline.detail}
              </p>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
