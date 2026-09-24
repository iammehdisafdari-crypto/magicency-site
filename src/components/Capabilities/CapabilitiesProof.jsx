import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PROOF_STATS } from '../../data/capabilitiesData';

export default function CapabilitiesProof() {
  const { lang, setIsModalOpen } = useLanguage();

  const handleOpenDiscovery = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="results-section" id="results" aria-label="Results">
      <div className="results-inner">
        {/* Horizontal Stats Bar (1:1 CR38 .stats-bar) */}
        <div className="stats-bar">
          {PROOF_STATS.map((stat, idx) => (
            <div key={idx} className="stats-bar-item">
              <span className="stats-bar-number">{stat.number}</span>
              <span className="stats-bar-label">
                {lang === 'fa' ? stat.labelFa : stat.labelEn}
              </span>
            </div>
          ))}
        </div>

        {/* Highlight Case Box (CR38 .results-bento / .results-case layout) */}
        <div className="results-bento">
          <div className="results-case">
            <div className="results-case-top">
              <div className="results-case-label">
                <strong>{lang === 'fa' ? 'پرونده منتخب' : 'Documented Case'}</strong>
              </div>
            </div>
            <div className="results-case-bottom">
              <span className="results-case-brand">
                {lang === 'fa' ? 'املاک لوکس دبی' : 'High-Ticket Real Estate'}
              </span>
              <p className="results-case-desc">
                {lang === 'fa'
                  ? 'یکپارچه‌سازی گوگل ادز، لندینگ‌پیج‌های پرسرعت و سیستم جذب سرمایه‌گذاران بین‌المللی.'
                  : 'Integrated search intent capture, conversion landing experience, and high-ticket investor acquisition.'}
              </p>
            </div>
            <div className="results-case-footer">
              <a href="#contact" onClick={handleOpenDiscovery} className="btn btn-accent btn-sm">
                {lang === 'fa' ? 'بررسی معماری پروژه' : 'View Architecture'}
              </a>
            </div>
          </div>

          <div className="results-card results-mid-card">
            <div>
              <span className="results-card-label">
                {lang === 'fa' ? 'بازدهی ثبت‌شده PMax:' : 'PMax Campaign Efficiency:'}
              </span>
              <p className="results-card-value">
                {lang === 'fa' ? 'ROAS 11.0x با ۱,۲۲۰ خرید' : 'Reported ROAS 11.0x (1.22K purchases)'}
              </p>
            </div>
            <div>
              <span className="results-card-label">
                {lang === 'fa' ? 'مقیاس سئوی تکنیکال:' : 'Technical SEO Scale:'}
              </span>
              <p className="results-card-value">
                {lang === 'fa' ? '۸۴.۱ هزار کلیک با ۵.۱۸ میلیون ایمپرشن' : '84.1K clicks, 5.18M impressions'}
              </p>
            </div>
            <div className="results-review">
              <p className="results-review-quote">
                {lang === 'fa'
                  ? '«توانمندی‌های مجیکنسـی به صورت جزیره‌ای کار نمی‌کنند؛ آن‌ها یک سیستم پیوسته می‌سازند.»'
                  : '"Capabilities operate not as isolated silos, but as a compounding growth engine."'}
              </p>
              <div className="results-review-author">
                <span className="results-review-name">
                  {lang === 'fa' ? 'معماری رشد اختصاصی' : 'System Telemetry Principle'}
                </span>
                <span className="results-review-company">· MAGICENCY®</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
