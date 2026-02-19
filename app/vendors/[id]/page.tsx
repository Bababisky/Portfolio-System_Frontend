/**
 * Vendor Page
 * Shows vendor profile, related offerings, and case studies
 */

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { fetchVendorById } from '@/lib/api';
import { transformVendor } from '@/lib/vendorHelpers';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const vendorId = parseInt(params.id);
  
  if (isNaN(vendorId)) {
    return {
      title: 'Vendor Not Found',
    };
  }

  const apiVendor = await fetchVendorById(vendorId);

  if (!apiVendor) {
    return {
      title: 'Vendor Not Found',
    };
  }

  const vendor = transformVendor(apiVendor);

  return {
    title: `${vendor.name} | Technology Partner | YIP IN TSOI`,
    description: vendor.description || `Learn more about our partnership with ${vendor.name}`,
  };
}

export default async function VendorPage({ params }: PageProps) {
  const vendorId = parseInt(params.id);
  
  if (isNaN(vendorId)) {
    notFound();
  }

  const apiVendor = await fetchVendorById(vendorId);

  if (!apiVendor) {
    notFound();
  }

  const vendor = transformVendor(apiVendor);

  // TODO: Fetch related offerings and case studies from API when available
  const offerings: any[] = [];
  const caseStudies: any[] = [];

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
                <span className="text-neutral-900">Partners</span>
                <span>/</span>
                <span className="text-neutral-900">{vendor.name}</span>
              </div>

              {/* Vendor Title */}
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {vendor.name}
              </h1>

              {/* Description */}
              {vendor.description && (
                <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                  {vendor.description}
                </p>
              )}

              {/* Contact & Website */}
              <div className="flex flex-col sm:flex-row gap-4">
                {vendor.website && (
                  <a
                    href={vendor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Visit Website →
                  </a>
                )}
                {vendor.contactEmail && (
                  <a
                    href={`mailto:${vendor.contactEmail}`}
                    className="inline-block text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Contact: {vendor.contactEmail}
                  </a>
                )}
              </div>
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
                Related Offerings
              </h2>
              
              {offerings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {offerings.map((offering, index) => (
                    <ScrollReveal key={offering.id} delay={index * 0.05}>
                      <Link
                        href={`/offerings/${offering.id}`}
                        className="block border border-neutral-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
                      >
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                          {offering.name}
                        </h3>
                        <p className="text-neutral-600 mb-4">
                          {offering.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {offering.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-sm"
                            >
                              {tag}
                            </span>
                          ))}
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
        {caseStudies.length > 0 && (
          <div className="container-custom max-w-5xl">
            <div className="border-t border-neutral-200"></div>
          </div>
        )}

        {/* Case Studies Section */}
        {caseStudies.length > 0 && (
          <section className="section-padding">
            <div className="container-custom max-w-5xl">
              <ScrollReveal>
                <h2 className="text-2xl font-display font-bold mb-8">
                  Case Studies
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudies.map((caseStudy, index) => (
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
