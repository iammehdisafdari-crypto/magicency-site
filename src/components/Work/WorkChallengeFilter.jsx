import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { CHALLENGE_CATEGORIES } from '../../data/projectsData';
import { EASING } from '../motion';

export default function WorkChallengeFilter({ activeCategory, onSelectCategory }) {
  const { lang, isRTL } = useLanguage();
  const categories = CHALLENGE_CATEGORIES[lang] || CHALLENGE_CATEGORIES.en;

  return (
    <div className="work-filter-container">
      <div className="work-filter-eyebrow-row">
        <span className="work-filter-section-title">
          {lang === 'fa' ? 'چه چیزی در کسب‌وکار نیاز به تحول داشت؟' : 'WHAT NEEDED TO CHANGE?'}
        </span>
        <span className="work-filter-hint">
          {lang === 'fa' ? 'فیلتر بر اساس چالش واقعی بیزنس' : 'Filter by Business Challenge'}
        </span>
      </div>

      <nav className="work-filter-nav" aria-label="Challenge Categories">
        <div className="work-filter-track">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`work-filter-btn ${isActive ? 'is-active' : ''}`}
                aria-pressed={isActive}
              >
                <span className="filter-btn-code">{cat.code}</span>
                <span className="filter-btn-label">{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterIndicator"
                    className="filter-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Description of active challenge */}
      <div className="work-filter-active-desc">
        {(() => {
          const current = categories.find((c) => c.id === activeCategory) || categories[0];
          return (
            <span className="filter-desc-text">
              <span className="desc-bullet">→</span> {current.desc}
            </span>
          );
        })()}
      </div>
    </div>
  );
}
