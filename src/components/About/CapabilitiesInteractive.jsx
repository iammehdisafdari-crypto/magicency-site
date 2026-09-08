import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function CapabilitiesInteractive() {
  const { lang, isRTL } = useLanguage();
  const data = ABOUT_DATA[lang]?.capabilities || ABOUT_DATA.en.capabilities;
  const items = data.items || [];
  
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [expandedMobileId, setExpandedMobileId] = useState(items[0]?.num || '01');

  const activeItem = items[hoveredIdx] || items[0];

  const toggleMobileItem = (num) => {
    setExpandedMobileId((prev) => (prev === num ? null : num));
  };

  return (
    <section 
      id="section-04" 
      className={`about-chapter-section capabilities-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 04: What We Bring"
    >
      <div className="container capabilities-container">
        
        {/* Editorial Section Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{data.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{data.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{data.chapterTag}</span>
          </div>
        </div>

        <div className="capabilities-header-wrap">
          <h2 className="capabilities-headline">{data.title}</h2>
          <p className="capabilities-lead">{data.lead}</p>
        </div>

        {/* Desktop Interactive Split Layout */}
        <div className="capabilities-desktop-layout">
          
          {/* Left: Interactive Editorial List */}
          <div className="capabilities-editorial-list" role="list">
            {items.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={item.num}
                  role="listitem"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onFocus={() => setHoveredIdx(idx)}
                  className={`capability-list-row ${isHovered ? 'is-active' : ''}`}
                >
                  <div className="row-left-content">
                    <span className="row-num">{item.num}</span>
                    <div className="row-titles">
                      <span className="row-code">{item.code}</span>
                      <h3 className="row-name">{item.name}</h3>
                    </div>
                  </div>

                  <div className="row-right-content">
                    <span className="row-role-preview">{item.role}</span>
                    <span className="row-arrow-anchor" aria-hidden="true">
                      <ArrowUpRight className="row-arrow-icon" size={22} />
                    </span>
                  </div>
                  <div className="row-bottom-rule" aria-hidden="true" />
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic High-End Preview Display (Fixed Height Frame) */}
          <div className="capabilities-preview-display" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.num}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="preview-canvas-card"
              >
                {/* Visual Preview Image Frame */}
                <div className="preview-image-frame">
                  <img 
                    src={activeItem.previewImage} 
                    alt={activeItem.alt || `${activeItem.name} — ${activeItem.proofTag}`}
                    className="preview-media-img"
                    width="1376"
                    height="768"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="preview-scrim" />
                  
                  {/* Floating Proof Tag */}
                  <div className="preview-proof-badge">
                    <span className="proof-spark">✦</span>
                    <span>{activeItem.proofTag}</span>
                  </div>
                </div>

                {/* Metadata & Deliverables */}
                <div className="preview-card-body">
                  <div className="preview-heading-row">
                    <span className="preview-num-indicator">{activeItem.num} // {activeItem.code}</span>
                    <span className="preview-status-dot">● INTEGRATED</span>
                  </div>
                  <p className="preview-role-desc">{activeItem.role}</p>

                  <div className="preview-deliverables-wrap">
                    <span className="deliverables-heading">CORE DELIVERABLES:</span>
                    <div className="deliverables-tags-row">
                      {activeItem.deliverables.map((del, dIdx) => (
                        <span key={dIdx} className="deliverable-tag">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Accordion Alternative (< 1024px) */}
        <div className="capabilities-mobile-accordion" role="region" aria-label="Capabilities Accordion">
          {items.map((item) => {
            const isExpanded = expandedMobileId === item.num;
            return (
              <div key={item.num} className={`mobile-cap-card ${isExpanded ? 'is-expanded' : ''}`}>
                <button
                  type="button"
                  onClick={() => toggleMobileItem(item.num)}
                  className="mobile-cap-btn"
                  aria-expanded={isExpanded}
                >
                  <div className="mobile-btn-left">
                    <span className="mobile-cap-num">{item.num}</span>
                    <span className="mobile-cap-title">{item.name}</span>
                  </div>
                  <ChevronDown className={`mobile-chevron ${isExpanded ? 'is-rotated' : ''}`} size={18} />
                </button>

                {isExpanded && (
                  <div className="mobile-cap-content">
                    <p className="mobile-cap-role">{item.role}</p>
                    <div className="mobile-deliverables">
                      <span className="mobile-del-title">CORE DELIVERABLES:</span>
                      <div className="mobile-tags-flex">
                        {item.deliverables.map((del, dIdx) => (
                          <span key={dIdx} className="mobile-tag">{del}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mobile-proof-tag">
                      <span>✦ {item.proofTag}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
