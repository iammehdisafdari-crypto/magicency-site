import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { CASE_STUDY_FILTERS, WORK_CASES } from '../../data/workCases';
import { EASING } from '../motion';

export default function CaseStudiesSection({ onSelectCase }) {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const content = {
    en: {
      eyebrow: 'SELECTED CASE STUDIES',
      heading: 'From the challenge to the work and outcome.',
      lead: 'Documented client engagements connecting strategic diagnosis, performance media, user experience, and measurable business growth.',
      readCase: 'Read the case study',
      scopeLabel: 'Scope',
      statusLabel: 'Engagement',
      outcomeLabel: 'Key Metric',
      noCases: 'No case studies found for this category.'
    },
    fa: {
      eyebrow: 'پرونده‌های مستند برگزیده',
      headline: 'از ریشه‌یابی مسئله تا مهندسی اجرا و نتیجه.',
      lead: 'مستندات پروژه‌های واقعی با پیوند میان تشخیص استراتژیک، مدیا، تجربه دیجیتال و خروجی‌های ملموس تجاری.',
      readCase: 'مطالعه پرونده موردی',
      scopeLabel: 'دامنه اجرا',
      statusLabel: 'مدل همکاری',
      outcomeLabel: 'شاخص کلیدی',
      noCases: 'پرونده‌ای در این دسته‌بندی یافت نشد.'
    }
  };

  const c = content[lang] || content.en;

  const filteredCases = useMemo(() => {
    if (activeFilter === 'all') return WORK_CASES;
    return WORK_CASES.filter((item) => item.filterCategory === activeFilter);
  }, [activeFilter]);

  const handleCaseClick = (e, project) => {
    e.preventDefault();
    if (onSelectCase) {
      onSelectCase(project);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section id="case-studies" className="work-cases-section shared-section" aria-labelledby="work-cases-heading">
      <div className="container work-cases-container">
        
        {/* Section Header */}
        <header className="work-cases-header">
          <div className="work-cases-header-left">
            <span className="work-kicker">
              <span className="work-kicker-dot" />
              <span>{c.eyebrow}</span>
            </span>
            <h2 id="work-cases-heading" className="work-cases-heading">
              {c.heading || c.headline}
            </h2>
            <p className="work-cases-lead">
              {c.lead}
            </p>
          </div>

          {/* Functional Horizontal Filter Bar */}
          <nav className="work-case-filters" aria-label="Filter case studies">
            {CASE_STUDY_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              const filterLabel = filter.label[lang] || filter.label.en;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`work-filter-pill ${isActive ? 'is-active' : ''}`}
                  aria-pressed={isActive}
                >
                  <span>{filterLabel}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="activeFilterIndicator"
                      className="work-filter-indicator"
                      transition={{ duration: 0.25, ease: EASING.PRIMARY }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </header>

        {/* Editorial Case Study List */}
        <div className="work-case-list" role="list">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((project, idx) => {
              const categoryStr = project.category[lang] || project.category.en;
              const typeStr = project.type[lang] || project.type.en;
              const durationStr = project.duration[lang] || project.duration.en;
              const statusStr = project.status[lang] || project.status.en;
              const titleStr = project.title[lang] || project.title.en;
              const descStr = project.description[lang] || project.description.en;
              const scopeStr = project.scope[lang] || project.scope.en;
              const engagementStr = project.engagement ? (project.engagement[lang] || project.engagement.en) : statusStr;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: EASING.PRIMARY }}
                  className={`work-case-row ${idx === 0 && activeFilter === 'all' ? 'work-case-row--dominant' : ''}`}
                  role="listitem"
                >
                  {/* Left: Media Display */}
                  <a 
                    href={`#case-${project.slug}`} 
                    onClick={(e) => handleCaseClick(e, project)}
                    className="work-case-media"
                    aria-label={titleStr}
                  >
                    <div className="work-case-media-frame">
                      <img 
                        src={project.image} 
                        alt={titleStr} 
                        className="work-case-image"
                        loading={idx < 2 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                      <div className="work-case-media-overlay" />
                      <span className="work-case-num-tag">{project.num}</span>
                    </div>
                  </a>

                  {/* Right: Editorial Content Area */}
                  <div className="work-case-body">
                    {/* Meta strip */}
                    <div className="work-case-meta-strip">
                      <span className="work-case-tag">{categoryStr}</span>
                      <span className="work-case-sep">/</span>
                      <span className="work-case-duration">{typeStr}</span>
                      <span className="work-case-sep">/</span>
                      <span className="work-case-status">{durationStr}</span>
                    </div>

                    {/* Title */}
                    <h3 className="work-case-title">
                      <a href={`#case-${project.slug}`} onClick={(e) => handleCaseClick(e, project)}>
                        {titleStr}
                      </a>
                    </h3>

                    {/* Short editorial description */}
                    <p className="work-case-description">
                      {descStr}
                    </p>

                    {/* Compact metadata / proof area */}
                    <div className="work-case-proof-grid">
                      <div className="work-proof-item">
                        <span className="work-proof-label">{c.scopeLabel}</span>
                        <span className="work-proof-val">{scopeStr}</span>
                      </div>
                      <div className="work-proof-item">
                        <span className="work-proof-label">{c.statusLabel}</span>
                        <span className="work-proof-val">{engagementStr}</span>
                      </div>
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="work-proof-item work-proof-item--highlight">
                          <span className="work-proof-label">{project.metrics[0].label[lang] || project.metrics[0].label.en}</span>
                          <span className="work-proof-val work-proof-val--metric">{project.metrics[0].value}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Link */}
                    <div className="work-case-action">
                      <a 
                        href={`#case-${project.slug}`} 
                        onClick={(e) => handleCaseClick(e, project)}
                        className="work-inline-link"
                      >
                        <span>{c.readCase}</span>
                        <span className="work-arrow" aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>

          {filteredCases.length === 0 && (
            <div className="work-no-results">
              <p>{c.noCases}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
