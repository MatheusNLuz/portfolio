import React from 'react';

export const WorkflowDiagram: React.FC = () => (
  <figure className="relative mx-auto w-full max-w-[39rem]" aria-labelledby="workflow-caption">
    <div className="absolute inset-4 -z-0 rounded-[2rem] bg-[radial-gradient(#d8e1e7_1px,transparent_1px)] [background-size:18px_18px] opacity-60 sm:inset-8" />
    <svg className="relative z-10 block h-auto w-full overflow-visible" viewBox="0 0 640 420" fill="none" aria-hidden="true">
      <path className="workflow-route" d="M170 110H214C238 110 227 210 255 210H392C424 210 426 320 462 320H531V138" stroke="#2454D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <g className="workflow-node">
        <rect x="34" y="74" width="136" height="72" rx="13" fill="#fff" stroke="#D8E1E7" />
        <path d="M57 97h15v19H57zM60 102h9M60 107h9" stroke="#17212B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="82" y="103" fill="#596875" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.3">CHEGA</text>
        <text x="82" y="121" fill="#17212B" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="600">Pedido</text>
      </g>

      <g className="workflow-node">
        <rect x="255" y="174" width="137" height="72" rx="13" fill="#fff" stroke="#D8E1E7" />
        <path d="M277 196h16M277 204h16M277 212h16M280 196v0M280 204v0M280 212v0" stroke="#2454D6" strokeWidth="2" strokeLinecap="round" />
        <text x="305" y="204" fill="#596875" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.1">GANHA</text>
        <text x="305" y="222" fill="#17212B" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="600">Organização</text>
      </g>

      <g className="workflow-node">
        <rect x="462" y="284" width="141" height="72" rx="13" fill="#fff" stroke="#D8E1E7" />
        <path d="M484 309h17v17h-17zM489 304v5M496 304v5M489 326v5M496 326v5" stroke="#2454D6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="514" y="314" fill="#596875" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.1">FUNCIONA</text>
        <text x="514" y="332" fill="#17212B" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="600">Automação</text>
      </g>

      <g className="workflow-node">
        <rect x="450" y="66" width="162" height="72" rx="13" fill="#17212B" />
        <path d="M474 111V91M482 111V101M490 111V85" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <text x="505" y="97" fill="#D8E1E7" fontFamily="JetBrains Mono, monospace" fontSize="8.5" letterSpacing="1">RESULTADO</text>
        <text x="505" y="116" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="600">Tempo de volta</text>
      </g>

      <circle id="workflow-marker-halo" cx="170" cy="110" r="11" fill="#E77A42" opacity="0.14" />
      <circle id="workflow-marker" cx="170" cy="110" r="5" fill="#E77A42" stroke="#fff" strokeWidth="2" />
    </svg>
    <figcaption id="workflow-caption" className="sr-only">
      Um fluxo mostra como um pedido pode passar por organização e automação para devolver tempo ao trabalho.
    </figcaption>
  </figure>
);
