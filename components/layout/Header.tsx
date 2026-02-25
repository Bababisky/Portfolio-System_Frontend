'use client';

/**
 * Header Component
 * 
 * Main navigation header
 * Usage: Root layout
 */

import { useState, useEffect } from 'react';
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
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isOurWorkOpen, setIsOurWorkOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { language, setLanguage, t } = useLanguage();

  // All partners data for search
  const allPartners = [
    'AWS', 'Apple', 'Dell', 'Google Cloud', 'ITI', 'Airfield', 'Cadex', 'Casper', 'Checkmarx',
    'Cisco', 'Codan', 'CrowdStrike', 'FIS', 'Forescout', 'Fortinet', 'Freedom', 'Frequentis',
    'GuardREC', 'HPE', 'Hitachi', 'HP', 'HPE Aruba', 'Huawei', 'IBM', 'Informatica', 'KAC',
    'Mandiant', 'Microsoft', 'Microsoft Azure', 'NetApp', 'Netka', 'Netskope', 'Nutanix',
    'NVIDIA', 'OpenMetadata', 'Oracle', 'Palo Alto', 'Park Air', 'Red Hat', 'Sangfor', 'SAS',
    'Splunk', 'Tableau', 'Tenable', 'Trend Micro', 'Veeam', 'Veritas', 'VMware',
    'Wolters Kluwer', 'YouYang', 'Zscaler'
  ];

  // Convert partner name to slug
  const partnerToSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '');
  };

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
              src="/images/logos/yip-logo.png" 
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
            <li className="relative">
              <div
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="relative"
              >
                <button className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith('/solutions') || pathname.startsWith('/products') ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
                }`}>
                  {t('solutionsProduct')}
                  <svg className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {isSolutionsOpen && (
                  <div className="absolute left-0 mt-0 pt-2 w-64 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-3">
                      <Link
                        href="/solutions/cloudandinfrastructuremodernization"
                        onClick={(e) => handleNavClick(e, '/solutions/cloudandinfrastructuremodernization')}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-semibold text-neutral-900">Cloud & Infrastructure</div>
                        <div className="text-sm text-neutral-600">Modernization Solutions</div>
                      </Link>
                      <Link
                        href="/solutions/cybersecurity"
                        onClick={(e) => handleNavClick(e, '/solutions/cybersecurity')}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-semibold text-neutral-900">Cyber Security</div>
                        <div className="text-sm text-neutral-600">Security Solutions</div>
                      </Link>
                      <Link
                        href="/solutions/digitalbusinesssolutions"
                        onClick={(e) => handleNavClick(e, '/solutions/digitalbusinesssolutions')}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-semibold text-neutral-900">Digital Business</div>
                        <div className="text-sm text-neutral-600">Transformation Solutions</div>
                      </Link>
                      <Link
                        href="/solutions/dataanalyticandaisolutions"
                        onClick={(e) => handleNavClick(e, '/solutions/dataanalyticandaisolutions')}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-semibold text-neutral-900">Data Analytics & AI</div>
                        <div className="text-sm text-neutral-600">AI Solutions</div>
                      </Link>
                      <Link
                        href="/solutions/financialandbankingservices"
                        onClick={(e) => handleNavClick(e, '/solutions/financialandbankingservices')}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-semibold text-neutral-900">Financial & Banking Services</div>
                        <div className="text-sm text-neutral-600">Banking Solutions</div>
                      </Link>
                      <Link
                        href="/solutions/professionalservice"
                        onClick={(e) => handleNavClick(e, '/solutions/professionalservice')}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-semibold text-neutral-900">Professional Service</div>
                        <div className="text-sm text-neutral-600">24x7 IT Services</div>
                      </Link>
                      <Link
                        href="/solutions/cns"
                        onClick={(e) => handleNavClick(e, '/solutions/cns')}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-semibold text-neutral-900">CNS</div>
                        <div className="text-sm text-neutral-600">Communication Navigation Surveillance</div>
                      </Link>
                      <Link
                        href="/solutions/mediainnovation"
                        onClick={(e) => handleNavClick(e, '/solutions/mediainnovation')}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-semibold text-neutral-900">Media Innovation</div>
                        <div className="text-sm text-neutral-600">Virtual Reality Production</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* Our Work with dropdown */}
            <li className="relative">
              <div
                onMouseEnter={() => setIsOurWorkOpen(true)}
                onMouseLeave={() => setIsOurWorkOpen(false)}
                className="relative"
              >
                <button className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith('/work') || pathname.startsWith('/case-studies') || pathname.startsWith('/use-cases') ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
                }`}>
                  Our Work
                  <svg className={`w-4 h-4 transition-transform ${isOurWorkOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {isOurWorkOpen && (
                  <div className="absolute left-0 mt-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-2">
                      <Link
                        href="/case-studies"
                        onClick={(e) => handleNavClick(e, '/case-studies')}
                        className="block px-4 py-2 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-medium text-neutral-900">Case Studies</div>
                      </Link>
                      <Link
                        href="/use-cases"
                        onClick={(e) => handleNavClick(e, '/use-cases')}
                        className="block px-4 py-2 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-medium text-neutral-900">Use Cases</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* About us with dropdown */}
            <li className="relative">
              <div
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
                className="relative"
              >
                <button className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith('/about') || pathname.startsWith('/certificate') || pathname.startsWith('/partnership') ? 'text-red-600' : 'text-neutral-600 hover:text-neutral-900'
                }`}>
                  {t('aboutUs')}
                  <svg className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {isAboutOpen && (
                  <div className="absolute left-0 mt-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-2">
                      <Link
                        href="/about"
                        onClick={(e) => handleNavClick(e, '/about')}
                        className="block px-4 py-2 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-medium text-neutral-900">About</div>
                      </Link>
                      <Link
                        href="/certificate"
                        onClick={(e) => handleNavClick(e, '/certificate')}
                        className="block px-4 py-2 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-medium text-neutral-900">Certificate</div>
                      </Link>
                      <Link
                        href="/partnership"
                        onClick={(e) => handleNavClick(e, '/partnership')}
                        className="block px-4 py-2 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="font-medium text-neutral-900">Partnership</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* Search Icon */}
            <li>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
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

      {/* Search Modal */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-32"
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-6 border-b border-neutral-200">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search solutions, products, vendors..."
                  className="flex-1 text-lg outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto p-4">
              {searchQuery.length > 0 ? (
                <div className="space-y-4">
                  {/* Solutions Results */}
                  {['cloudandinfrastructuremodernization', 'cybersecurity', 'digitalbusinesssolutions', 'dataanalyticandaisolutions', 'financialandbankingservices', 'professionalservice', 'cns', 'mediainnovation']
                    .filter(slug => slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((slug, index) => (
                      <Link
                        key={`solution-${index}`}
                        href={`/solutions/${slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="block p-4 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        <div className="text-sm text-red-600 font-medium mb-1">Solution</div>
                        <div className="font-semibold capitalize">{slug.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </Link>
                    ))}

                  {/* Products Results */}
                  {['cloudmigration', 'cloudmanagement', 'dataanalyticssolutions']
                    .filter(slug => slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((slug, index) => (
                      <Link
                        key={`product-${index}`}
                        href={`/products/${slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="block p-4 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        <div className="text-sm text-blue-600 font-medium mb-1">Product</div>
                        <div className="font-semibold capitalize">{slug.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </Link>
                    ))}

                  {/* Vendors Results */}
                  {allPartners
                    .filter(partner => partner.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((partner, index) => (
                      <Link
                        key={`vendor-${index}`}
                        href={`/partnership/${partnerToSlug(partner)}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="block p-4 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        <div className="text-sm text-green-600 font-medium mb-1">Partner</div>
                        <div className="font-semibold">{partner}</div>
                      </Link>
                    ))}

                  {/* No Results */}
                  {['cloudandinfrastructuremodernization', 'cybersecurity', 'digitalbusinesssolutions', 'dataanalyticandaisolutions', 'financialandbankingservices', 'professionalservice', 'cns', 'mediainnovation']
                    .filter(slug => slug.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 &&
                   ['cloudmigration', 'cloudmanagement', 'dataanalyticssolutions']
                    .filter(slug => slug.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 &&
                   allPartners.filter(partner => partner.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                    <div className="text-center py-8 text-neutral-400">
                      <p>No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-neutral-400">
                  <p>Start typing to search...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
