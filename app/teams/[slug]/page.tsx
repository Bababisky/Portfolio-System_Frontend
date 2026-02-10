/**
 * Team Detail Page
 * 
 * Individual team with their projects
 * Shows: Team info and all their published experiences
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageTransition } from '@/components/animation/PageTransition';
import { TeamSection } from '@/components/sections/TeamSection';
import { getTeamBySlug, getExperiencesByTeam, teams } from '@/lib/mockData';

interface TeamDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all teams
export async function generateStaticParams() {
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: TeamDetailPageProps): Promise<Metadata> {
  const team = getTeamBySlug(params.slug);

  if (!team) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: team.name,
    description: team.description,
  };
}

export default function TeamDetailPage({ params }: TeamDetailPageProps) {
  const team = getTeamBySlug(params.slug);

  if (!team) {
    notFound();
  }

  const experiences = getExperiencesByTeam(params.slug);

  return (
    <PageTransition>
      <TeamSection team={team} experiences={experiences} />
    </PageTransition>
  );
}
