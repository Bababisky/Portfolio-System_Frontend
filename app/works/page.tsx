/**
 * Works Page
 * 
 * Portfolio list with filters
 * Shows: All published experiences with filtering
 */

import { Metadata } from 'next';
import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import {
  experiences,
  teams,
  getAllVendors,
  getAllSkills,
} from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of innovative projects and solutions',
};

export default function WorksPage() {
  const vendors = getAllVendors();
  const skills = getAllSkills();

  return (
    <PageTransition>
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-display-md md:text-display-lg mb-6">
                Our Work
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600">
                Explore our portfolio of innovative projects, from cutting-edge web
                applications to AI-powered solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <PortfolioGrid
            experiences={experiences}
            teams={teams}
            vendors={vendors}
            skills={skills}
          />
        </div>
      </section>
    </PageTransition>
  );
}
