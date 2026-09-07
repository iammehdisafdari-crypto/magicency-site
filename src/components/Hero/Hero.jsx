import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { DURATION, maskedLineVariants, editorialVariants } from '../motion';
import './Hero.css';

const FluidCursor = React.lazy(() => import('../effects/FluidCursor'));

export default function Hero({ isLoaded = true }) {
  const { t } = useLanguage();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const reelRef = useRef(null);

  useEffect(() => {
    if (!reelRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(reelRef.current);
    return () => observer.disconnect();
  }, []);

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
    <section id="hero" className="vm-hero-section">
      {/* =========================================================
          01. FIRST VIEWPORT (100svh ON DESKTOP & LAPTOP)
          Exact match to the desktop reference screenshot
          Choreographed Masked Reveal
          ========================================================= */}
      <div className="vm-hero-first-viewport">
        {/* 01. Atmospheric Subtle Grid Overlay (Hero Background) */}
        <div className="vm-hero-grid-subtle" aria-hidden="true" />

        {/* Scoped WebGL Fluid Simulation Cursor Effect strictly confined to Hero first viewport */}
        <React.Suspense fallback={null}>
          <FluidCursor intensity={0.5} className="vm-hero-fluid-canvas" />
        </React.Suspense>

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
          100% full-width of the viewport, responsive 16:9 aspect ratio
          Clean cinematic presentation: title, byline, portrait and badge hidden
          ========================================================= */}
      <div ref={reelRef} className="vm-showreel-fullbleed-wrapper">
        <div className="vm-showreel-vimeo-container">
          {shouldLoadVideo ? (
            <iframe
              src="https://player.vimeo.com/video/1224224238?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1&playsinline=1"
              className="vm-showreel-vimeo-iframe"
              title="Magicency Showreel"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            />
          ) : (
            <picture>
              <source srcSet="/reel-preview.webp" type="image/webp" />
              <img
                src="/reel-preview.jpg"
                alt="Magicency Showreel Preview"
                className="vm-showreel-vimeo-iframe"
                style={{ objectFit: 'cover', opacity: 0.85 }}
                loading="lazy"
                decoding="async"
              />
            </picture>
          )}
        </div>
      </div>
    </section>
  );
}
