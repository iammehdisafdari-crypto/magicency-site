import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function WorkFinalCTA() {
  const { lang, setIsModalOpen } = useLanguage();

  const content = {
    en: {
      eyebrow: 'YOUR NEXT MOVE',
      heading: 'Want to build the system that fits your goal?',
      supporting: 'Share the market, sector, and commercial outcome you need. We will identify the right architecture and first operational move.',
      primaryBtn: 'Start a Project',
      secondaryBtn: 'Explore Capabilities'
    },
    fa: {
      eyebrow: 'گام نهایی شما',
      heading: 'می‌خواهید سیستمی متناسب با اهداف اختصاصی خود بسازید؟',
      supporting: 'بازار، حوزه فعالیت و نتیجه تجاری مورد انتظار را با ما مطرح کنید؛ معماری سیستم و نخستین اقدام عملیاتی را مشخص خواهیم کرد.',
      primaryBtn: 'شروع یک پروژه',
      secondaryBtn: 'مشاهده توانمندی‌ها'
    }
  };

  const c = content[lang] || content.en;

  return (
    <section className="work-final-cta-section shared-section" aria-label="Your Next Move">
      <div className="container work-final-cta-container">
        <motion.div 
          className="work-final-cta-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASING.PRIMARY }}
        >
          <div className="work-final-cta-glow" aria-hidden="true" />
          
          <div className="work-final-cta-copy">
            <span className="work-kicker">
              <span className="work-kicker-dot" />
              <span>{c.eyebrow}</span>
            </span>
            <h2 className="work-final-cta-heading">
              {c.heading}
            </h2>
            <p className="work-final-cta-lead">
              {c.supporting}
            </p>
          </div>

          <div className="work-final-cta-actions">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="work-button work-button--primary work-button--lg"
            >
              <span>{c.primaryBtn}</span>
              <span className="work-arrow" aria-hidden="true">→</span>
            </button>
            <a
              href="/capabilities"
              className="work-button work-button--secondary work-button--lg"
            >
              <span>{c.secondaryBtn}</span>
              <span className="work-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
