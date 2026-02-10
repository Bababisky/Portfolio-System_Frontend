/**
 * Application Constants
 * Centralized configuration values
 */

export const SITE_CONFIG = {
  name: 'Portfolio System',
  description: 'Showcasing our best work and talented teams',
  url: 'https://portfolio.example.com',
  ogImage: '/images/og-image.jpg',
} as const;

export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Works', href: '/works' },
    { label: 'Teams', href: '/teams' },
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
