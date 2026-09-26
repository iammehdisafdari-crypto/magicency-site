import React, { useEffect, useRef } from 'react';
import { getGsapWithScrollTrigger, runAfterLoadAndIdle } from '../../utils/gsapLoader';
import { useLanguage } from '../../context/LanguageContext';
import './BuiltForCompoundingGrowth.css';

export default function BuiltForCompoundingGrowth() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef(null);
  const lastActiveIndexRef = useRef(-1);

  const data = t.compoundingGrowth || {
    eyebrow: 'BUILT FOR',
    headlinePart1: 'COMPOUNDING',
    headlinePart2: 'GROWTH',
    supportingStatement: 'Growth gets stronger when everything works together.',
    disciplines: [
      { id: '01', number: '01', title: 'STRATEGY', desc: 'The diagnostic foundation and architecture directing every commercial move.' },
      { id: '02', number: '02', title: 'EXPERIENCE', desc: 'Frictionless digital touchpoints engineered for immediate clarity and trust.' },
      { id: '03', number: '03', title: 'ACQUISITION', desc: 'Precision performance channels capturing high-intent commercial demand.' },
      { id: '04', number: '04', title: 'MEASUREMENT', desc: 'Full-funnel telemetry eliminating attribution bias and blind spots.' },
      { id: '05', number: '05', title: 'OPTIMIZATION', desc: 'Continuous feedback loops converting live signals into improved yield.' },
      { id: '06', number: '06', title: 'COMPOUNDING', desc: 'All disciplines connected into an autonomous, self-reinforcing growth system.' }
    ]
  };

  const disciplines = data.disciplines || [];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      section.style.setProperty('--strokeDashoffset', '-1200px');
      return;
    }

    let isDestroyed = false;
    let ctx = null;
    let observer = null;
    let rafId = null;
    let cancelIdle = null;

    // Initialize ScrollTrigger only when section becomes visible via IntersectionObserver
    const initScrollTrigger = () => {
      if (isDestroyed) return;

      getGsapWithScrollTrigger().then((loaded) => {
        if (isDestroyed || !loaded || !sectionRef.current) return;
        const { gsap, ScrollTrigger } = loaded;

        // Batch timeline/ScrollTrigger creation into a single requestAnimationFrame
        rafId = requestAnimationFrame(() => {
          if (isDestroyed || !sectionRef.current) return;

          ctx = gsap.context(() => {
            const nodes = section.querySelectorAll('.cg-discipline-node');

            ScrollTrigger.create({
              trigger: section,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const thisProgress = self.progress;
                const scrollProgress = - (2400 * thisProgress);
                section.style.setProperty('--strokeDashoffset', `${scrollProgress}px`);

                // High-performance DOM classList update (zero React re-renders on scroll)
                const activeIndex = Math.min(
                  disciplines.length - 1,
                  Math.max(0, Math.floor(thisProgress * disciplines.length))
                );

                if (activeIndex !== lastActiveIndexRef.current) {
                  lastActiveIndexRef.current = activeIndex;
                  nodes.forEach((node, idx) => {
                    if (idx < activeIndex) {
                      node.classList.add('is-passed');
                      node.classList.remove('is-current');
                    } else if (idx === activeIndex) {
                      node.classList.add('is-passed');
                      node.classList.add('is-current');
                    } else {
                      node.classList.remove('is-passed');
                      node.classList.remove('is-current');
                    }
                  });
                }
              }
            });
          }, sectionRef);

          ScrollTrigger.refresh();
        });
      });
    };

    // If still in initial loading / critical rendering, defer GSAP request to post-load / idle.
    // If the page is already fully loaded, initialize immediately.
    const requestInit = () => {
      if (document.readyState === 'complete') {
        initScrollTrigger();
      } else {
        cancelIdle = runAfterLoadAndIdle(() => {
          initScrollTrigger();
        });
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const rect = section.getBoundingClientRect();
          if (rect.top > window.innerHeight && (window.scrollY || 0) < 100) {
            return;
          }
          if (observer) {
            observer.disconnect();
            observer = null;
          }
          requestInit();
        }
      },
      { rootMargin: '300px 0px 300px 0px' }
    );

    // Also trigger on first scroll if section becomes visible
    const handleScrollCheck = () => {
      if (!observer) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight + 400) {
        window.removeEventListener('scroll', handleScrollCheck);
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        requestInit();
      }
    };
    window.addEventListener('scroll', handleScrollCheck, { passive: true });

    observer.observe(section);

    return () => {
      isDestroyed = true;
      if (cancelIdle) cancelIdle();
      window.removeEventListener('scroll', handleScrollCheck);
      if (observer) observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, [disciplines.length]);

  return (
    <section
      id="compounding-growth"
      ref={sectionRef}
      className={`compounding-growth-section ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Built For Compounding Growth"
    >
      {/* Background Atmosphere & Blueprint Grid */}
      <div className="cg-ambient-glow" aria-hidden="true" />
      <div className="cg-grid-blueprint" aria-hidden="true" />

      <div className="container cg-content-container">

        {/* =========================================================
            01. DOMINANT EDITORIAL SECTION TITLE
            Exact prompt requirements:
            Eyebrow: BUILT FOR
            Main Title: COMPOUNDING GROWTH
            Supporting Statement: Growth gets stronger when everything works together.
            ========================================================= */}
        <header className="cg-header">
          <div className="cg-eyebrow-wrapper">
            <span className="cg-eyebrow-accent-bullet" aria-hidden="true" />
            <span className="cg-eyebrow">{data.eyebrow}</span>
          </div>

          <h2 className="cg-headline">
            <span className="cg-headline-line">{data.headlinePart1 || 'COMPOUNDING'}</span>
            <span className="cg-headline-line cg-headline-accent">{data.headlinePart2 || 'GROWTH'}</span>
          </h2>

          <p className="cg-supporting-statement">
            {data.supportingStatement}
          </p>

          <div className="cg-system-status-bar" aria-hidden="true">
            <span className="cg-status-tag">SYSTEM STATE: ACTIVE SYNCHRONIZATION</span>
            <span className="cg-status-divider">//</span>
            <span className="cg-status-tag">6 GROWTH DISCIPLINES</span>
            <span className="cg-status-divider">//</span>
            <span className="cg-status-tag">CONTINUOUS CYCLE</span>
          </div>
        </header>

        {/* =========================================================
            02. LARGE VERTICAL SVG COMPOSITION & STAGE LABELS
            Exact Reproduction of CodePen Reference KwgGBRp:
            - Multiple long curved SVG paths
            - stroke-dasharray with capsule pulses + 20000px solid trailing fill
            - stroke-dashoffset animated by GSAP ScrollTrigger
            - Integrated minimal labels along the composition
            ========================================================= */}
        <div className="cg-canvas-wrapper">

          {/* Minimal Growth Discipline Labels (Integrated into the path canvas coordinates) */}
          <div className="cg-disciplines-overlay" aria-hidden="true">
            {disciplines.map((item, idx) => (
              <div
                key={item.id || idx}
                className={`cg-discipline-node stage-${idx} ${idx === 0 ? 'is-current is-passed' : ''}`}
              >
                <div className="cg-node-marker">
                  <span className="cg-node-dot" />
                  <span className="cg-node-line" />
                </div>
                <div className="cg-node-content">
                  <span className="cg-node-num">{item.number}</span>
                  <h3 className="cg-node-title">{item.title}</h3>
                  {item.desc && <p className="cg-node-desc">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Master SVG Path Composition (viewBox: 0 0 740 2000 matching CodePen reference) */}
          <svg
            id="cgSvgPaths"
            className="cg-svg-canvas"
            viewBox="0 0 740 2000"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
          >
            <defs>
              {/* Magicency Brand Linear Gradient: Vivid Raspberry Pink to White Highlight to Metallic Slate */}
              <linearGradient id="magicencyGrowthGradient" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C58A3A" />
                <stop offset="30%" stopColor="#FF2D78" />
                <stop offset="60%" stopColor="#FFFFFF" />
                <stop offset="85%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#C58A3A" />
              </linearGradient>

              {/* High-Precision Glow Filter */}
              <filter id="magicencyPulseGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Exact Geometric Paths from CodePen Reference KwgGBRp */}
              <path
                id="cgLinePath01"
                d="m 106,45h 375c 114,0 226,128 226,235v 236c 0,136 -122,222 -224,221l -182,-2c -89,1 -141,42 -142,158l -2,204c -1,117 37,173 134,173h 186c 110,-3 230,111 230,220v 242c 0,113 -125,225 -248,225H 105"
              />
              <path
                id="cgLinePath02"
                d="m 33,85h 444c 96,0 190,107 190,201v 224c 0,116 -98,188 -190,187l -192,-2c -92,0 -166,75 -166,168v 278c 0,94 74,169 166,169h 194c 92,0 188,94 188,188v 228c 0,94 -104,191 -214,191H 105"
              />
              <path
                id="cgLinePath03"
                d="m 155,127h 308c 94,0 162,86 162,177v 178c 0,109 -50,174 -166,173L 277,653C 158,653 77,762 77,849v 302c 0,118 107,196 180,197l 204,4c 92,0 164,67 164,160v 200c 0,91 -89,163 -188,163H 105"
              />
              <path
                id="cgLinePath04"
                d="m 283,173c 2,0 165,0 165,0C 544,175 577,238 577,330v 156c 0,94 -48,126 -140,125L 269,609C 167,602 29,702 29,851v 312c 0,111 101,235 242,235h 162c 109,1 144,49 144,136v 162c 0,73 -53,130 -118,130l -353,1"
              />
            </defs>

            {/* Step A: Subtle Technical Baseline Blueprint Guides */}
            <g className="cg-baseline-tracks">
              <use href="#cgLinePath01" className="cg-track-guide" />
              <use href="#cgLinePath02" className="cg-track-guide" />
              <use href="#cgLinePath03" className="cg-track-guide" />
              <use href="#cgLinePath04" className="cg-track-guide" />
            </g>

            {/* Step B: Exact CodePen Active Pulse & Trailing Stroke System */}
            <g className="cg-active-pulses" filter="url(#magicencyPulseGlow)">
              <use href="#cgLinePath01" className="cg-pulse-path path-1" />
              <use href="#cgLinePath02" className="cg-pulse-path path-2" />
              <use href="#cgLinePath03" className="cg-pulse-path path-3" />
              <use href="#cgLinePath04" className="cg-pulse-path path-4" />
            </g>

            {/* Step C: Integrated Technical Node Circles at Key Inflection Intersections */}
            <g className="cg-junction-nodes">
              <circle cx="106" cy="45" r="4.5" className="cg-junction-dot" />
              <circle cx="33" cy="85" r="4.5" className="cg-junction-dot" />
              <circle cx="155" cy="127" r="4.5" className="cg-junction-dot" />
              <circle cx="283" cy="173" r="4.5" className="cg-junction-dot" />

              <circle cx="707" cy="280" r="5" className="cg-junction-dot" />
              <circle cx="285" cy="735" r="5" className="cg-junction-dot" />
              <circle cx="119" cy="1095" r="5" className="cg-junction-dot" />
              <circle cx="669" cy="1490" r="5" className="cg-junction-dot" />
              <circle cx="105" cy="1715" r="6" className="cg-junction-dot cg-terminal-dot" />
            </g>
          </svg>
        </div>

        {/* Section Footer Metric / Outcome Statement */}
        <div className="cg-footer-statement">
          <div className="cg-footer-card">
            <span className="cg-footer-tag">THE COMPOUNDING EFFECT</span>
            <p className="cg-footer-text">
              Strategy informs execution. Execution creates signals. Signals refine decisions. Optimization powers compounding growth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
