import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function BlogHero({ searchQuery, setSearchQuery }) {
  const { t, isRTL } = useLanguage();
  const hero = t.blog?.hero || {};

  return (
    <section className="blog-hero-section" aria-label="Blog Editorial Hero">
      {/* Editorial Decorative Grid Lines */}
      <div className="editorial-grid-lines" aria-hidden="true">
        <div className="grid-line horizontal top" />
        <div className="grid-line horizontal bottom" />
        <div className="grid-line vertical left" />
        <div className="grid-line vertical right" />
      </div>

      <div className="container blog-hero-container">
        {/* Top Editorial Metadata Banner */}
        <div className="editorial-meta-header">
          <div className="meta-left">
            <span className="editorial-issue-badge">{hero.eyebrow || 'INSIGHTS // VOL. 04'}</span>
            <span className="meta-dot">•</span>
            <span className="editorial-date-badge">{isRTL ? 'شهریور ۱۴۰۵' : 'AUTUMN 2026'}</span>
          </div>
          <div className="meta-right">
            <span className="editorial-curator-tag">{isRTL ? 'نشریه تحلیلی مجیکنسـی' : 'MAGICENCY EDITORIAL DISPATCH'}</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="blog-headline-wrap">
          <h1 className="blog-hero-title">
            <div className="hero-mask">
              <motion.span
                className="hero-line"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASING.CINEMATIC }}
              >
                {hero.headlineLine1}
              </motion.span>
            </div>
            <div className="hero-mask">
              <motion.span
                className="hero-line text-gradient-amber"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.22, ease: EASING.CINEMATIC }}
              >
                {hero.headlineLine2}
              </motion.span>
            </div>
          </h1>

          {/* Subline */}
          <motion.div
            className="blog-hero-sub-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASING.PRIMARY }}
          >
            <p className="blog-hero-secondary">
              {hero.subline}
            </p>
          </motion.div>
        </div>

        {/* Minimalist Live Search Box */}
        <motion.div
          className="blog-search-container"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASING.PRIMARY }}
        >
          <div className="editorial-search-bar">
            <span className="search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={hero.searchPlaceholder || 'Search insights, essays, or field notes...'}
              className="editorial-search-input"
              aria-label="Search insights"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
