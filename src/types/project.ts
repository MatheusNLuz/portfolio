export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  category: 'Sistema Web' | 'Automação' | 'Plataforma SaaS' | 'Mobile App';
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  image: string;
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

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Processo' | 'Investimento' | 'Suporte' | 'Tecnologia';
}
