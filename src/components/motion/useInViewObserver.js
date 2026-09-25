import { useState, useEffect, useRef } from 'react';

/**
 * High-performance Native IntersectionObserver Hook
 * Replaces Framer Motion's whileInView / useInView to completely avoid
 * JavaScript layout measurements (getBoundingClientRect) and forced reflows.
 */
export function useInViewObserver(options = {}) {
  const { once = true, rootMargin = '0px', amount = 0.15 } = options;
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        rootMargin,
        threshold: typeof amount === 'number' ? amount : 0.15
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, amount]);

  return [ref, isInView];
}

export default useInViewObserver;
