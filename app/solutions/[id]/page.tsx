/**
 * Solution Detail Page
 * Shows offerings, services, vendors, and case studies
 */

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { getSolutionById, getOfferingsBySolution, getAllPublishedCaseStudies } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const solution = getSolutionById(params.id);

  if (!solution || !solution.published) {
    notFound();
  }

  const offerings = getOfferingsBySolution(solution.id);
  
  // Get all vendors from offerings
  const allVendors = Array.from(
    new Map(
      offerings.flatMap(o => o.vendors).map(v => [v.id, v])
    ).values()
  );
  
  // Get all case studies related to this solution's offerings
  const relatedCaseStudies = getAllPublishedCaseStudies().filter(cs =>
    cs.offeringIds.some(offId => offerings.some(o => o.id === offId))
  );

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
                <span>/</span>
                <span className="text-neutral-900">{solution.name}</span>
              </div>

              {/* Solution Title */}
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {solution.name}
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-600 leading-relaxed">
                {solution.description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <div className="container-custom max-w-5xl">
          <div className="border-t border-neutral-200"></div>
        </div>

        {/* Offerings Section */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <ScrollReveal>
              <h2 className="text-2xl font-display font-bold mb-8">
                Service Offerings
              </h2>
              
              {offerings.length > 0 ? (
                <div className="space-y-6">
                  {offerings.map((offering, index) => (
                    <ScrollReveal key={offering.id} delay={index * 0.05}>
                      <Link
                        href={`/offerings/${offering.id}`}
                        className="block border border-neutral-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                              {offering.name}
                            </h3>
                            <p className="text-neutral-600 mb-4">
                              {offering.shortDescription}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {offering.tags.slice(0, 4).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="ml-4 text-primary-500 group-hover:translate-x-1 transition-transform">
                            →
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 italic">No offerings available</p>
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
              
              {allVendors.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {allVendors.map((vendor) => (
                    <Link
                      key={vendor.id}
                      href={`/vendors/${vendor.id}`}
                      className="border border-neutral-200 rounded-lg p-6 text-center hover:border-primary-500 transition-colors group"
                    >
                      <h3 className="font-semibold text-lg group-hover:text-primary-600 transition-colors">
                        {vendor.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 italic">No partners listed</p>
              )}
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        {relatedCaseStudies.length > 0 && (
          <div className="container-custom max-w-5xl">
            <div className="border-t border-neutral-200"></div>
          </div>
        )}

        {/* Case Studies Section */}
        {relatedCaseStudies.length > 0 && (
          <section className="section-padding">
            <div className="container-custom max-w-5xl">
              <ScrollReveal>
                <h2 className="text-2xl font-display font-bold mb-8">
                  Case Studies
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedCaseStudies.map((caseStudy, index) => (
                    <ScrollReveal key={caseStudy.id} delay={index * 0.05}>
                      <div className="border border-neutral-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
                        <h3 className="text-lg font-semibold mb-2">
                          {caseStudy.title}
                        </h3>
                        <p className="text-sm text-neutral-500 mb-3">
                          {caseStudy.industry}
                        </p>
                        <p className="text-neutral-600 mb-4">
                          {caseStudy.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs"
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
      </PageTransition>
    </>
  );
}
