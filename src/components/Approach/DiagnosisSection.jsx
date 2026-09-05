import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';
import { ArrowRight, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function DiagnosisSection() {
  const { t, isRTL } = useLanguage();
  const d = t.approach?.diagnosis || {};
  const items = d.items || [];
  const [activeId, setActiveId] = useState(items[0]?.id || 'website');

  const activeItem = items.find((item) => item.id === activeId) || items[0];

  return (
    <section className="approach-diagnosis-section" aria-label="Problem Diagnosis and Brief Interrogation">
      <div className="container approach-diagnosis-container">
        
        {/* Header Block */}
        <div className="diagnosis-header-block">
          <span className="approach-tag-label">{d.badge || 'THE DIAGNOSIS'}</span>
          <h2 className="diagnosis-main-title">
            {d.headline || 'Most problems arrive disguised as requests.'}
          </h2>
          <p className="diagnosis-main-sub">
            {d.subheadline}
          </p>
        </div>

        {/* The Diagnostic Matrix: Left Navigation Tabs, Right Clinical Revelation */}
        <div className="diagnosis-matrix-layout">
          
          {/* Left: Interactive Request Selectors */}
          <div className="diagnosis-requests-nav" role="tablist">
            {items.map((item, index) => {
              const isSelected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isSelected}
                  className={`diagnosis-tab-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <div className="tab-left-indicator">
                    <span className="tab-number">0{index + 1}</span>
                    <span className="tab-indicator-bar" />
                  </div>
                  <div className="tab-text-content">
                    <span className="tab-request-eyebrow">{item.requestLabel}</span>
                    <h3 className="tab-request-title">{item.request}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Surgical Tri-layer Revelation (Request -> Symptom -> Root Problem) */}
          <div className="diagnosis-resolution-panel">
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  className="diagnosis-card-inner"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: EASING.PRIMARY }}
                >
                  
                  {/* Layer 1: The Request */}
                  <div className="diagnosis-layer layer-request">
                    <div className="layer-header">
                      <div className="layer-tag-pill tag-muted">
                        <HelpCircle size={12} />
                        <span>{activeItem.requestLabel}</span>
                      </div>
                      <span className="layer-status-label">{isRTL ? 'آنچه در ظاهر خواسته می‌شود' : 'SURFACE DEMAND'}</span>
                    </div>
                    <div className="layer-body">
                      <p className="layer-big-quote">{activeItem.request}</p>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="diagnosis-layer-divider" aria-hidden="true">
                    <div className="divider-line" />
                    <span className="divider-tag">{isRTL ? 'نشانه بالینی' : 'CLINICAL SYMPTOM'}</span>
                    <div className="divider-line" />
                  </div>

                  {/* Layer 2: The Symptom */}
                  <div className="diagnosis-layer layer-symptom">
                    <div className="layer-header">
                      <div className="layer-tag-pill tag-warning">
                        <AlertCircle size={12} />
                        <span>{activeItem.symptomLabel}</span>
                      </div>
                      <span className="layer-status-label">{isRTL ? 'نشانه‌های ملموس در کسب‌وکار' : 'OBSERVED FRICTION'}</span>
                    </div>
                    <div className="layer-body">
                      <p className="layer-symptom-text">{activeItem.symptom}</p>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="diagnosis-layer-divider" aria-hidden="true">
                    <div className="divider-line" />
                    <span className="divider-tag highlight-amber">{isRTL ? 'تحلیل بنیادین' : 'ROOT DIAGNOSIS'}</span>
                    <div className="divider-line" />
                  </div>

                  {/* Layer 3: Root Problem (The Surgical Truth) */}
                  <div className="diagnosis-layer layer-root">
                    <div className="layer-header">
                      <div className="layer-tag-pill tag-root">
                        <CheckCircle2 size={12} />
                        <span>{activeItem.rootLabel}</span>
                      </div>
                      <span className="layer-status-label text-gradient-amber">{isRTL ? 'ریشه واقعی مسئله و نقطه اهرمی' : 'STRUCTURAL BOTTLENECK'}</span>
                    </div>
                    <div className="layer-body">
                      <p className="layer-root-text text-gradient-amber">
                        {activeItem.rootProblem}
                      </p>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
