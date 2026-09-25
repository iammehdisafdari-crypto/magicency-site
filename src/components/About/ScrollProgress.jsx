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

      // Handle window resize & dynamic layout shifts
      const handleResize = () => {
        if (typeof activeLenis.resize === 'function') {
          activeLenis.resize();
        }
        setScale(activeLenis.progress);
      };

      window.addEventListener('resize', handleResize, { passive: true });
      window.addEventListener('orientationchange', handleResize, { passive: true });

      // Observe dynamic DOM / image load height adjustments with RAF batching
      let resizeObserver = null;
      let roRafId = null;
      if (typeof ResizeObserver !== 'undefined' && document.body) {
        resizeObserver = new ResizeObserver(() => {
          if (roRafId) cancelAnimationFrame(roRafId);
          roRafId = requestAnimationFrame(() => {
            if (typeof activeLenis.resize === 'function') {
              activeLenis.resize();
            }
            setScale(activeLenis.progress);
          });
        });
        resizeObserver.observe(document.body);
      }

      return () => {
        if (typeof unsubscribe === 'function') {
          unsubscribe();
        } else if (typeof activeLenis.off === 'function') {
          activeLenis.off('scroll', handleLenisScroll);
        }
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
        if (roRafId) cancelAnimationFrame(roRafId);
        if (resizeObserver) resizeObserver.disconnect();
      };
    }

    // ==========================================================
    // PATHWAY B: NATIVE BROWSER SCROLL (Fallback source of truth)
    // ==========================================================
    const calculateNativeProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight || 0;
      const scrollableHeight = scrollHeight - clientHeight;
      return scrollableHeight > 0 ? Math.min(Math.max(scrollTop / scrollableHeight, 0), 1) : 0;
    };

    let rafPending = false;
    const handleNativeScroll = () => {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          setScale(calculateNativeProgress());
          rafPending = false;
        });
      }
    };

    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    window.addEventListener('resize', handleNativeScroll, { passive: true });
    window.addEventListener('orientationchange', handleNativeScroll, { passive: true });

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      resizeObserver = new ResizeObserver(() => {
        handleNativeScroll();
      });
      resizeObserver.observe(document.body);
    }

    // Initial apply for native scroll
    setScale(calculateNativeProgress());

    return () => {
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('resize', handleNativeScroll);
      window.removeEventListener('orientationchange', handleNativeScroll);
      if (resizeObserver) resizeObserver.disconnect();
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
        if (typeof activeLenis.resize === 'function') activeLenis.resize();
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
