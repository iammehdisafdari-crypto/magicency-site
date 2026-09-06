import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import ScrambleText from '../Header/ScrambleText';
import { FluidCursor } from '../effects';
import { Reveal, Stagger, maskedLineVariants, editorialVariants, buttonMotion } from '../motion';
import './Footer.css';

// Signature Arrow Icon from Vivid Motion Button Reference
const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1.57605 8.632V7.384H9.56005C9.91205 7.384 10.2214 7.40534 10.4881 7.448C10.7547 7.49067 11.0481 7.55467 11.3681 7.64001C11.9014 7.77867 12.3707 7.84801 12.7761 7.84801V7.8C12.0721 7.54401 11.4907 7.26667 11.0321 6.968C10.5734 6.66934 10.2107 6.376 9.94405 6.088C9.67738 5.78934 9.38938 5.416 9.08005 4.968L10.392 3.88C10.936 4.91467 11.496 5.69334 12.0721 6.216C12.6481 6.73867 13.4321 7.20267 14.4241 7.608V8.408C13.4427 8.81334 12.6587 9.27734 12.0721 9.8C11.496 10.3227 10.936 11.096 10.392 12.12L9.08005 11.048C9.38938 10.6 9.67738 10.232 9.94405 9.94401C10.2107 9.64534 10.5734 9.34667 11.0321 9.048C11.4907 8.74934 12.0721 8.47201 12.7761 8.21601V8.168C12.3814 8.168 11.9067 8.23734 11.352 8.37601C11.0321 8.46134 10.7387 8.52534 10.472 8.568C10.2054 8.61067 9.90138 8.632 9.56005 8.632H1.57605Z" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const { navigate, isWorkPage } = useRouter();
  const f = t.footer || {
    ctaLine1: 'Have a growth problem worth solving?',
    ctaLine2: "Let's build what moves it forward.",
    startProject: 'Start a Project',
    locations: [
      { city: 'Manager', email: 'itsmehdisafdari@gmail.com' }
    ],
    socials: [
      { name: 'X', url: 'https://x.com' },
      { name: 'Instagram', url: 'https://instagram.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com' },
      { name: 'Dribbble', url: 'https://dribbble.com' },
      { name: 'Behance', url: 'https://behance.net' }
    ],
    nav: [
      { label: 'WORK', href: '#work' },
      { label: 'CAPABILITIES', href: '#capabilities' },
      { label: 'Blog', href: '#journal' },
      { label: 'ABOUT', href: '#about' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Use', href: '#terms' }
    ],
    copyright: '© 2026 MAGICENCY®'
  };

  const footerRef = useRef(null);
  const wordmarkRef = useRef(null);
  const wordmarkAnimIdRef = useRef(null);
  const cachedWordmarkRect = useRef(null);

  const handleWordmarkMouseMove = (e) => {
    if (!cachedWordmarkRect.current) {
      cachedWordmarkRect.current = e.currentTarget.getBoundingClientRect();
    }
    const rect = cachedWordmarkRect.current;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    if (!wordmarkAnimIdRef.current) {
      wordmarkAnimIdRef.current = requestAnimationFrame(() => {
        if (wordmarkRef.current) {
          wordmarkRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        wordmarkAnimIdRef.current = null;
      });
    }
  };

  const handleWordmarkMouseLeave = () => {
    cachedWordmarkRect.current = null;
    if (wordmarkAnimIdRef.current) {
      cancelAnimationFrame(wordmarkAnimIdRef.current);
      wordmarkAnimIdRef.current = null;
    }
    if (wordmarkRef.current) {
      wordmarkRef.current.style.transform = 'translate3d(0px, 0px, 0)';
    }
  };

  return (
    <footer ref={footerRef} className="footer vm-footer-root" aria-label="Magicency Experience Footer">
      {/* Reusable WebGL Fluid Cursor Layer (#B82E0C Monochromatic) */}
      <FluidCursor intensity={0.8} className="footer-fluid-bg" />
      <div className="liquid-ether-fade bottom" aria-hidden="true" />

      <div className="container vm-footer-inner-container">
        
        {/* =========================================================
            01. MAIN CTA (EXACT VIVID MOTION: footer-contact)
            Masked Editorial Reveal
            ========================================================= */}
        <div className="footer-contact">
          <h3 className="footer-contact-heading">
            <span className="motion-line-mask" style={{ overflow: 'hidden', display: 'block' }}>
              <motion.span
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                variants={maskedLineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={{ delay: 0.0, duration: 0.8 }}
                className="footer-contact-heading-ghost"
              >
                {f.ctaLine1 || 'Have a growth problem worth solving?'}
              </motion.span>
            </span>
            <span className="motion-line-mask" style={{ overflow: 'hidden', display: 'block' }}>
              <motion.span
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                variants={maskedLineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={{ delay: 0.08, duration: 0.8 }}
                className="text-foreground"
              >
                {f.ctaLine2 || "Let's build what moves it forward."}
              </motion.span>
            </span>
          </h3>

          <motion.button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn is-lg is-brand footer-cta-btn btn-motion"
            aria-label={f.startProject}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="btn-text-wrapper">
              <span className="btn-label-text">{f.startProject}</span>
            </div>
            <div className="icon">
              <div className="icon-svg btn-icon-arrow">
                <ArrowIcon />
              </div>
            </div>
          </motion.button>
        </div>

        {/* =========================================================
            02. DIRECT CONTACT / LOCATIONS (footer-emails grid)
            ========================================================= */}
        <div className="footer-emails grid">
          <Stagger stagger={0.08} delay={0.1} className="footer-emails-block">
            {f.locations.map((loc, idx) => (
              <motion.div key={idx} variants={editorialVariants} className="footer-emails-block-group">
                <div className="footer-location-name">{loc.city}</div>
                <a href={`mailto:${loc.email}`} className="footer-email-link">
                  {loc.email}
                </a>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* =========================================================
            03. USEFUL NAVIGATION & SOCIALS (footer-useful grid)
            ========================================================= */}
        <div className="footer-useful grid">
          {/* Social Links with Scramble Effect */}
          <Stagger stagger={0.05} className="footer-useful-social">
            {f.socials.map((soc, idx) => (
              <motion.a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={editorialVariants}
                className="footer-useful-social-link"
              >
                <ScrambleText text={soc.name} />
              </motion.a>
            ))}
          </Stagger>

          {/* Primary Navigation Links with Scramble Effect */}
          <Stagger stagger={0.05} delay={0.05} className="footer-useful-legal">
            {f.nav.map((item, idx) => (
              <motion.a
                key={idx}
                href={
                  item.href === '#work' ? '/work' :
                  item.href === '#capabilities' ? '/capabilities' :
                  item.href === '#approach' ? '/approach' :
                  item.href === '#about' ? '/about' :
                  item.href === '#journal' || item.label.toLowerCase() === 'blog' ? '/blog' : item.href
                }
                onClick={(e) => {
                  if (item.href === '#work') {
                    e.preventDefault();
                    navigate('/work');
                    return;
                  }
                  if (item.href === '#capabilities') {
                    e.preventDefault();
                    navigate('/capabilities');
                    return;
                  }
                  if (item.href === '#approach') {
                    e.preventDefault();
                    navigate('/approach');
                    return;
                  }
                  if (item.href === '#about') {
                    e.preventDefault();
                    navigate('/about');
                    return;
                  }
                  if (item.href === '#journal' || item.label.toLowerCase() === 'blog') {
                    e.preventDefault();
                    navigate('/blog');
                    return;
                  }
                  e.preventDefault();
                  navigate('/');
                  setTimeout(() => {
                    const elem = document.querySelector(item.href);
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }, 60);
                }}
                variants={editorialVariants}
                className="footer-useful-social-link footer-nav-item"
              >
                <ScrambleText text={item.label} />
              </motion.a>
            ))}
          </Stagger>

          {/* Copyright Information */}
          <Reveal delay={0.15} className="footer-useful-copyright">
            <div className="footer-useful-copyright-text">
              {f.copyright}
            </div>
          </Reveal>
        </div>

      </div>

      {/* =========================================================
          04. MONUMENTAL WORDMARK (EXACT VIVID MOTION: footer-end)
          Full-width, unconstrained by inner container max-width
          ========================================================= */}
      <div
        className="footer-end"
        onMouseMove={handleWordmarkMouseMove}
        onMouseLeave={handleWordmarkMouseLeave}
      >
        <Reveal delay={0.1} duration={0.9} className="footer-end-reveal">
          <div
            ref={wordmarkRef}
            className="footer-logo-wordmark"
            style={{
              willChange: 'transform'
            }}
          >
            MAGICENCY
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
