/**
 * Mock Data for Portfolio System (Guest/Public Side)
 * 
 * IMPORTANT:
 * - This data reflects the EXACT shape returned by backend API
 * - All experiences have status = "published" (backend pre-filtered)
 * - No approval logic needed on frontend
 * - In production, replace with actual API calls
 * 
 * Data Flow:
 * Backend (filters by status) → API → Frontend (displays as-is)
 */

import type {
  Experience,
  Team,
  Department,
  Vendor,
  Skill,
  Asset,
} from '@/types';

// ============================================
// DEPARTMENTS
// ============================================
/**
 * Departments: Top-level organizational units
 * Source: departments table
 * Usage: Grouping teams, breadcrumb navigation
 */
export const departments: Department[] = [
  {
    id: 'dept-1',
    slug: 'engineering',
    name: 'Engineering',
    description: 'Software development and technical innovation',
  },
  {
    id: 'dept-2',
    slug: 'design',
    name: 'Design',
    description: 'User experience and visual design',
  },
  {
    id: 'dept-3',
    slug: 'marketing',
    name: 'Marketing',
    description: 'Brand strategy and digital campaigns',
  },
];

// ============================================
// VENDORS
// ============================================
/**
 * Vendors: External tools/services used in experiences
 * Source: vendors table
 * Usage: Experience detail, filter options, vendor logos
 */
export const vendors: Vendor[] = [
  {
    id: 'vendor-1',
    slug: 'vercel',
    name: 'Vercel',
    website: 'https://vercel.com',
    logo_url: '/images/vendors/vercel.svg',
    description: 'Platform for frontend frameworks and static sites',
  },
  {
    id: 'vendor-2',
    slug: 'figma',
    name: 'Figma',
    website: 'https://figma.com',
    logo_url: '/images/vendors/figma.svg',
    description: 'Collaborative interface design tool',
  },
  {
    id: 'vendor-3',
    slug: 'openai',
    name: 'OpenAI',
    website: 'https://openai.com',
    logo_url: '/images/vendors/openai.svg',
    description: 'AI research and deployment company',
  },
  {
    id: 'vendor-4',
    slug: 'aws',
    name: 'Amazon Web Services',
    website: 'https://aws.amazon.com',
    logo_url: '/images/vendors/aws.svg',
    description: 'Cloud computing platform',
  },
];

// ============================================
// SKILLS
// ============================================
/**
 * Skills: Specific technologies/capabilities
 * Source: skills table (belongs to vendor)
 * Usage: Tags, filters, skill badges
 * Relationship: skill.vendor_id → vendors.id
 */
export const skills: Skill[] = [
  // Vercel skills
  {
    id: 'skill-1',
    slug: 'nextjs',
    name: 'Next.js',
    vendor: vendors[0], // Vercel
    category: 'Frontend',
  },
  {
    id: 'skill-2',
    slug: 'react',
    name: 'React',
    vendor: vendors[0], // Vercel
    category: 'Frontend',
  },
  // Figma skills
  {
    id: 'skill-3',
    slug: 'ui-design',
    name: 'UI Design',
    vendor: vendors[1], // Figma
    category: 'Design',
  },
  {
    id: 'skill-4',
    slug: 'prototyping',
    name: 'Prototyping',
    vendor: vendors[1], // Figma
    category: 'Design',
  },
  // OpenAI skills
  {
    id: 'skill-5',
    slug: 'gpt-4',
    name: 'GPT-4',
    vendor: vendors[2], // OpenAI
    category: 'AI',
  },
  {
    id: 'skill-6',
    slug: 'embeddings',
    name: 'Embeddings',
    vendor: vendors[2], // OpenAI
    category: 'AI',
  },
  // AWS skills
  {
    id: 'skill-7',
    slug: 'lambda',
    name: 'Lambda',
    vendor: vendors[3], // AWS
    category: 'Backend',
  },
  {
    id: 'skill-8',
    slug: 's3',
    name: 'S3',
    vendor: vendors[3], // AWS
    category: 'Backend',
  },
];

// ============================================
// TEAMS
// ============================================
/**
 * Teams: Groups that create experiences
 * Source: teams table (belongs to department)
 * Usage: Team list, team detail, experience attribution
 * Relationship: team.department_id → departments.id
 * experiences_count: Calculated by backend (COUNT of published experiences)
 */
