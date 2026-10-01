import { COMPANY } from '@/constants/company';
import type { ProjectBriefData, ProjectInterest } from '@/types/contact';

const interestLabels: Record<ProjectInterest, string> = {
  automation: 'Automação e integrações',
  'custom-software': 'Software sob medida',
  saas: 'Produto SaaS',
};

export function buildWhatsAppUrl(data: ProjectBriefData): string {
  const lines = [
    'Olá, Matheus! Vim pelo seu site e gostaria de conversar.',
    '',
    `Tenho interesse em: ${interestLabels[data.interest]}.`,
  ];

  const description = data.description?.trim();
  const name = data.name?.trim();

  if (description) lines.push('', `Um pouco sobre o que preciso: ${description}`);
  if (name) lines.push('', `Meu nome: ${name}`);

  return `${COMPANY.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
}
