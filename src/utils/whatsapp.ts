import { COMPANY } from '@/constants/company';
import { WizardData } from '@/types/wizard';

/**
 * Builds the custom encoded WhatsApp click-to-chat URL with full scope details.
 */
export function buildWhatsAppUrl(data?: Partial<WizardData>): string {
  const phone = COMPANY.whatsappPhone; // e.g. "5511999999999"

  if (!data || !data.name) {
    const defaultText = `Olá! Gostaria de conversar sobre um projeto de desenvolvimento de sistema/site para minha empresa.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
  }

  const messageLines = [
    `[NOVO ORÇAMENTO] *Software House*`,
    ``,
    `*Cliente:* ${data.name || 'Não informado'}`,
    `*Empresa:* ${data.company || 'Não informado'}`,
    `*Segmento:* ${data.segment || 'Não informado'}`,
    `*Tamanho da Empresa:* ${data.employees || 'Não informado'}`,
    ``,
    `[ESCOPO SOLICITADO]`,
    `- *Objetivo:* ${data.projectType || 'Desenvolvimento Personalizado'}`,
    `- *Já possui sistema:* ${data.hasExistingSystem ? 'Sim' : 'Não'}`,
    `- *Desafio/Problema:* ${data.currentProblem || 'Economia de tempo e automação'}`,
    `- *Prazo Desejado:* ${data.deadline || 'Flexível'}`,
    `- *Faixa de Investimento:* ${data.budgetRange || 'R$ 20.000+'}`,
    `- *Canal Preferencial:* ${data.contactMethod || 'WhatsApp'}`,
    ``,
    `*Gostaria de agendar uma reunião inicial para alinhar o escopo e contrato.*`,
  ];

  const fullText = messageLines.join('\n');
  return `https://wa.me/${phone}?text=${encodeURIComponent(fullText)}`;
}
