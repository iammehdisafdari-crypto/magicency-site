import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { CAPABILITY_DOMAINS } from '../../data/capabilitiesData';

export default function CapabilityExplorer() {
  const { t, isRTL } = useLanguage();
  const d = t.capabilities?.depth || {};
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);

  const activeDomain = CAPABILITY_DOMAINS[activeDomainIndex] || CAPABILITY_DOMAINS[0];

  return (
    <section className="capabilities-section capability-explorer-section" aria-label="Capability Depth Explorer">
      <div className="container">
        {/* Section Header */}
        <div className="capabilities-section-header text-center">
          <div className="capabilities-eyebrow-pill">
            <span className="capabilities-pill-indicator" />
            <span className="capabilities-pill-text">{d.badge || '03 / DEPTH'}</span>
          </div>
          <h2 className="capabilities-section-title">{d.title}</h2>
          <p className="capabilities-section-subtext">{d.subtext}</p>
        </div>

        {/* Explorer Workspace */}
        <div className="capability-explorer-workspace">
          {/* Domain Selector Sidebar / Tabs */}
          <div className="explorer-domain-selector">
            {CAPABILITY_DOMAINS.map((domain, idx) => {
              const isSelected = idx === activeDomainIndex;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setActiveDomainIndex(idx)}
                  className={`explorer-domain-btn ${isSelected ? 'active' : ''}`}
                >
                  <span className="btn-index">{domain.number}</span>
                  <div className="btn-text-wrap">
                    <span className="btn-title">{isRTL ? domain.titleFa : domain.titleEn}</span>
                    <span className="btn-tagline">{isRTL ? domain.taglineFa : domain.taglineEn}</span>
                  </div>
                  <span className="btn-arrow">→</span>
                </button>
              );
            })}
          </div>

          {/* Deep Exploration Showcase Canvas */}
          <div className="explorer-detail-canvas">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                className="explorer-detail-layout"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Domain Monumental Hero Bar */}
                <div className="detail-monument-bar">
                  <span className="monument-number">{activeDomain.number}</span>
                  <div className="monument-info">
                    <span className="monument-badge">{isRTL ? 'معماری دیسیپلین' : 'DOMAIN ARCHITECTURE'}</span>
                    <h3 className="monument-title">
                      {isRTL ? activeDomain.titleFa : activeDomain.titleEn}
                    </h3>
                    <p className="monument-tagline">
                      {isRTL ? activeDomain.taglineFa : activeDomain.taglineEn}
                    </p>
                  </div>
                </div>

                {/* 4 Deep Capabilities Vertical Cards */}
                <div className="detail-capabilities-list">
                  {activeDomain.capabilities.map((cap) => (
                    <div key={cap.id} className="detail-cap-item">
                      <div className="item-left-num">
                        <span>{cap.num}</span>
                      </div>
                      <div className="item-center-content">
                        <h4 className="item-title">{isRTL ? cap.titleFa : cap.titleEn}</h4>
                        <p className="item-desc">{isRTL ? cap.descFa : cap.descEn}</p>
                      </div>
                      <div className="item-right-deliverable">
                        <span className="deliverable-chip">
                          {isRTL ? cap.deliverableFa : cap.deliverableEn}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
