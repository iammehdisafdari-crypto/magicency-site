import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function GrowthEngineCanvas() {
  const canvasRef = useRef(null);
  const { activeMode } = useLanguage();
  const modeRef = useRef(activeMode);

  useEffect(() => {
    modeRef.current = activeMode;
  }, [activeMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      hovered: false,
      speed: 0
    };

    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.hovered = true;
    };

    const handleMouseLeave = () => {
      mouse.hovered = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Node & Particle System
    const NODES_COUNT = 38;
    const nodes = [];

    for (let i = 0; i < NODES_COUNT; i++) {
      nodes.push({
        x: Math.random() * (width || 800),
        y: Math.random() * (height || 600),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        baseRadius: Math.random() * 2.5 + 1.5,
        targetRadius: 2,
        currentRadius: 2,
        phase: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 180 + 40,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() - 0.5) * 0.008,
        label: i % 7 === 0 ? `NODE_${(i + 10).toString(16).toUpperCase()}` : null,
        intensity: Math.random() * 0.5 + 0.5
      });
    }

    // Velocity Packets traveling along connections
    const packets = [];
    for (let i = 0; i < 16; i++) {
      packets.push({
        sourceIdx: Math.floor(Math.random() * NODES_COUNT),
        targetIdx: Math.floor(Math.random() * NODES_COUNT),
        progress: Math.random(),
        speed: Math.random() * 0.012 + 0.006,
        size: Math.random() * 2 + 1.2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.016;

      // Smooth mouse interpolation (inertia)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const dxMouse = mouse.x - prevMouseX;
      const dyMouse = mouse.y - prevMouseY;
      mouse.speed = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      prevMouseX = mouse.x;
      prevMouseY = mouse.y;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const currentMode = modeRef.current;

      // 1. Central Ambient Gravitational Core
      const coreGradient = ctx.createRadialGradient(
        centerX + (mouse.x - centerX) * 0.12,
        centerY + (mouse.y - centerY) * 0.12,
        10,
        centerX,
        centerY,
        Math.max(width, height) * 0.55
      );

      if (currentMode === 'momentum') {
        coreGradient.addColorStop(0, 'rgba(0, 245, 155, 0.14)');
        coreGradient.addColorStop(0.3, 'rgba(37, 99, 235, 0.06)');
        coreGradient.addColorStop(1, 'rgba(8, 10, 15, 0)');
      } else if (currentMode === 'signal') {
        coreGradient.addColorStop(0, 'rgba(245, 158, 11, 0.12)');
        coreGradient.addColorStop(0.35, 'rgba(0, 245, 155, 0.05)');
        coreGradient.addColorStop(1, 'rgba(8, 10, 15, 0)');
      } else {
        // System Matrix
        coreGradient.addColorStop(0, 'rgba(0, 245, 155, 0.09)');
        coreGradient.addColorStop(0.4, 'rgba(37, 99, 235, 0.04)');
        coreGradient.addColorStop(1, 'rgba(8, 10, 15, 0)');
      }

      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Mode-Specific Mathematical Topography
      if (currentMode === 'system') {
        // Structured Coordinate Grid & Orbital Attractors
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
        ctx.lineWidth = 1;

        // Concentric Telemetry Rings
        [80, 160, 260, 380].forEach((r, idx) => {
          ctx.beginPath();
          ctx.arc(centerX, centerY, r + Math.sin(time + idx) * 4, 0, Math.PI * 2);
          ctx.stroke();

          // Orbital Tick marks
          const ticks = 12 + idx * 8;
          for (let t = 0; t < ticks; t++) {
            const angle = (t / ticks) * Math.PI * 2 + time * (idx % 2 === 0 ? 0.05 : -0.05);
            const x1 = centerX + Math.cos(angle) * (r - 3);
            const y1 = centerY + Math.sin(angle) * (r - 3);
            const x2 = centerX + Math.cos(angle) * (r + 3);
            const y2 = centerY + Math.sin(angle) * (r + 3);
            ctx.strokeStyle = 'rgba(0, 245, 155, 0.12)';
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });

        // Crosshairs at mouse position
        ctx.strokeStyle = 'rgba(0, 245, 155, 0.2)';
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(mouse.x, 0);
        ctx.lineTo(mouse.x, height);
        ctx.moveTo(0, mouse.y);
        ctx.lineTo(width, mouse.y);
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (currentMode === 'momentum') {
        // High-velocity Compounding Trajectory Curves
        ctx.lineWidth = 1.5;
        const curves = 6;
        for (let c = 0; c < curves; c++) {
          const progress = (time * 0.3 + c / curves) % 1;
          const startX = width * 0.05;
          const startY = height * 0.85;
          const cp1X = width * 0.35 + (mouse.x - centerX) * 0.2;
          const cp1Y = height * 0.8 - c * 25;
          const cp2X = width * 0.65;
          const cp2Y = height * 0.25 - c * 35;
          const endX = width * 0.95;
          const endY = height * 0.1 + c * 10;

          const grad = ctx.createLinearGradient(startX, startY, endX, endY);
          grad.addColorStop(0, 'rgba(0, 245, 155, 0)');
          grad.addColorStop(0.5, `rgba(0, 245, 155, ${0.15 + (c / curves) * 0.25})`);
          grad.addColorStop(1, 'rgba(61, 255, 181, 0.8)');

          ctx.strokeStyle = grad;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
          ctx.stroke();

          // Traveling acceleration point on the curve
          const tPos = (time * 0.5 + c * 0.16) % 1;
          const omt = 1 - tPos;
          const px = omt * omt * omt * startX + 3 * omt * omt * tPos * cp1X + 3 * omt * tPos * tPos * cp2X + tPos * tPos * tPos * endX;
          const py = omt * omt * omt * startY + 3 * omt * omt * tPos * cp1Y + 3 * omt * tPos * tPos * cp2Y + tPos * tPos * tPos * endY;

          ctx.fillStyle = '#3DFFB5';
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = 'rgba(61, 255, 181, 0.3)';
          ctx.beginPath();
          ctx.arc(px, py, 6 + Math.sin(time * 8) * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      } else if (currentMode === 'signal') {
        // Radar Sonar & Focused Intent Beams
        const waveCount = 5;
        for (let w = 0; w < waveCount; w++) {
          const waveRadius = ((time * 70 + w * 90) % 450) + 20;
          const alpha = Math.max(0, 1 - waveRadius / 450) * 0.35;
          ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Focused ray to high converting node
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(centerX, centerY - 80);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 3. Update & Render Nodes
      nodes.forEach((node, idx) => {
        // Mode specific motion dynamics
        if (currentMode === 'system') {
          // Orbit around center with smooth drag
          node.orbitAngle += node.orbitSpeed;
          const targetX = centerX + Math.cos(node.orbitAngle + idx) * node.orbitRadius;
          const targetY = centerY + Math.sin(node.orbitAngle + idx) * (node.orbitRadius * 0.65);
          node.x += (targetX - node.x) * 0.03;
          node.y += (targetY - node.y) * 0.03;
        } else if (currentMode === 'momentum') {
          // Accelerate in directional stream
          node.x += (node.vx * 2 + 1.2);
          node.y += (node.vy * 0.8 - 0.4);
          if (node.x > width + 20) node.x = -20;
          if (node.y < -20) node.y = height + 20;
        } else {
          // Free ambient drift with mouse repulsion
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        // Mouse proximity interaction (elastic deflection)
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 160;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 3;
          node.x -= (dx / dist) * force;
          node.y -= (dy / dist) * force;
          node.targetRadius = node.baseRadius * 1.8;
        } else {
          node.targetRadius = node.baseRadius;
        }

        node.currentRadius += (node.targetRadius - node.currentRadius) * 0.1;

        // Render Node
        ctx.fillStyle = currentMode === 'signal' ? '#F59E0B' : '#00F59B';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node Glow on key nodes
        if (idx % 4 === 0) {
          ctx.strokeStyle = currentMode === 'signal' 
            ? 'rgba(245, 158, 11, 0.25)' 
            : 'rgba(0, 245, 155, 0.25)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.currentRadius * 2.4 + Math.sin(time * 3 + idx) * 1.5, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Node Telemetry Label
        if (node.label && dist < 220) {
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
          ctx.fillStyle = 'rgba(0, 245, 155, 0.7)';
          ctx.fillText(`+${((1 - dist / 220) * 100).toFixed(1)}%`, node.x + 8, node.y + 13);
        }
      });

      // 4. Inter-Node Connections & Constellations
      const maxConnectDist = 120;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.18;
            ctx.strokeStyle = currentMode === 'signal'
              ? `rgba(245, 158, 11, ${alpha})`
              : `rgba(0, 245, 155, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // 5. Render Velocity Data Packets
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.sourceIdx = Math.floor(Math.random() * nodes.length);
          pkt.targetIdx = Math.floor(Math.random() * nodes.length);
        }

        const sNode = nodes[pkt.sourceIdx];
        const tNode = nodes[pkt.targetIdx];
        if (sNode && tNode) {
          const px = sNode.x + (tNode.x - sNode.x) * pkt.progress;
          const py = sNode.y + (tNode.y - sNode.y) * pkt.progress;

          ctx.fillStyle = currentMode === 'signal' ? '#FCD34D' : '#FFFFFF';
          ctx.beginPath();
          ctx.arc(px, py, pkt.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="growth-engine-canvas-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'auto', zIndex: 'var(--z-canvas)' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          cursor: 'crosshair'
        }}
        aria-hidden="true"
      />
    </div>
  );
}
