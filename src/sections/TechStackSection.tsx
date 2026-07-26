import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Cpu } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const technologies = [
    { name: 'React 19+', category: 'Frontend Core' },
    { name: 'TypeScript 5+', category: 'Linguagem' },
    { name: 'Vite 7+', category: 'Build System' },
    { name: 'Tailwind CSS 4+', category: 'Design Tokens' },
    { name: 'GSAP 3+', category: 'Motion & ScrollTrigger' },
    { name: 'React Three Fiber', category: '3D Graphics & Canvas' },
    { name: 'Lenis', category: 'Smooth Scroll' },
    { name: 'Lucide React', category: 'UI Icons' },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 border-y border-slate-200 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <Badge variant="default" icon={<Cpu className="w-3.5 h-3.5 text-slate-900" />}>
              Stack de Engenharia
            </Badge>
            <h3 className="font-display font-bold text-xl text-slate-900">
              Tecnologias modernas para garantir estabilidade e longevidade
            </h3>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            As tecnologias são nossas ferramentas para entregar velocidade, segurança e fácil manutenção para o seu negócio.
          </p>
        </div>

        {/* Tech Marquee */}
        <div className="relative w-full flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 mx-6"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm text-slate-600">{tech.name}</span>
                  <span className="text-[10px] text-sky-500 uppercase tracking-widest ml-2">{tech.category}</span>
                </div>
                {idx !== technologies.length * 2 - 1 && (
                  <span className="text-slate-400 mx-4">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
