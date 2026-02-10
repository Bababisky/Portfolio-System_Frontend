/**
 * Animation Configurations
 * Reusable Framer Motion variants and GSAP settings
 */

import { Variants } from 'framer-motion';

// ============================================
// FRAMER MOTION VARIANTS
// ============================================

/**
 * Fade in animation
 * Usage: General element reveals
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Fade in from bottom
 * Usage: Cards, sections entering viewport
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

/**
 * Fade in from top
 * Usage: Headers, navigation
 */
export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

/**
 * Scale in animation
 * Usage: Modals, popovers
 */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

/**
 * Slide in from left
 * Usage: Sidebars, drawers
 */
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

/**
 * Slide in from right
 * Usage: Sidebars, drawers
 */
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

/**
 * Stagger container
 * Usage: Parent of staggered children
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger item
 * Usage: Child elements in staggered animation
 */
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

/**
 * Page transition variants
 * Usage: PageTransition wrapper
 */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// ============================================
// GSAP CONFIGURATIONS
// ============================================

/**
 * Default GSAP scroll trigger config
 * Usage: ScrollReveal component
 */
export const defaultScrollTrigger = {
  start: 'top 90%',  // เริ่มเมื่อ element ปรากฏที่ 90% ของหน้าจอ
  end: 'top 20%',    // จบเมื่อ element อยู่ที่ 20% ของหน้าจอ
  toggleActions: 'play none none reverse',
};

/**
 * Parallax scroll config
 * Usage: Parallax component
 */
export const parallaxConfig = {
  start: 'top bottom',
  end: 'bottom top',
  scrub: 1,
};

/**
 * Smooth scroll config for Lenis
 * Usage: useLenis hook
 */
export const lenisConfig = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical' as const,
  gestureDirection: 'vertical' as const,
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
};

// ============================================
// TRANSITION EASINGS
// ============================================

export const easings = {
  easeInOut: [0.43, 0.13, 0.23, 0.96],
  easeOut: [0.19, 1.0, 0.22, 1.0],
  easeIn: [0.6, 0.04, 0.98, 0.34],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
} as const;
