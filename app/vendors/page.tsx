/**
 * Vendors Listing Page
 * Shows all technology partners/vendors
 */

'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';
import type { VendorFromAPI } from '@/types';
import { useEffect, useState } from 'react';

export default function VendorsPage() {
  const [vendors, setVendors] = useState<VendorFromAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadVendors() {
      try {
        const response = await fetch('/api/vendors');
        
        if (!response.ok) {
          throw new Error('Failed to fetch vendors');
        }
        
        const data = await response.json();
        setVendors(data);
      } catch (e) {
        console.error('Error loading vendors:', e);
        setError('Failed to load vendors. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadVendors();
  }, []);

  if (loading) {
    return (
      <PageTransition>
        <section className="section-padding pt-32 pb-16">
          <div className="container-custom max-w-6xl">
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">Loading vendors...</p>
            </div>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Header */}
      <section className="section-padding pt-32 pb-16">
        <div className="container-custom max-w-6xl">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-neutral-600">
              <Link 
                href="/"
                className="hover:text-primary-600 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-neutral-900">Partners</span>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Technology Partners
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
              We collaborate with leading technology vendors to deliver best-in-class solutions for our clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-6xl">
          {error ? (
            <div className="text-center py-16">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <p className="text-neutral-600">Please try refreshing the page.</p>
            </div>
          ) : vendors.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">No vendors available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vendors.map((vendor, index) => (
                <ScrollReveal key={vendor.id} delay={index * 0.05}>
                  <Link
                    href={`/vendors/${vendor.name.toLowerCase().replace(/\s+/g, '')}`}
                    className="block border border-neutral-200 rounded-lg p-8 hover:border-primary-500 hover:shadow-lg transition-all group"
                  >
                    {/* Vendor Logo/Icon */}
                    <div className="mb-4 h-16 flex items-center justify-center">
                      <img 
                        src={`/images/logos/${vendor.name.toLowerCase().replace(/\s+/g, '_')}-Logo.png`}
                        alt={vendor.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          // Try lowercase 'logo'
                          const currentSrc = e.currentTarget.src;
                          if (currentSrc.includes('-Logo.png')) {
                            e.currentTarget.src = currentSrc.replace('-Logo.png', '-logo.png');
                          } else if (currentSrc.includes('_')) {
                            // Try with dash instead of underscore
                            e.currentTarget.src = currentSrc.replace(/_/g, '-');
                          } else {
                            // Fallback to text if image not found
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="text-4xl font-bold text-primary-600">${vendor.name.substring(0, 2).toUpperCase()}</div>`;
                            }
                          }
                        }}
                      />
                    </div>

                    {/* Vendor Name */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      {vendor.name}
                    </h3>

                    {/* Description */}
                    {vendor.description && (
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                        {vendor.description}
                      </p>
                    )}

                    {/* Website */}
                    {vendor.website && (
                      <div className="text-sm text-primary-600 group-hover:text-primary-700">
                        Visit Website →
                      </div>
                    )}
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
