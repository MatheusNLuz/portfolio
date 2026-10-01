import { ProjectCase } from '@/types/project';

export const PROJECTS: ProjectCase[] = [
  {
    id: 'papinhia',
    title: 'PapinhIA',
    client: 'Produto Próprio (SaaS)',
    category: 'Plataforma SaaS',
    description:
      'Uma plataforma de apoio à introdução alimentar que ajuda famílias a lidar com a dúvida sobre o que oferecer e como começar.',
    metrics: [
      { label: 'Modelo', value: 'SaaS' },
      { label: 'Nichos', value: 'B2C / Famílias' },
      { label: 'Foco', value: 'Solução 24/7' },
    ],
    tags: ['Next.js', 'React', 'Tailwind', 'SaaS', 'Inteligência Artificial'],
    image: '/papinhia.jpg',
    detailsLabel: 'Tecnologias',
    featured: true,
  },
  {
    id: 'curriculy',
    title: 'Curriculy',
    client: 'Produto próprio',
    category: 'Sistema Web',
    description:
      'Um espaço para visualizar currículos, iniciar novas análises e acompanhar o histórico, com mais clareza sobre os próximos passos profissionais.',
    url: 'https://curriculy.onrender.com/',
    image: '/curriculy-home.png',
    metrics: [],
    tags: ['Currículos', 'Análises', 'Carreira'],
    detailsLabel: 'No produto',
    featured: true,
  },
];
