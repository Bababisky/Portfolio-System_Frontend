/**
 * Mock Data for Enterprise Solutions Platform
 * Structured data for public website
 */

import type {
  Solution,
  Offering,
  Service,
  Vendor,
  CaseStudy,
  SolutionWithOfferings,
  VendorWithRelations,
} from '@/types';

// ============================================
// VENDORS
// ============================================

export const vendors: Vendor[] = [
  {
    id: 'v1',
    name: 'AWS',
    description: 'Amazon Web Services - Leading cloud platform',
    website: 'https://aws.amazon.com',
  },
  {
    id: 'v2',
    name: 'Microsoft Azure',
    description: 'Microsoft cloud computing platform',
    website: 'https://azure.microsoft.com',
  },
  {
    id: 'v3',
    name: 'Google Cloud',
    description: 'Google Cloud Platform',
    website: 'https://cloud.google.com',
  },
  {
    id: 'v4',
    name: 'HPE',
    description: 'Hewlett Packard Enterprise',
    website: 'https://www.hpe.com',
  },
  {
    id: 'v5',
    name: 'Dell Technologies',
    description: 'Enterprise technology solutions',
    website: 'https://www.dell.com',
  },
  {
    id: 'v6',
    name: 'Cisco',
    description: 'Networking and security solutions',
    website: 'https://www.cisco.com',
  },
];

// ============================================
// SOLUTIONS
// ============================================

export const solutions: Solution[] = [
  {
    id: 'sol1',
    name: 'Cloud & Infrastructure Modernization',
    shortDescription: 'Transform your infrastructure with modern cloud solutions',
    description: 'Comprehensive cloud transformation and infrastructure modernization services to help enterprises migrate, optimize, and innovate in the cloud.',
    published: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: 'sol2',
    name: 'Data & AI Solutions',
    shortDescription: 'Unlock insights with data analytics and artificial intelligence',
    description: 'Advanced data analytics, machine learning, and AI solutions to drive data-driven decision making and business intelligence.',
    published: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: 'sol3',
    name: 'Cyber Security',
    shortDescription: 'Protect your business with enterprise-grade security',
    description: 'Comprehensive cybersecurity solutions including threat detection, prevention, and response to protect your digital assets.',
    published: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: 'sol4',
    name: 'Digital Business Solutions',
    shortDescription: 'Enable digital transformation across your organization',
    description: 'End-to-end digital transformation solutions including application modernization, DevOps, and digital workplace enablement.',
    published: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
];

// ============================================
// SERVICES
// ============================================

const services: Service[] = [
  // Cloud Migration Services
  { id: 'svc1', name: 'Lift & Shift Migration', description: 'Move applications to cloud with minimal changes', offeringId: 'off1' },
  { id: 'svc2', name: 'Landing Zone Setup', description: 'Establish secure cloud foundation', offeringId: 'off1' },
  { id: 'svc3', name: 'Disaster Recovery Setup', description: 'Implement cloud-based DR solution', offeringId: 'off1' },
  
  // Hybrid Cloud Services
  { id: 'svc4', name: 'Hybrid Architecture Design', description: 'Design seamless hybrid cloud architecture', offeringId: 'off2' },
  { id: 'svc5', name: 'Workload Orchestration', description: 'Manage workloads across environments', offeringId: 'off2' },
  { id: 'svc6', name: 'Network Integration', description: 'Connect on-premises and cloud networks', offeringId: 'off2' },
  
  // Infrastructure as Code Services
  { id: 'svc7', name: 'Terraform Implementation', description: 'Automate infrastructure with Terraform', offeringId: 'off3' },
  { id: 'svc8', name: 'CI/CD Pipeline Setup', description: 'Implement automated deployment pipelines', offeringId: 'off3' },
  { id: 'svc9', name: 'Configuration Management', description: 'Manage infrastructure configurations', offeringId: 'off3' },
  
  // Data Platform Services
  { id: 'svc10', name: 'Data Lake Implementation', description: 'Build scalable data lake architecture', offeringId: 'off4' },
  { id: 'svc11', name: 'ETL Pipeline Development', description: 'Create data transformation pipelines', offeringId: 'off4' },
  { id: 'svc12', name: 'Data Governance Setup', description: 'Implement data quality and governance', offeringId: 'off4' },
];

// ============================================
// CASE STUDIES
// ============================================

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Banking Cloud Migration Success',
    description: 'Major bank migrates core banking system to AWS',
    client: 'Leading Thai Bank',
    industry: 'Banking & Finance',
    challenge: 'Legacy infrastructure limiting innovation and scalability',
    solution: 'Migrated 50+ applications to AWS using lift-and-shift and re-architecture strategies',
    results: '40% cost reduction, 99.99% uptime, 3x faster deployment',
    offeringIds: ['off1'],
    vendorIds: ['v1'],
    tags: ['Cloud', 'Banking', 'AWS'],
    published: true,
    createdAt: '2024-01-10T00:00:00Z',
  },
  {
    id: 'cs2',
    title: 'Retail Hybrid Cloud Implementation',
    description: 'Retail chain implements hybrid cloud for omnichannel experience',
    client: 'Major Retail Chain',
    industry: 'Retail',
    challenge: 'Need to maintain on-premises systems while leveraging cloud capabilities',
    solution: 'Implemented Azure Stack and hybrid cloud architecture',
    results: 'Seamless integration, 50% faster time-to-market for new features',
    offeringIds: ['off2'],
    vendorIds: ['v2', 'v4'],
    tags: ['Hybrid Cloud', 'Retail', 'Azure'],
    published: true,
    createdAt: '2024-01-15T00:00:00Z',
  },
  {
    id: 'cs3',
    title: 'Manufacturing Data Platform',
    description: 'Smart factory data platform for real-time analytics',
    client: 'Manufacturing Company',
    industry: 'Manufacturing',
    challenge: 'Siloed data across multiple factories preventing insights',
    solution: 'Built centralized data platform on Google Cloud with real-time analytics',
    results: '30% improvement in operational efficiency, predictive maintenance enabled',
    offeringIds: ['off4'],
    vendorIds: ['v3'],
    tags: ['Data', 'Manufacturing', 'IoT'],
    published: true,
    createdAt: '2024-01-20T00:00:00Z',
  },
];

