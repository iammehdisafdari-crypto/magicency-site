/**
 * High-performance GSAP Lazy Loader & Configurator
 * 
 * - Zero GSAP in initial main bundle
 * - Dynamically imports GSAP core & ScrollTrigger after page becomes interactive
 * - Applies autoSleep: 60, force3D: true, and limitCallbacks: true
 * - Avoids forced layout recalculations and long tasks on main thread
 */

let gsapPromise = null;
let scrollTriggerPromise = null;

export function applyGsapConfig(gsap) {
  if (gsap?.config) {
    gsap.config({
      autoSleep: 60,
      force3D: true
    });
  }
}

export function applyScrollTriggerConfig(ScrollTrigger) {
  if (ScrollTrigger?.config) {
    ScrollTrigger.config({
      limitCallbacks: true
    });
  }
}

/**
 * Lazy loads GSAP core only
 */
export async function getGsap() {
  if (typeof window === 'undefined') return null;

  if (!gsapPromise) {
    gsapPromise = import('gsap').then(({ gsap }) => {
      applyGsapConfig(gsap);
      return gsap;
    });
  }
  return gsapPromise;
}

/**
 * Lazy loads GSAP + ScrollTrigger only (isolated plugin chunk)
 */
export async function getGsapWithScrollTrigger() {
  if (typeof window === 'undefined') return null;

  if (!scrollTriggerPromise) {
    scrollTriggerPromise = Promise.all([
      getGsap(),
      import('gsap/ScrollTrigger')
    ]).then(([gsap, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      applyScrollTriggerConfig(ScrollTrigger);
      return { gsap, ScrollTrigger };
    });
  }
  return scrollTriggerPromise;
}

/**
 * Schedules execution on first user scroll/interaction or when main thread is truly idle well after initial load.
 * Prevents GSAP from entering the critical rendering chain during initial render / LCP.
 */
export function runOnIdle(callback, idleDelay = 200) {
  if (typeof window === 'undefined') return () => {};

  let idleId = null;
  let timerId = null;
  let executed = false;

  const run = () => {
    if (executed) return;
    executed = true;
    cleanup();
    callback();
  };

  const interactionEvents = ['scroll', 'wheel', 'touchmove', 'touchstart'];
  const handleInteraction = () => run();

  const cleanup = () => {
    interactionEvents.forEach((evt) => {
      window.removeEventListener(evt, handleInteraction);
    });
    if (timerId) clearTimeout(timerId);
    if (idleId && 'cancelIdleCallback' in window) {
      window.cancelIdleCallback(idleId);
    }
    window.removeEventListener('load', scheduleIdle);
  };

  // Immediate trigger on scroll / user interaction
  interactionEvents.forEach((evt) => {
    window.addEventListener(evt, handleInteraction, { once: true, passive: true });
  });

  // Defer idle fallback until well after full window load
  const scheduleIdle = () => {
    if (executed) return;
    timerId = setTimeout(() => {
      if (executed) return;
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(run, { timeout: 300 });
      } else {
        run();
      }
    }, idleDelay);
  };

  if (document.readyState === 'complete') {
    scheduleIdle();
  } else {
    window.addEventListener('load', scheduleIdle, { once: true });
  }

  return cleanup;
}
