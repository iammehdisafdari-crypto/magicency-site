import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function PrincipleQuote() {
  const { t } = useLanguage();
  const principle = t.approach?.principle || {};

  return (
    <section className="approach-section manifesto-fullbleed-section" id="the-principle">
      {/* Full-Bleed Cinematic Backdrop */}
      <div className="manifesto-media-backdrop">
        <img
          src="/reel-preview.webp"
          alt="Magicency Growth Manifesto"
          className="manifesto-bg-img"
          loading="lazy"
        />
        <div className="manifesto-media-scrim" />
        <div className="manifesto-grid-mask" aria-hidden="true" />
      </div>

      <div className="container manifesto-container">
        <motion.div
          className="manifesto-content-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{principle.eyebrow}</span>
          </div>

          {/* Monumental Manifesto Statement */}
          <blockquote className="manifesto-monumental-quote">
            {principle.quote}
          </blockquote>

          {/* Minimal Supporting Note */}
          <p className="manifesto-conviction-note">
            {principle.subtext}
          </p>

          <div className="manifesto-datum-line" aria-hidden="true">
            <span className="datum-dot" />
            <span className="datum-label">MAGICENCY CORE CREED</span>
            <span className="datum-dot" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
