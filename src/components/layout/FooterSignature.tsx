import React from 'react';

export const FooterSignature: React.FC = () => (
  <div
    aria-hidden="true"
    className="overflow-hidden border-t border-brand-blue-gray bg-brand-paper px-4 pb-3 pt-5 sm:px-8 sm:pt-7"
  >
    <div className="mx-auto max-w-7xl">
      <p className="select-none whitespace-nowrap font-display text-[clamp(2.25rem,14.5vw,14rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-brand-cobalt">
        Matheus Luz<span className="text-brand-signal">.</span>
      </p>
    </div>
  </div>
);
