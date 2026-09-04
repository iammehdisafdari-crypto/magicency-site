import React from 'react';

const CAPABILITY_IMAGES = {
  strategy: {
    src: '/assets/capabilities/strategy.jpg',
    alt: 'Growth Strategy & Market Intelligence Blueprint Dossier',
    code: 'STRATEGY // 01',
    tag: 'ARCHITECTURE'
  },
  creative: {
    src: '/assets/capabilities/creative.jpg',
    alt: 'High-End Creative Direction & Typographic Campaign Production Studio',
    code: 'CREATIVE // 02',
    tag: 'ART DIRECTION'
  },
  performance: {
    src: '/assets/capabilities/performance.jpg',
    alt: 'Multi-Channel Paid Media & Algorithmic Campaign Command Setup',
    code: 'PERFORMANCE // 03',
    tag: 'ACQUISITION'
  },
  experimentation: {
    src: '/assets/capabilities/experimentation.jpg',
    alt: 'A/B Testing & Conversion Rate Optimization Lab with Heatmap Analytics',
    code: 'EXPERIMENTATION // 04',
    tag: 'CONVERSION'
  },
  data: {
    src: '/assets/capabilities/analytics.jpg',
    alt: 'Deterministic Telemetry & Volumetric Customer Journey Attribution Matrix',
    code: 'TELEMETRY // 05',
    tag: 'INTELLIGENCE'
  },
  systems: {
    src: '/assets/capabilities/growth_systems.jpg',
    alt: 'Automated Growth Infrastructure & Marketing Operating Engine Console',
    code: 'INFRASTRUCTURE // 06',
    tag: 'SYSTEMS'
  }
};

export default function CapabilityVisual({ type, isDominant }) {
  const asset = CAPABILITY_IMAGES[type] || CAPABILITY_IMAGES.strategy;

  return (
    <div className={`capability-hero-visual-frame ${isDominant ? 'visual-is-dominant' : ''}`}>
      {/* High-Fidelity Hero Image */}
      <div className="cap-image-viewport">
        <img
          src={asset.src}
          alt={asset.alt}
          className="cap-editorial-img"
          loading="lazy"
          decoding="async"
        />

        {/* Cinematic Glare & Vignette Overlay */}
        <div className="cap-vignette-overlay" />

        {/* High-Tech Technical Identifier Badge */}
        <div className="cap-asset-badge">
          <span className="asset-dot" />
          <span className="asset-code">{asset.code}</span>
        </div>

        <div className="cap-tag-corner">
          <span>{asset.tag}</span>
        </div>
      </div>
    </div>
  );
}
