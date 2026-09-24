import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SmoothScroll.css';

// Ensure ScrollTrigger is registered with GSAP
gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext(null);

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

/**
 * SmoothScrollProvider
 * 
 * Global smooth scroll controller powered by Lenis, tightly coupled to GSAP ScrollTrigger.
 * - Single source of truth for global scroll animation.
 * - Desktop: Controlled, cinematic inertia via Lenis smoothWheel.
 * - Mobile / Touch: Preserves 100% native browser touch scrolling (smoothTouch: false).
 * - Ticker: Drives Lenis solely via GSAP ticker (zero duplicate RAF loops, lagSmoothing(0)).
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
      autoRaf: false      // Driven exclusively by GSAP ticker to prevent duplicate RAF loops
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;
    setLenisInstance(lenis);

    // 1. Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 2. Drive Lenis via GSAP Ticker (Single central animation loop)
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 3. Keep ScrollTrigger refreshed after layout stabilization
    ScrollTrigger.refresh();

    // Listen for reduced motion changes at runtime
    const handleMotionPreferenceChange = (e) => {
      if (lenisRef.current) {
        lenisRef.current.options.smoothWheel = !e.matches;
      }
    };
    mediaQuery.addEventListener?.('change', handleMotionPreferenceChange);

    // Refresh ScrollTrigger on window resize / orientation change
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      mediaQuery.removeEventListener?.('change', handleMotionPreferenceChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);

      gsap.ticker.remove(updateTicker);
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
