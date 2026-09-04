/**
 * =========================================================
 * MAGICENCY GLOBAL MOTION SYSTEM — CENTRAL TOKENS & TIMINGS
 * Reference-Driven Motion Architecture (Vivid Motion Inspired)
 * =========================================================
 */

// Easing Curves
export const EASING = {
  // Primary editorial curve (smooth deceleration, confident settling)
  PRIMARY: [0.22, 1, 0.36, 1],
  // Secondary agile curve (for hover, quick transitions, micro-interactions)
  SECONDARY: [0.16, 1, 0.3, 1],
  // Majestic cinematic curve (for mask reveals, large image zooms, intro handoff)
  CINEMATIC: [0.25, 1, 0.5, 1],
  // Soft elastic for cursor inertia / spring physics
  SPRING_PHYSICS: { stiffness: 140, damping: 20 },
  SPRING_LIGHT: { stiffness: 90, damping: 24 }
};

// Durations (in seconds)
export const DURATION = {
  FAST: 0.25,
  MEDIUM: 0.55,
  SLOW: 0.85,
  IMAGE: 1.05,
  HERO_HEADLINE: 0.95
};

// Stagger Delays (in seconds)
export const STAGGER = {
  TIGHT: 0.05,
  NORMAL: 0.08,
  RELAXED: 0.12
};

// Unified Motion Config Object
export const motionConfig = {
  easing: EASING,
  duration: DURATION,
  stagger: STAGGER,
  viewportOnce: true,
  viewportAmount: 0.2
};

export default motionConfig;
