import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, RevealHeading, RevealLabel, RevealBody, Stagger, EASING, editorialVariants } from '../motion';
import './Journal.css';

const toWebp = (url) => (url ? url.replace(/\.(jpg|jpeg|png)$/, '.webp') : url);

export default function Journal() {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const [expandedMobileArticle, setExpandedMobileArticle] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const containerRef = useRef(null);

  // Smooth cursor tracking with Framer Motion springs for cinematic inertia
  const mouseX = useSpring(0, EASING.SPRING_PHYSICS);
  const mouseY = useSpring(0, EASING.SPRING_PHYSICS);

  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 992
    );
  }, []);

  const journalData = t.journal || {
    badge: 'Blog',
    headline: 'Ideas between growth and technology.',
    inFocusLabel: 'In focus',
    filters: ['ALL', 'STRATEGY', 'PERFORMANCE', 'CREATIVE', 'TECHNOLOGY', 'AI'],
    featuredArticles: [
      {
        id: 'article-1',
        number: '01',
        title: 'Why Growth Problems Are Rarely Marketing Problems',
        category: 'STRATEGY',
        date: 'SEP 2026',
        readTime: '06 MIN',
        image: '/journal-1.jpg',
        alt: 'Why Growth Problems Are Rarely Marketing Problems'
      },
      {
        id: 'article-2',
        number: '02',
        title: 'From Traffic to Systems: Designing a Better Conversion Engine',
        category: 'PERFORMANCE',
        date: 'SEP 2026',
        readTime: '08 MIN',
        image: '/journal-2.jpg',
        alt: 'From Traffic to Systems: Designing a Better Conversion Engine'
      },
      {
        id: 'article-3',
        number: '03',
        title: 'Where AI Actually Creates Leverage in Modern Marketing',
        category: 'AI & TECHNOLOGY',
        date: 'SEP 2026',
        readTime: '05 MIN',
        image: '/journal-3.jpg',
        alt: 'Where AI Actually Creates Leverage in Modern Marketing'
      }
    ]
  };

  const articles = journalData.featuredArticles || [];

  // Filter articles based on active filter
  const filteredArticles = activeFilter === 'ALL' || activeFilter === 'همه'
    ? articles
    : articles.filter((art) => {
        const cat = art.category.toUpperCase();
        return cat.includes(activeFilter.toUpperCase());
      });

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleRowClick = (articleId) => {
    if (isTouchDevice) {
      setExpandedMobileArticle((prev) => (prev === articleId ? null : articleId));
    }
  };

  return (
    <section 
      id="journal" 
      ref={containerRef} 
      className="shared-section vm-journal-section"
      aria-label="Journal and Strategic Insights"
      onMouseMove={handleMouseMove}
    >
      <div className="container vm-journal-container">
        
        {/* =========================================================
            01. JOURNAL HERO / INTRO
            ========================================================= */}
        <div className="journal-heading-block">
          <RevealLabel as="div" className="journal-badge-label" delay={0.0}>
            <span className="journal-badge-text">{journalData.badge}</span>
          </RevealLabel>
          <RevealHeading as="h2" className="journal-main-headline" delay={0.06}>
            {journalData.headline}
          </RevealHeading>
        </div>

        {/* =========================================================
            02. IN FOCUS (FEATURED EDITORIAL CARDS)
            ========================================================= */}
        <div className="journal-featured-section">
          <RevealLabel as="div" className="journal-featured-heading" delay={0.08}>
            <h3 className="u-text-heading-xs">{journalData.inFocusLabel}</h3>
          </RevealLabel>

          <Stagger stagger={0.08} delay={0.1} className="journal-featured-grid">
            {articles.map((art) => (
              <motion.article 
                key={art.id} 
                className="journal-featured-card"
                variants={editorialVariants}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: EASING.SECONDARY } }}
                onMouseEnter={() => !isTouchDevice && setHoveredArticle(art)}
                onMouseLeave={() => !isTouchDevice && setHoveredArticle(null)}
                onClick={() => handleRowClick(art.id)}
              >
                <div className="journal-featured-card-media">
                  <picture>
                    <source srcSet={toWebp(art.image)} type="image/webp" />
                    <img
                      src={art.image}
                      alt={art.alt}
                      className="journal-featured-card-media-img"
                      width="600"
                      height="400"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="journal-featured-media-overlay" />
                  <span className="journal-featured-num-tag">{art.number}</span>
                </div>

                <div className="journal-featured-card-content">
                  <div className="journal-featured-card-meta">
                    <span className="journal-card-cat">{art.category}</span>
                    <span className="journal-card-dot">•</span>
                    <span className="journal-card-time">{art.readTime}</span>
                  </div>
                  <h4 className="journal-featured-card-title">
                    {art.title}
                  </h4>
                  <div className="journal-featured-card-date">
                    <span>{art.date}</span>
                    <ArrowUpRight size={15} className="journal-card-arrow" />
                  </div>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>

        {/* =========================================================
            03. MINIMAL EDITORIAL FILTER BAR
            ========================================================= */}
        <nav className="journal-nav" aria-label="Journal Categories">
          <div className="journal-nav-track">
            {journalData.filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`journal-nav-link ${activeFilter === filter ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </nav>

        {/* =========================================================
            04. EDITORIAL ARTICLE LIST WITH SIGNATURE CURSOR HOVER
            ========================================================= */}
        <div className="journal-list-wrapper">
          <Stagger stagger={0.06} className="journal-list">
            {filteredArticles.map((art) => {
              const isHovered = hoveredArticle?.id === art.id;
              const isExpandedMobile = expandedMobileArticle === art.id;

              return (
                <motion.div
                  key={art.id}
                  className={`journal-list-item ${isHovered ? 'is-hovered' : ''} ${isExpandedMobile ? 'is-expanded-mobile' : ''}`}
                  variants={editorialVariants}
                  onMouseEnter={() => !isTouchDevice && setHoveredArticle(art)}
                  onMouseLeave={() => !isTouchDevice && setHoveredArticle(null)}
                  onClick={() => handleRowClick(art.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={art.title}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleRowClick(art.id);
                    }
                  }}
                >
                  <div className="journal-list-item-overview">
                    <span className="journal-list-item-num">{art.number}</span>
                    <div className="journal-list-item-title">
                      <h4 className="journal-list-item-title-text">{art.title}</h4>
                    </div>
                  </div>

                  <div className="journal-list-item-meta">
                    <span className="journal-list-item-cat">{art.category}</span>
                    <span className="journal-list-item-date-text">{art.date}</span>
                    <ArrowUpRight size={16} className="journal-list-item-arrow" />
                  </div>

                  {/* Mobile Tap-To-Reveal Image Inline */}
                  {isTouchDevice && (
                    <AnimatePresence>
                      {isExpandedMobile && (
                        <motion.div
                          className="journal-mobile-expanded-media"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASING.SECONDARY }}
                        >
                          <picture>
                            <source srcSet={toWebp(art.image)} type="image/webp" />
                            <img src={art.image} alt={art.alt} className="journal-mobile-img" width="600" height="400" loading="lazy" decoding="async" />
                          </picture>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              );
            })}
          </Stagger>
        </div>

      </div>

      {/* =========================================================
          05. SIGNATURE FLOATING CURSOR-FOLLOWING PREVIEW IMAGE
          Positioned relative to cursor with smooth inertia & clipPath
          ========================================================= */}
      {!isTouchDevice && (
        <AnimatePresence>
          {hoveredArticle && (
            <motion.div
              className="journal-floating-cursor-preview"
              style={{
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-115%'
              }}
              initial={{
                opacity: 0,
                scale: 0.88,
                clipPath: 'inset(100% 0% 0% 0%)'
              }}
              animate={{
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% 0% 0% 0%)'
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                clipPath: 'inset(0% 0% 100% 0%)'
              }}
              transition={{
                duration: 0.38,
                ease: EASING.CINEMATIC
              }}
            >
              <div className="journal-floating-img-frame">
                <picture>
                  <source srcSet={toWebp(hoveredArticle.image)} type="image/webp" />
                  <img
                    src={hoveredArticle.image}
                    alt={hoveredArticle.title}
                    className="journal-floating-img"
                    width="400"
                    height="260"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="journal-floating-img-overlay" />
                <div className="journal-floating-caption">
                  <span className="journal-floating-tag">{hoveredArticle.category}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
