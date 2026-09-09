import React from 'react';
import { motion } from 'framer-motion';

// ViewBox Desktop: 900 x 520, Center: 450, 260
// ViewBox Mobile: 380 x 400, Center: 190, 200
// Stage 0: 01 The Problem — 5 Disconnected Silos
// Stage 1: 02 The Insight — Magnetic Convergence
// Stage 2: 03 The System — Synchronized Pipeline (LTR: 01 -> 05, RTL: 01 -> 05 right-to-left; Mobile: 01 -> 05 Top-to-Bottom)
// Stage 3: 04 The Outcome — Compounding Flywheel (Closed-loop pentagonal ring)

const STAGE_COORDS_LTR = {
  strategy: [
    { x: 130, y: 95 },  // 0: Top-Left
    { x: 335, y: 120 }, // 1: Converging Top-Left
    { x: 80, y: 260 },  // 2: Pipeline Step 1
    { x: 450, y: 65 }   // 3: Flywheel Top (12 o'clock)
  ],
  creative: [
    { x: 770, y: 95 },  // 0: Top-Right
    { x: 565, y: 120 }, // 1: Converging Top-Right
    { x: 265, y: 260 }, // 2: Pipeline Step 2
    { x: 635, y: 200 }  // 3: Flywheel Top-Right
  ],
  digital: [
    { x: 120, y: 415 }, // 0: Bottom-Left
    { x: 280, y: 390 }, // 1: Converging Bottom-Left
    { x: 450, y: 260 }, // 2: Pipeline Step 3 (Center)
    { x: 565, y: 418 }  // 3: Flywheel Bottom-Right
  ],
  acquisition: [
    { x: 780, y: 415 }, // 0: Bottom-Right
    { x: 620, y: 390 }, // 1: Converging Bottom-Right
    { x: 635, y: 260 }, // 2: Pipeline Step 4
    { x: 335, y: 418 }  // 3: Flywheel Bottom-Left
  ],
  measurement: [
    { x: 450, y: 460 }, // 0: Bottom-Center
    { x: 450, y: 440 }, // 1: Converging Bottom
    { x: 820, y: 260 }, // 2: Pipeline Step 5
    { x: 265, y: 200 }  // 3: Flywheel Top-Left
  ]
};

// RTL Version: Pipeline flows naturally from Right to Left (01 on far right -> 05 on far left)
const STAGE_COORDS_RTL = {
  strategy: [
    { x: 770, y: 95 },  // 0: Top-Right
    { x: 565, y: 120 }, // 1: Converging Top-Right
    { x: 820, y: 260 }, // 2: Pipeline Step 1 (Rightmost)
    { x: 450, y: 65 }   // 3: Flywheel Top
  ],
  creative: [
    { x: 130, y: 95 },  // 0: Top-Left
    { x: 335, y: 120 }, // 1: Converging Top-Left
    { x: 635, y: 260 }, // 2: Pipeline Step 2
    { x: 635, y: 200 }  // 3: Flywheel Top-Right
  ],
  digital: [
    { x: 780, y: 415 }, // 0: Bottom-Right
    { x: 620, y: 390 }, // 1: Converging Bottom-Right
    { x: 450, y: 260 }, // 2: Pipeline Step 3 (Center)
    { x: 565, y: 418 }  // 3: Flywheel Bottom-Right
  ],
  acquisition: [
    { x: 120, y: 415 }, // 0: Bottom-Left
    { x: 280, y: 390 }, // 1: Converging Bottom-Left
    { x: 265, y: 260 }, // 2: Pipeline Step 4
    { x: 335, y: 418 }  // 3: Flywheel Bottom-Left
  ],
  measurement: [
    { x: 450, y: 460 }, // 0: Bottom-Center
    { x: 450, y: 440 }, // 1: Converging Bottom
    { x: 80, y: 260 },  // 2: Pipeline Step 5 (Leftmost)
    { x: 265, y: 200 }  // 3: Flywheel Top-Left
  ]
};

