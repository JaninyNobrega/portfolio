export type ProjectStatus =
  | "published"
  | "in-development"
  | "research";

export type ProjectCategory =
  | "authorial"
  | "research"
  | "collaborative";

export interface Project {
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  status: ProjectStatus;
  contribution?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}