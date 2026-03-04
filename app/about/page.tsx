/**
 * About Page
 * Company information, history, and partnerships
 */

'use client';

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { WorldClassPartnership } from '@/components/home/WorldClassPartnership';

export default function AboutPage() {
  return (
    <PageTransition>
      {/* About YIP IN TSOI Section */}
      <section className="pt-32 pb-20 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-center text-red-600 mb-16">About YIP IN TSOI</h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <ScrollReveal>
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-700 mb-2">Yip In Tsoi in Hakka Chinese, is pronounced as</p>
                  <p className="text-2xl font-bold text-red-600">&quot;Yâb Hien Chòi&quot;</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-700">
                    <span className="font-bold text-red-600">&quot;Yâb&quot;</span> means leaves
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-bold text-red-600">&quot;Hien Chòi&quot;</span> means a wise sage with wisdom, virtue, prosperity, and loyalty
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Logo Section */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-12 shadow-lg">
              <div className="flex-shrink-0">
                <img
                  src="/images/logos/Yip-NEXT.png"
                  alt="YIP IN TSOI Logo"
                  className="h-32 w-auto"
                />
              </div>
              <div className="flex-1 space-y-4 text-neutral-700">
                <p>The symbol used for trade and as the company&apos;s initial seal was a leaf.</p>
                <p>The current logo of Yip In Tsoi resembles a cactus, symbolizing strength, power, and endless growth.</p>
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
            <ScrollReveal>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  Yip In Tsoi was a young man who was ambitious and eager. After completing his studies at a leading university in China, he completed a financial internship in Hong Kong for two years before returning to assist his father (Yab Long) in his trading business. This provided an opportunity for him to explore trade operations in the southern region of Thailand. At that time, the mining and mineral industry showed promising prospects in 1926, Yip In Tsoi, together with Yab Long (father), Lenam Kin, Ju Min-yu, and many other prominent individuals, established a registered ordinary partnership called &quot;Yip In Tsoi &amp; Co&quot; in Hat Yai, Songkhla province.
                </p>
              </div>
            </ScrollReveal>

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

      {/* World Class Partnership Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <WorldClassPartnership />
        </div>
      </section>
    </PageTransition>
  );
}