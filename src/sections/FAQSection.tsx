import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

const faqs = [
  {
    id: 'inicio',
    question: 'Como começa uma conversa sobre um projeto?',
    answer:
      'Você pode contar, em poucas palavras, o que gostaria de melhorar. A partir desse contexto, conversamos sobre o problema e os próximos passos possíveis.',
  },
  {
    id: 'direcao',
    question: 'E se eu ainda não souber qual solução preciso?',
    answer:
      'Tudo bem. Você não precisa chegar com uma solução definida. A conversa pode começar pelo processo, pela dificuldade ou pela ideia que quer explorar.',
  },
  {
    id: 'formatos',
    question: 'Qual a diferença entre um sistema sob medida e o PapinhIA?',
    answer:
      'Um sistema sob medida parte de uma necessidade específica e é pensado para aquele contexto. O PapinhIA é um produto próprio, com uma proposta já definida para quem busca uma solução pronta.',
  },
  {
    id: 'automacao',
    question: 'Automação e integração também podem ser conversadas?',
    answer:
      'Sim. Se há tarefas repetitivas ou ferramentas que não se conectam bem, esse pode ser um bom ponto de partida para entender o que faz sentido automatizar.',
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('inicio');

  return (
    <section id="faq" className="border-t border-brand-blue-gray px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-cobalt"><span aria-hidden="true" className="size-2 rounded-full bg-brand-signal" /> DÚVIDAS COMUNS</span>
          <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Antes de começar.</h2>
          <p className="max-w-sm text-sm leading-6 text-brand-muted sm:text-base sm:leading-7">
            Algumas respostas para você chegar à conversa com mais contexto.
          </p>
        </div>

        <div className="divide-y divide-brand-blue-gray border-y border-brand-blue-gray">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const panelId = `faq-panel-${faq.id}`;
            return (
              <article key={faq.id} className="faq-item">
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${faq.id}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 py-5 text-left focus-visible:rounded-md"
                  >
                    <span className="flex items-start gap-4 text-base font-medium leading-6 text-brand-ink">
                      <span aria-hidden="true" className="mt-0.5 font-mono text-[10px] tracking-wider text-brand-cobalt">0{index + 1}</span>
                      {faq.question}
                    </span>
                    <span className={cn('grid size-9 shrink-0 place-items-center rounded-full border border-brand-blue-gray transition-colors', isOpen && 'border-brand-cobalt bg-brand-cobalt text-white')}>
                      <ChevronDown aria-hidden="true" className={cn('size-4 transition-transform duration-200', isOpen && 'rotate-180')} />
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={`faq-trigger-${faq.id}`} hidden={!isOpen} className="pb-6 pl-9 pr-12 text-[15px] leading-6 text-brand-muted sm:text-base">
                  {faq.answer}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
