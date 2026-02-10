'use client';

/**
 * useScrollToTop Hook
 * 
 * Scrolls to top on page load/refresh and route change
 * Usage: Call in layout or page component
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    // Use setTimeout to ensure it happens after Lenis animation
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      
      // Also try to reset Lenis scroll position if it exists
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    // Immediate scroll
    scrollToTop();
    
    // Delayed scroll to catch any race conditions
    const timer = setTimeout(scrollToTop, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);
}

