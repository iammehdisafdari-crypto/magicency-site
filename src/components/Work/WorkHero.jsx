import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function WorkHero() {
  const { lang, isRTL } = useLanguage();

  const content = {
    en: {
      eyebrow: 'WORK / SOURCE-BACKED PROOF',
      headline: 'Digital growth work built from real execution.',
      supporting: 'Selected work across growth strategy, performance marketing, digital experiences, creative direction, and custom technology — grounded in documented project telemetry and deterministic business outcomes.',
      cta: 'Explore the work',
      telemetry: {
        status: 'DOCUMENTED EXPERIENCE',
        model: 'CONNECTED GROWTH ARCHITECTURE',
        verification: 'SELECTED PERFORMANCE DATA'
      }
    },
    fa: {
      eyebrow: 'نمونه‌آثار // برهان متکی بر اسناد اجرا',
      headline: 'مهندسی رشد دیجیتال بر پایه اجرای واقعی.',
      supporting: 'مجموعه گزیده‌ای از پروژه‌ها در حوزه استراتژی رشد، پرفورمنس مارکتینگ، تجربه دیجیتال، دیزاین و فناوری سفارشی — متکی بر داده‌های مستند و تحول اقتصادی پایدار.',
      cta: 'مشاهده پرونده‌ها',
      telemetry: {
        status: 'تله‌متری اجرایی: ثبت‌شده',
        model: 'معماری متصل سیستم‌های رشد',
        verification: 'داده‌های واقعی سرچ و تبلیغات'
      }
    }
  };

  const c = content[lang] || content.en;

  const scrollToCaseStudies = (e) => {
    e.preventDefault();
    const elem = document.getElementById('case-studies');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="work-hero-section" aria-label="Work Hero">
      <div className="container work-hero-container">
        
        {/* Left / Top: Editorial Copy */}
        <div className="work-hero-copy">
          <motion.div 
            className="work-hero-badge-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASING.PRIMARY }}
          >
            <span className="work-kicker">
              <span className="work-kicker-dot" />
              <span>{c.eyebrow}</span>
            </span>
          </motion.div>

          <motion.h1 
            className="work-hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASING.CINEMATIC }}
          >
            {c.headline}
          </motion.h1>

          <motion.p 
            className="work-hero-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASING.PRIMARY }}
          >
            {c.supporting}
          </motion.p>

          <motion.div 
            className="work-hero-cta-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASING.PRIMARY }}
          >
            <a 
              href="#case-studies" 
              onClick={scrollToCaseStudies}
              className="work-button work-button--anchor"
            >
              <span>{c.cta}</span>
              <span className="work-button-arrow" aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Right / Visual: Dominant Dark Cinematic 3D/Telemetry Visual */}
        <motion.div 
          className="work-hero-visual-frame"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASING.CINEMATIC }}
        >
          <div className="work-hero-visual-inner">
            <div className="work-hero-visual-glow" aria-hidden="true" />
            
            {/* Visual Asset with High-Tech Editorial Overlay */}
            <div className="work-hero-artwork">
              <img 
                src="/assets/work/velox_primary.jpg" 
                alt="Magicency Connected Growth Work" 
                className="work-hero-artwork-img"
                loading="eager"
                decoding="async"
              />
              <div className="work-hero-artwork-overlay" />
            </div>

            {/* Technical Telemetry Floating Overlay */}
            <div className="work-hero-telemetry-badge">
              <div className="work-hero-telemetry-header">
                <span className="telemetry-live-dot" />
                <span className="telemetry-code">{c.telemetry.status}</span>
              </div>
              <div className="work-hero-telemetry-body">
                <span className="telemetry-main">{c.telemetry.model}</span>
                <span className="telemetry-sub">{c.telemetry.verification}</span>
              </div>
            </div>

            {/* Grid accent lines */}
            <div className="work-hero-visual-grid" aria-hidden="true">
              <span className="grid-cross grid-cross--tl">+</span>
              <span className="grid-cross grid-cross--tr">+</span>
              <span className="grid-cross grid-cross--bl">+</span>
              <span className="grid-cross grid-cross--br">+</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
