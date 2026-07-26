import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { FAQItem } from '@/types/project';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Qual é o valor mínimo de investimento para um projeto?',
      answer: 'Desenvolvemos soluções personalizadas a partir de R$ 15.000 a R$ 20.000 para módulos iniciais e automações, e de R$ 25.000 a R$ 80.000+ para sistemas web de gestão e plataformas SaaS enterprise. O valor exato é estimado no nosso Wizard de Orçamento.',
      category: 'Investimento',
    },
    {
      id: 'faq-2',
      question: 'Qual o tempo médio de desenvolvimento?',
      answer: 'Projetos de médio porte costumam levar de 4 a 8 semanas, divididos em sprints semanais de entrega contínua. Você acompanha o progresso em um ambiente de homologação ao vivo a cada 7 dias.',
      category: 'Processo',
    },
    {
      id: 'faq-3',
      question: 'Eu terei que pagar mensalidades após a entrega?',
      answer: 'Não. Ao contrário de softwares de prateleira, o sistema desenvolvido é 100% de propriedade da sua empresa. Você não paga mensalidades por usuário nem licenças recorrentes. Apenas os custos diretos de infraestrutura (como hospedagem cloud), que costumam ser mínimos.',
      category: 'Investimento',
    },
    {
      id: 'faq-4',
      question: 'Como funciona a garantia e o suporte técnico pós-lançamento?',
      answer: 'Todos os nossos projetos contam com garantia contratual de 90 dias contra qualquer inconsistência de código. Além disso, oferecemos planos opcionais de evolução contínua e suporte prioritário.',
      category: 'Suporte',
    },
    {
      id: 'faq-5',
      question: 'Sua empresa assina acordo de confidencialidade (NDA)?',
      answer: 'Sim, obrigatoriamente. Antes de discutir detalhes estratégicos do seu modelo de negócio ou dados operacionais, assinamos um Acordo de Confidencialidade (NDA) garantindo total sigilo.',
      category: 'Processo',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-8 relative bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="accent" icon={<HelpCircle className="w-3.5 h-3.5 text-white" />}>
            Esclarecimento de Dúvidas
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-base">
            Tudo o que você precisa saber antes de contratar o desenvolvimento do seu sistema.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  'p-0 border border-slate-200 transition-all overflow-hidden rounded-2xl bg-white',
                  isOpen ? 'border-l-4 border-l-blue-900 shadow-sm' : ''
                )}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-2xl"
                >
                  <span className="font-display font-semibold text-lg text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180 bg-slate-800 text-white'
                    )}
                  >
                    <ChevronDown className={cn("w-4 h-4", isOpen ? "text-white" : "text-slate-500")} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-2 text-slate-700 text-sm leading-relaxed border-t border-slate-200 animate-in fade-in slide-in-from-top-2"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
