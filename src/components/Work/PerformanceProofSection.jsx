import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PERFORMANCE_METRICS, PERFORMANCE_EVIDENCE } from '../../data/performanceProof';
import { EASING } from '../motion';

export default function PerformanceProofSection() {
  const { lang, setIsModalOpen } = useLanguage();

  const content = {
    en: {
      eyebrow: 'PERFORMANCE PROOF',
      heading: 'Selected performance marketing experience',
      description: 'Aggregated performance figures from selected advertising accounts. Conversions reflect actions configured across ad engines and do not constitute arbitrary projections.',
      discussLink: 'Discuss campaign economics',
      verifiedEvidenceLabel: 'Performance Snapshot'
    },
    fa: {
      eyebrow: 'شواهد عملکرد و پرفورمنس',
      heading: 'تجربه و سوابق مستند پرفورمنس مارکتینگ',
      description: 'آمارهای تجمیعی از اکانت‌ها و پروژه‌های منتخب تبلیغات کلیکی. داده‌های تبدیل بر مبنای تنظیمات کانال‌ها ثبت شده‌اند.',
      discussLink: 'بررسی مدل اقتصادی کمپین‌ها',
      verifiedEvidenceLabel: 'نمای تله‌متری عملکرد'
    }
  };

  const c = content[lang] || content.en;

  return (
    <section className="work-proof-section shared-section" aria-labelledby="work-proof-heading">
      <div className="container work-proof-container">
        
        {/* Section Header */}
        <header className="work-proof-header">
          <span className="work-kicker">
            <span className="work-kicker-dot" />
            <span>{c.eyebrow}</span>
          </span>
          <h2 id="work-proof-heading" className="work-proof-heading">
            {c.heading}
          </h2>
          <p className="work-proof-lead">
            {c.description}
          </p>
        </header>

        {/* 4-Item KPI Strip */}
        <div className="work-proof-kpi-strip" role="list">
          {PERFORMANCE_METRICS.map((kpi, idx) => (
            <motion.article 
              key={kpi.id}
              className="work-kpi-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: EASING.PRIMARY }}
              role="listitem"
            >
              <div className="work-kpi-metric-wrap">
                <span className="work-kpi-metric">{kpi.metric}</span>
              </div>
              <strong className="work-kpi-label">
                {kpi.label[lang] || kpi.label.en}
              </strong>
              <span className="work-kpi-sub">
                {kpi.detail[lang] || kpi.detail.en}
              </span>
            </motion.article>
          ))}
        </div>

        {/* Dashboard Evidence Gallery */}
        <div className="work-proof-gallery">
          {PERFORMANCE_EVIDENCE.map((item, idx) => {
            const accountStr = item.account[lang] || item.account.en;
            const dateStr = item.dateRange[lang] || item.dateRange.en;
            const summaryStr = item.summary[lang] || item.summary.en;

            return (
              <motion.figure 
                key={item.id}
                className="work-evidence-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: EASING.PRIMARY }}
              >
                <div className="work-evidence-media">
                  <img 
                    src={item.image} 
                    alt={accountStr} 
                    className="work-evidence-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="work-evidence-tag">
                    <span>{item.platform}</span>
                  </div>
                </div>

                <figcaption className="work-evidence-caption">
                  <div className="work-evidence-meta-row">
                    <strong className="work-evidence-title">{accountStr}</strong>
                    <span className="work-evidence-date">{dateStr}</span>
                  </div>

                  <div className="work-evidence-stats-row">
                    <span className="evidence-stat">
                      <em>Clicks:</em> {item.stats.clicks}
                    </span>
                    <span className="evidence-stat">
                      <em>Conversions:</em> {item.stats.conversions}
                    </span>
                    <span className="evidence-stat">
                      <em>Cost/Spend:</em> {item.stats.spend}
                    </span>
                    <span className="evidence-stat evidence-stat--highlight">
                      <em>Yield:</em> {item.stats.metric}
                    </span>
                  </div>

                  <p className="work-evidence-summary">
                    {summaryStr}
                  </p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        {/* Discuss Link */}
        <div className="work-proof-footer-action">
          <button 
            type="button" 
            onClick={() => setIsModalOpen(true)}
            className="work-inline-link"
          >
            <span>{c.discussLink}</span>
            <span className="work-arrow" aria-hidden="true">↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}