// Dedicated Mobile Coordinates (viewBox: 380 x 400)
// Zero overlap, vertical pipeline in Stage 2, spacious radial layouts in Stage 1 & 3
const STAGE_COORDS_MOBILE_RTL = {
  strategy: [
    { x: 275, y: 68 },  // 0: Silo Top-Right
    { x: 270, y: 72 },  // 1: Converging Top-Right
    { x: 190, y: 44 },  // 2: Pipeline Step 1 (Top)
    { x: 190, y: 65 }   // 3: Flywheel Top (12 o'clock)
  ],
  creative: [
    { x: 105, y: 68 },  // 0: Silo Top-Left
    { x: 110, y: 72 },  // 1: Converging Top-Left
    { x: 190, y: 118 }, // 2: Pipeline Step 2
    { x: 315, y: 155 }  // 3: Flywheel Top-Right
  ],
  digital: [
    { x: 280, y: 220 }, // 0: Silo Middle-Right
    { x: 285, y: 295 }, // 1: Converging Bottom-Right
    { x: 190, y: 192 }, // 2: Pipeline Step 3 (Center)
    { x: 270, y: 310 }  // 3: Flywheel Bottom-Right
  ],
  acquisition: [
    { x: 100, y: 220 }, // 0: Silo Middle-Left
    { x: 95, y: 295 },  // 1: Converging Bottom-Left
    { x: 190, y: 266 }, // 2: Pipeline Step 4
    { x: 110, y: 310 }  // 3: Flywheel Bottom-Left
  ],
  measurement: [
    { x: 190, y: 345 }, // 0: Silo Bottom-Center
    { x: 190, y: 360 }, // 1: Converging Bottom
    { x: 190, y: 340 }, // 2: Pipeline Step 5 (Bottom)
    { x: 65, y: 155 }   // 3: Flywheel Top-Left
  ]
};

const STAGE_COORDS_MOBILE_LTR = {
  strategy: [
    { x: 105, y: 68 },  // 0: Silo Top-Left
    { x: 110, y: 72 },  // 1: Converging Top-Left
    { x: 190, y: 44 },  // 2: Pipeline Step 1 (Top)
    { x: 190, y: 65 }   // 3: Flywheel Top
  ],
  creative: [
    { x: 275, y: 68 },  // 0: Silo Top-Right
    { x: 270, y: 72 },  // 1: Converging Top-Right
    { x: 190, y: 118 }, // 2: Pipeline Step 2
    { x: 315, y: 155 }  // 3: Flywheel Top-Right
  ],
  digital: [
    { x: 100, y: 220 }, // 0: Silo Middle-Left
    { x: 95, y: 295 },  // 1: Converging Bottom-Left
    { x: 190, y: 192 }, // 2: Pipeline Step 3 (Center)
    { x: 270, y: 310 }  // 3: Flywheel Bottom-Right
  ],
  acquisition: [
    { x: 280, y: 220 }, // 0: Silo Middle-Right
    { x: 285, y: 295 }, // 1: Converging Bottom-Right
    { x: 190, y: 266 }, // 2: Pipeline Step 4
    { x: 110, y: 310 }  // 3: Flywheel Bottom-Left
  ],
  measurement: [
    { x: 190, y: 345 }, // 0: Silo Bottom-Center
    { x: 190, y: 360 }, // 1: Converging Bottom
    { x: 190, y: 340 }, // 2: Pipeline Step 5 (Bottom)
    { x: 65, y: 155 }   // 3: Flywheel Top-Left
  ]
};

