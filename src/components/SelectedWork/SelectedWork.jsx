import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { RevealLabel, EASING } from '../motion';
import { useDeferredTarget } from '../motion/useDeferredTarget';
import './SelectedWork.css';

const toWebp = (url) => {
  if (!url || url.endsWith('.webp') || url.includes('client')) return null;
  return url.replace(/\.(jpg|jpeg|png)$/, '.webp');
};

export default function SelectedWork() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const { navigate } = useRouter();
  const containerRef = useRef(null);

  const workData = t.featuredWork || {
    eyebrow: 'Featured work',
    seeAllWork: 'SEE ALL WORK',
    projects: [
      { id: 'branding', num: '01', category: 'Brand', categoryItalic: 'ing', client: 'atrash store', clientTag: 'CLIENT', image: '/branding-client.png', alt: 'atrash store Branding', color: '#E3C280' },
      { id: 'web', num: '02', category: 'Web', categoryItalic: '', client: 'GR8 Real Estate', clientTag: 'CLIENT', image: '/web-client.png', alt: 'GR8 Real Estate Web', color: '#C68B59' },
      { id: 'mobile', num: '03', category: 'Mob', categoryItalic: 'ile', client: 'Sona', clientTag: 'CLIENT', image: '/project-3.jpg', alt: 'Sona Mobile', color: '#A855F7' },
      { id: 'motion', num: '04', category: 'Mo', categoryItalic: 'tion', client: 'Vault Bank', clientTag: 'CLIENT', image: '/project-4.jpg', alt: 'Vault Bank Motion', color: '#EAB308' }
    ]
  };

  const projects = workData.projects;

  const targetRef = useDeferredTarget(containerRef);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Update active index in sync with smooth scroll progress
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (val) => {
      if (val < 0.22) {
        setActiveIndex(0); // 01 Branding
      } else if (val < 0.48) {
        setActiveIndex(1); // 02 Web
      } else if (val < 0.74) {
        setActiveIndex(2); // 03 Mobile
      } else {
        setActiveIndex(3); // 04 Motion
      }
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Layered Cinematic Card Transitions (Depth Stacking)
  // Card 0 Physics (Branding)
  const card0Y = useTransform(smoothProgress, [0, 0.18, 0.26], ['0%', '0%', '-18%']);
  const card0Opacity = useTransform(smoothProgress, [0, 0.18, 0.26], [1, 1, 0]);
  const card0Scale = useTransform(smoothProgress, [0, 0.18, 0.26], [1, 1, 0.92]);

  // Card 1 Physics (Web)
  const card1Y = useTransform(smoothProgress, [0.18, 0.26, 0.44, 0.52], ['100%', '0%', '0%', '-18%']);
  const card1Opacity = useTransform(smoothProgress, [0.18, 0.25, 0.45, 0.52], [0, 1, 1, 0]);
  const card1Scale = useTransform(smoothProgress, [0.18, 0.26, 0.44, 0.52], [0.92, 1, 1, 0.92]);

  // Card 2 Physics (Mobile)
  const card2Y = useTransform(smoothProgress, [0.44, 0.52, 0.70, 0.78], ['100%', '0%', '0%', '-18%']);
  const card2Opacity = useTransform(smoothProgress, [0.44, 0.51, 0.71, 0.78], [0, 1, 1, 0]);
  const card2Scale = useTransform(smoothProgress, [0.44, 0.52, 0.70, 0.78], [0.92, 1, 1, 0.92]);

  // Card 3 Physics (Motion — Final)
  const card3Y = useTransform(smoothProgress, [0.70, 0.78, 1.0], ['100%', '0%', '0%']);
  const card3Opacity = useTransform(smoothProgress, [0.70, 0.77, 1.0], [0, 1, 1]);
  const card3Scale = useTransform(smoothProgress, [0.70, 0.78, 1.0], [0.92, 1, 1]);

  // Full-width CTA button (appears smoothly with Card 4 at 0.74 - 0.84)
  const ctaOpacity = useTransform(smoothProgress, [0.74, 0.84], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.74, 0.84], [16, 0]);

  const cardsMotion = [
    { y: card0Y, opacity: card0Opacity, scale: card0Scale },
    { y: card1Y, opacity: card1Opacity, scale: card1Scale },
    { y: card2Y, opacity: card2Opacity, scale: card2Scale },
    { y: card3Y, opacity: card3Opacity, scale: card3Scale }
  ];

  const activeProject = projects[activeIndex] || projects[0];

  // Helper for rendering distinctive project badges
  const renderClientIcon = (proj) => {
    if (proj.id === 'branding') {
      return (
        <img
          src="/branding-client.png"
          alt={proj.client || 'atrash store'}
          className="vm-client-logo-img"
          width="32"
          height="32"
          loading="lazy"
          decoding="async"
        />
      );
    }
    if (proj.id === 'web') {
      return (
        <img
          src="/web-client.png"
          alt={proj.client || 'GR8 Real Estate'}
          className="vm-client-logo-img"
          width="32"
          height="32"
          loading="lazy"
          decoding="async"
        />
      );
    }
    if (proj.id === 'mobile') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
        </svg>
      );
    }
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
        <path d="M5 14L12 7L19 14" />
        <path d="M5 19L12 12L19 19" />
      </svg>
    );
  };

  if (prefersReducedMotion) {
    // Accessible fallback: regular document flow
    return (
      <section id="work" className="vm-showcase-fallback" aria-label="Selected Client Work">
        <div className="vm-showcase-container">
          <h2 className="vm-fallback-title">{workData.eyebrow}</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="vm-fallback-item">
              <div className="vm-fallback-meta">
                <h3>{proj.category}{proj.categoryItalic}</h3>
                <p>{proj.clientTag}: {proj.client}</p>
              </div>
              <picture>
                {toWebp(proj.image) && <source srcSet={toWebp(proj.image)} type="image/webp" />}
                <img src={proj.image} alt={proj.alt} className="vm-fallback-img" width="800" height="500" loading="lazy" decoding="async" />
              </picture>
            </div>
          ))}
          <button type="button" onClick={() => setIsModalOpen(true)} className="vm-showcase-cta-btn">
            <span>{workData.seeAllWork}</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="work" className="vm-showcase-scroll-section" aria-label="Selected Client Work Portfolio">
      {/* Pinned Sticky Showcase Viewport */}
      <div className="vm-showcase-sticky-viewport">
        
        {/* =========================================================
            MOBILE HUD HEADER (< 920PX)
            Sleek Progress Track & Step Counter (01 / 04)
            ========================================================= */}
        <div className="vm-showcase-mobile-header">
          <div className="vm-mobile-header-top">
            <span className="vm-mobile-eyebrow">{workData.eyebrow}</span>
            <div className="vm-mobile-counter">
              <span className="vm-counter-current">{activeProject.num}</span>
              <span className="vm-counter-divider">/</span>
              <span className="vm-counter-total">04</span>
            </div>
          </div>
          <div className="vm-mobile-progress-track">
            <motion.div 
              className="vm-mobile-progress-fill" 
              style={{ width: progressWidth }} 
            />
          </div>
        </div>

        {/* =========================================================
            MOBILE METADATA BAR (< 920PX)
            Category Title + Client Badge in unified horizontal flow
            ========================================================= */}
        <div className="vm-showcase-mobile-meta-bar">
          <div className="vm-mobile-title-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-title-${activeProject.id}`}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.35, ease: EASING.PRIMARY }}
                className="vm-mobile-title-inner"
              >
                <h2 className="vm-showcase-category-heading">
                  <span className="vm-category-base">{activeProject.category}</span>
                  {activeProject.categoryItalic && (
                    <em className="italic-serif-word">{activeProject.categoryItalic}</em>
                  )}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="vm-mobile-client-badge-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-client-${activeProject.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.28, ease: EASING.SECONDARY }}
                className="vm-showcase-client-badge"
              >
                <div 
                  className={`vm-client-badge-icon ${(activeProject.id === 'branding' || activeProject.id === 'web') ? 'is-logo' : ''}`}
                  style={{ background: (activeProject.id === 'branding' || activeProject.id === 'web') ? '#FFFFFF' : (activeProject.color || '#FF5500') }}
                >
                  {renderClientIcon(activeProject)}
                </div>
                <div className="vm-client-badge-meta">
                  <span className="client-tag-label">{activeProject.clientTag || 'CLIENT'}</span>
                  <span className="client-brand-title">{activeProject.client}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================
            DESKTOP TWO-COLUMN CONTAINER (>= 920PX)
            Left: Editorial Category & Client | Right: Scroll Stage
            ========================================================= */}
        <div className="vm-showcase-container">
          
          {/* Left Column Desktop */}
          <div className="vm-showcase-left">
            {/* Small Eyebrow */}
            <RevealLabel as="span" className="vm-showcase-eyebrow">{workData.eyebrow}</RevealLabel>

            {/* Giant Editorial Category Heading */}
            <div className="vm-showcase-title-display">
              <AnimatePresence mode="wait">
                <div key={activeProject.id} className="motion-line-mask vm-showcase-title-mask">
                  <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASING.PRIMARY }}
                    className="vm-showcase-title-inner"
                  >
                    <h2 className="vm-showcase-category-heading">
                      <span className="vm-category-base">{activeProject.category}</span>
                      {activeProject.categoryItalic && (
                        <em className="italic-serif-word">{activeProject.categoryItalic}</em>
                      )}
                    </h2>
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>

            {/* Bottom Client Badge */}
            <div className="vm-showcase-client-badge-area">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`client-${activeProject.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: EASING.SECONDARY }}
                  className="vm-showcase-client-badge"
                >
                  <div 
                    className={`vm-client-badge-icon ${(activeProject.id === 'branding' || activeProject.id === 'web') ? 'is-logo' : ''}`}
                    style={{ background: (activeProject.id === 'branding' || activeProject.id === 'web') ? '#FFFFFF' : (activeProject.color || '#FF5500') }}
                  >
                    {renderClientIcon(activeProject)}
                  </div>
                  <div className="vm-client-badge-meta">
                    <span className="client-tag-label">{activeProject.clientTag || 'CLIENT'}</span>
                    <span className="client-brand-title">{activeProject.client}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column Stage (Desktop & Mobile Shared Stage) */}
          <div className="vm-showcase-right">
            <div className="vm-showcase-cards-wrapper">
              {projects.map((proj, idx) => {
                const motionStyle = cardsMotion[idx];
                return (
                  <motion.div
                    key={proj.id}
                    className="vm-showcase-card-layer"
                    style={{
                      y: motionStyle.y,
                      opacity: motionStyle.opacity,
                      scale: motionStyle.scale,
                      zIndex: idx + 1
                    }}
                  >
                    <div className="vm-showcase-card-inner">
                      <picture>
                        {toWebp(proj.image) && <source srcSet={toWebp(proj.image)} type="image/webp" />}
                        <img
                          src={proj.image}
                          alt={proj.alt || proj.client}
                          className="vm-showcase-img"
                          width="800"
                          height="500"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </picture>
                      <div className="vm-showcase-overlay" />

                      {/* Mobile In-Card Floating Pill */}
                      <div className="vm-card-corner-badge">
                        <span className="vm-corner-num">{proj.num}</span>
                        <span className="vm-corner-dot" style={{ backgroundColor: proj.color || '#FF5500' }} />
                        <span className="vm-corner-client">{proj.client}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Full-width "SEE ALL WORK →" Button */}
            <motion.div
              className="vm-showcase-cta-bar"
              style={{
                opacity: ctaOpacity,
                y: ctaY
              }}
            >
              <motion.button
                type="button"
                onClick={() => navigate('/work')}
                className="vm-showcase-cta-btn btn-motion"
                aria-label={workData.seeAllWork}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.25, ease: EASING.SECONDARY }}
              >
                <span className="cta-text">{workData.seeAllWork}</span>
                <span className="cta-arrow btn-icon-arrow">
                  {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </span>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
