/**
 * Work Detail Page
 * 
 * Individual portfolio item detail
 * Shows: Full experience information
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageTransition } from '@/components/animation/PageTransition';
import { PortfolioDetail } from '@/components/sections/PortfolioDetail';
import { getExperienceBySlug, experiences } from '@/lib/mockData';

interface WorkDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all experiences
export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: experience.title,
    description: experience.summary,
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    notFound();
  }

  return (
    <PageTransition>
      <PortfolioDetail experience={experience} />
    </PageTransition>
  );
}
