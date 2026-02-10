'use client';

/**
 * Hero Section
 * 
 * Landing page hero with animated text
 * Usage: Home page
 */

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({ title, subtitle, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-white/30 via-white/50 to-white/80 backdrop-blur-sm">
      <motion.div
        className="container-custom"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={staggerItem}
            className="text-display-md md:text-display-lg mb-6 text-balance"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-neutral-600 mb-8 text-balance"
          >
            {subtitle}
          </motion.p>

          {ctaText && ctaHref && (
            <motion.div variants={staggerItem}>
              <Button href={ctaHref} size="lg">
                {ctaText}
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
