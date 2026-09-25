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
 * Schedules execution when main thread is idle after page interactive
 */
export function runOnIdle(callback, timeout = 2500) {
  if (typeof window === 'undefined') return () => {};

  let id = null;
  let executed = false;

  const run = () => {
    if (executed) return;
    executed = true;
    if ('requestIdleCallback' in window) {
      id = window.requestIdleCallback(() => callback(), { timeout });
    } else {
      id = setTimeout(callback, 50);
    }
  };

  if (document.readyState === 'complete') {
    run();
  } else {
    window.addEventListener('load', run, { once: true });
    if (document.readyState === 'interactive') {
      setTimeout(run, 200);
    }
  }

  return () => {
    executed = true;
    if (id !== null) {
      if ('cancelIdleCallback' in window && typeof id === 'number') {
        window.cancelIdleCallback(id);
      } else {
        clearTimeout(id);
      }
    }
    window.removeEventListener('load', run);
  };
}
