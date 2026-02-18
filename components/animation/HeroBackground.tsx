'use client';

/**
 * HeroBackground Component
 * 
 * Background image that fades out on scroll
 * Usage: Home page hero section
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroBackgroundProps {
  imageSrc: string;
  alt?: string;
}

export function HeroBackground({ imageSrc, alt = 'Background' }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Fade out on scroll
      gsap.to(containerRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Parallax effect (optional - ให้รูปเลื่อนช้ากว่า)
      gsap.to(imageRef.current, {
        y: 200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ height: '100vh' }}
    >
      {/* Overlay gradient - เพิ่มความจางและ smooth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/90 z-10" />
      
      {/* Background image */}
      <div ref={imageRef} className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover object-center opacity-30"
          priority
          quality={90}
        />
      </div>
    </div>
  );
}
