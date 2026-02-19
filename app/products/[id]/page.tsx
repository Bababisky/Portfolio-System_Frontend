/**
 * Product Detail Page
 */
'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

// Product data
const productsData = [
  {
    id: 1,
    name: 'Cloud Migration',
    tag: 'Cloud Modernization',
    description: 'The Cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand. Yip In Tsoi is well-prepared and ready to provide comprehensive Cloud Migration services.',
    services: [
      {
        name: 'IT Infrastructure Assessment',
        description: 'We conduct a comprehensive evaluation of systems earmarked for migration to the Cloud to select suitable technologies and optimize the system architecture for compatibility and peak performance within the Cloud environment.',
        implementation: 'implementation'
      },
      {
        name: 'Cloud Migration Planning & Testing',
        description: 'We plan the process of migrating systems and data to the Cloud, conducting essential tests to ensure seamless operation in the Cloud environment.',
        implementation: 'implementation',
        timeline: 'On-Plan in 2 week'
      },
      {
        name: 'Cloud Cost Projection',
        description: 'We estimate the cost associated with the Cloud migration, providing clarity on annual investment expenses and enabling the organization to make informed decisions.',
        implementation: 'implementation'
      },
      {
        name: 'Cloud Migration Service',
        description: 'We execute the migration to the Cloud as planned and assist in transitioning the new system to a Production-level operation. Simultaneously, we oversee the decommissioning of the systems previously used.',
        implementation: 'implementation'
      },
      {
        name: 'Cloud Monitoring & Maintenance',
        description: 'We provide 24x7 maintenance and monitoring services for various systems on the Cloud, promptly addressing any issues that may arise during operation.',
        implementation: 'implementation'
      }
    ],
    caseStudies: [
      'Mae Fah Luang University',
      'Mae Fah Luang University',
      'Mae Fah Luang University',
      'Mae Fah Luang University'
    ],
    certificates: [
      'AWS Certified Cloud Practitioner (10)',
      'AWS Certified AI Practitioner (2)'
    ],
    serviceOfferings: [
      'Cloud Migration Service certificate',
      'Cloud Migration Service certificate'
    ],
    vendors: ['AWS', 'Apple', 'Microsoft', 'Google Cloud', 'ITI', 'SANGFOR', 'VERITAS', 'Broadcom']
  },
  {
    id: 2,
    name: 'Cloud Management',
    tag: 'Cloud Infrastructure',
    description: 'While the concept of Cloud computing may present the idea of an on-demand convenience for eliminating the need for manual administration of back-end IT systems, the actual use of Cloud services comes with many challenges.',
    services: [],
    caseStudies: [],
    certificates: [],
    serviceOfferings: [],
    vendors: []
  },
  {
    id: 3,
    name: 'Data Analytics Solutions',
    tag: 'Data',
    description: 'Turning business data into value, establishing the foundation for data management to create innovations for Sustainable Business Growth.',
    services: [],
    caseStudies: [],
    certificates: [],
    serviceOfferings: [],
    vendors: []
  }
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = productsData.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
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
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex items-center gap-12">
            {/* Image */}
            <div className="w-1/2">
              <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-neutral-500">Product Image</span>
              </div>
            </div>

            {/* Content */}
            <div className="w-1/2">
              <ScrollReveal>
                <h1 className="text-5xl font-bold mb-6">{product.name}</h1>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {product.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {product.services.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12">Services</h2>
            </ScrollReveal>

            <div className="space-y-6">
              {product.services.map((service, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="border-l-4 border-neutral-300 pl-6 py-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-neutral-600">{service.description}</p>
                      </div>
                      <div className="flex gap-4 ml-8">
                        <span className="px-4 py-2 bg-purple-100 text-purple-600 text-sm rounded">
                          {service.implementation}
                        </span>
                        {service.timeline && (
                          <span className="px-4 py-2 bg-green-100 text-green-600 text-sm rounded">
                            {service.timeline}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Section */}
      {product.caseStudies.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12">Case Study</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {product.caseStudies.map((study, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img 
                          src="/images/logos/mfu-logo.png" 
                          alt={study}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to emoji if image not found
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = '<span class="text-3xl">🎓</span>';
                          }}
                        />
                      </div>
                      <h3 className="text-base font-semibold text-neutral-900">
                        {study}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certificate Section */}
      {product.certificates.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12">Certificate</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.certificates.map((cert, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white border border-neutral-300 rounded-full px-8 py-4 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-bold text-neutral-900 text-center">
                      {cert}
                    </h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vendors Section */}
      {product.vendors.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12">Vendors</h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {product.vendors.map((vendor, index) => (
                <ScrollReveal key={index} delay={index * 0.03}>
                  <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center h-24">
                      <span className="text-base font-semibold text-neutral-700 text-center">
                        {vendor}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
