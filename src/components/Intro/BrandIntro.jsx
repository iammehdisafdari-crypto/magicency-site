import React, { useState, useEffect } from 'react';
import './BrandIntro.css';

export default function BrandIntro({ onComplete }) {
  // Never render blocking preloader in SSR / initial HTML so Hero paints immediately
  if (typeof window === 'undefined') return null;

  const [phase, setPhase] = useState('signal');
  const [shouldRender, setShouldRender] = useState(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('intro') === '1') return true;
      return !sessionStorage.getItem('magicency_intro_played');
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (!shouldRender) {
      onComplete?.();
      return;
    }

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setShouldRender(false);
      onComplete?.();
      return;
    }

    // Record session play immediately so subsequent navigations / reloads bypass instantly
    try {
      sessionStorage.setItem('magicency_intro_played', 'true');
    } catch (e) {}

    // Shortened sequence: max 400ms total
    const tTransition = setTimeout(() => {
      setPhase('transition');
      onComplete?.();
    }, 200);

    const tDone = setTimeout(() => {
      handleComplete();
    }, 380);

    return () => {
      clearTimeout(tTransition);
      clearTimeout(tDone);
    };
  }, [shouldRender]);

  const handleComplete = () => {
    try {
      sessionStorage.setItem('magicency_intro_played', 'true');
    } catch (e) {}
    setPhase('done');
    setShouldRender(false);
    onComplete?.();
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`brand-intro-overlay phase-${phase}`}
      onClick={handleComplete}
      role="presentation"
      aria-label="Magicency Cinematic Intro"
    >
      <div className="intro-stage">
        {/* Background Atmospheric Grid & Pulse */}
        <div className="intro-grid-backdrop" />
        <div className="intro-core-glow" />

        {/* Phase 01: Signal Beams */}
        <div className="intro-signal-system">
          <div className="signal-crosshair-h" />
          <div className="signal-crosshair-v" />
          <div className="signal-radar-ring ring-1" />
          <div className="signal-radar-ring ring-2" />
          <div className="signal-radar-ring ring-3" />
        </div>

        {/* Phase 02 & 03: Vector Convergence & Monogram */}
        <div className="intro-identity-wrapper">
          {/* Geometric Vector Crest */}
          <div className="intro-monogram-box">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="intro-svg-logo">
              {/* Outer Alignment Brackets */}
              <path d="M12 28 L12 12 L28 12" className="corner-bracket bracket-tl" />
              <path d="M68 28 L68 12 L52 12" className="corner-bracket bracket-tr" />
              <path d="M12 52 L12 68 L28 68" className="corner-bracket bracket-bl" />
              <path d="M68 52 L68 68 L52 68" className="corner-bracket bracket-br" />

              {/* Central Geometric Falcon/Delta Symbol */}
              <path d="M20 58 L40 18 L60 58 L40 45 L20 58Z" className="delta-shape" />
              <circle cx="40" cy="45" r="4" className="delta-core-dot" />
            </svg>
            <span className="intro-spark-beacon" />
          </div>

          {/* Wordmark & Strategic Subtitle */}
          <div className="intro-typography-block">
            <span className="intro-brand-title">MAGICENCY</span>
            <div className="intro-brand-line">
              <span className="line-segment" />
              <span className="intro-brand-sub">PERFORMANCE & GROWTH ENGINE</span>
              <span className="line-segment" />
            </div>
          </div>
        </div>

        {/* Skip Button */}
        <button 
          type="button" 
          onClick={(e) => { e.stopPropagation(); handleComplete(); }}
          className="intro-skip-btn"
          aria-label="Skip Introduction"
        >
          SKIP INTRO ➔
        </button>
      </div>
    </div>
  );
}
