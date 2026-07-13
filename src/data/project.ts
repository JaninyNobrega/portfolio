import type { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "Job Insights",
    category: "Análise de dados e desenvolvimento Full Stack",
    description:
      "Aplicação para análise de vagas de tecnologia, identificação de competências recorrentes e geração de indicadores sobre o mercado.",
    challenge:
      "Transformar um conjunto extenso de dados de vagas em informações compreensíveis sobre cargos, tecnologias e competências mais demandadas.",
    solution:
      "Desenvolvimento de uma API para processamento e análise dos dados, com geração de gráficos, indicadores e relatórios em PDF.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "Matplotlib",
    ],
    status: "published",
    liveUrl: "https://job-insights-vagas.netlify.app/",
    featured: true,
  },
  {
    title: "My Planner",
    category: "Produtividade e organização pessoal",
    description:
      "Aplicação Full Stack para organização de tarefas, compromissos e rotinas em uma interface simples e responsiva.",
    challenge:
      "Centralizar diferentes compromissos e tarefas em uma experiência de uso clara, acessível e orientada à produtividade.",
    solution:
      "Construção de uma aplicação web com interface responsiva, gerenciamento de informações e persistência de dados.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
    ],
    status: "published",
    liveUrl: "https://my-planner-murex.vercel.app/",
    featured: true,
  },
  {
    title: "EduAssist IA",
    category: "Pesquisa aplicada e Inteligência Artificial",
    description:
      "Assistente inteligente desenvolvido para apoiar professores da Educação Infantil na organização do planejamento pedagógico.",
    challenge:
      "Apoiar a estruturação de planos de aula alinhados à BNCC, reunindo campos de experiência, objetivos, materiais e vivências sem reduzir a autonomia docente.",
    solution:
      "Desenvolvimento de um protótipo que utiliza Inteligência Artificial generativa para organizar sugestões de planejamento pedagógico de maneira clara e editável.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
    ],
    status: "in-development",
    caseStudyUrl: "#pesquisa",
    featured: true,
  },
];