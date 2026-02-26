/**
 * Search Page
 * Dedicated search page for solutions, products, and partners
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([
    'solutions', 'products', 'partners', 'caseStudies', 'useCases', 'pages'
  ]);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close filter panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

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

  // Solutions data
  const solutions = [
    { slug: 'cloudandinfrastructuremodernization', name: 'Cloud and Infrastructure Modernization' },
    { slug: 'cybersecurity', name: 'Cyber Security' },
    { slug: 'digitalbusinesssolutions', name: 'Digital Business Solutions' },
    { slug: 'dataanalyticandaisolutions', name: 'Data Analytic & AI Solutions' },
    { slug: 'financialandbankingservices', name: 'Financial & Banking Services' },
    { slug: 'professionalservice', name: 'Professional Service' },
    { slug: 'cns', name: 'CNS : Communication Navigation Surveillance' },
    { slug: 'mediainnovation', name: 'Media Innovation' }
  ];

  // Products data
  const products = [
    { slug: 'cloudmigration', name: 'Cloud Migration' },
    { slug: 'cloudmanagement', name: 'Cloud Management' },
    { slug: 'dataanalyticssolutions', name: 'Data Analytics Solutions' }
  ];

  // Case Studies data
  const caseStudies = [
    { slug: 'khon-kaen-university', name: 'Khon Kaen University' }
  ];

  // Use Cases data
  const useCases = [
    { slug: 'migrate-legacy-on-premise-to-aws', name: 'Migrate Legacy On-Premise Application to AWS' }
  ];

  // Other pages
  const otherPages = [
    { slug: '/about', name: 'About Us' },
    { slug: '/certificate', name: 'Certificate' },
    { slug: '/partnership', name: 'Partnership' }
  ];

  // Convert partner name to slug
  const partnerToSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '');
  };

  // Filter results
  const filteredSolutions = solutions.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPartners = allPartners.filter(p => 
    p.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCaseStudies = caseStudies.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUseCases = useCases.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOtherPages = otherPages.filter(o => 
    o.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredSolutions.length > 0 || 
                     filteredProducts.length > 0 || 
                     filteredPartners.length > 0 ||
                     filteredCaseStudies.length > 0 ||
                     filteredUseCases.length > 0 ||
                     filteredOtherPages.length > 0;

  const filterOptions = [
    { id: 'solutions', label: 'Solutions', count: filteredSolutions.length, color: 'red', bgColor: 'bg-red-100', textColor: 'text-red-600' },
    { id: 'products', label: 'Products', count: filteredProducts.length, color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { id: 'partners', label: 'Partners', count: filteredPartners.length, color: 'green', bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { id: 'caseStudies', label: 'Case Studies', count: filteredCaseStudies.length, color: 'purple', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
    { id: 'useCases', label: 'Use Cases', count: filteredUseCases.length, color: 'orange', bgColor: 'bg-orange-100', textColor: 'text-orange-600' },
    { id: 'pages', label: 'Pages', count: filteredOtherPages.length, color: 'neutral', bgColor: 'bg-neutral-100', textColor: 'text-neutral-600' }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-center mb-8">Search</h1>
            
            {/* Search Input with Filter Button */}
            <div className="relative" ref={filterRef}>
              <div className="flex items-center gap-4 bg-neutral-50 border-2 border-neutral-200 rounded-xl px-6 py-4 focus-within:border-red-500 transition-colors">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search solutions, products, partners..."
                  className="flex-1 text-lg outline-none bg-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {/* Filter Toggle Button */}
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`p-2 rounded-lg transition-colors ${
                    isFilterOpen ? 'bg-red-500 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-100'
                  }`}
                  aria-label="Toggle filters"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
              </div>

              {/* Filter Panel */}
              {isFilterOpen && (
                <div className="absolute top-full mt-2 right-0 w-80 bg-white rounded-xl shadow-2xl border border-neutral-200 z-50 overflow-hidden">
                  <div className="p-4 bg-neutral-50 border-b border-neutral-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">Filters</h3>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="p-1 hover:bg-neutral-200 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
                    {filterOptions.map((option) => (
                      <label
                        key={option.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={activeFilters.includes(option.id)}
                            onChange={() => toggleFilter(option.id)}
                            className="w-5 h-5 rounded border-neutral-300 text-red-500 focus:ring-red-500"
                          />
                          <span className="font-medium">{option.label}</span>
                        </div>
                        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${option.bgColor} ${option.textColor}`}>
                          {option.count}
                        </span>
                      </label>
                    ))}
                  </div>

                  <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex gap-2">
                    <button
                      onClick={() => setActiveFilters([])}
                      className="flex-1 px-4 py-2 text-sm font-medium text-neutral-600 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setActiveFilters(['solutions', 'products', 'partners', 'caseStudies', 'useCases', 'pages'])}
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Select All
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Active Filters Display */}
            {searchQuery.length > 0 && activeFilters.length < 6 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {filterOptions
                  .filter(opt => activeFilters.includes(opt.id))
                  .map(opt => (
                    <span
                      key={opt.id}
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${opt.bgColor} ${opt.textColor}`}
                    >
                      {opt.label}
                      <button
                        onClick={() => toggleFilter(opt.id)}
                        className="hover:bg-white/50 rounded-full p-0.5"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12 bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-8 max-w-4xl">
          {searchQuery.length > 0 ? (
            <div className="space-y-8">
              {/* Solutions Results */}
              {filteredSolutions.length > 0 && activeFilters.includes('solutions') && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">Solutions ({filteredSolutions.length})</h2>
                  <div className="space-y-3">
                    {filteredSolutions.map((solution, index) => (
                      <ScrollReveal key={index} delay={index * 0.05}>
                        <Link href={`/solutions/${solution.slug}`}>
                          <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-neutral-200">
                            <div className="text-sm text-red-600 font-medium mb-1">Solution</div>
                            <div className="font-semibold text-lg">{solution.name}</div>
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Results */}
              {filteredProducts.length > 0 && activeFilters.includes('products') && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600">Products ({filteredProducts.length})</h2>
                  <div className="space-y-3">
                    {filteredProducts.map((product, index) => (
                      <ScrollReveal key={index} delay={index * 0.05}>
                        <Link href={`/products/${product.slug}`}>
                          <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-neutral-200">
                            <div className="text-sm text-blue-600 font-medium mb-1">Product</div>
                            <div className="font-semibold text-lg">{product.name}</div>
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Partners Results */}
              {filteredPartners.length > 0 && activeFilters.includes('partners') && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-green-600">Partners ({filteredPartners.length})</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredPartners.map((partner, index) => (
                      <Link key={index} href={`/partnership/${partnerToSlug(partner)}`}>
                        <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-neutral-200">
                          <div className="text-sm text-green-600 font-medium mb-1">Partner</div>
                          <div className="font-semibold text-lg">{partner}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Studies Results */}
              {filteredCaseStudies.length > 0 && activeFilters.includes('caseStudies') && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-purple-600">Case Studies ({filteredCaseStudies.length})</h2>
                  <div className="space-y-3">
                    {filteredCaseStudies.map((caseStudy, index) => (
                      <Link key={index} href={`/case-studies/${caseStudy.slug}`}>
                        <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-neutral-200">
                          <div className="text-sm text-purple-600 font-medium mb-1">Case Study</div>
                          <div className="font-semibold text-lg">{caseStudy.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Use Cases Results */}
              {filteredUseCases.length > 0 && activeFilters.includes('useCases') && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-orange-600">Use Cases ({filteredUseCases.length})</h2>
                  <div className="space-y-3">
                    {filteredUseCases.map((useCase, index) => (
                      <Link key={index} href={`/use-cases/${useCase.slug}`}>
                        <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-neutral-200">
                          <div className="text-sm text-orange-600 font-medium mb-1">Use Case</div>
                          <div className="font-semibold text-lg">{useCase.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Pages Results */}
              {filteredOtherPages.length > 0 && activeFilters.includes('pages') && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-neutral-600">Pages ({filteredOtherPages.length})</h2>
                  <div className="space-y-3">
                    {filteredOtherPages.map((page, index) => (
                      <Link key={index} href={page.slug}>
                        <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-neutral-200">
                          <div className="text-sm text-neutral-600 font-medium mb-1">Page</div>
                          <div className="font-semibold text-lg">{page.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {!hasResults && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-xl text-neutral-400">No results found for "{searchQuery}"</p>
                  <p className="text-neutral-500 mt-2">Try searching with different keywords</p>
                </div>
              )}

              {/* No Results After Filtering */}
              {hasResults && 
               !activeFilters.includes('solutions') && 
               !activeFilters.includes('products') && 
               !activeFilters.includes('partners') &&
               !activeFilters.includes('caseStudies') &&
               !activeFilters.includes('useCases') &&
               !activeFilters.includes('pages') && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-xl text-neutral-400">All filters are disabled</p>
                  <p className="text-neutral-500 mt-2">Enable at least one filter to see results</p>
                </div>
              )}

              {/* Filtered Out Message */}
              {hasResults && activeFilters.length > 0 && 
               (activeFilters.includes('solutions') ? 0 : filteredSolutions.length) +
               (activeFilters.includes('products') ? 0 : filteredProducts.length) +
               (activeFilters.includes('partners') ? 0 : filteredPartners.length) +
               (activeFilters.includes('caseStudies') ? 0 : filteredCaseStudies.length) +
               (activeFilters.includes('useCases') ? 0 : filteredUseCases.length) +
               (activeFilters.includes('pages') ? 0 : filteredOtherPages.length) > 0 &&
               !(filteredSolutions.length > 0 && activeFilters.includes('solutions')) &&
               !(filteredProducts.length > 0 && activeFilters.includes('products')) &&
               !(filteredPartners.length > 0 && activeFilters.includes('partners')) &&
               !(filteredCaseStudies.length > 0 && activeFilters.includes('caseStudies')) &&
               !(filteredUseCases.length > 0 && activeFilters.includes('useCases')) &&
               !(filteredOtherPages.length > 0 && activeFilters.includes('pages')) && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-xl text-neutral-400">No results match your filters</p>
                  <p className="text-neutral-500 mt-2">Try enabling more filter categories</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔎</div>
              <p className="text-xl text-neutral-400">Start typing to search...</p>
              <p className="text-neutral-500 mt-2">Search for solutions, products, or partners</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
