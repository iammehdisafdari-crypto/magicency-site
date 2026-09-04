import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Play } from 'lucide-react';
import LiquidFireCanvas from './LiquidFireCanvas';
import ShowreelModal from './ShowreelModal';
import { EASING, DURATION, Reveal, ImageReveal, Parallax, maskedLineVariants, editorialVariants } from '../motion';
import './Hero.css';

export default function Hero({ isLoaded = true }) {
  const { t, isRTL } = useLanguage();
  const [isReelOpen, setIsReelOpen] = useState(false);

  const clients = t.hero.clients || [
    'Meta', 'Mastercard', 'FC Barcelona', 'Dribbble', 'IMMUTA', 'CISCO', 'SKECHERS', 'Triple Whale', 'SOUNDCLOUD', 'AWS', 'STRIPE'
  ];

  return (
    <section id="hero" className="vm-hero-section">
      {/* Interactive Liquid Fire Canvas following the mouse */}
      <LiquidFireCanvas />

      {/* Atmospheric Subtle Grid Overlay */}
      <div className="vm-hero-grid-subtle" aria-hidden="true" />

      {/* =========================================================
          01. FIRST VIEWPORT (100svh ON DESKTOP & LAPTOP)
          Exact match to the desktop reference screenshot
          Choreographed Masked Reveal
          ========================================================= */}
      <div className="vm-hero-first-viewport">
        <div className="vm-hero-headline-container">
          <h1 className="vm-hero-giant-title">
            {/* Row 1 Masked Reveal */}
            <span className="title-row row-1 motion-text-mask" style={{ overflow: 'hidden', display: 'block' }}>
              <motion.span
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                variants={maskedLineVariants}
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={{ delay: 0.0, duration: DURATION.HERO_HEADLINE }}
              >
                {t.hero.titleLine1}
                <em className="italic-serif-word">{t.hero.italicWord1}</em>
              </motion.span>
            </span>

            {/* Row 2 Masked Reveal */}
            <span className="title-row row-2 motion-text-mask" style={{ overflow: 'hidden', display: 'block' }}>
              <motion.span
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                variants={maskedLineVariants}
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={{ delay: 0.12, duration: DURATION.HERO_HEADLINE }}
              >
                {t.hero.titleLine2}
                <em className="italic-serif-word">{t.hero.italicWord2}</em>
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
          custom={{ delay: 0.28, duration: 0.7 }}
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
          02. BELOW-THE-FOLD SHOWREEL CARD & EDITORIAL STATEMENT
          ========================================================= */}
      <div className="vm-hero-extended-container">
        {/* Cinematic Showreel Card with Interactive "Play reel" Option */}
        <div 
          className="vm-showreel-card-wrapper"
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
          <div className="vm-showreel-card">
            <img 
              src="/reel-preview.jpg" 
              alt="Magicency Growth Showreel Preview" 
              className="vm-showreel-img"
              loading="eager"
            />
            <div className="vm-showreel-overlay" />
            
            {/* Interactive Floating "Play reel" Button */}
            <motion.div 
              className="vm-showreel-play-btn"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2, ease: EASING.SECONDARY }}
            >
              <span className="vm-play-text">{t.hero.playReel}</span>
              <div className="vm-play-icon-circle">
                <Play size={12} fill="#FFFFFF" className="vm-play-triangle" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Large Editorial Typographic Statement */}
        <div className="vm-hero-statement-section">
          <p className="vm-editorial-statement-text">
            {t.hero.editorialStatement}
          </p>
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
