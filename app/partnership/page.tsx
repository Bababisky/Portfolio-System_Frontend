/**
 * Partnership Page
 * Shows all technology partners with logos
 */

'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export default function PartnershipPage() {
  // Partnership logos data
  const partners = [
    'aws', 'apple', 'dell', 'googlecloud', 'tti', 'airfield',
    'casper', 'cadex', 'checkmarx', 'cisco', 'codan', 'crowdstrike',
    'fis', 'fortinet', 'freedom', 'forescout', 'frequentis', 'guardrec',
    'hpe', 'hitachi', 'hp', 'ibm', 'hpearuba', 'huawei',
    'informatica', 'kac', 'mandiant', 'microsoft', 'netka', 'netskope',
    'msazure', 'netapp', 'nutanix', 'nvidia', 'redhat', 'openmetadata',
    'oracle', 'paloalto', 'sangfor', 'parkair', 'sas', 'splunk',
    'vmware', 'tableau', 'tenable', 'veritas', 'trendmicro', 'veeam',
    'wolterskluwer', 'youyang', 'zscaler'
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-center mb-4">Partnership</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <ScrollReveal key={index} delay={index * 0.01}>
                <div className="bg-white border border-neutral-200 rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow">
                  <img
                    src={`/images/logos/${partner}-logo.png`}
                    alt={partner}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Try different variations
                      const currentSrc = e.currentTarget.src;
                      if (currentSrc.includes('-logo.png')) {
                        e.currentTarget.src = currentSrc.replace('-logo.png', '-Logo.png');
                      } else if (currentSrc.includes('-Logo.png')) {
                        e.currentTarget.src = currentSrc.replace('-Logo.png', '_logo.png');
                      } else {
                        // Fallback to text
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs font-semibold text-neutral-600 text-center">${partner.toUpperCase()}</span>`;
                        }
                      }
                    }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
