import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SKEWED_PAGES_DATA } from '../../data/problemInsightData';
import './ProblemInsight.css';

export default function ProblemInsight() {
  const { lang, isRTL } = useLanguage();
  const [curPage, setCurPage] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const sectionRef = useRef(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Natural document scroll-driven state manager (no mousewheel hijacking)
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const container = sectionRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollableHeight = rect.height - window.innerHeight;
        if (scrollableHeight <= 0) return;

        const scrolled = -rect.top;
        const totalPages = SKEWED_PAGES_DATA.length;

        // Bounded discrete page calculation: 1 to totalPages
        const rawPage = Math.floor((scrolled / scrollableHeight) * totalPages) + 1;
        const newPage = Math.min(totalPages, Math.max(1, rawPage));

        setCurPage((prev) => (prev !== newPage ? newPage : prev));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Smooth navigation by clicking indicator
  const handlePageClick = useCallback((targetPage) => {
    const container = sectionRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollableHeight = rect.height - window.innerHeight;
    const stepHeight = scrollableHeight / SKEWED_PAGES_DATA.length;

    const targetScrollY = window.scrollY + rect.top + ((targetPage - 1) * stepHeight) + 4;
    window.scrollTo({
      top: targetScrollY,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="problem-insight"
      className={`skw-scroll-wrapper ${prefersReducedMotion ? 'reduced-motion' : ''}`}
      aria-label={lang === 'fa' ? 'مسئله و نگرش سیستم رشد' : 'Problem Insight: Disconnected Marketing vs Growth Operating System'}
    >
      {/* Pinned 100vh Sticky Viewport matching Reference */}
      <div className="skw-pages">
        
        {/* Subtle HUD Pagination Indicator */}
        <nav
          className="skw-hud-nav"
          aria-label={lang === 'fa' ? 'صفحات نگرش' : 'Problem Insight Navigation'}
        >
          {SKEWED_PAGES_DATA.map((item) => (
            <button
              key={item.page}
              type="button"
              className={`skw-hud-dot ${curPage === item.page ? 'is-active' : ''}`}
              onClick={() => handlePageClick(item.page)}
              aria-label={`Go to page 0${item.page}`}
            >
              <span className="skw-hud-num">0{item.page}</span>
              <span className="skw-hud-line" />
            </button>
          ))}
        </nav>

        {/* 5 Distinct Skewed Pages */}
        {SKEWED_PAGES_DATA.map((item) => {
          const isActive = curPage >= item.page;
          const isInactive = curPage > item.page;
          const isVisualLeft = item.visualSide === 'left';

          // Helper to render Visual Half
          const renderVisualContent = () => (
            <div
              className="skw-page__content skw-page__content--visual"
              style={{
                backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.65), rgba(7, 16, 28, 0.85)), url(${item.image})`
              }}
            >
              <div className="skw-visual-overlay">
                <span className="skw-visual-badge">
                  {item.visualBadge[lang] || item.visualBadge.en}
                </span>

                <div className="skw-visual-chips">
                  {item.visualItems.map((chip, cIdx) => (
                    <span key={cIdx} className="skw-visual-chip">
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="skw-visual-meta">
                  <span className="skw-meta-indicator" aria-hidden="true" />
                  <span className="skw-meta-text">
                    {item.status[lang] || item.status.en}
                  </span>
                </div>
              </div>
            </div>
          );

          // Helper to render Content Half
          const renderEditorialContent = () => (
            <div className="skw-page__content skw-page__content--text">
              <div className="skw-editorial-inner">
                <span className="skw-page__eyebrow">
                  {item.eyebrow[lang] || item.eyebrow.en}
                </span>

                <h2 className="skw-page__heading">
                  {item.heading[lang] || item.heading.en}
                </h2>

                {item.emphasis && (
                  <p className="skw-page__emphasis">
                    {item.emphasis[lang] || item.emphasis.en}
                  </p>
                )}

                <p className="skw-page__description">
                  {item.description[lang] || item.description.en}
                </p>
              </div>
            </div>
          );

          return (
            <div
              key={item.page}
              className={`skw-page skw-page-${item.page} ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
              aria-hidden={curPage !== item.page}
            >
              {/* Left Half (50% width, translates from bottom-left) */}
              <div className="skw-page__half skw-page__half--left">
                <div className="skw-page__skewed">
                  {isVisualLeft ? renderVisualContent() : renderEditorialContent()}
                </div>
              </div>

              {/* Right Half (50% width, translates from top-right) */}
              <div className="skw-page__half skw-page__half--right">
                <div className="skw-page__skewed">
                  {isVisualLeft ? renderEditorialContent() : renderVisualContent()}
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
