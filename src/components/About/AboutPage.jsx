import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ScrollProgress from './ScrollProgress';
import SectionNavigator from './SectionNavigator';
import AboutHero from './AboutHero';
import BeliefSection from './BeliefSection';
import MagicencySystem from './MagicencySystem';
import CapabilitiesInteractive from './CapabilitiesInteractive';
import ApproachNarrative from './ApproachNarrative';
import ProofSection from './ProofSection';
import PeopleBehindSystem from './PeopleBehindSystem';
import FAQSection from './FAQSection';
import AmbitionCTA from './AmbitionCTA';
import './AboutPage.css';

export default function AboutPage() {
  const { lang, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = lang === 'fa'
      ? 'درباره مجیکنسـی // داستان برند، فلسفه و بنیان‌گذار'
      : 'About Magicency // Studio, Philosophy & Founder';
  }, [lang]);

  return (
    <article className={`about-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      {/* 00. Global Scroll Progress Tracker */}
      <ScrollProgress />

      {/* 00. Sticky Desktop Section Navigator */}
      <SectionNavigator />

      {/* Ambient Grain Background */}
      <div className="about-bg-grain" aria-hidden="true" />

      {/* 01 — WHO WE ARE */}
      <AboutHero />

      {/* 02 — THE BELIEF */}
      <BeliefSection />

      {/* 03 — THE MAGICENCY SYSTEM */}
      <MagicencySystem />

      {/* 04 — WHAT WE BRING (CAPABILITIES) */}
      <CapabilitiesInteractive />

      {/* 05 — OUR APPROACH */}
      <ApproachNarrative />

      {/* 06 — PROOF */}
      <ProofSection />

      {/* 07 — THE PEOPLE */}
      <PeopleBehindSystem />

      {/* 08 — FAQ */}
      <FAQSection />

      {/* 09 — FINAL CTA */}
      <AmbitionCTA />
    </article>
  );
}
