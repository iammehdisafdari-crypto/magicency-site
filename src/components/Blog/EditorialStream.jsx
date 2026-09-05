import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function EditorialStream({ articles, onSelectArticle }) {
  const { t, isRTL } = useLanguage();
  const s = t.blog?.stream || {};
  const [hoveredArticleId, setHoveredArticleId] = useState(null);

  const hoveredArticle = articles.find((a) => a.id === hoveredArticleId);

  return (
    <section className="editorial-stream-section" aria-label="Editorial Stream Archive">
      <div className="container">
        {/* Stream Section Topline */}
        <div className="stream-header-topline">
          <span className="stream-badge">{s.badge || 'EDITORIAL ARCHIVE'}</span>
          <span className="stream-count-tag">
            {isRTL ? `${articles.length} مقاله منتشر شده` : `${articles.length} PUBLICATIONS`}
          </span>
        </div>

        {/* Empty state if search returned 0 */}
        {articles.length === 0 ? (
          <div className="stream-empty-state">
            <p>{s.noResults || 'No insights found matching your query.'}</p>
          </div>
        ) : (
          <div className="stream-interactive-arena">
            {/* The Editorial List */}
            <div className="editorial-articles-list" role="list">
              {articles.map((art, idx) => {
                const isHovered = hoveredArticleId === art.id;
                const title = isRTL ? art.titleFa : art.titleEn;
                const excerpt = isRTL ? art.excerptFa : art.excerptEn;
                const category = isRTL ? art.categoryLabelFa : art.categoryLabelEn;
                const format = isRTL ? art.formatLabelFa : art.formatLabelEn;
                const date = isRTL ? art.dateFa : art.date;
                const readTime = isRTL ? art.readTimeFa : art.readTime;

                return (
                  <motion.div
                    key={art.id}
                    role="listitem"
                    className={`editorial-stream-item ${isHovered ? 'active-hover' : ''}`}
                    onMouseEnter={() => setHoveredArticleId(art.id)}
                    onMouseLeave={() => setHoveredArticleId(null)}
                    onClick={() => onSelectArticle(art)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectArticle(art);
                      }
                    }}
                  >
                    {/* Index Number */}
                    <div className="item-index-col">
                      <span className="index-number">{art.number || `0${idx + 1}`}</span>
                    </div>

                    {/* Content Center */}
                    <div className="item-content-col">
                      <div className="item-meta-row">
                        <span className="item-cat-tag">{category}</span>
                        <span className="item-format-tag">{format}</span>
                        <span className="item-meta-dot">•</span>
                        <span className="item-read-time">{readTime}</span>
                        <span className="item-meta-dot">•</span>
                        <span className="item-date">{date}</span>
                      </div>

                      <h3 className="item-headline">{title}</h3>
                      <p className="item-excerpt">{excerpt}</p>
                    </div>

                    {/* Arrow / Action Column */}
                    <div className="item-arrow-col" aria-hidden="true">
                      <span className="item-arrow-circle">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          {isRTL ? (
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                          ) : (
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          )}
                        </svg>
                      </span>
                    </div>

                    {/* Mobile Inline Media Thumbnail */}
                    <div className="item-mobile-thumb" aria-hidden="true">
                      <img src={art.coverImage || '/journal-1.jpg'} alt="" loading="lazy" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Floating Preview Pane (Restrained and sophisticated) */}
            <div className="stream-desktop-preview-pane" aria-hidden="true">
              <AnimatePresence mode="wait">
                {hoveredArticle ? (
                  <motion.div
                    key={hoveredArticle.id}
                    className="preview-floating-card"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="preview-img-crop">
                      <img
                        src={hoveredArticle.coverImage || '/journal-1.jpg'}
                        alt=""
                        className="preview-img"
                      />
                      <div className="preview-gradient-scrim" />
                      <div className="preview-floating-hud">
                        <span className="hud-dot" />
                        <span>{isRTL ? hoveredArticle.formatLabelFa : hoveredArticle.formatLabelEn}</span>
                      </div>
                    </div>
                    <div className="preview-caption">
                      <span className="preview-cat">
                        {isRTL ? hoveredArticle.categoryLabelFa : hoveredArticle.categoryLabelEn}
                      </span>
                      <p className="preview-quote">
                        {isRTL ? hoveredArticle.pullQuoteFa : hoveredArticle.pullQuoteEn}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="preview-placeholder-frame">
                    <div className="placeholder-crosshair center" />
                    <span className="placeholder-text">
                      {isRTL ? 'یک مقاله را انتخاب کنید' : 'SELECT AN INSIGHT TO EXPLORE'}
                    </span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
