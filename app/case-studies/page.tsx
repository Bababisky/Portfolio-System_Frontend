/**
 * Case Studies Page
 * Shows all case studies with university logos and names
 */

'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

export default function CaseStudiesPage() {
  // Case studies data
  const caseStudies = [
    {
      id: 1,
      slug: 'khon-kaen-university',
      name: 'Khon Kaen University',
      logo: '/images/logos/kku-logo.png',
      isLocked: false
    },
    {
      id: 2,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 3,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 4,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 5,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 6,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 7,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 8,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 9,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 10,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 11,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    },
    {
      id: 12,
      name: 'Case Study Name',
      logo: null,
      isLocked: true
    }
  ];

  return (
    <PageTransition>
      {/* Header with Breadcrumb */}
      <section className="pt-32 pb-8 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-neutral-600">
              <Link 
                href="/"
                className="text-red-600 hover:underline"
              >
                Our Work
              </Link>
              <span>/</span>
              <span className="text-neutral-900">Case Studies</span>
            </div>

            {/* Page Title */}
            <h1 className="text-5xl font-bold text-center mb-12">Case Studies</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.id} delay={index * 0.03}>
                {study.isLocked ? (
                  <div className="bg-white border border-neutral-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {study.name}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <Link href={`/case-studies/${study.slug}`}>
                    <div className="bg-white border border-neutral-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img
                            src={study.logo || ''}
                            alt={study.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <h3 className="text-sm font-semibold text-neutral-900">
                          {study.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
