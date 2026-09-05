import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA } from '../../data/projectsData';
import WorkHero from './WorkHero';
import WorkPointOfView from './WorkPointOfView';
import WorkFeaturedCase from './WorkFeaturedCase';
import WorkChallengeFilter from './WorkChallengeFilter';
import WorkIndex from './WorkIndex';
import WorkSelectivity from './WorkSelectivity';
import WorkCTA from './WorkCTA';
import './Work.css';

export default function WorkPage() {
  const { lang, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Dynamic document title
    document.title = lang === 'fa' 
      ? 'آرشیو پروژه‌ها و سیستم‌های رشد // مجیکنسـی (MAGICENCY®)' 
      : 'Work & Growth Systems // MAGICENCY®';
  }, [lang]);

  // Filter projects by challenge category
  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.challengeCategory === activeCategory);

  return (
    <div className={`work-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      
      {/* 01. Editorial Hero */}
      <WorkHero />

      {/* 02. The Point of View (The brief is rarely the whole problem) */}
      <WorkPointOfView />

      {/* 03. Flagship Case Study (Dominant Case 01) */}
      <WorkFeaturedCase />

      {/* 04 & 05. Challenge-Based Navigation + Editorial Work Index */}
      <section className="work-catalog-section shared-section" aria-label="Selected Work Index">
        <div className="container work-catalog-container">
          
          <div className="work-catalog-header">
            <span className="work-section-eyebrow">
              {lang === 'fa' ? 'ایندکس پرونده‌ها // دسته‌بندی موضوعی' : 'PORTFOLIO INDEX // EDITORIAL CATALOG'}
            </span>
            <h2 className="work-catalog-heading">
              {lang === 'fa' ? 'مسائل پیچیده، راه‌حل‌های سیستمی.' : 'Complex Problems, Systemic Solutions.'}
            </h2>
          </div>

          <WorkChallengeFilter 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />

          <WorkIndex projects={filteredProjects} />

        </div>
      </section>

      {/* 06. Selectivity & Credibility Strip */}
      <WorkSelectivity />

      {/* 07. Strategic Call to Action (Triggers Project Discovery) */}
      <WorkCTA />

    </div>
  );
}
