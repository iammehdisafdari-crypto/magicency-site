import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeatureWork from './components/FeatureWork/FeatureWork';
import ProblemInsight from './components/ProblemInsight/ProblemInsight';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import BuiltForCompoundingGrowth from './components/CompoundingGrowth/BuiltForCompoundingGrowth';
import Journal from './components/Journal/Journal';
import FAQSection from './components/About/FAQSection';
import ScrollProgress from './components/About/ScrollProgress';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';

// Static imports for page components ensure synchronous SSR rendering for search bots
import WorkPage from './components/Work/WorkPage';
import ApproachPage from './components/Approach/ApproachPage';
import CapabilitiesPage from './components/Capabilities/CapabilitiesPage';
import BlogPage from './components/Blog/BlogPage';
import AboutPage from './components/About/AboutPage';
import NotFoundPage from './components/NotFound/NotFoundPage';

// Lazy load user-triggered modal dialogs
const ProjectDiscovery = lazy(() => import('./components/ProjectDiscovery/ProjectDiscovery'));
import { initGA } from './utils/analytics';
import SmoothScrollProvider from './components/SmoothScroll/SmoothScrollProvider';
import { LazyMotion, domAnimation } from 'framer-motion';

import './styles/global.css';

function MainApp() {
  const { isRTL, isModalOpen } = useLanguage();
  const { isWorkPage, isApproachPage, isCapabilitiesPage, isBlogPage, isAboutPage, isNotFound } = useRouter();
  const [introFinished, setIntroFinished] = useState(true);

  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className={`magicency-app-root ${introFinished ? 'app-loaded' : 'app-loading'}`}>
      {/* Screen Reader Skip Navigation Link */}
      <a href="#main" className="skip-to-content">Skip to content</a>

      {/* Global Viewport Scroll Progress Bar */}
      <ScrollProgress />

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

              {/* Phase 02: Feature Work (Sticky Scroll Showcase + 4 Projects) */}
              <FeatureWork />

              {/* Phase 03: Problem / Insight Narrative (Fragmented Silos to Growth Operating System) */}
              <ProblemInsight />

              {/* Phase 04: What We Do / Capabilities (3-Pillar Capability Architecture) */}
              <WhatWeDo />

              {/* Phase 05: Built For Compounding Growth (Exact CodePen SVG + ScrollTrigger Technique) */}
              <BuiltForCompoundingGrowth />

              {/* Phase 06: Journal / Insights (Exact Vivid Motion Recreation) */}
              <Journal />

              {/* Phase 07: FAQ (Exact About Page FAQ Reused as Single Source of Truth) */}
              <FAQSection isHomepage={true} />

              {/* Phase 08: Final Editorial Conversion Statement */}
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
        <SmoothScrollProvider>
          <LazyMotion features={domAnimation} strict={false}>
            <MainApp />
          </LazyMotion>
        </SmoothScrollProvider>
      </RouterProvider>
    </LanguageProvider>
  );
}
