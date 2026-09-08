import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { BLOG_ARTICLES } from '../../data/blogData';

export default function ArticleReaderModal({ article, onClose, onSelectArticle }) {
  const { t, isRTL } = useLanguage();
  const { navigate } = useRouter();
  const r = t.blog?.reader || {};
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Disable body scroll when reader is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (article) {
      const prevTitle = document.title;
      const articleTitle = isRTL ? article.titleFa : article.titleEn;
      document.title = `${articleTitle} | Magicency`;
      return () => {
        document.title = prevTitle;
      };
    }
  }, [article, isRTL]);

  if (!article) return null;

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  const title = isRTL ? article.titleFa : article.titleEn;
  const excerpt = isRTL ? article.excerptFa : article.excerptEn;
  const category = isRTL ? article.categoryLabelFa : article.categoryLabelEn;
  const format = isRTL ? article.formatLabelFa : article.formatLabelEn;
  const date = isRTL ? article.dateFa : article.date;
  const readTime = isRTL ? article.readTimeFa : article.readTime;
  const author = isRTL ? article.authorFa : article.authorEn;
  const pullQuote = isRTL ? article.pullQuoteFa : article.pullQuoteEn;
  const content = isRTL ? article.contentFa : article.contentEn;
  const keyTakeaways = isRTL ? article.keyTakeawaysFa : article.keyTakeawaysEn;
  const strategicReferences = article.strategicReferences || [];

  // Intelligent related articles: prioritize same category, fill up to 3 articles
  const relatedArticles = (() => {
    const sameCat = BLOG_ARTICLES.filter((a) => a.id !== article.id && a.category === article.category);
    const otherCat = BLOG_ARTICLES.filter((a) => a.id !== article.id && a.category !== article.category);
    return [...sameCat, ...otherCat].slice(0, 3);
  })();

  return (
    <div className="article-reader-overlay" role="dialog" aria-modal="true" aria-label={title}>
      {/* Sticky Top Reading Progress Bar */}
      <div className="reading-progress-track">
        <div className="reading-progress-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Reader Fixed Top Nav Bar */}
      <header className="reader-top-bar">
        <button
          type="button"
          onClick={onClose}
          className="reader-back-btn"
          aria-label={r.backToBlog || 'Back to Insights'}
        >
          <span>{r.backToBlog || '← BACK TO ALL INSIGHTS'}</span>
        </button>

        <div className="reader-top-meta">
          <span className="reader-tag">{category}</span>
          <span className="reader-sep">•</span>
          <span className="reader-time">{readTime}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="reader-close-circle-btn"
          aria-label="Close"
        >
          ×
        </button>
      </header>

      {/* Reader Scrollable Document Viewport */}
      <div className="reader-scroll-viewport" onScroll={handleScroll}>
        <article className="reader-document-container">
          
          {/* Article Header & Typography */}
          <header className="article-doc-header">
            <div className="doc-meta-tags">
              <span className="doc-cat-pill">{category}</span>
              <span className="doc-format-pill">{format}</span>
              <span className="doc-date-stamp">{date}</span>
            </div>

            <h1 className="article-doc-title">
              {title}
            </h1>

            <p className="article-doc-lead">
              {excerpt}
            </p>

            <div className="article-author-row">
              <span className="author-bullet" />
              <span className="author-name">{isRTL ? `به قلم: ${author}` : `By ${author}`}</span>
            </div>
          </header>

          {/* Monumental Hero Media Crop */}
          {article.coverImage && (
            <div className="article-doc-media">
              <img src={article.coverImage} alt={title} className="doc-hero-img" width="1200" height="630" loading="eager" decoding="async" />
              <div className="doc-media-caption">
                <span>MAGICENCY EDITORIAL ARCHIVE // {article.number}</span>
              </div>
            </div>
          )}

          {/* Formatted Article Body */}
          <div className="article-doc-body">
            {content && content.map((section, idx) => (
              <div key={idx} className="doc-body-section">
                <h2 className="doc-subheading">{section.heading}</h2>
                <p className="doc-paragraph">{section.text}</p>
              </div>
            ))}

            {/* Strategic Pull Quote */}
            {pullQuote && (
              <blockquote className="article-doc-pullquote">
                <p className="pullquote-text">“{pullQuote}”</p>
                <cite className="pullquote-source">— {author}</cite>
              </blockquote>
            )}

            {/* Key Strategic Takeaways Box */}
            {keyTakeaways && (
              <div className="article-takeaways-box">
                <h3 className="takeaways-title">{r.keyTakeaways || 'KEY TAKEAWAYS'}</h3>
                <ul className="takeaways-list">
                  {keyTakeaways.map((item, i) => (
                    <li key={i} className="takeaways-item">
                      <span className="takeaway-bullet">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Strategic Architecture Contextual References */}
          {strategicReferences.length > 0 && (
            <div className="article-strategic-references">
              <h3 className="strategic-references-title">
                {isRTL ? 'پیوندها و مراجع راهبردی' : 'STRATEGIC ARCHITECTURE REFERENCES'}
              </h3>
              <div className="strategic-references-list">
                {strategicReferences.map((ref, idx) => {
                  const refLabel = isRTL ? ref.labelFa : ref.labelEn;
                  const refContext = isRTL ? ref.contextFa : ref.contextEn;
                  return (
                    <a
                      key={idx}
                      href={ref.url}
                      className="strategic-ref-card"
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        if (navigate) navigate(ref.url);
                      }}
                    >
                      <div className="strategic-ref-content">
                        <span className="strategic-ref-label">{refLabel}</span>
                        <span className="strategic-ref-context">{refContext}</span>
                      </div>
                      <span className="strategic-ref-arrow">{isRTL ? '←' : '→'}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related Articles Footer */}
          {relatedArticles.length > 0 && (
            <footer className="article-related-footer">
              <h3 className="related-title">{r.relatedArticles || (isRTL ? 'مقالات مرتبط' : 'RELATED INSIGHTS')}</h3>
              <div className="related-articles-grid">
                {relatedArticles.map((rel) => {
                  const relTitle = isRTL ? rel.titleFa : rel.titleEn;
                  const relCat = isRTL ? rel.categoryLabelFa : rel.categoryLabelEn;
                  return (
                    <a
                      key={rel.id}
                      href={`/blog/${rel.slug}`}
                      className="related-article-card"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectArticle(rel);
                        const viewport = document.querySelector('.reader-scroll-viewport');
                        if (viewport) viewport.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span className="related-cat">{relCat}</span>
                      <h4 className="related-name">{relTitle}</h4>
                      <span className="related-arrow">→</span>
                    </a>
                  );
                })}
              </div>
            </footer>
          )}

        </article>
      </div>
    </div>
  );
}
