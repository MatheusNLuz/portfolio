import { ServiceSolution } from '@/types/project';

export const SERVICES: ServiceSolution[] = [
  {
    id: 'sistemas-sob-medida',
    title: 'Sistemas Web Personalizados',
    description:
      'Desenvolvimento de plataformas web enterprise sob medida para automatizar rotinas, gerenciar dados complexos e integrar operações da sua empresa.',
    iconName: 'Cpu',
    benefits: [
      'Sem mensalidades de softwares engessados',
      'Arquitetura 100% escalável e segura',
      'Integração total com APIs e bancos de dados',
    ],
    deliverables: ['Painéis de Gestão (ERP/CRM)', 'Portais de Clientes', 'APIs de Alta Performance'],
  },
  {
    id: 'automacao-processos',
    title: 'Automação Inteligente de Processos',
    description:
      'Elimine gargalos manuais e tarefas repetitivas integrando robôs de software, webhooks e IA para economizar centenas de horas da sua equipe.',
    iconName: 'Zap',
    benefits: [
      'Redução imediata de erros operacionais',
      'Economia de até 70% em tempo de processamento',
      'Execução 24/7 sem interrupções',
    ],
    deliverables: ['Workflows Automatizados', 'Robôs de Integração', 'Pipelines de Dados'],
  },
  {
    id: 'plataforma-saas',
    title: 'Desenvolvimento de Produtos SaaS',
    description:
      'Construímos o seu novo produto de software escalável, pronto para receber milhares de usuários com arquitetura multi-tenant de alto nível.',
    iconName: 'Layers',
    benefits: [
      'Time to market acelerado',
      'Estrutura preparada para aportes e vendas',
      'Experiência do usuário de classe mundial',
    ],
    deliverables: ['MVP Enterprise', 'SaaS Multi-tenant', 'Checkout & Assinaturas'],
  },
  {
    id: 'sites-institucionais-premium',
    title: 'Sites & Portais Institucionais Premium',
    description:
      'Presença digital com estética refinada (estilo Linear/Vercel) projetada para transmitir autoridade máxima e converter visitantes em clientes qualificados.',
    iconName: 'Globe',
    benefits: [
      'Design exclusivo e atemporal (Zero templates)',
      'Performance 100/100 no Google Lighthouse',
      'Foco total em CRO e conversão de leads',
    ],
    deliverables: ['Landing Pages de Alta Conversão', 'Portais Institucionais', 'Design System'],
  },
];
