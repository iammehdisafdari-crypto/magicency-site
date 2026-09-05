import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AboutHero from './AboutHero';
import WhyWeExist from './WhyWeExist';
import ManifestoBeliefs from './ManifestoBeliefs';
import PeopleBehindSystem from './PeopleBehindSystem';
import VendorVsPartner from './VendorVsPartner';
import AmbitionCTA from './AmbitionCTA';
import './AboutPage.css';

export default function AboutPage() {
  const { lang, isRTL } = useLanguage();

  useEffect(() => {
    // Scroll to top on page mount
    window.scrollTo(0, 0);

    // Set page document title
    document.title = lang === 'fa'
      ? 'درباره ما // چرایی وجود مجیکنسـی (MAGICENCY®)'
      : 'Why Magicency Exists // About MAGICENCY®';
  }, [lang]);

  return (
    <article className={`about-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      {/* Visual Grain Background */}
      <div className="about-bg-grain" aria-hidden="true" />

      {/* 01. Minimal Cinematic Hero */}
      <AboutHero />

      {/* 02. Why Magicency Exists (Fragments → ONE SYSTEM) */}
      <WhyWeExist />

      {/* 03. What We Believe (Visual Manifesto) */}
      <ManifestoBeliefs />

      {/* 04. The People Behind the System (Authentic Human Layer & Disciplines) */}
      <PeopleBehindSystem />

      {/* 05. How We Show Up (Vendor vs Strategic Partner) */}
      <VendorVsPartner />

      {/* 06. The Ambition & Final CTA (Closed-Loop Visual & Project Discovery Trigger) */}
      <AmbitionCTA />
    </article>
  );
}
