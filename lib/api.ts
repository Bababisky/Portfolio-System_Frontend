/**
 * API Client for Backend Integration
 */

const API_BASE_URL = 'https://ec2-43-208-245-41.ap-southeast-7.compute.amazonaws.com/api/v1';

// API Response Types
export interface VendorAPIResponse {
  vendor_id: number;
  vendor_name: string;
  contact_email: string;
  website_url: string;
  vendor_icon: string;
  description: string | null;
}

// Fetch options with SSL bypass for self-signed cert
const fetchOptions: RequestInit = {
  headers: {
    'Accept': 'application/json',
  },
  cache: 'no-store', // Disable caching for fresh data
  // @ts-ignore - Node.js specific option
  ...(typeof process !== 'undefined' && process.env.NODE_ENV !== 'production' && {
    // Bypass SSL verification in development (Node.js only)
    agent: undefined,
  }),
};

/**
 * Fetch all vendors from API
 */
export async function fetchVendors(): Promise<VendorAPIResponse[]> {
  try {
    // In Node.js environment (server-side), bypass SSL verification
    if (typeof process !== 'undefined' && process.versions?.node) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }
    
    const response = await fetch(`${API_BASE_URL}/vendors/`, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch vendors: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    throw error;
  }
}

/**
 * Fetch single vendor by ID
 */
export async function fetchVendorById(id: number): Promise<VendorAPIResponse | null> {
  try {
    const vendors = await fetchVendors();
    const vendor = vendors.find(v => v.vendor_id === id);
    return vendor || null;
  } catch (error) {
    console.error(`Error fetching vendor ${id}:`, error);
    return null;
  }
}
