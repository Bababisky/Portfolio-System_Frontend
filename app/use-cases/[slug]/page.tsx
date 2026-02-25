/**
 * Use Case Detail Page
 */

'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function UseCaseDetailPage({ params }: PageProps) {
  const useCaseSlug = params.slug;

  const useCaseData: Record<string, any> = {
    'migrate-legacy-on-premise-to-aws': {
      title: 'Migrate Legacy On-Premise Application to AWS',
      date: '01 Jan 2026',
      tags: ['Cloud Modernization', 'Cloud'],
      actors: [
        'IT Admin',
        'Cloud Engineer',
        'DevOps Engineer'
      ],
      problem: [
        'ระบบอยู่ On-Premise maintenance สูง',
        'Scale ไม่ได้',
        'Downtime บ่อย'
      ],
      solution: [
        'ย้าย VM → EC2',
        'Database → RDS',
        'File → S3',
        'ใช้ AWS Migration Hub / DMS'
      ],
      outcome: [
        'ลดค่า infra ~30-50%',
        'เพิ่ม reliability',
        'Auto-scaling'
      ],
      certificates: [
        'AWS Certified Cloud Practitioner (10)'
      ],
      vendors: [
        { name: 'AWS', logo: '/images/logos/aws-logo.png', slug: 'aws' }
      ]
    }
  };

  const useCase = useCaseData[useCaseSlug] || {
    title: 'Use Case Not Found',
    date: '',
    tags: [],
    actors: [],
    problem: [],
    solution: [],
    outcome: [],
    certificates: [],
    vendors: []
  };

  return (
    <PageTransition>
      {/* Header with Breadcrumb */}
      <section className="pt-32 pb-8 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-neutral-600">
              <Link href="/" className="hover:underline">Our Work</Link>
              <span>/</span>
              <Link href="/use-cases" className="hover:underline">Use Cases</Link>
              <span>/</span>
              <span className="text-neutral-900">Migrate Legacy</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-0 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <div className="h-64 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 rounded-2xl"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Tags - Top Right */}
          <div className="absolute top-8 right-8 flex gap-3">
            {useCase.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-lg font-medium ${
                  index === 0
                    ? 'bg-white border border-red-600 text-neutral-700'
                    : 'bg-neutral-200 text-neutral-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <ScrollReveal>
            {/* Title and Date */}
            <h1 className="text-4xl font-bold mb-2">{useCase.title}</h1>
            <p className="text-neutral-500 mb-8">{useCase.date}</p>

            {/* Actors */}
            {useCase.actors.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Actors</h2>
                <ul className="list-disc list-inside space-y-2">
                  {useCase.actors.map((actor: string, index: number) => (
                    <li key={index} className="text-neutral-700">{actor}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Problem */}
            {useCase.problem.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Problem</h2>
                <ul className="list-disc list-inside space-y-2">
                  {useCase.problem.map((item: string, index: number) => (
                    <li key={index} className="text-neutral-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solution */}
            {useCase.solution.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Solution</h2>
                <ul className="list-disc list-inside space-y-2">
                  {useCase.solution.map((item: string, index: number) => (
                    <li key={index} className="text-neutral-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcome */}
            {useCase.outcome.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Outcome</h2>
                <ul className="list-disc list-inside space-y-2">
                  {useCase.outcome.map((item: string, index: number) => (
                    <li key={index} className="text-neutral-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Certificate Section */}
      {useCase.certificates.length > 0 && (
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-8">Certificate</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCase.certificates.map((cert: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white border border-neutral-200 rounded-full px-6 py-3 text-center"
                  >
                    <span className="font-semibold">{cert}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Vendors Section */}
      {useCase.vendors.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-8">Vendors</h2>
              <div className="flex gap-6">
                {useCase.vendors.map((vendor: any, index: number) => (
                  <Link key={index} href={`/partnership/${vendor.slug}`}>
                    <div className="w-32 h-24 bg-white border border-neutral-200 rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                      <img
                        src={vendor.logo}
                        alt={vendor.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-sm font-semibold">${vendor.name}</span>`;
                        }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
