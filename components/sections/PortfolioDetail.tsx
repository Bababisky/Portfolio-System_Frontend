'use client';

/**
 * PortfolioDetail Component
 * 
 * Full experience detail view
 * Usage: Work detail page
 */

import Link from 'next/link';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { Parallax } from '@/components/animation/Parallax';
import { Experience } from '@/types';

interface PortfolioDetailProps {
  experience: Experience;
}

export function PortfolioDetail({ experience }: PortfolioDetailProps) {
  // Format date
  const publishedDate = new Date(experience.published_at).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-neutral-600">
              <Link href="/works" className="hover:text-primary-600">
                Works
              </Link>
              <span className="mx-2">/</span>
              <span>{experience.title}</span>
            </div>

            {/* Title & Meta */}
            <div className="max-w-4xl">
              <div className="mb-4">
                <Tag variant="primary">{experience.team.name}</Tag>
              </div>

              <h1 className="text-display-md md:text-display-lg mb-6">
                {experience.title}
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 mb-6">
                {experience.summary}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
                <div>
                  <span className="font-semibold">Department:</span>{' '}
                  {experience.department.name}
                </div>
                <div>
                  <span className="font-semibold">Published:</span> {publishedDate}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Image */}
      {experience.assets.length > 0 && (
        <section className="mb-16">
          <div className="container-custom">
            <ScrollReveal>
              <Parallax speed={0.8}>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden flex items-center justify-center">
                  <span className="text-2xl font-semibold text-primary-600">
                    {experience.title}
                  </span>
                </div>
              </Parallax>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: experience.description.replace(/\n/g, '<br />'),
                  }}
                />
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Team Info */}
              <ScrollReveal delay={0.2}>
                <div className="card p-6">
                  <h3 className="text-lg font-semibold mb-4">Team</h3>
                  <Link
                    href={`/teams/${experience.team.slug}`}
                    className="block group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-white">
                          {experience.team.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-primary-600 transition-colors">
                          {experience.team.name}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {experience.department.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Vendors */}
              {experience.vendors.length > 0 && (
                <ScrollReveal delay={0.3}>
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold mb-4">Vendors</h3>
                    <div className="space-y-3">
                      {experience.vendors.map((vendor) => (
                        <div key={vendor.id}>
                          <p className="font-medium">{vendor.name}</p>
                          {vendor.website && (
                            <a
                              href={vendor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary-600 hover:text-primary-700"
                            >
                              Visit website →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Skills */}
              {experience.skills.length > 0 && (
                <ScrollReveal delay={0.4}>
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Tag key={skill.id} variant="primary">
                          {skill.name}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Explore More Projects
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Discover other innovative solutions from our teams
              </p>
              <Button href="/works" size="lg">
                View All Work
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
