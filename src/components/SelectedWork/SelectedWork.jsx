import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import './SelectedWork.css';

export default function SelectedWork() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const containerRef = useRef(null);

  const workData = t.featuredWork || {
    eyebrow: 'Featured work',
    seeAllWork: 'SEE ALL WORK',
    projects: [
      { id: 'branding', num: '01', category: 'Brand', categoryItalic: 'ing', client: 'Vakeso', clientTag: 'CLIENT', image: '/project-1.jpg', alt: 'Vakeso Branding', color: '#FF5500' },
      { id: 'web', num: '02', category: 'Web', categoryItalic: '', client: 'SoundCloud', clientTag: 'CLIENT', image: '/project-2.jpg', alt: 'SoundCloud Web', color: '#FF5500' },
      { id: 'mobile', num: '03', category: 'Mob', categoryItalic: 'ile', client: 'Sona', clientTag: 'CLIENT', image: '/project-3.jpg', alt: 'Sona Mobile', color: '#A855F7' },
      { id: 'motion', num: '04', category: 'Mo', categoryItalic: 'tion', client: 'Vault Bank', clientTag: 'CLIENT', image: '/project-4.jpg', alt: 'Vault Bank Motion', color: '#EAB308' }
    ]
  };

  const projects = workData.projects;

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Update active index in sync with scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (val) => {
      if (val < 0.27) {
        setActiveIndex(0);
      } else if (val < 0.57) {
        setActiveIndex(1);
      } else if (val < 0.83) {
        setActiveIndex(2);
      } else {
        setActiveIndex(3);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Card 0 Physics
  const card0Y = useTransform(smoothProgress, [0, 0.22, 0.32], ['0%', '0%', '-100%']);
  const card0Opacity = useTransform(smoothProgress, [0, 0.22, 0.32], [1, 1, 0]);
  const card0Scale = useTransform(smoothProgress, [0, 0.22, 0.32], [1, 1, 0.95]);

  // Card 1 Physics
  const card1Y = useTransform(smoothProgress, [0.22, 0.32, 0.52, 0.62], ['100%', '0%', '0%', '-100%']);
  const card1Opacity = useTransform(smoothProgress, [0.22, 0.30, 0.54, 0.62], [0, 1, 1, 0]);
  const card1Scale = useTransform(smoothProgress, [0.22, 0.32, 0.52, 0.62], [0.95, 1, 1, 0.95]);

  // Card 2 Physics
  const card2Y = useTransform(smoothProgress, [0.52, 0.62, 0.78, 0.88], ['100%', '0%', '0%', '-100%']);
  const card2Opacity = useTransform(smoothProgress, [0.52, 0.60, 0.80, 0.88], [0, 1, 1, 0]);
  const card2Scale = useTransform(smoothProgress, [0.52, 0.62, 0.78, 0.88], [0.95, 1, 1, 0.95]);

  // Card 3 Physics (Final)
  const card3Y = useTransform(smoothProgress, [0.78, 0.88, 1.0], ['100%', '0%', '0%']);
  const card3Opacity = useTransform(smoothProgress, [0.78, 0.86, 1.0], [0, 1, 1]);
  const card3Scale = useTransform(smoothProgress, [0.78, 0.88, 1.0], [0.95, 1, 1]);

  // Full-width CTA button (appears seamlessly with Card 4)
  const ctaOpacity = useTransform(smoothProgress, [0.84, 0.92], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.84, 0.92], [24, 0]);

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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
          <path d="M4 6L12 20L20 6" />
          <path d="M8 6L12 14L16 6" />
        </svg>
      );
    }
    if (proj.id === 'web') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
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
      <section id="work" className="vm-showcase-fallback">
        <div className="vm-showcase-container">
          <h2 className="vm-fallback-title">{workData.eyebrow}</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="vm-fallback-item">
              <div className="vm-fallback-meta">
                <h3>{proj.category}{proj.categoryItalic}</h3>
                <p>{proj.clientTag}: {proj.client}</p>
              </div>
              <img src={proj.image} alt={proj.alt} className="vm-fallback-img" />
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
    <section ref={containerRef} id="work" className="vm-showcase-scroll-section">
      {/* Pinned Sticky Showcase Viewport */}
      <div className="vm-showcase-sticky-viewport">
        <div className="vm-showcase-container">
          
          {/* =========================================================
              LEFT COLUMN: CATEGORY TITLE & CLIENT BADGE (~35% DESKTOP)
              ========================================================= */}
          <div className="vm-showcase-left">
            {/* Small Eyebrow */}
            <span className="vm-showcase-eyebrow">{workData.eyebrow}</span>

            {/* Giant Editorial Category Heading */}
            <div className="vm-showcase-title-display">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="vm-showcase-title-inner"
                >
                  <h2 className="vm-showcase-category-heading">
                    {activeProject.category}
                    {activeProject.categoryItalic && (
                      <em className="italic-serif-word">{activeProject.categoryItalic}</em>
                    )}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Client Badge */}
            <div className="vm-showcase-client-badge-area">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`client-${activeProject.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="vm-showcase-client-badge"
                >
                  <div 
                    className="vm-client-badge-icon"
                    style={{ background: activeProject.color || '#FF5500' }}
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
              RIGHT COLUMN: SCROLL-DRIVEN PHYSICAL MEDIA SHOWCASE (~65%)
              ========================================================= */}
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
                      <img
                        src={proj.image}
                        alt={proj.alt || proj.client}
                        className="vm-showcase-img"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="vm-showcase-overlay" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =========================================================
                FULL-WIDTH RADIANT "SEE ALL WORK →" BUTTON
                (Matching exact card width and style in 4th screenshot)
                ========================================================= */}
            <motion.div
              className="vm-showcase-cta-bar"
              style={{
                opacity: ctaOpacity,
                y: ctaY
              }}
            >
              <motion.button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="vm-showcase-cta-btn"
                aria-label={workData.seeAllWork}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="cta-text">{workData.seeAllWork}</span>
                <span className="cta-arrow">
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
