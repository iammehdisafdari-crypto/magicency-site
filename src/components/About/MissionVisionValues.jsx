import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function MissionVisionValues() {
  const { lang, isRTL } = useLanguage();
  const mvv = ABOUT_DATA[lang]?.missionVisionValues || ABOUT_DATA.en.missionVisionValues;
  const [activeTab, setActiveTab] = useState('mission'); // 'mission' | 'vision' | 'values'

  return (
    <section 
      id="section-mission" 
      className={`about-chapter-section mvv-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 04: Mission, Vision, and Core Values"
    >
      <div className="container mvv-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{mvv.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{mvv.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{mvv.chapterTag}</span>
          </div>
        </div>

        <div className="mvv-intro-block">
          <h2 className="mvv-headline">{mvv.headline}</h2>
        </div>

        {/* 3 Interactive Architectural Tabs (Modeled on Reference's 3 Distinct Areas) */}
        <div className="mvv-tab-triggers" role="tablist" aria-label="Mission, Vision, and Values">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'mission'}
            onClick={() => setActiveTab('mission')}
            className={`mvv-tab-btn ${activeTab === 'mission' ? 'is-active' : ''}`}
          >
            <Target className="tab-icon" size={18} aria-hidden="true" />
            <span className="tab-title">{mvv.mission?.label}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'vision'}
            onClick={() => setActiveTab('vision')}
            className={`mvv-tab-btn ${activeTab === 'vision' ? 'is-active' : ''}`}
          >
            <Eye className="tab-icon" size={18} aria-hidden="true" />
            <span className="tab-title">{mvv.vision?.label}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'values'}
            onClick={() => setActiveTab('values')}
            className={`mvv-tab-btn ${activeTab === 'values' ? 'is-active' : ''}`}
          >
            <ShieldCheck className="tab-icon" size={18} aria-hidden="true" />
            <span className="tab-title">{mvv.values?.label}</span>
          </button>
        </div>

        {/* Dynamic Display Canvas */}
        <div className="mvv-display-canvas">
          <AnimatePresence mode="wait">
            
            {/* MISSION PANE */}
            {activeTab === 'mission' && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="mvv-pane mission-pane"
              >
                <div className="pane-header-row">
                  <span className="pane-tag-badge">{mvv.mission?.tag}</span>
                  <span className="pane-numeral-ghost" aria-hidden="true">01</span>
                </div>
                <h3 className="pane-statement-title">{mvv.mission?.statement}</h3>
                <p className="pane-narrative-copy">{mvv.mission?.desc}</p>
                
                <div className="pane-proof-rule">
                  <span className="rule-dot" />
                  <span className="rule-text">COMMERCIAL ACCOUNTABILITY PROTOCOL // TESTED IN LIVE CAMPAIGNS</span>
                </div>
              </motion.div>
            )}

            {/* VISION PANE */}
            {activeTab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="mvv-pane vision-pane"
              >
                <div className="pane-header-row">
                  <span className="pane-tag-badge">{mvv.vision?.tag}</span>
                  <span className="pane-numeral-ghost" aria-hidden="true">02</span>
                </div>
                <h3 className="pane-statement-title">{mvv.vision?.statement}</h3>
                <p className="pane-narrative-copy">{mvv.vision?.desc}</p>

                <div className="pane-proof-rule">
                  <span className="rule-dot" />
                  <span className="rule-text">AUTONOMOUS FEEDBACK LOOPS // CONNECTED COMMERCIAL FLYWHEEL</span>
                </div>
              </motion.div>
            )}

            {/* CORE VALUES PANE */}
            {activeTab === 'values' && (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="mvv-pane values-pane"
              >
                <div className="pane-header-row">
                  <span className="pane-tag-badge">{mvv.values?.tag}</span>
                  <span className="pane-numeral-ghost" aria-hidden="true">03</span>
                </div>

                <div className="values-editorial-grid">
                  {mvv.values?.items?.map((item) => (
                    <div key={item.num} className="value-editorial-card">
                      <div className="value-card-header">
                        <span className="value-number">{item.num}</span>
                        <span className="value-dot" />
                      </div>
                      <h4 className="value-title">{item.title}</h4>
                      <p className="value-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
