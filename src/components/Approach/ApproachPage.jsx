import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ApproachHero from './ApproachHero';
import DefinitionStatement from './DefinitionStatement';
import SystemNotSilos from './SystemNotSilos';
import OperatingModelLayers from './OperatingModelLayers';
import AgencyComparison from './AgencyComparison';
import PrincipleQuote from './PrincipleQuote';
import ApproachFAQ from './ApproachFAQ';
import ApproachClosingCTA from './ApproachClosingCTA';
import './Approach.css';

export default function ApproachPage() {
  const { lang, isRTL, t } = useLanguage();
  const pageMeta = t.approach?.pageMeta || {};

  useEffect(() => {
    // Reset window scroll to top on mount
    window.scrollTo(0, 0);

    // Dynamic document title
    document.title = pageMeta.title || (
      lang === 'fa' 
        ? 'معماری رشد و سیستم‌عامل کسب‌وکار // رویکرد ما // مجیکنسـی (MAGICENCY®)' 
        : 'Approach // Growth Architecture // MAGICENCY®'
    );
  }, [lang, pageMeta.title]);

  return (
    <div className={`approach-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      
      {/* 01 — Hero & Architecture Board: Growth isn't a channel. It's an operating system. */}
      <ApproachHero />

      {/* 02 — The Definition: Growth is not a campaign. It is a system of connected decisions. */}
      <DefinitionStatement />

      {/* 03 — The Architecture: Every growth problem has an architecture behind it. (Customer / Offer / System) */}
      <SystemNotSilos />

      {/* 04 — The Methodology: How the system operates. (Split sticky + 6 stacked layers) */}
      <OperatingModelLayers />

      {/* 05 — The Shift: A different way of working. (Comparison Table) */}
      <AgencyComparison />

      {/* 06 — The Principle: Marketing is the execution layer. Growth architecture is the decision system. */}
      <PrincipleQuote />

      {/* 07 — Frequent Questions: Understanding the approach. */}
      <ApproachFAQ />

      {/* 08 — Next Step: Your business may not need more marketing. It may need a better architecture. */}
      <ApproachClosingCTA />

    </div>
  );
}
