'use client';

/**
 * ScrollReveal Component
 * 
 * Reveals children with GSAP when scrolled into view
 * Usage: Wrap any element to add scroll-triggered animation
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 60,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Determine animation direction
    const animationProps: gsap.TweenVars = {
      opacity: 0,
    };

    switch (direction) {
      case 'up':
        animationProps.y = distance;
        break;
      case 'down':
        animationProps.y = -distance;
        break;
      case 'left':
        animationProps.x = distance;
        break;
      case 'right':
        animationProps.x = -distance;
        break;
    }

    // Create animation
    const ctx = gsap.context(() => {
      gsap.from(element, {
        ...animationProps,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%', // เริ่ม animation เมื่อ element อยู่ที่ 90% ของ viewport
          end: 'top 20%',   // จบ animation เมื่อ element อยู่ที่ 20% ของ viewport
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, [delay, direction, distance]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
