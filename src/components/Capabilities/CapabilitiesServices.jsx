import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SERVICES_DATA } from '../../data/capabilitiesData';
import CapabilityItem from './CapabilityItem';

export default function CapabilitiesServices() {
  const { lang, setIsModalOpen } = useLanguage();

  const handleOpenDiscovery = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="services-section" id="services" aria-label="Services">
      <div className="services-inner">
        {/* Header strictly following CR38 .services-header */}
        <div className="services-header">
          <span className="services-label">
            <span className="services-label-icon">+</span>{' '}
            {lang === 'fa' ? 'آنچه انجام می‌دهیم' : 'What we do'}
          </span>
          <div className="services-title-wrap">
            <h2 className="services-title">
              {lang === 'fa' ? 'توانمندی‌ها.' : 'Services.'}
            </h2>
          </div>
        </div>

        {/* Editorial Vertical Services List (CR38 .services-list) */}
        <div className="services-list" role="region" aria-label="Services List">
          {SERVICES_DATA.map((service) => (
            <CapabilityItem
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* Services CTA strictly following CR38 .services-cta */}
        <div className="services-cta">
          <a href="#contact" onClick={handleOpenDiscovery} className="btn-services-cta">
            {lang === 'fa' ? 'شروع پروژه' : 'Get started'}
          </a>
        </div>
      </div>
    </section>
  );
}
