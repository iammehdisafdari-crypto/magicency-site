import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { trackPageView } from '../utils/analytics';
import { scrollToAnchor, closeMobileMenu } from '../components/SmoothScroll/SmoothScrollProvider';

const DEFAULT_NAVIGATE_OPTIONS = Object.freeze({ scrollToTop: true });

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
  isWorkPage: false
});

export function RouterProvider({ children, initialPath }) {
  const getNormalizedPath = () => {
    if (initialPath) return initialPath.replace(/\/$/, '') || '/';
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    return path;
  };

  const [currentPath, setCurrentPath] = useState(getNormalizedPath);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    trackPageView(currentPath, document.title);
  }, [currentPath]);

  const navigate = useCallback((to, options = DEFAULT_NAVIGATE_OPTIONS) => {
    if (typeof window === 'undefined') return;
    
    // Close open mobile navigation menu
    closeMobileMenu();

    const isCurrentHome = currentPath === '/' || currentPath === '';

    // In-page anchor when already on homepage (e.g. '#work' or '/#work')
    const isAnchorOnHome = isCurrentHome && (to.startsWith('#') || to.startsWith('/#'));
    if (isAnchorOnHome) {
      const hash = to.startsWith('/#') ? to.slice(1) : to;
      if (window.__scrollToAnchor) {
        window.__scrollToAnchor(hash);
      } else {
        scrollToAnchor(hash);
      }
      return;
    }

    // Anchor targeted at home sections from a subpage (e.g. '#work' from '/about')
    let routeTarget = to;
    if (to.startsWith('#') && !isCurrentHome) {
      routeTarget = '/' + to;
    }
    // Prevent accidental duplicate slashes (e.g. '//work')
    routeTarget = routeTarget.replace(/^\/\/+/, '/');

    const [pathPart, hashPart] = routeTarget.split('#');
    const targetPath = (pathPart.replace(/\/+$/, '') || '/').replace(/^\/\/+/, '/');
    const currentPathNormalized = (window.location.pathname.replace(/\/+$/, '') || '/').replace(/^\/\/+/, '/');

    if (currentPathNormalized !== targetPath) {
      window.history.pushState({}, '', routeTarget);
      setCurrentPath(targetPath);
      if (hashPart) {
        setTimeout(() => {
          if (window.__scrollToAnchor) {
            window.__scrollToAnchor('#' + hashPart);
          } else {
            scrollToAnchor('#' + hashPart);
          }
        }, 150);
      } else if (options.scrollToTop) {
        if (window.__lenis) {
          try {
            window.__lenis.scrollTo(0, { immediate: true });
          } catch (_) {}
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else if (hashPart) {
      if (window.__scrollToAnchor) {
        window.__scrollToAnchor('#' + hashPart);
      } else {
        scrollToAnchor('#' + hashPart);
      }
    } else if (options.scrollToTop) {
      if (window.__lenis) {
        try {
          window.__lenis.scrollTo(0, { immediate: false });
        } catch (_) {}
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath]);

  // Global delegated click listener for internal anchors & routes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleGlobalClick = (e) => {
      // Ignore non-left click or click with modifier keys
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Ignore external or protocol links
      if (
        anchor.target === '_blank' ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        href.startsWith('http://') ||
        href.startsWith('https://')
      ) {
        return;
      }

      const isCurrentHome = currentPath === '/' || currentPath === '';

      // Direct in-page anchor links (e.g. href="#work", href="#capabilities", href="#about", href="#blog")
      if (href.startsWith('#')) {
        e.preventDefault();
        closeMobileMenu();

        if (isCurrentHome) {
          // On home page: directly scroll to anchor with proper sticky header offset
          if (window.__scrollToAnchor) {
            window.__scrollToAnchor(href);
          } else {
            scrollToAnchor(href);
          }
        } else {
          // On subpage: transition to home page with section anchor
          navigate(href.startsWith('/') ? href : '/' + href);
        }
        return;
      }

      // Root-prefixed anchor links (e.g. href="/#work", href="/#capabilities")
      if (href.startsWith('/#')) {
        e.preventDefault();
        closeMobileMenu();

        if (isCurrentHome) {
          const hash = href.slice(1);
          if (window.__scrollToAnchor) {
            window.__scrollToAnchor(hash);
          } else {
            scrollToAnchor(hash);
          }
        } else {
          navigate(href);
        }
        return;
      }

      // Client-side route navigation for relative links (e.g. href="/work", href="/about")
      if (href.startsWith('/')) {
        e.preventDefault();
        closeMobileMenu();
        navigate(href);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [currentPath, navigate]);

  const isHomePage = currentPath === '/' || currentPath === '';
  const isWorkPage = currentPath === '/work' || currentPath.startsWith('/work/');
  const isApproachPage = currentPath === '/approach' || currentPath.startsWith('/approach/');
  const isCapabilitiesPage = currentPath === '/capabilities' || currentPath.startsWith('/capabilities/');
  const isBlogPage = currentPath === '/blog' || currentPath.startsWith('/blog/');
  const isAboutPage = currentPath === '/about' || currentPath.startsWith('/about/');
  const blogArticleSlug = currentPath.startsWith('/blog/') ? currentPath.replace(/^\/blog\//, '').replace(/\/$/, '') : null;
  const isNotFound = currentPath === '/404' || (!isHomePage && !isWorkPage && !isApproachPage && !isCapabilitiesPage && !isBlogPage && !isAboutPage);

  const contextValue = useMemo(() => ({
    currentPath,
    navigate,
    isHomePage,
    isWorkPage,
    isApproachPage,
    isCapabilitiesPage,
    isBlogPage,
    isAboutPage,
    blogArticleSlug,
    isNotFound
  }), [
    currentPath,
    navigate,
    isHomePage,
    isWorkPage,
    isApproachPage,
    isCapabilitiesPage,
    isBlogPage,
    isAboutPage,
    blogArticleSlug,
    isNotFound
  ]);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
