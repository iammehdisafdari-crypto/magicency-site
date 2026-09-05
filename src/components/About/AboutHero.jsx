import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutHero() {
  const { t, isRTL } = useLanguage();
  const heroData = t.about?.hero || {};
  const containerRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  // Abstract composition kinetic nodes
  const nodes = [
    { id: 'n1', label: 'PURPOSE', x: 22, y: 28, delay: 0 },
    { id: 'n2', label: 'STRATEGY', x: 74, y: 24, delay: 0.2 },
    { id: 'n3', label: 'DECISION', x: 48, y: 52, delay: 0.4 },
    { id: 'n4', label: 'SYSTEM', x: 26, y: 76, delay: 0.6 },
    { id: 'n5', label: 'REASONING', x: 80, y: 74, delay: 0.8 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="about-hero-section"
      aria-label="About Magicency Hero"
    >
      {/* Ambient Atmospheric Lighting */}
      <div 
        className="about-hero-ambient-flare" 
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)`
        }}
        aria-hidden="true" 
      />
      
      {/* Precision Grid Coordinates Overlay */}
      <div className="about-hero-grid-matrix" aria-hidden="true">
        <div className="grid-axis-label top-left">LAT // 35.6892° N</div>
        <div className="grid-axis-label top-right">LON // 51.3890° E</div>
        <div className="grid-axis-label bottom-left">IDENTITY // CONVICTION</div>
        <div className="grid-axis-label bottom-right">STATUS // ACTIVE</div>
      </div>

      <div className="container about-hero-container">
        {/* =========================================================
            TOP ROW: EYEBROW & MANIFESTO CODE
            ========================================================= */}
        <div className="about-hero-top-row">
          <motion.div 
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="about-hero-eyebrow-pill"
          >
            <span className="eyebrow-dot" />
            <span className="eyebrow-text">{heroData.eyebrow || 'ABOUT MAGICENCY'}</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-hero-code-tag"
          >
            <span>{heroData.manifestoBadge || 'WHY WE EXIST // CONNECTED REASONING'}</span>
          </motion.div>
        </div>

        {/* =========================================================
            CORE CONTENT: EDITORIAL STATEMENT (30-35% TEXT)
            ========================================================= */}
        <div className="about-hero-text-block">
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="about-hero-headline"
          >
            <span className="headline-line block">{heroData.headlinePart1 || 'We believe growth'}</span>
            <span className="headline-line highlight block">{heroData.headlinePart2 || 'should make sense.'}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="about-hero-subline-wrapper"
          >
            <p className="about-hero-subline-dim">{heroData.subline1 || 'Not more activity.'}</p>
            <p className="about-hero-subline-bold">{heroData.subline2 || 'Better decisions.'}</p>
          </motion.div>
        </div>

        {/* =========================================================
            MAJOR VISUAL MOMENT (65-70% VISUAL)
            Intelligent Abstract System: Typography + Light + Moving Fragments + Connected Nodes
            ========================================================= */}
        <motion.div 
          style={{ y: visualY, opacity: visualOpacity }}
          className="about-hero-cinematic-visual"
          aria-label="Connected Thought & Decision Framework Visual"
        >
          <div className="visual-canvas-frame">
            {/* SVG Dynamic Constellation Vectors */}
            <svg className="visual-vector-canvas" viewBox="0 0 1000 480" preserveAspectRatio="none">
              <defs>
                <linearGradient id="vectorGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF4500" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#FF8C00" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="vectorGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FF4500" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Connected Lines Between Fragment Nodes */}
              <line x1="220" y1="134" x2="480" y2="250" stroke="url(#vectorGrad1)" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="740" y1="115" x2="480" y2="250" stroke="url(#vectorGrad1)" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="480" y1="250" x2="260" y2="365" stroke="url(#vectorGrad2)" strokeWidth="1.2" />
              <line x1="480" y1="250" x2="800" y2="355" stroke="url(#vectorGrad2)" strokeWidth="1.2" />
              <line x1="220" y1="134" x2="740" y2="115" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
              <line x1="260" y1="365" x2="800" y2="355" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

              {/* Harmonic Equilibrium Orbit Ring */}
              <circle 
                cx="480" 
                cy="250" 
                r="110" 
                fill="none" 
                stroke="rgba(255, 69, 0, 0.16)" 
                strokeWidth="1" 
                strokeDasharray="6 8"
                className="orbit-pulse-circle" 
              />
            </svg>

            {/* Kinetic Fragment Nodes */}
            {nodes.map((node, idx) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + node.delay }}
                className={`kinetic-fragment-node node-${idx + 1}`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: `translate(-50%, -50%) translate(${(mousePos.x - 0.5) * (idx % 2 === 0 ? 15 : -15)}px, ${(mousePos.y - 0.5) * (idx % 2 === 0 ? 15 : -15)}px)`
                }}
              >
                <div className="node-halo" />
                <div className="node-center-point" />
                <span className="node-meta-label">{node.label}</span>
              </motion.div>
            ))}

            {/* Central Decision Core */}
            <div className="central-core-anchor">
              <span className="core-eyebrow">REASONING CORE</span>
              <span className="core-title">GROWTH BY DESIGN</span>
              <span className="core-sub">SURVIVES CONTACT WITH REALITY</span>
            </div>
          </div>

          {/* Visual Footer Metas */}
          <div className="visual-bottom-meta-bar">
            <div className="meta-item">
              <span className="meta-key">PHILOSOPHY //</span>
              <span className="meta-val">FIRST PRINCIPLES OVER COMMON PLAYBOOKS</span>
            </div>
            <div className="meta-item">
              <span className="meta-key">MODEL //</span>
              <span className="meta-val">COHESIVE BUSINESS SYSTEM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
