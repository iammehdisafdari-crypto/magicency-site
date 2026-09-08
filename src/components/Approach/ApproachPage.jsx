import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ApproachHero from './ApproachHero';
import RequestDeconstruction from './RequestDeconstruction';
import LivingSystemNetwork from './LivingSystemNetwork';
import TacticsToSystemShift from './TacticsToSystemShift';
import CompoundingGrowthNetwork from './CompoundingGrowthNetwork';
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
        ? 'سیستم‌عامل و متدولوژی رشد // رویکرد ما // مجیکنسـی (MAGICENCY®)' 
        : 'Growth Operating System // Our Methodology // MAGICENCY®'
    );
  }, [lang, pageMeta.title]);

  return (
    <div className={`approach-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      
      {/* 01 — Hero: Evolving System Visual (Chaos -> Connection -> Clarity) */}
      <ApproachHero />

      {/* 02 — Diagnosis: Deconstructing "I need a new website" into commercial reality */}
      <RequestDeconstruction />

      {/* 03 — The System: Living interactive network loop around central BUSINESS */}
      <LivingSystemNetwork />

      {/* 04 — The Shift: Isolated Tactics vs Connected Compounding System */}
      <TacticsToSystemShift />

      {/* 05 — Compounding: Progressive expanding ripple from 1 Decision to Scale */}
      <CompoundingGrowthNetwork />

      {/* 06 — Closing: Philosophical Statement & Project Discovery Trigger */}
      <ApproachClosingCTA />

    </div>
  );
}
