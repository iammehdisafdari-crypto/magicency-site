import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import CapabilitiesHero from './CapabilitiesHero';
import CapabilitySystem from './CapabilitySystem';
import SystemBuilder from './SystemBuilder';
import CapabilityExplorer from './CapabilityExplorer';
import OutcomeTransformation from './OutcomeTransformation';
import CapabilitiesCTA from './CapabilitiesCTA';
import './Capabilities.css';

export default function CapabilitiesPage() {
  const { lang, isRTL, t } = useLanguage();
  const pageMeta = t.capabilities?.pageMeta || {};

  useEffect(() => {
    // Reset window scroll to top on mount
    window.scrollTo(0, 0);

    // Dynamic document title
    document.title = pageMeta.title || (
      lang === 'fa'
        ? 'توانمندی‌ها // آنچه می‌سازیم // مجیکنسـی (MAGICENCY®)'
        : 'Capabilities // What We Can Build // MAGICENCY®'
    );
  }, [lang, pageMeta.title]);

  return (
    <div className={`capabilities-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      
      {/* 01 — Hero: What we can build when the pieces connect */}
      <CapabilitiesHero />

      {/* 02 — The Capability System: Connected modular architecture (5 core domains) */}
      <CapabilitySystem />

      {/* 03 — Build the System: Concrete business challenge combinations snapping together */}
      <SystemBuilder />

      {/* 04 — Capability Depth: Deep visual exploration of individual capabilities */}
      <CapabilityExplorer />

      {/* 05 — From Capability to Outcome: Capabilities -> Connected System -> Commercial Moat */}
      <OutcomeTransformation />

      {/* 06 — Final Statement & Project Discovery Trigger */}
      <CapabilitiesCTA />

    </div>
  );
}
