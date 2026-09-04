import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import CapabilityVisual from './CapabilityVisual';
import './Capabilities.css';

export default function CapabilitiesSection() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const capData = t.capabilities;
  const cards = capData.cards;

  // Track scroll progress across 620vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001
  });

  // Track active capability index (0 to 5)
  const [activeCapIndex, setActiveCapIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.22) {
        setActiveCapIndex(0); // Card 01
      } else if (latest < 0.36) {
        setActiveCapIndex(1); // Card 02
      } else if (latest < 0.50) {
        setActiveCapIndex(2); // Card 03
      } else if (latest < 0.64) {
        setActiveCapIndex(3); // Card 04
      } else if (latest < 0.78) {
        setActiveCapIndex(4); // Card 05
      } else {
        setActiveCapIndex(5); // Card 06
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // =========================================================
  // SCROLL-DRIVEN CARD TRANSFORMS (PHYSICAL STACKING)
  // =========================================================

  // Intro Header Dissolves smoothly as cards begin stacking (0.00 -> 0.16)
  const introOpacity = useTransform(smoothProgress, [0.0, 0.04, 0.10, 0.16], [1, 1, 0.2, 0]);
  const introY = useTransform(smoothProgress, [0.0, 0.16], [0, -50]);
  const introScale = useTransform(smoothProgress, [0.0, 0.16], [1, 0.95]);

  // Card 01: Strategy (Enters cleanly below header)
  const card1Y = useTransform(smoothProgress, [0.0, 0.12], ["60px", "0px"]);
  const card1Scale = useTransform(smoothProgress, [0.14, 0.28, 0.42, 0.56, 0.70, 0.84], [1, 0.985, 0.97, 0.955, 0.94, 0.925]);
  const card1Opacity = useTransform(smoothProgress, [0.0, 0.08], [0, 1]);

  // Card 02: Creative (Enters at 0.18 -> locks at 0.28)
  const card2Y = useTransform(smoothProgress, [0.18, 0.28], ["110vh", "0px"]);
  const card2Scale = useTransform(smoothProgress, [0.28, 0.42, 0.56, 0.70, 0.84], [1, 0.985, 0.97, 0.955, 0.94]);
  const card2Opacity = useTransform(smoothProgress, [0.18, 0.23], [0, 1]);

  // Card 03: Performance (Enters at 0.32 -> locks at 0.42)
  const card3Y = useTransform(smoothProgress, [0.32, 0.42], ["110vh", "0px"]);
  const card3Scale = useTransform(smoothProgress, [0.42, 0.56, 0.70, 0.84], [1, 0.985, 0.97, 0.955]);
  const card3Opacity = useTransform(smoothProgress, [0.32, 0.37], [0, 1]);

  // Card 04: CRO & Experimentation (Enters at 0.46 -> locks at 0.56)
  const card4Y = useTransform(smoothProgress, [0.46, 0.56], ["110vh", "0px"]);
  const card4Scale = useTransform(smoothProgress, [0.56, 0.70, 0.84], [1, 0.985, 0.97]);
  const card4Opacity = useTransform(smoothProgress, [0.46, 0.51], [0, 1]);

  // Card 05: Data & Analytics (Enters at 0.60 -> locks at 0.70)
  const card5Y = useTransform(smoothProgress, [0.60, 0.70], ["110vh", "0px"]);
  const card5Scale = useTransform(smoothProgress, [0.70, 0.84], [1, 0.985]);
  const card5Opacity = useTransform(smoothProgress, [0.60, 0.65], [0, 1]);

  // Card 06: Growth Systems (Enters at 0.74 -> locks at 0.84)
  const card6Y = useTransform(smoothProgress, [0.74, 0.84], ["110vh", "0px"]);
  const card6Scale = useTransform(smoothProgress, [0.84, 0.98], [1, 1]);
  const card6Opacity = useTransform(smoothProgress, [0.74, 0.79], [0, 1]);

  // Card transforms mapping array with mobile-safe offsets
  const cardTransforms = [
    { y: card1Y, scale: card1Scale, opacity: card1Opacity, zIndex: 10, topOffset: 0 },
    { y: card2Y, scale: card2Scale, opacity: card2Opacity, zIndex: 20, topOffset: isMobile ? 4 : 16 },
    { y: card3Y, scale: card3Scale, opacity: card3Opacity, zIndex: 30, topOffset: isMobile ? 8 : 32 },
    { y: card4Y, scale: card4Scale, opacity: card4Opacity, zIndex: 40, topOffset: isMobile ? 12 : 48 },
    { y: card5Y, scale: card5Scale, opacity: card5Opacity, zIndex: 50, topOffset: isMobile ? 16 : 64 },
    { y: card6Y, scale: card6Scale, opacity: card6Opacity, zIndex: 60, topOffset: isMobile ? 20 : 80 }
  ];

  return (
    <section 
      ref={containerRef}
      id="capabilities"
      className="capabilities-stack-section"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="capabilities-sticky-viewport">
        {/* Background Atmospheric Layers */}
        <div className="cap-ambient-void" />
        <div className="cap-noise-layer" />

        {/* Minimal Side Editorial Progress Index */}
        <div className="capabilities-side-index" aria-hidden="true">
          <div className="side-index-line" />
          {cards.map((c, i) => (
            <div 
              key={`side-${c.num}`} 
              className={`side-index-item ${activeCapIndex === i ? 'is-active' : ''}`}
            >
              <span className="side-index-num">{c.num}</span>
              <span className="side-index-dot" />
            </div>
          ))}
        </div>

        {/* =========================================================
            1. INTRO / ENTRY HEADER (DISSOLVES AS CARDS STACK)
            ========================================================= */}
        <motion.div 
          className="capabilities-intro-header"
          style={{ opacity: introOpacity, y: introY, scale: introScale }}
        >
          <div className="cap-eyebrow-pill">
            <span className="pill-dot">✦</span>
            <span>{capData.eyebrow}</span>
          </div>
          <h2 className="cap-headline-text">
            {capData.headline.split('\n').map((line, idx) => (
              <span key={idx} className="cap-headline-line">{line}</span>
            ))}
          </h2>
          <p className="cap-supporting-desc">
            {capData.supporting}
          </p>
        </motion.div>

        {/* =========================================================
            2. SCROLL STACKING CAPABILITY CARDS DECK
            ========================================================= */}
        <div className="capabilities-cards-stack-deck">
          {cards.map((card, idx) => {
            const transform = cardTransforms[idx];
            const isCurrent = activeCapIndex === idx;

            return (
              <motion.div
                key={card.num}
                className={`capability-poster-card card-${card.num} ${isCurrent ? 'active-dominant' : ''}`}
                style={{
                  y: transform.y,
                  scale: transform.scale,
                  opacity: transform.opacity,
                  zIndex: transform.zIndex,
                  top: `${transform.topOffset}px`
                }}
              >
                {/* Card Top Information Bar */}
                <div className="card-top-bar">
                  <div className="card-num-track">
                    <span className="num-active">{card.num}</span>
                    <span className="num-slash">/</span>
                    <span className="num-total">{card.total}</span>
                  </div>
                  <div className="card-badge-pill">
                    <span>{card.badge}</span>
                  </div>
                </div>

                {/* Card Main Body Grid */}
                <div className="card-body-grid">
                  {/* Left Editorial Text Column */}
                  <div className="card-text-column">
                    <span className="card-capability-title">{card.name}</span>
                    <h3 className="card-statement-lead">
                      «{card.statement}»
                    </h3>
                    <p className="card-description-p">
                      {card.desc}
                    </p>

                    {/* Bottom Capability Tags */}
                    <div className="card-tags-cloud">
                      {card.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="capability-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Editorial Hero Image Column */}
                  <div className="card-visual-column">
                    <CapabilityVisual type={card.visualType} isDominant={isCurrent} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
