/**
 * Teams Page
 * 
 * List of all teams
 * Shows: Teams with their project counts
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { Tag } from '@/components/ui/Tag';
import { teams } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Our Teams',
  description: 'Meet the talented teams behind our innovative projects',
};

export default function TeamsPage() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-display-md md:text-display-lg mb-6">
                Our Teams
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600">
                Meet the talented people who bring our projects to life. Each team
                brings unique expertise and passion to their work.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <ScrollReveal key={team.id} delay={index * 0.1} className="h-full">
                <Link
                  href={`/teams/${team.slug}`}
                  className="card p-8 block group h-full flex flex-col"
                >
                  {/* Avatar */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {team.name.charAt(0)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-1 flex flex-col justify-between">
                    <div className="mb-3 flex justify-center">
                      <Tag variant="primary">{team.department.name}</Tag>
                    </div>

                    <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                      {team.name}
                    </h3>

                    <p className="text-neutral-600 mb-4">{team.description}</p>

                    <p className="text-sm text-neutral-500">
                      {team.experiences_count}{' '}
                      {team.experiences_count === 1 ? 'project' : 'projects'}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
