import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function LivingSystemNetwork() {
  const { t, isRTL } = useLanguage();
  const s = t.approach?.systemNetwork || {};
  const [activeNodeId, setActiveNodeId] = useState('strategy');
  const [autoRotate, setAutoRotate] = useState(true);

  const nodes = s.nodes || [];

  // Auto rotate active node when user hasn't interacted
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveNodeId((curr) => {
        const idx = nodes.findIndex((n) => n.id === curr);
        const nextIdx = (idx + 1) % nodes.length;
        return nodes[nextIdx]?.id || 'strategy';
      });
    }, 3800);
    return () => clearInterval(interval);
  }, [autoRotate, nodes]);

  // Polar coordinates for 5 nodes arranged evenly in an orbit
  const radius = 180;
  const centerX = 250;
  const centerY = 230;

  const getCoordinates = (index, total) => {
    // Start at top (-PI/2) and distribute clockwise
    const angle = (index * (2 * Math.PI) / total) - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      angle
    };
  };

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <section className="approach-section system-network-section" aria-label="The Living System Network">
      <div className="container">
        {/* Section Header */}
        <div className="approach-section-header text-center">
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{s.badge || '02 / THE SYSTEM'}</span>
          </div>
          <h2 className="approach-section-title">{s.headline}</h2>
          <p className="approach-section-subtext">{s.subheadline}</p>
        </div>

        {/* Living Circuit Network Display */}
        <div 
          className="system-network-stage"
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          {/* SVG Connection Traces */}
          <div className="network-svg-wrap">
            <svg 
              className="network-canvas-svg" 
              viewBox="0 0 500 460" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Core Radial Glow */}
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 107, 44, 0.35)" />
                  <stop offset="100%" stopColor="rgba(255, 107, 44, 0)" />
                </radialGradient>
                {/* Active Path Gradient */}
                <linearGradient id="activeTrace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff5500" />
                  <stop offset="100%" stopColor="#ff9955" />
                </linearGradient>
              </defs>

              {/* Central Energy Glow */}
              <circle cx={centerX} cy={centerY} r="90" fill="url(#centerGlow)" />
              <circle cx={centerX} cy={centerY} r="180" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Radial spoke lines to each node */}
              {nodes.map((n, i) => {
                const pos = getCoordinates(i, nodes.length);
                const isActive = n.id === activeNodeId;
                return (
                  <g key={`spoke-${n.id}`}>
                    <line
                      x1={centerX}
                      y1={centerY}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isActive ? 'url(#activeTrace)' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth={isActive ? 2 : 1}
                      strokeDasharray={isActive ? 'none' : '3 3'}
                      className={isActive ? 'pulse-spoke' : ''}
                    />
                  </g>
                );
              })}

              {/* Circular orbital loop connecting adjacent nodes */}
              {nodes.map((n, i) => {
                const p1 = getCoordinates(i, nodes.length);
                const p2 = getCoordinates((i + 1) % nodes.length, nodes.length);
                const isActiveEdge = n.id === activeNodeId;
                return (
                  <line
                    key={`edge-${n.id}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke={isActiveEdge ? 'rgba(255, 107, 44, 0.7)' : 'rgba(255, 255, 255, 0.08)'}
                    strokeWidth={isActiveEdge ? 1.8 : 1}
                  />
                );
              })}

              {/* Central Business Core */}
              <circle 
                cx={centerX} 
                cy={centerY} 
                r="44" 
                fill="#0e0e11" 
                stroke="#ff5500" 
                strokeWidth="2" 
                className="center-core-circle"
              />
              <circle 
                cx={centerX} 
                cy={centerY} 
                r="50" 
                fill="none" 
                stroke="rgba(255, 85, 0, 0.3)" 
                strokeWidth="1" 
                className="center-core-ring"
              />
              <text
                x={centerX}
                y={centerY + 4}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="700"
                letterSpacing={isRTL ? "0" : "1.5"}
                className="center-core-text"
              >
                {s.centralNode || 'BUSINESS'}
              </text>
            </svg>

            {/* Interactive HTML Node overlays over SVG coordinates */}
            {nodes.map((n, i) => {
              const pos = getCoordinates(i, nodes.length);
              const isActive = n.id === activeNodeId;
              // Percentage calculation inside 500x460 canvas
              const leftPercent = (pos.x / 500) * 100;
              const topPercent = (pos.y / 460) * 100;

              return (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setActiveNodeId(n.id)}
                  style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                  className={`network-node-btn ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                >
                  <div className="node-pill">
                    <span className="node-bullet" />
                    <span className="node-btn-label">{n.label}</span>
                  </div>
                  <span className="node-micro-badge">{n.micro}</span>
                </button>
              );
            })}
          </div>

          {/* Active Flow Inspector Card */}
          {activeNode && (
            <div className="network-flow-inspector">
              <div className="inspector-left">
                <span className="inspector-badge">{isRTL ? 'حلقه بازخورد فعال' : 'ACTIVE CIRCUIT FEEDBACK'}</span>
                <h4 className="inspector-title">{activeNode.label}</h4>
                <p className="inspector-desc">{activeNode.micro}</p>
              </div>
              <div className="inspector-right">
                <div className="loop-return-indicator">
                  <span className="loop-icon">↺</span>
                  <span className="loop-text">{s.loopReturn}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
