import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const { lang, isRTL } = useLanguage();
  const data = ABOUT_DATA[lang]?.faq || ABOUT_DATA.en.faq;
  const items = data.items || [];
  
  // Default open first item
  const [openId, setOpenId] = useState(items[0]?.id || 'faq-1');

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="section-08" 
      className={`about-chapter-section faq-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 08: Frequently Asked Questions"
    >
      <div className="container faq-container">
        
        {/* Section Header */}
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

        <div className="faq-intro-block">
          <h2 className="faq-headline">{data.title}</h2>
          <p className="faq-lead">{data.lead}</p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list" aria-label="FAQ Accordion">
          {items.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="faq-question-btn"
                >
                  <div className="faq-question-left">
                    <span className="faq-num">0{idx + 1}</span>
                    <h3 className="faq-question-text">{item.question}</h3>
                  </div>

                  <div className="faq-icon-frame" aria-hidden="true">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-panel"
                    >
                      <div className="faq-answer-inner">
                        <p className="faq-answer-text">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
