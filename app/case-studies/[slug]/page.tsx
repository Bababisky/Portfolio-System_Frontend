/**
 * Case Study Detail Page
 * Shows detailed case study information
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

export default function CaseStudyDetailPage({ params }: PageProps) {
  const caseStudySlug = params.slug;

  // Case study data
  const caseStudyData: Record<string, any> = {
    'khon-kaen-university': {
      name: 'Khon Kaen University',
      logo: '/images/logos/kku-logo.png',
      date: '29 Jan 2024',
      tags: ['Cloud Modernization', 'Cloud'],
      background: 'Khon Kaen University is a Comprehensive University that encompasses disciplines in social sciences, humanities, science, and technology. It has developed an environment researching a Residential University with comprehensive public utilities and complete amenities. Currently, the university has implemented online teaching to increase flexibility and provide additional learning opportunities for its students. Due to the growing demand for resources, the university is considering testing a new network system to support a more resource-intensive system. This involves comparing the cost-effectiveness of cloud-based solutions with general system usage in terms of both efficiency and incurred expenses.',
      objectives: [
        'To test the performance of the online examination system (Moodle) on AWS.',
        'To simulate AWS consumption costs during the testing period with 5,000 users.'
      ],
      assistance: [
        'Testing the online examination system for the university using AWS services.',
        'Conducting Load Tests to simulate the usage of 5,000 users.',
        'Evaluating security enhancements by segregating zones for data access and configuring Web Application Firewall to prevent external attacks.',
        'Testing efficiency improvements of the examination system by utilizing the Content Delivery Network service to reduce the workload on servers.'
      ],
      awsServices: [
        'Amazon VPC',
        'AWS WAF',
        'Amazon Cloudfront',
        'Amazon EC2',
        'Amazon RDS',
        'Amazon EFS',
        'Amazon S3'
      ],
      certificates: [
        'AWS Certified Cloud Practitioner (10)'
      ],
      vendors: [
        { name: 'AWS', logo: '/images/logos/aws-logo.png', slug: 'aws' }
      ]
    }
  };

  const caseStudy = caseStudyData[caseStudySlug] || {
    name: 'Case Study Not Found',
    logo: null,
    date: '',
    tags: [],
    background: '',
    objectives: [],
    assistance: [],
    awsServices: [],
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
              <Link href="/case-studies" className="hover:underline">Case Studies</Link>
              <span>/</span>
              <span className="text-neutral-900">{caseStudy.name}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <div className="w-64 h-64 flex items-center justify-center">
                <img
                  src={caseStudy.logo}
                  alt={caseStudy.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Tags - Top Right */}
          <div className="absolute top-8 right-8 flex gap-3">
            {caseStudy.tags.map((tag: string, index: number) => (
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
            <h1 className="text-4xl font-bold mb-2">{caseStudy.name}</h1>
            <p className="text-neutral-500 mb-8">{caseStudy.date}</p>

            {/* Background */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Background</h2>
              <p className="text-neutral-700 leading-relaxed">{caseStudy.background}</p>
            </div>

            {/* Objectives */}
            {caseStudy.objectives.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Objectives</h2>
                <ul className="list-none space-y-2">
                  {caseStudy.objectives.map((obj: string, index: number) => (
                    <li key={index} className="text-neutral-700 leading-relaxed">{obj}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* YIP's Assistance */}
            {caseStudy.assistance.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">YIP's Assistance</h2>
                <ul className="list-none space-y-2">
                  {caseStudy.assistance.map((item: string, index: number) => (
                    <li key={index} className="text-neutral-700 leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* AWS Services */}
            {caseStudy.awsServices.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">AWS Services Utilized by the University for testing</h2>
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.awsServices.map((service: string, index: number) => (
                    <li key={index} className="text-neutral-700">{service}</li>
                  ))}
                </ul>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Certificate Section */}
      {caseStudy.certificates.length > 0 && (
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-8">Certificate</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.certificates.map((cert: string, index: number) => (
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
      {caseStudy.vendors.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-8">Vendors</h2>
              <div className="flex gap-6">
                {caseStudy.vendors.map((vendor: any, index: number) => (
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
