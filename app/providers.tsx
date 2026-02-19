'use client';

/**
 * Providers Component
 * 
 * Client-side providers wrapper
 * Usage: Root layout
 */

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLenis } from '@/hooks/useLenis';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { LanguageProvider } from '@/contexts/LanguageContext';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Initialize Lenis smooth scroll
  useLenis();
  
  // Scroll to top on page load/refresh
  useScrollToTop();

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait" initial={false}>
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </LanguageProvider>
  );
}
