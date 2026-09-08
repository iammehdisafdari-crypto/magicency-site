import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { trackPageView } from '../utils/analytics';

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

  const navigate = useCallback((to, options = { scrollToTop: true }) => {
    if (typeof window === 'undefined') return;
    
    // Check if navigating to anchor on same page or another route
    if (to.startsWith('#')) {
      const elem = document.querySelector(to);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const [pathPart, hashPart] = to.split('#');
    const targetPath = pathPart.replace(/\/$/, '') || '/';
    const currentPathNormalized = window.location.pathname.replace(/\/$/, '') || '/';

    if (currentPathNormalized !== targetPath) {
      window.history.pushState({}, '', to);
      setCurrentPath(targetPath);
      if (!hashPart && options.scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (hashPart) {
      window.history.pushState({}, '', to);
      const elem = document.getElementById(hashPart);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const isHomePage = currentPath === '/' || currentPath === '';
  const isWorkPage = currentPath === '/work' || currentPath.startsWith('/work/');
  const isApproachPage = currentPath === '/approach' || currentPath.startsWith('/approach/');
  const isCapabilitiesPage = currentPath === '/capabilities' || currentPath.startsWith('/capabilities/');
  const isBlogPage = currentPath === '/blog' || currentPath.startsWith('/blog/');
  const isAboutPage = currentPath === '/about' || currentPath.startsWith('/about/');
  const blogArticleSlug = currentPath.startsWith('/blog/') ? currentPath.replace(/^\/blog\//, '').replace(/\/$/, '') : null;
  const isNotFound = currentPath === '/404' || (!isHomePage && !isWorkPage && !isApproachPage && !isCapabilitiesPage && !isBlogPage && !isAboutPage);

  return (
    <RouterContext.Provider value={{ currentPath, navigate, isHomePage, isWorkPage, isApproachPage, isCapabilitiesPage, isBlogPage, isAboutPage, blogArticleSlug, isNotFound }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