export default function ProblemInsightVisual({ 
  activeBeat = 0, 
  isRTL = false,
  nodesData = []
}) {
  const currentStage = Math.max(0, Math.min(3, activeBeat));
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const coordsMap = isMobile
    ? (isRTL ? STAGE_COORDS_MOBILE_RTL : STAGE_COORDS_MOBILE_LTR)
    : (isRTL ? STAGE_COORDS_RTL : STAGE_COORDS_LTR);

  const vbW = isMobile ? 380 : 900;
  const vbH = isMobile ? 400 : 520;
  const centerX = isMobile ? 190 : 450;
  const centerY = isMobile ? (currentStage === 1 ? 190 : 200) : 260;

  const fallbackNodes = [
    { id: 'strategy', num: isRTL ? '۰۱' : '01', label: isRTL ? 'استراتژی' : 'STRATEGY', sub: isRTL ? 'جهت‌گیری' : 'DIRECTION' },
    { id: 'creative', num: isRTL ? '۰۲' : '02', label: isRTL ? 'خلاقیت' : 'CREATIVE', sub: isRTL ? 'تمایز' : 'ATTENTION' },
    { id: 'digital', num: isRTL ? '۰۳' : '03', label: isRTL ? 'دیجیتال' : 'DIGITAL', sub: isRTL ? 'تبدیل' : 'CONVERSION' },
    { id: 'acquisition', num: isRTL ? '۰۴' : '04', label: isRTL ? 'جذب مخاطب' : 'ACQUISITION', sub: isRTL ? 'ترافیک' : 'SCALE' },
    { id: 'measurement', num: isRTL ? '۰۵' : '05', label: isRTL ? 'سنجش داده' : 'MEASUREMENT', sub: isRTL ? 'اتریبیوشن' : 'FEEDBACK' }
  ];

  const nodes = nodesData && nodesData.length ? nodesData : fallbackNodes;

  // Pipeline bridges between cards in Stage 2
  // Desktop: Horizontal
  const pipelineBridgesLTR = [
    { fromX: 142, toX: 203, midX: 172.5 },
    { fromX: 327, toX: 388, midX: 357.5 },
    { fromX: 512, toX: 573, midX: 542.5 },
    { fromX: 697, toX: 758, midX: 727.5 }
  ];

  const pipelineBridgesRTL = [
    { fromX: 758, toX: 697, midX: 727.5 },
    { fromX: 573, toX: 512, midX: 542.5 },
    { fromX: 388, toX: 327, midX: 357.5 },
    { fromX: 203, toX: 142, midX: 172.5 }
  ];

  // Mobile: Vertical Top-to-Bottom Flow
  const pipelineBridgesMobile = [
    { fromY: 62, toY: 100, midY: 81 },
    { fromY: 136, toY: 174, midY: 155 },
    { fromY: 210, toY: 248, midY: 229 },
    { fromY: 284, toY: 322, midY: 303 }
  ];

  const pipelineBridges = isRTL ? pipelineBridgesRTL : pipelineBridgesLTR;

  return (
    <div className={`pi-visual-container ${isRTL ? 'rtl-mode' : 'ltr-mode'}`} aria-hidden="true">
      {/* Atmospheric Radial Aura Glow */}
      <div 
        className={`pi-visual-aura stage-${currentStage}`} 
        style={{
          opacity: currentStage === 3 ? 0.95 : currentStage === 2 ? 0.65 : currentStage === 1 ? 0.45 : 0.25
        }}
      />

      {/* =========================================================
          SVG BACKDROP LAYER: GRIDS, CIRCUITS, CONVERGENCE & FLYWHEEL
          ========================================================= */}
      <svg 
        className="pi-visual-svg" 
        viewBox={isMobile ? "0 0 380 400" : "0 0 900 520"} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Glow Gradients */}
          <radialGradient id="piCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF5500" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#FF6600" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="piFlywheelCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#FF7722" stopOpacity="0.65" />
            <stop offset="65%" stopColor="#FF4400" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FF4400" stopOpacity="0" />
          </radialGradient>

          {/* Pipeline Bus Gradient */}
          <linearGradient id="piPipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF4400" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FF8833" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFAA44" stopOpacity="0.6" />
          </linearGradient>

          <filter id="piGlowNeon" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Grid Calibration Layer */}
        <g className="pi-grid-layer" opacity={0.35}>
          {isMobile ? (
            <>
              <circle cx="190" cy="200" r="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="190" cy="200" r="100" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              <circle cx="190" cy="200" r="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="190" y1="20" x2="190" y2="380" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8" />
              <line x1="20" y1="200" x2="360" y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8" />
            </>
          ) : (
            <>
              <circle cx="450" cy="260" r="230" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="450" cy="260" r="160" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              <circle cx="450" cy="260" r="70" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="450" y1="30" x2="450" y2="490" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8" />
              <line x1="30" y1="260" x2="870" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8" />
            </>
          )}
        </g>

        {/* =========================================================
            STAGE 0: THE PROBLEM — 5 DISCONNECTED SILO FRAMES
            ========================================================= */}
        {currentStage === 0 && (
          <g className="pi-entropy-layer">
            {nodes.map((node) => {
              const coord = coordsMap[node.id][0];
              const boxW = isMobile ? 116 : 140;
              const boxH = isMobile ? 38 : 56;
              return (
                <g key={`silo-frame-${node.id}`}>
                  {/* Dashed Silo Warning Boundary */}
                  <rect 
                    x={coord.x - boxW / 2} 
                    y={coord.y - boxH / 2} 
                    width={boxW} 
                    height={boxH} 
                    rx={isMobile ? "8" : "12"} 
                    fill="rgba(255, 60, 0, 0.04)" 
                    stroke="rgba(255, 85, 0, 0.35)" 
                    strokeWidth="1.2" 
                    strokeDasharray="4 4" 
                  />
                </g>
              );
            })}

            {/* Severed energy leakage traces */}
            {isMobile ? (
              <path 
                d="M 160 68 L 220 68 M 150 220 L 230 220 M 190 250 L 190 310" 
                stroke="rgba(255, 60, 0, 0.4)" 
                strokeWidth="1.5" 
                strokeDasharray="3 5"
              />
            ) : (
              <path 
                d="M 205 95 L 305 75 M 695 95 L 600 75 M 195 415 L 290 435 M 705 415 L 615 435" 
                stroke="rgba(255, 60, 0, 0.4)" 
                strokeWidth="1.5" 
                strokeDasharray="3 5"
              />
            )}

            {/* Central Broken Feedback Indicator */}
            <text 
              x={centerX} 
              y={isMobile ? 142 : 248} 
              textAnchor="middle" 
              fill="#FF5500" 
              fontSize={isMobile ? "10" : "12"} 
              fontWeight="700" 
              fontFamily="var(--font-mono)" 
              letterSpacing={isMobile ? "0.06em" : "0.12em"}
            >
              ✕ {isRTL ? 'عدم همگام‌سازی و اتلاف انرژی' : 'ZERO INTERCONNECTION // LEAKING VALUE'}
            </text>
            <text 
              x={centerX} 
              y={isMobile ? 158 : 272} 
              textAnchor="middle" 
              fill="#7F8492" 
              fontSize={isMobile ? "8" : "9.5"} 
              fontFamily="var(--font-mono)" 
              letterSpacing="0.06em"
            >
              {isRTL ? 'فعالیت‌های پراکنده به رشد تبدیل نمی‌شوند' : 'ISOLATED ACTIONS DO NOT COMPOUND'}
            </text>
          </g>
        )}

        {/* =========================================================
            STAGE 1: THE INSIGHT — MAGNETIC CONVERGENCE VECTORS
            ========================================================= */}
        {currentStage === 1 && (
          <g className="pi-convergence-layer">
            {/* Center Gravitational Singularity at (centerX, centerY) */}
            <circle cx={centerX} cy={centerY} r={isMobile ? 45 : 65} fill="url(#piCoreGlow)" />
            <circle cx={centerX} cy={centerY} r={isMobile ? 14 : 18} fill="rgba(255, 85, 0, 0.25)" />
            <circle cx={centerX} cy={centerY} r={isMobile ? 6 : 8} fill="#FF7722" filter="url(#piGlowNeon)" />

            {/* Inward Vector Alignment Conduits */}
            {nodes.map((node) => {
              const coord = coordsMap[node.id][1];
              return (
                <g key={`pull-${node.id}`}>
                  <motion.line
                    x1={coord.x}
                    y1={coord.y}
                    x2={centerX}
                    y2={centerY}
                    stroke="rgba(255, 120, 40, 0.55)"
                    strokeWidth="1.8"
                    strokeDasharray="4 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                  />
                  {/* Energy dot on conduit */}
                  <circle 
                    cx={(coord.x + centerX) / 2} 
                    cy={(coord.y + centerY) / 2} 
                    r={isMobile ? "2.5" : "3.5"} 
                    fill="#FFAA33" 
                  />
                </g>
              );
            })}
          </g>
        )}

        {/* =========================================================
            STAGE 2: THE SYSTEM — SYNCHRONIZED END-TO-END PIPELINE
            ========================================================= */}
        {currentStage === 2 && (
          <g className="pi-pipeline-layer">
            {isMobile ? (
              // Mobile: Vertical Top-to-Bottom Pipeline Bridges
              pipelineBridgesMobile.map((bridge, idx) => (
                <g key={`pipe-bridge-mob-${idx}`}>
                  <circle cx="190" cy={bridge.fromY} r="2" fill="#FF7722" />
                  <circle cx="190" cy={bridge.toY} r="2" fill="#FF7722" />
                  <line
                    x1="190"
                    y1={bridge.fromY}
                    x2="190"
                    y2={bridge.toY}
                    stroke="rgba(255, 120, 40, 0.45)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Downward traveling photon */}
                  <circle cx="190" r="3" fill="#FFFFFF" filter="url(#piGlowNeon)">
                    <animate 
                      attributeName="cy" 
                      values={`${bridge.fromY};${bridge.toY}`} 
                      dur="0.85s" 
                      begin={`${idx * 0.2}s`}
                      repeatCount="indefinite" 
                    />
                  </circle>
                  {/* Downward pointing double chevron ⬇ */}
                  <g transform={`translate(190, ${bridge.midY})`}>
                    <path
                      d="M -6 -3 L 0 3 L 6 -3"
                      fill="none"
                      stroke="#FF6600"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M -6 -7 L 0 -1 L 6 -7"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              ))
            ) : (
              // Desktop: Horizontal Left-to-Right or Right-to-Left Bridges
              pipelineBridges.map((bridge, idx) => (
                <g key={`pipe-bridge-dt-${idx}`}>
                  <circle cx={bridge.fromX} cy="260" r="2.5" fill="#FF7722" />
                  <circle cx={bridge.toX} cy="260" r="2.5" fill="#FF7722" />
                  <line
                    x1={bridge.fromX}
                    y1="260"
                    x2={bridge.toX}
                    y2="260"
                    stroke="rgba(255, 120, 40, 0.4)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cy="260" r="3.5" fill="#FFFFFF" filter="url(#piGlowNeon)">
                    <animate 
                      attributeName="cx" 
                      values={`${bridge.fromX};${bridge.toX}`} 
                      dur="1.1s" 
                      begin={`${idx * 0.24}s`}
                      repeatCount="indefinite" 
                    />
                  </circle>
                  {isRTL ? (
                    <g transform={`translate(${bridge.midX}, 260)`}>
                      <path
                        d="M 6 -7 L -2 0 L 6 7"
                        fill="none"
                        stroke="#FF6600"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 1 -7 L -7 0 L 1 7"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  ) : (
                    <g transform={`translate(${bridge.midX}, 260)`}>
                      <path
                        d="M -6 -7 L 2 0 L -6 7"
                        fill="none"
                        stroke="#FF6600"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M -1 -7 L 7 0 L -1 7"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  )}
                </g>
              ))
            )}

            {/* Desktop Pipeline Bottom Status Tag */}
            {!isMobile && (
              <text x="450" y="348" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.1em">
                ✦ {isRTL ? 'جریان داده و تبدیل بدون توقف // صفر درصد اصطکاک' : 'UNIFIED CLOSED-LOOP PIPELINE // ZERO FRICTION'}
              </text>
            )}
          </g>
        )}

        {/* =========================================================
            STAGE 3: THE OUTCOME — COMPOUNDING FLYWHEEL ENGINE
            ========================================================= */}
        {currentStage === 3 && (
          <g className="pi-reactor-layer">
            {/* Giant Radial Glow Field */}
            <circle cx={centerX} cy={centerY} r={isMobile ? 150 : 210} fill="url(#piCoreGlow)" />

            {/* Precision Flywheel Orbit Ring */}
            <g transform={`translate(${centerX}, ${centerY})`}>
              {/* Outer Orbit Dashed Ring */}
              <motion.circle
                cx="0"
                cy="0"
                r={isMobile ? 135 : 195}
                stroke="rgba(255, 90, 0, 0.65)"
                strokeWidth={isMobile ? 1.6 : 2}
                strokeDasharray="8 10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              />

              {/* Glowing High-Velocity Energy Stream */}
              <motion.circle
                cx="0"
                cy="0"
                r={isMobile ? 135 : 195}
                stroke="url(#piPipelineGrad)"
                strokeWidth={isMobile ? 2.8 : 3.5}
                fill="none"
                strokeDasharray={isMobile ? "80 200" : "120 280"}
                animate={{ rotate: isRTL ? -360 : 360 }}
                transition={{ duration: 4.4, ease: "linear", repeat: Infinity }}
              />
            </g>

            {/* Center Hub Core */}
            <circle
              cx={centerX}
              cy={centerY}
              r={isMobile ? 48 : 68}
              fill="#080A0F"
              stroke="rgba(255, 120, 40, 0.5)"
              strokeWidth="1.5"
            />
            {/* Subtle inner concentric ring for premium tech feel */}
            <circle
              cx={centerX}
              cy={centerY}
              r={isMobile ? 42 : 60}
              fill="rgba(255, 85, 0, 0.05)"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* Central Compounding Readout — Clean, high-contrast & 100% legible */}
            <text 
              x={centerX} 
              y={centerY - (isMobile ? 10 : 16)} 
              textAnchor="middle" 
              fill="#FF7722" 
              fontSize={isMobile ? "15" : "19"} 
              fontWeight="900" 
              fontFamily="var(--font-mono)" 
              letterSpacing="0.05em"
            >
              +3.4X
            </text>
            <text 
              x={centerX} 
              y={centerY + (isMobile ? 6 : 8)} 
              textAnchor="middle" 
              fill="#FFFFFF" 
              fontSize={isMobile ? "9.5" : "11"} 
              fontWeight="800" 
              fontFamily={isRTL ? 'var(--font-persian)' : 'var(--font-sans)'} 
              letterSpacing="0.04em"
            >
              {isRTL ? 'شتاب خودافزا' : 'COMPOUNDING'}
            </text>
            <text 
              x={centerX} 
              y={centerY + (isMobile ? 20 : 26)} 
              textAnchor="middle" 
              fill="#A0AEC0" 
              fontSize={isMobile ? "7.5" : "9"} 
              fontWeight="600" 
              fontFamily="var(--font-mono)" 
              letterSpacing="0.06em"
            >
              {isRTL ? 'موتور رشد پایدار' : 'GROWTH ENGINE'}
            </text>
          </g>
        )}
      </svg>

      {/* =========================================================
          THE 5 HTML NODE MODULES (100% ACCESSIBLE & NON-OVERLAPPING)
          ========================================================= */}
      <div className="pi-nodes-overlay">
        {nodes.map((node) => {
          const coord = coordsMap[node.id][currentStage];
          const isHighlight = currentStage >= 2;

          return (
            <motion.div
              key={node.id}
              className={`pi-node-module stage-${currentStage} ${isHighlight ? 'active-highlight' : ''}`}
              animate={{
                left: `${(coord.x / vbW) * 100}%`,
                top: `${(coord.y / vbH) * 100}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 82,
                damping: 22,
                mass: 0.95
              }}
            >
              {/* Step Index Badge (Right in RTL, Left in LTR) */}
              <span className="pi-node-badge">{node.num}</span>

              {/* Clean Text Details */}
              <div className="pi-node-text-wrap">
                <span className="pi-node-title">{node.label}</span>
                <span className="pi-node-sub">{node.sub}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
