/**
 * =========================================================
 * MAGICENCY GLOBAL MOTION SYSTEM — CENTRAL TOKENS & TIMINGS
 * Inspired by the motion language of vividmotion.co
 * =========================================================
 */

// Precision Editorial Easing Curves
export const EASING = {
  // Primary editorial curve (smooth deceleration, confident settling)
  // cubic-bezier(0.22, 1, 0.36, 1)
  PRIMARY: [0.22, 1, 0.36, 1],
  EDITORIAL: [0.22, 1, 0.36, 1],

  // Typographic momentum curve: fast initial acceleration + smooth inertial deceleration
  MOMENTUM: [0.19, 1, 0.22, 1],

  // Smooth continuous settling
  SMOOTH: [0.25, 0.1, 0.25, 1],

  // Secondary agile curve (for hover, quick transitions, micro-interactions)
  SECONDARY: [0.16, 1, 0.3, 1],
  FAST_OUT: [0.16, 1, 0.3, 1],

  // Majestic cinematic curve (for masked image reveals, scale settling)
  CINEMATIC: [0.25, 1, 0.5, 1],

  // Soft elastic for cursor inertia / spring physics
  SPRING_PHYSICS: { stiffness: 140, damping: 20 },
  SPRING_LIGHT: { stiffness: 90, damping: 24 }
};

// Standardized Durations (in seconds)
export const DURATION = {
  FAST: 0.25,
  MICRO: 0.3,
  LABEL: 0.45,
  CTA: 0.5,
  BODY: 0.6,
  MEDIUM: 0.6,
  HEADLINE: 0.8,
  HERO_HEADLINE: 0.8,
  SLOW: 0.85,
  IMAGE: 1.2
};

// Stagger Delays (in seconds)
export const STAGGER = {
  TIGHT: 0.05,
  HEADLINE_LINE: 0.07, // 70ms between headline lines
  NORMAL: 0.07,
  SECTION_ELEMENTS: 0.08,
  RELAXED: 0.12,
  BODY_DELAY: 0.15 // 150ms delay after heading begins
};

// Viewport Intersection Settings
export const VIEWPORT = {
  once: true,
  amount: 0.2 // Trigger when ~15–25% enters viewport
};

// Unified Motion Config Object
export const motionConfig = {
  easing: EASING,
  duration: DURATION,
  stagger: STAGGER,
  viewport: VIEWPORT,
  viewportOnce: true,
  viewportAmount: 0.2
};

export default motionConfig;
