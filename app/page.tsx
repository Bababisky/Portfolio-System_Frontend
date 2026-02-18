/**
 * Homepage - Enterprise Solutions Platform
 * Landing page showcasing solutions
 */

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { HeroBackground } from '@/components/animation/HeroBackground';
import { getAllPublishedSolutions } from '@/lib/mockData';
import Link from 'next/link';

export default function HomePage() {
  const solutions = getAllPublishedSolutions();

  return (
    <>
      {/* Background Image */}
      <HeroBackground 
        imageSrc="/images/yip-in-tsoi-building.jpg"
        alt="Enterprise Background"
      />
      
      <PageTransition className="relative z-10">
        {/* Hero Section */}
        <section className="section-padding pt-32 pb-20">
          <div className="container-custom max-w-6xl text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-12">
                Comprehensive technology solutions and services to accelerate 
                your digital transformation journey
              </p>
              <Link
                href="/solutions"
                className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Explore Solutions
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
                Our Solutions
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <ScrollReveal key={solution.id} delay={index * 0.1}>
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="block border border-neutral-200 rounded-lg p-8 hover:border-primary-500 hover:shadow-xl transition-all group"
                  >
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {solution.shortDescription}
                    </p>
                    <div className="text-primary-600 font-medium group-hover:translate-x-1 transition-transform inline-block">
                      Learn more →
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-neutral-900 text-white">
          <div className="container-custom max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-neutral-300 mb-8">
                Let's discuss how our solutions can help you achieve your goals
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Contact Us
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
