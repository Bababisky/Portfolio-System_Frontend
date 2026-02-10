'use client';

/**
 * Header Component
 * 
 * Main navigation header
 * Usage: Root layout
 */

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { NAVIGATION } from '@/lib/constants';
import { fadeInDown } from '@/lib/animations';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Stop Lenis smooth scroll immediately
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.stop();
      setTimeout(() => lenis.start(), 100);
    }
    
    // Navigate
    router.push(href);
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={fadeInDown}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="text-2xl font-display font-bold text-neutral-900 hover:text-primary-600 transition-colors"
          >
            Portfolio
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8">
            {NAVIGATION.main.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-base font-medium transition-colors relative ${
                      isActive
                        ? 'text-primary-600'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
