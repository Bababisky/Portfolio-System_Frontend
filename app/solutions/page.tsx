/**
 * Solutions List Page
 * Display all solutions
 */

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { getAllPublishedSolutions } from '@/lib/mockData';
import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = getAllPublishedSolutions();

  return (
    <>
      <PageTransition>
        {/* Header */}
        <section className="section-padding pt-32 pb-16">
          <div className="container-custom max-w-6xl text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Our Solutions
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Explore our comprehensive range of enterprise solutions
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <ScrollReveal key={solution.id} delay={index * 0.1}>
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="block border border-neutral-200 rounded-lg p-8 hover:border-primary-500 hover:shadow-xl transition-all group"
                  >
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                      {solution.name}
                    </h2>
                    <p className="text-neutral-600 mb-4">
                      {solution.description}
                    </p>
                    <div className="text-primary-600 font-medium group-hover:translate-x-1 transition-transform inline-block">
                      View offerings →
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
