/**
 * Solutions List Page
 * Display all solutions
 */

import { PageTransition } from '@/components/animation/PageTransition';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = [
    { id: 1, name: 'Cloud and Infrastructure Modernization' },
    { id: 2, name: 'Cyber Security' },
    { id: 3, name: 'Digital Business Solutions' },
    { id: 4, name: 'Data Analytic & AI Solutions' },
    { id: 5, name: 'Financial & Banking Services' },
    { id: 6, name: 'Professional Service' },
    { id: 7, name: 'CNS : Communication Navigation Surveillance' },
    { id: 8, name: 'Media Innovation' }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-6xl font-bold mb-6 text-red-600">
              Solutions
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl">
              ตอบทุกโจทย์ความต้องการของธุรกิจองค์กร ด้วยโซลูชันที่ครบถ้วนจาก Yip In Tsoi<br />
              (Cloud and Infrastructure Modernization, Cybersecurity, Digital Business<br />
              Solutions, Data and Analytics Solutions, Professional Service, FSI Solutions)
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.id} delay={index * 0.05}>
                <Link href={`/solutions/${solution.id}`}>
                  <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer group hover:border-red-300">
                    <div className="flex items-start gap-3">
                      <span className="text-neutral-400 font-medium">{index + 1}.</span>
                      <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                        {solution.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