export const teams: Team[] = [
  {
    id: 'team-1',
    slug: 'frontend-team',
    name: 'Frontend Team',
    description: 'Building beautiful, performant user interfaces',
    department: departments[0], // Engineering
    avatar_url: '/images/teams/frontend.jpg',
    experiences_count: 3,
  },
  {
    id: 'team-2',
    slug: 'design-system',
    name: 'Design System',
    description: 'Creating consistent design language and components',
    department: departments[1], // Design
    avatar_url: '/images/teams/design-system.jpg',
    experiences_count: 2,
  },
  {
    id: 'team-3',
    slug: 'ai-research',
    name: 'AI Research',
    description: 'Exploring cutting-edge AI applications',
    department: departments[0], // Engineering
    avatar_url: '/images/teams/ai-research.jpg',
    experiences_count: 2,
  },
  {
    id: 'team-4',
    slug: 'brand-team',
    name: 'Brand Team',
    description: 'Crafting compelling brand experiences',
    department: departments[2], // Marketing
    avatar_url: '/images/teams/brand.jpg',
    experiences_count: 1,
  },
];

// ============================================
// ASSETS
// ============================================
/**
 * Assets: Media files for experiences
 * Source: assets table (belongs to experience)
 * Usage: Image galleries, hero images, thumbnails
 * Relationship: asset.experience_id → experiences.id
 * order: Display sequence (1 = first/hero image)
 */
const assets: Asset[] = [
  // Experience 1 assets
  {
    id: 'asset-1',
    type: 'image',
    url: '/images/experiences/ecommerce-hero.jpg',
    thumbnail_url: '/images/experiences/ecommerce-hero-thumb.jpg',
    alt_text: 'E-commerce platform homepage',
    caption: 'Modern, responsive homepage design',
    order: 1,
  },
  {
    id: 'asset-2',
    type: 'image',
    url: '/images/experiences/ecommerce-product.jpg',
    thumbnail_url: '/images/experiences/ecommerce-product-thumb.jpg',
    alt_text: 'Product detail page',
    caption: 'Interactive product showcase',
    order: 2,
  },
  // Experience 2 assets
  {
    id: 'asset-3',
    type: 'image',
    url: '/images/experiences/design-tokens.jpg',
    thumbnail_url: '/images/experiences/design-tokens-thumb.jpg',
    alt_text: 'Design token system',
    caption: 'Comprehensive token architecture',
    order: 1,
  },
  // Experience 3 assets
  {
    id: 'asset-4',
    type: 'image',
    url: '/images/experiences/chatbot-ui.jpg',
    thumbnail_url: '/images/experiences/chatbot-ui-thumb.jpg',
    alt_text: 'AI chatbot interface',
    caption: 'Conversational AI experience',
    order: 1,
  },
];

