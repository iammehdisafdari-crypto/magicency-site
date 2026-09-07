import { useState, useEffect } from 'react';

/**
 * useDeferredTarget
 * 
 * Defers attaching a DOM element ref as a Framer Motion `useScroll` target
 * until after the initial critical render, layout, and remote font stabilization.
 * 
 * Prevents initial-load Forced Reflows caused by Framer Motion's synchronous
 * `measureAll` pass walking the `offsetParent` chain of below-the-fold sections
 * while the document layout is dirty from DOM mount and remote font loading.
 * 
 * @param {React.RefObject} ref - The DOM element ref to track
 * @returns {React.RefObject|undefined} The ref once stabilized, or undefined initially
 */
export function useDeferredTarget(ref) {
  const [target, setTarget] = useState(undefined);

  useEffect(() => {
    let idleId;
    let rafId;
    let isCancelled = false;

    const activate = () => {
      if (isCancelled) return;
      setTarget(ref);
    };

    // If user starts scrolling before idle callback, activate immediately
    window.addEventListener('scroll', activate, { passive: true, once: true });

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(activate, { timeout: 600 });
    } else if (typeof window !== 'undefined') {
      rafId = window.requestAnimationFrame(() => {
        rafId = window.requestAnimationFrame(activate);
      });
    }

    return () => {
      isCancelled = true;
      window.removeEventListener('scroll', activate);
      if (typeof window !== 'undefined') {
        if ('cancelIdleCallback' in window && idleId) {
          window.cancelIdleCallback(idleId);
        }
        if (rafId) {
          window.cancelAnimationFrame(rafId);
        }
      }
    };
  }, [ref]);

  return target;
}
