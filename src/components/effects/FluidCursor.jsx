import React, { useEffect, useRef } from 'react';
import './FluidCursor.css';

/**
 * =========================================================
 * FLUID CURSOR COMPONENT
 * WebGL Fluid Simulation based on Pavel Dobryakov
 * Strictly Monochromatic #B82E0C (RGB: 184, 46, 12)
 * =========================================================
 */

// Strict Monochromatic #B82E0C Color Generator
function generateColor() {
  return {
    r: 184 / 255,
    g: 46 / 255,
    b: 12 / 255
  };
}

export default function FluidCursor({
  intensity = 0.6,
  splatRadius = 0.25,
  splatForce = 6000,
  className = ''
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Accessibility & Device Detection
    const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = (
      window.innerWidth < 992 ||
      'ontouchstart' in window ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
    );

    if (isReducedMotion || isTouch) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 2. WebGL Context initialization
    const gl = canvas.getContext('webgl2', { alpha: true, depth: false, antialias: false }) ||
               canvas.getContext('webgl', { alpha: true, depth: false, antialias: false });
    if (!gl) return;

    const isWebGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;

    // Extension support
    let halfFloat;
    let supportLinearFiltering;

    if (isWebGL2) {
      gl.getExtension('EXT_color_buffer_float');
      supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
    } else {
      halfFloat = gl.getExtension('OES_texture_half_float');
      supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
    }

    const internalFormat = isWebGL2 ? gl.RGBA16F : gl.RGBA;
    const format = gl.RGBA;
    const type = isWebGL2 ? gl.HALF_FLOAT : (halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE);
    const filter = supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    // 3. Adaptive Resolution Settings
    const isHighEnd = window.innerWidth >= 1200 && (navigator.hardwareConcurrency || 4) >= 4;
    const SIM_RESOLUTION = 128;
    const DYE_RESOLUTION = isHighEnd ? 1024 : 768;
    const DENSITY_DISSIPATION = 0.98;
    const VELOCITY_DISSIPATION = 0.98;
    const PRESSURE = 0.8;
    const PRESSURE_ITERATIONS = 20;
    const CURL = 30;

    // 4. GLSL Shaders
    const baseVertexShader = `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 uTexelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(uTexelSize.x, 0.0);
        vR = vUv + vec2(uTexelSize.x, 0.0);
        vT = vUv + vec2(0.0, uTexelSize.y);
        vB = vUv - vec2(0.0, uTexelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const clearShader = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float uValue;
      void main () {
        gl_FragColor = uValue * texture2D(uTexture, vUv);
      }
    `;

    const splatShader = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float uAspectRatio;
      uniform vec3 uColor;
      uniform vec2 uPoint;
      uniform float uRadius;
      void main () {
        vec2 p = vUv - uPoint.xy;
        p.x *= uAspectRatio;
        vec3 splat = exp(-dot(p, p) / uRadius) * uColor;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `;

    const advectionShader = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 uTexelSize;
      uniform float uDt;
      uniform float uDissipation;
      void main () {
        vec2 coord = vUv - uDt * texture2D(uVelocity, vUv).xy * uTexelSize;
        gl_FragColor = uDissipation * texture2D(uSource, coord);
        gl_FragColor.a = 1.0;
      }
    `;

    const divergenceShader = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `;

    const curlShader = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `;

    const vorticityShader = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float uCurlValue;
      uniform float uDt;
      void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= uCurlValue * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * uDt, 0.0, 1.0);
      }
    `;

    const pressureShader = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `;

    const gradientSubtractShader = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `;

    // Strictly Monochromatic #B82E0C Display Shader
    const displayShader = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform vec3 uMonochromeColor;
      uniform float uIntensityMultiplier;
      void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float d = max(c.r, max(c.g, c.b));
        
        // Strictly monochromatic #B82E0C with organic shading depth & luminous visibility against dark background
        vec3 fluidColor = uMonochromeColor * (1.0 + 0.55 * clamp(d, 0.0, 1.0));
        float alpha = smoothstep(0.005, 0.45, d) * uIntensityMultiplier;
        gl_FragColor = vec4(fluidColor, alpha);
      }
    `;

    // Shader compilation helpers
    function createShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile failed:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(vertexSource, fragmentSource) {
      const vertexShader = createShader(gl.VERTEX_SHADER, vertexSource);
      const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentSource);
      if (!vertexShader || !fragmentShader) return null;

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.warn('Program link failed:', gl.getProgramInfoLog(program));
        return null;
      }
      return program;
    }

    // Quad Buffer
    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    // Framebuffer Object (FBO) creation utility
    function createFBO(w, h, intFormat, fmt, tp, flt) {
      gl.activeTexture(gl.TEXTURE0);
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, flt);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, flt);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, intFormat, w, h, 0, fmt, tp, null);

      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      return {
        texture,
        fbo,
        width: w,
        height: h,
        texelSizeX: 1.0 / w,
        texelSizeY: 1.0 / h,
        attach(id) {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          return id;
        }
      };
    }

    function createDoubleFBO(w, h, intFormat, fmt, tp, flt) {
      let fbo1 = createFBO(w, h, intFormat, fmt, tp, flt);
      let fbo2 = createFBO(w, h, intFormat, fmt, tp, flt);
      return {
        width: w,
        height: h,
        texelSizeX: 1.0 / w,
        texelSizeY: 1.0 / h,
        get read() { return fbo1; },
        set read(val) { fbo1 = val; },
        get write() { return fbo2; },
        set write(val) { fbo2 = val; },
        swap() {
          const temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        }
      };
    }

    // Build programs
    const clearProg = createProgram(baseVertexShader, clearShader);
    const splatProg = createProgram(baseVertexShader, splatShader);
    const advectionProg = createProgram(baseVertexShader, advectionShader);
    const divergenceProg = createProgram(baseVertexShader, divergenceShader);
    const curlProg = createProgram(baseVertexShader, curlShader);
    const vorticityProg = createProgram(baseVertexShader, vorticityShader);
    const pressureProg = createProgram(baseVertexShader, pressureShader);
    const gradSubtractProg = createProgram(baseVertexShader, gradientSubtractShader);
    const displayProg = createProgram(baseVertexShader, displayShader);

    let density = createDoubleFBO(DYE_RESOLUTION, DYE_RESOLUTION, internalFormat, format, type, filter);
    let velocity = createDoubleFBO(SIM_RESOLUTION, SIM_RESOLUTION, internalFormat, format, type, filter);
    let divergence = createFBO(SIM_RESOLUTION, SIM_RESOLUTION, internalFormat, format, type, gl.NEAREST);
    let curl = createFBO(SIM_RESOLUTION, SIM_RESOLUTION, internalFormat, format, type, gl.NEAREST);
    let pressure = createDoubleFBO(SIM_RESOLUTION, SIM_RESOLUTION, internalFormat, format, type, gl.NEAREST);

    let cachedRect = null;
    const getRect = () => {
      if (!cachedRect) {
        cachedRect = container.getBoundingClientRect();
      }
      return cachedRect;
    };
    const invalidateRect = () => {
      cachedRect = null;
    };

    // Resize Handler
    const updateSize = (entries) => {
      invalidateRect();
      let width, height;
      if (entries && entries[0] && entries[0].contentRect) {
        width = entries[0].contentRect.width;
        height = entries[0].contentRect.height;
      } else {
        width = container.clientWidth || window.innerWidth;
        height = container.clientHeight || window.innerHeight;
      }
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const pixelWidth = Math.max(1, Math.floor(width * dpr));
      const pixelHeight = Math.max(1, Math.floor(height * dpr));

      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);
    window.addEventListener('scroll', invalidateRect, { passive: true });
    window.addEventListener('resize', invalidateRect, { passive: true });

    // Blit helper
    function blit(target) {
      if (target == null) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      } else {
        gl.viewport(0, 0, target.width, target.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    }

    // Splat injection function (strictly monochromatic #B82E0C)
    function splat(x, y, dx, dy) {
      const monoColor = generateColor();

      // 1. Velocity splat
      gl.useProgram(splatProg);
      gl.uniform1i(gl.getUniformLocation(splatProg, 'uTarget'), velocity.read.attach(0));
      gl.uniform1f(gl.getUniformLocation(splatProg, 'uAspectRatio'), canvas.width / canvas.height);
      gl.uniform2f(gl.getUniformLocation(splatProg, 'uPoint'), x, y);
      gl.uniform3f(gl.getUniformLocation(splatProg, 'uColor'), dx, dy, 0.0);
      gl.uniform1f(gl.getUniformLocation(splatProg, 'uRadius'), splatRadius / 100.0);
      blit(velocity.write);
      velocity.swap();

      // 2. Density splat using strictly monochromatic #B82E0C
      gl.uniform1i(gl.getUniformLocation(splatProg, 'uTarget'), density.read.attach(0));
      gl.uniform3f(gl.getUniformLocation(splatProg, 'uColor'), monoColor.r, monoColor.g, monoColor.b);
      blit(density.write);
      density.swap();
    }

    // Mouse Tracking scoped strictly to this container's bounding rectangle
    const mouse = {
      prevX: 0,
      prevY: 0,
      isInside: false,
      lastActiveTime: performance.now()
    };

    // IntersectionObserver & Visibility to pause simulation when offscreen or tab hidden
    let isVisible = true;
    let isTabVisible = document.visibilityState !== 'hidden';
    let isRunning = false;

    const startLoop = () => {
      if (!isRunning && isVisible && isTabVisible) {
        isRunning = true;
        lastTime = performance.now();
        animId = requestAnimationFrame(step);
      }
    };

    const stopLoop = () => {
      if (isRunning) {
        isRunning = false;
        cancelAnimationFrame(animId);
      }
    };

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState !== 'hidden';
      if (isTabVisible && isVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const visibilityObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      isVisible = Boolean(entry && entry.isIntersecting);
      if (isVisible && isTabVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    }, { threshold: 0 });
    visibilityObserver.observe(container);

    const handleMouseMove = (e) => {
      const rect = getRect();
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );

      if (!isInside) {
        mouse.isInside = false;
        return;
      }

      // Calculate coordinates relative to container's bounding rectangle
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      if (!mouse.isInside) {
        mouse.prevX = x;
        mouse.prevY = y;
        mouse.isInside = true;
      }

      const dx = (x - mouse.prevX) * splatForce;
      const dy = (y - mouse.prevY) * splatForce;
      const speed = Math.hypot(dx, dy);

      if (speed > 0.01) {
        mouse.lastActiveTime = performance.now();
        splat(x, y, dx, dy);
        startLoop();
      }

      mouse.prevX = x;
      mouse.prevY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Main Simulation Step Loop
    let animId;
    let lastTime = performance.now();
    const monoColorUniform = [184 / 255, 46 / 255, 12 / 255];

    function step(currentTime) {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      const dt = Math.min((currentTime - lastTime) / 1000, 0.016);
      lastTime = currentTime;

      const timeSinceActive = currentTime - mouse.lastActiveTime;

      // Only compute simulation when active or recently active to ensure 100% efficiency
      if (timeSinceActive < 3500 || mouse.isInside) {
        gl.disable(gl.BLEND);

        // 1. Curl
        gl.useProgram(curlProg);
        gl.uniform2f(gl.getUniformLocation(curlProg, 'uTexelSize'), velocity.read.texelSizeX, velocity.read.texelSizeY);
        gl.uniform1i(gl.getUniformLocation(curlProg, 'uVelocity'), velocity.read.attach(0));
        blit(curl);

        // 2. Vorticity Confinement
        gl.useProgram(vorticityProg);
        gl.uniform2f(gl.getUniformLocation(vorticityProg, 'uTexelSize'), velocity.read.texelSizeX, velocity.read.texelSizeY);
        gl.uniform1i(gl.getUniformLocation(vorticityProg, 'uVelocity'), velocity.read.attach(0));
        gl.uniform1i(gl.getUniformLocation(vorticityProg, 'uCurl'), curl.attach(1));
        gl.uniform1f(gl.getUniformLocation(vorticityProg, 'uCurlValue'), CURL);
        gl.uniform1f(gl.getUniformLocation(vorticityProg, 'uDt'), dt);
        blit(velocity.write);
        velocity.swap();

        // 3. Divergence
        gl.useProgram(divergenceProg);
        gl.uniform2f(gl.getUniformLocation(divergenceProg, 'uTexelSize'), velocity.read.texelSizeX, velocity.read.texelSizeY);
        gl.uniform1i(gl.getUniformLocation(divergenceProg, 'uVelocity'), velocity.read.attach(0));
        blit(divergence);

        // 4. Clear Pressure
        gl.useProgram(clearProg);
        gl.uniform1i(gl.getUniformLocation(clearProg, 'uTexture'), pressure.read.attach(0));
        gl.uniform1f(gl.getUniformLocation(clearProg, 'uValue'), PRESSURE);
        blit(pressure.write);
        pressure.swap();

        // 5. Pressure Poisson Solver
        gl.useProgram(pressureProg);
        gl.uniform2f(gl.getUniformLocation(pressureProg, 'uTexelSize'), velocity.read.texelSizeX, velocity.read.texelSizeY);
        gl.uniform1i(gl.getUniformLocation(pressureProg, 'uDivergence'), divergence.attach(0));
        for (let i = 0; i < PRESSURE_ITERATIONS; i++) {
          gl.uniform1i(gl.getUniformLocation(pressureProg, 'uPressure'), pressure.read.attach(1));
          blit(pressure.write);
          pressure.swap();
        }

        // 6. Gradient Subtract (Project velocity)
        gl.useProgram(gradSubtractProg);
        gl.uniform2f(gl.getUniformLocation(gradSubtractProg, 'uTexelSize'), velocity.read.texelSizeX, velocity.read.texelSizeY);
        gl.uniform1i(gl.getUniformLocation(gradSubtractProg, 'uPressure'), pressure.read.attach(0));
        gl.uniform1i(gl.getUniformLocation(gradSubtractProg, 'uVelocity'), velocity.read.attach(1));
        blit(velocity.write);
        velocity.swap();

        // 7. Advect Velocity
        gl.useProgram(advectionProg);
        gl.uniform2f(gl.getUniformLocation(advectionProg, 'uTexelSize'), velocity.read.texelSizeX, velocity.read.texelSizeY);
        gl.uniform1i(gl.getUniformLocation(advectionProg, 'uVelocity'), velocity.read.attach(0));
        gl.uniform1i(gl.getUniformLocation(advectionProg, 'uSource'), velocity.read.attach(0));
        gl.uniform1f(gl.getUniformLocation(advectionProg, 'uDt'), dt);
        gl.uniform1f(gl.getUniformLocation(advectionProg, 'uDissipation'), VELOCITY_DISSIPATION);
        blit(velocity.write);
        velocity.swap();

        // 8. Advect Density (Dye)
        gl.uniform2f(gl.getUniformLocation(advectionProg, 'uTexelSize'), density.read.texelSizeX, density.read.texelSizeY);
        gl.uniform1i(gl.getUniformLocation(advectionProg, 'uVelocity'), velocity.read.attach(0));
        gl.uniform1i(gl.getUniformLocation(advectionProg, 'uSource'), density.read.attach(1));
        gl.uniform1f(gl.getUniformLocation(advectionProg, 'uDissipation'), DENSITY_DISSIPATION);
        blit(density.write);
        density.swap();

        // 9. Monochromatic Display Pass with Alpha Blending
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        gl.useProgram(displayProg);
        gl.uniform1i(gl.getUniformLocation(displayProg, 'uTexture'), density.read.attach(0));
        gl.uniform3fv(gl.getUniformLocation(displayProg, 'uMonochromeColor'), monoColorUniform);
        gl.uniform1f(gl.getUniformLocation(displayProg, 'uIntensityMultiplier'), intensity);
        blit(null);

        animId = requestAnimationFrame(step);
      } else {
        // Clear canvas once and stop loop until new activity
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        isRunning = false;
      }
    }

    startLoop();

    // Cleanup resources
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('scroll', invalidateRect);
      window.removeEventListener('resize', invalidateRect);
      window.removeEventListener('mousemove', handleMouseMove);
      stopLoop();

      // Clean WebGL buffers and textures
      gl.deleteBuffer(quadBuffer);
      const programs = [clearProg, splatProg, advectionProg, divergenceProg, curlProg, vorticityProg, pressureProg, gradSubtractProg, displayProg];
      programs.forEach(prog => {
        if (prog) gl.deleteProgram(prog);
      });
    };
  }, [intensity, splatRadius, splatForce]);

  return (
    <div ref={containerRef} className={`vm-fluid-cursor-container ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="vm-fluid-canvas" />
    </div>
  );
}
