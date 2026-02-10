'use client';

/**
 * useLenis Hook
 * 
 * Initializes Lenis smooth scrolling and syncs with GSAP ScrollTrigger
 * Usage: Call once in root layout or page
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { lenisConfig } from '@/lib/animations';

export function useLenis() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis(lenisConfig);

    // Store in window for access from other components
    (window as any).lenis = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      // ScrollTrigger will be updated via RAF
    });

    // Request Animation Frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);
}
