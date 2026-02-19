/**
 * Vendor Helper Functions
 * Transform API data to app format
 */

import type { VendorFromAPI } from '@/types';
import type { VendorAPIResponse } from './api';

/**
 * Transform API vendor to app format
 */
export function transformVendor(apiVendor: VendorAPIResponse): VendorFromAPI {
  return {
    id: apiVendor.vendor_id,
    name: apiVendor.vendor_name,
    description: apiVendor.description,
    logo: apiVendor.vendor_icon,
    website: apiVendor.website_url,
    contactEmail: apiVendor.contact_email,
  };
}

/**
 * Transform multiple vendors
 */
export function transformVendors(apiVendors: VendorAPIResponse[]): VendorFromAPI[] {
  return apiVendors.map(transformVendor);
}
