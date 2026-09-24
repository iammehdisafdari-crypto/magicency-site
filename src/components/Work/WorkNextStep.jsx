import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function WorkNextStep() {
  const { lang, setIsModalOpen } = useLanguage();

  const content = {
    en: {
      eyebrow: 'A CLEAR NEXT STEP',
      heading: 'Want to turn the work into a growth plan?',
      supporting: 'Share your market, primary commercial goal, and current constraint. We will diagnose the bottleneck and identify the right place to start.',
      ctaPrimary: 'Start a Project',
      ctaSecondary: 'Talk with Strategy'
    },
    fa: {
      eyebrow: 'گام شفاف بعدی',
      heading: 'قصد دارید این تجربیات را به برنامه رشد کسب‌وکار خود تبدیل کنید؟',
      supporting: 'بازار، هدف کلیدی تجاری و مانع فعلی خود را با ما در میان بگذارید. چالش اصلی را شناسایی و نقطه بهینه شروع را معین می‌کنیم.',
      ctaPrimary: 'شروع یک پروژه',
      ctaSecondary: 'گفتگو با تیم استراتژی'
    }
  };

  const c = content[lang] || content.en;

  return (
    <section className="work-next-step-section" aria-label="A Clear Next Step">
      <div className="container work-next-step-container">
        <motion.div 
          className="work-next-step-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASING.PRIMARY }}
        >
          <div className="work-next-step-copy">
            <span className="work-kicker">
              <span className="work-kicker-dot" />
              <span>{c.eyebrow}</span>
            </span>
            <h2 className="work-next-step-heading">
              {c.heading}
            </h2>
            <p className="work-next-step-lead">
              {c.supporting}
            </p>
          </div>

          <div className="work-next-step-actions">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="work-button work-button--primary"
            >
              <span>{c.ctaPrimary}</span>
              <span className="work-arrow" aria-hidden="true">→</span>
            </button>
            <a
              href="mailto:itsmehdisafdari@gmail.com"
              className="work-button work-button--secondary"
            >
              <span>{c.ctaSecondary}</span>
              <span className="work-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
