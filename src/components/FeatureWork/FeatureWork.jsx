import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { FEATURED_WORKS } from '../../data/featureWorkData';
import CTA from '../Common/CTA';
import './FeatureWork.css';

export default function FeatureWork() {
  const { lang, isRTL } = useLanguage();
  const { navigate } = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const scrollContainerRef = useRef(null);
  const stickyPanelRef = useRef(null);

  // Check user preference for reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Natural page scroll-driven activeIndex calculation with decoupled READ/WRITE
  useEffect(() => {
    let rafId = null;
    let metrics = { containerTop: 0, containerHeight: 0 };

    // Phase 1 (READ): Cache container geometry only on mount, resize, or orientation change
    const measureLayout = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      metrics = {
        containerTop: rect.top + window.scrollY,
        containerHeight: rect.height
      };
    };

    // Phase 2: Compute active slide using compositor scrollY without triggering forced reflow
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const scrollableHeight = metrics.containerHeight - window.innerHeight;
        if (scrollableHeight <= 0) return;

        // Scrolled distance within this pinned section
        const scrolled = window.scrollY - metrics.containerTop;
        const stepHeight = scrollableHeight / FEATURED_WORKS.length;

        // Bounded active index calculation (Source of Truth)
        const newActiveIndex = Math.min(
          FEATURED_WORKS.length - 1,
          Math.max(0, Math.floor(scrolled / stepHeight))
        );

        setActiveIndex((prev) => (prev !== newActiveIndex ? newActiveIndex : prev));
      });
    };

    measureLayout();
    handleScroll();

    const handleResize = () => {
      measureLayout();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Click-to-slide pagination navigation
  const handlePaginationClick = useCallback((index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollableHeight = rect.height - window.innerHeight;
    const stepHeight = scrollableHeight / FEATURED_WORKS.length;

    // Scroll to the exact position for this slide
    const targetScrollY = window.scrollY + rect.top + (index * stepHeight) + 4;
    window.scrollTo({
      top: targetScrollY,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }, [prefersReducedMotion]);

  const activeWork = FEATURED_WORKS[activeIndex] || FEATURED_WORKS[0];

  return (
    <section
      ref={scrollContainerRef}
      id="feature-work"
      className={`fw-scroll-section ${prefersReducedMotion ? 'reduced-motion' : ''}`}
      aria-label={lang === 'fa' ? 'پروژه‌های منتخب مجیکنسـی' : 'Featured Work Systems'}
    >
      {/* Pinned Sticky Viewport (100vh / 100svh) */}
      <div ref={stickyPanelRef} className="fw-sticky-viewport">
        <div className="fw-container">
          
          {/* Section Eyebrow & Live Step Indicator */}
          <div className="fw-header-strip">
            <div className="fw-eyebrow-wrap">
              <span className="fw-eyebrow-accent">✦</span>
              <span className="fw-eyebrow-label">
                {lang === 'fa' ? 'پروژه‌های منتخب // سیستم‌های مهندسی‌شده' : 'FEATURED WORK // SELECTED SYSTEMS'}
              </span>
            </div>
            <div className="fw-counter" aria-live="polite">
              <span className="fw-counter-active">{activeWork.id}</span>
              <span className="fw-counter-sep">/</span>
              <span className="fw-counter-total">0{FEATURED_WORKS.length}</span>
            </div>
          </div>

          {/* Two-Column Responsive Layout */}
          <div className="fw-layout-grid">
            
            {/* Left Column: Synchronized Content (Category, Title, Description, Metrics) */}
            <div className="fw-content-col">
              <div className="fw-content-stack">
                {FEATURED_WORKS.map((work, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <article
                      key={work.id}
                      className={`fw-slide-content ${isActive ? 'is-active' : ''}`}
                      aria-hidden={!isActive}
                    >
                      {/* Category & Client Header */}
                      <div className="fw-meta-pill-row">
                        <span className="fw-category-pill">
                          {work.category[lang] || work.category.en}
                        </span>
                        <span className="fw-client-name">
                          {work.client[lang] || work.client.en}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h2 className="fw-project-title">
                        {work.title[lang] || work.title.en}
                      </h2>

                      {/* Narrative Description */}
                      <p className="fw-project-description">
                        {work.description[lang] || work.description.en}
                      </p>

                      {/* Live Performance Metrics Grid */}
                      <div className="fw-metrics-grid" role="list">
                        {work.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="fw-metric-cell" role="listitem">
                            <span className="fw-metric-val">{metric.value}</span>
                            <span className="fw-metric-lbl">
                              {metric.label[lang] || metric.label.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Bottom Interactive Pagination & Global CTA Bar */}
              <div className="fw-footer-row">
                <nav
                  className="fw-pagination-track"
                  role="tablist"
                  aria-label={lang === 'fa' ? 'ورق زدن پروژه‌ها' : 'Feature Work Slide Pagination'}
                >
                  {FEATURED_WORKS.map((work, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={work.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`${lang === 'fa' ? 'نمایش پروژه' : 'Go to project'} ${work.id}: ${work.client[lang] || work.client.en}`}
                        className={`fw-pagination-item ${isActive ? 'is-active' : ''}`}
                        onClick={() => handlePaginationClick(idx)}
                      >
                        <span className="fw-pagination-num">{work.id}</span>
                        <span className="fw-pagination-bar" aria-hidden="true" />
                      </button>
                    );
                  })}
                </nav>

                <CTA
                  variant="secondary"
                  size="compact"
                  href="/work"
                  trackingName="see_all_work"
                  trackingLocation="feature_work_section"
                  ariaLabel={lang === 'fa' ? 'مشاهده همه پروژه‌ها' : 'Explore All Systems & Case Studies'}
                  className="fw-see-all-cta"
                >
                  {lang === 'fa' ? 'مشاهده تمام پروژه‌ها' : 'SEE ALL WORK'}
                </CTA>
              </div>
            </div>

            {/* Right Column: Physical Vertical Image Track Viewport */}
            <div className="fw-visual-col">
              <div className="fw-visual-frame">
                <div
                  className="fw-image-track"
                  style={{
                    transform: `translate3d(0, -${activeIndex * 100}%, 0)`
                  }}
                >
                  {FEATURED_WORKS.map((work, idx) => (
                    <div
                      key={work.id}
                      className="fw-image-slide"
                      aria-hidden={activeIndex !== idx}
                    >
                      <picture>
                        {work.mobileImage && (
                          <source
                            media="(max-width: 767px)"
                            srcSet={work.mobileImage}
                            type="image/webp"
                          />
                        )}
                        <source
                          srcSet={work.mobileImage ? `${work.mobileImage} 720w, ${work.image} 1376w` : work.image}
                          sizes="(max-width: 1200px) 50vw, 663px"
                          type="image/webp"
                        />
                        <img
                          src={work.mobileImage || work.imageJpg || work.image}
                          srcSet={work.mobileImage ? `${work.mobileImage} 720w, ${work.image} 1376w` : undefined}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 663px"
                          alt={work.imageAlt[lang] || work.imageAlt.en}
                          className="fw-image-el"
                          width="720"
                          height="402"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </picture>

                      {/* Tactile Inner Atmospheric Gradient & Glare */}
                      <div className="fw-image-scrim" aria-hidden="true" />

                      {/* In-Card Floating Technical Tag */}
                      <div className="fw-card-hud" aria-hidden="true">
                        <span className="fw-hud-tag">CASE // {work.id}</span>
                        <span className="fw-hud-client">{work.client[lang] || work.client.en}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle Technical Frame Accents */}
                <div className="fw-frame-border" aria-hidden="true" />
                <div className="fw-corner-accent top-left" aria-hidden="true" />
                <div className="fw-corner-accent top-right" aria-hidden="true" />
                <div className="fw-corner-accent bottom-left" aria-hidden="true" />
                <div className="fw-corner-accent bottom-right" aria-hidden="true" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
