export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  outcomes: string[];
  link?: string;
  github?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: 'code' | 'database' | 'chart' | 'server';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface CaseStudyData {
  title: string;
  problem: string;
  approach: string[];
  insights: string[];
  impact: string;
}
