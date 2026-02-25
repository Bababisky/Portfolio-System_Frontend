/**
 * Homepage - Yip In Tsoi Portfolio
 */
'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { WorldClassPartnership } from '@/components/home/WorldClassPartnership';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { t } = useLanguage();
  // Solutions data
  const solutions = [
    {
      slug: 'cloudandinfrastructuremodernization',
      name: 'Cloud and Infrastructure Modernization',
      description: 'ยกระดับระบบโครงสร้างพื้นฐานทาง IT ของธุรกิจ ผสานระบบ Cloud และ On-Premises สู่ Hybrid Multi-Cloud',
      bgImage: '/images/backgrounds/cloudinframod.png'
    },
    {
      slug: 'cybersecurity',
      name: 'Cyber Security',
      description: 'Augment security for the Cloud, Data Center, devices, and users across the organization with Yip In Tsoi\'s comprehensive range of solutions and services.',
      bgImage: '/images/backgrounds/cybersecurity.png'
    },
    {
      slug: 'digitalbusinesssolutions',
      name: 'Digital Business Solutions',
      description: 'Transform into Digital Business and confidently pursue Digital Transformation with Yip In Tsoi',
      bgImage: '/images/backgrounds/digitalbusiness.png'
    },
    {
      slug: 'dataanalyticandaisolutions',
      name: 'Data Analytic & AI Solutions',
      description: 'Turning business data into value, laying the foundation for data management to create innovations for sustainable business growth',
      bgImage: '/images/backgrounds/dataanalytics.png'
    },
    {
      slug: 'financialandbankingservices',
      name: 'Financial & Banking Services',
      description: 'Unlock the potential of the finance and banking business, expanding access to service seamlessly.',
      bgImage: '/images/backgrounds/financial.png'
    },
    {
      slug: 'professionalservice',
      name: 'Professional Service',
      description: 'Ensure continuous agility in managing and maintaining your IT systems with Yip In Tsoi\'s comprehensive 24x7 services.',
      bgImage: '/images/backgrounds/professional.png'
    },
    {
      slug: 'cns',
      name: 'CNS : Communication Navigation Surveillance',
      description: 'Communication systems, air navigation systems and aircraft surveillance system. It is an essential system for pilots and air traffic controllers. These facilitate the process of determining where the plane is and when and how to reach its destination.',
      bgImage: '/images/backgrounds/cns.png',
      bgPosition: 'center 30%'
    },
    {
      slug: 'mediainnovation',
      name: 'Media Innovation',
      description: 'Virtual Reality Production offers directors and producers the opportunity to create a wide and believable vision of landscape and wildlife from their own inspirational sources.',
      bgImage: '/images/backgrounds/media.png'
    }
  ];

  // Best of Product cards
  const bestProducts = [
    {
      slug: 'cloudmigration',
      title: 'Cloud Migration',
      tag: 'Cloud Modernization',
      description: 'The Cloud has transformed into a foundational infrastructure for businesses, and the migration of traditional IT systems to the Cloud, for increased flexibility, has become one of the top strategic priorities for businesses worldwide, including Thailand.',
      image: '/images/cloud-migration.jpg',
      bgColor: 'from-neutral-200 to-neutral-300',
      partners: [
        { name: 'AWS', logo: '/images/logos/aws-logo.png' },
        { name: 'Dell', logo: '/images/logos/dell-logo.png' },
        { name: 'Google Cloud', logo: '/images/logos/googlecloud-logo.png' },
        { name: 'Cisco', logo: '/images/logos/cisco-logo.png' },
        { name: 'HPE', logo: '/images/logos/hpe-logo.png' },
        { name: 'Huawei', logo: '/images/logos/huawei-logo.png' }
      ]
    },
    {
      slug: 'vmwareservice',
      title: 'VMware Service Catalogue – Standard',
      tag: 'Cloud Modernization',
      tag2: 'Virtualization',
      description: 'VMware Platform Services provides end-to-end virtualization and cloud infrastructure solutions covering design, implementation, migration, optimization, disaster recovery, and ongoing platform maintenance...',
      image: '/images/vmware-service.jpg',
      bgColor: 'from-neutral-100 to-neutral-200',
      partners: [
        { name: 'AWS', logo: '/images/logos/aws-logo.png' },
        { name: 'Google Cloud', logo: '/images/logos/googlecloud-logo.png' },
        { name: 'Cisco', logo: '/images/logos/cisco-logo.png' },
        { name: 'HPE', logo: '/images/logos/hpe-logo.png' },
        { name: 'Microsoft', logo: '/images/logos/microsoft-logo.png' },
        { name: 'Nutanix', logo: '/images/logos/nutanix-logo.png' }
      ]
    },
    {
      slug: 'cloudmanagement',
      title: 'Cloud Management',
      tag: 'Cloud Infrastructure',
      tag2: 'Cloud',
      description: 'While the concept of Cloud computing may present the idea of an on-demand convenience for eliminating the need for manual administration of back-end IT systems, the actual use of Cloud services comes with many challenges. This is due to the complexity arising from....',
      image: '/images/cloud-management.jpg',
      bgColor: 'from-pink-200 to-pink-300',
      partners: [
        { name: 'AWS', logo: '/images/logos/aws-logo.png' },
        { name: 'Google Cloud', logo: '/images/logos/googlecloud-logo.png' },
        { name: 'Microsoft', logo: '/images/logos/microsoft-logo.png' }
      ]
    },
    {
      slug: 'zerotrust',
      title: 'Zero Trust Access & Network Security',
      tag: 'Network Engineer',
      tag2: 'Security',
      description: 'The Zero Trust concept has gained widespread adoption as a fundamental security strategy for corporate IT systems. It involves implementing protocols that restrict access to Business Application systems, Data...',
      image: '/images/zero-trust.jpg',
      bgColor: 'from-blue-400 to-blue-500',
      partners: [
        { name: 'Netskope', logo: '/images/logos/netskope-logo.png' },
        { name: 'Palo Alto', logo: '/images/logos/paloalto-logo.png' },
        { name: 'Zscaler', logo: '/images/logos/zscaler-logo.png' }
      ]
    },
    {
      slug: 'dataanalyticssolutions',
      title: 'Data Analytics Solutions',
      tag: 'Cloud Modernization',
      tag2: 'Data',
      description: 'Turning business data into value, establishing the foundation for data management to create innovations for Sustainable Business Growth. Nowadays, data has become another key element in the operations of every....',
      image: '/images/data-analytics.jpg',
      bgColor: 'from-amber-900 to-stone-800',
      partners: [
        { name: 'Google Cloud', logo: '/images/logos/googlecloud-logo.png' },
        { name: 'Microsoft', logo: '/images/logos/microsoft-logo.png' },
        { name: 'NVIDIA', logo: '/images/logos/nvidia-logo.png' },
        { name: 'SAS', logo: '/images/logos/sas-logo.png' },
        { name: 'Tableau', logo: '/images/logos/tableau-logo.png' }
      ]
    }
  ];

  // Subsidiaries
  const subsidiaries = [
    { name: 'YIP IN TSOI', logo: '/images/logos/yip-logo.png' },
    { name: 'YBT JACKS', logo: '/images/logos/yipjacks-logo.png' },
    { name: 'TCEL', logo: '/images/logos/tccl-logo.png' },
    { name: 'Tangerine', logo: '/images/logos/tangerine-logo.png' },
    { name: 'Robinhood', logo: '/images/logos/robinhood-logo.png' },
    { name: 'SISSONS', logo: '/images/logos/sissons-logo.png' },
    { name: 'Enrich Broker', logo: '/images/logos/eb-logo.png' },
    { name: 'YIP IN TSOI solutions', logo: '/images/logos/yip-solutions-logo.png' },
    { name: 'YIPINTSOI CONSULTING', logo: '/images/logos/consulting-logo.png' },
    { name: 'YIPINTSOI ENERGY', logo: '/images/logos/energy-logo.png' }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/backgrounds/yip-in-tsoi-building.jpg"
          alt="Yip In Tsoi Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-6 drop-shadow-lg">
              <div className="text-red-600">{t('heroTitle1')}</div>
              <div className="text-red-600">{t('heroTitle2')}</div>
              <div className="text-red-600">{t('heroTitle3')}</div>
            </h1>
            <p className="text-white text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-md bg-black/20 px-8 py-4 rounded-lg backdrop-blur-sm">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions & Product Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-12">
              Products <span className="text-red-600">&</span> Solutions
            </h2>
          </ScrollReveal>
        </div>

        <div className="space-y-0">
          {solutions.map((solution, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <Link href={`/solutions/${solution.slug}`}>
                <div 
                  className="border-b border-neutral-200 py-8 transition-all cursor-pointer group relative overflow-hidden"
                >
                  {/* Background image - only visible on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url(${solution.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: solution.bgPosition || 'center'
                    }}
                  ></div>
                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-neutral-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="container mx-auto px-8 max-w-7xl relative z-10">
                    <div className="flex items-start gap-12">
                      <h3 className="text-xl font-medium w-1/3 text-neutral-800 group-hover:text-white transition-colors">{solution.name}</h3>
                      <p className="text-neutral-500 w-2/3 text-base group-hover:text-neutral-200 transition-colors">{solution.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Best of Product Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-12">
              Best <span className="text-red-600">of</span> Product
            </h2>
          </ScrollReveal>

          {/* Scrollable container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'thin' }}>
              {bestProducts.map((product, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Link href={`/products/${product.slug}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer flex flex-col min-w-[320px] max-w-[320px] h-[480px] snap-start">
                      {/* Image placeholder with gradient background */}
                      <div className={`h-48 bg-gradient-to-br ${product.bgColor} relative flex-shrink-0`}>
                        {/* Empty space for future image */}
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full">
                            {product.tag}
                          </span>
                          {product.tag2 && (
                            <span className="px-3 py-1 bg-neutral-200 text-neutral-700 text-xs rounded-full">
                              {product.tag2}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                        
                        <p className="text-neutral-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                          {product.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 items-center pt-3 border-t border-neutral-200 mt-auto">
                          {product.partners.map((partner, i) => (
                            <div key={i} className="h-4 flex items-center">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-full w-auto object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const parent = e.currentTarget.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<span class="text-xs font-medium text-neutral-700">${partner.name}</span>`;
                                  }
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries & Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-12">
              Our Subsidiaries <span className="text-red-600">&</span>  <br/>
              World Class Partnership
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
                    <img
                      src={sub.logo}
                      alt={sub.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        // Fallback to text if image not found
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-sm font-semibold text-center">${sub.name}</span>`;
                        }
                      }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* World Class Partnership */}
          <WorldClassPartnership />
        </div>
      </section>
    </PageTransition>
  );
}
