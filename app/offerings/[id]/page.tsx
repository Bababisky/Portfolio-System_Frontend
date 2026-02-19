/**
 * Offering Detail Page
 * Shows offering details, services, vendors, and case studies
 */

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { getOfferingById, getSolutionById } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function OfferingDetailPage({ params }: PageProps) {
  const offering = getOfferingById(params.id);

  if (!offering || !offering.published) {
    notFound();
  }

  const solution = getSolutionById(offering.solutionId);

  return (
    <>
      <PageTransition>
        {/* Header */}
        <section className="section-padding pt-32 pb-16">
          <div className="container-custom max-w-5xl">
            <ScrollReveal>
              {/* Breadcrumb */}
              <div className="mb-8 flex items-center gap-2 text-sm text-neutral-600">
                <Link 
                  href="/"
                  className="hover:text-primary-600 transition-colors"
                >
                  Home
                </Link>
                <span>/</span>
                <Link 
                  href="/solutions"
                  className="hover:text-primary-600 transition-colors"
                >
                  Solutions
                </Link>
                {solution && (
                  <>
                    <span>/</span>
                    <Link 
                      href={`/solutions/${solution.id}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {solution.name}
                    </Link>
                  </>
                )}
                <span>/</span>
                <span className="text-neutral-900">{offering.name}</span>
              </div>

              {/* Solution Badge */}
              {solution && (
                <div className="mb-4">
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
                  >
                    {solution.name}
                  </Link>
                </div>
              )}

              {/* Offering Title */}
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {offering.name}
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-600 leading-relaxed">
                {offering.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {offering.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <div className="container-custom max-w-5xl">
          <div className="border-t border-neutral-200"></div>
        </div>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <ScrollReveal>
              <h2 className="text-2xl font-display font-bold mb-8">
                Services Included
              </h2>
              
              {offering.services.length > 0 ? (
                <div className="space-y-4">
                  {offering.services.map((service, index) => (
                    <ScrollReveal key={service.id} delay={index * 0.05}>
                      <div className="border-l-4 border-primary-500 pl-6 py-2">
                        <h3 className="text-lg font-semibold mb-2">
                          {service.name}
                        </h3>
                        <p className="text-neutral-600">
                          {service.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 italic">No services listed</p>
              )}
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <div className="container-custom max-w-5xl">
          <div className="border-t border-neutral-200"></div>
        </div>

        {/* Technology Partners Section */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <ScrollReveal>
              <h2 className="text-2xl font-display font-bold mb-8">
                Technology Partners
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {offering.vendors.map((vendor) => (
                  <Link
                    key={vendor.id}
                    href={`/vendors/${vendor.name.toLowerCase().replace(/\s+/g, '')}`}
                    className="border border-neutral-200 rounded-lg p-6 text-center hover:border-primary-500 transition-colors group"
                  >
                    <h3 className="font-semibold text-lg group-hover:text-primary-600 transition-colors">
                      {vendor.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        {offering.caseStudies.length > 0 && (
          <div className="container-custom max-w-5xl">
            <div className="border-t border-neutral-200"></div>
          </div>
        )}

        {/* Case Studies Section */}
        {offering.caseStudies.length > 0 && (
          <section className="section-padding">
            <div className="container-custom max-w-5xl">
              <ScrollReveal>
                <h2 className="text-2xl font-display font-bold mb-8">
                  Case Studies
                </h2>
                
                <div className="space-y-8">
                  {offering.caseStudies.map((caseStudy, index) => (
                    <ScrollReveal key={caseStudy.id} delay={index * 0.05}>
                      <div className="border border-neutral-200 rounded-lg p-8">
                        <h3 className="text-2xl font-semibold mb-2">
                          {caseStudy.title}
                        </h3>
                        <p className="text-sm text-neutral-500 mb-6">
                          {caseStudy.client} • {caseStudy.industry}
                        </p>
                        
                        <div className="space-y-4">
                          {caseStudy.challenge && (
                            <div>
                              <h4 className="font-semibold text-neutral-700 mb-2">Challenge</h4>
                              <p className="text-neutral-600">{caseStudy.challenge}</p>
                            </div>
                          )}
                          
                          {caseStudy.solution && (
                            <div>
                              <h4 className="font-semibold text-neutral-700 mb-2">Solution</h4>
                              <p className="text-neutral-600">{caseStudy.solution}</p>
                            </div>
                          )}
                          
                          {caseStudy.results && (
                            <div>
                              <h4 className="font-semibold text-neutral-700 mb-2">Results</h4>
                              <p className="text-neutral-600">{caseStudy.results}</p>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-6">
                          {caseStudy.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-5xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-display font-bold mb-4">
                Interested in this offering?
              </h2>
              <p className="text-neutral-600 mb-8">
                Contact our team to learn more
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Contact Us
                </Link>
                {solution && (
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="px-8 py-3 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:border-neutral-400 transition-colors"
                  >
                    Back to {solution.name}
                  </Link>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
