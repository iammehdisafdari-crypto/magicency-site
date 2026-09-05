import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function FeaturedStory({ article, onSelectArticle }) {
  const { t, isRTL } = useLanguage();
  const f = t.blog?.featured || {};

  if (!article) return null;

  const title = isRTL ? article.titleFa : article.titleEn;
  const excerpt = isRTL ? article.excerptFa : article.excerptEn;
  const category = isRTL ? article.categoryLabelFa : article.categoryLabelEn;
  const format = isRTL ? article.formatLabelFa : article.formatLabelEn;
  const date = isRTL ? article.dateFa : article.date;
  const readTime = isRTL ? article.readTimeFa : article.readTime;

  return (
    <section className="featured-story-section" aria-label="Featured Editorial Story">
      <div className="container">
        <motion.article 
          className="featured-story-asymmetric-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => onSelectArticle(article)}
        >
          {/* Media Column */}
          <div className="featured-media-container">
            <div className="featured-image-crop">
              <img
                src={article.coverImage || '/journal-1.jpg'}
                alt={title}
                className="featured-img"
                loading="eager"
              />
              <div className="featured-media-overlay" />
              <div className="featured-hud-badge">
                <span className="hud-pulse" />
                <span className="hud-label">{f.badge || 'FEATURED STORY'}</span>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="featured-content-container">
            <div className="featured-meta-bar">
              <span className="featured-cat-tag">{category}</span>
              <span className="featured-format-tag">{format}</span>
              <span className="featured-sep">•</span>
              <span className="featured-read-time">{readTime}</span>
            </div>

            <h2 className="featured-story-title">
              {title}
            </h2>

            <p className="featured-story-excerpt">
              {excerpt}
            </p>

            <div className="featured-action-bar">
              <button
                type="button"
                className="featured-read-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectArticle(article);
                }}
                aria-label={`${f.readArticle || 'READ ARTICLE'} - ${title}`}
              >
                <span className="read-btn-text">{f.readArticle || 'READ ARTICLE'}</span>
                <span className="read-btn-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    {isRTL ? (
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    ) : (
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    )}
                  </svg>
                </span>
              </button>

              <span className="featured-date-stamp">{date}</span>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
