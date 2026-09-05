import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import BrandIntro from './components/Intro/BrandIntro';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SelectedWork from './components/SelectedWork/SelectedWork';
import ProblemInsight from './components/ProblemInsight/ProblemInsight';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Journal from './components/Journal/Journal';
import Footer from './components/Footer/Footer';
import GrowthProtocolModal from './components/Modal/GrowthProtocolModal';
import './styles/global.css';

function MainApp() {
  const { isRTL } = useLanguage();
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className={`magicency-app-root ${introFinished ? 'app-loaded' : 'app-loading'}`}>
      {/* Cinematic Brand Intro Preloader */}
      <BrandIntro onComplete={() => setIntroFinished(true)} />

      {/* Tactile Grain Overlay */}
      <div className="bg-grain" aria-hidden="true" />

      {/* Dynamic Floating Navigation */}
      <Header />

      {/* Main Experience Flow */}
      <main className="main-content-flow">
        {/* Phase 01: Hero Section (Vivid Motion Architecture + Mouse Fire Effect) */}
        <Hero isLoaded={introFinished} />

        {/* Phase 02: Featured Work (Sticky Scroll Showcase + 4 Projects + See All Work CTA) */}
        <SelectedWork />

        {/* Phase 03: Problem / Insight Narrative (Sticky-Scroll 4-Beat System Architecture) */}
        <ProblemInsight />

        {/* Phase 04: What We Do / Capabilities (3-Pillar Capability Architecture) */}
        <WhatWeDo />

        {/* Phase 05: Journal / Insights (Exact Vivid Motion Recreation) */}
        <Journal />
      </main>

      {/* Cinematic Closing Frame Footer */}
      <Footer />

      {/* Interactive Growth Protocol Modal */}
      <GrowthProtocolModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
