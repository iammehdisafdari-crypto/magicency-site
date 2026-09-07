import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useDeferredTarget } from '../motion/useDeferredTarget';
import './GrowthSystemNarrative.css';

const toWebp = (url) => (url ? url.replace(/\.(jpg|jpeg|png)$/, '.webp') : url);

// 6 Visual Media Objects with Stage Transformation Coordinates
const MEDIA_OBJECTS = [
  {
    id: 'ad_creative',
    type: 'image',
    src: '/assets/ecosystem/paid_ad.jpg',
    aspect: 'portrait',
    titleEn: 'Paid Video Ad Creative',
    titleFa: 'ویدیوی تبلیغاتی هدفمند',
    tag: 'ATTENTION',
    metric: 'CTR 4.82%',
    subMetric: '1.2M Reach',
    // Stage layouts: [activity, fragmentation, friction, diagnosis, connection, system]
    layouts: [
      { x: 4, y: 8, w: 210, r: -2, z: 12, opacity: 1, scale: 1 },
      { x: 2, y: 4, w: 210, r: -7, z: 12, opacity: 0.9, scale: 0.96 },
      { x: 3, y: 6, w: 210, r: -5, z: 12, opacity: 1, scale: 0.98, alert: 'CREATIVE FATIGUE // CAC +58%' },
      { x: 6, y: 16, w: 220, r: 0, z: 20, opacity: 1, scale: 1.04, focus: true },
      { x: 2, y: 18, w: 190, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 2, y: 18, w: 190, r: 0, z: 15, opacity: 1, scale: 1 }
    ],
    mobileLayouts: [
      { x: 3, y: 4, w: 140, r: -2, z: 12, opacity: 1, scale: 1 },
      { x: 2, y: 2, w: 140, r: -5, z: 12, opacity: 0.9, scale: 0.96 },
      { x: 3, y: 4, w: 145, r: -3, z: 12, opacity: 1, scale: 0.98, alert: 'CAC +58%' },
      { x: 4, y: 10, w: 150, r: 0, z: 16, opacity: 0.9, scale: 1 },
      { x: 2, y: 6, w: 140, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 2, y: 6, w: 140, r: 0, z: 15, opacity: 1, scale: 1 }
    ]
  },
  {
    id: 'landing_page',
    type: 'image',
    src: '/assets/ecosystem/landing_page.jpg',
    aspect: 'landscape',
    titleEn: 'High-Intent Landing Page',
    titleFa: 'صفحه فرود با قصد بالا',
    tag: 'EXPERIENCE',
    metric: '1,842 Live',
    subMetric: 'Conv 3.1%',
    layouts: [
      { x: 23, y: 4, w: 380, r: 1, z: 10, opacity: 1, scale: 1 },
      { x: 26, y: 2, w: 380, r: 5, z: 10, opacity: 0.88, scale: 0.95 },
      { x: 24, y: 4, w: 380, r: 4, z: 10, opacity: 1, scale: 0.98, alert: '82% BOUNCE // INTENT MISMATCH' },
      { x: 24, y: 12, w: 400, r: 0, z: 22, opacity: 1, scale: 1.05, focus: true },
      { x: 19, y: 18, w: 320, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 19, y: 18, w: 320, r: 0, z: 15, opacity: 1, scale: 1 }
    ],
    mobileLayouts: [
      { x: 48, y: 4, w: 165, r: 2, z: 10, opacity: 1, scale: 1 },
      { x: 50, y: 2, w: 165, r: 4, z: 10, opacity: 0.88, scale: 0.95 },
      { x: 48, y: 4, w: 165, r: 3, z: 18, opacity: 1, scale: 1, alert: '82% BOUNCE' },
      { x: 18, y: 8, w: 195, r: 0, z: 25, opacity: 1, scale: 1.04, focus: true },
      { x: 46, y: 6, w: 160, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 46, y: 6, w: 160, r: 0, z: 15, opacity: 1, scale: 1 }
    ]
  },
  {
    id: 'mobile_checkout',
    type: 'image',
    src: '/assets/ecosystem/mobile_checkout.jpg',
    aspect: 'portrait',
    titleEn: 'Mobile Checkout UI',
    titleFa: 'تجربه پرداخت موبایلی',
    tag: 'CONVERSION',
    metric: '$392 AOV',
    subMetric: '1-Tap Flow',
    layouts: [
      { x: 57, y: 8, w: 175, r: -3, z: 14, opacity: 1, scale: 1 },
      { x: 62, y: 12, w: 175, r: -8, z: 14, opacity: 0.92, scale: 0.94 },
      { x: 58, y: 10, w: 175, r: -6, z: 14, opacity: 1, scale: 0.98, alert: '68% CHECKOUT DROP-OFF' },
      { x: 58, y: 14, w: 185, r: 0, z: 20, opacity: 1, scale: 1.04, focus: true },
      { x: 48, y: 18, w: 165, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 48, y: 18, w: 165, r: 0, z: 15, opacity: 1, scale: 1 }
    ],
    mobileLayouts: [
      { x: 4, y: 48, w: 135, r: -3, z: 14, opacity: 1, scale: 1 },
      { x: 2, y: 50, w: 135, r: -6, z: 14, opacity: 0.92, scale: 0.94 },
      { x: 4, y: 48, w: 140, r: -4, z: 16, opacity: 1, scale: 1, alert: '68% DROP-OFF' },
      { x: 4, y: 50, w: 135, r: 0, z: 14, opacity: 0.85, scale: 1 },
      { x: 3, y: 48, w: 135, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 3, y: 48, w: 135, r: 0, z: 15, opacity: 1, scale: 1 }
    ]
  },
  {
    id: 'analytics_ui',
    type: 'image',
    src: '/assets/ecosystem/analytics_dashboard.jpg',
    aspect: 'landscape',
    titleEn: 'Attribution & Telemetry',
    titleFa: 'اتریبیوشن و تله‌متری',
    tag: 'TELEMETRY',
    metric: '$182.7K Rev',
    subMetric: 'Deterministic',
    layouts: [
      { x: 46, y: 48, w: 360, r: 2, z: 8, opacity: 1, scale: 1 },
      { x: 52, y: 54, w: 360, r: 6, z: 8, opacity: 0.85, scale: 0.94 },
      { x: 48, y: 50, w: 360, r: 4, z: 8, opacity: 1, scale: 0.97, alert: 'ATTRIBUTION BLINDSPOT // UNLINKED SILO' },
      { x: 46, y: 48, w: 380, r: 0, z: 18, opacity: 0.9, scale: 1 },
      { x: 78, y: 18, w: 270, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 78, y: 18, w: 270, r: 0, z: 15, opacity: 1, scale: 1 }
    ],
    mobileLayouts: [
      { x: 48, y: 46, w: 165, r: 2, z: 8, opacity: 1, scale: 1 },
      { x: 50, y: 48, w: 165, r: 5, z: 8, opacity: 0.85, scale: 0.94 },
      { x: 48, y: 46, w: 165, r: 3, z: 15, opacity: 1, scale: 0.97, alert: 'ATTRIBUTION SILO' },
      { x: 48, y: 46, w: 165, r: 0, z: 16, opacity: 0.9, scale: 1 },
      { x: 48, y: 48, w: 160, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 48, y: 48, w: 160, r: 0, z: 15, opacity: 1, scale: 1 }
    ]
  },
  {
    id: 'search_intent',
    type: 'card',
    aspect: 'compact',
    titleEn: 'Intent Demand Capture',
    titleFa: 'جذب نیت جستجو',
    tag: 'ACQUISITION',
    metric: '4.8X ROAS',
    subMetric: 'Top #1 Bidding',
    details: 'Google Ads: 12.4K clicks // $0.84 CPC // Quality Score 10/10',
    layouts: [
      { x: 5, y: 56, w: 230, r: -1, z: 9, opacity: 1, scale: 1 },
      { x: 1, y: 64, w: 230, r: -5, z: 9, opacity: 0.88, scale: 0.95 },
      { x: 4, y: 58, w: 230, r: -3, z: 9, opacity: 1, scale: 0.98, alert: 'KEYWORD CANNIBALIZATION' },
      { x: 5, y: 56, w: 240, r: 0, z: 16, opacity: 0.9, scale: 1 },
      { x: 3, y: 64, w: 220, r: 0, z: 14, opacity: 1, scale: 1 },
      { x: 3, y: 64, w: 220, r: 0, z: 14, opacity: 1, scale: 1 }
    ],
    mobileLayouts: [
      { x: 4, y: 84, w: 150, r: -1, z: 9, opacity: 0.9, scale: 0.95 },
      { x: 2, y: 86, w: 150, r: -4, z: 9, opacity: 0.8, scale: 0.9 },
      { x: 4, y: 84, w: 150, r: -2, z: 9, opacity: 0.85, scale: 0.9 },
      { x: 4, y: 84, w: 150, r: 0, z: 10, opacity: 0.85, scale: 0.9 },
      { x: 2, y: 84, w: 150, r: 0, z: 10, opacity: 0.9, scale: 0.95 },
      { x: 2, y: 84, w: 150, r: 0, z: 10, opacity: 0.9, scale: 0.95 }
    ]
  },
  {
    id: 'crm_retention',
    type: 'card',
    aspect: 'compact',
    titleEn: 'Lifecycle & CRM Engine',
    titleFa: 'موتور حفظ و بازگشت کاربر',
    tag: 'RETENTION',
    metric: '+89% LTV',
    subMetric: 'Churn -38%',
    details: 'Automated Post-Purchase Flow // Smart Reactivation Loop',
    layouts: [
      { x: 75, y: 12, w: 230, r: 3, z: 11, opacity: 1, scale: 1 },
      { x: 82, y: 8, w: 230, r: 7, z: 11, opacity: 0.85, scale: 0.94 },
      { x: 78, y: 10, w: 230, r: 5, z: 11, opacity: 1, scale: 0.98, alert: 'UNCONNECTED RETENTION LOOP' },
      { x: 75, y: 12, w: 240, r: 0, z: 16, opacity: 0.9, scale: 1 },
      { x: 62, y: 18, w: 200, r: 0, z: 15, opacity: 1, scale: 1 },
      { x: 62, y: 18, w: 200, r: 0, z: 15, opacity: 1, scale: 1 }
    ],
    mobileLayouts: [
      { x: 50, y: 84, w: 155, r: 2, z: 11, opacity: 0.9, scale: 0.95 },
      { x: 52, y: 86, w: 155, r: 5, z: 11, opacity: 0.8, scale: 0.9 },
      { x: 50, y: 84, w: 155, r: 3, z: 11, opacity: 0.85, scale: 0.9 },
      { x: 50, y: 84, w: 155, r: 0, z: 10, opacity: 0.85, scale: 0.9 },
      { x: 50, y: 84, w: 155, r: 0, z: 10, opacity: 0.9, scale: 0.95 },
      { x: 50, y: 84, w: 155, r: 0, z: 10, opacity: 0.9, scale: 0.95 }
    ]
  }
];

