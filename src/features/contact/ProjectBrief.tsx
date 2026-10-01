import React, { useState } from 'react';
import { ArrowUpRight, Check, Workflow, Braces, Layers3 } from 'lucide-react';
import type { ProjectInterest } from '@/types/contact';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

const interests: Array<{ id: ProjectInterest; label: string; detail: string; icon: typeof Workflow }> = [
  { id: 'automation', label: 'Automação', detail: 'Conectar ferramentas e processos', icon: Workflow },
  { id: 'custom-software', label: 'Sistema sob medida', detail: 'Criar algo para uma necessidade específica', icon: Braces },
  { id: 'saas', label: 'Produto SaaS', detail: 'Conversar sobre um produto digital', icon: Layers3 },
];

export const ProjectBrief: React.FC = () => {
  const [interest, setInterest] = useState<ProjectInterest | ''>('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  const submitBrief = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!interest) return;

    const url = buildWhatsAppUrl({ interest, description, name });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={submitBrief} className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
      <fieldset className="min-w-0 border-0 p-0">
        <legend className="mb-2 text-sm font-semibold text-brand-ink">O que você quer explorar? <span className="font-normal text-brand-muted">(escolha uma opção)</span></legend>
        <p className="mb-4 text-xs leading-5 text-brand-muted">A escolha ajuda a direcionar o primeiro contato.</p>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {interests.map(({ id, label, detail, icon: Icon }) => {
            const selected = interest === id;
            return (
              <label key={id} className={`relative flex min-h-[76px] cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-cobalt ${selected ? 'border-brand-cobalt bg-brand-cobalt/5' : 'border-brand-blue-gray bg-white hover:border-brand-cobalt/50'}`}>
                <input
                  type="radio"
                  name="interest"
                  value={id}
                  checked={selected}
                  onChange={() => setInterest(id)}
                  required
                  className="peer sr-only"
                />
                <Icon aria-hidden="true" className={`mt-0.5 size-[18px] shrink-0 ${selected ? 'text-brand-cobalt' : 'text-brand-muted'}`} />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-brand-ink">{label}</span>
                  <span className="mt-1 block text-[13px] leading-5 text-brand-muted">{detail}</span>
                </span>
                <span aria-hidden="true" className={`grid size-5 shrink-0 place-items-center rounded-full border ${selected ? 'border-brand-cobalt bg-brand-cobalt text-white' : 'border-brand-blue-gray text-transparent'}`}>
                  {selected && <Check className="size-3" />}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex min-w-0 flex-col">
        <label htmlFor="project-description" className="mb-2 text-sm font-semibold text-brand-ink">O que você gostaria de melhorar? <span className="font-normal text-brand-muted">(opcional)</span></label>
        <textarea
          id="project-description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={500}
          rows={4}
          placeholder="Ex.: uma tarefa que se repete ou ferramentas que não conversam…"
          className="min-h-28 w-full resize-y rounded-xl border border-brand-blue-gray bg-white px-4 py-3 text-base leading-6 text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-cobalt focus:outline-none focus:ring-2 focus:ring-brand-cobalt/15 sm:text-sm"
        />

        <label htmlFor="contact-name" className="mb-2 mt-5 text-sm font-semibold text-brand-ink">Como podemos te chamar? <span className="font-normal text-brand-muted">(opcional)</span></label>
        <input
          id="contact-name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={80}
          autoComplete="name"
          placeholder="Ex.: Ana"
          className="min-h-12 w-full rounded-xl border border-brand-blue-gray bg-white px-4 text-base text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-cobalt focus:outline-none focus:ring-2 focus:ring-brand-cobalt/15 sm:text-sm"
        />

        <button type="submit" disabled={!interest} className="aurora-button mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-[gap,transform] disabled:cursor-not-allowed disabled:opacity-45 sm:w-fit">
          Continuar pelo WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
        </button>
        <p className="mt-3 text-xs leading-5 text-brand-muted">A mensagem abre no WhatsApp para você revisar antes de enviar.</p>
      </div>
    </form>
  );
};
