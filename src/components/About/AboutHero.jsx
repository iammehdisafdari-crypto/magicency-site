import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutHero() {
  const { lang, isRTL } = useLanguage();
  const hero = ABOUT_DATA[lang]?.hero || ABOUT_DATA.en.hero;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const titleParallax = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const quoteParallax = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <section 
      id="section-01" 
      ref={containerRef}
      className={`about-chapter-section hero-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 01: Who We Are"
    >
      {/* Editorial Grid Matrix Metadata */}
      <div className="editorial-matrix-ambient" aria-hidden="true">
        <span className="matrix-coord top-l">LAT // 35.6892° N</span>
        <span className="matrix-coord top-r">LON // 51.3890° E</span>
        <span className="matrix-coord bottom-l">CHAPTER // 01</span>
        <span className="matrix-coord bottom-r">STATUS // LIVE FEEDBACK</span>
      </div>

      <div className="container hero-chapter-container">
        
        {/* Top Editorial Row */}
        <div className="hero-editorial-top">
          <div className="hero-chapter-pill">
            <span className="pill-dot" />
            <span className="pill-text">{hero.chapterTag}</span>
          </div>

          <div className="hero-editorial-telemetry">
            <span className="telemetry-badge">{hero.telemetry.status}</span>
          </div>
        </div>

        {/* Large Chapter Numeral + Asymmetric Kinetic Typography */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="hero-main-editorial-grid"
        >
          {/* Giant Architectural Anchor Numeral */}
          <div className="hero-numeral-anchor" aria-hidden="true">
            <span className="numeral-ghost">{hero.chapterNum}</span>
          </div>

          {/* Core Oversized Kinetic Typography */}
          <div className="hero-typography-stack">
            <div className="hero-eyebrow-line">
              <span className="eyebrow-accent">/ </span>
              <span>{hero.eyebrow}</span>
            </div>

            <motion.h1 
              style={{ y: titleParallax }}
              className="hero-monument-title"
            >
              <span className="title-row block">
                <span className="title-word">{hero.headlinePart1}</span>
              </span>
              <span className="title-row block highlight-row">
                <span className="title-word highlight-amber">{hero.headlinePart2}</span>
              </span>
            </motion.h1>

            <div className="hero-editorial-rule" />

            {/* Asymmetric Content Columns */}
            <div className="hero-editorial-columns">
              <div className="hero-col-narrative">
                <p className="hero-subline-text">{hero.subline}</p>
              </div>

              <motion.div 
                style={{ y: quoteParallax }}
                className="hero-col-conviction"
              >
                <blockquote className="hero-manifesto-quote">
                  {hero.editorialQuote}
                </blockquote>
                <div className="hero-quote-signature">
                  <span className="signature-dot" />
                  <span className="signature-name">MAGICENCY MANIFESTO</span>
                  <span className="signature-spec">{hero.telemetry.focus}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Technical Baseline */}
        <div className="hero-bottom-baseline">
          <div className="baseline-item">
            <span className="baseline-k">01. DISCIPLINE //</span>
            <span className="baseline-v">{hero.telemetry.discipline}</span>
          </div>
          <div className="baseline-divider" />
          <div className="baseline-item">
            <span className="baseline-k">02. MODEL //</span>
            <span className="baseline-v">CLOSED-LOOP ATTRIBUTION</span>
          </div>
          <div className="baseline-divider" />
          <div className="baseline-item">
            <span className="baseline-k">03. ARCHITECTURE //</span>
            <span className="baseline-v">COMPOUNDING VALUE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
