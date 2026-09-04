import React, { useEffect, useRef } from 'react';

export default function LiquidFireCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const parent = canvas.parentElement || document.getElementById('hero');

    const updateDimensions = () => {
      if (parent) {
        canvas.width = parent.offsetWidth || window.innerWidth;
        canvas.height = parent.offsetHeight || window.innerHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
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
      const rect = canvas.getBoundingClientRect();
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
        const rect = canvas.getBoundingClientRect();
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

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth interpolation for fluid liquid motion
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Add gentle organic breathing motion even when idle
      const idleOffsetX = Math.sin(time * 0.8) * 45 + Math.cos(time * 1.2) * 25;
      const idleOffsetY = Math.cos(time * 0.7) * 35 + Math.sin(time * 1.1) * 20;

      const fireCoreX = mouse.x + idleOffsetX;
      const fireCoreY = mouse.y + idleOffsetY;

      // Clear strictly within canvas bounds
      ctx.clearRect(0, 0, width, height);

      // 1. Large Ambient Deep Fire Aura (Outer Glow)
      const outerRadius = Math.max(width, height) * 0.55;
      const outerGrad = ctx.createRadialGradient(
        fireCoreX, fireCoreY, 10,
        fireCoreX, fireCoreY, outerRadius
      );
      outerGrad.addColorStop(0, 'rgba(255, 60, 0, 0.22)');
      outerGrad.addColorStop(0.25, 'rgba(210, 45, 0, 0.12)');
      outerGrad.addColorStop(0.55, 'rgba(120, 25, 0, 0.05)');
      outerGrad.addColorStop(1, 'rgba(6, 7, 9, 0)');

      ctx.fillStyle = outerGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Mid Heat Core Flame (Luminous Amber / Fire)
      const midRadius = Math.min(width, height) * 0.42;
      const midGrad = ctx.createRadialGradient(
        fireCoreX, fireCoreY, 5,
        fireCoreX, fireCoreY, midRadius
      );
      midGrad.addColorStop(0, 'rgba(255, 110, 20, 0.35)');
      midGrad.addColorStop(0.3, 'rgba(255, 75, 0, 0.2)');
      midGrad.addColorStop(0.7, 'rgba(180, 40, 0, 0.05)');
      midGrad.addColorStop(1, 'rgba(6, 7, 9, 0)');

      ctx.fillStyle = midGrad;
      ctx.beginPath();
      ctx.arc(fireCoreX, fireCoreY, midRadius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Intense Inner Fire Plasma Hotspot
      const innerRadius = 140;
      const innerGrad = ctx.createRadialGradient(
        fireCoreX, fireCoreY, 0,
        fireCoreX, fireCoreY, innerRadius
      );
      innerGrad.addColorStop(0, 'rgba(255, 180, 60, 0.45)');
      innerGrad.addColorStop(0.35, 'rgba(255, 95, 10, 0.25)');
      innerGrad.addColorStop(0.75, 'rgba(255, 45, 0, 0.08)');
      innerGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = innerGrad;
      ctx.beginPath();
      ctx.arc(fireCoreX, fireCoreY, innerRadius, 0, Math.PI * 2);
      ctx.fill();

      // 4. Secondary organic flame tongue (drifting upward)
      const tongueX = fireCoreX + Math.sin(time * 2) * 30;
      const tongueY = fireCoreY - 60 + Math.cos(time * 1.5) * 20;
      const tongueGrad = ctx.createRadialGradient(
        tongueX, tongueY, 0,
        tongueX, tongueY, 110
      );
      tongueGrad.addColorStop(0, 'rgba(255, 140, 30, 0.28)');
      tongueGrad.addColorStop(0.5, 'rgba(255, 60, 0, 0.12)');
      tongueGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = tongueGrad;
      ctx.beginPath();
      ctx.arc(tongueX, tongueY, 110, 0, Math.PI * 2);
      ctx.fill();

      // 5. Update & Draw Rising Embers
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

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
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
