'use client';

/**
 * World Class Partnership Component
 * Displays all partnership logos
 */

import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export function WorldClassPartnership() {
  const { t } = useLanguage();

  // All partnership logos
  const allPartners = [
    'AWS', 'Red Hat', 'Oracle', 'VMware', 'Apple', 'Dell',
    'Google Cloud', 'TTI', 'Airfield', 'Casper', 'Cadex', 'Checkmarx',
    'Cisco', 'CrowdStrike', 'Fis', 'Fortinet', 'Freedom',
    'Forescout', 'Frequentis', 'GuardREC', 'HPE', 'Hitachi', 'HP',
    'IBM', 'HPE Aruba', 'Huawei', 'Informatica', 'KAC', 'Mandiant',
    'Microsoft', 'Netka', 'Netskope', 'MSAzure', 'NetApp', 'Nutanix',
    'NVIDIA', 'OpenMetadata', 'Palo Alto', 'Sangfor', 'Park Air', 'SAS',
    'Splunk', 'Tableau', 'Tenable', 'Veritas', 'Trend Micro', 'Veeam',
    'Wolters Kluwer', 'YouYang', 'Zscaler'
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-red-600 to-red-400 text-white py-4 px-8 mb-8">
        <h3 className="text-3xl font-bold">{t('worldClassPartnership')}</h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {allPartners.map((partner, index) => {
          const slug = partner.toLowerCase().replace(/\s+/g, '');
          return (
            <ScrollReveal key={index} delay={index * 0.02}>
              <Link href={`/partnership/${slug}`}>
                <div className="bg-white border border-neutral-200 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-lg transition-shadow cursor-pointer group">
                  <img
                    src={`/images/logos/${slug}-logo.png`}
                    alt={partner}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Try with capital L
                      const currentSrc = e.currentTarget.src;
                      if (currentSrc.includes('-logo.png')) {
                        e.currentTarget.src = currentSrc.replace('-logo.png', '-Logo.png');
                      } else if (currentSrc.includes('-Logo.png')) {
                        // Try with underscore
                        e.currentTarget.src = currentSrc.replace('-Logo.png', '_logo.png').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
                      } else {
                        // Fallback to text
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs font-semibold text-center group-hover:text-red-600 transition-colors">${partner}</span>`;
                        }
                      }
                    }}
                  />
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
