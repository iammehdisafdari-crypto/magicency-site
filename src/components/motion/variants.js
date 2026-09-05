import { EASING, DURATION, STAGGER } from './motionConfig';

/**
 * =========================================================
 * STANDARDIZED FRAMER MOTION VARIANTS
 * Premium editorial motion inspired by vividmotion.co
 * =========================================================
 */

// 1. MASKED LINE REVEAL (For Major Headings & Hero Titles)
// Each line starts below its visible clipping area: translateY(110%) -> 0, opacity: 0 -> 1
// The physical upward movement drives the reveal with fast initial acceleration and smooth deceleration.
export const maskedLineVariants = {
  hidden: {
    y: '110%',
    opacity: 0
  },
  visible: (custom = {}) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: custom.duration || DURATION.HEADLINE,
      delay: custom.delay || 0,
      ease: EASING.MOMENTUM
    }
  })
};

// 2. BODY COPY REVEAL (Subtle & Quiet: y: 8px -> 0, opacity: 0 -> 1, duration: 0.5-0.7s)
export const bodyTextVariants = {
  hidden: {
    opacity: 0,
    y: 8
  },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || DURATION.BODY,
      delay: custom.delay || 0,
      ease: EASING.PRIMARY
    }
  })
};

// Backwards-compatible alias for existing imports
export const editorialVariants = {
  hidden: {
    opacity: 0,
    y: 14
  },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || DURATION.BODY,
      delay: custom.delay || 0,
      ease: EASING.PRIMARY
    }
  })
};

// 3. SECTION LABELS & METADATA (y: 8px -> 0, opacity: 0 -> 1, duration: 0.4-0.5s)
export const labelVariants = {
  hidden: {
    opacity: 0,
    y: 8
  },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || DURATION.LABEL,
      delay: custom.delay || 0,
      ease: EASING.SECONDARY
    }
  })
};

// 4. CINEMATIC IMAGE / VISUAL REVEAL (scale: 1.06 -> 1, y: 10px -> 0, opacity: 0 -> 1, duration: 1.0-1.2s)
export const cinematicImageVariants = {
  hidden: {
    scale: 1.06,
    y: 10,
    opacity: 0
  },
  visible: (custom = {}) => ({
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: custom.duration || DURATION.IMAGE,
      delay: custom.delay || 0,
      ease: EASING.CINEMATIC
    }
  })
};

export const imageMaskVariants = {
  hidden: {
    clipPath: 'inset(100% 0% 0% 0%)',
    opacity: 0
  },
  visible: (custom = {}) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: {
      duration: custom.duration || DURATION.IMAGE,
      delay: custom.delay || 0,
      ease: EASING.CINEMATIC
    }
  })
};

export const imageInnerVariants = {
  hidden: {
    scale: 1.06
  },
  visible: (custom = {}) => ({
    scale: 1,
    transition: {
      duration: (custom.duration || DURATION.IMAGE) + 0.15,
      delay: custom.delay || 0,
      ease: EASING.CINEMATIC
    }
  })
};

// 5. STAGGER CONTAINER (Parent orchestrator)
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger || STAGGER.NORMAL,
      delayChildren: custom.delay || 0
    }
  })
};

// 6. BUTTON MICRO-INTERACTIONS (default translateY(0), hover translateY(-2px), scale: 1.015, transition 250ms)
export const buttonMotion = {
  rest: {
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: EASING.SECONDARY }
  },
  whileHover: {
    y: -2,
    scale: 1.015,
    transition: { duration: 0.25, ease: EASING.SECONDARY }
  },
  whileTap: {
    y: 0,
    scale: 0.985,
    transition: { duration: 0.12, ease: EASING.SECONDARY }
  }
};

// 7. ARROW / ICON MICRO-INTERACTIONS (translateX(0) -> translateX(4px))
export const arrowMotion = {
  rest: {
    x: 0,
    transition: { duration: 0.25, ease: EASING.SECONDARY }
  },
  hover: {
    x: 4,
    transition: { duration: 0.25, ease: EASING.SECONDARY }
  }
};

// 8. CARD HOVER
export const cardHoverMotion = {
  rest: {
    y: 0,
    transition: { duration: 0.35, ease: EASING.SECONDARY }
  },
  hover: {
    y: -3,
    transition: { duration: 0.35, ease: EASING.SECONDARY }
  }
};
