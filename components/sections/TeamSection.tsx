'use client';

/**
 * TeamSection Component
 * 
 * Team showcase with portfolios
 * Usage: Team detail page
 */

import Link from 'next/link';
import { Tag } from '@/components/ui/Tag';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { Team, Experience } from '@/types';

interface TeamSectionProps {
  team: Team;
  experiences: Experience[];
}

export function TeamSection({ team, experiences }: TeamSectionProps) {
  return (
    <div>
      {/* Team Header */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-neutral-600">
              <Link href="/teams" className="hover:text-primary-600">
                Teams
              </Link>
              <span className="mx-2">/</span>
              <span>{team.name}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0">
                <span className="text-5xl font-bold text-white">
                  {team.name.charAt(0)}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="mb-4">
                  <Tag variant="primary">{team.department.name}</Tag>
                </div>

                <h1 className="text-display-md md:text-display-lg mb-4">
                  {team.name}
                </h1>

                <p className="text-xl md:text-2xl text-neutral-600 mb-6">
                  {team.description}
                </p>

                <div className="text-neutral-600">
                  <span className="font-semibold">{team.experiences_count}</span>{' '}
                  published {team.experiences_count === 1 ? 'project' : 'projects'}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Projects by {team.name}
            </h2>
          </ScrollReveal>

          {experiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <ScrollReveal key={experience.id} delay={index * 0.1}>
                  <Link
                    href={`/works/${experience.slug}`}
                    className="card p-6 block group"
                  >
                    {/* Image placeholder */}
                    <div className="aspect-video bg-neutral-100 rounded-lg mb-4 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-center px-4">
                          {experience.title}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      {experience.title}
                    </h3>

                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {experience.summary}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.slice(0, 3).map((skill) => (
                        <Tag key={skill.id} variant="outline">
                          {skill.name}
                        </Tag>
                      ))}
                      {experience.skills.length > 3 && (
                        <Tag variant="outline">
                          +{experience.skills.length - 3}
                        </Tag>
                      )}
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="text-center py-12">
                <p className="text-xl text-neutral-600">
                  No published projects yet
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}
