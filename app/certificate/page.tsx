/**
 * Certificate Page
 * Shows all technology certifications with logos - ordered as specified
 */

'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export default function CertificatePage() {
  // Certificate data ordered as in the image (3 columns per row)
  const certificateData = [
    // Row 1
    { partner: 'Amazon Web Services', logo: 'aws', certificates: ['AWS Certified Cloud Practitioner (10)', 'AWS Certified Solutions Architect (5)'] },
    { partner: 'Apple', logo: 'apple', certificates: ['Apple Certified Professional (3)'] },
    { partner: 'Dell', logo: 'dell', certificates: ['Dell EMC Certified Specialist (8)', 'Dell Technologies Certified (4)'] },
    // Row 2
    { partner: 'Google Cloud', logo: 'googlecloud', certificates: ['Google Cloud Certified Professional (6)'] },
    { partner: 'TTI', logo: 'tti', certificates: ['ITI Certified Professional (5)'] },
    { partner: 'Airfield Technology', logo: 'airfield', certificates: ['Airfield Certified Engineer (3)'] },
    // Row 3
    { partner: 'Cadex', logo: 'cadex', certificates: ['Cadex Certified Specialist (2)'] },
    { partner: 'Casper', logo: 'casper', certificates: ['Casper Certified Professional (4)'] },
    { partner: 'Checkmarx', logo: 'checkmarx', certificates: ['Checkmarx Security Expert (5)'] },
    // Row 4
    { partner: 'Cisco', logo: 'cisco', certificates: ['Cisco Certified Network Professional (12)', 'Cisco Certified Specialist (8)'] },
    { partner: 'Codan', logo: 'codan', certificates: ['Codan Certified Professional (3)'] },
    { partner: 'CrowdStrike', logo: 'crowdstrike', certificates: ['CrowdStrike Certified Falcon Administrator (6)'] },
    // Row 5
    { partner: 'FIS', logo: 'fis', certificates: ['FIS Certified Professional (4)'] },
    { partner: 'Forescout', logo: 'forescout', certificates: ['Forescout Certified Administrator (5)'] },
    { partner: 'Fortinet', logo: 'fortinet', certificates: ['Fortinet NSE Certified (10)', 'Fortinet Security Expert (5)'] },
    // Row 6
    { partner: 'Freedom', logo: 'freedom', certificates: ['Freedom Certified Professional (4)'] },
    { partner: 'Frequentis', logo: 'frequentis', certificates: ['Frequentis Certified Engineer (3)'] },
    { partner: 'GuardREC', logo: 'guardrec', certificates: ['GuardREC Certified Specialist (2)'] },
    // Row 7
    { partner: 'HPE', logo: 'hpe', certificates: ['HPE Certified Professional (8)', 'HPE Master ASE (4)'] },
    { partner: 'Hitachi Vantara', logo: 'hitachi', certificates: ['Hitachi Vantara Certified Professional (6)'] },
    { partner: 'HP', logo: 'hp', certificates: ['HP Certified Professional (7)'] },
    // Row 8
    { partner: 'HPE Aruba', logo: 'hpearuba', certificates: ['Aruba Certified Professional (7)'] },
    { partner: 'Huawei', logo: 'huawei', certificates: ['Huawei Certified ICT Professional (9)'] },
    { partner: 'IBM', logo: 'ibm', certificates: ['IBM Certified Professional (6)'] },
    // Row 9
    { partner: 'Informatica', logo: 'informatica', certificates: ['Informatica Certified Professional (5)'] },
    { partner: 'KAC', logo: 'kac', certificates: ['KAC Certified Specialist (3)'] },
    { partner: 'Mandiant', logo: 'mandiant', certificates: ['Mandiant Certified Professional (4)'] },
    // Row 10
    { partner: 'Microsoft', logo: 'microsoft', certificates: ['Microsoft Certified: Azure Administrator (7)', 'Microsoft Certified: Security Administrator (5)'] },
    { partner: 'Microsoft Azure', logo: 'msazure', certificates: ['Azure Solutions Architect (6)'] },
    { partner: 'NetApp', logo: 'netapp', certificates: ['NetApp Certified Professional (8)'] },
    // Row 11
    { partner: 'Netka', logo: 'netka', certificates: ['Netka Certified Professional (4)'] },
    { partner: 'Netskope', logo: 'netskope', certificates: ['Netskope Certified Cloud Security (6)'] },
    { partner: 'Nutanix', logo: 'nutanix', certificates: ['Nutanix Certified Professional (7)'] },
    // Row 12
    { partner: 'NVIDIA', logo: 'nvidia', certificates: ['NVIDIA Certified Professional (7)'] },
    { partner: 'OpenMetadata', logo: 'openmetadata', certificates: ['OpenMetadata Certified (3)'] },
    { partner: 'Oracle', logo: 'oracle', certificates: ['Oracle Certified Professional (6)', 'Oracle Cloud Infrastructure (4)'] },
    // Row 13
    { partner: 'Palo Alto Networks', logo: 'paloalto', certificates: ['Palo Alto Networks Certified (9)'] },
    { partner: 'Park Air', logo: 'parkair', certificates: ['Park Air Certified Engineer (3)'] },
    { partner: 'Red Hat', logo: 'redhat', certificates: ['Red Hat Certified Engineer (8)', 'Red Hat Certified Specialist (5)'] },
    // Row 14
    { partner: 'Sangfor', logo: 'sangfor', certificates: ['Sangfor Certified Professional (6)'] },
    { partner: 'SAS', logo: 'sas', certificates: ['SAS Certified Professional (5)'] },
    { partner: 'Splunk', logo: 'splunk', certificates: ['Splunk Certified Admin (7)', 'Splunk Certified Architect (3)'] },
    // Row 15
    { partner: 'Tableau', logo: 'tableau', certificates: ['Tableau Certified Professional (6)'] },
    { partner: 'Tenable', logo: 'tenable', certificates: ['Tenable Certified Professional (5)'] },
    { partner: 'Trend Micro', logo: 'trendmicro', certificates: ['Trend Micro Certified Professional (8)'] },
    // Row 16
    { partner: 'Veeam', logo: 'veeam', certificates: ['Veeam Certified Engineer (9)', 'Veeam Certified Architect (4)'] },
    { partner: 'Veritas', logo: 'veritas', certificates: ['Veritas Certified Specialist (7)'] },
    { partner: 'VMware', logo: 'vmware', certificates: ['VMware Certified Professional (10)', 'VMware Certified Advanced Professional (3)'] },
    // Row 17
    { partner: 'Wolters Kluwer', logo: 'wolterskluwer', certificates: ['Wolters Kluwer Certified Professional (4)'] },
    { partner: 'YouYang', logo: 'youyang', certificates: ['YouYang Certified Engineer (3)'] },
    { partner: 'Zscaler', logo: 'zscaler', certificates: ['Zscaler Certified Cloud Security (6)'] }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-8 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-center mb-4">Certificates</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-12 bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificateData.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  {/* Partner Logo */}
                  <div className="flex items-center justify-center h-20 mb-4">
                    <img
                      src={`/images/logos/${item.logo}-logo.png`}
                      alt={item.partner}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const currentSrc = e.currentTarget.src;
                        if (currentSrc.includes('-logo.png')) {
                          e.currentTarget.src = currentSrc.replace('-logo.png', '-Logo.png');
                        } else {
                          e.currentTarget.style.display = 'none';
                        }
                      }}
                    />
                  </div>

                  {/* Partner Name */}
                  <h3 className="text-lg font-bold text-center mb-4">{item.partner}</h3>

                  {/* Certificates List */}
                  <div className="space-y-2">
                    {item.certificates.map((cert, certIndex) => (
                      <div
                        key={certIndex}
                        className="bg-neutral-50 border border-neutral-200 rounded-full px-4 py-2 text-sm text-center"
                      >
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
