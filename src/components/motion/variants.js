import { EASING, DURATION, STAGGER } from './motionConfig';

/**
 * =========================================================
 * STANDARDIZED FRAMER MOTION VARIANTS
 * Built for precision, editorial elegance, and cinematic rhythm
 * =========================================================
 */

// 1. MASKED TEXT REVEAL (For Major Headings & Hero Titles)
export const maskedLineVariants = {
  hidden: {
    y: '115%',
    opacity: 0
  },
  visible: (custom = {}) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: custom.duration || DURATION.HERO_HEADLINE,
      delay: custom.delay || 0,
      ease: EASING.PRIMARY
    }
  })
};

// 2. EDITORIAL REVEAL (For Body copy, Eyebrows, Metadata, Subheadlines)
export const editorialVariants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || DURATION.MEDIUM,
      delay: custom.delay || 0,
      ease: EASING.SECONDARY
    }
  })
};

// 3. IMAGE REVEAL (Clip-path mask + subtle scale down)
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
    scale: 1.12
  },
  visible: (custom = {}) => ({
    scale: 1,
    transition: {
      duration: (custom.duration || DURATION.IMAGE) + 0.2,
      delay: custom.delay || 0,
      ease: EASING.CINEMATIC
    }
  })
};

// 4. STAGGER CONTAINER (Parent orchestrator)
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

// 5. BUTTON & LINK MICRO-INTERACTIONS
export const buttonMotion = {
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: EASING.SECONDARY }
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: EASING.SECONDARY }
  }
};

// 6. CARD HOVER
export const cardHoverMotion = {
  rest: {
    scale: 1,
    transition: { duration: 0.4, ease: EASING.SECONDARY }
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.4, ease: EASING.SECONDARY }
  }
};
