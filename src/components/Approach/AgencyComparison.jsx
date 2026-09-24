import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function AgencyComparison() {
  const { t, isRTL } = useLanguage();
  const comparison = t.approach?.comparison || {};

  return (
    <section className="approach-section visual-shift-section" id="the-shift">
      <div className="container">
        
        {/* Section Header — Exact Text Kept Intact */}
        <div className="section-editorial-header">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{comparison.eyebrow}</span>
          </div>

          <motion.h2
            className="section-editorial-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {comparison.headline}
          </motion.h2>

          <motion.p
            className="section-editorial-lead"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {comparison.lead}
          </motion.p>
        </div>

        {/* HIGH-END ARCHITECTURAL CONTRAST COMPOSITION */}
        <div className="shift-contrast-grid">
          
          {/* LEFT: TRADITIONAL / FRAGMENTED SLABS (Activity without integration) */}
          <motion.div
            className="contrast-panel fragmented-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="panel-architectural-stage" aria-label="Fragmented Silo Model">
              <svg viewBox="0 0 440 280" fill="none" className="architectural-contrast-svg">
                <defs>
                  <linearGradient id="fragSlabGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#07101C" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#050505" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="fragSlabGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#07101C" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#050505" stopOpacity="0.75" />
                  </linearGradient>
                  <filter id="fragDropShadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.75" />
                  </filter>
                </defs>

                {/* Broken spatial datum lines */}
                <g opacity="0.12" stroke="#8B93A7" strokeWidth="0.8">
                  <line x1="40" y1="50" x2="160" y2="50" strokeDasharray="6 8" />
                  <line x1="260" y1="210" x2="400" y2="210" strokeDasharray="6 8" />
                  <line x1="80" y1="20" x2="80" y2="120" strokeDasharray="6 8" />
                  <line x1="360" y1="140" x2="360" y2="260" strokeDasharray="6 8" />
                </g>

                {/* Fragment 01: Disconnected Ads Slab (Tilted top-left) */}
                <g className="frag-slab frag-slab-1" filter="url(#fragDropShadow)">
                  <polygon points="36,42 172,26 186,82 50,98" fill="url(#fragSlabGrad1)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                  <polygon points="36,42 50,98 44,102 30,46" fill="#050505" opacity="0.8" />
                  <line x1="50" y1="64" x2="146" y2="54" stroke="#8B93A7" strokeWidth="0.8" opacity="0.4" />
                  <text x="52" y="56" fill="#8B93A7" fontSize="8.5" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="700" letterSpacing="0.12em">01 / MEDIA ISOLATION</text>
                  <text x="52" y="80" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">PAID CHANNELS</text>
                </g>

                {/* Fragment 02: Offset Creative Slab (Floating top-right with void gap) */}
                <g className="frag-slab frag-slab-2" filter="url(#fragDropShadow)">
                  <polygon points="248,36 394,48 376,108 230,96" fill="url(#fragSlabGrad2)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                  <polygon points="230,96 376,108 370,116 224,104" fill="#050505" />
                  <text x="246" y="66" fill="#8B93A7" fontSize="8.5" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="700" letterSpacing="0.12em">02 / UNCONNECTED ASSETS</text>
                  <text x="246" y="88" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">CREATIVE ASSETS</text>
                </g>

                {/* Fragment 03: Sunken Web Conversion Platform (Bottom-left dead-end) */}
                <g className="frag-slab frag-slab-3" filter="url(#fragDropShadow)">
                  <polygon points="56,152 206,144 194,216 44,224" fill="url(#fragSlabGrad1)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                  <polygon points="44,224 194,216 188,226 38,234" fill="#050505" />
                  <text x="64" y="178" fill="#8B93A7" fontSize="8.5" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="700" letterSpacing="0.12em">03 / BLIND FUNNEL</text>
                  <text x="64" y="200" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">LANDING PAGES</text>
                </g>

                {/* Fragment 04: Segregated Data Block (Far bottom-right) */}
                <g className="frag-slab frag-slab-4" filter="url(#fragDropShadow)">
                  <polygon points="262,164 398,154 410,226 274,236" fill="url(#fragSlabGrad2)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                  <polygon points="274,236 410,226 404,234 268,244" fill="#050505" opacity="0.9" />
                  <text x="282" y="190" fill="#8B93A7" fontSize="8.5" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="700" letterSpacing="0.12em">04 / LAGGING REPORTS</text>
                  <text x="282" y="212" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">ANALYTICS SILO</text>
                </g>

                {/* Central Void / Separation Tension Marker */}
                <g opacity="0.4">
                  <line x1="206" y1="112" x2="224" y2="140" stroke="#8B93A7" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="188" y1="130" x2="244" y2="122" stroke="#8B93A7" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="216" y="132" fill="#8B93A7" fontSize="8.5" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="700" letterSpacing="0.16em" textAnchor="middle">VOID / UNINTEGRATED</text>
                </g>
              </svg>
            </div>

            <div className="panel-content-body">
              <span className="panel-badge badge-muted">
                {isRTL ? 'مدل پراکنده // اجرای جزیره‌ای' : 'CONVENTIONAL MODEL // FRAGMENTED SILOS'}
              </span>
              <h3 className="panel-headline">
                {isRTL ? 'اقدامات پراکنده بدون سیستم یکپارچه تصمیم‌گیری' : 'Disconnected Execution Without Unified Strategy'}
              </h3>
              <ul className="contrast-points-list">
                <li>
                  <span className="point-cross">✕</span>
                  <span>{isRTL ? 'مدیریت کانال‌های تبلیغاتی بدون محاسبه اقتصاد واحد' : 'Media spend isolated from underlying unit economics'}</span>
                </li>
                <li>
                  <span className="point-cross">✕</span>
                  <span>{isRTL ? 'تمرکز بر معیارهای سطحی و ترافیک غیرهدفمند' : 'Vanity metrics reported after budgets are already lost'}</span>
                </li>
                <li>
                  <span className="point-cross">✕</span>
                  <span>{isRTL ? 'ریست شدن پیشرفت با هر تغییر کمپین' : 'Efforts reset each month with rising acquisition costs'}</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT: MAGICENCY / CONTINUOUS MONOLITH (One system, many functions) */}
          <motion.div
            className="contrast-panel connected-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="panel-architectural-stage" aria-label="Magicency Connected Growth Architecture">
              <svg viewBox="0 0 440 280" fill="none" className="architectural-contrast-svg">
                <defs>
                  <linearGradient id="monoBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#07101C" />
                    <stop offset="60%" stopColor="#07101C" />
                    <stop offset="100%" stopColor="#050505" />
                  </linearGradient>
                  <linearGradient id="conduitGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#DD0060" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#DD0060" stopOpacity="1" />
                    <stop offset="100%" stopColor="#DD0060" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="monolithShadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#000000" floodOpacity="0.85" />
                  </filter>
                  <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Singular Continuous Monolithic Architectural Form */}
                <g className="connected-monolith-body" filter="url(#monolithShadow)">
                  
                  {/* Base Monolithic Plinth (Unifying Floor) */}
                  <polygon points="44,236 396,236 372,216 68,216" fill="#07101C" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                  <polygon points="44,236 396,236 396,244 44,244" fill="#050505" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

                  {/* Terraced Tier 01: Foundation Strategy & Unit Economics */}
                  <polygon points="68,216 372,216 352,168 88,168" fill="url(#monoBaseGrad)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                  <polygon points="68,216 88,168 88,172 68,220" fill="#050505" />
                  
                  {/* Terraced Tier 02: Interlocking Experience & Acquisition Body */}
                  <polygon points="88,168 352,168 332,118 108,118" fill="url(#monoBaseGrad)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                  <polygon points="88,168 108,118 108,122 88,172" fill="#050505" />

                  {/* Terraced Tier 03: Telemetry & Synthesis Platform */}
                  <polygon points="108,118 332,118 312,68 128,68" fill="url(#monoBaseGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <polygon points="108,118 128,68 128,72 108,122" fill="#050505" />

                  {/* Terraced Tier 04: The Monolithic Summit (Compounding Scale) */}
                  <polygon points="128,68 312,68 288,32 152,32" fill="#07101C" stroke="#DD0060" strokeWidth="1.4" />

                  {/* Summit Engraving */}
                  <text x="220" y="48" fill="#FFFFFF" fontSize="9.5" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="800" letterSpacing="0.14em" textAnchor="middle">05 // COMPOUNDING SCALE</text>
                  
                  {/* Tier 3 Engraving */}
                  <text x="140" y="88" fill="#8B93A7" fontSize="8" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="700" letterSpacing="0.1em">04 // TELEMETRY &amp; OPTIMIZATION</text>
                  <text x="140" y="104" fill="#FFFFFF" fontSize="10.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">DETERMINISTIC SIGNALS</text>

                  {/* Tier 2 Engraving */}
                  <text x="120" y="138" fill="#8B93A7" fontSize="8" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="700" letterSpacing="0.1em">03 // SYNCHRONIZED ACQUISITION &amp; EXPERIENCE</text>
                  <text x="120" y="154" fill="#FFFFFF" fontSize="10.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">HIGH-CONVICTION CONVERSION</text>

                  {/* Tier 1 Engraving */}
                  <text x="100" y="188" fill="#8B93A7" fontSize="8" fontFamily="'Plus Jakarta Sans', monospace" fontWeight="700" letterSpacing="0.1em">01 / 02 // INPUT &amp; STRATEGIC INTENT</text>
                  <text x="100" y="204" fill="#FFFFFF" fontSize="10.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">COMMERCIAL UNIT ECONOMICS</text>

                  {/* UNBROKEN CONTINUOUS REGISTRATION SPINE */}
                  <line x1="220" y1="32" x2="220" y2="236" stroke="url(#conduitGlow)" strokeWidth="2.2" filter="url(#laserGlow)" className="monolith-spine-laser" />
                  
                  {/* Interlocking Horizontal Registration Accents */}
                  <line x1="152" y1="32" x2="288" y2="32" stroke="#DD0060" strokeWidth="1.5" />
                  <line x1="210" y1="68" x2="230" y2="68" stroke="#FFFFFF" strokeWidth="1" />
                  <line x1="205" y1="118" x2="235" y2="118" stroke="#FFFFFF" strokeWidth="1" />
                  <line x1="200" y1="168" x2="240" y2="168" stroke="#FFFFFF" strokeWidth="1" />
                  <line x1="195" y1="216" x2="245" y2="216" stroke="#FFFFFF" strokeWidth="1" />
                </g>
              </svg>
            </div>

            <div className="panel-content-body">
              <span className="panel-badge badge-accent">
                {isRTL ? 'معماری رشد // سیستم یکپارچه مجیکنسـی' : 'MAGICENCY // CONNECTED GROWTH ARCHITECTURE'}
              </span>
              <h3 className="panel-headline highlight-text">
                {isRTL ? 'یک ساختار معماری واحد با یادگیری و مقیاس‌پذیری تصاعدی' : 'One Continuous Monolith With Compounding Scale'}
              </h3>
              <ul className="contrast-points-list">
                <li>
                  <span className="point-check">✓</span>
                  <span>{isRTL ? 'پیوند مستقیم اقتصاد تجاری، تجربه وب و جذب مخاطب' : 'Strategy, creative, acquisition and web unified as one engine'}</span>
                </li>
                <li>
                  <span className="point-check">✓</span>
                  <span>{isRTL ? 'تله‌متری سمت سرور هدایت‌کننده تصمیم‌های بعدی بودجه' : 'Server-side telemetry immediately reallocating growth capital'}</span>
                </li>
                <li>
                  <span className="point-check">✓</span>
                  <span>{isRTL ? 'هر چرخه ارزش دائمی و بازدهی بالاتری خلق می‌کند' : 'Every experiment builds compounding institutional momentum'}</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
