import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SectionNavigator from './SectionNavigator';
import AboutHero from './AboutHero';
import WhyWeExist from './WhyWeExist';
import ProofSection from './ProofSection';
import MissionVisionValues from './MissionVisionValues';
import PeopleBehindSystem from './PeopleBehindSystem';
import PhilosophySection from './PhilosophySection';
import HowWeWorkBridge from './HowWeWorkBridge';
import SelectedExperience from './SelectedExperience';
import JournalInsights from './JournalInsights';
import CollaborationSection from './CollaborationSection';
import AmbitionCTA from './AmbitionCTA';
import './AboutPage.css';

export default function AboutPage() {
  const { lang, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = lang === 'fa'
      ? 'درباره مجیکنسـی // آژانس پرفورمنس مارکتینگ و معماری رشد دیجیتال'
      : 'About Magicency // Performance Marketing & Digital Growth Agency';
  }, [lang]);

  return (
    <article className={`about-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      {/* 00. Sticky Desktop Section Navigator */}
      <SectionNavigator />

      {/* Ambient Grain Background */}
      <div className="about-bg-grain" aria-hidden="true" />

      {/* 01 — HERO / ABOUT US */}
      <AboutHero />

      {/* 02 — OUR DNA / WHY MAGICENCY EXISTS */}
      <WhyWeExist />

      {/* 03 — PROOF / SCALE / NUMBERS */}
      <ProofSection />

      {/* 04 — MISSION / VISION / VALUES */}
      <MissionVisionValues />

      {/* 05 — THE PEOPLE BEHIND THE SYSTEM */}
      <PeopleBehindSystem />

      {/* 06 — OUR FIRM / WHAT WE BELIEVE */}
      <PhilosophySection />

      {/* 07 — HOW WE WORK (6-LAYER BRIDGE) */}
      <HowWeWorkBridge />

      {/* 08 — SELECTED EXPERIENCE (CLIENTS / CREDIBILITY) */}
      <SelectedExperience />

      {/* 09 — JOURNAL / INSIGHTS (RESOURCE HUB) */}
      <JournalInsights />

      {/* 10 — BUILD WITH US / COLLABORATION */}
      <CollaborationSection />

      {/* 11 — FINAL CTA */}
      <AmbitionCTA />
    </article>
  );
}
