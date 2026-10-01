export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  category: 'Sistema Web' | 'Automação' | 'Plataforma SaaS' | 'Mobile App';
  description: string;
  url?: string;
  image?: string;
  detailsLabel?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  featured: boolean;
}

export interface ServiceSolution {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
}
