import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PORTFOLIO_ITEMS } from '../../data/portfolioItems';
import { EASING } from '../motion';

export default function CuratedPortfolioSection({ onSelectItem }) {
  const { lang, setIsModalOpen } = useLanguage();

  const content = {
    en: {
      eyebrow: 'CURATED PORTFOLIO',
      heading: 'More selected work.',
      lead: 'Selected projects with visual material demonstrating execution, design craft, and brand fidelity without requiring a full documented case study.',
      note: 'The following visual works represent client production files and deployed brand assets, not unverified claims.'
    },
    fa: {
      eyebrow: 'پورتفولیوی گزیده آثار',
      heading: 'مجموعه آثار و تجربیات برگزیده.',
      lead: 'پروژه‌های منتخبی که خروجی بصری و کیفیت دیزاین آن‌ها کیفیت اجرا را نشان می‌دهد، بدون آنکه نیازی به مستندسازی تمام جزئیات باشد.',
      note: 'تصاویر زیر فایل‌های واقعی تولید و پیاده‌سازی شده برای برندها هستند و صرفاً جنبه نمایشی ندارند.'
    }
  };

  const c = content[lang] || content.en;

  const handleClick = (e, item) => {
    e.preventDefault();
    if (onSelectItem) {
      onSelectItem(item);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="work-curated-section shared-section" aria-labelledby="work-curated-heading">
      <div className="container work-curated-container">
        
        {/* Header */}
        <header className="work-curated-header">
          <span className="work-kicker">
            <span className="work-kicker-dot" />
            <span>{c.eyebrow}</span>
          </span>
          <h2 id="work-curated-heading" className="work-curated-heading">
            {c.heading}
          </h2>
          <p className="work-curated-lead">
            {c.lead}
          </p>
        </header>

        {/* 80% Visual / 20% Text Editorial Grid */}
        <div className="work-curated-grid">
          {PORTFOLIO_ITEMS.map((item, idx) => {
            const titleStr = item.title[lang] || item.title.en;
            const catStr = item.category[lang] || item.category.en;
            const statusStr = item.status[lang] || item.status.en;

            return (
              <motion.figure 
                key={item.id}
                className={`work-curated-tile work-curated-tile--${idx % 3}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: EASING.PRIMARY }}
              >
                <a 
                  href={`#portfolio-${item.slug}`} 
                  onClick={(e) => handleClick(e, item)}
                  className="work-curated-link"
                  aria-label={`${titleStr} — ${catStr}`}
                >
                  <div className="work-curated-media-wrap">
                    <img 
                      src={item.image} 
                      alt={titleStr} 
                      className="work-curated-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="work-curated-hover-overlay">
                      <span className="work-curated-hover-tag">{statusStr}</span>
                    </div>
                  </div>
                </a>

                <figcaption className="work-curated-caption">
                  <div className="work-curated-caption-main">
                    <strong className="work-curated-title">{titleStr}</strong>
                    <span className="work-curated-category">{catStr}</span>
                  </div>
                  <div className="work-curated-caption-meta">
                    <span className="work-curated-year">{item.year}</span>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        {/* Bottom Editorial Note */}
        <p className="work-curated-footer-note">
          {c.note}
        </p>

      </div>
    </section>
  );
}
