import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './TheReveal.css';

// 5 Coexisting System Layer Configurations
const SYSTEM_LAYERS = [
  {
    num: '01',
    code: 'UNDERSTAND',
    titleEn: 'Signal Extraction & Research',
    titleFa: 'استخراج سیگنال و تحقیقات بازار',
    captionEn: 'We find the signal inside the noise.',
    captionFa: 'یافتن سیگنال‌های واقعی در میان انبوه نویز بازار.',
    descEn: 'Deep ICP behavioral mapping, audience dynamics, and unit economics calibration.',
    descFa: 'ترسیم رفتار مخاطبان ایده‌آل، تحلیل بازار و کالیبراسیون داده‌های مالی.',
    img: '/assets/capabilities/strategy.jpg',
    badge: '01 / UNDERSTAND // SIGNAL',
    artifacts: ['AUDIENCE MAP', 'MARKET MATRIX', 'UNIT ECONOMICS'],
    gridArea: 'quad-top-left'
  },
  {
    num: '02',
    code: 'DEFINE',
    titleEn: 'Strategic Positioning Framework',
    titleFa: 'چارچوب جایگاه‌یابی استراتژیک',
    captionEn: 'Research becomes an unfair market advantage.',
    captionFa: 'تبدیل تحقیقات به مزیت رقابتی و جایگاه‌یابی متمایز.',
    descEn: 'High-conviction value proposition and messaging architecture that cuts through noise.',
    descFa: 'معماری ارزش پیشنهادی و هویتی که مستقیماً به هدف می‌نشیند.',
    img: '/assets/capabilities/creative.jpg',
    badge: '02 / DEFINE // STRATEGY',
    artifacts: ['POSITIONING ARCHITECTURE', 'OFFER DESIGN', 'MESSAGING WIREFRAME'],
    gridArea: 'quad-bottom-left'
  },
  {
    num: '03',
    code: 'BUILD',
    titleEn: 'Tangible Digital Execution',
    titleFa: 'ساخت و اجرای ملموس دارایی‌ها',
    captionEn: 'Strategy becomes something people can experience.',
    captionFa: 'تبدیل استراتژی به محصول و تجربه دیجیتال کاربردی.',
    descEn: 'High-converting web platform UI, mobile flows, and campaign creative assets.',
    descFa: 'پلتفرم‌های تعاملی، مسیرهای خرید بدون اصطکاک و دارایی‌های تبلیغاتی پربازده.',
    img: '/assets/work/velox_primary.jpg',
    badge: '03 / BUILD // EXECUTION',
    artifacts: ['WEB APPLICATION UI', '1-TAP CONVERSION FLOW', 'CAMPAIGN ASSETS'],
    gridArea: 'quad-center-right'
  },
  {
    num: '04',
    code: 'LEARN',
    titleEn: 'Closed-Loop Telemetry & CRO Lab',
    titleFa: 'ردیابی سیگنال و آزمایش‌های بهینه‌سازی',
    captionEn: 'Every interaction creates a measurable signal.',
    captionFa: 'هر کلیک و تعامل، داده‌ای برای تصمیم‌گیری بعدی است.',
    descEn: 'Deterministic attribution, A/B conversion heatmaps, and continuous funnel optimization.',
    descFa: 'آزمایش‌های زنده A/B، نقشه‌های حرارتی رفتار کاربر و کاهش مستمر هزینه جذب.',
    img: '/assets/capabilities/experimentation.jpg',
    badge: '04 / LEARN // TELEMETRY',
    artifacts: ['A/B FUNNEL LAB', '+84% WINNING VARIANT', 'BEHAVIORAL HEATMAP'],
    gridArea: 'quad-mid-overlay'
  },
  {
    num: '05',
    code: 'SCALE',
    titleEn: 'Compounding Growth Operating Flywheel',
    titleFa: 'مقیاس‌پذیری و چرخ‌دنده خودکار رشد',
    captionEn: 'When every layer connects, scale becomes inevitable.',
    captionFa: 'با اتصال تمام لایه‌ها، رشد تصاعدی و اجتناب‌ناپذیر می‌شود.',
    descEn: 'Algorithmic capital reallocation, automated growth infrastructure, and compounding scale.',
    descFa: 'تخصیص هوشمند سرمایه به برندگان، زیرساخت خودکار و افزایش تصاعدی ارزش بیزنس.',
    img: '/assets/capabilities/growth_systems.jpg',
    badge: '05 / SCALE // COMPOUNDING',
    artifacts: ['AUTOMATED ENGINE', 'CAPITAL REALLOCATION', '3.4X EFFICIENCY'],
    gridArea: 'quad-core-engine'
  }
];

