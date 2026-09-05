import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING, editorialVariants } from '../motion';

export default function WorkHero() {
  const { lang, isRTL } = useLanguage();

  const heroContent = {
    en: {
      eyebrow: 'WORK // PROOF OF THINKING + EXECUTION',
      headlinePart1: 'Where strategy',
      headlinePart2: 'becomes something real.',
      supporting: "We don't show work as a collection of outputs. We show the problem behind it, the decisions that shaped it, and what changed because of it."
    },
    fa: {
      eyebrow: 'آرشیو آثار // برهان تفکر و اجرا',
      headlinePart1: 'جایی که استراتژی',
      headlinePart2: 'به چیزی واقعی تبدیل می‌شود.',
      supporting: 'ما پروژه‌ها را فقط به‌عنوان خروجی نمایش نمی‌دهیم. مسئله، تصمیم‌هایی که مسیر پروژه را ساختند و چیزی که در نهایت تغییر کرد را نشان می‌دهیم.'
    }
  };

  const c = heroContent[lang] || heroContent.en;

  return (
    <section className="work-hero-section" aria-label="Work Hero">
      <div className="work-hero-container">
        
        {/* Subtle Architectural Grid Lines */}
        <div className="work-hero-backdrop-lines" aria-hidden="true">
          <div className="work-grid-line line-h" />
          <div className="work-grid-line line-v" />
        </div>

        {/* Top Eyebrow Badge */}
        <motion.div 
          className="work-hero-badge-wrap"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASING.PRIMARY }}
        >
          <span className="work-hero-badge">
            <span className="work-badge-dot" />
            <span>{c.eyebrow}</span>
          </span>
        </motion.div>

        {/* Optical Center: Headline & Supporting Statement */}
        <div className="work-hero-center-block">
          <div className="work-hero-headline-block">
            <h1 className="work-hero-title">
              <div className="work-hero-title-line">
                <motion.span
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASING.CINEMATIC }}
                  className="work-hero-line-inner"
                >
                  {c.headlinePart1}
                </motion.span>
              </div>
              <div className="work-hero-title-line">
                <motion.span
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.7, delay: 0.2, ease: EASING.CINEMATIC }}
                  className="work-hero-line-inner text-gradient-amber"
                >
                  {c.headlinePart2}
                </motion.span>
              </div>
            </h1>
          </div>

          <motion.p 
            className="work-hero-supporting-text"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASING.PRIMARY }}
          >
            {c.supporting}
          </motion.p>
        </div>

        {/* Bottom Meta Strip & Scroll Hint */}
        <motion.div 
          className="work-hero-bottom-bar"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: EASING.PRIMARY }}
        >
          <div className="work-hero-meta-strip">
            <span className="work-meta-item">
              <span className="work-meta-label">{lang === 'fa' ? 'رویکرد' : 'APPROACH'}:</span>
              <span className="work-meta-val">{lang === 'fa' ? 'مهندسی سیستم‌های رشد' : 'Growth Systems Engineering'}</span>
            </span>
            <span className="work-meta-separator">/</span>
            <span className="work-meta-item">
              <span className="work-meta-label">{lang === 'fa' ? 'استاندارد' : 'STANDARD'}:</span>
              <span className="work-meta-val">{lang === 'fa' ? 'داده‌محور و اعتبارسنجی‌شده' : 'Qualitative Truth & Telemetry'}</span>
            </span>
          </div>

          <div className="work-hero-scroll-hint">
            <span>{lang === 'fa' ? 'اسکرول کنید' : 'SCROLL TO EXPLORE'}</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
