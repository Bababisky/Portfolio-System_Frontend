/**
 * About Page
 * Company information, history, subsidiaries, and partnerships
 */

'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { WorldClassPartnership } from '@/components/home/WorldClassPartnership';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  // Subsidiaries data
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
      {/* About YIP IN TSOI Section */}
      <section className="pt-32 pb-20 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-center text-red-600 mb-16">About YIP IN TSOI</h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Left Side - Name Meaning */}
            <ScrollReveal>
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-700 mb-2">Yip In Tsoi in Hakka Chinese, is pronounced as</p>
                  <p className="text-2xl font-bold text-red-600">"Yâb Hien Chòi"</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side - Meaning */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-700">
                    <span className="font-bold text-red-600">"Yâb"</span> means leaves
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-bold text-red-600">"Hien Chòi"</span> means a wise sage with wisdom, virtue, prosperity, and loyalty
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Logo Section */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-12 shadow-lg">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="/images/logos/yip-logo.png" 
                  alt="YIP IN TSOI Logo" 
                  className="h-32 w-auto"
                />
              </div>

              {/* Logo Description */}
              <div className="flex-1 space-y-4 text-neutral-700">
                <p>
                  The symbol used for trade and as the company's initial seal was a leaf.
                </p>
                <p>
                  The current logo of Yip In Tsoi resembles a cactus, symbolizing strength, power, and endless growth.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Organizational History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12">Organizational History</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <ScrollReveal>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  Yip In Tsoi was a young man who was ambitious and eager. After completing his studies at a leading university in China, he completed a financial internship in Hong Kong for two years before returning to assist his father (Yab Long) in his trading business. This provided an opportunity for him to explore trade operations in the southern region of Thailand. At that time, the mining and mineral industry showed promising prospects in 1926, Yip In Tsoi, together with Yab Long (father), Lenam Kin (father of Misiem Yipintsoi, Milien Chutrakul, Chan Lailert), Ju Min-yu (Choo Chutrakul), and many other prominent individuals, established a registered ordinary partnership called "Yip In Tsoi & Co" in Hat Yai, Songkhla province. The mining and mineral trade was a new business that aimed to support the popular business trend at that time, which was tin mining in southern Thailand and resale to a foundry in Penang. Yip In Tsoi saw and seized an opportunity to become a direct reseller of minerals to the foundry and gradually grew within the two-shophouse office located in Hat Yai Junction.
                </p>
              </div>
            </ScrollReveal>

            {/* Building Image */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/backgrounds/yip-in-tsoi-building.jpg"
                  alt="Yip In Tsoi Building"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Subsidiaries & Partnership Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
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
