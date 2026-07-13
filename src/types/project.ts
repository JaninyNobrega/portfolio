export type ProjectStatus =
  | "published"
  | "in-development"
  | "research";

export interface Project {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  status: ProjectStatus;
  liveUrl?: string;
  repositoryUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}