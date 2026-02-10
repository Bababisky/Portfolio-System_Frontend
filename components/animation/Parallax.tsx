'use client';

/**
 * Parallax Component
 * 
 * Creates parallax scrolling effect using GSAP
 * Usage: Wrap images or sections for depth effect
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0.5 = slower, 1.5 = faster
  direction?: 'vertical' | 'horizontal';
}

export function Parallax({
  children,
  className,
  speed = 0.5,
  direction = 'vertical',
}: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const movement = 100 * (1 - speed);

    const ctx = gsap.context(() => {
      gsap.to(element, {
        [direction === 'vertical' ? 'y' : 'x']: movement,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
