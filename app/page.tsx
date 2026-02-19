/**
 * Homepage - Yip In Tsoi Portfolio
 */
'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { t } = useLanguage();
  // Solutions data
  const solutions = [
    {
      name: 'Cloud and Infrastructure Modernization',
      description: 'ยกระดับระบบโครงสร้างพื้นฐานทาง IT ของธุรกิจ ผสานระบบ Cloud และ On-Premises สู่ Hybrid Multi-Cloud'
    },
    {
      name: 'Cyber Security',
      description: 'Augment security for the Cloud, Data Center, devices, and users across the organization with Yip In Tsoi\'s comprehensive range of solutions and services.'
    },
    {
      name: 'Digital Business Solutions',
      description: 'Transform into Digital Business and confidently pursue Digital Transformation with Yip In Tsoi'
    },
    {
      name: 'Data Analytic & AI Solutions',
      description: 'Turning business data into value, laying the foundation for data management to create innovations for sustainable business growth'
    },
    {
      name: 'Financial & Banking Services',
      description: 'Unlock the potential of the finance and banking business, expanding access to service seamlessly.'
    },
    {
      name: 'Professional Service',
      description: 'Ensure continuous agility in managing and maintaining your IT systems with Yip In Tsoi\'s comprehensive 24x7 services.'
    },
    {
      name: 'CNS : Communication Navigation Surveillance',
      description: 'Communication systems, air navigation systems and aircraft surveillance system. It is an essential system for pilots and air traffic controllers. These facilitate the process of determining where the plane is and when and how to reach its destination.'
    },
    {
      name: 'Media Innovation',
      description: 'Virtual Reality Production offers directors and producers the opportunity to create a wide and believable vision of landscape and wildlife from their own inspirational sources.'
    }
  ];

  // Best of Product cards
  const bestProducts = [
    {
      title: 'Cloud Migration',
      tag: 'Cloud Modernization',
      description: 'The Cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
      image: '/images/cloud-migration.jpg',
      partners: ['AWS', 'Google Cloud', 'ORACLE', 'NetApp']
    },
    {
      title: 'Cloud Management',
      tag: 'Cloud Infrastructure',
      description: 'While the concept of Cloud computing may present the idea of an on-demand convenience for eliminating the need for manual administration of back-end IT systems, the actual use of Cloud services comes with many challenges.',
      image: '/images/cloud-management.jpg',
      partners: ['AWS', 'Google Cloud', 'Microsoft']
    },
    {
      title: 'Data Analytics Solutions',
      tag: 'Data',
      description: 'Turning business data into value, establishing the foundation for data management to create innovations for Sustainable Business Growth. Nowadays, data has become another key element in the operations of every...',
      image: '/images/data-analytics.jpg',
      partners: ['Google Cloud', 'NVIDIA']
    }
  ];

  // Subsidiaries
  const subsidiaries = [
    { name: 'YIP IN TSOI', logo: '/images/subsidiaries/yipintsoi.png' },
    { name: 'YBT JACKS', logo: '/images/subsidiaries/ybtjacks.png' },
    { name: 'TCEL', logo: '/images/subsidiaries/tcel.png' },
    { name: 'Tangerine', logo: '/images/subsidiaries/tangerine.png' },
    { name: 'Robinhood', logo: '/images/subsidiaries/robinhood.png' },
    { name: 'SISSONS', logo: '/images/subsidiaries/sissons.png' },
    { name: 'Enrich Broker', logo: '/images/subsidiaries/eb.png' },
    { name: 'YIP IN TSOI solutions', logo: '/images/subsidiaries/yit-solutions.png' },
    { name: 'YIPINTSOI CONSULTING', logo: '/images/subsidiaries/consulting.png' },
    { name: 'YIPINTSOI ENERGY', logo: '/images/subsidiaries/energy.png' }
  ];

  // World Class Partners
  const partners = [
    'AWS', 'Apple', 'Dell Technologies', 'Google Cloud', 'ITI', 'AIRFIELD',
    'CASPER', 'CADEX', 'Checkmarx', 'CISCO', 'EC Council', 'CROWDSTRIKE',
    'F1S', 'FORTINET', 'FREEDOM', 'FORESCOUT', 'FREQUENTIS', 'guardREC',
    'HPE', 'Hitachi Vantara', 'HP', 'IBM', 'HPE aruba', 'HUAWEI',
    'Informatica', 'KAC', 'MANDIANT', 'Microsoft', 'netka', 'netskope',
    'Microsoft Azure', 'NetApp', 'NUTANIX', 'NVIDIA', 'Red Hat', 'Open Metadata',
    'ORACLE', 'paloalto', 'SANGFOR', 'PARK AIR', 'SAS', 'splunk',
    'VMware', 'tableau', 'tenable', 'VERITAS', 'TREND', 'veeam',
    'Wolters Kluwer', 'YOUYANG', 'zscaler'
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/yip-in-tsoi-building.jpg"
          alt="Yip In Tsoi Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-6">
              <div className="text-red-600">{t('heroTitle1')}</div>
              <div className="text-red-600">{t('heroTitle2')}</div>
              <div className="text-red-600">{t('heroTitle3')}</div>
            </h1>
            <p className="text-black text-xl max-w-4xl mx-auto leading-relaxed">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions & Product Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-12">
              {t('solutionsTitle')}
            </h2>
          </ScrollReveal>

          <div className="space-y-1">
            {solutions.map((solution, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <Link href={`/solutions/${index + 1}`}>
                  <div className="border-b border-neutral-300 py-6 hover:bg-red-50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-8">
                      <h3 className="text-xl font-semibold w-1/3">{solution.name}</h3>
                      <p className="text-neutral-600 w-2/3">{solution.description}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Best of Product Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-12">
              {t('bestOfProduct')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestProducts.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link href={`/products/${index + 1}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer h-full flex flex-col">
                    <div className="h-48 bg-neutral-200 relative flex-shrink-0">
                      {/* Placeholder for product image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-400">
                        <span className="text-neutral-600 font-semibold">{product.title}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-red-600 font-medium">{product.tag}</span>
                        <span className="px-3 py-1 bg-neutral-200 text-neutral-700 text-xs rounded-full">
                          {t('tag')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                      <p className="text-neutral-600 text-sm mb-6 leading-relaxed line-clamp-4 flex-1">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.partners.map((partner, i) => (
                          <span key={i} className="text-xs font-medium text-neutral-700">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries & Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-12">
              {t('subsidiariesTitle')}
            </h2>
          </ScrollReveal>

          {/* Our Subsidiaries */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-600 to-red-400 text-white py-4 px-8 mb-8">
              <h3 className="text-3xl font-bold">{t('ourSubsidiaries')}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {subsidiaries.map((sub, index) => (
                <ScrollReveal key={index} delay={index * 0.03}>
                  <div className="bg-white border border-neutral-200 rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-lg transition-shadow">
                    <span className="text-sm font-semibold text-center">{sub.name}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* World Class Partnership */}
          <div>
            <div className="bg-gradient-to-r from-red-600 to-red-400 text-white py-4 px-8 mb-8">
              <h3 className="text-3xl font-bold">{t('worldClassPartnership')}</h3>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {partners.map((partner, index) => (
                <ScrollReveal key={index} delay={index * 0.02}>
                  <div className="bg-white border border-neutral-200 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-lg transition-shadow">
                    <span className="text-xs font-semibold text-center">{partner}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
