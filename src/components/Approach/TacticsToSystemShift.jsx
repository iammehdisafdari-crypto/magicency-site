import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function TacticsToSystemShift() {
  const { t, isRTL } = useLanguage();
  const shift = t.approach?.shift || {};
  const [activeMode, setActiveMode] = useState('system'); // 'tactics' | 'system'

  const tacticsItems = shift.tacticsItems || ['Campaign', 'Website', 'Content', 'Ads'];
  const systemItems = shift.systemItems || ['Strategy', 'Creative', 'Digital', 'Acquisition', 'Measurement'];

  return (
    <section className="approach-section shift-section" aria-label="The Tactical to System Shift">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header text-center">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{shift.badge || '03 / THE SHIFT'}</span>
          </div>
          <h2 className="approach-section-title">{shift.headline}</h2>
          <p className="approach-section-subtext">{shift.subheadline}</p>
        </div>

        {/* Interactive Mode Toggle Bar */}
        <div className="shift-toggle-container">
          <div className="shift-toggle-pill">
            <button
              type="button"
              className={`shift-mode-btn ${activeMode === 'tactics' ? 'active tactics' : ''}`}
              onClick={() => setActiveMode('tactics')}
            >
              <span className="mode-dot" />
              <span className="mode-label">{shift.tacticsTitle || 'TACTICS'}</span>
            </button>
            <button
              type="button"
              className={`shift-mode-btn ${activeMode === 'system' ? 'active system' : ''}`}
              onClick={() => setActiveMode('system')}
            >
              <span className="mode-dot" />
              <span className="mode-label">{shift.systemTitle || 'SYSTEM'}</span>
            </button>
          </div>
        </div>

        {/* Visual Comparison Arena */}
        <div className="shift-display-arena">
          <AnimatePresence mode="wait">
            {activeMode === 'tactics' ? (
              <motion.div
                key="tactics-view"
                className="shift-arena-layout tactics-arena"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <div className="arena-meta-badge disconnected">
                  <span className="badge-warning-icon">⚠</span>
                  <span>{isRTL ? 'جزایر پراکنده // ریست به نقطه صفر پس از هر کمپین' : 'DISCONNECTED SILOS // RESETS TO ZERO AFTER CAMPAIGN'}</span>
                </div>

                <div className="tactics-blocks-grid">
                  {tacticsItems.map((item, idx) => (
                    <div key={`tactic-${idx}`} className="tactics-isolated-card">
                      <div className="card-severed-lead" />
                      <div className="card-severed-tail" />
                      <span className="card-index">0{idx + 1}</span>
                      <h4 className="card-name">{item}</h4>
                      <div className="card-decay-indicator">
                        <span className="decay-bar" />
                        <span className="decay-label">{isRTL ? 'افت پس از پایان بودجه' : 'DECAYS AFTER SPEND'}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="arena-consequence-banner">
                  <p>{isRTL ? 'نتیجه: هزینه جذب بالا، خستگی تیم و عدم انباشت ارزش دارایی.' : 'Result: Escalating CAC, team burnout, and zero asset accumulation.'}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="system-view"
                className="shift-arena-layout system-arena"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <div className="arena-meta-badge connected">
                  <span className="badge-energy-pulse" />
                  <span>{isRTL ? 'مدار بسته یکپارچه // رشد انباشتی و مرکب' : 'CONNECTED CIRCUIT // COMPOUNDING PERMANENT MOMENTUM'}</span>
                </div>

                <div className="system-circuit-pipeline">
                  {systemItems.map((item, idx) => (
                    <React.Fragment key={`system-${idx}`}>
                      <div className="system-piped-node">
                        <span className="node-stage-num">0{idx + 1}</span>
                        <h4 className="node-stage-title">{item}</h4>
                        <span className="node-stage-state">{isRTL ? 'متصل' : 'LINKED'}</span>
                      </div>
                      {idx < systemItems.length - 1 && (
                        <div className="system-pipe-connector">
                          <div className="pipe-energy-pulse" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="arena-compound-banner">
                  <div className="compound-pulse-icon">✓</div>
                  <p>{isRTL ? 'نتیجه: هر تصمیم داده خلق می‌کند؛ هر داده خندق رقابتی کسب‌وکار را عمیق‌تر می‌سازد.' : 'Result: Every decision generates data; every data point widens your commercial moat.'}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
