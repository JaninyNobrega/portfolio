export interface Project {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}