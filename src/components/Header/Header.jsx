import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
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
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2V22M2 12H22M4.929 4.929L19.071 19.071M4.929 19.071L19.071 4.929" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export default function Header() {
  const { t, lang, toggleLanguage, setIsModalOpen, isRTL } = useLanguage();
  const { navigate, isWorkPage, isApproachPage, isCapabilitiesPage, isBlogPage, isAboutPage } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Escape key closes menu
  useEffect(() => {
    if (!isMenuOpen) {
      setSelectedItemId(null);
      return;
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = (e, targetHref, itemId) => {
    e.preventDefault();
    if (itemId) {
      setSelectedItemId(itemId);
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    if (itemId === 'work' || targetHref === '/work') {
      if (isWorkPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/work');
      }
      return;
    }

    if (itemId === 'capabilities' || targetHref === '/capabilities') {
      if (isCapabilitiesPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/capabilities');
      }
      return;
    }

    if (itemId === 'approach' || targetHref === '/approach') {
      if (isApproachPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/approach');
      }
      return;
    }

    if (itemId === 'about' || targetHref === '/about') {
      if (isAboutPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/about');
      }
      return;
    }

    if (itemId === 'journal' || itemId === 'blog' || targetHref === '/blog') {
      if (isBlogPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/blog');
      }
      return;
    }

    if (targetHref === '/' || targetHref === '#hero' || targetHref === '#') {
      if (isWorkPage || isApproachPage || isCapabilitiesPage || isBlogPage || isAboutPage) {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (targetHref.startsWith('#')) {
      const elem = document.querySelector(targetHref);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'work', label: t.nav.work, href: '/work', number: '01' },
    { id: 'capabilities', label: t.nav.capabilities, href: '/capabilities', number: '02' },
    { id: 'approach', label: t.nav.approach, href: '/approach', number: '03' },
    { id: 'about', label: t.nav.about, href: '/about', number: '04' },
    { id: 'journal', label: t.journal?.badge || 'Blog', href: '/blog', number: '05' }
  ];

  return (
    <>
      <header className={`vm-header ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-menu-active' : ''}`}>
        <div className="vm-header-inner">
          
          {/* =========================================================
              LEFT: BRAND WORDMARK (MAGICENCY®)
              ========================================================= */}
          <motion.a 
            href="/" 
            className="vm-brand" 
            aria-label="Magicency Home"
            onClick={(e) => {
              e.preventDefault();
              if (isMenuOpen) setIsMenuOpen(false);
              if (isWorkPage || isApproachPage || isCapabilitiesPage || isBlogPage || isAboutPage) {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
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
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
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
            {/* Mobile Language Selector */}
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

            {/* Mobile Menu Trigger Button */}
            <motion.button
              type="button"
              onClick={() => {
                setIsMenuOpen((prev) => {
                  const nextState = !prev;
                  if (nextState) {
                    setSelectedItemId(null);
                  }
                  return nextState;
                });
              }}
              className={`vm-mobile-home-btn ${isMenuOpen ? 'is-open' : ''}`}
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASING.SECONDARY }}
            >
              <span className="vm-home-btn-label">
                {isMenuOpen ? (lang === 'fa' ? 'بستن' : 'CLOSE') : (lang === 'fa' ? 'منو' : 'MENU')}
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
            transition={{ duration: 0.45, ease: EASING.PRIMARY }}
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
                        className={`vm-menu-nav-link ${selectedItemId === item.id ? 'is-selected' : ''}`}
                        onClick={(e) => handleNavClick(e, item.href, item.id)}
                        initial={{ y: '110%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        exit={{ y: '-70%', opacity: 0 }}
                        transition={{ 
                          duration: 0.45, 
                          delay: 0.08 + idx * 0.04, 
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
                  transition={{ duration: 0.38, delay: 0.32, ease: EASING.PRIMARY }}
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
                    <a href="mailto:itsmehdisafdari@gmail.com" className="vm-menu-contact-link">
                      itsmehdisafdari@gmail.com
                    </a>
                  </div>
                </motion.div>

              </div>

              {/* Bottom Footer inside Menu */}
              <motion.div 
                className="vm-menu-bottom-bar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.36 }}
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
