'use client';

/**
 * Header Component
 * 
 * Main navigation header
 * Usage: Root layout
 */

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { NAVIGATION } from '@/lib/constants';
import { fadeInDown } from '@/lib/animations';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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

  const handleLanguageChange = (lang: 'en' | 'th') => {
    setLanguage(lang);
    setIsLangOpen(false);
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
              src="/images/logos/logo.png" 
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
                {t('home')}
              </Link>
            </li>

            {/* Solution & Product with dropdown */}
            <li className="relative group">
              <button className={`text-base font-medium transition-colors flex items-center gap-1 ${
                pathname.startsWith('/solutions') ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
              }`}>
                {t('solutionsProduct')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown menu - will be implemented later */}
            </li>

            {/* About us with dropdown */}
            <li className="relative group">
              <button className={`text-base font-medium transition-colors flex items-center gap-1 ${
                pathname.startsWith('/about') ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
              }`}>
                {t('aboutUs')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown menu - will be implemented later */}
            </li>

            {/* Language */}
            <li className="relative">
              <div
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
                className="relative"
              >
                <button 
                  className="text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
                >
                  {/* Current Language Flag */}
                  <div className="flex items-center gap-2">
                    <img 
                      src={language === 'th' ? '/images/flags/flag-th.png' : '/images/flags/flag-en.png'}
                      alt={language.toUpperCase()}
                      className="w-8 h-6 rounded object-cover"
                    />
                    <span className="font-bold">{language.toUpperCase()}</span>
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown */}
                {isLangOpen && (
                  <div className="absolute right-0 mt-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-3">
                      {/* English Option */}
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors ${
                          language === 'en' ? 'bg-blue-50' : ''
                        }`}
                      >
                        <img 
                          src="/images/flags/flag-en.png"
                          alt="English"
                          className="w-10 h-8 rounded object-cover flex-shrink-0"
                        />
                        <span className={`text-2xl font-bold ${
                          language === 'en' ? 'text-blue-600' : 'text-neutral-700'
                        }`}>
                          EN
                        </span>
                      </button>

                      {/* Thai Option */}
                      <button
                        onClick={() => handleLanguageChange('th')}
                        className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors ${
                          language === 'th' ? 'bg-blue-50' : ''
                        }`}
                      >
                        <img 
                          src="/images/flags/flag-th.png"
                          alt="Thai"
                          className="w-10 h-8 rounded object-cover flex-shrink-0"
                        />
                        <span className={`text-2xl font-bold ${
                          language === 'th' ? 'text-blue-600' : 'text-neutral-700'
                        }`}>
                          TH
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
