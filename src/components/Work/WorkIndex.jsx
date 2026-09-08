import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { EASING, editorialVariants, Stagger } from '../motion';

export default function WorkIndex({ projects }) {
  const { lang, isRTL, setIsModalOpen } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeMobileId, setActiveMobileId] = useState(projects[0]?.id || null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse spring coordinates for subtle floating preview on desktop
  const mouseX = useSpring(0, EASING.SPRING_PHYSICS);
  const mouseY = useSpring(0, EASING.SPRING_PHYSICS);

  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 992
    );
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    const { clientX, clientY } = e;
    mouseX.set(clientX + (isRTL ? -380 : 30));
    mouseY.set(clientY - 160);
  };

  return (
    <div 
      className="work-index-wrapper"
      onMouseMove={handleMouseMove}
    >
      <div className="work-index-header-bar">
        <span className="index-col-heading col-num">#</span>
        <span className="index-col-heading col-client">
          {lang === 'fa' ? 'کارفرما و حوزه فعالیت' : 'CLIENT / INDUSTRY'}
        </span>
        <span className="index-col-heading col-challenge">
          {lang === 'fa' ? 'چالش بیزنس و اقدام' : 'CHALLENGE & MOVE'}
        </span>
        <span className="index-col-heading col-work">
          {lang === 'fa' ? 'سیستم‌های مهندسی‌شده' : 'THE WORK'}
        </span>
        <span className="index-col-heading col-outcome">
          {lang === 'fa' ? 'نتیجه استراتژیک' : 'THE OUTCOME'}
        </span>
        <span className="index-col-heading col-action"></span>
      </div>

      {/* Editorial Project Rows */}
      <div className="work-index-list" role="feed" aria-label="Project Index">
        <AnimatePresence>
          {projects.map((proj, idx) => {
            const isHovered = hoveredProject?.id === proj.id;
            const isMobileActive = activeMobileId === proj.id;

            return (
              <motion.article
                key={proj.id}
                id={proj.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: EASING.PRIMARY }}
                className={`work-index-row ${isHovered ? 'is-hovered' : ''} ${isMobileActive ? 'is-mobile-active' : ''}`}
                onMouseEnter={() => !isTouchDevice && setHoveredProject(proj)}
                onMouseLeave={() => !isTouchDevice && setHoveredProject(null)}
                onClick={() => {
                  if (isTouchDevice) {
                    setActiveMobileId(proj.id);
                  }
                }}
                tabIndex={0}
                onFocus={() => setHoveredProject(proj)}
                onBlur={() => setHoveredProject(null)}
              >
                {/* 01: Number */}
                <div className="row-col col-num">
                  <span className="row-num">{lang === 'fa' ? proj.numFa : proj.num}</span>
                </div>

                {/* 02: Client & Industry */}
                <div className="row-col col-client">
                  <h3 className="row-client-name">
                    {proj.client[lang] || proj.client.en}
                  </h3>
                  <span className="row-industry-label">
                    {proj.industry[lang] || proj.industry.en}
                  </span>
                  <span className="row-year-tag">{proj.year}</span>
                </div>

                {/* 03: The Challenge & The Move */}
                <div className="row-col col-challenge">
                  <div className="challenge-block">
                    <span className="row-sub-label">
                      {lang === 'fa' ? 'چالش:' : 'CHALLENGE:'}
                    </span>
                    <p className="row-challenge-text">
                      {proj.challenge[lang] || proj.challenge.en}
                    </p>
                  </div>
                  <div className="move-block">
                    <span className="row-sub-label highlight-label">
                      {lang === 'fa' ? 'اقدام:' : 'THE MOVE:'}
                    </span>
                    <p className="row-move-text">
                      {proj.theMove[lang] || proj.theMove.en}
                    </p>
                  </div>
                </div>

                {/* 04: The Work (Services / Systems) */}
                <div className="row-col col-work">
                  <div className="row-tags-wrapper">
                    {(proj.services[lang] || proj.services.en).map((srv, sIdx) => (
                      <span key={sIdx} className="row-service-pill">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 05: The Outcome */}
                <div className="row-col col-outcome">
                  <p className="row-outcome-text">
                    {proj.outcome[lang] || proj.outcome.en}
                  </p>
                  <div className="row-highlights-list">
                    {(proj.qualitativeHighlights[lang] || proj.qualitativeHighlights.en).slice(0, 2).map((h, hIdx) => (
                      <span key={hIdx} className="row-highlight-item">
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 06: Action */}
                <div className="row-col col-action">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="row-action-btn"
                    aria-label={`${lang === 'fa' ? 'مشاهده و بررسی' : 'View case'} ${proj.client[lang] || proj.client.en}`}
                  >
                    <span className="action-text">
                      {lang === 'fa' ? 'بررسی پرونده' : 'VIEW CASE'}
                    </span>
                    <ArrowUpRight size={16} className="action-arrow" />
                  </button>
                </div>

                {/* Mobile Inline Visual Preview */}
                {isTouchDevice && (
                  <div className="row-mobile-media-drawer">
                    <img 
                      src={proj.media.primary} 
                      alt={proj.client[lang] || proj.client.en} 
                      className="row-mobile-media-img"
                      width="600"
                      height="400"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="row-mobile-media-badge">
                      <span>{lang === 'fa' ? proj.media.badgeFa : proj.media.badgeEn}</span>
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Desktop Floating Cinematic Cursor Preview */}
      {!isTouchDevice && (
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              className="work-floating-preview"
              style={{
                left: mouseX,
                top: mouseY
              }}
              initial={{ opacity: 0, scale: 0.9, clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              exit={{ opacity: 0, scale: 0.94, clipPath: 'inset(0% 0% 100% 0%)' }}
              transition={{ duration: 0.32, ease: EASING.CINEMATIC }}
            >
              <div className="floating-preview-frame">
                <img
                  src={hoveredProject.media.primary}
                  alt={hoveredProject.client[lang] || hoveredProject.client.en}
                  className="floating-preview-img"
                  width="480"
                  height="320"
                  loading="lazy"
                  decoding="async"
                />
                <div className="floating-preview-overlay" />
                <div className="floating-preview-caption">
                  <span className="floating-caption-client">
                    {hoveredProject.client[lang] || hoveredProject.client.en}
                  </span>
                  <span className="floating-caption-badge">
                    {lang === 'fa' ? hoveredProject.media.badgeFa : hoveredProject.media.badgeEn}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
