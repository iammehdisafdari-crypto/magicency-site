import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { CAPABILITY_DOMAINS } from '../../data/capabilitiesData';

export default function CapabilitySystem() {
  const { t, isRTL } = useLanguage();
  const s = t.capabilities?.system || {};
  const [activeDomainId, setActiveDomainId] = useState('strategy');

  const activeDomain = CAPABILITY_DOMAINS.find((d) => d.id === activeDomainId) || CAPABILITY_DOMAINS[0];

  return (
    <section className="capabilities-section system-architecture-section" aria-label="The Capability System">
      <div className="container">
        {/* Section Header */}
        <div className="capabilities-section-header text-center">
          <div className="capabilities-eyebrow-pill">
            <span className="capabilities-pill-indicator" />
            <span className="capabilities-pill-text">{s.badge || '01 / ARCHITECTURE'}</span>
          </div>
          <h2 className="capabilities-section-title">{s.title}</h2>
          <p className="capabilities-section-subtext">{s.subtext}</p>
        </div>

        {/* The Interactive Modular System Architecture */}
        <div className="system-architecture-stage">
          {/* Top Domain Selector Ribbon */}
          <div className="domain-modules-ribbon" role="tablist">
            {CAPABILITY_DOMAINS.map((domain) => {
              const isSelected = domain.id === activeDomainId;
              const title = isRTL ? domain.titleFa : domain.titleEn;
              const isConnectedToActive = activeDomain.connectedDomains.includes(domain.id);

              return (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`domain-module-tab ${isSelected ? 'active' : ''} ${isConnectedToActive ? 'connected-peer' : ''}`}
                >
                  <div className="tab-meta">
                    <span className="tab-number">{domain.number}</span>
                    <span className="tab-signal-dot" />
                  </div>
                  <span className="tab-title">{title}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="activeDomainIndicator"
                      className="tab-active-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Central Active Module Display with Interconnected Network Telemetry */}
          <div className="active-module-cockpit">
            {/* Header / Tagline */}
            <div className="cockpit-header">
              <div className="cockpit-title-group">
                <span className="cockpit-index">{activeDomain.number} // 05</span>
                <h3 className="cockpit-title">
                  {isRTL ? activeDomain.titleFa : activeDomain.titleEn}
                </h3>
                <p className="cockpit-tagline">
                  {isRTL ? activeDomain.taglineFa : activeDomain.taglineEn}
                </p>
              </div>

              {/* Interconnected Domain Links HUD */}
              <div className="cockpit-connections-hud">
                <span className="hud-label">{s.connectedTo || 'CONNECTS TO'}</span>
                <div className="hud-peer-pills">
                  {activeDomain.connectedDomains.map((peerId) => {
                    const peer = CAPABILITY_DOMAINS.find((p) => p.id === peerId);
                    if (!peer) return null;
                    return (
                      <button
                        key={peerId}
                        type="button"
                        className="peer-pill-btn"
                        onClick={() => setActiveDomainId(peerId)}
                      >
                        <span className="peer-pulse" />
                        <span>{isRTL ? peer.titleFa : peer.titleEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Internal Capabilities Grid (Revealed inside the active module) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                className="internal-capabilities-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {activeDomain.capabilities.map((cap) => (
                  <div key={cap.id} className="capability-node-card">
                    <div className="cap-top-bar">
                      <span className="cap-num">{cap.num}</span>
                      <span className="cap-live-signal" />
                    </div>
                    <h4 className="cap-name">{isRTL ? cap.titleFa : cap.titleEn}</h4>
                    <p className="cap-desc">{isRTL ? cap.descFa : cap.descEn}</p>
                    <div className="cap-deliverable-bar">
                      <span className="deliverable-tag">
                        {isRTL ? cap.deliverableFa : cap.deliverableEn}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* System Circuit Continuity Footer */}
          <div className="system-continuity-bar">
            <div className="circuit-flow-icon">↺</div>
            <p className="continuity-text">
              {isRTL
                ? 'هیچ توانمندی به صورت جزیره‌ای فروخته نمی‌شود؛ تمام اجزا در یک مدار هماهنگ رشد به هم متصل هستند.'
                : 'No capability operates in isolation. All components are synchronized inside one compounding growth system.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
