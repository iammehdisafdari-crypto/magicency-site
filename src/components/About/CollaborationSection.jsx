import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import CTA from '../Common/CTA';

export default function CollaborationSection() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
  const collab = ABOUT_DATA[lang]?.collaboration || ABOUT_DATA.en.collaboration;
  const areas = collab.areas || [];

  return (
    <section 
      id="section-collaboration" 
      className={`about-chapter-section collaboration-chapter ${isRTL ? 'is-rtl' : 'is-ltr'}`}
      aria-label="Chapter 10: Build With Us and Specialist Collaboration"
    >
      <div className="container collaboration-container">
        
        {/* Section Meta Header */}
        <div className="chapter-header-row">
          <div className="chapter-meta-tag">
            <span className="chapter-number">{collab.chapterNum}</span>
            <span className="chapter-separator">/</span>
            <span className="chapter-name">{collab.eyebrow}</span>
          </div>
          <div className="chapter-pill-tag">
            <span>{collab.chapterTag}</span>
          </div>
        </div>

        <div className="collaboration-intro">
          <h2 className="collaboration-headline">{collab.headline}</h2>
          <p className="collaboration-lead">{collab.lead}</p>
        </div>

        {/* 4 Specialist Collaboration Categories (No Fake Job Listings) */}
        <div className="collaboration-areas-grid" role="list">
          {areas.map((area) => (
            <div key={area.num} className="collaboration-area-card" role="listitem">
              <div className="area-card-top">
                <span className="area-num">{area.num}</span>
                <span className="area-code">{area.code}</span>
              </div>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-desc">{area.desc}</p>
              <div className="area-bottom-line" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Direct Collaboration Invitation Box */}
        <div className="collaboration-invitation-box">
          <div className="invitation-text-side">
            <h4 className="invitation-heading">
              {isRTL ? 'آماده همکاری با استانداردهای نخبگان هستید؟' : 'Ready to build with senior standards?'}
            </h4>
            <p className="invitation-subtext">
              {isRTL 
                ? 'چه به عنوان متخصص ارشد مستقل و چه به عنوان شریک راهبردی، ما مشتاق گفتگو درباره فرصت‌های هم‌افزایی هستیم.'
                : 'Whether as an independent senior specialist or strategic partner, we welcome conversations about shared commercial leverage.'}
            </p>
          </div>

          <div className="invitation-action-side">
            <CTA
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              trackingName="initiate_collaboration"
              trackingLocation="about_collaboration_section"
              ariaLabel={collab.cta}
              className="collaboration-cta-button"
            >
              {collab.cta}
            </CTA>
            <span className="invitation-direct-email">{collab.contact}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
