import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { CAPABILITIES_FAQS } from '../../data/capabilitiesData';
import { FoldRevealSection, FoldRevealText } from '../FoldReveal';

export default function CapabilitiesFAQ() {
  const { lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const toggleFaq = (idx) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  const faqHeading =
    lang === 'fa'
      ? 'پرسش‌های متداول\nدرباره توانمندی‌ها.'
      : 'Frequently Asked\nQuestions.';

  return (
    <section className="faq-block" id="faq" aria-label="Frequently asked questions">
      <div className="faq-inner">
        {/* Left Column (CR38 .faq-block-left) */}
        <div className="faq-block-left">
          <span className="about-intro-label faq-label">
            <span className="clients-label-icon">+</span> FAQ
          </span>
          <FoldRevealSection replay={true} stagger={0.12}>
            <FoldRevealText
              as="h2"
              className="faq-block-heading"
              text={faqHeading}
            />
          </FoldRevealSection>
        </div>

        {/* Right Column: Accordion List (CR38 .faq-list) */}
        <div className="faq-list">
          {CAPABILITIES_FAQS.map((faq, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <div
                  className="faq-trigger"
                  onClick={() => toggleFaq(idx)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFaq(idx);
                    }
                  }}
                >
                  <span className="faq-question">
                    {lang === 'fa' ? faq.qFa : faq.qEn}
                  </span>
                  <div className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        {lang === 'fa' ? faq.aFa : faq.aEn}
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
