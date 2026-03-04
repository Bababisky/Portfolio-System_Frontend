'use client';

/**
 * Header Component
 * Main navigation header
 */

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeInDown } from '@/lib/animations';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isOurWorkOpen, setIsOurWorkOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.stop();
      setTimeout(() => lenis.start(), 100);
    }
    router.push(href);
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={fadeInDown}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      <nav className="px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/logos/Yip-NEXT.png"
              alt="YIP IN TSOI"
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8">
            {/* Home */}
            <li>
              <Link
                href="/"
                onClick={(e) => handleNavClick(e, '/')}
                className={`text-base font-medium transition-colors ${
                  pathname === '/' ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Home
              </Link>
            </li>

            {/* Solution & Product */}
            <li className="relative">
              <div
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="relative"
              >
                <button className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith('/solutions') || pathname.startsWith('/products') ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
                }`}>
                  Solutions &amp; Product
                  <svg className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSolutionsOpen && (
                  <div className="absolute left-0 mt-0 pt-2 w-64 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-3">
                      {[
                        { href: '/solutions/cloudandinfrastructuremodernization', title: 'Cloud & Infrastructure', sub: 'Modernization Solutions' },
                        { href: '/solutions/cybersecurity', title: 'Cyber Security', sub: 'Security Solutions' },
                        { href: '/solutions/digitalbusinesssolutions', title: 'Digital Business', sub: 'Transformation Solutions' },
                        { href: '/solutions/dataanalyticandaisolutions', title: 'Data Analytics & AI', sub: 'AI Solutions' },
                        { href: '/solutions/financialandbankingservices', title: 'Financial & Banking Services', sub: 'Banking Solutions' },
                        { href: '/solutions/professionalservice', title: 'Professional Service', sub: '24x7 IT Services' },
                        { href: '/solutions/cns', title: 'CNS', sub: 'Communication Navigation Surveillance' },
                        { href: '/solutions/mediainnovation', title: 'Media Innovation', sub: 'Virtual Reality Production' },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                        >
                          <div className="font-semibold text-neutral-900">{item.title}</div>
                          <div className="text-sm text-neutral-600">{item.sub}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* Our Work */}
            <li className="relative">
              <div
                onMouseEnter={() => setIsOurWorkOpen(true)}
                onMouseLeave={() => setIsOurWorkOpen(false)}
                className="relative"
              >
                <button className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith('/case-studies') || pathname.startsWith('/use-cases') ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
                }`}>
                  Our Work
                  <svg className={`w-4 h-4 transition-transform ${isOurWorkOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOurWorkOpen && (
                  <div className="absolute left-0 mt-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-2">
                      <Link href="/case-studies" onClick={(e) => handleNavClick(e, '/case-studies')} className="block px-4 py-2 hover:bg-neutral-50 transition-colors">
                        <div className="font-medium text-neutral-900">Case Studies</div>
                      </Link>
                      <Link href="/use-cases" onClick={(e) => handleNavClick(e, '/use-cases')} className="block px-4 py-2 hover:bg-neutral-50 transition-colors">
                        <div className="font-medium text-neutral-900">Use Cases</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* About Us */}
            <li className="relative">
              <div
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
                className="relative"
              >
                <button className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith('/about') || pathname.startsWith('/certificate') || pathname.startsWith('/partnership') ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
                }`}>
                  About Us
                  <svg className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isAboutOpen && (
                  <div className="absolute left-0 mt-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-2">
                      <Link href="/about" onClick={(e) => handleNavClick(e, '/about')} className="block px-4 py-2 hover:bg-neutral-50 transition-colors">
                        <div className="font-medium text-neutral-900">About</div>
                      </Link>
                      <Link href="/certificate" onClick={(e) => handleNavClick(e, '/certificate')} className="block px-4 py-2 hover:bg-neutral-50 transition-colors">
                        <div className="font-medium text-neutral-900">Certificate</div>
                      </Link>
                      <Link href="/partnership" onClick={(e) => handleNavClick(e, '/partnership')} className="block px-4 py-2 hover:bg-neutral-50 transition-colors">
                        <div className="font-medium text-neutral-900">Partnership</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* Search Icon */}
            <li>
              <Link
                href="/search"
                className={`transition-colors ${
                  pathname === '/search' ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}