import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function CapabilitiesHero() {
  const { t, isRTL } = useLanguage();
  const c = t.capabilities?.hero || {};
  const [isConnected, setIsConnected] = useState(true);
  const canvasRef = useRef(null);

  // Dynamic modular canvas evolution: Isolated Modules -> Synchronized System Architecture
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

    // 5 primary domain clusters
    const modules = [
      { name: 'STRATEGY', color: '#ff5500' },
      { name: 'CREATIVE', color: '#ff7722' },
      { name: 'DIGITAL', color: '#ff9944' },
      { name: 'GROWTH', color: '#ff5500' },
      { name: 'DATA', color: '#ffaa44' }
    ];

    const nodes = [];
    const nodeCount = 30;

    for (let i = 0; i < nodeCount; i++) {
      const modIndex = i % 5;
      const angle = (modIndex / 5) * Math.PI * 2 - Math.PI / 2;
      const r = Math.min(width, height) * 0.28;
      
      // Connected target position (pentagonal harmonic network)
      const targetX = width * 0.5 + Math.cos(angle) * r + (Math.random() - 0.5) * 40;
      const targetY = height * 0.5 + Math.sin(angle) * r + (Math.random() - 0.5) * 40;

      // Disconnected random floating position
      const isolatedX = Math.random() * width;
      const isolatedY = Math.random() * height;

      nodes.push({
        x: isolatedX,
        y: isolatedY,
        isolatedX,
        isolatedY,
        targetX,
        targetY,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 2.5 + 2,
        moduleIndex: modIndex,
        color: modules[modIndex].color,
        pulse: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Interpolate positions based on isConnected state
      nodes.forEach((n, idx) => {
        n.pulse += 0.025;
        let destX, destY;

        if (isConnected) {
          // Subtle breathing orbital motion in connected state
          const modAngle = (n.moduleIndex / 5) * Math.PI * 2 - Math.PI / 2;
          const orbitR = Math.min(width, height) * 0.28;
          destX = width * 0.5 + Math.cos(modAngle) * orbitR + Math.sin(time + idx) * 8;
          destY = height * 0.5 + Math.sin(modAngle) * orbitR + Math.cos(time + idx) * 8;
        } else {
          // Drifting separated pieces
          n.isolatedX += n.vx;
          n.isolatedY += n.vy;
          if (n.isolatedX < 40 || n.isolatedX > width - 40) n.vx *= -1;
          if (n.isolatedY < 40 || n.isolatedY > height - 40) n.vy *= -1;
          destX = n.isolatedX;
          destY = n.isolatedY;
        }

        // Spring movement
        n.x += (destX - n.x) * 0.05;
        n.y += (destY - n.y) * 0.05;
      });

      // Draw connection vectors if connected
      if (isConnected) {
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
              const alpha = (1 - dist / 150) * 0.4;
              ctx.strokeStyle = `rgba(255, 110, 40, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }

        // Central hub circle
        ctx.strokeStyle = 'rgba(255, 85, 0, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(width * 0.5, height * 0.5, Math.min(width, height) * 0.28, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulseSize = Math.sin(n.pulse) * 0.7;
        ctx.fillStyle = isConnected ? n.color : 'rgba(180, 180, 195, 0.4)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(1.5, n.size + pulseSize), 0, Math.PI * 2);
        ctx.fill();

        if (isConnected) {
          ctx.fillStyle = 'rgba(255, 85, 0, 0.15)';
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size + 4 + pulseSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isConnected]);

  return (
    <section className="capabilities-hero-section" aria-label="Capabilities Hero">
      {/* Background Architectural Canvas Visual */}
      <div className="capabilities-hero-canvas-wrap" aria-hidden="true">
        <canvas ref={canvasRef} className="capabilities-hero-canvas" />
        <div className="capabilities-hero-vignette" />
      </div>

      <div className="container capabilities-hero-container">
        {/* Eyebrow Pill */}
        <motion.div
          className="capabilities-hero-badge-wrap"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASING.PRIMARY }}
        >
          <div className="capabilities-eyebrow-pill">
            <span className="capabilities-pill-indicator" />
            <span className="capabilities-pill-text">{c.eyebrow || 'CAPABILITIES'}</span>
          </div>
        </motion.div>

        {/* Primary Headline */}
        <div className="capabilities-hero-headline-wrap">
          <h1 className="capabilities-hero-title">
            <div className="capabilities-hero-line-mask">
              <motion.span
                className="capabilities-hero-line"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASING.CINEMATIC }}
              >
                {c.headlineLine1}
              </motion.span>
            </div>
            <div className="capabilities-hero-line-mask">
              <motion.span
                className="capabilities-hero-line text-gradient-amber"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASING.CINEMATIC }}
              >
                {c.headlineLine2}
              </motion.span>
            </div>
          </h1>

          {/* Subline */}
          <motion.div
            className="capabilities-hero-sub-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASING.PRIMARY }}
          >
            <p className="capabilities-hero-secondary">
              {c.subline}
            </p>
          </motion.div>
        </div>

        {/* Interactive Architecture Toggle & Metaphor Indicator */}
        <motion.div
          className="capabilities-hero-state-toggle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASING.PRIMARY }}
        >
          <div className="architecture-toggle-pill">
            <button
              type="button"
              className={`arch-btn ${!isConnected ? 'active' : ''}`}
              onClick={() => setIsConnected(false)}
            >
              <span className="arch-dot" />
              <span>{isRTL ? 'اجزای پراکنده' : 'ISOLATED PIECES'}</span>
            </button>
            <button
              type="button"
              className={`arch-btn ${isConnected ? 'active' : ''}`}
              onClick={() => setIsConnected(true)}
            >
              <span className="arch-dot" />
              <span>{isRTL ? 'معماری یکپارچه' : 'CONNECTED ARCHITECTURE'}</span>
            </button>
          </div>

          <div className="capabilities-axiom-cue">
            <span className="cue-dot" />
            <span className="cue-text">
              {isRTL ? 'توانمندی‌ها = اجزای یک سیستم جامع' : 'CAPABILITIES = COMPONENTS OF A SYSTEM'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