export default function TheReveal() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const containerRef = useRef(null);

  // Track scroll progress across 500vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Track active stage index (0 to 4) strictly from scroll
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      let idx = 0;
      if (v < 0.20) idx = 0;
      else if (v < 0.40) idx = 1;
      else if (v < 0.60) idx = 2;
      else if (v < 0.80) idx = 3;
      else idx = 4;
      setActiveStageIdx(idx);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Layer 01: UNDERSTAND (Enters 0.00 -> 0.18, stays 1.0)
  const l1Opacity = useTransform(smoothProgress, [0.00, 0.12], [0.35, 1.0]);
  const l1Scale = useTransform(smoothProgress, [0.00, 0.15], [0.92, 1.0]);

  // Layer 02: DEFINE (Enters 0.18 -> 0.35, stays 1.0)
  const l2Opacity = useTransform(smoothProgress, [0.18, 0.30], [0, 1.0]);
  const l2Scale = useTransform(smoothProgress, [0.18, 0.32], [0.88, 1.0]);
  const l2Y = useTransform(smoothProgress, [0.18, 0.32], [40, 0]);

  // Layer 03: BUILD (Enters 0.38 -> 0.55, stays 1.0)
  const l3Opacity = useTransform(smoothProgress, [0.38, 0.50], [0, 1.0]);
  const l3Scale = useTransform(smoothProgress, [0.38, 0.52], [0.88, 1.0]);
  const l3X = useTransform(smoothProgress, [0.38, 0.52], [isRTL ? -40 : 40, 0]);

  // Layer 04: LEARN (Enters 0.58 -> 0.72, stays 1.0)
  const l4Opacity = useTransform(smoothProgress, [0.58, 0.68], [0, 1.0]);
  const l4Scale = useTransform(smoothProgress, [0.58, 0.70], [0.88, 1.0]);
  const l4Y = useTransform(smoothProgress, [0.58, 0.70], [30, 0]);

  // Layer 05: SCALE (Enters 0.76 -> 0.90, stays 1.0)
  const l5Opacity = useTransform(smoothProgress, [0.76, 0.88], [0, 1.0]);
  const l5Scale = useTransform(smoothProgress, [0.76, 0.90], [0.88, 1.0]);

  // Global Conduits Illumination (Grows from 0 to 100%)
  const conduitGlow = useTransform(smoothProgress, [0.20, 0.85], [0.2, 1.0]);

  const activeStage = SYSTEM_LAYERS[activeStageIdx];

  return (
    <section 
      ref={containerRef}
      id="approach"
      className="approach-workspace-section"
      aria-label="Magicency Approach: From Signal to System"
    >
      {/* Sticky Pinned Viewport */}
      <div className="approach-sticky-viewport">
        {/* Background Atmospheric Layers */}
        <div className="approach-ambient-flare" aria-hidden="true" />
        <div className="approach-grid-mesh" aria-hidden="true" />

        {/* =========================================================
            1. TOP HEADER & PIPELINE STATUS BAR
            ========================================================= */}
        <div className="approach-header-bar">
          <div className="approach-eyebrow-pill">
            <span className="pill-dot">✦</span>
            <span>{isRTL ? 'متدولوژی مجیکنسـی // از سیگنال تا سیستم' : 'APPROACH // FROM SIGNAL TO SYSTEM'}</span>
          </div>

          {/* Sequential 5-Stage Status Tracker */}
          <div className="approach-pipeline-track">
            {SYSTEM_LAYERS.map((st, idx) => {
              const isActive = activeStageIdx === idx;
              const isUnlocked = activeStageIdx >= idx;
              return (
                <div 
                  key={st.num} 
                  className={`pipeline-step-node ${isActive ? 'is-active' : ''} ${isUnlocked ? 'is-unlocked' : ''}`}
                >
                  <span className="step-num">{st.num}</span>
                  <span className="step-name">{st.code}</span>
                  {idx < 4 && <span className="step-divider">{isRTL ? '←' : '→'}</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            2. THE UNIFIED OPERATING WORKSPACE CANVAS
            A single connected spatial surface where layers accumulate
            ========================================================= */}
        <div className="approach-workspace-canvas">
          {/* Spatial Vector Conduits Linking Layers */}
          <svg className="workspace-conduit-svg" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
            <motion.path 
              d="M 240 180 L 240 380 L 580 300 L 760 420 L 500 300"
              stroke="#FF5500" 
              strokeWidth="2" 
              strokeDasharray="6 6"
              style={{ opacity: conduitGlow }}
            />
            {activeStageIdx >= 1 && (
              <line x1="240" y1="220" x2="240" y2="340" stroke="#FF5500" strokeWidth="2.5" />
            )}
            {activeStageIdx >= 2 && (
              <line x1="380" y1="200" x2="550" y2="280" stroke="#FF5500" strokeWidth="2.5" />
            )}
            {activeStageIdx >= 3 && (
              <line x1="550" y1="360" x2="720" y2="380" stroke="#00F59B" strokeWidth="2.5" />
            )}
            {activeStageIdx >= 4 && (
              <circle cx="500" cy="300" r="80" stroke="#FF5500" strokeWidth="2" strokeDasharray="8 4" className="core-flywheel-ring" />
            )}
          </svg>

          {/* LAYER 01: UNDERSTAND (Top Left Quadrant) */}
          <motion.div 
            className="workspace-layer-artifact layer-01-understand"
            style={{ opacity: l1Opacity, scale: l1Scale }}
          >
            <div className="artifact-media-frame">
              <img 
                src={SYSTEM_LAYERS[0].img} 
                alt="Magicency Audience Research & Market Signals Intelligence Dossier" 
                className="artifact-img" 
                loading="lazy" 
              />
              <div className="artifact-glass-vignette" />
              <div className="artifact-meta-pill">
                <span className="status-ping-dot" style={{ backgroundColor: '#FF8833' }} />
                <span>{SYSTEM_LAYERS[0].badge}</span>
              </div>
            </div>
            <div className="artifact-micro-chips">
              {SYSTEM_LAYERS[0].artifacts.map((a, i) => (
                <span key={i} className="micro-chip">{a}</span>
              ))}
            </div>
          </motion.div>

          {/* LAYER 02: DEFINE (Bottom Left Quadrant) */}
          <motion.div 
            className="workspace-layer-artifact layer-02-define"
            style={{ opacity: l2Opacity, scale: l2Scale, y: l2Y }}
          >
            <div className="artifact-media-frame">
              <img 
                src={SYSTEM_LAYERS[1].img} 
                alt="Magicency Strategic Positioning Framework & Messaging Architecture" 
                className="artifact-img" 
                loading="lazy" 
              />
              <div className="artifact-glass-vignette" />
              <div className="artifact-meta-pill">
                <span className="status-ping-dot" style={{ backgroundColor: '#FF5500' }} />
                <span>{SYSTEM_LAYERS[1].badge}</span>
              </div>
            </div>
            <div className="artifact-micro-chips">
              {SYSTEM_LAYERS[1].artifacts.map((a, i) => (
                <span key={i} className="micro-chip">{a}</span>
              ))}
            </div>
          </motion.div>

          {/* LAYER 03: BUILD (Center-Right Hero Deliverable) */}
          <motion.div 
            className="workspace-layer-artifact layer-03-build"
            style={{ opacity: l3Opacity, scale: l3Scale, x: l3X }}
          >
            <div className="artifact-media-frame hero-frame">
              <img 
                src={SYSTEM_LAYERS[2].img} 
                alt="Magicency Tangible Digital Execution Web Platform & Mobile Flow" 
                className="artifact-img" 
                loading="lazy" 
              />
              <div className="artifact-glass-vignette" />
              <div className="artifact-meta-pill dominant-pill">
                <span className="status-ping-dot" style={{ backgroundColor: '#00F59B' }} />
                <span>{SYSTEM_LAYERS[2].badge}</span>
              </div>
              <div className="hero-execution-badge">
                <span>TANGIBLE EXECUTION DELIVERABLE</span>
              </div>
            </div>
            <div className="artifact-micro-chips">
              {SYSTEM_LAYERS[2].artifacts.map((a, i) => (
                <span key={i} className="micro-chip">{a}</span>
              ))}
            </div>
          </motion.div>

          {/* LAYER 04: LEARN (Overlapping Mid-Right / Telemetry Stream) */}
          <motion.div 
            className="workspace-layer-artifact layer-04-learn"
            style={{ opacity: l4Opacity, scale: l4Scale, y: l4Y }}
          >
            <div className="artifact-media-frame">
              <img 
                src={SYSTEM_LAYERS[3].img} 
                alt="Magicency Conversion Rate Optimization Lab & Multi-Touch Attribution" 
                className="artifact-img" 
                loading="lazy" 
              />
              <div className="artifact-glass-vignette" />
              <div className="artifact-meta-pill">
                <span className="status-ping-dot" style={{ backgroundColor: '#00F59B' }} />
                <span>{SYSTEM_LAYERS[3].badge}</span>
              </div>
            </div>
            <div className="artifact-micro-chips">
              {SYSTEM_LAYERS[3].artifacts.map((a, i) => (
                <span key={i} className="micro-chip highlight-chip">{a}</span>
              ))}
            </div>
          </motion.div>

          {/* LAYER 05: SCALE (Center Compounding Flywheel Node) */}
          <motion.div 
            className="workspace-layer-artifact layer-05-scale"
            style={{ opacity: l5Opacity, scale: l5Scale }}
          >
            <div className="artifact-media-frame core-frame">
              <img 
                src={SYSTEM_LAYERS[4].img} 
                alt="Magicency Automated Growth Infrastructure & Compounding Capital Flywheel" 
                className="artifact-img" 
                loading="lazy" 
              />
              <div className="artifact-glass-vignette" />
              <div className="artifact-meta-pill scale-pill">
                <span className="status-ping-dot" style={{ backgroundColor: '#FF8833' }} />
                <span>{SYSTEM_LAYERS[4].badge}</span>
              </div>
            </div>
            <div className="artifact-micro-chips">
              {SYSTEM_LAYERS[4].artifacts.map((a, i) => (
                <span key={i} className="micro-chip scale-chip">{a}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            3. DYNAMIC BOTTOM ORIENTATION BAR
            Minimal typography that explains current stage while canvas proves it
            ========================================================= */}
        <div className="approach-bottom-dock">
          <div className="dock-statement-deck">
            <div className="dock-stage-tag">
              <span className="stage-code">{activeStage.num} / {activeStage.code}</span>
              <span className="stage-title">{isRTL ? activeStage.titleFa : activeStage.titleEn}</span>
            </div>
            <h3 className="dock-caption-text">
              «{isRTL ? activeStage.captionFa : activeStage.captionEn}»
            </h3>
            <p className="dock-desc-text">
              {isRTL ? activeStage.descFa : activeStage.descEn}
            </p>
          </div>

          <div className="dock-cta-action">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(true)}
              className="approach-cta-btn"
            >
              <span>{isRTL ? 'تجربه معماری یکپارچه رشد' : 'Experience The Architecture'}</span>
              <span className="btn-arrow-icon">{isRTL ? '←' : '→'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
