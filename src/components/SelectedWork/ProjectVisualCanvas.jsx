import React from 'react';

// Project Work Asset Configurations
const PROJECT_MEDIA = {
  fintech: {
    primary: {
      src: '/assets/work/velox_primary.jpg',
      alt: 'Velox Financial Web Application & Algorithmic Trading Platform',
      badge: 'DESKTOP PLATFORM UI'
    },
    secondary: {
      src: '/assets/work/velox_secondary.jpg',
      alt: 'Velox Mobile 1-Tap Instant Execution & Deposit App',
      badge: 'MOBILE iOS FLOW'
    },
    metaLabel: 'DELIVERABLE // WEB APP + MOBILE FLOW',
    stat: '+148% LTV EXPANSION'
  },
  luxury: {
    primary: {
      src: '/assets/work/lumina_primary.jpg',
      alt: 'Lumina Luxury Editorial Campaign Lookbook & Brand Identity',
      badge: 'CAMPAIGN ART DIRECTION'
    },
    secondary: {
      src: '/assets/work/lumina_secondary.jpg',
      alt: 'Lumina Dynamic Portrait Video Ad Creative with High-Velocity Hook',
      badge: 'VIDEO AD CREATIVE'
    },
    metaLabel: 'DELIVERABLE // EDITORIAL CAMPAIGN + PAID ADS',
    stat: '4.8X BLENDED ROAS'
  },
  saas: {
    primary: {
      src: '/assets/work/synapse_primary.jpg',
      alt: 'Synapse AI A/B Testing & Funnel Conversion Rate Optimization Lab',
      badge: 'CRO EXPERIMENTATION LAB'
    },
    secondary: {
      src: '/assets/work/synapse_secondary.jpg',
      alt: 'Synapse AI High-Intent Interactive Demo Landing Page',
      badge: 'INTERACTIVE DEMO UI'
    },
    metaLabel: 'DELIVERABLE // DEMO FUNNEL + CRO OPTIMIZATION',
    stat: '+210% PIPELINE VELOCITY'
  },
  health: {
    primary: {
      src: '/assets/work/nexus_primary.jpg',
      alt: 'Nexus Health Deterministic Telemetry & 3D Customer Journey Attribution',
      badge: 'TELEMETRY ATTRIBUTION MATRIX'
    },
    secondary: {
      src: '/assets/work/nexus_secondary.jpg',
      alt: 'Nexus Health Automated Patient Retention Operating Engine',
      badge: 'GROWTH INFRASTRUCTURE'
    },
    metaLabel: 'DELIVERABLE // TELEMETRY ENGINE + RETENTION LOOPS',
    stat: '+89% PATIENT RETENTION'
  }
};

export default function ProjectVisualCanvas({ type, accent }) {
  const media = PROJECT_MEDIA[type] || PROJECT_MEDIA.fintech;

  return (
    <div className={`project-case-study-visual ${type}-composition`}>
      {/* Primary Hero Deliverable */}
      <div className="case-primary-media-wrap">
        <img
          src={media.primary.src}
          alt={media.primary.alt}
          className="case-primary-img"
          loading="lazy"
          decoding="async"
        />
        <div className="media-glass-vignette" />
        
        {/* Deliverable Badge */}
        <div className="media-tag-pill primary-tag">
          <span className="pill-status-dot" style={{ backgroundColor: accent }} />
          <span>{media.primary.badge}</span>
        </div>
      </div>

      {/* Secondary Overlapping Deliverable (Mobile / Creative / Telemetry) */}
      <div className="case-secondary-media-wrap">
        <img
          src={media.secondary.src}
          alt={media.secondary.alt}
          className="case-secondary-img"
          loading="lazy"
          decoding="async"
        />
        <div className="media-glass-vignette" />

        <div className="media-tag-pill secondary-tag">
          <span>{media.secondary.badge}</span>
        </div>
      </div>

      {/* Floating Deliverable Intelligence Strip */}
      <div className="case-media-intel-strip">
        <span className="intel-meta-text">{media.metaLabel}</span>
        <span className="intel-stat-badge" style={{ color: accent, borderColor: `${accent}40` }}>
          {media.stat}
        </span>
      </div>
    </div>
  );
}
