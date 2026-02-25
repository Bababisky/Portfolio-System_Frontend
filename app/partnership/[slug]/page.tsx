/**
 * Partnership Detail Page
 * Shows partner profile with logo, description, and team cards
 */
'use client';

import { useState } from 'react';
import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PartnershipDetailPage({ params }: PageProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const partnerSlug = params.slug.toLowerCase();
  
  // Partner data based on slug
  const partnerData: Record<string, any> = {
    'aws': {
      name: 'AWS',
      fullName: 'Amazon Web Services',
      logo: '/images/logos/aws-logo.png',
      description: 'Amazon Web Services (AWS) is a global cloud platform offering over 200 services from data centers worldwide, including the upcoming Thailand Region expected to launch in 2025. AWS covers computing, storage, security, databases, artificial intelligence, machine learning, and data analytics. This enables organizations to efficiently migrate and modernize their systems to the cloud, providing opportunities for public sector, private sector, and startups to innovate with unlimited potential.',
      certificates: [
        { name: 'AWS Certified Cloud Practitioner', count: 10 },
        { name: 'AWS Certified AI Practitioner', count: 2 }
      ]
    },
    'redhat': {
      name: 'Red Hat',
      fullName: 'Red Hat',
      logo: '/images/logos/red_hat-logo.png',
      description: 'Red Hat is the world\'s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies.',
      certificates: []
    },
    'oracle': {
      name: 'Oracle',
      fullName: 'Oracle Corporation',
      logo: '/images/logos/oracle-logo.png',
      description: 'Oracle offers a comprehensive and fully integrated stack of cloud applications and platform services.',
      certificates: []
    },
    'vmware': {
      name: 'VMware',
      fullName: 'VMware by Broadcom',
      logo: '/images/logos/vmware-logo.png',
      description: 'VMware provides cloud computing and virtualization software and services.',
      certificates: []
    }
  };

  const partner = partnerData[partnerSlug] || {
    name: partnerSlug.toUpperCase(),
    fullName: partnerSlug.charAt(0).toUpperCase() + partnerSlug.slice(1),
    logo: `/images/logos/${partnerSlug}-logo.png`,
    description: 'Technology partner providing innovative solutions.',
    certificates: []
  };

  const teams = [
    {
      name: 'Team A',
      badge: 'Cloud Security',
      tag: partner.name,
      description: partner.description,
      members: partner.name,
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    },
    {
      name: 'Team B',
      badge: 'Cloud Security',
      tag: partner.name,
      description: 'The cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
      members: partner.name,
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    },
    {
      name: 'Team C',
      badge: 'Data Security',
      tag: partner.name,
      description: 'The cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
      members: partner.name,
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    },
    {
      name: 'Team D',
      badge: 'Cloud Security',
      tag: partner.name,
      description: partner.description,
      members: partner.name,
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    },
    {
      name: 'Team E',
      badge: 'Cloud Security',
      tag: partner.name,
      description: 'The cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
      members: partner.name,
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section with Partner Logo and Description */}
      <section className="pt-32 pb-12 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            {/* Partner Logo */}
            <div className="mb-12 flex justify-center">
              <div className="w-96 h-64 bg-white rounded-lg flex items-center justify-center">
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-6xl font-bold text-neutral-800">${partner.name}</span>`;
                  }}
                />
              </div>
            </div>

            {/* Partner Title and Description */}
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl font-bold mb-8">{partner.name}</h1>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {partner.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12 px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">Product</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cloud Migration */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Cloud Modernization</span>
                  <span className="px-3 py-1 bg-neutral-200 text-neutral-700 text-xs rounded">Cloud</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Cloud Migration</h3>
                <div className="flex flex-wrap gap-3">
                  <img src="/images/logos/aws-logo.png" alt="AWS" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <img src="/images/logos/googlecloud-logo.png" alt="Google Cloud" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <img src="/images/logos/oracle-logo.png" alt="Oracle" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <img src="/images/logos/hpe-logo.png" alt="HPE" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
              </div>
            </ScrollReveal>

            {/* Cloud Management */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Cloud Infrastructure</span>
                  <span className="px-3 py-1 bg-neutral-200 text-neutral-700 text-xs rounded">Cloud</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Cloud Management</h3>
                <div className="flex flex-wrap gap-3">
                  <img src="/images/logos/aws-logo.png" alt="AWS" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <img src="/images/logos/googlecloud-logo.png" alt="Google Cloud" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <img src="/images/logos/microsoft-logo.png" alt="Microsoft" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
              </div>
            </ScrollReveal>

            {/* Name Product */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Team</span>
                  <span className="px-3 py-1 bg-neutral-200 text-neutral-700 text-xs rounded">Tag</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Name Product</h3>
                <div className="flex flex-wrap gap-3">
                  <img src="/images/logos/aws-logo.png" alt="AWS" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <img src="/images/logos/googlecloud-logo.png" alt="Google Cloud" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <img src="/images/logos/tti-logo.png" alt="TTI" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">Case Study</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link href="/case-studies/khon-kaen-university">
              <div className="inline-flex items-center gap-3 bg-white border border-neutral-200 rounded-lg px-6 py-3 hover:shadow-lg transition-shadow cursor-pointer">
                <img src="/images/logos/kku-logo.png" alt="Khon Kaen University" className="h-8" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="font-semibold">Khon Kaen University</span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-12 px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">Use Case</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link href="/use-cases/migrate-legacy-on-premise-to-aws">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer max-w-2xl">
                <h3 className="text-xl font-bold mb-4">Migrate Legacy On-Premise Application to AWS</h3>
                <ul className="space-y-1 text-neutral-700 text-sm">
                  <li>• ย้าย VM → EC2</li>
                  <li>• Database → RDS</li>
                  <li>• File → S3</li>
                  <li>• ใช้ AWS Migration Hub / DMS</li>
                </ul>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">Certificate</h2>
          </ScrollReveal>

          <div className="flex gap-4">
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-neutral-200 rounded-full px-6 py-3">
                <span className="font-semibold">AWS Certified Cloud Practitioner (10)</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-neutral-200 rounded-full px-6 py-3">
                <span className="font-semibold">AWS Certified AI Practitioner (2)</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-12 px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'aws', 'apple', 'dell', 'googlecloud', 'tti', 'airfield',
              'casper', 'cadex', 'checkmarx', 'cisco', 'codan', 'crowdstrike',
              'f5', 'fortinet', 'freedom', 'forescout', 'frequentis', 'guardrec',
              'hpe', 'hitachi', 'hp', 'ibm', 'hpearuba', 'huawei',
              'informatica', 'kac', 'mandiant', 'microsoft', 'netka', 'netskope',
              'azure', 'netapp', 'nutanix', 'nvidia', 'redhat', 'openmetadata',
              'oracle', 'paloalto', 'sangfor', 'parkair', 'sas', 'splunk',
              'vmware', 'tableau', 'tenable', 'veritas', 'trendmicro', 'veeam',
              'wolterskluwer', 'youyang', 'zscaler'
            ].map((logo, index) => (
              <ScrollReveal key={index} delay={index * 0.01}>
                <div className="bg-white border border-neutral-200 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-lg transition-shadow">
                  <img
                    src={`/images/logos/${logo}-logo.png`}
                    alt={logo}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const currentSrc = e.currentTarget.src;
                      if (currentSrc.includes('-logo.png')) {
                        e.currentTarget.src = currentSrc.replace('-logo.png', '-Logo.png');
                      } else {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs font-semibold text-neutral-600">${logo.toUpperCase()}</span>`;
                        }
                      }
                    }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
