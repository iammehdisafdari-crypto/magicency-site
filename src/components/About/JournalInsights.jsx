import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import CTA from '../Common/CTA';

export default function JournalInsights() {
  const { lang, isRTL } = useLanguage();
  const journal = ABOUT_DATA[lang]?.journal || ABOUT_DATA.en.journal;
  const articles = journal.articles || [];

  return (
    <section 
      id="section-journal" 
      className={`about-chapter-section journal-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 09: Journal and Insights Resource Hub"
    >
      <div className="container journal-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{journal.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{journal.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{journal.chapterTag}</span>
          </div>
        </div>

        <div className="journal-intro">
          <h2 className="journal-headline">{journal.headline}</h2>
          <p className="journal-lead">{journal.lead}</p>
        </div>

        {/* Large Editorial Article Showcase (Not a generic card grid) */}
        <div className="journal-editorial-showcase" role="list">
          {articles.map((art) => (
            <article key={art.id} className="journal-editorial-entry" role="listitem">
              <div className="entry-media-column">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="entry-cover-photo"
                  width="700"
                  height="450"
                  loading="lazy"
                  decoding="async"
                />
                <div className="entry-media-gradient" />
                <span className="entry-category-badge">{art.category}</span>
              </div>

              <div className="entry-content-column">
                <div className="entry-meta-top">
                  <span className="entry-read-time">{art.readTime}</span>
                  <span className="entry-intel-dot">● ESSAY</span>
                </div>

                <h3 className="entry-title">{art.title}</h3>
                <p className="entry-summary">{art.summary}</p>

                <div className="entry-action-row">
                  <CTA
                    variant="text-link"
                    size="compact"
                    href={art.slug}
                    trackingName="read_article"
                    trackingLocation="about_journal_section"
                    arrowDirection="up-right"
                    ariaLabel={isRTL ? 'مطالعه جستار در ژورنال' : 'READ ESSAY IN JOURNAL'}
                  >
                    {isRTL ? 'مطالعه جستار در ژورنال' : 'READ ESSAY IN JOURNAL'}
                  </CTA>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Hub Anchor */}
        <div className="journal-bottom-anchor">
          <CTA
            variant="secondary"
            size="compact"
            href="/blog"
            trackingName="visit_full_journal"
            trackingLocation="about_journal_bottom"
            arrowDirection="up-right"
            ariaLabel={journal.cta}
            className="journal-hub-cta"
          >
            {journal.cta}
          </CTA>
        </div>

      </div>
    </section>
  );
}
