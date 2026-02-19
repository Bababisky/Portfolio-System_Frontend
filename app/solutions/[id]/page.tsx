/**
 * Solution Detail Page
 */

'use client';

import { useState } from 'react';
import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

// Solution data
const solutionsData = [
  {
    id: 1,
    name: 'Cloud and Infrastructure Modernization',
    shortDescription: 'ยกระดับระบบโครงสร้างพื้นฐานทาง IT ของธุรกิจ ผสานระบบ Cloud และ On-Premises สู่ Hybrid Multi-Cloud',
    fullDescription: `In today's ever-evolving business landscape, technology stands as the cornerstone supporting every facet of operations. Infrastructure systems, whether they reside in the Cloud or On-Premises, now serve as the critical backbone that ensures the seamless and stable progression of technological pursuits. This, in turn, guarantees the uninterrupted and efficient performance of Business Applications and Digital Services, which are pivotal to business success, ensuring they yield the maximum return on investment.

Yip In Tsoi is a recognized expert in delivering comprehensive IT solutions tailored for Thai enterprises, with extensive experience in the field. We stand ready to assist in elevating IT infrastructure to a new level, aligning with the Hybrid Multi-Cloud model to meet the evolving demands of today's business landscape. Our solutions, encompassing Cloud and Infrastructure Modernization, not only leverage cutting-edge technology and innovative concepts but also come with a team of seasoned professionals. These experts possess the skills to carefully plan, design, select, implement, integrate, train, and maintain the system, ensuring it operates at its maximum potential. We are dedicated to assisting you in achieving the utmost efficiency and productivity in IT operations.`,
    offerings: [
      {
        name: 'Cloud Migration',
        tag: 'Cloud Modernization',
        description: 'The Cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
        partners: ['AWS', 'Google Cloud', 'ORACLE', 'NetApp']
      },
      {
        name: 'Cloud Management',
        tag: 'Cloud Infrastructure',
        description: 'While the concept of Cloud computing may present the idea of an on-demand convenience for eliminating the need for manual administration of back-end IT systems, the actual use of Cloud services comes with many challenges.',
        partners: ['AWS', 'Google Cloud', 'Microsoft']
      }
    ]
  },
  {
    id: 2,
    name: 'Cyber Security',
    shortDescription: 'Augment security for the Cloud, Data Center, devices, and users across the organization',
    fullDescription: 'Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity.',
    offerings: []
  },
  {
    id: 3,
    name: 'Digital Business Solutions',
    shortDescription: 'Transform into Digital Business and confidently pursue Digital Transformation',
    fullDescription: 'End-to-end digital transformation solutions to modernize your business operations.',
    offerings: []
  },
  {
    id: 4,
    name: 'Data Analytic & AI Solutions',
    shortDescription: 'Turning business data into value, laying the foundation for data management',
    fullDescription: 'Advanced analytics and AI solutions to unlock insights from your data.',
    offerings: []
  },
  {
    id: 5,
    name: 'Financial & Banking Services',
    shortDescription: 'Unlock the potential of the finance and banking business',
    fullDescription: 'Specialized solutions for financial services and banking sector.',
    offerings: []
  },
  {
    id: 6,
    name: 'Professional Service',
    shortDescription: 'Ensure continuous agility in managing and maintaining your IT systems',
    fullDescription: 'Comprehensive 24x7 professional services for IT operations.',
    offerings: []
  },
  {
    id: 7,
    name: 'CNS : Communication Navigation Surveillance',
    shortDescription: 'Communication systems, air navigation systems and aircraft surveillance system',
    fullDescription: 'Essential systems for pilots and air traffic controllers to facilitate safe aviation operations.',
    offerings: []
  },
  {
    id: 8,
    name: 'Media Innovation',
    shortDescription: 'Virtual Reality Production for creative content',
    fullDescription: 'Innovative media production solutions using virtual reality technology.',
    offerings: []
  }
];

export default function SolutionDetailPage({ params }: { params: { id: string } }) {
  const solutionId = parseInt(params.id);
  const solution = solutionsData.find(s => s.id === solutionId);
  const [expandedOffering, setExpandedOffering] = useState<number | null>(null);

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-neutral-100 to-neutral-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {solutionId}. {solution.name}
                </h1>
                <p className="text-xl text-neutral-700">
                  {solution.shortDescription}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  {solution.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-neutral-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar - Pattern Image */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={0.2}>
                <div className="sticky top-24 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg p-8 h-96">
                  <div className="w-full h-full flex items-center justify-center text-neutral-400">
                    {/* Pattern placeholder */}
                    <div className="text-center">
                      <div className="text-6xl mb-4">☁️</div>
                      <p className="text-sm">Infrastructure Pattern</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      {solution.offerings.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12">Our Offerings</h2>
            </ScrollReveal>

            <div className="space-y-8">
              {solution.offerings.map((offering, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    {/* Card Header - Always visible */}
                    <div className="p-8">
                      <div className="flex items-start gap-8">
                        {/* Image placeholder */}
                        <div className="w-64 h-48 bg-neutral-200 rounded-lg flex-shrink-0">
                          <div className="w-full h-full flex items-center justify-center text-neutral-400">
                            <span className="text-sm">{offering.name}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-1 bg-red-100 text-red-600 text-sm rounded-full font-medium">
                              {offering.tag}
                            </span>
                            <div className="ml-auto">
                              <button 
                                onClick={() => setExpandedOffering(expandedOffering === index ? null : index)}
                                className="px-4 py-1 bg-neutral-200 text-neutral-700 text-sm rounded flex items-center gap-2 hover:bg-neutral-300 transition-colors"
                              >
                                Cloud
                                <svg 
                                  className={`w-4 h-4 transition-transform ${expandedOffering === index ? 'rotate-180' : ''}`}
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{offering.name}</h3>
                          <div className="flex flex-wrap gap-3">
                            {offering.partners.map((partner, i) => (
                              <span key={i} className="text-sm font-medium text-neutral-700 px-3 py-1 bg-neutral-100 rounded">
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content - Dropdown */}
                    {expandedOffering === index && (
                      <div className="px-8 pb-8 border-t border-neutral-200 bg-neutral-50">
                        <div className="pt-6">
                          <p className="text-neutral-700 leading-relaxed mb-6">
                            {offering.description}
                          </p>
                          <Link 
                            href={`/products/${index + 1}`}
                            className="inline-block w-full py-3 bg-neutral-300 text-neutral-800 text-center font-medium rounded hover:bg-neutral-400 transition-colors"
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Contact us to learn more about how we can help transform your business
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
