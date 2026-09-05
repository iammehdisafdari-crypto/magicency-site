import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { BLOG_CATEGORIES } from '../../data/blogData';

export default function TopicFilterBar({ activeCategory, setActiveCategory, articlesCountByCategory }) {
  const { isRTL } = useLanguage();

  return (
    <nav className="topic-filter-nav-bar" aria-label="Editorial Topic Filters">
      <div className="container">
        <div className="topic-filter-track">
          {BLOG_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const label = isRTL ? cat.labelFa : cat.labelEn;
            const count = articlesCountByCategory[cat.id] ?? 0;

            return (
              <button
                key={cat.id}
                type="button"
                className={`topic-pill-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
              >
                <span className="topic-name">{label}</span>
                <span className="topic-count">0{count}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeTopicUnderline"
                    className="topic-active-line"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
