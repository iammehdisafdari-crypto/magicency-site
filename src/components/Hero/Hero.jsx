import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Play } from 'lucide-react';
import { FluidCursor } from '../effects';
import ShowreelModal from './ShowreelModal';
import { EASING, DURATION, Reveal, ImageReveal, Parallax, RevealStatement, maskedLineVariants, editorialVariants } from '../motion';
import './Hero.css';

export default function Hero({ isLoaded = true }) {
  const { t, isRTL } = useLanguage();
  const [isReelOpen, setIsReelOpen] = useState(false);

  const clients = t.hero.clients || [
    'Meta', 'Mastercard', 'FC Barcelona', 'Dribbble', 'IMMUTA', 'CISCO', 'SKECHERS', 'Triple Whale', 'SOUNDCLOUD', 'AWS', 'STRIPE'
  ];

  return (
    <section id="hero" className="vm-hero-section">
      {/* 01. Atmospheric Subtle Grid Overlay (Hero Background) */}
      <div className="vm-hero-grid-subtle" aria-hidden="true" />

      {/* 02. Scoped WebGL Fluid Simulation Cursor Effect (#B82E0C) */}
      <FluidCursor intensity={0.5} className="vm-hero-fluid-canvas" />

      {/* =========================================================
          01. FIRST VIEWPORT (100svh ON DESKTOP & LAPTOP)
          Exact match to the desktop reference screenshot
          Choreographed Masked Reveal
          ========================================================= */}
      <div className="vm-hero-first-viewport">
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
          02. FULL-BLEED / EDGE-TO-EDGE PLAY REEL SHOWCASE
          Spans 100% viewport width without card borders, padding or margins
          ========================================================= */}
      <div 
        className="vm-showreel-fullbleed-wrapper"
        onClick={() => setIsReelOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Play Magicency Showreel"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsReelOpen(true);
          }
        }}
      >
        <motion.div 
          className="vm-showreel-fullbleed-frame"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: DURATION.IMAGE, ease: EASING.CINEMATIC }}
        >
          <img 
            src="/reel-preview.jpg" 
            alt="Magicency Growth Showreel Preview" 
            className="vm-showreel-img"
            loading="eager"
          />
          <div className="vm-showreel-overlay" />
          
          {/* Interactive Floating "Play reel" Button */}
          <motion.div 
            className="vm-showreel-play-btn btn-motion"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: DURATION.CTA, ease: EASING.SECONDARY }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="vm-play-text">{t.hero.playReel}</span>
            <div className="vm-play-icon-circle">
              <Play size={12} fill="#FFFFFF" className="vm-play-triangle" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          03. STRONG MAGICENCY BRAND STATEMENT DIRECTLY BELOW PLAY REEL
          ========================================================= */}
      <div className="vm-hero-extended-container">
        <div className="vm-hero-statement-section">
          <RevealStatement 
            className="vm-editorial-statement-text"
            delay={0.08}
            duration={0.8}
            stagger={0.06}
          >
            {t.hero.brandStatement || t.hero.editorialStatement}
          </RevealStatement>
        </div>
      </div>

      {/* Cinematic Showreel Lightbox Modal */}
      <ShowreelModal 
        isOpen={isReelOpen} 
        onClose={() => setIsReelOpen(false)} 
      />
    </section>
  );
}
