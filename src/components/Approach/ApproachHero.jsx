import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

const PHASES = [
  { id: 'chaos', labelEn: 'CHAOS', labelFa: 'هرج‌ومرج' },
  { id: 'connection', labelEn: 'CONNECTION', labelFa: 'پیوند' },
  { id: 'clarity', labelEn: 'CLARITY', labelFa: 'شفافیت' }
];

export default function ApproachHero() {
  const { t, isRTL } = useLanguage();
  const hero = t.approach?.hero || {};
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const canvasRef = useRef(null);

  // Auto-cycle through the 3 phases every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhaseIndex((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Canvas visual evolution: Chaos -> Connection -> Clarity
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const nodeCount = 36;
    const nodes = [];
    const cols = 6;
    const rows = 6;

    for (let i = 0; i < nodeCount; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      // Grid targets for Clarity phase
      const targetX = (width * 0.2) + (col * (width * 0.6) / (cols - 1));
      const targetY = (height * 0.2) + (row * (height * 0.6) / (rows - 1));

      // Radial targets for Connection phase
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = Math.min(width, height) * (0.18 + (i % 3) * 0.1);
      const ringX = width * 0.5 + Math.cos(angle) * radius;
      const ringY = height * 0.5 + Math.sin(angle) * radius;

      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        chaosX: Math.random() * width,
        chaosY: Math.random() * height,
        ringX,
        ringY,
        gridX: targetX,
        gridY: targetY,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 2,
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Interpolate towards target positions based on active phase
      nodes.forEach((n, idx) => {
        n.phase += 0.02;
        let destX, destY;

        if (activePhaseIndex === 0) {
          // CHAOS: erratic drift
          n.chaosX += n.vx + Math.sin(time + idx) * 0.4;
          n.chaosY += n.vy + Math.cos(time + idx) * 0.4;
          if (n.chaosX < 0 || n.chaosX > width) n.vx *= -1;
          if (n.chaosY < 0 || n.chaosY > height) n.vy *= -1;
          destX = n.chaosX;
          destY = n.chaosY;
        } else if (activePhaseIndex === 1) {
          // CONNECTION: flowing orbital cluster
          const dynamicAngle = (idx / nodeCount) * Math.PI * 2 + time * 0.15;
          const r = Math.min(width, height) * (0.2 + (idx % 4) * 0.08);
          destX = width * 0.5 + Math.cos(dynamicAngle) * r;
          destY = height * 0.5 + Math.sin(dynamicAngle) * r;
        } else {
          // CLARITY: structured harmonic alignment
          destX = n.gridX + Math.sin(time * 0.8 + idx) * 3;
          destY = n.gridY + Math.cos(time * 0.8 + idx) * 3;
        }

        // Smooth spring physics
        n.x += (destX - n.x) * 0.045;
        n.y += (destY - n.y) * 0.045;
      });

      // Render connection lines
      const maxConnectDist = activePhaseIndex === 0 ? 80 : activePhaseIndex === 1 ? 160 : 130;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const normalizedDist = 1 - dist / maxConnectDist;
            let lineAlpha = normalizedDist * 0.35;
            let strokeStyle = 'rgba(255, 255, 255, ' + lineAlpha + ')';

            if (activePhaseIndex === 1) {
              // Amber/orange glowing connection
              strokeStyle = `rgba(255, 107, 44, ${lineAlpha * 1.2})`;
            } else if (activePhaseIndex === 2) {
              // Crisp blue/white clarity
              strokeStyle = `rgba(180, 210, 255, ${lineAlpha * 0.9})`;
            }

            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = activePhaseIndex === 2 ? 1 : 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Render nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(n.phase) * 0.8;
        let nodeColor = 'rgba(255, 255, 255, 0.5)';

        if (activePhaseIndex === 0) {
          nodeColor = 'rgba(255, 80, 80, 0.65)';
        } else if (activePhaseIndex === 1) {
          nodeColor = 'rgba(255, 107, 44, 0.85)';
        } else {
          nodeColor = 'rgba(255, 255, 255, 0.95)';
        }

        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(1.5, n.size + pulse), 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for clarity phase
        if (activePhaseIndex === 2) {
          ctx.fillStyle = 'rgba(255, 107, 44, 0.2)';
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size + 3 + pulse, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    let isVisible = true;
    let isRunning = false;

    const startLoop = () => {
      if (!isRunning && isVisible) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (isRunning) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      }
    };

    const visibilityObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      isVisible = Boolean(entry && entry.isIntersecting);
      if (isVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    }, { threshold: 0 });
    visibilityObserver.observe(canvas);

    startLoop();

    return () => {
      visibilityObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      stopLoop();
    };
  }, [activePhaseIndex]);

  return (
    <section className="approach-hero-section" aria-label="Approach Hero">
      {/* Background Architectural Canvas Visual */}
      <div className="approach-hero-canvas-wrap" aria-hidden="true">
        <canvas ref={canvasRef} className="approach-hero-canvas" />
        <div className="approach-hero-vignette" />
      </div>

      <div className="container approach-hero-container">
        {/* Eyebrow */}
        <motion.div
          className="approach-hero-badge-wrap"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASING.PRIMARY }}
        >
          <div className="approach-eyebrow-pill">
            <span className="approach-pill-indicator" />
            <span className="approach-pill-text">{hero.eyebrow || 'APPROACH'}</span>
          </div>
        </motion.div>

        {/* Primary Philosophical Headline */}
        <div className="approach-hero-headline-wrap">
          <h1 className="approach-hero-title">
            <div className="approach-hero-line-mask">
              <motion.span
                className="approach-hero-line"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASING.CINEMATIC }}
              >
                {hero.headlineLine1}
              </motion.span>
            </div>
            <div className="approach-hero-line-mask">
              <motion.span
                className="approach-hero-line text-gradient-amber"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASING.CINEMATIC }}
              >
                {hero.headlineLine2}
              </motion.span>
            </div>
          </h1>

          {/* Subline */}
          <motion.div
            className="approach-hero-sub-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASING.PRIMARY }}
          >
            <p className="approach-hero-secondary">
              {hero.subline}
            </p>
          </motion.div>
        </div>

        {/* Interactive Phase Controller & Metaphor Indicator */}
        <motion.div
          className="approach-hero-phase-controller"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASING.PRIMARY }}
        >
          <div className="phase-pills-bar">
            {PHASES.map((p, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`phase-pill-btn ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                >
                  <span className="phase-pill-dot" />
                  <span className="phase-pill-label">{isRTL ? p.labelFa : p.labelEn}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activePhaseIndicator"
                      className="phase-pill-active-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="approach-scroll-cue">
            <span className="cue-dot" />
            <span className="cue-text">{isRTL ? 'حرکت به سمت سیستم' : 'EXPLORE THE SYSTEM'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
