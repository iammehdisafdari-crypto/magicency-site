import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

export default function About() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const data = t.about;
  const principles = data.principles;

  // Single source of truth: scroll progress across 450vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Track active stage index (0 to 4: 0 = Human/Intro, 1 = Think, 2 = Build & Measure, 3 = Compound, 4 = Why Moment)
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      let idx = 0;
      if (v < 0.20) idx = 0;
      else if (v < 0.40) idx = 1;
      else if (v < 0.60) idx = 2;
      else if (v < 0.80) idx = 3;
      else idx = 4;
      setActiveStageIdx(idx);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Click on navigator step
  const handleSelectStep = (idx) => {
    if (!containerRef.current) return;
    const stageScrollTargets = [0.08, 0.28, 0.48, 0.68, 0.88];
    const targetP = stageScrollTargets[idx];
    const top = containerRef.current.offsetTop + targetP * (containerRef.current.offsetHeight - window.innerHeight);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const activePrinciple = principles[Math.min(activeStageIdx > 0 ? activeStageIdx - 1 : 0, 3)];

  return (
    <section 
      ref={containerRef}
      id="about"
      className="about-behind-section"
      aria-label="Section 8: Behind the System"
    >
      {/* Sticky Pinned Viewport */}
      <div className="about-sticky-viewport">
        {/* Ambient Warm Human Flare (Slightly warmer than pure technical blue) */}
        <div className="about-warm-ambient" aria-hidden="true" />
        <div className="about-grid-texture" aria-hidden="true" />

        {/* =========================================================
            1. TOP HEADER & PRINCIPLES NAVIGATOR
            ========================================================= */}
        <div className="about-header-bar">
          <div className="about-eyebrow-pill">
            <span className="pill-dot">✦</span>
            <span>{data.eyebrow}</span>
          </div>

          <div className="about-pipeline-nav">
            {principles.map((pr, idx) => {
              const isPrincipleActive = activeStageIdx === idx + 1;
              const isPassed = activeStageIdx >= idx + 1;
              return (
                <button
                  key={pr.num}
                  type="button"
                  onClick={() => handleSelectStep(idx + 1)}
                  className={`about-nav-node ${isPrincipleActive ? 'is-active' : ''} ${isPassed ? 'is-unlocked' : ''}`}
                >
                  <span className="node-num">{pr.num}</span>
                  <span className="node-code">{pr.code}</span>
                  {idx < 3 && <span className="node-divider">{isRTL ? '←' : '→'}</span>}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleSelectStep(4)}
              className={`about-nav-node why-node ${activeStageIdx === 4 ? 'is-active' : ''}`}
            >
              <span className="node-spark">⚡</span>
              <span className="node-code">{isRTL ? 'چرا مجیکنسـی' : 'WHY MAGICENCY'}</span>
            </button>
          </div>
        </div>

        {/* =========================================================
            2. CINEMATIC HYBRID EDITORIAL CANVAS (>75% VIEWPORT)
            ========================================================= */}
        <div className="about-editorial-canvas">
          {/* LEFT: Authentic Editorial Portrait Anchor */}
          <div className="about-portrait-anchor">
            <div className="portrait-image-frame">
              <img 
                src="/assets/about/portrait.jpg" 
                alt="Magicency Growth Architect & Creative Strategist" 
                className="portrait-img" 
                loading="lazy" 
              />
              <div className="portrait-glass-vignette" />
              <div className="portrait-meta-badge">
                <span className="dot-warm-amber" />
                <span>{data.portraitMeta.badge}</span>
              </div>
              <div className="portrait-role-badge">
                <span>{data.portraitMeta.role}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Layered Thinking & Process Progression */}
          <div className="about-thinking-layer">
            {/* STAGE 00: OPENING HUMAN CONVICTION */}
            {activeStageIdx === 0 && (
              <motion.div 
                key="stage-intro"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="thinking-card intro-card"
              >
                <div className="thinking-top-tag">
                  <span className="dot-warm-amber" />
                  <span>08 / CONVICTION</span>
                </div>
                <h3 className="thinking-title-text">
                  {data.headline}
                </h3>
                <p className="thinking-desc-text">
                  {data.subheadline}
                </p>
                <div className="thinking-manifesto-badge">
                  <span>PRACTITIONERS // NOT SLIDE MAKERS</span>
                </div>
              </motion.div>
            )}

            {/* STAGE 01: 01 THINK DEEPLY */}
            {activeStageIdx === 1 && (
              <motion.div 
                key="stage-think"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="thinking-card principle-card"
              >
                <div className="thinking-top-tag">
                  <span className="code-num">01</span>
                  <span>/</span>
                  <span className="code-name">THINK DEEPLY</span>
                </div>
                <h3 className="principle-title-text">
                  «{principles[0].title}»
                </h3>
                <p className="thinking-desc-text">
                  {principles[0].desc}
                </p>
                <div className="artifact-snippet-preview">
                  <img 
                    src="/assets/about/workspace.jpg" 
                    alt="Magicency Market Research & ICP Behavioral Map" 
                    className="snippet-img" 
                    loading="lazy" 
                  />
                  <div className="snippet-overlay-tag">RESEARCH DOSSIER & UNIT ECONOMICS</div>
                </div>
              </motion.div>
            )}

            {/* STAGE 02: 02 BUILD WITH INTENT & 03 MEASURE WHAT MATTERS */}
            {activeStageIdx === 2 && (
              <motion.div 
                key="stage-build-measure"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="thinking-card dual-principle-card"
              >
                <div className="dual-box">
                  <div className="thinking-top-tag">
                    <span className="code-num">02</span>
                    <span>/</span>
                    <span className="code-name">BUILD WITH INTENT</span>
                  </div>
                  <h4 className="dual-title">«{principles[1].title}»</h4>
                  <p className="dual-desc">{principles[1].desc}</p>
                </div>

                <div className="dual-box">
                  <div className="thinking-top-tag">
                    <span className="code-num">03</span>
                    <span>/</span>
                    <span className="code-name">MEASURE WHAT MATTERS</span>
                  </div>
                  <h4 className="dual-title">«{principles[2].title}»</h4>
                  <p className="dual-desc">{principles[2].desc}</p>
                </div>
              </motion.div>
            )}

            {/* STAGE 03: 04 COMPOUND THE LEARNING */}
            {activeStageIdx === 3 && (
              <motion.div 
                key="stage-compound"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="thinking-card principle-card"
              >
                <div className="thinking-top-tag">
                  <span className="code-num">04</span>
                  <span>/</span>
                  <span className="code-name">COMPOUND THE LEARNING</span>
                </div>
                <h3 className="principle-title-text">
                  «{principles[3].title}»
                </h3>
                <p className="thinking-desc-text">
                  {principles[3].desc}
                </p>
                <div className="artifact-snippet-preview">
                  <img 
                    src="/assets/capabilities/growth_systems.jpg" 
                    alt="Magicency Closed-Loop Growth Feedback Engine" 
                    className="snippet-img" 
                    loading="lazy" 
                  />
                  <div className="snippet-overlay-tag">CLOSED-LOOP EXPERIMENTATION REPOSITORIES</div>
                </div>
              </motion.div>
            )}

            {/* STAGE 04: THE "WHY MAGICENCY?" MOMENT OF CLARITY */}
            {activeStageIdx === 4 && (
              <motion.div 
                key="stage-why"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="thinking-card why-card"
              >
                <div className="why-eyebrow-tag">
                  <span className="dot-warm-amber" />
                  <span>{data.whyMoment.eyebrow}</span>
                </div>

                <h3 className="why-moment-headline">
                  <span className="why-line-1">{data.whyMoment.line1}</span>
                  <span className="why-line-2">{data.whyMoment.line2}</span>
                </h3>

                <p className="why-moment-desc">
                  {data.whyMoment.desc}
                </p>

                <div className="why-brand-signoff">
                  <span>MAGICENCY // GROWTH ARCHITECTURE & STRATEGY</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* =========================================================
            3. MINIMAL BOTTOM NARRATIVE DOCK
            ========================================================= */}
        <div className="about-bottom-dock">
          <div className="dock-statement">
            <span className="dock-status-tag">
              {activeStageIdx === 4 
                ? (isRTL ? 'شفافیت هدف' : 'MOMENT OF CLARITY') 
                : `${activePrinciple.num} / ${activePrinciple.code}`}
            </span>
            <span className="dock-pipe">//</span>
            <span className="dock-caption">
              {activeStageIdx === 4 
                ? data.whyMoment.line2 
                : activePrinciple.title}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
