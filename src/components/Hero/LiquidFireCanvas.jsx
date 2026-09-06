import React, { useEffect, useRef } from 'react';

export default function LiquidFireCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId = null;
    let isVisible = true;

    const parent = canvas.parentElement || document.getElementById('hero');

    const updateDimensions = () => {
      if (parent) {
        canvas.width = parent.offsetWidth || window.innerWidth;
        canvas.height = parent.offsetHeight || window.innerHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      cachedRect = null;
    };

    let cachedRect = null;
    const getRect = () => {
      if (!cachedRect) {
        cachedRect = canvas.getBoundingClientRect();
      }
      return cachedRect;
    };

    updateDimensions();

    let width = canvas.width;
    let height = canvas.height;

    // Mouse state with smooth Lerp interpolation
    const mouse = {
      x: width * 0.7,
      y: height * 0.45,
      targetX: width * 0.7,
      targetY: height * 0.45,
      speed: 0,
      lastX: width * 0.7,
      lastY: height * 0.45,
      isInside: false,
    };

    // Particles for fire sparks and glowing embers
    const particles = [];
    const maxParticles = 45;

    const handleResize = () => {
      updateDimensions();
      width = canvas.width;
      height = canvas.height;
    };

    const handleMouseMove = (e) => {
      const rect = getRect();
      const isInside = (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      );

      mouse.isInside = isInside;

      if (isInside) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;

        const dx = mouse.targetX - mouse.lastX;
        const dy = mouse.targetY - mouse.lastY;
        mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);
        mouse.lastX = mouse.targetX;
        mouse.lastY = mouse.targetY;

        // Spawn fiery ember particles ONLY when cursor is inside Hero
        if (particles.length < maxParticles && Math.random() > 0.3) {
          particles.push({
            x: mouse.targetX + (Math.random() - 0.5) * 40,
            y: mouse.targetY + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 2 + (dx * 0.05),
            vy: -Math.random() * 2.5 - 1,
            size: Math.random() * 3 + 1,
            alpha: 1,
            color: Math.random() > 0.5 ? '#FF5500' : Math.random() > 0.3 ? '#FFAA00' : '#FF2200',
            life: 1,
            decay: Math.random() * 0.02 + 0.015,
          });
        }
      } else {
        // Return smoothly to ambient position inside hero when cursor leaves
        mouse.targetX = width * 0.65;
        mouse.targetY = height * 0.45;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = getRect();
        const touch = e.touches[0];
        const isInside = (
          touch.clientY >= rect.top &&
          touch.clientY <= rect.bottom &&
          touch.clientX >= rect.left &&
          touch.clientX <= rect.right
        );

        if (isInside) {
          mouse.targetX = touch.clientX - rect.left;
          mouse.targetY = touch.clientY - rect.top;
        }
      }
    };

    const invalidateRect = () => {
      cachedRect = null;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', invalidateRect, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      time += 0.015;

      // Smooth interpolation for fluid liquid motion
      mouse.x += (mouse.targetX - mouse.x) * 0.065;
      mouse.y += (mouse.targetY - mouse.y) * 0.065;

      ctx.clearRect(0, 0, width, height);

      // =========================================================
      // LAYER 1: Deep Amber Sub-glow (Foundation heat)
      // =========================================================
      const baseGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, Math.max(width * 0.4, 300)
      );
      baseGrad.addColorStop(0, 'rgba(255, 68, 0, 0.18)');
      baseGrad.addColorStop(0.35, 'rgba(224, 48, 0, 0.08)');
      baseGrad.addColorStop(0.7, 'rgba(180, 20, 0, 0.02)');
      baseGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // =========================================================
      // LAYER 2: Organic Liquid Metablobs (Turbulent flame physics)
      // =========================================================
      const blobCount = 4;
      for (let i = 0; i < blobCount; i++) {
        const angle = time * (0.8 + i * 0.25) + (i * Math.PI / 2);
        const orbitRadius = 35 + i * 22 + Math.sin(time * 1.2 + i) * 15;
        const bx = mouse.x + Math.cos(angle) * orbitRadius;
        const by = mouse.y + Math.sin(angle * 1.3) * (orbitRadius * 0.6) - (i * 12);
        const radius = 60 + i * 25 + Math.cos(time * 1.5 + i) * 15;

        const blobGrad = ctx.createRadialGradient(bx, by, 0, bx, by, radius);
        if (i === 0) {
          blobGrad.addColorStop(0, 'rgba(255, 120, 30, 0.28)');
          blobGrad.addColorStop(0.5, 'rgba(255, 60, 0, 0.12)');
          blobGrad.addColorStop(1, 'transparent');
        } else if (i === 1) {
          blobGrad.addColorStop(0, 'rgba(255, 80, 0, 0.22)');
          blobGrad.addColorStop(0.6, 'rgba(200, 30, 0, 0.07)');
          blobGrad.addColorStop(1, 'transparent');
        } else {
          blobGrad.addColorStop(0, 'rgba(255, 160, 50, 0.15)');
          blobGrad.addColorStop(0.5, 'rgba(255, 50, 0, 0.05)');
          blobGrad.addColorStop(1, 'transparent');
        }

        ctx.fillStyle = blobGrad;
        ctx.beginPath();
        ctx.arc(bx, by, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================
      // LAYER 3: Core Incandescent Heat (High-intensity radiant center)
      // =========================================================
      const coreRadius = 45 + Math.sin(time * 3) * 8;
      const coreGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, coreRadius
      );
      coreGrad.addColorStop(0, 'rgba(255, 220, 150, 0.35)');
      coreGrad.addColorStop(0.3, 'rgba(255, 110, 20, 0.25)');
      coreGrad.addColorStop(0.8, 'rgba(255, 40, 0, 0.08)');
      coreGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // =========================================================
      // LAYER 4: Dynamic Ember Particles (Rising velocity sparks)
      // =========================================================
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.alpha = p.life;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha * 0.8;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // IntersectionObserver to pause rendering when Hero is offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', invalidateRect);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="vm-liquid-fire-canvas"
      aria-hidden="true"
    />
  );
}
