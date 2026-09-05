import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import ScrambleText from './ScrambleText';
import { EASING, DURATION } from '../motion';
import './Header.css';

// 4-Dot Grid Icon matching Mobile Reference Image 2: "HOME ::"
const GridDotsIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true" className="vm-home-dots-icon">
    <rect x="1" y="1" width="3.5" height="3.5" rx="1" />
    <rect x="7.5" y="1" width="3.5" height="3.5" rx="1" />
    <rect x="1" y="7.5" width="3.5" height="3.5" rx="1" />
    <rect x="7.5" y="7.5" width="3.5" height="3.5" rx="1" />
  </svg>
);

// Asterisk Icon matching Desktop Reference Image 1: "✱ START A PROJECT"
const AsteriskIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="vm-btn-asterisk-icon">
    <path d="M7.984 15.02c-.468 0-.883-.16-1.244-.479-.362-.34-.543-.787-.543-1.34 0-.362.043-.67.128-.926.106-.276.276-.659.51-1.148.234-.447.415-.851.543-1.213.149-.383.255-.819.319-1.308-.447.298-.798.596-1.053.894-.234.298-.5.67-.798 1.117-.234.362-.457.66-.67.894-.191.234-.447.447-.766.638-.319.191-.628.287-.926.287-.319 0-.617-.085-.894-.255-.276-.17-.5-.394-.67-.67-.17-.276-.255-.574-.255-.894 0-.319.074-.617.223-.894.17-.276.415-.5.734-.67.276-.17.564-.276.862-.319.319-.064.723-.106 1.213-.128.617-.043 1.106-.096 1.468-.16.383-.064.787-.202 1.213-.415-.468-.213-.915-.351-1.34-.415-.404-.085-.851-.138-1.34-.16-.511-.043-.904-.085-1.181-.128-.276-.064-.574-.181-.894-.351-.319-.191-.564-.425-.734-.702-.149-.276-.223-.564-.223-.862 0-.34.085-.649.255-.926.17-.255.394-.468.67-.638.276-.17.574-.255.894-.255.276 0 .585.085.926.255.298.191.543.415.734.67.213.234.436.543.67.926.34.511.628.915.862 1.213.255.276.596.564 1.021.862-.043-.532-.138-.99-.287-1.372-.149-.404-.34-.83-.574-1.277-.213-.447-.372-.809-.479-1.085-.106-.276-.16-.596-.16-.957 0-.553.181-1 .543-1.34.362-.34.777-.51 1.245-.51.468 0 .883.17 1.245.51.383.34.574.787.574 1.34 0 .362-.053.702-.16 1.021-.106.298-.266.638-.479 1.021-.234.468-.425.894-.574 1.277-.128.383-.213.84-.255 1.372.425-.298.766-.606 1.021-.926.255-.319.521-.713.798-1.181.064-.085.17-.245.319-.479.17-.255.34-.468.511-.638.17-.17.362-.319.574-.447.383-.17.702-.255.957-.255.319 0 .617.085.894.255.276.17.5.383.67.638.17.34.255.649.255.926 0 .298-.085.585-.255.862-.149.276-.383.51-.702.702-.34.191-.681.319-1.021.383-.34.064-.745.106-1.213.128-.489.021-.926.074-1.309.16-.383.064-.787.191-1.213.383.425.191.809.319 1.149.383.362.064.84.117 1.436.16.468.021.872.064 1.213.128.34.064.659.181.957.351.319.17.553.394.702.67.17.276.255.574.255.894 0 .255-.085.553-.255.894-.17.276-.394.5-.67.67-.276.17-.574.255-.894.255-.276 0-.596-.096-.957-.287-.298-.17-.553-.372-.766-.606-.191-.234-.404-.543-.638-.926-.298-.447-.574-.819-.83-.1.117-.234.298-.564.596-.99.894.085.83.362 1.681.83 2.553.213.383.372.734.479 1.053.106.298.16.628.16.99 0 .553-.191 1-.574 1.34-.362.34-.777.51-1.245.51z" />
  </svg>
);

