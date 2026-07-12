import type { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "EduAssist IA",
    description:
      "Assistente inteligente para apoiar professores da Educação Infantil na organização do planejamento pedagógico.",
    challenge:
      "Professores precisam organizar planos de aula alinhados à BNCC, reunindo objetivos, campos de experiência, materiais e atividades.",
    solution:
      "Desenvolvimento de uma aplicação que utiliza Inteligência Artificial generativa para estruturar sugestões de planos de aula, preservando a autonomia docente.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
    ],
    featured: true,
  },
  {
    title: "Job Insights",
    description:
      "Aplicação para análise de vagas de tecnologia e identificação das competências mais demandadas pelo mercado.",
    challenge:
      "Grandes volumes de dados de vagas dificultam a identificação manual de tecnologias, cargos e tendências recorrentes.",
    solution:
      "Construção de uma API para processamento e análise dos dados, geração de indicadores, gráficos e relatórios em PDF.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "Matplotlib",
    ],
    liveUrl: "https://job-insights-vagas.netlify.app/",
    featured: true,
  },
  {
    title: "My Planner",
    description:
      "Aplicação Full Stack para organização de tarefas, compromissos e rotinas pessoais.",
    challenge:
      "Organizar diferentes compromissos em uma interface simples, responsiva e acessível.",
    solution:
      "Desenvolvimento de uma aplicação com gerenciamento de dados e interface orientada à produtividade.",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://my-planner-murex.vercel.app/",
    featured: true,
  },
  {
    title: "FreelaHub",
    description:
      "API REST para gerenciamento de usuários e projetos em uma plataforma de serviços freelancers.",
    challenge:
      "Criar uma estrutura segura para cadastro, autenticação e gerenciamento de projetos.",
    solution:
      "Implementação de uma API com autenticação JWT, persistência em banco de dados e documentação interativa.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Swagger"],
    featured: false,
  },
];