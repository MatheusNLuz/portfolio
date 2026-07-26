import { ProjectCase } from '@/types/project';

export const PROJECTS: ProjectCase[] = [
  {
    id: 'fintech-dashboard',
    title: 'Plataforma B2B de Gestão Financeira',
    client: 'Apex Financial Group',
    category: 'Plataforma SaaS',
    description:
      'Sistema completo de conciliação bancária e análise de dados em tempo real para fundos de investimento com processamento diário de R$ 50M+.',
    metrics: [
      { label: 'Eficiência Operacional', value: '+180%' },
      { label: 'Redução de Custos', value: '-65%' },
      { label: 'Tempo de Resposta', value: '< 120ms' },
    ],
    tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'logistics-automation',
    title: 'Hub de Automação de Frotas e Entregas',
    client: 'LogiStream Enterprise',
    category: 'Automação',
    description:
      'Orquestrador inteligente de rotas e rastreamento com integração em tempo real via telemetria e dashboards para tomadores de decisão.',
    metrics: [
      { label: 'Entregas Pontuais', value: '99.2%' },
      { label: 'Economia de Combustível', value: '-28%' },
      { label: 'Usuários Ativos', value: '12.000+' },
    ],
    tags: ['React', 'TypeScript', 'WebSockets', 'Maps API', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'health-portal',
    title: 'Ecossistema Digital de Saúde e Agendamentos',
    client: 'Vitta Health Network',
    category: 'Sistema Web',
    description:
      'Portal unificado para gestão de consultas, prontuários eletrônicos criptografados e telemedicina com conformidade total LGPD e HIPAA.',
    metrics: [
      { label: 'Consultas/Mês', value: '85.000+' },
      { label: 'Satisfação do Usuário', value: '4.9/5' },
      { label: 'Segurança', value: 'Zero falhas' },
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind 4', 'WebRTC', 'Security'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
];
