export type ProjectInterest = 'automation' | 'custom-software' | 'saas';

export interface ProjectBriefData {
  interest: ProjectInterest;
  description?: string;
  name?: string;
}
