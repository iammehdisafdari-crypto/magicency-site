import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';
import ScrambleText from './ScrambleText';
import FluidCursorBackground from '../Common/FluidCursorBackground';
import { buttonMotion, EASING } from '../motion';
import './Header.css';

export default function Header() {
  const { t, lang, toggleLanguage, setIsModalOpen, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    const elem = document.querySelector(targetId);
    if (elem) {
      e.preventDefault();
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`vm-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* WebGL Fluid Cursor Layer (Restricted strictly to Header) */}
      <FluidCursorBackground className="header-fluid-bg" />

      <div className="vm-header-inner">
        {/* Left: Brand Wordmark (matching Vivid Motion® style) */}
        <motion.a 
          href="#hero" 
          className="vm-brand" 
          aria-label="Magicency Home"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: EASING.SECONDARY }}
        >
          <span className="vm-brand-text">MAGICENCY</span>
          <span className="vm-brand-registered">®</span>
        </motion.a>

        {/* Right Group: Desktop Nav Links + Actions */}
        <div className="vm-header-right-group">
          <nav className="vm-nav" aria-label="Primary Navigation">
            <a 
              href="#work" 
              className="vm-nav-link" 
              onClick={(e) => handleNavClick(e, '#work')}
            >
              <ScrambleText text={t.nav.work.toUpperCase()} />
            </a>
            <a 
              href="#capabilities" 
              className="vm-nav-link" 
              onClick={(e) => handleNavClick(e, '#capabilities')}
            >
              <ScrambleText text={t.nav.capabilities.toUpperCase()} />
            </a>
            <a 
              href="#approach" 
              className="vm-nav-link" 
              onClick={(e) => handleNavClick(e, '#approach')}
            >
              <ScrambleText text={t.nav.approach.toUpperCase()} />
            </a>
            <a 
              href="#about" 
              className="vm-nav-link" 
              onClick={(e) => handleNavClick(e, '#about')}
            >
              <ScrambleText text={t.nav.about.toUpperCase()} />
            </a>
          </nav>

          {/* Language Switcher Pill */}
          <motion.button 
            type="button"
            onClick={toggleLanguage} 
            className="vm-lang-pill"
            aria-label="Switch Language"
            title={lang === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: EASING.SECONDARY }}
          >
            <Globe size={12} className="vm-lang-icon" />
            <span className="vm-lang-label">{t.nav.switchLang}</span>
          </motion.button>

          {/* Primary Asterisk Action Button (START A PROJECT) */}
          <motion.button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="vm-start-project-btn"
            variants={buttonMotion}
            initial="rest"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <span className="vm-btn-asterisk">✱</span>
            <span className="vm-btn-label">{(t.nav.startProject || 'START A PROJECT').toUpperCase()}</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
