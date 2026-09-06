import React, { useState, Suspense, lazy } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import BrandIntro from './components/Intro/BrandIntro';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SelectedWork from './components/SelectedWork/SelectedWork';
import ProblemInsight from './components/ProblemInsight/ProblemInsight';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Journal from './components/Journal/Journal';
import Footer from './components/Footer/Footer';
import './styles/global.css';

// Code-split subpages and discovery modal to shrink initial bundle size and speed up initial compile/parse
const WorkPage = lazy(() => import('./components/Work/WorkPage'));
const ApproachPage = lazy(() => import('./components/Approach/ApproachPage'));
const CapabilitiesPage = lazy(() => import('./components/Capabilities/CapabilitiesPage'));
const BlogPage = lazy(() => import('./components/Blog/BlogPage'));
const AboutPage = lazy(() => import('./components/About/AboutPage'));
const ProjectDiscovery = lazy(() => import('./components/ProjectDiscovery/ProjectDiscovery'));

function MainApp() {
  const { isRTL } = useLanguage();
  const { isWorkPage, isApproachPage, isCapabilitiesPage, isBlogPage, isAboutPage } = useRouter();
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
        <Suspense fallback={null}>
          {isWorkPage ? (
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
            </>
          )}
        </Suspense>
      </main>

      {/* Cinematic Closing Frame Footer */}
      <Footer />

      {/* Interactive Growth Protocol Modal */}
      <Suspense fallback={null}>
        <ProjectDiscovery />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <MainApp />
      </RouterProvider>
    </LanguageProvider>
  );
}

