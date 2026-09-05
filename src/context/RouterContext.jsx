import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
  isWorkPage: false
});

export function RouterProvider({ children }) {
  const getNormalizedPath = () => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    return path;
  };

  const [currentPath, setCurrentPath] = useState(getNormalizedPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
      setCurrentPath(to.replace(/\/$/, '') || '/');
      if (options.scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const isWorkPage = currentPath === '/work' || currentPath.startsWith('/work/');
  const isApproachPage = currentPath === '/approach' || currentPath.startsWith('/approach/');
  const isCapabilitiesPage = currentPath === '/capabilities' || currentPath.startsWith('/capabilities/');
  const isBlogPage = currentPath === '/blog' || currentPath.startsWith('/blog/');
  const isAboutPage = currentPath === '/about' || currentPath.startsWith('/about/');
  const blogArticleSlug = currentPath.startsWith('/blog/') ? currentPath.replace(/^\/blog\//, '').replace(/\/$/, '') : null;

  return (
    <RouterContext.Provider value={{ currentPath, navigate, isWorkPage, isApproachPage, isCapabilitiesPage, isBlogPage, isAboutPage, blogArticleSlug }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
