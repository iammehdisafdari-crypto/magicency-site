import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { getGsapWithScrollTrigger, runOnIdle } from '../../utils/gsapLoader';
import './SmoothScroll.css';

const SmoothScrollContext = createContext(null);

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

/**
 * SmoothScrollProvider
 * 
 * Global smooth scroll controller powered by Lenis, decoupled from initial load.
 * - Single source of truth for global scroll animation.
 * - Zero GSAP blocking in critical path / initial render.
 * - Desktop: Controlled, cinematic inertia via Lenis smoothWheel.
 * - Mobile / Touch: Preserves 100% native browser touch scrolling (smoothTouch: false).
 * - Lazy hooks into GSAP ticker & ScrollTrigger once the page is interactive and idle.
 * - Accessibility: Fully respects prefers-reduced-motion: reduce.
 */
export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect prefers-reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Create exactly ONE global Lenis instance
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !prefersReducedMotion,
      smoothTouch: false, // Preserves native browser touch scrolling on mobile
      syncTouch: false,   // Never hijack native touch momentum
      touchMultiplier: 1,
      infinite: false,
      autoRaf: false
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;
    setLenisInstance(lenis);

    // Initial lean RAF loop for Lenis (zero GSAP overhead during page load)
    let standaloneRafId = null;
    let tickerAdded = false;
    let updateTicker = null;
    let gsapInstance = null;
    let scrollTriggerInstance = null;

    const runRaf = (time) => {
      lenis.raf(time);
      standaloneRafId = requestAnimationFrame(runRaf);
    };
    standaloneRafId = requestAnimationFrame(runRaf);

    // Lazy load GSAP & ScrollTrigger only after the page becomes interactive and idle
    const cancelIdle = runOnIdle(() => {
      getGsapWithScrollTrigger().then((loaded) => {
        if (!loaded || !lenisRef.current) return;
        const { gsap, ScrollTrigger } = loaded;
        gsapInstance = gsap;
        scrollTriggerInstance = ScrollTrigger;

        // Cancel standalone RAF loop and hand over drive to GSAP Ticker
        if (standaloneRafId) {
          cancelAnimationFrame(standaloneRafId);
          standaloneRafId = null;
        }

        updateTicker = (time) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateTicker);
        gsap.ticker.lagSmoothing(0);
        tickerAdded = true;

        lenis.on('scroll', ScrollTrigger.update);
      });
    }, 2500);

    // Listen for reduced motion changes at runtime
    const handleMotionPreferenceChange = (e) => {
      if (lenisRef.current) {
        lenisRef.current.options.smoothWheel = !e.matches;
      }
    };
    mediaQuery.addEventListener?.('change', handleMotionPreferenceChange);

    // Refresh ScrollTrigger only if loaded on window resize / orientation change
    const handleResize = () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.refresh();
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      cancelIdle();
      if (standaloneRafId) cancelAnimationFrame(standaloneRafId);
      if (tickerAdded && gsapInstance && updateTicker) {
        gsapInstance.ticker.remove(updateTicker);
      }
      mediaQuery.removeEventListener?.('change', handleMotionPreferenceChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);

      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
      setLenisInstance(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisInstance}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
