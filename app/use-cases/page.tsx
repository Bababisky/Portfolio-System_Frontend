/**
 * Use Cases Page
 * Shows all use cases
 */

'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

export default function UseCasesPage() {
  const useCases = [
    {
      id: 1,
      slug: 'migrate-legacy-on-premise-to-aws',
      title: 'Migrate Legacy On-Premise Application to AWS',
      description: 'Application → EC2, Database → RDS, File → S3'
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
              <Link href="/" className="text-red-600 hover:underline">Our Work</Link>
              <span>/</span>
              <span className="text-neutral-900">Use Cases</span>
            </div>

            {/* Page Title */}
            <h1 className="text-5xl font-bold text-center mb-12">Use Cases</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={useCase.id} delay={index * 0.1}>
                <Link href={`/use-cases/${useCase.slug}`}>
                  <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-neutral-600 text-sm">{useCase.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