export default function Header() {
  const { t, lang, toggleLanguage, setIsModalOpen, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll during menu open without layout jump
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const elem = document.querySelector(targetId);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { id: 'work', label: t.nav.work, href: '#work', number: '01' },
    { id: 'capabilities', label: t.nav.capabilities, href: '#capabilities', number: '02' },
    { id: 'approach', label: t.nav.approach, href: '#approach', number: '03' },
    { id: 'about', label: t.nav.about, href: '#about', number: '04' },
    { id: 'journal', label: t.journal?.badge || 'JOURNAL', href: '#journal', number: '05' }
  ];

  return (
    <>
      <header className={`vm-header ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-menu-active' : ''}`}>
        <div className="vm-header-inner">
          
          {/* =========================================================
              LEFT: BRAND WORDMARK (MAGICENCY®)
              ========================================================= */}
          <motion.a 
            href="#hero" 
            className="vm-brand" 
            aria-label="Magicency Home"
            onClick={(e) => {
              if (isMenuOpen) setIsMenuOpen(false);
            }}
            whileHover={{ opacity: 0.88 }}
            transition={{ duration: 0.2, ease: EASING.SECONDARY }}
          >
            <span className="vm-brand-text">MAGICENCY</span>
            <span className="vm-brand-registered">®</span>
          </motion.a>

          {/* =========================================================
              RIGHT: DESKTOP NAVIGATION (MATCHING DESKTOP REFERENCE IMAGE 1)
              Work • Capabilities • Approach • About • Journal • Language • CTA
              ========================================================= */}
          <div className="vm-header-desktop-right">
            <nav className="vm-desktop-nav" aria-label="Primary Navigation">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={item.href} 
                  className="vm-desktop-nav-link" 
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <ScrambleText text={item.label.toUpperCase()} />
                </a>
              ))}
            </nav>

            {/* Desktop Language Switcher */}
            <motion.button 
              type="button"
              onClick={toggleLanguage} 
              className="vm-desktop-lang-pill"
              aria-label={lang === 'en' ? 'Switch to Persian' : 'Switch to English'}
              title={lang === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18, ease: EASING.SECONDARY }}
            >
              <span className="vm-desktop-lang-code">{lang === 'en' ? 'FA' : 'EN'}</span>
            </motion.button>

            {/* Desktop Primary Pill Button (* START A PROJECT) */}
            <motion.button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="vm-start-project-pill-btn"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.22, ease: EASING.SECONDARY }}
            >
              <span className="vm-pill-asterisk">
                <AsteriskIcon />
              </span>
              <span className="vm-pill-label">
                {(t.nav.startProject || 'START A PROJECT').toUpperCase()}
              </span>
            </motion.button>
          </div>

          {/* =========================================================
              RIGHT: MOBILE CONTROLS (MATCHING MOBILE REFERENCE IMAGE 2)
              [ FA / EN ]  [ HOME :: ]
              ========================================================= */}
          <div className="vm-header-mobile-right">
            {/* Mobile Language Selector (Positioned next to Home icon) */}
            <motion.button 
              type="button"
              onClick={toggleLanguage} 
              className="vm-mobile-lang-btn"
              aria-label={lang === 'en' ? 'Switch to Persian' : 'Switch to English'}
              title={lang === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18, ease: EASING.SECONDARY }}
            >
              <span className="vm-mobile-lang-text">{lang === 'en' ? 'FA' : 'EN'}</span>
            </motion.button>

            {/* Mobile Home / Menu Trigger Button [ HOME :: ] */}
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`vm-mobile-home-btn ${isMenuOpen ? 'is-open' : ''}`}
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASING.SECONDARY }}
            >
              <span className="vm-home-btn-label">
                {isMenuOpen ? (lang === 'fa' ? 'بستن' : 'CLOSE') : (lang === 'fa' ? 'خانه' : 'HOME')}
              </span>
              <span className="vm-home-btn-icon-box">
                {isMenuOpen ? <X size={14} /> : <GridDotsIcon />}
              </span>
            </motion.button>
          </div>

        </div>
      </header>

      {/* =========================================================
          SPATIAL NAVIGATION MENU OVERLAY (INSPIRED BY VIVID MOTION)
          Choreographed fullscreen masked reveal with editorial typography
          ========================================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            ref={menuRef}
            className="vm-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.48, ease: EASING.PRIMARY }}
          >
            {/* Atmospheric Background Grid strictly inside overlay */}
            <div className="vm-menu-grid-backdrop" aria-hidden="true" />
            <div className="vm-menu-radial-glow" aria-hidden="true" />

            {/* Inner Content Container */}
            <div className="vm-menu-content-container">


              {/* Main Menu Grid: Large Links on Left, Studio Details on Right */}
              <div className="vm-menu-body-grid">
                
                {/* Monumental Editorial Navigation Column */}
                <nav className="vm-menu-nav-list" aria-label="Menu Items">
                  {navItems.map((item, idx) => (
                    <div key={item.id} className="vm-menu-nav-item-mask">
                      <motion.a
                        href={item.href}
                        className="vm-menu-nav-link"
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ y: '110%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        exit={{ y: '-70%', opacity: 0 }}
                        transition={{ 
                          duration: 0.45, 
                          delay: 0.1 + idx * 0.05, 
                          ease: EASING.MOMENTUM 
                        }}
                      >
                        <span className="vm-menu-item-num">{item.number}</span>
                        <span className="vm-menu-item-text">{item.label}</span>
                        <span className="vm-menu-item-arrow">
                          {isRTL ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
                        </span>
                      </motion.a>
                    </div>
                  ))}
                </nav>

                {/* Secondary Column: Direct Contact & Action */}
                <motion.div 
                  className="vm-menu-sidebar"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.38, delay: 0.36, ease: EASING.PRIMARY }}
                >
                  <div className="vm-menu-sidebar-section">
                    <span className="vm-menu-sidebar-heading">
                      {lang === 'fa' ? 'شروع همکاری' : 'INITIATIVE'}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsModalOpen(true);
                      }}
                      className="vm-menu-cta-pill"
                    >
                      <span className="vm-pill-asterisk"><AsteriskIcon /></span>
                      <span>{(t.nav.startProject || 'START A PROJECT').toUpperCase()}</span>
                    </button>
                  </div>

                  <div className="vm-menu-sidebar-section">
                    <span className="vm-menu-sidebar-heading">
                      {lang === 'fa' ? 'ارتباط مستقیم' : 'CONTACT'}
                    </span>
                    <a href="mailto:hi@magicency.com" className="vm-menu-contact-link">
                      hi@magicency.com
                    </a>
                    <a href="mailto:growth@magicency.com" className="vm-menu-contact-link">
                      growth@magicency.com
                    </a>
                  </div>

                  <div className="vm-menu-sidebar-section">
                    <span className="vm-menu-sidebar-heading">
                      {lang === 'fa' ? 'دفاتر' : 'HUBS'}
                    </span>
                    <p className="vm-menu-meta-text">New York • London • Dubai</p>
                  </div>
                </motion.div>

              </div>

              {/* Bottom Footer inside Menu */}
              <motion.div 
                className="vm-menu-bottom-bar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <span className="vm-menu-copyright">© 2026 MAGICENCY®</span>
                <div className="vm-menu-socials">
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
