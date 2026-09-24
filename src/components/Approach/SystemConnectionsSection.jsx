import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SYSTEM_CONNECTION_NODES } from '../../data/growthArchitecture';

export default function SystemConnectionsSection() {
  const { t, isRTL } = useLanguage();
  const conn = t.approach?.connections || {};
  const [activeNodeId, setActiveNodeId] = useState('strategy');

  const activeNode = SYSTEM_CONNECTION_NODES.find((n) => n.id === activeNodeId) || SYSTEM_CONNECTION_NODES[0];

  return (
    <section className="approach-section approach-connections-section" id="system-connections">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{conn.eyebrow}</span>
          </div>

          <h2 className="approach-section-title">
            {conn.headline}
          </h2>

          <p className="approach-section-subtext">
            {conn.subheadline}
          </p>
        </div>

        {/* Core Methodology Transmission Sequence */}
        <div className="system-methodology-axiom-box">
          <div className="axiom-statement-item">
            <span className="axiom-seq-num">01</span>
            <span className="axiom-text">{conn.coreMessage1}</span>
          </div>
          <div className="axiom-divider-line" aria-hidden="true">→</div>
          <div className="axiom-statement-item">
            <span className="axiom-seq-num">02</span>
            <span className="axiom-text">{conn.coreMessage2}</span>
          </div>
          <div className="axiom-divider-line" aria-hidden="true">→</div>
          <div className="axiom-statement-item">
            <span className="axiom-seq-num">03</span>
            <span className="axiom-text">{conn.coreMessage3}</span>
          </div>
          <div className="axiom-divider-line" aria-hidden="true">→</div>
          <div className="axiom-statement-item">
            <span className="axiom-seq-num">04</span>
            <span className="axiom-text">{conn.coreMessage4}</span>
          </div>
        </div>

        {/* Interconnected Infrastructure Diagram (Not planets/space, but technical circuit) */}
        <div className="system-infrastructure-diagram-frame">
          <div className="infra-grid-layout">
            {/* Left: Interconnected Disciplines Selection */}
            <div className="infra-disciplines-stream">
              <span className="infra-stream-label">
                {isRTL ? 'لایه‌های متصل سیستم (انتخاب برای بررسی جریان سیگنال):' : 'INTERCONNECTED SYSTEM LAYERS (SELECT TO TRACE FLOW):'}
              </span>

              <div className="infra-nodes-list" role="tablist">
                {SYSTEM_CONNECTION_NODES.map((node) => {
                  const isSelected = node.id === activeNodeId;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveNodeId(node.id)}
                      className={`infra-node-btn ${isSelected ? 'active' : ''}`}
                    >
                      <div className="infra-node-btn-header">
                        <span className="infra-node-num">{node.num}</span>
                        <h4 className="infra-node-name">{isRTL ? node.nameFa : node.nameEn}</h4>
                      </div>
                      <p className="infra-node-role">{isRTL ? node.roleFa : node.roleEn}</p>
                      <div className="infra-connector-line" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Dynamic Signal Flow Routing Detail */}
            <div className="infra-routing-display">
              <div className="routing-display-header">
                <span className="routing-code-tag">FLOW RESOLUTION // {activeNode.num}</span>
                <span className="routing-sync-state">ACTIVE SIGNAL CIRCUIT</span>
              </div>

              <div className="routing-active-node-spotlight">
                <span className="spotlight-layer-eyebrow">INSPECTED SYSTEM DISCIPLINE:</span>
                <h3 className="spotlight-title">{isRTL ? activeNode.nameFa : activeNode.nameEn}</h3>
                <p className="spotlight-primary-role">{isRTL ? activeNode.roleFa : activeNode.roleEn}</p>
              </div>

              {/* Bidirectional Telemetry Vector */}
              <div className="routing-vectors-card">
                <div className="vector-channel">
                  <div className="vector-direction-label">
                    <span className="vector-arrow">↓</span>
                    <span>{isRTL ? 'هدایت به مرحله بعد (FORWARD SIGNAL):' : 'FORWARD TRANSMISSION:'}</span>
                  </div>
                  <p className="vector-desc">{isRTL ? activeNode.feedsToFa : activeNode.feedsToEn}</p>
                </div>

                <div className="vector-channel vector-channel-return">
                  <div className="vector-direction-label">
                    <span className="vector-arrow return-arrow">↺</span>
                    <span>{isRTL ? 'بازخورد به سیستم (FEEDBACK RETURN):' : 'FEEDBACK TRANSMISSION:'}</span>
                  </div>
                  <p className="vector-desc">
                    {isRTL
                      ? 'نتایج این لایه، پارامترهای استراتژی و اقتصاد واحد را به طور مستمر به‌روزرسانی می‌کند.'
                      : 'Telemetry generated from this layer continually updates foundational unit economics and future strategic conviction.'}
                  </p>
                </div>
              </div>

              {/* Technical Schematic Footer Note */}
              <div className="routing-infra-footer">
                <span className="infra-tech-indicator" />
                <span className="infra-tech-copy">
                  {isRTL
                    ? 'هیچ دیسیپلینی در انزوا اجرا نمی‌شود. استراتژی بدون داده فلج است و رسانه بدون تجربه متصل، سرمایه را تبخیر می‌کند.'
                    : 'Zero isolated execution. Strategy without telemetry is blind; performance media without connected conversion architecture evaporates capital.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
