import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { DURATION, maskedLineVariants, editorialVariants } from '../motion';
import LazyVimeoPlayer from '../Common/LazyVimeoPlayer';
import './Hero.css';

const FluidCursor = React.lazy(() => import('../effects/FluidCursor'));

export default function Hero({ isLoaded = true }) {
  const { t } = useLanguage();
  const [shouldLoadFluid, setShouldLoadFluid] = useState(false);

  useEffect(() => {
    // 1. Accessibility & Mobile/Touch Detection:
    // Do NOT import or mount on mobile, touch, coarse-pointer, or reduced motion devices
    if (typeof window === 'undefined') return;

    const isReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const isTouchOrMobile = (
      window.innerWidth < 992 ||
      'ontouchstart' in window ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
    );

    if (isReducedMotion || isTouchOrMobile) return;

    // 2. Desktop: Defer initialization until after initial Hero render / isLoaded or idle or first pointer movement
    let idleId = null;
    const activate = () => {
      setShouldLoadFluid(true);
      window.removeEventListener('pointermove', activate);
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
    };

    if (isLoaded) {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(activate, { timeout: 2000 });
      } else {
        activate();
      }
    } else {
      window.addEventListener('pointermove', activate, { once: true, passive: true });
    }

    return () => {
      window.removeEventListener('pointermove', activate);
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [isLoaded]);

  const clients = t.hero.clients || [
    'tamir online',
    'atrash store',
    'classino',
    'respina',
    'Itbfx',
    'Maryam Majidinejad',
    'browja',
    'Elysium Toys',
    'Wine Amphorae',
    'codeyad',
    'silvermotor',
    'ordibeheshbook',
    'photoafshin'
  ];

  return (
    <section id="hero" className="vm-hero-section" aria-label="Hero and Showreel Presentation">
      {/* =========================================================
          01. FIRST VIEWPORT (100svh ON DESKTOP & LAPTOP)
          Exact match to the desktop reference screenshot
          Choreographed Masked Reveal
          ========================================================= */}
      <div className="vm-hero-first-viewport">
        {/* 01. Atmospheric Subtle Grid Overlay (Hero Background) */}
        <div className="vm-hero-grid-subtle" aria-hidden="true" />

        {/* Scoped WebGL Fluid Simulation Cursor Effect strictly confined to Hero first viewport */}
        {shouldLoadFluid && (
          <React.Suspense fallback={null}>
            <FluidCursor intensity={0.5} className="vm-hero-fluid-canvas" />
          </React.Suspense>
        )}

        <div className="vm-hero-headline-container">
          <h1 className="vm-hero-giant-title">
            {/* Row 1 Masked Reveal */}
            <span className="title-row row-1 motion-line-mask">
              <motion.span
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                variants={maskedLineVariants}
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={{ delay: 0.08, duration: DURATION.HEADLINE }}
              >
                {t.hero.titleLine1}
                <em className="italic-serif-word">{t.hero.italicWord1}</em>
              </motion.span>
            </span>

            {/* Row 2 Masked Reveal */}
            <span className="title-row row-2 motion-line-mask">
              <motion.span
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                variants={maskedLineVariants}
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={{ delay: 0.15, duration: DURATION.HEADLINE }}
              >
                {t.hero.titleLine2}
                <em className="italic-serif-word">{t.hero.italicWord2}</em>
                {t.hero.titleLine2Suffix}
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Bottom Clients & Partners Marquee */}
        <motion.div
          className="vm-hero-clients-bar"
          aria-label="Clients and Partners"
          variants={editorialVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          custom={{ delay: 0.32, duration: DURATION.BODY, y: 16 }}
        >
          <div className="vm-clients-marquee">
            <div className="vm-clients-track">
              {clients.concat(clients).map((client, index) => (
                <div key={`${client}-${index}`} className="vm-client-item">
                  <span className="vm-client-logo-text">{client}</span>
                </div>
              ))}
            </div>
            <div className="vm-clients-track" aria-hidden="true">
              {clients.concat(clients).map((client, index) => (
                <div key={`${client}-clone-${index}`} className="vm-client-item">
                  <span className="vm-client-logo-text">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          02. FULL-BLEED / EDGE-TO-EDGE VIMEO VIDEO EMBED
          Lazy-loaded facade: Zero JS on initial page load
          ========================================================= */}
      <div className="vm-showreel-fullbleed-wrapper">
        <LazyVimeoPlayer
          videoId="1224224238"
          title="Magicency Showreel"
          posterWebp="/reel-preview.webp"
          posterJpg="/reel-preview.jpg"
        />
      </div>
    </section>
  );
}
