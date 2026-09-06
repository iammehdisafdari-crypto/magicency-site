import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { Compass, Sparkles, Activity, Cpu, Database } from 'lucide-react';

const ICON_MAP = {
  Compass,
  Sparkles,
  Activity,
  Cpu,
  Database
};

export default function BeliefSection() {
  const { lang, isRTL } = useLanguage();
  const data = ABOUT_DATA[lang]?.belief || ABOUT_DATA.en.belief;
  const [isConnected, setIsConnected] = useState(true);
  const [activeFragmentId, setActiveFragmentId] = useState('strategy');

  const fragments = data.fragments || [];
  const activeFragment = fragments.find((f) => f.id === activeFragmentId) || fragments[0];

  return (
    <section 
      id="section-02" 
      className={`about-chapter-section belief-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 02: The Belief"
    >
      <div className="container belief-container">
        
        {/* Editorial Section Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{data.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{data.eyebrow}</span>
          </div>
          <div className="chapter-status-pill">
            <span className={`status-indicator-dot ${isConnected ? 'is-live' : 'is-warning'}`} />
            <span className="status-indicator-label">
              {isConnected 
                ? (isRTL ? 'سیستم: حلقه پیوسته فعال' : 'STATE: CONNECTED LOOP')
                : (isRTL ? 'سیستم: جزیره‌های گسسته' : 'STATE: DISCONNECTED SILOS')}
            </span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="belief-headline-wrap">
          <h2 className="belief-statement-title">
            <span className="statement-line block">{data.statementLine1}</span>
            <span className="statement-line block highlight-text">{data.statementLine2}</span>
          </h2>
          <div className="belief-lead-row">
            <p className="belief-lead-text">{data.lead}</p>
            <p className="belief-thesis-text">{data.thesis}</p>
          </div>
        </div>

        {/* Interactive Mode Controller: Silos vs Connected System */}
        <div className="belief-state-controller" role="group" aria-label="System Connectivity Toggle">
          <button
            type="button"
            onClick={() => setIsConnected(false)}
            className={`state-tab-btn ${!isConnected ? 'is-active' : ''}`}
            aria-pressed={!isConnected}
          >
            <span className="tab-marker">✕</span>
            <span>{data.toggleSilos}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsConnected(true)}
            className={`state-tab-btn ${isConnected ? 'is-active' : ''}`}
            aria-pressed={isConnected}
          >
            <span className="tab-marker glow-amber">✦</span>
            <span>{data.toggleSystem}</span>
          </button>
        </div>

        {/* Interactive Connective Canvas */}
        <div className={`belief-connective-canvas ${isConnected ? 'mode-connected' : 'mode-disconnected'}`}>
          
          {/* Dynamic SVG Vector Connections */}
          <div className="canvas-vector-layer" aria-hidden="true">
            <svg className="vector-connections-svg" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="beliefLaser" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF5500" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#FFA040" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF5500" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {isConnected ? (
                <>
                  {/* Central convergence feedback lines connecting the 5 nodes */}
                  <path d="M 120,200 Q 300,100 500,200 T 880,200" fill="none" stroke="url(#beliefLaser)" strokeWidth="1.5" className="laser-feed-path" />
                  <line x1="120" y1="200" x2="310" y2="120" stroke="url(#beliefLaser)" strokeWidth="1.2" strokeDasharray="4 4" />
                  <line x1="310" y1="120" x2="500" y2="200" stroke="url(#beliefLaser)" strokeWidth="1.2" />
                  <line x1="500" y1="200" x2="690" y2="120" stroke="url(#beliefLaser)" strokeWidth="1.2" />
                  <line x1="690" y1="120" x2="880" y2="200" stroke="url(#beliefLaser)" strokeWidth="1.2" strokeDasharray="4 4" />
                  <line x1="120" y1="200" x2="500" y2="200" stroke="rgba(255, 85, 0, 0.2)" strokeWidth="1" />
                  <line x1="500" y1="200" x2="880" y2="200" stroke="rgba(255, 85, 0, 0.2)" strokeWidth="1" />
                  
                  {/* Core feedback orbit */}
                  <circle cx="500" cy="200" r="70" fill="none" stroke="rgba(255, 85, 0, 0.25)" strokeWidth="1" strokeDasharray="5 5" className="feedback-orbit-pulse" />
                </>
              ) : (
                <>
                  {/* Broken red/muted dashed isolation vectors */}
                  <line x1="120" y1="200" x2="220" y2="200" stroke="rgba(255, 70, 70, 0.25)" strokeWidth="1.2" strokeDasharray="4 6" />
                  <line x1="310" y1="120" x2="410" y2="120" stroke="rgba(255, 70, 70, 0.25)" strokeWidth="1.2" strokeDasharray="4 6" />
                  <line x1="590" y1="120" x2="690" y2="120" stroke="rgba(255, 70, 70, 0.25)" strokeWidth="1.2" strokeDasharray="4 6" />
                  <line x1="780" y1="200" x2="880" y2="200" stroke="rgba(255, 70, 70, 0.25)" strokeWidth="1.2" strokeDasharray="4 6" />
                </>
              )}
            </svg>
          </div>

          {/* 5 Disciplines Interactive Nodes */}
          <div className="canvas-nodes-row" role="tablist" aria-label="System Disciplines">
            {fragments.map((fragment, idx) => {
              const IconComp = ICON_MAP[fragment.icon] || Compass;
              const isSelected = activeFragmentId === fragment.id;
              return (
                <button
                  key={fragment.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFragmentId(fragment.id)}
                  className={`discipline-node-trigger ${isSelected ? 'is-selected' : ''} idx-${idx}`}
                >
                  <div className="node-icon-frame">
                    <IconComp className="node-icon" size={20} />
                    <span className="node-index">{fragment.num}</span>
                  </div>
                  <span className="node-name">{fragment.name}</span>
                  <span className={`node-condition ${isConnected ? 'is-integrated' : 'is-isolated'}`}>
                    {isConnected ? 'INTEGRATED' : 'SILOED'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Stage (Asymmetric Editorial Callout) */}
          <div className="canvas-active-detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFragment.id}-${isConnected}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className={`detail-card-editorial ${isConnected ? 'detail-connected' : 'detail-isolated'}`}
              >
                <div className="detail-card-header">
                  <div className="detail-num-tag">
                    <span>{activeFragment.num}</span>
                    <span className="slash">//</span>
                    <span className="detail-tag-name">{activeFragment.name}</span>
                  </div>
                  <span className={`detail-status-pill ${isConnected ? 'pill-green' : 'pill-red'}`}>
                    {isConnected ? '✦ CLOSED LOOP LEVERAGE' : '✕ ISOLATED FRICTION'}
                  </span>
                </div>

                <div className="detail-card-body">
                  {isConnected ? (
                    <div className="role-statement">
                      <span className="statement-eyebrow">CONNECTED IMPACT //</span>
                      <p className="statement-copy">{activeFragment.connectedRole}</p>
                    </div>
                  ) : (
                    <div className="issue-statement">
                      <span className="statement-eyebrow">SYSTEMIC LEAK //</span>
                      <p className="statement-copy">{activeFragment.isolatedIssue}</p>
                    </div>
                  )}
                </div>

                <div className="detail-card-footer">
                  <span className="footer-legend">
                    {isConnected 
                      ? data.systemThesis 
                      : (isRTL 
                          ? 'در ساختار جزیره‌ای، هر بخش بدون آگاهی از عملکرد بخش‌های دیگر هزینه تولید می‌کند.' 
                          : 'In siloed marketing, decisions leak capital at every structural handoff.')}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
