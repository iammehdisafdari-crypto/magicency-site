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

  const titleParallax = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section 
      id="section-hero" 
      ref={containerRef}
      className={`about-chapter-section hero-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 01: About Us & Identity"
    >
      {/* Background Architectural Ambient Elements */}
      <div className="hero-cinematic-backdrop" aria-hidden="true">
        <div className="hero-gradient-overlay" />
        <img 
          src="/assets/capabilities/growth_systems.webp" 
          alt="" 
          className="hero-media-texture"
          width="1920" 
          height="1080" 
          loading="eager"
          decoding="async"
        />
        <div className="hero-noise-mask" />
      </div>

      {/* Editorial Grid Metadata Coordinates */}
      <div className="editorial-matrix-ambient" aria-hidden="true">
        <span className="matrix-coord top-l">LAT // 35.6892° N</span>
        <span className="matrix-coord top-r">LON // 51.3890° E</span>
        <span className="matrix-coord bottom-l">CHAPTER // 01</span>
        <span className="matrix-coord bottom-r">DISCIPLINE // GROWTH ARCHITECTURE</span>
      </div>

      <div className="container hero-chapter-container">
        
        {/* Top Editorial Meta Row */}
        <div className="hero-editorial-top">
          <div className="hero-chapter-pill">
            <span className="pill-dot" />
            <span className="pill-text">{hero.chapterTag}</span>
          </div>

          <div className="hero-editorial-telemetry">
            <span className="telemetry-badge">{hero.telemetry.status}</span>
          </div>
        </div>

        {/* Large Statement-Driven Kinetic Typography Stack */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="hero-statement-composition"
        >
          <div className="hero-eyebrow-line">
            <span className="eyebrow-accent">/ </span>
            <span>{hero.eyebrow}</span>
          </div>

          <motion.h1 
            style={{ y: titleParallax }}
            className="hero-statement-title"
          >
            <span className="title-row block">{hero.headlinePart1}</span>
            <span className="title-row block">{hero.headlinePart2}</span>
            <span className="title-row block highlight-pink">{hero.headlinePart3}</span>
          </motion.h1>

          <div className="hero-editorial-rule" />

          {/* Asymmetric Narrative & Conviction Columns */}
          <div className="hero-editorial-columns">
            <div className="hero-col-narrative">
              <p className="hero-subline-text">{hero.subline}</p>
            </div>

            <div className="hero-col-conviction">
              <blockquote className="hero-manifesto-quote">
                {hero.editorialQuote}
              </blockquote>
              <div className="hero-quote-signature">
                <span className="signature-dot" />
                <span className="signature-name">MAGICENCY MANIFESTO</span>
                <span className="signature-spec">{hero.telemetry.discipline}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Strategic Category Pillars (Modelled on Reference's 3 Core Focus Areas) */}
        <div className="hero-pillars-grid" role="list">
          {hero.pillars?.map((pillar) => (
            <div key={pillar.num} className="hero-pillar-card" role="listitem">
              <div className="pillar-header">
                <span className="pillar-num">{pillar.num}</span>
                <span className="pillar-code">{pillar.code}</span>
              </div>
              <h2 className="pillar-title">{pillar.title}</h2>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-bottom-edge" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Verified Clients Marquee Strip */}
        <div className="hero-marquee-strip" aria-label="Verified Clients">
          <div className="marquee-label-row">
            <span className="marquee-spark">✦</span>
            <span className="marquee-title">{hero.marqueeLabel}</span>
          </div>
          <div className="marquee-slider-track">
            <div className="marquee-track-inner">
              {hero.clients.concat(hero.clients).map((clientName, idx) => (
                <div key={idx} className="marquee-client-item">
                  <span className="client-separator">/</span>
                  <span className="client-text">{clientName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
