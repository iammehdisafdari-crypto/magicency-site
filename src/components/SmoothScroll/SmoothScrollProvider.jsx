import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { getGsapWithScrollTrigger, runAfterLoadAndIdle } from '../../utils/gsapLoader';
import './SmoothScroll.css';

const SmoothScrollContext = createContext(null);

/**
 * Closes the mobile staggered menu if currently open and unlocks body scroll.
 */
export function closeMobileMenu() {
  if (typeof window === 'undefined') return;

  // 1. Trigger the toggle button click if open
  const openToggle = document.querySelector(
    '.sm-toggle.is-open, [aria-expanded="true"].sm-toggle, [aria-controls="staggered-menu-panel"][aria-expanded="true"]'
  );
  if (openToggle) {
    try {
      openToggle.click();
    } catch (_) {}
  } else {
    // 2. Dispatch Escape key fallback to notify StaggeredMenu ONLY if no modal dialog is open
    try {
      const isModalOpen = Boolean(document.querySelector('.discovery-overlay, .project-discovery-modal, [role="dialog"].vm-discovery-modal'));
      if (!isModalOpen) {
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      }
    } catch (_) {}
  }

  // 3. Immediately unlock body scroll
  document.body.style.overflow = '';

  // 4. Resume Lenis if initialized and paused
  if (window.__lenis) {
    try {
      window.__lenis.start();
    } catch (_) {}
  }
}

