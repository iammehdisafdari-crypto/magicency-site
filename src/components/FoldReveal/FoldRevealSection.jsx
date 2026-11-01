import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { getGsapWithScrollTrigger } from '../../utils/gsapLoader';
import { FoldRevealContext } from './FoldRevealContext';

export default function FoldRevealSection({
  as: Component = 'div',
  replay = true,
  stagger = 0.1,
  start = 'top 90%',
  end = 'bottom 10%',
  className = '',
  style = {},
  children,
  ...props
}) {
  const containerRef = useRef(null);
  const itemsRef = useRef(new Map());
  const hasTriggeredRef = useRef(false);
  const isInViewportRef = useRef(false);

  // Register child controller
  const registerItem = useCallback((id, controller) => {
    itemsRef.current.set(id, controller);

    // If section has already triggered and is in viewport, play immediately
    if (isInViewportRef.current && controller?.play) {
      controller.play(0);
    }

    return () => {
      itemsRef.current.delete(id);
    };
  }, []);

  const playAll = useCallback(() => {
    // Avoid re-triggering animation if already active in viewport
    if (isInViewportRef.current) return;
    isInViewportRef.current = true;
    hasTriggeredRef.current = true;

    const items = Array.from(itemsRef.current.values());
    items.forEach((item, index) => {
      if (typeof item?.play === 'function') {
        const itemStagger = index * stagger;
        item.play(itemStagger);
      }
    });
  }, [stagger]);

  const resetAll = useCallback(() => {
    // Safety guard: if the element is currently visible in viewport, NEVER reset/hide it
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight || document.documentElement.clientHeight || 0;
      const inView = rect.top < windowH && rect.bottom > 0;
      if (inView) {
        return;
      }
    }

    isInViewportRef.current = false;
    const items = Array.from(itemsRef.current.values());
    items.forEach((item) => {
      if (typeof item?.reset === 'function') {
        item.reset();
      }
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const el = containerRef.current;
    if (!el) return undefined;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduceMotion) {
      playAll();
      return undefined;
    }

    let isCancelled = false;
    let ctx = null;
    let observer = null;

    // High-performance IntersectionObserver handles enter and return reveals reliably
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playAll();
          } else if (replay) {
            const windowH = window.innerHeight || document.documentElement.clientHeight || 0;
            // Only reset when completely outside viewport so it can re-animate on return
            if (entry.boundingClientRect.bottom < 0 || entry.boundingClientRect.top > windowH) {
              resetAll();
            }
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '40px 0px 40px 0px'
      });
      observer.observe(el);
    } else {
      getGsapWithScrollTrigger().then((loaded) => {
      if (isCancelled || !loaded || !containerRef.current) return;
      const { gsap, ScrollTrigger } = loaded;

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: el,
          start,
          end,
          once: !replay,
          onEnter: () => {
            playAll();
          },
          onLeave: () => {
            if (replay) resetAll();
          },
          onEnterBack: () => {
            if (replay) playAll();
          },
          onLeaveBack: () => {
            if (replay) resetAll();
          }
        });
      }, containerRef);
    });
  }

    return () => {
      isCancelled = true;
      if (observer) {
        observer.disconnect();
      }
      if (ctx) {
        ctx.revert();
      }
    };
  }, [playAll, resetAll, replay, start, end]);

  const contextValue = useMemo(() => ({
    registerItem,
    isSectionManaged: true,
    replay
  }), [registerItem, replay]);

  return (
    <FoldRevealContext.Provider value={contextValue}>
      <Component ref={containerRef} className={className} style={style} {...props}>
        {children}
      </Component>
    </FoldRevealContext.Provider>
  );
}
