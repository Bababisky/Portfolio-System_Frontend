'use client';

/**
 * World Class Partnership Component
 * Displays vendor partners from API
 */

import { useEffect, useState } from 'react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import type { VendorFromAPI } from '@/types';

export function WorldClassPartnership() {
  const { t } = useLanguage();
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
      } catch (err) {
        console.error('Error loading vendors:', err);
        setError('Failed to load partners');
      } finally {
        setLoading(false);
      }
    }

    loadVendors();
  }, []);

  if (loading) {
    return (
      <div>
        <div className="bg-gradient-to-r from-red-600 to-red-400 text-white py-4 px-8 mb-8">
          <h3 className="text-3xl font-bold">{t('worldClassPartnership')}</h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-neutral-100 rounded-lg h-20 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="bg-gradient-to-r from-red-600 to-red-400 text-white py-4 px-8 mb-8">
          <h3 className="text-3xl font-bold">{t('worldClassPartnership')}</h3>
        </div>
        <div className="text-center py-8 text-neutral-500">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-red-600 to-red-400 text-white py-4 px-8 mb-8">
        <h3 className="text-3xl font-bold">{t('worldClassPartnership')}</h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {vendors.map((vendor, index) => (
          <ScrollReveal key={vendor.id} delay={index * 0.02}>
            <Link href={`/vendors/${vendor.name.toLowerCase().replace(/\s+/g, '')}`}>
              <div className="bg-white border border-neutral-200 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-lg transition-shadow cursor-pointer group">
                <span className="text-xs font-semibold text-center group-hover:text-red-600 transition-colors">
                  {vendor.name}
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
