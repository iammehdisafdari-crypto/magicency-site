import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { SERVICES_DATA } from '../../data/capabilitiesData';

export default function CapabilityDetailPage({ service }) {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
  const { navigate } = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const titleEn = `${service.nameEn} // Capabilities // MAGICENCY®`;
    const titleFa = `${service.nameFa} // توانمندی‌ها // مجیکنسـی (MAGICENCY®)`;
    document.title = lang === 'fa' ? titleFa : titleEn;
  }, [service, lang]);

  if (!service) return null;

  const title = lang === 'fa' ? service.nameFa : service.nameEn;
  const desc = lang === 'fa' ? service.descFa : service.descEn;
  const overview = lang === 'fa' ? service.overviewFa : service.overviewEn;
  const systemRole = lang === 'fa' ? service.systemRoleFa : service.systemRoleEn;
  const deliverables = lang === 'fa' ? service.deliverablesFa : service.deliverablesEn;
  const tags = lang === 'fa' ? service.tagsFa : service.tagsEn;

  // Next capability calculation
  const currentIndex = SERVICES_DATA.findIndex((s) => s.id === service.id);
  const nextIndex = (currentIndex + 1) % SERVICES_DATA.length;
  const nextService = SERVICES_DATA[nextIndex];
  const nextTitle = lang === 'fa' ? nextService.nameFa : nextService.nameEn;

  const handleBackToCapabilities = (e) => {
    e.preventDefault();
    navigate('/capabilities#services');
  };

  const handleNextCapability = (e) => {
    e.preventDefault();
    navigate(`/capabilities/${nextService.slug || nextService.id}`);
  };

  const handleOpenDiscovery = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <article className={`capability-detail-page ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      <div className="capability-detail-inner">
        {/* Navigation & Breadcrumb */}
        <div className="capability-detail-nav">
          <a
            href="/capabilities#services"
            onClick={handleBackToCapabilities}
            className="capability-back-link"
          >
            <span className="capability-back-arrow" aria-hidden="true">
              {isRTL ? '→' : '←'}
            </span>
            <span>{lang === 'fa' ? 'تمام توانمندی‌ها' : 'All Capabilities'}</span>
          </a>

          <div className="capability-meta-index">
            <span className="capability-num-badge">{service.num}</span>
          </div>
        </div>

        {/* Hero Header */}
        <header className="capability-detail-header">
          <div className="capability-eyebrow">
            <span className="cap-pill-indicator" />
            <span className="cap-pill-text">
              {lang === 'fa' ? `توانمندی / ${service.num}` : `CAPABILITY / ${service.num}`}
            </span>
          </div>

          <h1 className="capability-detail-title">{title}</h1>

          <p className="capability-detail-lead">{desc}</p>
        </header>

        {/* Dominant Visual Banner */}
        <div className="capability-visual-stage">
          <div className="capability-visual-frame">
            <img
              src={service.image}
              alt={service.altText || title}
              className="capability-visual-img"
              width="1440"
              height="810"
              loading="eager"
              decoding="async"
            />
            <div className="capability-visual-overlay" />
            <div className="capability-visual-badge">
              <span className="capability-badge-dot" />
              <span>{service.num} // {title}</span>
            </div>
          </div>
        </div>

        {/* Strategic Narrative & System Role */}
        <div className="capability-content-grid">
          <div className="capability-overview-col">
            <h2 className="capability-section-heading">
              {lang === 'fa' ? 'رویکرد معماری' : 'Architectural Approach'}
            </h2>
            <p className="capability-overview-text">{overview}</p>

            <div className="capability-tags-cloud">
              {tags.map((tag, idx) => (
                <span key={idx} className="capability-tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="capability-system-role-col">
            <div className="capability-system-role-card">
              <span className="system-role-label">
                {lang === 'fa' ? 'نقش در سیستم رشد' : 'Growth Operating System Role'}
              </span>
              <p className="system-role-body">{systemRole}</p>
            </div>

            <div className="capability-deliverables-card">
              <h3 className="deliverables-heading">
                {lang === 'fa' ? 'دستاوردهای کلیدی اجرایی' : 'Core Deliverables'}
              </h3>
              <ul className="deliverables-list">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="deliverable-item">
                    <span className="deliverable-bullet" aria-hidden="true">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Conversion CTA Block */}
        <div className="capability-action-card">
          <div className="capability-action-text">
            <h3 className="capability-action-headline">
              {lang === 'fa'
                ? `آماده‌اید ${title} را مهندسی کنید؟`
                : `Ready to engineer ${title}?`}
            </h3>
            <p className="capability-action-sub">
              {lang === 'fa'
                ? 'یک جلسه تشخیصی معماری رشد رزرو کنید تا وضعیت فعلی و گلوگاه‌های مقیاس‌پذیری شما را بررسی کنیم.'
                : 'Schedule an Architectural Growth Discovery to diagnose current bottlenecks and construct your roadmap.'}
            </p>
          </div>
          <div className="capability-action-buttons">
            <button
              type="button"
              onClick={handleOpenDiscovery}
              className="btn-capability-primary"
            >
              {lang === 'fa' ? 'درخواست جلسه تشخیصی' : 'Schedule Discovery'}
            </button>
            <a
              href="/capabilities#services"
              onClick={handleBackToCapabilities}
              className="btn-capability-secondary"
            >
              {lang === 'fa' ? 'مشاهده همه توانمندی‌ها' : 'Explore All'}
            </a>
          </div>
        </div>

        {/* Next Capability Navigation Bar */}
        <div className="capability-next-nav">
          <span className="capability-next-label">
            {lang === 'fa' ? 'توانمندی بعدی' : 'Next Capability'}
          </span>
          <a
            href={`/capabilities/${nextService.slug || nextService.id}`}
            onClick={handleNextCapability}
            className="capability-next-link"
          >
            <div className="capability-next-text">
              <span className="capability-next-num">{nextService.num}</span>
              <span className="capability-next-name">{nextTitle}</span>
            </div>
            <span className="capability-next-arrow" aria-hidden="true">
              {isRTL ? '←' : '→'}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
