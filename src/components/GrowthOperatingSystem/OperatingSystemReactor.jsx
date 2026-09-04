import React from 'react';

export default function OperatingSystemReactor({ activeStateId, isAutoPlaying }) {
  return (
    <div className={`os-reactor-stage state-${activeStateId}`}>
      <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="os-reactor-svg">
        <defs>
          <radialGradient id="reactorCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 85, 0, 0.45)" />
            <stop offset="60%" stopColor="rgba(255, 85, 0, 0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <radialGradient id="signalGreenAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0, 245, 155, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <filter id="reactorLaserBloom" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic Coordinate Grid */}
        <g className="reactor-grid-layer" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1">
          <line x1="100" y1="50" x2="100" y2="400" />
          <line x1="200" y1="50" x2="200" y2="400" />
          <line x1="300" y1="50" x2="300" y2="400" />
          <line x1="400" y1="50" x2="400" y2="400" />
          <line x1="500" y1="50" x2="500" y2="400" />
          <line x1="50" y1="120" x2="550" y2="120" />
          <line x1="50" y1="225" x2="550" y2="225" />
          <line x1="50" y1="330" x2="550" y2="330" />
        </g>

        {/* Orbitals & Energy Bounds */}
        <circle cx="300" cy="225" r="160" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="6 6" className="orbital-ring-outer" />
        <circle cx="300" cy="225" r="100" stroke="rgba(255, 85, 0, 0.25)" strokeDasharray="4 4" className="orbital-ring-inner" />
        <circle cx="300" cy="225" r="45" fill="url(#reactorCoreGlow)" />

        {/* =========================================================
            STATE-SPECIFIC VECTOR TRANSFORMATIONS
            ========================================================= */}

        {/* STATE 01: INPUT — Baseline Bottleneck & Data Ingestion */}
        {activeStateId === 'input' && (
          <g className="reactor-mode-input">
            <line x1="80" y1="120" x2="260" y2="210" stroke="#FF5500" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="80" y1="225" x2="255" y2="225" stroke="#FF5500" strokeWidth="3" />
            <line x1="80" y1="330" x2="260" y2="240" stroke="#FF5500" strokeWidth="2" strokeDasharray="4 4" />

            <circle cx="80" cy="120" r="8" fill="#151822" stroke="#FF5500" strokeWidth="2" />
            <circle cx="80" cy="225" r="10" fill="#FF5500" />
            <circle cx="80" cy="330" r="8" fill="#151822" stroke="#FF5500" strokeWidth="2" />

            <text x="80" y="100" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="var(--font-mono)">MARKET</text>
            <text x="80" y="205" textAnchor="middle" fill="#FF8833" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">STALLED CAC</text>
            <text x="80" y="355" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="var(--font-mono)">CUSTOMER</text>
          </g>
        )}

        {/* STATE 02: INSIGHT — Signal Extraction & Pattern Convergence */}
        {activeStateId === 'insight' && (
          <g className="reactor-mode-insight">
            {/* Anamorphic Convergence Traces */}
            <path d="M 80 80 Q 200 160 300 225" stroke="#FF5500" strokeWidth="2" fill="none" />
            <path d="M 520 80 Q 400 160 300 225" stroke="#FF5500" strokeWidth="2" fill="none" />
            <path d="M 80 370 Q 200 290 300 225" stroke="#FF5500" strokeWidth="2" fill="none" />
            <path d="M 520 370 Q 400 290 300 225" stroke="#FF5500" strokeWidth="2" fill="none" />

            {/* Radiant Pattern Focal Point */}
            <circle cx="300" cy="225" r="28" fill="#181B24" stroke="#FF5500" strokeWidth="3" filter="url(#reactorLaserBloom)" />
            <circle cx="300" cy="225" r="12" fill="#FF5500" />
            <text x="300" y="275" textAnchor="middle" fill="#00F59B" fontSize="11" fontFamily="var(--font-mono)" fontWeight="800">
              PATTERN ISOLATED [98.4% MATCH]
            </text>
          </g>
        )}

        {/* STATE 03: ACTION — Multi-Vector Synchronized Deployment */}
        {activeStateId === 'action' && (
          <g className="reactor-mode-action">
            {/* Outgoing Laser Deployment Paths */}
            <line x1="300" y1="225" x2="480" y2="100" stroke="#FF5500" strokeWidth="3" className="action-laser-pulse" />
            <line x1="300" y1="225" x2="520" y2="225" stroke="#FF5500" strokeWidth="3.5" className="action-laser-pulse" />
            <line x1="300" y1="225" x2="480" y2="350" stroke="#FF5500" strokeWidth="3" className="action-laser-pulse" />

            <circle cx="480" cy="100" r="18" fill="#141722" stroke="#FF5500" strokeWidth="2" />
            <text x="480" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="var(--font-mono)" fontWeight="700">STRAT</text>

            <circle cx="520" cy="225" r="22" fill="#141722" stroke="#FF5500" strokeWidth="2.5" />
            <text x="520" y="229" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="var(--font-mono)" fontWeight="700">MEDIA</text>

            <circle cx="480" cy="350" r="18" fill="#141722" stroke="#FF5500" strokeWidth="2" />
            <text x="480" y="354" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="var(--font-mono)" fontWeight="700">CRO</text>
          </g>
        )}

        {/* STATE 04: SIGNAL — Full-Funnel Telemetry Radar Stream */}
        {activeStateId === 'signal' && (
          <g className="reactor-mode-signal">
            <circle cx="300" cy="225" r="70" stroke="#00F59B" strokeWidth="1.5" strokeDasharray="4 4" className="signal-echo-ring-1" />
            <circle cx="300" cy="225" r="130" stroke="#00F59B" strokeWidth="1.5" strokeDasharray="6 6" className="signal-echo-ring-2" />
            <circle cx="300" cy="225" r="190" stroke="rgba(0, 245, 155, 0.4)" strokeWidth="1" className="signal-echo-ring-3" />

            <line x1="140" y1="140" x2="300" y2="225" stroke="#00F59B" strokeWidth="2" />
            <line x1="460" y1="140" x2="300" y2="225" stroke="#00F59B" strokeWidth="2" />
            <line x1="380" y1="360" x2="300" y2="225" stroke="#00F59B" strokeWidth="2" />

            <circle cx="140" cy="140" r="7" fill="#00F59B" />
            <circle cx="460" cy="140" r="7" fill="#00F59B" />
            <circle cx="380" cy="360" r="7" fill="#00F59B" />
          </g>
        )}

        {/* STATE 05: OPTIMIZATION — Winner Amplification & Reallocation */}
        {activeStateId === 'optimization' && (
          <g className="reactor-mode-optimization">
            {/* Suppressed Vector (Losing variation) */}
            <line x1="300" y1="225" x2="480" y2="120" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="480" cy="120" r="10" fill="#111319" stroke="#475569" strokeWidth="1" />
            <text x="480" y="100" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="var(--font-mono)">PHASED OUT</text>

            {/* Amplified Vector (Top ROAS Winner) */}
            <line x1="300" y1="225" x2="510" y2="260" stroke="#FF5500" strokeWidth="6" filter="url(#reactorLaserBloom)" />
            <circle cx="510" cy="260" r="26" fill="#181B24" stroke="#FF5500" strokeWidth="3" />
            <text x="510" y="256" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-mono)" fontWeight="800">
              +84%
            </text>
            <text x="510" y="270" textAnchor="middle" fill="#00F59B" fontSize="8" fontFamily="var(--font-mono)" fontWeight="700">
              AMPLIFIED
            </text>
          </g>
        )}

        {/* STATE 06: COMPOUNDING — Harmonic Synchronization Vortex */}
        {activeStateId === 'compounding' && (
          <g className="reactor-mode-compounding">
            {/* Spinning Flywheel Vortex Elements */}
            <circle cx="300" cy="225" r="130" stroke="#FF5500" strokeWidth="3" strokeDasharray="80 20" className="flywheel-rotator-1" />
            <circle cx="300" cy="225" r="90" stroke="#FFAA44" strokeWidth="2.5" strokeDasharray="40 30" className="flywheel-rotator-2" />
            <circle cx="300" cy="225" r="50" fill="url(#reactorCoreGlow)" stroke="#FF5500" strokeWidth="2" filter="url(#reactorLaserBloom)" />

            <text x="300" y="221" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="var(--font-display)" fontWeight="900">
              3.4X
            </text>
            <text x="300" y="238" textAnchor="middle" fill="#00F59B" fontSize="8" fontFamily="var(--font-mono)" fontWeight="800">
              COMPOUNDING
            </text>
          </g>
        )}

        {/* Core Operating Engine Housing */}
        <rect 
          x="264" 
          y="189" 
          width="72" 
          height="72" 
          rx="18" 
          fill="#101218" 
          stroke={activeStateId === 'compounding' ? '#00F59B' : '#FF5500'} 
          strokeWidth="2"
        />
        <text 
          x="300" 
          y="222" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          fontSize="10" 
          fontFamily="var(--font-display)" 
          fontWeight="800"
        >
          OS CORE
        </text>
        <text 
          x="300" 
          y="238" 
          textAnchor="middle" 
          fill="#FF8833" 
          fontSize="7" 
          fontFamily="var(--font-mono)" 
          fontWeight="700"
        >
          {activeStateId.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
