/**
 * Home Page
 * 
 * Public landing page
 * Shows: Hero, featured experiences, team highlights
 */

import { Hero } from '@/components/sections/Hero';
import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { HeroBackground } from '@/components/animation/HeroBackground';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { experiences, teams } from '@/lib/mockData';
import Link from 'next/link';

export default function HomePage() {
  // Get latest 3 published experiences
  const featuredExperiences = experiences.slice(0, 3);
  
  // Get teams with most experiences
  const featuredTeams = teams.slice(0, 4);

  return (
    <>
      {/* Background Image with Fade Effect */}
      <HeroBackground 
        imageSrc="/images/yip-in-tsoi-building.jpg"
        alt="Yip In Tsoi Building"
      />
      
      <PageTransition className="relative z-10">
        {/* Hero Section */}
        <Hero
          title="Showcasing Excellence in Every Project"
          subtitle="Explore our portfolio of innovative solutions and meet the talented teams behind them"
          ctaText="View Our Work"
          ctaHref="/works"
        />

      {/* Featured Experiences */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-neutral-600">
                Recent projects that showcase our capabilities
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredExperiences.map((experience, index) => (
              <ScrollReveal key={experience.id} delay={index * 0.1}>
                <Link
                  href={`/works/${experience.slug}`}
                  className="card p-6 block group"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-neutral-100 rounded-lg mb-4 overflow-hidden">
                    {experience.assets[0] && (
                      <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <span className="text-primary-600 font-semibold">
                          {experience.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mb-3">
                    <Tag variant="primary">{experience.team.name}</Tag>
                  </div>

                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {experience.title}
                  </h3>

                  <p className="text-neutral-600 mb-4">{experience.summary}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.slice(0, 3).map((skill) => (
                      <Tag key={skill.id} variant="outline">
                        {skill.name}
                      </Tag>
                    ))}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button href="/works" variant="secondary" size="lg">
                View All Projects
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Teams */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our Teams
              </h2>
              <p className="text-xl text-neutral-600">
                Meet the talented people behind our success
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeams.map((team, index) => (
              <ScrollReveal key={team.id} delay={index * 0.1} className="h-full">
                <Link
                  href={`/teams/${team.slug}`}
                  className="card p-6 text-center group h-full flex flex-col"
                >
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {team.name.charAt(0)}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {team.name}
                  </h3>

                  <p className="text-sm text-neutral-600 mb-3">
                    {team.department.name}
                  </p>

                  <div className="mt-auto">
                    <p className="text-sm text-neutral-500">
                      {team.experiences_count} {team.experiences_count === 1 ? 'project' : 'projects'}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button href="/teams" variant="secondary" size="lg">
                View All Teams
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </PageTransition>
    </>
  );
}
