import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function VendorVsPartner() {
  const { t, isRTL } = useLanguage();
  const data = t.about?.vendorVsPartner || {};
  const comparisons = data.comparisons || [];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="vendor-partner-section" aria-label="How We Show Up — Vendor vs Partner">
      <div className="container vendor-partner-container">

        {/* =========================================================
            SECTION HEADER (STRONG TYPOGRAPHY & INTENT)
            ========================================================= */}
        <div className="vendor-partner-header">
          <div className="vendor-partner-eyebrow-pill">
            <span className="pill-pulse-dot" />
            <span>{data.eyebrow || '04 / HOW WE SHOW UP'}</span>
          </div>

          <h2 className="vendor-partner-headline">
            <span className="headline-muted block">{data.headlinePart1 || 'Not a vendor.'}</span>
            <span className="headline-muted block">{data.headlinePart2 || 'Not an extra pair of hands.'}</span>
            <span className="headline-partner block">{data.headlineEmphasis || 'A strategic partner.'}</span>
          </h2>

          <p className="vendor-partner-subline">
            {data.subline || 'We do not operate as an order-taker that executes tasks blindly. We share accountability for the outcome.'}
          </p>
        </div>

        {/* =========================================================
            EDITORIAL DUALITY COMPARISON STAGE (NOT GENERIC CARDS)
            ========================================================= */}
        <div className="editorial-contrast-stage">
          
          {/* Header Column Identifiers */}
          <div className="contrast-columns-head">
            <div className="head-col vendor-col-head">
              <span className="status-cross">✕</span>
              <span className="col-title">{isRTL ? 'مجری سنتی (VENDOR)' : 'THE VENDOR'}</span>
              <span className="col-desc">{isRTL ? 'معاملاتی، منفعل، متمرکز بر تحویل ساعت' : 'Transactional, passive, task-oriented'}</span>
            </div>

            <div className="head-center-divider">
              <span className="divider-vs">VS</span>
            </div>

            <div className="head-col partner-col-head">
              <span className="status-spark">✦</span>
              <span className="col-title">{isRTL ? 'شریک راهبردی (PARTNER)' : 'THE STRATEGIC PARTNER'}</span>
              <span className="col-desc">{isRTL ? 'متعهد به نتایج تجاری و رشد مرکب' : 'Accountable, proactive, outcome-driven'}</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="contrast-rows-body">
            {comparisons.map((item, idx) => (
              <div key={idx} className="contrast-row-item">
                <div className="row-dimension-bar">
                  <span className="dimension-badge">{item.dimension}</span>
                </div>

                <div className="contrast-row-dual">
                  {/* Left: Vendor Reaction */}
                  <div className="side-pane vendor-pane">
                    <div className="pane-inner">
                      <span className="pane-behavior-tag">{isRTL ? 'رویکرد مجری' : 'VENDOR BEHAVIOR'}</span>
                      <h4 className="pane-statement-muted">«{item.vendor?.title}»</h4>
                      <p className="pane-explanation">{item.vendor?.description}</p>
                    </div>
                  </div>

                  {/* Dynamic Nexus Bridge */}
                  <div className="pane-connector-axis" aria-hidden="true">
                    <div className="axis-line" />
                    <div className="axis-node" />
                  </div>

                  {/* Right: Partner Conviction */}
                  <div className="side-pane partner-pane">
                    <div className="pane-inner">
                      <div className="partner-badge-row">
                        <span className="glow-amber-dot" />
                        <span className="pane-partner-tag">{isRTL ? 'رویکرد مجیکنسـی' : 'MAGICENCY CONVICTION'}</span>
                      </div>
                      <h4 className="pane-statement-highlight">«{item.partner?.title}»</h4>
                      <p className="pane-explanation">{item.partner?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Duality Statement */}
          <div className="contrast-closing-manifesto">
            <div className="closing-seal">
              <span className="seal-text">
                {isRTL 
                  ? 'ما در جلسات سخت با شما کنار یک میز می‌نشینیم؛ نه در مقابل شما.'
                  : 'We sit on the same side of the table when difficult commercial decisions must be made.'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