export default function GrowthSystemNarrative() {
  const { t, setIsModalOpen, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const narrative = t.narrative;
  const stages = narrative.stages;

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [hoveredMedia, setHoveredMedia] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const stageWallRef = useRef(null);
  const wallAnimIdRef = useRef(null);
  const cachedViewportRect = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const targetRef = useDeferredTarget(containerRef);

  // Track overall scroll progress through 500vh
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.001
  });

  // Calculate active stage (0 to 5 for 6 stages)
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (v) => {
      let idx = 0;
      if (v < 0.18) idx = 0;
      else if (v < 0.38) idx = 1;
      else if (v < 0.58) idx = 2;
      else if (v < 0.74) idx = 3;
      else if (v < 0.88) idx = 4;
      else idx = 5;
      setActiveStageIndex((prev) => (prev !== idx ? idx : prev));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Stage scrub jump
  const handleJumpToStage = (idx) => {
    if (!containerRef.current) return;
    const targets = [0.06, 0.26, 0.46, 0.64, 0.80, 0.94];
    const targetP = targets[idx];
    const top = containerRef.current.offsetTop + targetP * (containerRef.current.offsetHeight - window.innerHeight);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // Parallax mouse tracker with geometry caching and rAF transform
  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;
    if (!cachedViewportRect.current) {
      cachedViewportRect.current = e.currentTarget.getBoundingClientRect();
    }
    const rect = cachedViewportRect.current;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    if (!wallAnimIdRef.current) {
      wallAnimIdRef.current = requestAnimationFrame(() => {
        if (stageWallRef.current) {
          stageWallRef.current.style.transform = `perspective(1200px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
        }
        wallAnimIdRef.current = null;
      });
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    cachedViewportRect.current = null;
    if (wallAnimIdRef.current) {
      cancelAnimationFrame(wallAnimIdRef.current);
      wallAnimIdRef.current = null;
    }
    if (stageWallRef.current && !isMobile) {
      stageWallRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    }
  }, [isMobile]);

  const currentStage = stages[activeStageIndex] || stages[0];

  return (
    <section 
      ref={containerRef}
      id="growth-problem"
      className="growth-narrative-section"
      aria-label="Marketing Ecosystem Activity Wall"
    >
      {/* Sticky Fullscreen Experience Viewport */}
      <div 
        className="narrative-sticky-viewport"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cinematic Atmospheric Void */}
        <div className="narrative-ambient-void" />
        <div className="narrative-grain-layer" />

        {/* Top Control HUD */}
        <div className="narrative-top-hud">
          <div className="hud-left-brand">
            <span className="hud-badge-dot" />
            <span className="hud-system-title">{narrative.systemLabel}</span>
          </div>

          {/* Interactive 6-Stage Stepper */}
          <div className="hud-stage-stepper" role="tablist">
            {stages.map((stg, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;
              return (
                <button
                  key={stg.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`stage-step-pill ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                  onClick={() => handleJumpToStage(idx)}
                >
                  <span className="step-num">{stg.num}</span>
                  <span className="step-name">{stg.tag}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activePillGlow"
                      className="step-active-indicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hud-right-telemetry">
            <span className="hud-status-badge">
              {currentStage.statusBadge}
            </span>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="narrative-progress-bar-wrap">
          <motion.div 
            className="narrative-progress-fill" 
            style={{ scaleX: smoothProgress, transformOrigin: isRTL ? 'right' : 'left' }}
          />
        </div>

        {/* =========================================================
            PRIMARY HERO VISUAL: THE MARKETING ACTIVITY WALL (Media Ecosystem)
            ========================================================= */}
        <div 
          ref={stageWallRef}
          className="narrative-media-wall-stage"
          style={{
            willChange: isMobile ? 'auto' : 'transform'
          }}
        >
          {/* Supporting Connection Paths (Overlay Lines Between Media) */}
          <svg className="media-connections-svg" aria-hidden="true">
            <defs>
              <linearGradient id="busGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF5500" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FFAA33" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF5500" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Stage 01 & 02: Disjointed broken connections */}
            {activeStageIndex <= 1 && (
              <g className="connections-chaotic">
                <path d="M 160 140 Q 240 80 340 120" stroke="rgba(255,85,0,0.25)" strokeDasharray="4,6" strokeWidth="1" fill="none" />
                <path d="M 520 120 Q 620 180 660 160" stroke="rgba(255,85,0,0.2)" strokeDasharray="6,8" strokeWidth="1" fill="none" />
                <path d="M 680 280 Q 720 360 620 420" stroke="rgba(255,85,0,0.15)" strokeDasharray="3,5" strokeWidth="1" fill="none" />
              </g>
            )}

            {/* Stage 03: Friction alerts (Flickering red lines) */}
            {activeStageIndex === 2 && (
              <g className="connections-friction">
                <path d="M 180 160 L 320 160" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="6,4" fill="none" className="pulse-leak-line" />
                <path d="M 520 180 L 640 180" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="8,6" fill="none" className="pulse-leak-line" />
              </g>
            )}

            {/* Stage 04: Diagnostic scanning line */}
            {activeStageIndex === 3 && (
              <g className="connections-diagnosis">
                <path d="M 160 220 L 320 220 L 520 220 L 720 220" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2,2" fill="none" />
              </g>
            )}

            {/* Stage 05 & 06: Synchronized, glowing golden pipeline */}
            {activeStageIndex >= 4 && (
              <g className="connections-synchronized">
                <path d="M 120 200 L 260 200 L 520 200 L 700 200 L 860 200" stroke="url(#busGrad)" strokeWidth="2.5" fill="none" className="synchronized-pipeline-path" />
                {/* Return telemetry loop */}
                <path d="M 880 240 C 880 440, 100 440, 100 240" stroke="rgba(255,136,51,0.5)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
              </g>
            )}
          </svg>

          {/* Render Media Objects in Dynamic Spatial Layout */}
          {MEDIA_OBJECTS.map((obj) => {
            const layout = (isMobile && obj.mobileLayouts)
              ? (obj.mobileLayouts[activeStageIndex] || obj.mobileLayouts[0])
              : (obj.layouts[activeStageIndex] || obj.layouts[0]);
            const isHovered = hoveredMedia === obj.id;
            const hasAlert = activeStageIndex === 2 && layout.alert;
            const isDiagnosed = activeStageIndex === 3 && layout.focus;
            const isConnected = activeStageIndex >= 4;

            return (
              <motion.div
                key={obj.id}
                className={`media-ecosystem-object ${obj.id} ${obj.aspect} ${hasAlert ? 'media-has-alert' : ''} ${isDiagnosed ? 'media-diagnosed' : ''} ${isConnected ? 'media-connected' : ''} ${isHovered ? 'media-hovered' : ''}`}
                animate={{
                  left: `${layout.x}%`,
                  top: `${layout.y}%`,
                  width: `${layout.w}px`,
                  rotate: layout.r,
                  opacity: layout.opacity,
                  scale: isHovered ? layout.scale * 1.05 : layout.scale,
                  zIndex: isHovered ? 40 : layout.z
                }}
                transition={{
                  type: 'spring',
                  stiffness: 90,
                  damping: 22,
                  mass: 0.8
                }}
                onMouseEnter={() => setHoveredMedia(obj.id)}
                onMouseLeave={() => setHoveredMedia(null)}
              >
                {/* Media Item Frame Container */}
                <div className="media-inner-card">
                  {/* Media Header Badge / Toolbar */}
                  <div className="media-chrome-header">
                    <div className="media-chrome-left">
                      <span className="media-status-dot" />
                      <span className="media-tag-name">{obj.tag}</span>
                    </div>
                    <span className="media-metric-badge">{obj.metric}</span>
                  </div>

                  {/* Visual Content (Image / Interface / Card) */}
                  {obj.type === 'image' ? (
                    <div className="media-image-wrapper">
                      <picture>
                        <source srcSet={toWebp(obj.src)} type="image/webp" />
                        <img 
                          src={obj.src} 
                          alt={isRTL ? obj.titleFa : obj.titleEn} 
                          className="media-actual-img"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                      {/* Subtle Glass Glare */}
                      <div className="media-glare-overlay" />
                    </div>
                  ) : (
                    /* Art-Directed Interface Mockup Card */
                    <div className="media-ui-card-content">
                      <div className="ui-card-headline">{isRTL ? obj.titleFa : obj.titleEn}</div>
                      <p className="ui-card-details">{obj.details}</p>
                      <div className="ui-card-metric-footer">
                        <span className="metric-pill">{obj.subMetric}</span>
                        <span className="status-pill">ACTIVE VECTOR</span>
                      </div>
                    </div>
                  )}

                  {/* Real-time Subtitle & Title Bar */}
                  <div className="media-footer-bar">
                    <span className="media-title-text">{isRTL ? obj.titleFa : obj.titleEn}</span>
                    <span className="media-sub-text">{obj.subMetric}</span>
                  </div>

                  {/* Stage 03 Friction Alert Banner */}
                  <AnimatePresence>
                    {hasAlert && (
                      <motion.div 
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="media-friction-badge"
                      >
                        <span className="badge-exclamation">!</span>
                        <span>{layout.alert}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Stage 04 Diagnostic Measurement Caliper */}
                  <AnimatePresence>
                    {isDiagnosed && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="media-diagnostic-caliper"
                      >
                        <span className="caliper-corner tl" />
                        <span className="caliper-corner tr" />
                        <span className="caliper-corner bl" />
                        <span className="caliper-corner br" />
                        <span className="caliper-tag">ISOLATED BOTTLENECK</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}

          {/* Stage 05 & 06: Compounding Flywheel Meter */}
          <AnimatePresence>
            {activeStageIndex >= 4 && (
              <motion.div 
                initial={{ opacity: 0, y: 16, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12 }}
                className="synchronized-flywheel-meter"
              >
                <div className="meter-badge">
                  <span className="pulse-emerald" />
                  <span>{isRTL ? 'سیستم رشد در وضعیت همگام و حلقه بسته' : 'CLOSED-LOOP GROWTH SYSTEM ACTIVE'}</span>
                </div>
                <div className="meter-stats-row">
                  <div className="meter-stat">
                    <span className="stat-label">CAPITAL EFFICIENCY</span>
                    <span className="stat-val stat-gold">+3.4X</span>
                  </div>
                  <div className="meter-divider" />
                  <div className="meter-stat">
                    <span className="stat-label">CAC COMPRESSION</span>
                    <span className="stat-val stat-emerald">-42%</span>
                  </div>
                  <div className="meter-divider" />
                  <div className="meter-stat">
                    <span className="stat-label">CLOSED-LOOP ATTRIBUTION</span>
                    <span className="stat-val stat-cyan">100%</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =========================================================
            BOTTOM EDITORIAL NARRATOR (Concise, Supporting Copy)
            ========================================================= */}
        <div className="narrative-bottom-narrator">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStageIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="narrator-card-content"
            >
              <div className="narrator-header-line">
                <span className="narrator-phase-code">{currentStage.code}</span>
                <span className="narrator-stage-tag">{currentStage.tag}</span>
                <span className="narrator-alert-tag">{currentStage.frictionAlert}</span>
              </div>

              {activeStageIndex < 5 ? (
                <>
                  <h3 className="narrator-main-headline">{currentStage.headline}</h3>
                  <p className="narrator-sub-description">{currentStage.description}</p>
                </>
              ) : (
                /* Stage 06 Final Climax Statement: The Core Reframe */
                <div className="climax-insight-block">
                  <h2 className="climax-giant-statement">
                    <span>{narrative.conclusion.titlePrefix}</span>{' '}
                    <span className="statement-system-highlight">{narrative.conclusion.titleHighlight}</span>
                  </h2>
                  <p className="climax-sub-description">{narrative.conclusion.subtitle}</p>
                  
                  <div className="climax-action-row">
                    <button 
                      type="button" 
                      onClick={() => setIsModalOpen(true)}
                      className="climax-cta-btn"
                    >
                      <span>{narrative.conclusion.cta}</span>
                      <span className="cta-arrow-char">{isRTL ? '←' : '→'}</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Scroll Prompt Micro-Indicator */}
          {activeStageIndex < 5 && (
            <div className="narrator-scroll-hint">
              <span className="scroll-indicator-dot" />
              <span>{narrative.scrollPrompt}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
