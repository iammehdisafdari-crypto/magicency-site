import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';

export default function CapabilityItem({ service }) {
  const { lang, isRTL } = useLanguage();
  const { navigate } = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const title = lang === 'fa' ? service.nameFa : service.nameEn;
  const targetHref = `/capabilities/${service.slug || service.id}`;

  const handleClick = (e) => {
    // Preserve standard browser behaviors for cmd/ctrl/meta clicks or new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    navigate(targetHref);
  };

  return (
    <div
      className={`service-row-container ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={targetHref}
        className="service-row-link"
        onClick={handleClick}
        aria-label={`${service.num} ${title} — ${lang === 'fa' ? 'مشاهده جزئیات توانمندی' : 'View capability details'}`}
      >
        {/* Left: Numerical Index + Primary Title */}
        <div className="service-row-left">
          <span className="service-num">{service.num}</span>
          <h3 className="service-name">{title}</h3>
        </div>

        {/* Center / Right: Large Dominant Desktop Hover Visual */}
        <div className="service-row-visual" aria-hidden="true">
          <div className="service-row-visual-frame">
            <img
              src={service.image}
              alt={service.altText || title}
              className="service-row-visual-img"
              width="420"
              height="240"
              loading="lazy"
              decoding="async"
            />
            <div className="service-row-visual-overlay" />
          </div>
        </div>

        {/* Far Right: Directional Affordance Arrow */}
        <div className="service-row-arrow" aria-hidden="true">
          <span className="service-arrow-circle">
            <span className="service-arrow-char">
              {isRTL ? '←' : '→'}
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}
