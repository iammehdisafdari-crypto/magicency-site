import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function ProblemSection() {
  const { t, isRTL } = useLanguage();
  const problem = t.approach?.problem || {};
  const [activeSystemView, setActiveSystemView] = useState('disconnected'); // 'disconnected' | 'connected'

  return (
    <section className="approach-section approach-problem-section" id="the-problem">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{problem.eyebrow}</span>
          </div>

          <h2 className="approach-section-title">
            {problem.headline}
          </h2>

          <div className="approach-problem-editorial-body">
            <p className="problem-statement-line">{problem.bodyLine1}</p>
            <p className="problem-statement-line">{problem.bodyLine2}</p>
            <p className="problem-statement-line">{problem.bodyLine3}</p>
            <p className="problem-statement-line problem-statement-lag">{problem.bodyLine4}</p>
          </div>

          {/* Alternative Shift Emphasis */}
          <div className="approach-problem-shift-box">
            <span className="shift-accent-label">{problem.contrast}</span>
            <h3 className="shift-core-emphasis">{problem.emphasis}</h3>
          </div>
        </div>

        {/* Minimal Architectural Visual: Disconnected Nodes vs Connected System */}
        <div className="approach-problem-visual-frame">
          {/* Architecture State Switcher */}
          <div className="problem-visual-controls" role="tablist" aria-label="System Connectivity Comparison">
            <button
              type="button"
              role="tab"
              aria-selected={activeSystemView === 'disconnected'}
              onClick={() => setActiveSystemView('disconnected')}
              className={`problem-view-toggle-btn ${activeSystemView === 'disconnected' ? 'active' : ''}`}
            >
              <span className="toggle-dot dot-amber" />
              <span>{isRTL ? 'وضعیت متداول // جزیره‌های جداگانه' : 'Conventional State // Disconnected Silos'}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeSystemView === 'connected'}
              onClick={() => setActiveSystemView('connected')}
              className={`problem-view-toggle-btn ${activeSystemView === 'connected' ? 'active' : ''}`}
            >
              <span className="toggle-dot dot-magenta" />
              <span>{isRTL ? 'معماری مجیکنسـی // مدار متصل' : 'Magicency Architecture // Connected System'}</span>
            </button>
          </div>

          {/* Architectural Schematic Display */}
          <div className="problem-schematic-wrapper">
            <AnimatePresence mode="wait">
              {activeSystemView === 'disconnected' ? (
                <motion.div
                  key="disconnected-state"
                  className="schematic-canvas disconnected-canvas"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="schematic-grid-disconnected">
                    {[
                      {
                        id: 'media',
                        code: '01',
                        labelEn: 'PAID MEDIA',
                        labelFa: 'تبلیغات پولی',
                        statusEn: 'ISOLATED SPEND',
                        statusFa: 'هزینه جداگانه',
                        frictionEn: 'No shared creative feedback loop'
                      },
                      {
                        id: 'creative',
                        code: '02',
                        labelEn: 'CREATIVE ASSETS',
                        labelFa: 'دارایی‌های خلاق',
                        statusEn: 'DECORATIVE ASSETS',
                        statusFa: 'تولید بدون تحلیل',
                        frictionEn: 'Disconnected from checkout intent'
                      },
                      {
                        id: 'experience',
                        code: '03',
                        labelEn: 'EXPERIENCE & CRO',
                        labelFa: 'تجربه کاربری',
                        statusEn: 'HIGH FRICTION',
                        statusFa: 'اصطکاک بالا',
                        frictionEn: 'Generic flows for all traffic'
                      },
                      {
                        id: 'measurement',
                        code: '04',
                        labelEn: 'MEASUREMENT',
                        labelFa: 'سنجش و داده',
                        statusEn: 'POST-MORTEM REPORT',
                        statusFa: 'گزارش‌های دیرهنگام',
                        frictionEn: 'Data arrives too late to adapt spend'
                      }
                    ].map((node) => (
                      <div key={node.id} className="silo-node-block">
                        <div className="silo-node-header">
                          <span className="silo-code">{node.code}</span>
                          <span className="silo-alert-badge">BREAKPOINT // SEVERED</span>
                        </div>
                        <h4 className="silo-node-title">{isRTL ? node.labelFa : node.labelEn}</h4>
                        <div className="silo-status-tag">{isRTL ? node.statusFa : node.statusEn}</div>
                        <p className="silo-friction-desc">{node.frictionEn}</p>
                        <div className="silo-severed-conduit" aria-hidden="true">
                          <span className="severed-gap-label">SIGNAL LOST ✕</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="schematic-footer-telemetry">
                    <span className="telemetry-warning-indicator" />
                    <span>
                      {isRTL
                        ? 'نتیجه معماری جزیره‌ای: بازنشانی نتایج به صفر پس از هر کمپین، افزایش تصاعدی هزینه جذب (CAC) و عدم شکل‌گیری دارایی انباشته.'
                        : 'Conventional outcome: Growth resets to zero after each campaign. Media dollars evaporate without building compounded system intelligence.'}
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="connected-state"
                  className="schematic-canvas connected-canvas"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="connected-circuit-layout">
                    {/* SVG Circuit Highway */}
                    <svg
                      className="connected-circuit-svg"
                      viewBox="0 0 1000 240"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="connectedFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#C58A3A" stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#C58A3A" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#C58A3A" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>

                      {/* Continuous Forward Backbone */}
                      <path
                        d="M 60,100 L 940,100"
                        stroke="url(#connectedFlowGrad)"
                        strokeWidth="3"
                        strokeDasharray="6 4"
                        className="pulse-flow-forward"
                      />

                      {/* Closed-loop Return Highway */}
                      <path
                        d="M 940,100 C 940,180 800,210 500,210 C 200,210 60,180 60,100"
                        stroke="rgba(197, 138, 58, 0.4)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="pulse-flow-reverse"
                      />

                      {/* Node connection anchors */}
                      <circle cx="125" cy="100" r="8" fill="#C58A3A" />
                      <circle cx="375" cy="100" r="8" fill="#C58A3A" />
                      <circle cx="625" cy="100" r="8" fill="#C58A3A" />
                      <circle cx="875" cy="100" r="8" fill="#C58A3A" />

                      <text x="500" y="232" textAnchor="middle" fill="#C58A3A" fontSize="11" letterSpacing="0.15em">
                        {isRTL ? 'مدار بسته: بازخورد دائمی داده‌ها به استراتژی ↺' : 'CLOSED LOOP: CONTINUOUS TELEMETRY FEEDS NEXT HYPOTHESIS ↺'}
                      </text>
                    </svg>

                    <div className="connected-nodes-row">
                      {[
                        {
                          num: '01',
                          nameEn: 'STRATEGY',
                          nameFa: 'استراتژی',
                          descEn: 'Calculates unit economics & commercial thesis'
                        },
                        {
                          num: '02',
                          nameEn: 'EXPERIENCE & CREATIVE',
                          nameFa: 'خلاقیت و تجربه',
                          descEn: 'Engineers psychological conversion interfaces'
                        },
                        {
                          num: '03',
                          nameEn: 'ACQUISITION',
                          nameFa: 'جذب هدفمند',
                          descEn: 'Captures high-intent market demand'
                        },
                        {
                          num: '04',
                          nameEn: 'TELEMETRY & OPTIMIZATION',
                          nameFa: 'سنجش و بهینه‌سازی',
                          descEn: 'Calibrates spend and returns signals to strategy'
                        }
                      ].map((item) => (
                        <div key={item.num} className="connected-node-card">
                          <div className="connected-node-num">{item.num}</div>
                          <h4 className="connected-node-title">{isRTL ? item.nameFa : item.nameEn}</h4>
                          <p className="connected-node-desc">{item.descEn}</p>
                          <div className="connected-signal-indicator">
                            <span className="live-pulse" />
                            <span>LIVE SYNC</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="schematic-footer-telemetry telemetry-connected">
                    <span className="telemetry-active-indicator" />
                    <span>
                      {isRTL
                        ? 'معماری متصل: داده‌ها بی‌درنگ تصمیم‌های خلاقیت و رسانه را تنظیم می‌کنند. رشد از حالت تصادفی خارج و پیش‌بینی‌پذیر می‌شود.'
                        : 'Connected Architecture: Signals immediately calibrate creative and media execution. Growth ceases to be accidental and becomes deterministic.'}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
