/**
 * API Route for Vendors
 * Proxy to backend API to handle CORS and SSL issues
 */

import { fetchVendors } from '@/lib/api';
import { transformVendors } from '@/lib/vendorHelpers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiVendors = await fetchVendors();
    const vendors = transformVendors(apiVendors);
    
    return NextResponse.json(vendors);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vendors' },
      { status: 500 }
    );
  }
}
