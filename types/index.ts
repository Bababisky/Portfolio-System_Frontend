/**
 * TypeScript Types for Portfolio System (Guest/Public Side)
 * 
 * These types reflect the backend API response shape.
 * All data is pre-filtered by backend (status = "published" only).
 * Frontend does NOT handle approval logic or permissions.
 */

// ============================================
// CORE ENTITIES
// ============================================

/**
 * Experience (Portfolio Item)
 * Represents a published work/project
 * Source: experiences table (backend)
 * Used in: Works list, Work detail, Team detail
 */
export interface Experience {
  id: string;
  slug: string;                    // URL-friendly identifier
  title: string;                   // Experience name
  description: string;             // Full description (markdown supported)
  summary: string;                 // Short description for cards
  status: 'published';             // Always 'published' on frontend
  team: Team;                      // Related team
  department: Department;          // Related department
  vendors: Vendor[];               // Vendors involved
  skills: Skill[];                 // Skills used
  assets: Asset[];                 // Images/videos
  published_at: string;            // ISO date string
  created_at: string;              // ISO date string
  updated_at: string;              // ISO date string
}

/**
 * Team
 * Represents a team that creates experiences
 * Source: teams table (backend)
 * Used in: Team list, Team detail, Experience cards
 */
export interface Team {
  id: string;
  slug: string;
  name: string;
  description: string;
  department: Department;
  avatar_url?: string;             // Team logo/image
  experiences_count: number;       // Number of published experiences
}

/**
 * Department
 * Organizational unit that contains teams
 * Source: departments table (backend)
 * Used in: Filters, breadcrumbs
 */
export interface Department {
  id: string;
  slug: string;
  name: string;
  description: string;
}

/**
 * Vendor
 * External company/service used in experiences
 * Source: vendors table (backend)
 * Used in: Experience detail, filters
 */
export interface Vendor {
  id: string;
  slug: string;
  name: string;
  website?: string;
  logo_url?: string;
  description: string;
}

/**
 * Skill
 * Technology/capability used in experiences
 * Source: skills table (backend)
 * Used in: Experience detail, filters, tags
 */
export interface Skill {
  id: string;
  slug: string;
  name: string;
  vendor: Vendor;                  // Parent vendor
  category: string;                // e.g., "Frontend", "Backend", "Design"
}

/**
 * Asset
 * Media file attached to experience
 * Source: assets table (backend)
 * Used in: Experience detail, galleries
 */
export interface Asset {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail_url?: string;
  alt_text: string;
  caption?: string;
  order: number;                   // Display order
}

// ============================================
// FILTER & QUERY TYPES
// ============================================

/**
 * Filter options for experience list
 * Used in: Works page filter UI
 */
export interface ExperienceFilters {
  team?: string;                   // Team slug
  department?: string;             // Department slug
  vendor?: string;                 // Vendor slug
  skill?: string;                  // Skill slug
  search?: string;                 // Text search
}

/**
 * Pagination metadata
 * Source: API response headers/body
 */
export interface PaginationMeta {
  current_page: number;
  total_pages: number;
  total_count: number;
  per_page: number;
}

// ============================================
// UI COMPONENT TYPES
// ============================================

/**
 * Animation variants for Framer Motion
 */
export interface AnimationVariants {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
}

/**
 * Scroll animation configuration
 */
export interface ScrollAnimationConfig {
  trigger: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
}
