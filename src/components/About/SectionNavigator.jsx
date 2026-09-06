import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';

export default function SectionNavigator() {
  const { lang, isRTL } = useLanguage();
  const navItems = ABOUT_DATA[lang]?.navigator || ABOUT_DATA.en.navigator;
  const [activeId, setActiveId] = useState('section-01');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`about-sticky-navigator ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="About Page Chapters"
    >
      <div className="navigator-track">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`navigator-item ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="nav-num">{item.num}</span>
              <span className="nav-label">{item.label}</span>
              <span className="nav-line" aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
