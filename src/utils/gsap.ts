import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Common GSAP Easings following motion design guidelines (Emil Kowalski)
 */
export const EASINGS = {
  smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  softOut: 'power2.out',
  bounceOut: 'back.out(1.7)',
  inOut: 'power3.inOut',
};

/**
 * Creates a standard fade-in-up stagger reveal for elements
 */
export const createStaggerReveal = (
  targets: gsap.TweenTarget,
  options?: {
    trigger?: gsap.DOMTarget;
    start?: string;
    stagger?: number;
    delay?: number;
    y?: number;
  }
) => {
  const {
    trigger,
    start = 'top 85%',
    stagger = 0.1,
    delay = 0,
    y = 30,
  } = options || {};

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger,
      delay,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions: 'play none none none',
          }
        : undefined,
    }
  );
};
