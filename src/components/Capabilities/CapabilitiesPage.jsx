import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { SERVICES_DATA } from '../../data/capabilitiesData';
import CapabilitiesHero from './CapabilitiesHero';
import CapabilitiesServices from './CapabilitiesServices';
import CapabilitiesProof from './CapabilitiesProof';
import CapabilitiesFAQ from './CapabilitiesFAQ';
import CapabilitiesCTA from './CapabilitiesCTA';
import CapabilityDetailPage from './CapabilityDetailPage';
import './Capabilities.css';

export default function CapabilitiesPage() {
  const { lang, isRTL } = useLanguage();
  const { currentPath } = useRouter();

  // Route sub-path detection for dedicated capability pages (/capabilities/:slug)
  const isSubRoute = currentPath.startsWith('/capabilities/') && currentPath !== '/capabilities';
  const slug = isSubRoute ? currentPath.replace(/^\/capabilities\//, '').replace(/\/$/, '') : null;
  const currentCapability = slug
    ? SERVICES_DATA.find((s) => s.slug === slug || s.id === slug)
    : null;

  useEffect(() => {
    // If not a sub-route, handle anchor scrolling or top scroll and title
    if (!isSubRoute) {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const timer = setTimeout(() => {
          const elem = document.getElementById(targetId);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
        return () => clearTimeout(timer);
      } else {
        window.scrollTo(0, 0);
      }

      document.title =
        lang === 'fa'
          ? 'توانمندی‌ها و خدمات // معماری سیستم‌های رشد // مجیکنسـی (MAGICENCY®)'
          : 'Capabilities & Services // Engineering Growth Systems // MAGICENCY®';
    }
  }, [lang, isSubRoute, currentPath]);

  // If sub-route is requested and valid capability exists, render dedicated capability page
  if (isSubRoute && currentCapability) {
    return (
      <div className={`capabilities-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
        <CapabilityDetailPage service={currentCapability} />
      </div>
    );
  }

  // Otherwise render main editorial capabilities overview (CR38 architecture)
  return (
    <div className={`capabilities-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      {/* 01. HERO */}
      <CapabilitiesHero />

      {/* 02. EDITORIAL SERVICES LIST (CR38 .services-list 1:1) */}
      <CapabilitiesServices />

      {/* 03. SUPPORTING PROOF / STATS */}
      <CapabilitiesProof />

      {/* 04. FAQ */}
      <CapabilitiesFAQ />

      {/* 05. FINAL CTA TRANSITION */}
      <CapabilitiesCTA />
    </div>
  );
}
