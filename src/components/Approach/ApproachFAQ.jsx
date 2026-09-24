import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { APPROACH_FAQS } from '../../data/growthArchitecture';

export default function ApproachFAQ() {
  const { t, lang } = useLanguage();
  const faqMeta = t.approach?.faq || {};
  const [openId, setOpenId] = useState('faq-1');

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="approach-section faq-section" id="frequent-questions">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-editorial-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{faqMeta.eyebrow}</span>
          </div>

          <motion.h2
            className="section-editorial-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {faqMeta.headline}
          </motion.h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list" role="region" aria-label="Frequently Asked Questions">
          {APPROACH_FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const question = lang === 'fa' ? faq.questionFa : faq.questionEn;
            const answer = lang === 'fa' ? faq.answerFa : faq.answerEn;

            return (
              <motion.div
                key={faq.id}
                className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="faq-question-index">0{idx + 1}</span>
                  <span className="faq-question-text">{question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        <p className="faq-answer-text">{answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
