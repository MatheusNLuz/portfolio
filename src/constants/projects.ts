import { ProjectCase } from '@/types/project';

export const PROJECTS: ProjectCase[] = [
  {
    id: 'papinhia',
    title: 'PapinhIA',
    client: 'Produto Próprio (SaaS)',
    category: 'SaaS B2C',
    description:
      'Uma plataforma completa para auxiliar pais na fase de Introdução Alimentar (IA) de seus bebês. A inteligência do sistema remove a fricção de não saber "o que e como fazer" durante esse período importante.',
    metrics: [
      { label: 'Modelo', value: 'SaaS' },
      { label: 'Nichos', value: 'B2C / Famílias' },
      { label: 'Foco', value: 'Solução 24/7' },
    ],
    tags: ['Next.js', 'React', 'Tailwind', 'SaaS', 'Inteligência Artificial'],
    image: '/papinhia.jpg',
    featured: true,
  }
];
