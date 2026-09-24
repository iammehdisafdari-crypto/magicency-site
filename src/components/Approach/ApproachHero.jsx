import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ARCHITECTURE_BOARD_NODES } from '../../data/growthArchitecture';

export default function ApproachHero() {
  const { t, lang, isRTL } = useLanguage();
  const hero = t.approach?.hero || {};

  const handleScrollToExplore = () => {
    const target = document.getElementById('the-definition');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="approach-section approach-hero-section" id="approach-hero">
      <div className="container approach-hero-container">
        
        {/* Eyebrow Pill */}
        <motion.div
          className="approach-hero-badge-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{hero.eyebrow}</span>
          </div>
        </motion.div>

        {/* Primary Headline */}
        <div className="approach-hero-headline-wrap">
          <h1 className="approach-hero-title">
            <motion.span
              className="approach-hero-title-line"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {hero.headlineLine1}
            </motion.span>
            <motion.span
              className="approach-hero-title-line highlight-accent"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {hero.headlineLine2}
            </motion.span>
          </h1>

          <motion.p
            className="approach-hero-supporting"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.supporting}
          </motion.p>
        </div>

        {/* DOMINANT CINEMATIC HERO VISUAL STAGE */}
        <motion.div
          className="approach-hero-visual-stage"
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Cinematic Image */}
          <div className="hero-media-backdrop">
            <img
              src="/assets/capabilities/growth_systems.webp"
              alt="Magicency Growth Architecture System"
              className="hero-media-img"
              loading="eager"
            />
            <div className="hero-media-overlay-gradient" />
            <div className="hero-media-scanlines" aria-hidden="true" />
          </div>

          {/* Integrated Architectural Signal Conduits */}
          <div className="hero-media-hud" aria-hidden="true">
            <div className="hud-corner hud-tl" />
            <div className="hud-corner hud-tr" />
            <div className="hud-corner hud-bl" />
            <div className="hud-corner hud-br" />

            <div className="hud-status-badge">
              <span className="hud-pulse-dot" />
              <span className="hud-status-label">
                {isRTL ? 'معماری فعال // سیستم هماهنگ' : 'ACTIVE ARCHITECTURE // SYNCHRONIZED'}
              </span>
            </div>

            <div className="hud-metric-pill">
              <span>{isRTL ? 'هدف: مقیاس تصاعدی' : 'OBJECTIVE: COMPOUNDING SCALE'}</span>
            </div>
          </div>

          {/* Subordinated Architectural Node Stream at Base of Visual */}
          <div className="hero-integrated-flow-strip">
            <div className="flow-strip-label">
              <span className="flow-strip-icon">✦</span>
              <span>{hero.boardFlow || '01 INPUT → 06 COMPOUNDING'}</span>
            </div>
            
            <div className="flow-strip-nodes">
              {ARCHITECTURE_BOARD_NODES.map((node) => {
                const nodeName = lang === 'fa' ? node.nameFa : node.nameEn;
                const nodeLabel = lang === 'fa' ? node.labelFa : node.labelEn;
                return (
                  <div key={node.index} className="flow-strip-node">
                    <span className="flow-node-index">{node.index}</span>
                    <span className="flow-node-name">{nodeName}</span>
                    <span className="flow-node-label">{nodeLabel}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          className="approach-hero-scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            type="button"
            className="approach-scroll-btn"
            onClick={handleScrollToExplore}
            aria-label={hero.scrollNote || 'SCROLL TO EXPLORE ARCHITECTURE'}
          >
            <span className="scroll-btn-line" />
            <span className="scroll-btn-text">{hero.scrollNote || 'SCROLL TO EXPLORE ARCHITECTURE'}</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
