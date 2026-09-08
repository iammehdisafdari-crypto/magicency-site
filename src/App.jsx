import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import BrandIntro from './components/Intro/BrandIntro';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SelectedWork from './components/SelectedWork/SelectedWork';
import ProblemInsight from './components/ProblemInsight/ProblemInsight';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Journal from './components/Journal/Journal';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';

// Dynamic imports for subpages — code-splits CSS and JS, reducing main bundle unused CSS
const WorkPage = lazy(() => import('./components/Work/WorkPage'));
const ApproachPage = lazy(() => import('./components/Approach/ApproachPage'));
const CapabilitiesPage = lazy(() => import('./components/Capabilities/CapabilitiesPage'));
const BlogPage = lazy(() => import('./components/Blog/BlogPage'));
const AboutPage = lazy(() => import('./components/About/AboutPage'));
const NotFoundPage = lazy(() => import('./components/NotFound/NotFoundPage'));

// Lazy load user-triggered modal dialogs
const ProjectDiscovery = lazy(() => import('./components/ProjectDiscovery/ProjectDiscovery'));
import { initGA } from './utils/analytics';

import './styles/global.css';

function MainApp() {
  const { isRTL, isModalOpen } = useLanguage();
  const { isWorkPage, isApproachPage, isCapabilitiesPage, isBlogPage, isAboutPage, isNotFound } = useRouter();
  const [introFinished, setIntroFinished] = useState(() => typeof window === 'undefined');

  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className={`magicency-app-root ${introFinished ? 'app-loaded' : 'app-loading'}`}>
      {/* Screen Reader Skip Navigation Link */}
      <a href="#main" className="skip-to-content">Skip to content</a>

      {/* Cinematic Brand Intro Preloader */}
      <BrandIntro onComplete={() => setIntroFinished(true)} />

      {/* Tactile Grain Overlay */}
      <div className="bg-grain" aria-hidden="true" />

      {/* Dynamic Floating Navigation */}
      <Header />

      {/* Main Experience Flow */}
      <main id="main" className="main-content-flow">
        <Suspense fallback={null}>
          {isNotFound ? (
            <NotFoundPage />
          ) : isWorkPage ? (
            <WorkPage />
          ) : isApproachPage ? (
            <ApproachPage />
          ) : isCapabilitiesPage ? (
            <CapabilitiesPage />
          ) : isBlogPage ? (
            <BlogPage />
          ) : isAboutPage ? (
            <AboutPage />
          ) : (
            <>
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

            {/* Phase 06: Final Editorial Conversion Statement */}
            <FinalCTA />
          </>
        )}
        </Suspense>
      </main>

      {/* Cinematic Closing Frame Footer */}
      <Footer />

      {/* Interactive Growth Protocol Modal */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ProjectDiscovery />
        </Suspense>
      )}
    </div>
  );
}

export default function App({ initialPath, initialLang } = {}) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <RouterProvider initialPath={initialPath}>
        <MainApp />
      </RouterProvider>
    </LanguageProvider>
  );
}