export function scrollToAnchor(target, options = {}) {
  if (typeof window === 'undefined') return;

  // Always close mobile navigation menu and unlock scrolling
  closeMobileMenu();

  const lenis = window.__lenis;
  if (lenis) {
    try {
      lenis.start();
    } catch (_) {}
  }

  const selector = typeof target === 'string' ? target.trim() : '';
  const hash = selector.startsWith('#')
    ? selector
    : (selector.startsWith('/#') ? selector.slice(1) : (selector ? '#' + selector : ''));
  const rawId = hash.replace(/^#/, '');

  // Detect mobile touch devices
  const isTouchOrMobile = Boolean(
    window.matchMedia?.('(max-width: 991px)')?.matches ||
    'ontouchstart' in window ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
    window.matchMedia?.('(pointer: coarse)')?.matches
  );

  const prefersReducedMotion = Boolean(
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  );

  // Handle Home / Top scroll
  if (!rawId || rawId === 'hero' || rawId === 'home') {
    if (lenis && !isTouchOrMobile && !prefersReducedMotion) {
      lenis.scrollTo(0, {
        duration: options.duration || 1.15,
        immediate: false,
        lock: false
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
    return;
  }

  const findTargetElement = (id) => {
    if (!id) return null;
    const cleanId = id.replace(/^#/, '');

    // 1. Direct getElementById
    let el = document.getElementById(cleanId);
    if (el) return el;

    // 2. Query selector with hash
    try {
      el = document.querySelector('#' + cleanId);
      if (el) return el;
    } catch (_) {}

    // 3. Section data attributes
    el = document.querySelector(`[data-section="${cleanId}"]`) ||
         document.querySelector(`[data-nav-section="${cleanId}"]`);
    if (el) return el;

    // 4. Section aliases
    if (cleanId === 'work' || cleanId === 'feature-work') {
      el = document.getElementById('work') ||
           document.getElementById('feature-work') ||
           document.querySelector('[data-section="work"]') ||
           document.querySelector('[data-section="feature-work"]') ||
           document.querySelector('[data-nav-section="work"]');
      if (el) return el;
    } else if (cleanId === 'capabilities' || cleanId === 'what-we-do' || cleanId === 'services') {
      el = document.getElementById('capabilities') ||
           document.getElementById('what-we-do') ||
           document.querySelector('[data-section="what-we-do"]');
      if (el) return el;
    } else if (cleanId === 'approach' || cleanId === 'compounding-growth' || cleanId === 'growth') {
      el = document.getElementById('approach') ||
           document.getElementById('compounding-growth');
      if (el) return el;
    } else if (cleanId === 'about' || cleanId === 'faq') {
      el = document.getElementById('about') ||
           document.getElementById('faq') ||
           document.querySelector('.faq-chapter');
      if (el) return el;
    } else if (cleanId === 'blog' || cleanId === 'journal') {
      el = document.getElementById('blog') ||
           document.getElementById('journal');
      if (el) return el;
    } else if (cleanId === 'contact' || cleanId === 'final-cta') {
      el = document.getElementById('contact') ||
           document.querySelector('.final-cta-section');
      if (el) return el;
    }

    // 5. Fallback for lazy-viewport containers before component mounts
    const SECTION_INDEX = {
      hero: 0,
      home: 0,
      work: 1,
      'feature-work': 1,
      problem: 2,
      'problem-insight': 2,
      capabilities: 3,
      'what-we-do': 3,
      services: 3,
      approach: 4,
      'compounding-growth': 4,
      growth: 4,
      blog: 5,
      journal: 5,
      about: 6,
      faq: 6,
      contact: 7
    };

    const index = SECTION_INDEX[cleanId];
    if (typeof index === 'number') {
      const main = document.querySelector('main');
      if (main && main.children[index]) {
        return main.children[index];
      }
    }
    return null;
  };

  const element = typeof target === 'object' && target instanceof Element ? target : findTargetElement(rawId);

  const getHeaderHeight = () => {
    const header = document.querySelector('.vm-header') || document.querySelector('.staggered-menu-header');
    if (header) {
      const rect = header.getBoundingClientRect();
      if (rect.height > 0) return rect.height;
    }
    return 72;
  };

  const headerHeight = getHeaderHeight();
  // Safe clearance so content is never hidden behind fixed/sticky header
  const offset = typeof options.offset === 'number' ? options.offset : -(headerHeight + 16);

  const executeScroll = (el) => {
    // Re-resolve element in case it has now mounted
    const resolvedEl = document.getElementById(rawId) || el;
    const rect = resolvedEl.getBoundingClientRect();
    const targetTop = Math.max(0, window.scrollY + rect.top + offset);

    // On touch/mobile devices: native window.scrollTo smooth scrolling is hardware-accelerated,
    // avoids any ticker/RAF lag, and guarantees reliable smooth scrolling on iOS and Android.
    if (isTouchOrMobile || prefersReducedMotion) {
      window.scrollTo({
        top: targetTop,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
      if (lenis) {
        try {
          lenis.scrollTo(targetTop, { immediate: true });
        } catch (_) {}
      }
      if (hash && window.location.hash !== hash) {
        window.history.pushState(null, '', hash);
      }
    } else if (lenis) {
      lenis.start();
      lenis.scrollTo(resolvedEl, {
        offset,
        duration: options.duration || 1.15,
        immediate: false,
        lock: false,
        onComplete: () => {
          if (hash && window.location.hash !== hash) {
            window.history.pushState(null, '', hash);
          }
        }
      });
    } else {
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
      if (hash && window.location.hash !== hash) {
        window.history.pushState(null, '', hash);
      }
    }

    // If target was a lazy container placeholder, fine-tune position once the actual section mounts
    if (resolvedEl !== el || !document.getElementById(rawId)) {
      setTimeout(() => {
        const mountedEl = document.getElementById(rawId);
        if (mountedEl && mountedEl !== resolvedEl) {
          const fineRect = mountedEl.getBoundingClientRect();
          const fineTop = Math.max(0, window.scrollY + fineRect.top + offset);
          if (Math.abs(window.scrollY - fineTop) > 20) {
            window.scrollTo({
              top: fineTop,
              behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
          }
        }
      }, 250);
    }
  };

  if (element) {
    executeScroll(element);
  } else if (hash) {
    setTimeout(() => {
      const retryEl = findTargetElement(rawId);
      if (retryEl) {
        executeScroll(retryEl);
      } else {
        window.location.hash = hash;
      }
    }, 120);
  }
}

// Expose immediately for early module consumption
if (typeof window !== 'undefined') {
  window.__scrollToAnchor = scrollToAnchor;
  window.__closeMobileMenu = closeMobileMenu;
}

export function useSmoothScroll() {
  const ref = useContext(SmoothScrollContext);
  return ref?.current || (typeof window !== 'undefined' ? window.__lenis : null);
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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect prefers-reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Detect mobile touch devices
    const isTouchOrMobile = (
      typeof window !== 'undefined' && (
        Boolean(window.matchMedia?.('(max-width: 991px)')?.matches) ||
        'ontouchstart' in window ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
        Boolean(window.matchMedia?.('(pointer: coarse)')?.matches)
      )
    );

    // Intercept smooth scrollIntoView to apply unified scrollToAnchor with proper header compensation
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (options) {
      if (typeof options === 'object' && options?.behavior === 'smooth') {
        scrollToAnchor(this);
        return;
      }
      return originalScrollIntoView.apply(this, arguments);
    };

    // On touch/mobile or reduced motion: bypass Lenis RAF loops completely for 100% native performance
    if (isTouchOrMobile || prefersReducedMotion) {
      return () => {
        Element.prototype.scrollIntoView = originalScrollIntoView;
      };
    }

    // Create exactly ONE global Lenis instance for desktop
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: false,
      touchMultiplier: 1,
      infinite: false,
      autoRaf: false
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;
    lenis.scrollToAnchor = scrollToAnchor;
    window.__scrollToAnchor = scrollToAnchor;

    // Lean RAF loop for Lenis before GSAP loads - activated on first user interaction
    let standaloneRafId = null;
    let tickerAdded = false;
    let updateTicker = null;
    let gsapInstance = null;
    let scrollTriggerInstance = null;
    let isRafRunning = false;

    const startStandaloneRaf = () => {
      if (isRafRunning || tickerAdded) return;
      isRafRunning = true;
      const runRaf = (time) => {
        if (!tickerAdded && lenisRef.current) {
          lenis.raf(time);
          standaloneRafId = requestAnimationFrame(runRaf);
        }
      };
      standaloneRafId = requestAnimationFrame(runRaf);
    };

    const initialInteractionEvents = ['wheel', 'scroll', 'keydown', 'pointerdown'];
    const handleInitialInteraction = () => {
      startStandaloneRaf();
      initialInteractionEvents.forEach((evt) => {
        window.removeEventListener(evt, handleInitialInteraction);
      });
    };
    initialInteractionEvents.forEach((evt) => {
      window.addEventListener(evt, handleInitialInteraction, { passive: true, once: true });
    });

    // Lazy load GSAP & ScrollTrigger only after the page becomes interactive and idle
    const cancelIdle = runAfterLoadAndIdle(() => {
      getGsapWithScrollTrigger().then((loaded) => {
        if (!loaded || !lenisRef.current) return;
        const { gsap, ScrollTrigger } = loaded;
        gsapInstance = gsap;
        scrollTriggerInstance = ScrollTrigger;

        // Cancel standalone RAF loop and hand over drive directly to GSAP Ticker
        if (standaloneRafId) {
          cancelAnimationFrame(standaloneRafId);
          standaloneRafId = null;
        }
        isRafRunning = false;

        // Official GSAP + Lenis integration pattern:
        // Convert GSAP ticker seconds to milliseconds for Lenis
        updateTicker = (time) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateTicker);
        gsap.ticker.lagSmoothing(0);
        tickerAdded = true;

        // Synchronize Lenis scroll updates directly into ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
      });
    });

    // Listen for reduced motion changes at runtime
    const handleMotionPreferenceChange = (e) => {
      if (lenisRef.current) {
        lenisRef.current.options.smoothWheel = !e.matches && !isTouchOrMobile;
      }
    };
    mediaQuery.addEventListener?.('change', handleMotionPreferenceChange);

    // Refresh ScrollTrigger strictly on window load (once) and debounced resize (>= 200ms)
    // Never call refresh during active scrolling
    let resizeTimer = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (scrollTriggerInstance) {
          scrollTriggerInstance.refresh();
        }
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    const handleWindowLoad = () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.refresh();
      }
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad, { once: true });
    }

    return () => {
      cancelIdle();
      if (standaloneRafId) cancelAnimationFrame(standaloneRafId);
      if (tickerAdded && gsapInstance && updateTicker) {
        gsapInstance.ticker.remove(updateTicker);
      }
      mediaQuery.removeEventListener?.('change', handleMotionPreferenceChange);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener('load', handleWindowLoad);
      window.removeEventListener('resize', handleResize);
      Element.prototype.scrollIntoView = originalScrollIntoView;
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
      window.__scrollToAnchor = null;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
