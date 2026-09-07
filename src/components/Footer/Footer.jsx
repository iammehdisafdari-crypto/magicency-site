import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import ScrambleText from '../Header/ScrambleText';
import { Reveal, Stagger, editorialVariants } from '../motion';
import { trackContactClick, trackOutboundClick } from '../../utils/analytics';
import './Footer.css';

const FluidCursor = React.lazy(() => import('../effects/FluidCursor'));

export default function Footer() {
  const { t, isRTL } = useLanguage();
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
      { label: 'WORK', href: '/work' },
      { label: 'CAPABILITIES', href: '/capabilities' },
      { label: 'APPROACH', href: '/approach' },
      { label: 'ABOUT', href: '/about' },
      { label: 'BLOG', href: '/blog' }
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
  const [shouldLoadFluid, setShouldLoadFluid] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadFluid(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

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
      {shouldLoadFluid && (
        <React.Suspense fallback={null}>
          <FluidCursor intensity={0.8} className="footer-fluid-bg" />
        </React.Suspense>
      )}
      <div className="liquid-ether-fade bottom" aria-hidden="true" />

      <div className="container vm-footer-inner-container">
        
        {/* =========================================================
            01. DIRECT CONTACT / LOCATIONS (footer-emails grid)
            ========================================================= */}
        <div className="footer-emails grid">
          <Stagger stagger={0.08} delay={0.1} className="footer-emails-block">
            {f.locations.map((loc, idx) => (
              <motion.div key={idx} variants={editorialVariants} className="footer-emails-block-group">
                <div className="footer-location-name">{loc.city}</div>
                <a
                  href={`mailto:${loc.email}`}
                  className="footer-email-link"
                  onClick={() => trackContactClick('email', 'footer')}
                >
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
                aria-label={`Visit Magicency on ${soc.name}`}
                onClick={() => trackOutboundClick(soc.url, soc.name)}
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
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === '/work') {
                    if (isWorkPage) window.scrollTo({ top: 0, behavior: 'smooth' });
                    else navigate('/work');
                    return;
                  }
                  if (item.href === '/capabilities') {
                    if (isCapabilitiesPage) window.scrollTo({ top: 0, behavior: 'smooth' });
                    else navigate('/capabilities');
                    return;
                  }
                  if (item.href === '/approach') {
                    if (isApproachPage) window.scrollTo({ top: 0, behavior: 'smooth' });
                    else navigate('/approach');
                    return;
                  }
                  if (item.href === '/about') {
                    if (isAboutPage) window.scrollTo({ top: 0, behavior: 'smooth' });
                    else navigate('/about');
                    return;
                  }
                  if (item.href === '/blog') {
                    if (isBlogPage) window.scrollTo({ top: 0, behavior: 'smooth' });
                    else navigate('/blog');
                    return;
                  }
                  if (item.href.startsWith('#')) {
                    const elem = document.querySelector(item.href);
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    return;
                  }
                  navigate(item.href);
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
