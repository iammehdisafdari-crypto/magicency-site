import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PROBLEM_INSIGHT_STEPS } from '../../data/problemInsightData';
import ProblemInsightVisual from './ProblemInsightVisual';
import './ProblemInsight.css';

/**
 * Clamp helper matching reference `so(val, min, max)`
 */
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

/**
 * Smoothstep helper matching reference `co(t)`
 */
function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

/**
 * Pad zero helper matching reference `lo(num)`
 */
function padZero(num) {
  return String(num + 1).padStart(2, '0');
}

export default function ProblemInsight() {
  const { lang, isRTL } = useLanguage();
  const sectionRef = useRef(null);

  const steps = PROBLEM_INSIGHT_STEPS;
  const totalSteps = steps.length;

  // Window dimensions & responsive flags
  const [viewport, setViewport] = useState({ W: 1440, H: 900 });
  const [mousePos, setMousePos] = useState({ mx: 0, my: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);

  // Refs for smooth animation loop (lerp)
  const targetProgressRef = useRef(0);
  const mouseTargetX = useRef(0);
  const mouseTargetY = useRef(0);
  const stateRef = useRef({ progress: 0, mx: 0, my: 0 });
  const isIntersectingRef = useRef(false);
  const isLoopRunningRef = useRef(false);
  const rafIdRef = useRef(null);
  const metricsRef = useRef({ containerTop: 0, containerHeight: 0 });

  const isMobile = viewport.W <= 810;
  const isTablet = viewport.W > 810 && viewport.W <= 1199.98;

  // Reduced motion detection
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  // Decoupled Layout Measurement (READ) and Scroll Progress Calculation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Phase 1 (READ): Cache container geometry only on mount, resize, or viewport entry
    const measureLayout = () => {
      const container = sectionRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      metricsRef.current = {
        containerTop: rect.top + window.scrollY,
        containerHeight: rect.height
      };
      const w = window.innerWidth || 1440;
      const h = window.innerHeight || 900;
      setViewport((prev) => (prev.W !== w || prev.H !== h ? { W: w, H: h } : prev));
    };

    // Phase 2 (READ from Compositor): Compute target progress using window.scrollY (zero layout thrashing)
    const updateScrollProgress = () => {
      const h = window.innerHeight || 900;
      const { containerTop, containerHeight } = metricsRef.current;
      const scrollableDist = containerHeight - h;
      if (scrollableDist <= 0) return;
      const scrolled = window.scrollY - containerTop;
      const raw = scrolled / scrollableDist;
      targetProgressRef.current = Math.max(0, Math.min(1, raw));
      if (isIntersectingRef.current) {
        startLoop();
      }
    };

    const handleMouseMove = (e) => {
      const w = window.innerWidth || 1440;
      const h = window.innerHeight || 900;
      mouseTargetX.current = (e.clientX / w - 0.5) * 2;
      mouseTargetY.current = (e.clientY / h - 0.5) * 2;
      if (isIntersectingRef.current) {
        startLoop();
      }
    };

    const scrollEase = 0.09;

    // Pure animation loop: operates strictly on in-memory numeric values (no getBoundingClientRect)
    const animLoop = () => {
      if (!isIntersectingRef.current) {
        isLoopRunningRef.current = false;
        return;
      }

      const st = stateRef.current;
      const ease = prefersReducedMotion ? 1 : scrollEase;
      let nextProg = st.progress + (targetProgressRef.current - st.progress) * ease;
      const isProgSettled = Math.abs(targetProgressRef.current - nextProg) < 0.0004;
      if (isProgSettled) {
        nextProg = targetProgressRef.current;
      }

      const nextMx = st.mx + (mouseTargetX.current - st.mx) * 0.07;
      const nextMy = st.my + (mouseTargetY.current - st.my) * 0.07;
      const isMouseSettled =
        Math.abs(mouseTargetX.current - nextMx) < 0.001 &&
        Math.abs(mouseTargetY.current - nextMy) < 0.001;

      if (
        Math.abs(nextProg - st.progress) > 0.00005 ||
        Math.abs(nextMx - st.mx) > 0.0009 ||
        Math.abs(nextMy - st.my) > 0.0009
      ) {
        stateRef.current = { progress: nextProg, mx: nextMx, my: nextMy };
        setProgress(nextProg);
        setMousePos({ mx: nextMx, my: nextMy });
      }

      if (isProgSettled && isMouseSettled) {
        isLoopRunningRef.current = false;
        return; // Sleep until woken by scroll or mousemove
      }

      isLoopRunningRef.current = true;
      rafIdRef.current = requestAnimationFrame(animLoop);
    };

    const startLoop = () => {
      if (!isLoopRunningRef.current) {
        isLoopRunningRef.current = true;
        rafIdRef.current = requestAnimationFrame(animLoop);
      }
    };

    const stopLoop = () => {
      if (isLoopRunningRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        isLoopRunningRef.current = false;
      }
    };

    // IntersectionObserver activates loop only when ProblemInsight is actually in or near viewport
    const observer = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver((entries) => {
          const isVis = !!entries[0]?.isIntersecting;
          isIntersectingRef.current = isVis;
          if (isVis) {
            measureLayout();
            updateScrollProgress();
            startLoop();
          } else {
            stopLoop();
          }
        }, { threshold: 0, rootMargin: '100px 0px' })
      : null;

    if (observer && sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    let scrollScheduled = false;
    const handleScroll = () => {
      if (scrollScheduled) return;
      scrollScheduled = true;
      requestAnimationFrame(() => {
        scrollScheduled = false;
        updateScrollProgress();
      });
    };

    const handleResize = () => {
      measureLayout();
      updateScrollProgress();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      stopLoop();
      observer?.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prefersReducedMotion]);

  // Click navigation to step index (0..4)
  const scrollToStep = useCallback((stepIdx) => {
    const container = sectionRef.current;
    if (!container || typeof window === 'undefined') return;

    const h = viewport.H;
    const scrollableDist = container.offsetHeight - h;
    const containerTop = window.scrollY + container.getBoundingClientRect().top;
    const targetScrollY = Math.round(containerTop + (stepIdx / (totalSteps - 1 || 1)) * scrollableDist);
    const startScrollY = window.scrollY;
    const delta = targetScrollY - startScrollY;

    if (Math.abs(delta) < 2) return;

    if (prefersReducedMotion) {
      window.scrollTo(0, targetScrollY);
      return;
    }

    const startTime = performance.now();
    const duration = 750;
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const stepFrame = (now) => {
      const elapsed = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, startScrollY + delta * easeInOut(elapsed));
      if (elapsed < 1) requestAnimationFrame(stepFrame);
    };

    requestAnimationFrame(stepFrame);
  }, [viewport.H, totalSteps, prefersReducedMotion]);

  // Continuous step calculation matching reference
  const scaledProgress = progress * (totalSteps - 1);
  const baseStep = Math.min(Math.max(totalSteps - 2, 0), Math.floor(scaledProgress));
  const frac = scaledProgress - baseStep;
  const smoothStepFrac = frac < 0.34 ? 0 : frac > 0.66 ? 1 : smoothstep((frac - 0.34) / 0.32);
  const continuousStep = baseStep + smoothStepFrac;
  const activeStep = Math.round(continuousStep);

  // Keyboard navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e) => {
      const container = sectionRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (!(rect.top <= 1 && rect.bottom >= viewport.H - 1)) return;

      const curr = Math.round(stateRef.current.progress * (totalSteps - 1));
      let next = curr;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
          next = Math.min(totalSteps - 1, curr + 1);
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          next = Math.max(0, curr - 1);
          break;
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = totalSteps - 1;
          break;
        default:
          return;
      }

      if (next !== curr) {
        e.preventDefault();
        scrollToStep(next);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToStep, totalSteps, viewport.H]);

  // Geometric parameters for SVG track and number wheel
  const { W, H } = viewport;
  const circleLeftPct = isTablet ? -14 : -12;
  const circleRadiusPct = isTablet ? 30 : 32;
  const stepDegrees = isTablet ? 24 : 19;

  const radius = (circleRadiusPct / 100) * W;
  const circumference = 2 * Math.PI * radius;

  // In RTL, the circle center is mirrored to right side
  const centerX = isRTL ? W - (circleLeftPct / 100) * W : (circleLeftPct / 100) * W;
  const centerY = H * 0.5;

  // Arc stroke fill length
  const arcLength = (stepDegrees * continuousStep / 360) * circumference;

  // Compute wheel node coordinates
  const wheelNodes = useMemo(() => {
    return steps.map((_, i) => {
      // In RTL, invert angle direction
      const angleDeg = isRTL ? -(i - continuousStep) * stepDegrees : (i - continuousStep) * stepDegrees;
      const angleRad = (angleDeg * Math.PI) / 180;

      const x = isRTL ? centerX - radius * Math.cos(angleRad) : centerX + radius * Math.cos(angleRad);
      const y = centerY - radius * Math.sin(angleRad);
      const dist = Math.abs(i - continuousStep);

      const scale = clamp(1.12 - 0.11 * dist, 0.66, 1.12);
      const rot = angleDeg * 0.85;
      const bgA = clamp(1.25 - 1.9 * dist, 0, 1);
      const ringA = (1 - bgA) * clamp(0.5 - 0.09 * dist, 0.2, 0.5);

      return { x, y, scale, rot, bgA, ringA };
    });
  }, [steps, continuousStep, stepDegrees, centerX, centerY, radius, isRTL]);

  // Scroll height vh matching reference overrides
  const sectionHeightVh = isMobile ? 400 : isTablet ? 480 : 560;

  // Parallax translation for visual container
  const parallaxX = mousePos.mx * 22;
  const parallaxY = mousePos.my * 18;

  return (
    <section
      ref={sectionRef}
      id="problem-insight"
      className={`pi-section-root ${prefersReducedMotion ? 'reduced-motion' : ''} ${isRTL ? 'is-rtl' : ''}`}
      style={{ height: `${sectionHeightVh}vh` }}
      aria-label={lang === 'fa' ? 'مسئله و نگرش سیستم رشد' : 'Problem Insight: Disconnected Marketing vs Growth Operating System'}
    >
      {/* Pinned 100vh Sticky Viewport */}
      <div className="pi-sticky-viewport">
        
        {/* SVG Arc Guide and Active Progress Fill (Desktop & Tablet) */}
        <svg
          className="pi-arc-svg"
          style={{
            position: 'absolute',
            left: centerX - radius,
            top: centerY - radius,
            width: radius * 2,
            height: radius * 2,
            overflow: 'visible',
            zIndex: 3,
            pointerEvents: 'none',
            transform: isRTL ? 'scaleX(-1)' : 'none'
          }}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        >
          {/* Background guide track */}
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
          />
          {/* Active glowing accent stroke */}
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke="#C58A3A"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
          />
        </svg>

        {/* Number Wheel Node Buttons (Desktop & Tablet) */}
        <div className="pi-wheel-container" aria-label="Step navigation wheel">
          {steps.map((s, idx) => {
            const node = wheelNodes[idx];
            const isCurrent = idx === activeStep;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToStep(idx)}
                className={`pi-wheel-btn ${isCurrent ? 'is-active' : ''}`}
                aria-label={`Go to step ${padZero(idx)}`}
                aria-current={isCurrent ? 'step' : undefined}
                style={{
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  transform: `translate(-50%, -50%) rotate(${node.rot}deg) scale(${node.scale})`
                }}
              >
                {/* Outer base disk */}
                <div className="pi-wheel-node-base" />
                
                {/* Active highlight background */}
                <div
                  className="pi-wheel-node-active"
                  style={{
                    opacity: node.bgA,
                    boxShadow: node.bgA > 0.5 ? `0 10px 28px rgba(197, 138, 58, ${0.35 * node.bgA})` : 'none'
                  }}
                />

                {/* Border ring */}
                <div
                  className="pi-wheel-node-ring"
                  style={{ opacity: node.ringA }}
                />

                {/* Inactive number label */}
                <div
                  className="pi-wheel-num pi-wheel-num--inactive"
                  style={{ opacity: 1 - node.bgA }}
                >
                  {padZero(idx)}
                </div>

                {/* Active number label */}
                <div
                  className="pi-wheel-num pi-wheel-num--active"
                  style={{ opacity: node.bgA }}
                >
                  {padZero(idx)}
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Pagination Pills (CSS displayed on mobile) */}
        <div className="pi-mobile-pills" role="group" aria-label="Step navigation">
          {steps.map((_, idx) => {
            const isCurrent = idx === activeStep;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToStep(idx)}
                className={`pi-mobile-pill ${isCurrent ? 'is-active' : ''}`}
                aria-label={`Go to step ${padZero(idx)}`}
                aria-current={isCurrent ? 'step' : undefined}
              />
            );
          })}
        </div>

        {/* Visual System Component Stack */}
        <div
          className="pi-visual-anchor"
          style={{
            transform: !isMobile ? `translate(${parallaxX}px, calc(-50% + ${parallaxY}px))` : undefined,
            willChange: !isMobile ? 'transform' : undefined
          }}
        >
          {steps.map((_, idx) => (
            <ProblemInsightVisual
              key={idx}
              stepIndex={idx}
              currentProgress={continuousStep}
              isRTL={isRTL}
              lang={lang}
            />
          ))}
        </div>

        {/* Editorial Text Content Stack */}
        <div className="pi-editorial-stack">
          {steps.map((step, idx) => {
            const dist = Math.abs(idx - continuousStep);
            const opacity = clamp(1 - 1.7 * dist, 0, 1);
            const translateY = isMobile
              ? (idx - continuousStep) * 40
              : (idx - continuousStep) * 80;

            const itemStyle = {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              opacity,
              transform: isMobile
                ? `translateY(${translateY}px)`
                : `translateY(calc(-50% + ${translateY}px))`,
              pointerEvents: opacity > 0.6 ? 'auto' : 'none',
              transition: 'opacity 0.05s linear'
            };

            return (
              <div key={step.id} style={itemStyle} className="pi-content-step">
                {/* Eyebrow */}
                <div className="pi-eyebrow">
                  <span className="pi-eyebrow-accent">{padZero(idx)}</span>
                  <span className="pi-eyebrow-sep">//</span>
                  <span>{step.eyebrow[lang] || step.eyebrow.en}</span>
                </div>

                {/* Headline (Line 1 & Line 2) */}
                <h2 className="pi-headline">
                  <span className="pi-headline-line">{step.titleLine1[lang] || step.titleLine1.en}</span>
                  {' '}
                  <span className="pi-headline-line pi-headline-line--sub">{step.titleLine2[lang] || step.titleLine2.en}</span>
                </h2>

                {/* Secondary / Climax Statement if present */}
                {step.secondaryStatement && (
                  <p className="pi-secondary-statement">
                    {step.secondaryStatement[lang] || step.secondaryStatement.en}
                  </p>
                )}

                {/* Supporting Idea if present */}
                {step.supportingIdea && (
                  <p className="pi-supporting-idea">
                    {step.supportingIdea[lang] || step.supportingIdea.en}
                  </p>
                )}

                {/* Description Body */}
                <p className="pi-description">
                  {step.description[lang] || step.description.en}
                </p>

                {/* System Chips / Tags */}
                <div className="pi-chips-list">
                  {step.chips.map((chip, cIdx) => (
                    <span key={cIdx} className="pi-chip">
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Telemetry Status Bar */}
                <div className="pi-step-status">
                  <span className="pi-status-led" />
                  <span className="pi-status-text">{step.status[lang] || step.status.en}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Corner Step Counter (Desktop & Tablet) */}
        {!isMobile && (
          <div
            className="pi-corner-counter"
            style={{
              position: 'absolute',
              bottom: 28,
              ...(isRTL ? { left: 40, right: 'auto' } : { right: 40, left: 'auto' })
            }}
          >
            <span className="pi-counter-current">{padZero(activeStep)}</span>
            <span className="pi-counter-sep"> / </span>
            <span className="pi-counter-total">{padZero(totalSteps - 1)}</span>
          </div>
        )}

      </div>
    </section>
  );
}
