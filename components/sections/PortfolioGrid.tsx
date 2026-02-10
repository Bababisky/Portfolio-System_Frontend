'use client';

/**
 * PortfolioGrid Component
 * 
 * Filterable grid of portfolio items
 * Usage: Works list page
 */

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag } from '@/components/ui/Tag';
import { Experience, Team, Vendor, Skill } from '@/types';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface PortfolioGridProps {
  experiences: Experience[];
  teams: Team[];
  vendors: Vendor[];
  skills: Skill[];
}

export function PortfolioGrid({
  experiences,
  teams,
  vendors,
  skills,
}: PortfolioGridProps) {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Filter experiences based on selections
  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => {
      if (selectedTeam && exp.team.slug !== selectedTeam) return false;
      if (selectedVendor && !exp.vendors.some((v) => v.slug === selectedVendor))
        return false;
      if (selectedSkill && !exp.skills.some((s) => s.slug === selectedSkill))
        return false;
      return true;
    });
  }, [experiences, selectedTeam, selectedVendor, selectedSkill]);

  const clearFilters = () => {
    setSelectedTeam(null);
    setSelectedVendor(null);
    setSelectedSkill(null);
  };

  const hasActiveFilters = selectedTeam || selectedVendor || selectedSkill;

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 space-y-6">
        {/* Team Filter */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-700 mb-3">
            Filter by Team
          </h3>
          <div className="flex flex-wrap gap-2">
            {teams.map((team) => (
              <Tag
                key={team.id}
                variant={selectedTeam === team.slug ? 'primary' : 'default'}
                onClick={() =>
                  setSelectedTeam(selectedTeam === team.slug ? null : team.slug)
                }
              >
                {team.name}
              </Tag>
            ))}
          </div>
        </div>

        {/* Vendor Filter */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-700 mb-3">
            Filter by Vendor
          </h3>
          <div className="flex flex-wrap gap-2">
            {vendors.map((vendor) => (
              <Tag
                key={vendor.id}
                variant={selectedVendor === vendor.slug ? 'primary' : 'default'}
                onClick={() =>
                  setSelectedVendor(
                    selectedVendor === vendor.slug ? null : vendor.slug
                  )
                }
              >
                {vendor.name}
              </Tag>
            ))}
          </div>
        </div>

        {/* Skill Filter */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-700 mb-3">
            Filter by Skill
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Tag
                key={skill.id}
                variant={selectedSkill === skill.slug ? 'primary' : 'default'}
                onClick={() =>
                  setSelectedSkill(selectedSkill === skill.slug ? null : skill.slug)
                }
              >
                {skill.name}
              </Tag>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div>
            <button
              onClick={clearFilters}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-neutral-600">
          Showing {filteredExperiences.length} of {experiences.length} projects
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredExperiences.map((experience) => (
            <motion.div
              key={experience.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/works/${experience.slug}`}
                className="card p-6 block group h-full"
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
                <div className="mb-3">
                  <Tag variant="primary">{experience.team.name}</Tag>
                </div>

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
                    <Tag variant="outline">+{experience.skills.length - 3}</Tag>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredExperiences.length === 0 && (
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center py-12"
        >
          <p className="text-xl text-neutral-600 mb-4">
            No projects found with the selected filters
          </p>
          <button
            onClick={clearFilters}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Clear filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
