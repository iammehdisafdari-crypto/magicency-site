import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useDeferredTarget } from '../motion/useDeferredTarget';
import './ProblemInsight.css';

const ProblemInsightVisual = React.lazy(() => import('./ProblemInsightVisual'));

export default function ProblemInsight() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const [activeBeatIndex, setActiveBeatIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [shouldLoadVisual, setShouldLoadVisual] = useState(false);

  const data = t.problemInsight || {
    badge: 'THE CORE PREMISE',
    sectionIndex: '03',
    sectionLabel: 'PROBLEM // INSIGHT',
    beats: [
      {
        id: 'problem',
        num: '01',
        tag: 'THE PROBLEM',
        headline: 'More content. More campaigns. More channels.',
        insight: 'But more activity does not necessarily create more growth.',
        status: 'STATE: DISPERSED ACTIVITY',
        metric: 'HIGH NOISE // ZERO COMPOUNDING'
      },
      {
        id: 'insight',
        num: '02',
        tag: 'THE INSIGHT',
        headline: "Growth doesn't come from isolated marketing actions.",
        insight: 'It comes from connecting the right decisions together.',
        status: 'STATE: CONVERGING SIGNALS',
        metric: 'DISCONNECTED SILOS → SHARED AXIS'
      },
      {
        id: 'system',
        num: '03',
        tag: 'THE SYSTEM',
        headline: 'Strategy → Creative → Digital → Acquisition → Measurement',
        insight: 'A synchronized architecture moving as one continuous pipeline.',
        status: 'STATE: SYNCHRONIZED PIPELINE',
        metric: 'CLOSED-LOOP ATTRIBUTION & FLOW'
      },
      {
        id: 'outcome',
        num: '04',
        tag: 'THE OUTCOME',
        headline: 'When everything compounds together, marketing becomes a growth engine.',
        insight: 'Deterministic scale. Compounding velocity. Zero wasted energy.',
        status: 'STATE: COMPOUNDING FLYWHEEL',
        metric: 'AUTONOMOUS GROWTH ARCHITECTURE'
      }
    ]
  };

  const beats = data.beats;

  useEffect(() => {
    if (!containerRef.current || shouldLoadVisual) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVisual(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldLoadVisual]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const targetRef = useDeferredTarget(containerRef);

  // Track scroll progress through this section (300vh total track)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // Calculate active narrative beat based on smooth scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (val) => {
      if (val < 0.24) {
        setActiveBeatIndex(0);
      } else if (val < 0.48) {
        setActiveBeatIndex(1);
      } else if (val < 0.72) {
        setActiveBeatIndex(2);
      } else {
        setActiveBeatIndex(3);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  const currentBeat = beats[activeBeatIndex] || beats[0];

  // Accessible Reduced Motion Fallback
  if (prefersReducedMotion) {
    return (
      <section id="insight" className="pi-section-fallback">
        <div className="pi-container">
          <header className="pi-fallback-header">
            <span className="pi-hud-badge">{data.badge}</span>
            <h2 className="pi-fallback-title">{data.sectionLabel}</h2>
          </header>
          <div className="pi-fallback-grid">
            {beats.map((beat, idx) => (
              <article key={beat.id} className="pi-fallback-card">
                <span className="pi-beat-num">{beat.num}</span>
                <span className="pi-beat-tag">{beat.tag}</span>
                <h3 className="pi-beat-headline">{beat.headline}</h3>
                <p className="pi-beat-insight">{beat.insight}</p>
                <div className="pi-beat-status">{beat.status}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="insight" className="pi-scroll-section">
      {/* Sticky Pinned Stage */}
      <div className="pi-sticky-viewport">
        {/* Background Atmosphere Layers */}
        <div className="pi-bg-ambient" aria-hidden="true" />
        <div className="pi-bg-subtle-grid" aria-hidden="true" />

        <div className="pi-container">
          {/* Top Minimal HUD: Stage Tracker & 4-Beat Progress Bar */}
          <div className="pi-top-hud">
            <div className="pi-hud-left">
              <span className="pi-hud-dot" />
              <span className="pi-hud-badge">{data.badge}</span>
              <span className="pi-hud-divider">/</span>
              <span className="pi-hud-counter">
                {currentBeat.num} <span className="pi-hud-counter-max">/ 04</span>
              </span>
            </div>

            {/* 4-Segment Minimal Progress Indicator */}
            <div className="pi-progress-track" aria-hidden="true">
              {beats.map((beat, i) => (
                <div
                  key={`seg-${beat.id}`}
                  className={`pi-progress-segment ${i === activeBeatIndex ? 'active' : i < activeBeatIndex ? 'completed' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Main Two-Column Stage */}
          <div className="pi-content-grid">
            {/* Left Column: Narrative Copy with Seamless Crossfade */}
            <div className="pi-text-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBeat.id}
                  className="pi-narrative-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Beat Pill Tag */}
                  <div className="pi-tag-wrap">
                    <span className="pi-beat-tag-pill">{currentBeat.tag}</span>
                  </div>

                  {/* Monumental Headline */}
                  <h2 className="pi-headline">
                    {currentBeat.headline}
                  </h2>

                  {/* Supporting Strategic Insight */}
                  <p className="pi-insight-text">
                    {currentBeat.insight}
                  </p>

                  {/* Technical Telemetry Metadata Footer */}
                  <div className="pi-meta-strip">
                    <div className="pi-meta-item">
                      <span className="pi-meta-label">STATUS</span>
                      <span className="pi-meta-value">{currentBeat.status}</span>
                    </div>
                    <div className="pi-meta-item">
                      <span className="pi-meta-label">METRIC</span>
                      <span className="pi-meta-value accent">{currentBeat.metric}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Single Evolving System Object */}
            <div className="pi-visual-col">
              {shouldLoadVisual && (
                <React.Suspense fallback={null}>
                  <ProblemInsightVisual 
                    activeBeat={activeBeatIndex} 
                    isRTL={isRTL} 
                    nodesData={data.nodes}
                  />
                </React.Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
