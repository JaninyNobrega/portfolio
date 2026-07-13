import type { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "Job Insights",
    category: "authorial",
    categoryLabel: "Projeto autoral · Análise de dados",
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
    image: "/images/projects/job-insights.webp",
    imageAlt:
      "Profissional analisando indicadores e tendências de vagas de tecnologia em um ambiente digital.",
    liveUrl: "https://job-insights-vagas.netlify.app/",
    repositoryUrl: "https://github.com/JaninyNobrega/job-insights",
    featured: true,
  },
  {
    title: "My Planner",
    category: "authorial",
    categoryLabel: "Projeto autoral · Full Stack",
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
    image: "/images/projects/my-planner.webp",
    imageAlt:
      "Ambiente de trabalho organizado com notebook exibindo uma aplicação de planejamento de tarefas.",
    liveUrl: "https://my-planner-murex.vercel.app/",
    repositoryUrl: "https://github.com/JaninyNobrega/my-planner",
    featured: true,
  },
  {
    title: "EduAssist IA",
    category: "research",
    categoryLabel: "Pesquisa aplicada · Inteligência Artificial",
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
    image: "/images/projects/eduassist.webp",
    imageAlt:
      "Professora e crianças em sala de aula utilizando uma solução de inteligência artificial para planejamento pedagógico.",
    caseStudyUrl: "#pesquisa",
    repositoryUrl: "https://github.com/JaninyNobrega/eduassistia",
    featured: true,
  },
  {
    title: "WORK GT React",
    category: "collaborative",
    categoryLabel: "Projeto colaborativo · Geração Tech",
    description:
      "Interface de e-commerce desenvolvida em equipe durante a Formação Full Stack do programa Geração Tech.",
    challenge:
      "Construir uma aplicação de comércio eletrônico com diferentes páginas, navegação, filtros, cadastro e componentes reutilizáveis.",
    solution:
      "Desenvolvimento colaborativo de uma aplicação React com interface responsiva, rotas, catálogo de produtos e organização modular de componentes.",
    contribution:
      "Atuei no desenvolvimento do Header, carrossel, coleções em destaque, seções da página, formulário de cadastro e página 404.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Ant Design",
    ],
    status: "published",
    image: "/images/projects/workgt.webp",
    imageAlt:
      "Notebook exibindo uma plataforma de comércio eletrônico moderna desenvolvida em React.",
    liveUrl: "https://workgtreact.vercel.app/",
    repositoryUrl:
      "https://github.com/wullerbarros/WORKGTREACT",
    featured: false,
  },
  {
    title: "Análise de Clientes de Cartão de Crédito",
    category: "collaborative",
    categoryLabel: "Projeto colaborativo · SENAC",
    description:
      "Projeto de Ciência de Dados para análise do comportamento de clientes de cartões de crédito e identificação de perfis propensos ao cancelamento.",
    challenge:
      "Analisar dados demográficos e comportamentais, identificar padrões de churn e transformar os resultados em indicadores úteis para estratégias de retenção.",
    solution:
      "Construção colaborativa de um fluxo de preparação, análise exploratória, modelagem preditiva e dashboard interativo.",
    contribution:
      "Participei da equipe responsável pela análise dos dados e pelo desenvolvimento do dashboard.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "Matplotlib",
    ],
    status: "published",
    image: "/images/projects/senac.webp",
    imageAlt:
      "Notebook exibindo um dashboard de análise de clientes de cartão de crédito e indicadores de churn.",
    repositoryUrl:
      "https://github.com/jnsbgood/SENAC-2601-PI-Grupo-30",
    liveUrl: "https://senac-dashboard-churn-grupo30.streamlit.app/",
    featured: false,
  },
  {
  title: "Animal Game",
  category: "authorial",
  categoryLabel: "Primeiro projeto · JavaScript",
  description:
    "Quiz interativo desenvolvido para consolidar conceitos fundamentais de JavaScript, manipulação do DOM e lógica de programação.",

  challenge:
    "Criar uma aplicação totalmente em JavaScript puro que proporcionasse uma experiência dinâmica ao usuário, sem utilização de frameworks.",

  solution:
    "Desenvolvimento de um quiz gamificado com sistema de pontuação, feedback visual, efeitos sonoros, animações e interface responsiva.",

  contribution:
    "Primeiro projeto front-end desenvolvido durante meus estudos, marcando minha transição para o desenvolvimento web.",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],

  status: "published",

  image: "/images/projects/animalgame.webp",

  imageAlt:
    "Ilustração representando um quiz interativo sobre animais.",

  repositoryUrl:
    "https://github.com/JaninyNobrega/animalgame",

  liveUrl:
    "https://animalgame-sage.vercel.app/",

  featured: false,
},
];