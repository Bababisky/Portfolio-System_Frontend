/**
 * Application Constants
 * Centralized configuration values
 */

export const SITE_CONFIG = {
  name: 'Enterprise Solutions',
  description: 'Comprehensive technology solutions and services',
  url: 'https://solutions.example.com',
  ogImage: '/images/og-image.jpg',
} as const;

export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
  ],
  footer: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
