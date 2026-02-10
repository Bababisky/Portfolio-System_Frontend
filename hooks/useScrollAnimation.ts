'use client';

/**
 * useScrollAnimation Hook
 * 
 * Wrapper for GSAP ScrollTrigger animations
 * Usage: Attach scroll-based animations to elements
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

export function useScrollAnimation(
  animation: gsap.TweenVars,
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        ...animation,
        scrollTrigger: {
          trigger: options.trigger || elementRef.current,
          start: options.start || 'top 90%',  // เริ่มที่ 90%
          end: options.end || 'top 20%',
          scrub: options.scrub || false,
          markers: options.markers || false,
          onEnter: options.onEnter,
          onLeave: options.onLeave,
        },
      });
    });

    return () => ctx.revert();
  }, [animation, options]);

  return elementRef;
}
