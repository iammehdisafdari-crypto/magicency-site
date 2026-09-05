import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function WhyWeExist() {
  const { t, isRTL } = useLanguage();
  const data = t.about?.whyWeExist || {};
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  // Mode: 'fragmented' vs 'connected' (toggleable or interactive)
  const [isSystemConnected, setIsSystemConnected] = useState(true);
  const [activeFragment, setActiveFragment] = useState(null);

  const fragments = data.fragments || [
    { id: 'strategy', num: '01', label: 'Strategy', isolatedIssue: 'Isolated from execution', connectedRole: 'Directs capital & positioning' },
    { id: 'creative', num: '02', label: 'Creative', isolatedIssue: 'Judged on aesthetics alone', connectedRole: 'Communicates advantage' },
    { id: 'digital', num: '03', label: 'Digital', isolatedIssue: 'Built in technical silos', connectedRole: 'Engineers customer velocity' },
    { id: 'media', num: '04', label: 'Media', isolatedIssue: 'Buys impressions without context', connectedRole: 'Amplifies proven value' },
    { id: 'data', num: '05', label: 'Data', isolatedIssue: 'Rearview dashboards with no action', connectedRole: 'Governs next decision' },
  ];

  return (
    <section 
      ref={containerRef}
      className="why-exist-section" 
      aria-label="Why Magicency Exists"
    >
      <div className="container why-exist-container">
        
        {/* =========================================================
            HEADER & CENTRAL THESIS (CONCISE TEXT, VISUAL CARRIES IT)
            ========================================================= */}
        <div className="why-exist-header">
          <div className="why-exist-eyebrow-row">
            <span className="why-exist-eyebrow">{data.eyebrow || '01 / IDENTITY & CAUSE'}</span>
            <div className="system-state-indicator">
              <span className={`status-orb ${isSystemConnected ? 'is-connected' : 'is-fragmented'}`} />
              <span className="status-label">
                {isSystemConnected ? (isRTL ? 'وضعیت: سیستم پیوسته' : 'STATE: ONE SYSTEM') : (isRTL ? 'وضعیت: قطعات پراکنده' : 'STATE: FRAGMENTED')}
              </span>
            </div>
          </div>

          <h2 className="why-exist-headline">
            {data.headline || 'Marketing became too fragmented.'}
          </h2>

          <p className="why-exist-thesis">
            {data.copy || 'Too many businesses are solving different parts of the same problem with disconnected decisions. Magicency exists to connect those decisions.'}
          </p>

          {/* Interactive State Toggle */}
          <div className="why-state-toggle-wrap">
            <button
              type="button"
              onClick={() => setIsSystemConnected(false)}
              className={`state-toggle-btn ${!isSystemConnected ? 'is-active' : ''}`}
              aria-pressed={!isSystemConnected}
            >
              <span>{isRTL ? 'مشاهده بحران تفرق و جدایی' : 'DISCONNECTED SILOS'}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsSystemConnected(true)}
              className={`state-toggle-btn ${isSystemConnected ? 'is-active' : ''}`}
              aria-pressed={isSystemConnected}
            >
              <span className="toggle-glow-dot" />
              <span>{isRTL ? 'معماری پیوسته: یک سیستم واحد' : 'ONE CONNECTED SYSTEM'}</span>
            </button>
          </div>
        </div>

        {/* =========================================================
            CINEMATIC FRAGMENT-TO-SYSTEM TRANSFORMATION VISUAL
            ========================================================= */}
        <div className={`why-exist-visual-stage ${isSystemConnected ? 'mode-connected' : 'mode-fragmented'}`}>
          
          {/* Background Grid & Laser Mesh */}
          <div className="stage-mesh-canvas" aria-hidden="true">
            <svg className="stage-lines-svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
              <defs>
                <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF4500" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {isSystemConnected && (
                <>
                  {/* Central Node Connectors */}
                  <line x1="160" y1="120" x2="500" y2="250" stroke="url(#laserGrad)" strokeWidth="1.5" className="laser-pulse" />
                  <line x1="840" y1="120" x2="500" y2="250" stroke="url(#laserGrad)" strokeWidth="1.5" className="laser-pulse" />
                  <line x1="220" y1="380" x2="500" y2="250" stroke="url(#laserGrad)" strokeWidth="1.5" className="laser-pulse" />
                  <line x1="780" y1="380" x2="500" y2="250" stroke="url(#laserGrad)" strokeWidth="1.5" className="laser-pulse" />
                  <line x1="500" y1="80" x2="500" y2="250" stroke="url(#laserGrad)" strokeWidth="1.5" className="laser-pulse" />

                  {/* Peripheral Circuit Ring */}
                  <polygon points="160,120 500,80 840,120 780,380 220,380" fill="none" stroke="rgba(255, 69, 0, 0.18)" strokeWidth="1" strokeDasharray="4 6" />
                </>
              )}
            </svg>
          </div>

          {/* Central Synthesis Emblem: Appears only in ONE SYSTEM mode */}
          <div className={`central-one-system-core ${isSystemConnected ? 'is-revealed' : 'is-suppressed'}`}>
            <div className="core-beacon-rings" aria-hidden="true" />
            <div className="core-badge-pill">
              <span className="core-spark">✦</span>
              <span className="core-code">{data.unifiedBadge || 'ONE SYSTEM'}</span>
            </div>
            <p className="core-resolution-line">
              {data.unifiedStatement || 'When strategy, creative, digital, media, and data converge into one continuous feedback loop, growth stops being accidental.'}
            </p>
          </div>

          {/* Five Discipline Fragment Nodes */}
          <div className="fragments-orbital-grid">
            {fragments.map((frag, idx) => {
              const isSelected = activeFragment === frag.id;
              return (
                <motion.div
                  key={frag.id}
                  onClick={() => setActiveFragment(frag.id)}
                  className={`fragment-node-card fragment-idx-${idx} ${isSelected ? 'is-selected' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="fragment-card-top">
                    <span className="fragment-number">{frag.num}</span>
                    <span className="fragment-type-pill">{isSystemConnected ? 'CONNECTED' : 'DISCONNECTED'}</span>
                  </div>

                  <h3 className="fragment-title">{frag.label}</h3>

                  <div className="fragment-dynamic-statement">
                    {isSystemConnected ? (
                      <p className="fragment-role-text">
                        <span className="role-prefix">✦ </span>
                        {frag.connectedRole}
                      </p>
                    ) : (
                      <p className="fragment-issue-text">
                        <span className="issue-prefix">✕ </span>
                        {frag.isolatedIssue}
                      </p>
                    )}
                  </div>

                  <div className="fragment-card-footer">
                    <span className="fragment-footer-metric">
                      {isSystemConnected ? 'SYNERGY // 100%' : 'FRICTION // HIGH'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
