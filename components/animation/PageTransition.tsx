'use client';

/**
 * PageTransition Component
 * 
 * Wraps page content with Framer Motion transitions
 * Usage: Wrap each page's content for smooth route transitions
 */

import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
