/**
 * Search Page
 * Dedicated search page for solutions, products, and partners
 */

'use client';

import { useState } from 'react';
import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-center mb-8">Search</h1>
            
            {/* Search Input */}
            <div className="relative">
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12 bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-8 max-w-4xl">
          {searchQuery.length > 0 ? (
            <div className="space-y-8">
              {/* Solutions Results */}
              {filteredSolutions.length > 0 && (
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
              {filteredProducts.length > 0 && (
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
              {filteredPartners.length > 0 && (
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
              {filteredCaseStudies.length > 0 && (
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
              {filteredUseCases.length > 0 && (
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
              {filteredOtherPages.length > 0 && (
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
