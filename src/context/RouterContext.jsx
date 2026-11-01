import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { trackPageView } from '../utils/analytics';
import { scrollToAnchor, closeMobileMenu } from '../components/SmoothScroll/SmoothScrollProvider';

const DEFAULT_NAVIGATE_OPTIONS = Object.freeze({ scrollToTop: true });

const RouterContext = createContext({
  currentPath: '/',
  basePath: '/',
  lang: 'fa',
  navigate: () => {},
  localePath: (p) => p,
  switchLangPath: '/en',
  isHomePage: true,
  isWorkPage: false,
  isApproachPage: false,
  isCapabilitiesPage: false,
  isBlogPage: false,
  isAboutPage: false,
  blogArticleSlug: null,
  isNotFound: false
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

  // Determine current language strictly from path
  const isEn = currentPath === '/en' || currentPath.startsWith('/en/');
  const lang = isEn ? 'en' : 'fa';

  // Base path without /en prefix
  const basePath = useMemo(() => {
    if (currentPath === '/en' || currentPath === '') return '/';
    if (currentPath.startsWith('/en/')) {
      const stripped = currentPath.slice(3).replace(/\/+$/, '');
      return stripped || '/';
    }
    return currentPath;
  }, [currentPath]);

  const isCurrentHome = basePath === '/' || basePath === '';

  // Helper to prefix internal URLs with /en when in English mode
  const localePath = useCallback((to) => {
    if (!to) return to;
    if (
      to.startsWith('http://') ||
      to.startsWith('https://') ||
      to.startsWith('mailto:') ||
      to.startsWith('tel:') ||
      to.startsWith('javascript:')
    ) {
      return to;
    }

    if (lang === 'en') {
      if (to === '/') return '/en';
      if (to === '/en' || to.startsWith('/en/')) return to;
      if (to.startsWith('/#')) return `/en${to.slice(1)}`;
      if (to.startsWith('#')) return to;
      return `/en${to.startsWith('/') ? to : '/' + to}`;
    }

    // fa mode
    if (to === '/en') return '/';
    if (to.startsWith('/en/')) return to.slice(3) || '/';
    return to;
  }, [lang]);

  // The reciprocal URL in the other language
  const switchLangPath = useMemo(() => {
    if (lang === 'en') {
      return basePath; // switch to fa
    }
    return basePath === '/' ? '/en' : `/en${basePath}`; // switch to en
  }, [lang, basePath]);

  const navigate = useCallback((to, options = DEFAULT_NAVIGATE_OPTIONS) => {
    if (typeof window === 'undefined') return;
    
    // Close open mobile navigation menu
    closeMobileMenu();

    let targetUrl = to;
    if (lang === 'en' && targetUrl.startsWith('/') && !targetUrl.startsWith('/en') && !targetUrl.startsWith('//')) {
      targetUrl = targetUrl === '/' ? '/en' : `/en${targetUrl}`;
    }

    // In-page anchor when already on homepage (e.g. '#work' or '/#work' or '/en#work')
    const isAnchor = targetUrl.startsWith('#') || targetUrl.startsWith('/#') || targetUrl.startsWith('/en#') || targetUrl.startsWith('/en/#');
    if (isCurrentHome && isAnchor) {
      const hash = targetUrl.replace(/^\/(?:en)?\/?#/, '').replace(/^#/, '');
      if (window.__scrollToAnchor) {
        window.__scrollToAnchor(hash);
      } else {
        scrollToAnchor(hash);
      }
      return;
    }

    // Anchor targeted at home sections from a subpage
    let routeTarget = targetUrl;
    if (targetUrl.startsWith('#') && !isCurrentHome) {
      routeTarget = (lang === 'en' ? '/en' : '') + '/' + targetUrl;
    }
    // Prevent accidental duplicate slashes
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
  }, [currentPath, isCurrentHome, lang]);

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

      // Direct in-page anchor links (e.g. href="#work", href="#capabilities")
      if (href.startsWith('#')) {
        e.preventDefault();
        closeMobileMenu();

        if (isCurrentHome) {
          if (window.__scrollToAnchor) {
            window.__scrollToAnchor(href);
          } else {
            scrollToAnchor(href);
          }
        } else {
          const homePrefix = lang === 'en' ? '/en' : '';
          navigate(`${homePrefix}/${href}`);
        }
        return;
      }

      // Root-prefixed anchor links (e.g. href="/#work", href="/en/#work", href="/en#work")
      if (href.startsWith('/#') || href.startsWith('/en/#') || href.startsWith('/en#')) {
        e.preventDefault();
        closeMobileMenu();

        if (isCurrentHome) {
          const hash = href.replace(/^\/(?:en)?\/?#/, '');
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

      // Client-side route navigation for relative links (e.g. href="/work", href="/en/work")
      if (href.startsWith('/')) {
        e.preventDefault();
        closeMobileMenu();
        navigate(href);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [currentPath, isCurrentHome, lang, navigate]);

  const isHomePage = isCurrentHome;
  const isWorkPage = basePath === '/work' || basePath.startsWith('/work/');
  const isApproachPage = basePath === '/approach' || basePath.startsWith('/approach/');
  const isCapabilitiesPage = basePath === '/capabilities' || basePath.startsWith('/capabilities/');
  const isBlogPage = basePath === '/blog' || basePath.startsWith('/blog/');
  const isAboutPage = basePath === '/about' || basePath.startsWith('/about/');
  const blogArticleSlug = basePath.startsWith('/blog/') ? basePath.replace(/^\/blog\//, '').replace(/\/$/, '') : null;
  const isNotFound = basePath === '/404' || (!isHomePage && !isWorkPage && !isApproachPage && !isCapabilitiesPage && !isBlogPage && !isAboutPage);

  const contextValue = useMemo(() => ({
    currentPath,
    basePath,
    lang,
    navigate,
    localePath,
    switchLangPath,
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
    basePath,
    lang,
    navigate,
    localePath,
    switchLangPath,
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
