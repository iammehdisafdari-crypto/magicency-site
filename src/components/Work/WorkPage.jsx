import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import WorkHero from './WorkHero';
import CaseStudiesSection from './CaseStudiesSection';
import WorkNextStep from './WorkNextStep';
import PerformanceProofSection from './PerformanceProofSection';
import CuratedPortfolioSection from './CuratedPortfolioSection';
import WorkFinalCTA from './WorkFinalCTA';
import WorkFAQ from './WorkFAQ';
import './Work.css';

export default function WorkPage() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();

  useEffect(() => {
    // Hash navigation handler
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }

    // Dynamic document title
    document.title = lang === 'fa' 
      ? 'نمونه‌آثار و پرونده‌های رشد // شواهد مستند و پورتفولیو // مجیکنسـی (MAGICENCY®)' 
      : 'Growth Case Studies & Performance Proof // Portfolio // MAGICENCY®';
  }, [lang]);

  const handleSelectCaseOrItem = (item) => {
    // Opens Magicency's existing project discovery protocol
    setIsModalOpen(true);
  };

  return (
    <div className={`work-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      
      {/* 01. HERO */}
      <WorkHero />

      {/* 02. DOCUMENTED CASE STUDIES */}
      <CaseStudiesSection onSelectCase={handleSelectCaseOrItem} />

      {/* 03. A CLEAR NEXT STEP */}
      <WorkNextStep />

      {/* 04. PERFORMANCE PROOF */}
      <PerformanceProofSection />

      {/* 05. CURATED PORTFOLIO */}
      <CuratedPortfolioSection onSelectItem={handleSelectCaseOrItem} />

      {/* 06. YOUR NEXT MOVE */}
      <WorkFinalCTA />

      {/* 07. QUESTIONS BEFORE THE NEXT STEP (FAQ) */}
      <WorkFAQ />

      {/* 08. FOOTER / EXISTING PROJECT FORM is handled globally by App.jsx */}

    </div>
  );
}