// ============================================
// OFFERINGS
// ============================================

export const offerings: Offering[] = [
  {
    id: 'off1',
    name: 'Cloud Migration Services',
    shortDescription: 'End-to-end cloud migration from planning to optimization',
    description: 'Comprehensive cloud migration services helping organizations move their applications and infrastructure to the cloud with minimal disruption. Our proven methodology ensures successful migration with optimized performance and cost.',
    solutionId: 'sol1',
    services: services.filter(s => s.offeringId === 'off1'),
    vendors: [vendors[0], vendors[1], vendors[2]], // AWS, Azure, Google Cloud
    caseStudies: caseStudies.filter(cs => cs.offeringIds.includes('off1')),
    tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
    published: true,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
  },
  {
    id: 'off2',
    name: 'Hybrid Cloud Solutions',
    shortDescription: 'Seamless integration of on-premises and cloud infrastructure',
    description: 'Build flexible hybrid cloud environments that combine the best of on-premises and cloud infrastructure. Enable workload portability, consistent operations, and unified management across your entire IT estate.',
    solutionId: 'sol1',
    services: services.filter(s => s.offeringId === 'off2'),
    vendors: [vendors[1], vendors[3], vendors[4]], // Azure, HPE, Dell
    caseStudies: caseStudies.filter(cs => cs.offeringIds.includes('off2')),
    tags: ['Hybrid Cloud', 'Azure', 'HPE'],
    published: true,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
  },
  {
    id: 'off3',
    name: 'Infrastructure as Code',
    shortDescription: 'Automate infrastructure management with modern DevOps practices',
    description: 'Implement infrastructure as code practices to automate provisioning, configuration, and management of your infrastructure. Increase deployment speed, reduce errors, and improve consistency across environments.',
    solutionId: 'sol1',
    services: services.filter(s => s.offeringId === 'off3'),
    vendors: [vendors[0], vendors[1], vendors[2]], // AWS, Azure, Google Cloud
    caseStudies: [],
    tags: ['DevOps', 'Automation', 'IaC'],
    published: true,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
  },
  {
    id: 'off4',
    name: 'Data Platform Services',
    shortDescription: 'Build scalable data platforms for analytics and AI',
    description: 'Design and implement modern data platforms that enable advanced analytics, machine learning, and real-time insights. Centralize your data, ensure quality, and unlock the value of your data assets.',
    solutionId: 'sol2',
    services: services.filter(s => s.offeringId === 'off4'),
    vendors: [vendors[0], vendors[2]], // AWS, Google Cloud
    caseStudies: caseStudies.filter(cs => cs.offeringIds.includes('off4')),
    tags: ['Data', 'Analytics', 'BigQuery', 'Redshift'],
    published: true,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find(s => s.id === id);
}

export function getOfferingById(id: string): Offering | undefined {
  return offerings.find(o => o.id === id);
}

export function getVendorById(id: string): Vendor | undefined {
  return vendors.find(v => v.id === id);
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.id === id);
}

export function getOfferingsBySolution(solutionId: string): Offering[] {
  return offerings.filter(o => o.solutionId === solutionId && o.published);
}

export function getSolutionsWithOfferings(): SolutionWithOfferings[] {
  return solutions
    .filter(s => s.published)
    .map(solution => ({
      ...solution,
      offerings: getOfferingsBySolution(solution.id),
    }));
}

export function getVendorWithRelations(vendorId: string): VendorWithRelations | undefined {
  const vendor = getVendorById(vendorId);
  if (!vendor) return undefined;

  return {
    ...vendor,
    offerings: offerings.filter(o => 
      o.vendors.some(v => v.id === vendorId) && o.published
    ),
    caseStudies: caseStudies.filter(cs => 
      cs.vendorIds.includes(vendorId) && cs.published
    ),
  };
}

export function getAllPublishedSolutions(): Solution[] {
  return solutions.filter(s => s.published);
}

export function getAllPublishedOfferings(): Offering[] {
  return offerings.filter(o => o.published);
}

export function getAllVendors(): Vendor[] {
  return vendors;
}

export function getAllPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(cs => cs.published);
}
