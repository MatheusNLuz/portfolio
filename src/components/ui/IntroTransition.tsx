import React, { useRef } from 'react';
import { Logo } from '@/components/ui/Logo';
import { SITE_INTRO_REVEAL_EVENT } from '@/constants/motion';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/utils/gsap';

export const IntroTransition: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const intro = introRef.current;
    if (!intro || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const paths = Array.from(intro.querySelectorAll<SVGPathElement>('.intro-mark .logo-mark-path'));
    const pathLengths = paths.map((path) => path.getTotalLength());
    const accent = intro.querySelector<SVGCircleElement>('.intro-mark .logo-accent');
    const wordmark = intro.querySelector<HTMLElement>('.intro-wordmark');
    const glow = intro.querySelector<HTMLElement>('.intro-glow');
    const progress = intro.querySelector<HTMLElement>('.intro-progress');

    gsap.set(intro, { autoAlpha: 1, yPercent: 0 });
    pathLengths.forEach((length, index) => {
      gsap.set(paths[index], { strokeDasharray: length, strokeDashoffset: length });
    });
    if (accent) gsap.set(accent, { autoAlpha: 0, scale: 0.25, transformOrigin: '50% 50%' });

    const entrance = gsap.timeline({
      onComplete: () => gsap.set(intro, { autoAlpha: 0, display: 'none' }),
    });

    entrance.to(paths, {
      strokeDashoffset: 0,
      duration: 0.42,
      stagger: 0.11,
      ease: 'power2.out',
    }, 0.06);

    if (glow) {
      entrance.fromTo(glow,
        { autoAlpha: 0, scale: 0.86 },
        { autoAlpha: 1, scale: 1.08, duration: 0.9, ease: 'power2.out' },
        0,
      );
    }

    if (accent) {
      entrance.to(accent, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 0.52);
    }

    if (wordmark) {
      entrance.fromTo(wordmark,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.38, ease: 'power3.out' },
        0.25,
      );
    }

    if (progress) {
      entrance.to(progress, { scaleX: 1, duration: 0.58, ease: 'power2.inOut' }, 0.56);
    }

    entrance.call(() => window.dispatchEvent(new Event(SITE_INTRO_REVEAL_EVENT)), [], 0.98);
    entrance.to(intro, { yPercent: -100, duration: 0.68, ease: 'power4.inOut' }, 0.98);
  }, { scope: introRef });

  return (
    <div
      ref={introRef}
      aria-hidden="true"
      className="invisible fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-brand-ink opacity-0 pointer-events-none"
    >
      <div className="intro-glow pointer-events-none absolute size-[24rem] rounded-full bg-[radial-gradient(circle,rgba(36,84,214,0.24)_0%,rgba(36,84,214,0.08)_38%,transparent_72%)] opacity-0 sm:size-[32rem]" />
      <div className="flex flex-col items-center">
        <Logo className="intro-mark h-16 w-16 text-brand-paper sm:h-20 sm:w-20" />
        <div className="intro-wordmark mt-5 text-center">
          <p className="font-display text-lg font-semibold tracking-[-0.03em] text-brand-paper sm:text-xl">Matheus Luz</p>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-brand-blue-gray sm:text-[10px]">Estúdio de tecnologia</p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 h-px w-28 -translate-x-1/2 overflow-hidden bg-white/15 sm:bottom-14 sm:w-36">
        <span className="intro-progress relative block h-full w-full origin-left scale-x-0 bg-brand-signal">
          <span className="absolute -right-[3px] top-1/2 size-[7px] -translate-y-1/2 rounded-full bg-brand-signal shadow-[0_0_12px_rgba(231,122,66,0.9)]" />
        </span>
      </div>
    </div>
  );
};
