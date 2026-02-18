/**
 * Type Definitions for Enterprise Solutions Platform
 * Public-facing and Internal Management
 */

// ============================================
// CORE ENTITIES
// ============================================

/**
 * Solution - กลุ่มใหญ่
 * Example: Cloud & Infrastructure Modernization
 */
export interface Solution {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon?: string;
  published: boolean;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Offering - แพ็กเกจบริการ (Service Offering)
 * Example: Cloud Migration
 */
export interface Offering {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  solutionId: string;
  services: Service[];
  vendors: Vendor[];
  caseStudies: CaseStudy[];
  tags: string[];
  published: boolean;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Service - รายการงานย่อยใน Offering
 * Example: Lift & Shift, Landing Zone, DR Setup
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  offeringId: string;
}

/**
 * Vendor/Partner - Technology vendor
 * Example: AWS, Azure, Google Cloud
 */
export interface Vendor {
  id: string;
  name: string;
  description: string;
  logo?: string;
  website?: string;
}

/**
 * Case Study - ตัวอย่างผลงาน/โปรเจกต์
 */
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  client?: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  offeringIds: string[];
  vendorIds: string[];
  tags: string[];
  published: boolean;
  createdAt: string;
}

// ============================================
// VIEW MODELS
// ============================================

/**
 * Solution with offerings (for display)
 */
export interface SolutionWithOfferings extends Solution {
  offerings: Offering[];
}

/**
 * Vendor with related offerings and case studies
 */
export interface VendorWithRelations extends Vendor {
  offerings: Offering[];
  caseStudies: CaseStudy[];
}

// ============================================
// USER & ROLES (for internal system)
// ============================================

export type UserRole = 'admin' | 'manager';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
