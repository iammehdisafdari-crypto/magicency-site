import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { useSmoothScroll } from '../SmoothScroll/SmoothScrollProvider';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const { isRTL } = useLanguage();
  const { currentPath } = useRouter();
  const lenis = useSmoothScroll();
  const barRef = useRef(null);

  // Helper to apply clamped numeric scale (0 to 1) directly to the bar
  const setScale = (progress) => {
    if (barRef.current) {
      const clamped = typeof progress === 'number' && !Number.isNaN(progress)
        ? Math.min(Math.max(progress, 0), 1)
        : 0;
      barRef.current.style.transform = `scaleX(${clamped})`;
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const activeLenis = lenis || (typeof window !== 'undefined' ? window.__lenis : null);

    if (activeLenis && typeof activeLenis.on === 'function') {
      // ========================================================
      // PATHWAY A: LENIS SMOOTH SCROLL (Active source of truth)
      // ========================================================
      if (typeof activeLenis.resize === 'function') {
        activeLenis.resize();
      }

      // Initial apply from authoritative Lenis state
      const initialProg = typeof activeLenis.progress === 'number' ? activeLenis.progress : 0;
      setScale(initialProg);

      // Lenis emits 'scroll' inside GSAP ticker / RAF, so update synchronously for zero lag
      const handleLenisScroll = (instance) => {
        const prog = typeof instance?.progress === 'number'
          ? instance.progress
          : (typeof activeLenis.progress === 'number' ? activeLenis.progress : 0);
        setScale(prog);
      };

      const unsubscribe = activeLenis.on('scroll', handleLenisScroll);

      // Handle viewport changes. Lenis owns its layout measurements; this listener
      // only updates the visual progress bar from its already-computed progress.
      const handleResize = () => {
        setScale(activeLenis.progress);
      };

      window.addEventListener('resize', handleResize, { passive: true });
      window.addEventListener('orientationchange', handleResize, { passive: true });

      return () => {
        if (typeof unsubscribe === 'function') {
          unsubscribe();
        } else if (typeof activeLenis.off === 'function') {
          activeLenis.off('scroll', handleLenisScroll);
        }
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    }

    // ==========================================================
    // PATHWAY B: NATIVE BROWSER SCROLL (Fallback source of truth)
    // ==========================================================
    const calculateNativeProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      if (scrollTop <= 0) return 0;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight || 0;
      const scrollableHeight = scrollHeight - clientHeight;
      return scrollableHeight > 0 ? Math.min(Math.max(scrollTop / scrollableHeight, 0), 1) : 0;
    };

    let rafId = null;
    const handleNativeScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        setScale(calculateNativeProgress());
      });
    };

    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    window.addEventListener('resize', handleNativeScroll, { passive: true });
    window.addEventListener('orientationchange', handleNativeScroll, { passive: true });

    // Initial apply for native scroll
    setScale(calculateNativeProgress());

    return () => {
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('resize', handleNativeScroll);
      window.removeEventListener('orientationchange', handleNativeScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [currentPath, lenis]);

  // Route change handling: reset bar to 0 and recalculate after route transition stabilizes
  useEffect(() => {
    // 1. Immediately reset bar for new route
    setScale(0);

    const activeLenis = lenis || (typeof window !== 'undefined' ? window.__lenis : null);
    if (activeLenis && !window.location.hash) {
      if (typeof activeLenis.scrollTo === 'function') {
        activeLenis.scrollTo(0, { immediate: true });
      }
    }

    // 2. Re-calculate once new route content is rendered into the DOM
    const rafId = requestAnimationFrame(() => {
      if (activeLenis) {
        setScale(activeLenis.progress);
      } else {
        const scrollTop = window.scrollY || window.pageYOffset || 0;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
        const clientHeight = window.innerHeight || document.documentElement.clientHeight || 0;
        const scrollableHeight = scrollHeight - clientHeight;
        const progress = scrollableHeight > 0 ? Math.min(Math.max(scrollTop / scrollableHeight, 0), 1) : 0;
        setScale(progress);
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [currentPath, lenis]);

  return (
    <div 
      className="global-scroll-progress-track"
      aria-hidden="true"
    >
      <div 
        ref={barRef}
        className="global-scroll-progress-bar"
        style={{
          transformOrigin: isRTL ? 'right center' : 'left center'
        }}
      />
    </div>
  );
}
