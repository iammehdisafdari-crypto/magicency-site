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

export default function WhyWeExist() {
  const { lang, isRTL } = useLanguage();
  const dna = ABOUT_DATA[lang]?.dna || ABOUT_DATA.en.dna;
  const [isConnected, setIsConnected] = useState(true);
  const [activeFragmentId, setActiveFragmentId] = useState('strategy');

  const fragments = dna.fragments || [];
  const activeFragment = fragments.find((f) => f.id === activeFragmentId) || fragments[0];

  return (
    <section 
      id="section-dna" 
      className={`about-chapter-section dna-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 02: Our DNA and Why We Exist"
    >
      <div className="container dna-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{dna.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{dna.eyebrow}</span>
          </div>
          <div className="chapter-status-pill">
            <span className={`status-indicator-dot ${isConnected ? 'is-live' : 'is-warning'}`} />
            <span className="status-indicator-label">
              {isConnected 
                ? (isRTL ? 'سیستم: حلقه پیوسته فعال' : 'STATE: ONE CONNECTED SYSTEM')
                : (isRTL ? 'سیستم: جزیره‌های گسسته' : 'STATE: DISCONNECTED SILOS')}
            </span>
          </div>
        </div>

        {/* Narrative Intro & Central Problem Statement */}
        <div className="dna-headline-wrap">
          <h2 className="dna-statement-title">
            <span className="statement-line block">{dna.headlinePart1}</span>
            <span className="statement-line block highlight-pink">{dna.headlinePart2}</span>
          </h2>
          <div className="dna-lead-row">
            <p className="dna-lead-text">{dna.lead}</p>
            <p className="dna-thesis-text">{dna.thesis}</p>
          </div>
        </div>

        {/* Editorial Visual Composition: Studio Reality & Authentic Grounding */}
        {dna.workspace && (
          <div className="dna-editorial-media-frame">
            <div className="media-image-wrapper">
              <img 
                src={dna.workspace.image} 
                alt="Magicency Strategic Systems Workspace" 
                className="dna-studio-photo"
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
              />
              <div className="media-gradient-vignette" />
              <div className="media-caption-bar">
                <span className="caption-dot" />
                <span className="caption-text">{dna.workspace.caption}</span>
              </div>
            </div>
            <div className="media-side-narrative">
              <h3 className="side-narrative-title">{dna.workspace.headline}</h3>
              <p className="side-narrative-copy">{dna.workspace.copy}</p>
            </div>
          </div>
        )}

        {/* Interactive Mode Controller: Disconnected Silos vs Connected System */}
        <div className="dna-system-interactive-block">
          <div className="dna-state-controller" role="group" aria-label="System Connectivity Toggle">
            <button
              type="button"
              onClick={() => setIsConnected(false)}
              className={`state-tab-btn ${!isConnected ? 'is-active' : ''}`}
              aria-pressed={!isConnected}
            >
              <span className="tab-marker">✕</span>
              <span>{dna.toggleSilos}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsConnected(true)}
              className={`state-tab-btn ${isConnected ? 'is-active' : ''}`}
              aria-pressed={isConnected}
            >
              <span className="tab-marker glow-pink">✦</span>
              <span>{dna.toggleSystem}</span>
            </button>
          </div>

          <p className="dna-toggle-thesis-subtext">
            {isConnected ? dna.systemThesis : dna.lead}
          </p>

          {/* Interactive Silo-to-System Canvas */}
          <div className={`dna-connective-canvas ${isConnected ? 'mode-connected' : 'mode-disconnected'}`}>
            
            {/* Dynamic Vector Circuit Lines */}
            <div className="canvas-vector-layer" aria-hidden="true">
              <svg className="vector-connections-svg" viewBox="0 0 1000 360" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="dnaLaser" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C58A3A" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#C58A3A" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#C58A3A" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {isConnected ? (
                  <>
                    <line x1="120" y1="180" x2="500" y2="180" stroke="url(#dnaLaser)" strokeWidth="1.5" className="dna-pulse-line" />
                    <line x1="500" y1="180" x2="880" y2="180" stroke="url(#dnaLaser)" strokeWidth="1.5" className="dna-pulse-line" />
                    <circle cx="500" cy="180" r="6" fill="#C58A3A" />
                    <circle cx="500" cy="180" r="14" fill="none" stroke="rgba(197, 138, 58, 0.4)" strokeWidth="1" />
                  </>
                ) : (
                  <line x1="80" y1="180" x2="920" y2="180" stroke="rgba(139, 147, 167, 0.15)" strokeWidth="1" strokeDasharray="6 8" />
                )}
              </svg>
            </div>

            {/* 5 Disciplines Fragment Grid */}
            <div className="dna-fragments-row" role="tablist" aria-label="Operating Disciplines">
              {fragments.map((frag) => {
                const IconComponent = ICON_MAP[frag.icon] || Compass;
                const isSelected = activeFragmentId === frag.id;

                return (
                  <button
                    key={frag.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveFragmentId(frag.id)}
                    className={`dna-fragment-card ${isSelected ? 'is-selected' : ''} ${isConnected ? 'state-connected' : 'state-isolated'}`}
                  >
                    <div className="fragment-card-top">
                      <span className="fragment-num">{frag.num}</span>
                      <IconComponent className="fragment-icon" size={18} aria-hidden="true" />
                    </div>

                    <h4 className="fragment-name">{frag.name}</h4>

                    <div className="fragment-status-tag">
                      {isConnected ? (
                        <span className="tag-connected">{isRTL ? 'حلقه پیوسته' : 'CONNECTED'}</span>
                      ) : (
                        <span className="tag-isolated">{isRTL ? 'جزیره منفرد' : 'ISOLATED'}</span>
                      )}
                    </div>

                    <p className="fragment-role-preview">
                      {isConnected ? frag.connectedRole : frag.isolatedIssue}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Fragment Detail Console */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${activeFragment.id}-${isConnected}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="dna-detail-console"
              >
                <div className="console-meta-bar">
                  <span className="console-discipline-tag">
                    {activeFragment.num} // {activeFragment.name.toUpperCase()}
                  </span>
                  <span className="console-state-badge">
                    {isConnected ? (isRTL ? 'نقش در سیستم یکپارچه' : 'ROLE IN CONNECTED SYSTEM') : (isRTL ? 'عارضه کارکرد جزیره‌ای' : 'FAILURE IN ISOLATED SILO')}
                  </span>
                </div>

                <div className="console-content-split">
                  <div className="console-statement-box">
                    <h5 className="console-statement-title">
                      {isConnected ? activeFragment.connectedRole : activeFragment.isolatedIssue}
                    </h5>
                  </div>
                  <div className="console-impact-box">
                    <p className="console-impact-text">
                      {isConnected 
                        ? (isRTL ? 'این تخصص مستقیماً با لایه‌های دیگر تبادل سیگنال دارد و با هر تراکنش، هوشمندی سیستم را ارتقا می‌دهد.' : 'This discipline shares telemetry continuously with other layers, turning market interactions into predictable commercial compounding.')
                        : (isRTL ? 'این بخش در انزوای کامل عمل می‌کند؛ خروجی آن به اهرم تجاری تبدیل نشده و سرمایه در مرزهای ارتباطی اتلاف می‌شود.' : 'This department operates in functional isolation; its outputs fail to create commercial leverage, and marketing capital leaks at every boundary.')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
