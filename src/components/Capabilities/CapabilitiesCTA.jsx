import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function CapabilitiesCTA() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();

  const handleOpenDiscovery = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="cap-cta-block" id="contact" aria-label="Let's talk">
      <div className="cap-cta-inner">
        <div className="cap-cta-header">
          <span className="about-intro-label">
            <span className="clients-label-icon">+</span>{' '}
            {lang === 'fa' ? 'شروع همکاری' : "Let's talk"}
          </span>
          <h2 className="cap-cta-heading">
            {lang === 'fa' ? (
              <>
                چالش رشدی دارید که<br />
                <span>ارزش حل کردن داشته باشد؟</span>
              </>
            ) : (
              <>
                Have a growth problem<br />
                <span>worth solving?</span>
              </>
            )}
          </h2>
          <p className="cap-cta-sub">
            {lang === 'fa'
              ? 'بیایید آن را به یک سیستم قابل اتکا و سودآور تبدیل کنیم.'
              : "Let's turn it into a system."}
          </p>
          <div className="cap-cta-actions">
            <button
              type="button"
              onClick={handleOpenDiscovery}
              className="btn btn-accent btn-lg cap-cta-button"
            >
              <span>{lang === 'fa' ? 'طرح یک چالش رشد' : 'Discuss a Growth Challenge'}</span>
              <span className="cap-arrow">{isRTL ? '←' : '→'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
