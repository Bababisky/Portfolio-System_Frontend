/**
 * Certificates Page
 */
'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

export default function CertificatesPage() {
  const certificates = [
    { name: 'AWS Certified Cloud Practitioner', count: 10 },
    { name: 'AWS Certified AI Practitioner', count: 2 }
  ];

  const teams = [
    {
      name: 'Team A',
      badge: 'Cloud Security',
      tag: 'AWS',
      description: 'Amazon Web Services (AWS) is a global cloud platform offering over 200 services from data centers worldwide, including the upcoming Thailand Region expected to launch in 2025. AWS covers computing, storage, security, databases, artificial intelligence, machine learning, and data analytics. This enables organizations to efficiently migrate and modernize their systems to the Cloud, unlocking opportunities for public sector, private sector, and startups to innovate with unlimited potential.',
      members: 'AWS',
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    },
    {
      name: 'Team B',
      badge: 'Cloud Security',
      tag: 'AWS',
      description: 'The cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
      members: 'AWS',
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    },
    {
      name: 'Team C',
      badge: 'Data Security',
      tag: 'AWS',
      description: 'The cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
      members: 'AWS',
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    },
    {
      name: 'Team A',
      badge: 'Cloud Security',
      tag: 'AWS',
      description: 'Amazon Web Services (AWS) is a global cloud platform offering over 200 services from data centers worldwide, including the upcoming Thailand Region expected to launch in 2025. AWS covers computing, storage, security, databases, artificial intelligence, machine learning, and data analytics. This enables organizations to efficiently migrate and modernize their systems to the Cloud, unlocking opportunities for public sector, private sector, and startups to innovate with unlimited potential.',
      members: 'AWS',
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    },
    {
      name: 'Team B',
      badge: 'Cloud Security',
      tag: 'AWS',
      description: 'The cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
      members: 'AWS',
      location: 'Thailand',
      image: '/images/team-placeholder.jpg'
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section with AWS Logo and Description */}
      <section className="pt-32 pb-12 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            {/* AWS Logo */}
            <div className="mb-12 flex justify-center">
              <div className="w-96 h-64 bg-white rounded-lg flex items-center justify-center">
                <img 
                  src="/images/logos/aws-logo.png" 
                  alt="AWS"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-6xl font-bold text-neutral-800">aws</span>';
                  }}
                />
              </div>
            </div>

            {/* AWS Title and Description */}
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl font-bold mb-8">AWS</h1>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Amazon Web Services (AWS) is a global cloud platform offering over 200 services from data 
                centers worldwide, including the upcoming Thailand Region expected to launch in 2025. AWS 
                covers computing, storage, security, databases, artificial intelligence, machine learning, and 
                data analytics. This enables organizations to efficiently migrate and modernize their systems to 
                the cloud, providing opportunities for public sector, private sector, and startups to innovate 
                with unlimited potential.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Teams Grid Section */}
      <section className="py-12 px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          {/* Cloud Button - Top Right */}
          <div className="absolute top-8 right-8">
            <button className="px-6 py-2 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors font-medium">
              cloud
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  {/* Team Image */}
                  <div className="h-48 bg-neutral-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-400">
                      <span className="text-neutral-600 font-semibold">{team.name}</span>
                    </div>
                  </div>

                  {/* Team Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-600 text-xs rounded font-medium">
                        {team.badge}
                      </span>
                      <span className="px-3 py-1 bg-neutral-200 text-neutral-700 text-xs rounded">
                        {team.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{team.name}</h3>
                    
                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {team.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <div className="flex items-center gap-2">
                        <img src="/images/logos/aws-logo.png" alt="AWS" className="h-4" onError={(e) => e.currentTarget.style.display = 'none'} />
                        <span>AWS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Google Cloud</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Microsoft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
