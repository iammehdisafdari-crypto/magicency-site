import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useDeferredTarget } from '../motion/useDeferredTarget';
import './FinalCTA.css';

export default function FinalCTA() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const containerRef = useRef(null);
  const targetRef = useDeferredTarget(containerRef);
  const data = t.finalCta;

  // Track scroll arrival
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.1, 0.45], [0.94, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.45], [40, 0]);
  const convergenceGlow = useTransform(scrollYProgress, [0.2, 0.8], [0.3, 1]);

  // Subtle interactive pointer position tracking on desktop
  const orbRef = useRef(null);
  const orbAnimIdRef = useRef(null);
  const cachedRect = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    if (!cachedRect.current) {
      cachedRect.current = containerRef.current.getBoundingClientRect();
    }
    const rect = cachedRect.current;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

    if (!orbAnimIdRef.current) {
      orbAnimIdRef.current = requestAnimationFrame(() => {
        if (orbRef.current) {
          orbRef.current.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0)`;
        }
        orbAnimIdRef.current = null;
      });
    }
  };

  const handleMouseLeave = () => {
    cachedRect.current = null;
    if (orbAnimIdRef.current) {
      cancelAnimationFrame(orbAnimIdRef.current);
      orbAnimIdRef.current = null;
    }
    if (orbRef.current) {
      orbRef.current.style.transform = 'translate3d(-50%, -50%, 0)';
    }
  };

  return (
    <section 
      ref={containerRef}
      id="next-move"
      className="final-cta-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Section 9: The Next Move"
    >
      {/* Background Cinematic Convergence Atmosphere */}
      <div className="cta-ambient-converge" aria-hidden="true" />
      <div 
        ref={orbRef}
        className="cta-focal-orb" 
        style={{
          willChange: 'transform'
        }}
        aria-hidden="true" 
      />

      {/* Subtle Spatial Convergence Grid */}
      <svg className="cta-convergence-svg" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
        <motion.circle 
          cx="600" 
          cy="400" 
          r="160" 
          stroke="#FF5500" 
          strokeWidth="1" 
          strokeDasharray="4 8"
          style={{ opacity: convergenceGlow }}
        />
        <motion.circle 
          cx="600" 
          cy="400" 
          r="280" 
          stroke="#FF5500" 
          strokeWidth="1" 
          strokeDasharray="2 12"
          style={{ opacity: convergenceGlow }}
        />
        <motion.line 
          x1="200" y1="200" x2="520" y2="360" 
          stroke="#FF5500" 
          strokeWidth="1.5" 
          strokeDasharray="6 6"
          style={{ opacity: convergenceGlow }}
        />
        <motion.line 
          x1="1000" y1="200" x2="680" y2="360" 
          stroke="#FF5500" 
          strokeWidth="1.5" 
          strokeDasharray="6 6"
          style={{ opacity: convergenceGlow }}
        />
        <motion.line 
          x1="300" y1="650" x2="520" y2="440" 
          stroke="#00F59B" 
          strokeWidth="1.5" 
          strokeDasharray="6 6"
          style={{ opacity: convergenceGlow }}
        />
        <motion.line 
          x1="900" y1="650" x2="680" y2="440" 
          stroke="#00F59B" 
          strokeWidth="1.5" 
          strokeDasharray="6 6"
          style={{ opacity: convergenceGlow }}
        />
      </svg>

      {/* Main Content Stage */}
      <motion.div 
        className="final-cta-container container"
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          y: contentY
        }}
      >
        {/* Eyebrow Label */}
        <div className="cta-eyebrow-pill">
          <span className="pill-dot">⚡</span>
          <span>{data.eyebrow}</span>
        </div>

        {/* Main Provocative Headline */}
        <h2 className="cta-main-headline">
          {data.headline}
        </h2>

        <p className="cta-subheadline">
          {data.subheadline}
        </p>

        {/* Single Dominant CTA Action */}
        <div className="cta-focal-action">
          <button 
            type="button" 
            onClick={() => setIsModalOpen(true)}
            className="cta-primary-btn"
            aria-label={data.btn}
          >
            <span className="btn-text">{data.btn}</span>
            <span className="btn-arrow">{isRTL ? '←' : '→'}</span>
            <div className="btn-shimmer" aria-hidden="true" />
          </button>
        </div>

        {/* Final Memorable Brand Statement */}
        <div className="cta-final-statement">
          <span className="statement-line statement-dim">{data.finalStatement1}</span>
          <span className="statement-line statement-highlight">{data.finalStatement2}</span>
        </div>

        {/* Terminal Signoff Tag */}
        <div className="cta-terminal-signoff">
          <span className="signoff-dot" />
          <span>{data.signoff}</span>
        </div>
      </motion.div>
    </section>
  );
}