// ============================================
// EXPERIENCES (PORTFOLIOS)
// ============================================
/**
 * Experiences: Published portfolio items
 * Source: experiences table
 * Usage: Works list, work detail, team portfolios
 * 
 * CRITICAL NOTES:
 * - status is ALWAYS "published" (backend filters before sending)
 * - Frontend never checks status or approval state
 * - All relationships are populated (team, department, vendors, skills)
 * - published_at: When experience was approved and published
 * - created_at: When experience was first created (may be earlier)
 * 
 * Relationships:
 * - experience.team_id → teams.id
 * - experience.department_id → departments.id
 * - experience_vendors (junction) → vendors.id
 * - experience_skills (junction) → skills.id
 * - experience.id ← assets.experience_id
 */
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    slug: 'ecommerce-platform-redesign',
    title: 'E-Commerce Platform Redesign',
    summary: 'Complete overhaul of shopping experience with Next.js 14',
    description: `# Project Overview

We rebuilt our e-commerce platform from the ground up using Next.js 14 and React Server Components. The goal was to improve performance, SEO, and user experience while maintaining feature parity with the legacy system.

## Key Achievements

- **50% faster page loads** through server-side rendering and edge caching
- **30% increase in conversion** with optimized checkout flow
- **100% Lighthouse scores** across all metrics
- **Fully accessible** WCAG 2.1 AA compliant

## Technical Highlights

- App Router with streaming SSR
- Incremental Static Regeneration for product pages
- Edge middleware for A/B testing
- Optimistic UI updates with React transitions

## Challenges Solved

- Migrated 10,000+ products without downtime
- Integrated with legacy payment gateway
- Built custom image optimization pipeline
- Implemented real-time inventory sync`,
    status: 'published',
    team: teams[0], // Frontend Team
    department: departments[0], // Engineering
    vendors: [vendors[0]], // Vercel
    skills: [skills[0], skills[1]], // Next.js, React
    assets: [assets[0], assets[1]],
    published_at: '2024-01-15T10:00:00Z',
    created_at: '2023-12-01T08:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'exp-2',
    slug: 'design-system-v2',
    title: 'Design System 2.0',
    summary: 'Scalable component library with Figma integration',
    description: `# Design System Evolution

Our second-generation design system brings consistency across 15+ products while empowering teams to move faster.

## What's New

- **120+ components** with full documentation
- **Dark mode** built-in from day one
- **Figma sync** for automatic token updates
- **Accessibility first** with ARIA patterns

## Impact

- Reduced design-to-dev time by 60%
- Unified brand experience across all touchpoints
- Enabled 5 teams to ship simultaneously
- Cut CSS bundle size by 40%

## Technical Stack

- React + TypeScript
- Tailwind CSS for styling
- Storybook for documentation
- Figma Tokens for design sync
- Automated visual regression testing`,
    status: 'published',
    team: teams[1], // Design System
    department: departments[1], // Design
    vendors: [vendors[0], vendors[1]], // Vercel, Figma
    skills: [skills[0], skills[1], skills[2], skills[3]], // Next.js, React, UI Design, Prototyping
    assets: [assets[2]],
    published_at: '2024-02-01T14:00:00Z',
    created_at: '2023-11-15T09:00:00Z',
    updated_at: '2024-02-01T14:00:00Z',
  },
  {
    id: 'exp-3',
    slug: 'ai-powered-customer-support',
    title: 'AI-Powered Customer Support',
    summary: 'GPT-4 chatbot reducing support tickets by 40%',
    description: `# Intelligent Support Assistant

We built an AI chatbot that handles tier-1 support queries, freeing our team to focus on complex issues.

## Results

- **40% reduction** in support tickets
- **90% customer satisfaction** rating
- **24/7 availability** in 12 languages
- **2-second average** response time

## How It Works

1. User asks question in natural language
2. GPT-4 analyzes intent and context
3. Retrieves relevant knowledge base articles
4. Generates personalized response
5. Escalates to human if needed

## Technical Architecture

- Next.js API routes for backend
- OpenAI GPT-4 for language understanding
- Vector embeddings for semantic search
- AWS Lambda for scalable processing
- Real-time streaming responses`,
    status: 'published',
    team: teams[2], // AI Research
    department: departments[0], // Engineering
    vendors: [vendors[0], vendors[2], vendors[3]], // Vercel, OpenAI, AWS
    skills: [skills[0], skills[4], skills[5], skills[6]], // Next.js, GPT-4, Embeddings, Lambda
    assets: [assets[3]],
    published_at: '2024-01-20T16:00:00Z',
    created_at: '2023-12-10T11:00:00Z',
    updated_at: '2024-01-20T16:00:00Z',
  },
  {
    id: 'exp-4',
    slug: 'mobile-app-launch',
    title: 'Mobile App Launch Campaign',
    summary: 'Multi-channel campaign driving 100K downloads in 30 days',
    description: `# Mobile App Launch

Coordinated launch campaign across social, email, and paid channels to drive app adoption.

## Campaign Results

- **100,000 downloads** in first 30 days
- **4.8-star rating** on app stores
- **25% conversion** from install to signup
- **$0.50 cost** per acquisition

## Strategy

- Influencer partnerships for organic reach
- Targeted ads on Instagram and TikTok
- Email drip campaign for existing users
- App Store Optimization (ASO)
- Launch event with live demos

## Creative Assets

- 15 video ads (15s, 30s, 60s)
- 50+ social media graphics
- Interactive landing page
- Press kit and media outreach`,
    status: 'published',
    team: teams[3], // Brand Team
    department: departments[2], // Marketing
    vendors: [vendors[1]], // Figma
    skills: [skills[2]], // UI Design
    assets: [],
    published_at: '2024-02-05T12:00:00Z',
    created_at: '2024-01-05T10:00:00Z',
    updated_at: '2024-02-05T12:00:00Z',
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get experiences by team slug
 * Usage: Team detail page
 */
export function getExperiencesByTeam(teamSlug: string): Experience[] {
  return experiences.filter((exp) => exp.team.slug === teamSlug);
}

/**
 * Get experiences by department slug
 * Usage: Department filter
 */
export function getExperiencesByDepartment(departmentSlug: string): Experience[] {
  return experiences.filter((exp) => exp.department.slug === departmentSlug);
}

/**
 * Get experiences by vendor slug
 * Usage: Vendor filter
 */
export function getExperiencesByVendor(vendorSlug: string): Experience[] {
  return experiences.filter((exp) =>
    exp.vendors.some((vendor) => vendor.slug === vendorSlug)
  );
}

/**
 * Get experiences by skill slug
 * Usage: Skill filter
 */
export function getExperiencesBySkill(skillSlug: string): Experience[] {
  return experiences.filter((exp) =>
    exp.skills.some((skill) => skill.slug === skillSlug)
  );
}

/**
 * Get experience by slug
 * Usage: Experience detail page
 */
export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug);
}

/**
 * Get team by slug
 * Usage: Team detail page
 */
export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((team) => team.slug === slug);
}

/**
 * Get all unique vendors from experiences
 * Usage: Filter dropdown options
 */
export function getAllVendors(): Vendor[] {
  return vendors;
}

/**
 * Get all unique skills from experiences
 * Usage: Filter dropdown options
 */
export function getAllSkills(): Skill[] {
  return skills;
}
