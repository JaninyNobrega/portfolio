import { ProjectCard } from "@/src/components/cards/ProjectCard";
import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { projects } from "@/src/data/project";

export function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  const collaborativeProjects = projects.filter(
    (project) => project.category === "collaborative",
  );

  return (
    <Section
      id="projetos"
      spacing="large"
      className="bg-zinc-50 dark:bg-zinc-900/40"
    >
      <Container size="wide">
        <SectionTitle
          eyebrow="Projetos selecionados"
          title="Soluções construídas a partir de problemas reais."
          description="Uma seleção de aplicações autorais, pesquisa aplicada e experiências de desenvolvimento em equipe."
        />

        <div className="mt-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-24 border-t border-zinc-200 pt-16 dark:border-zinc-800">
          <SectionTitle
            eyebrow="Colaboração"
            title="Experiência construindo software em equipe."
            description="Projetos desenvolvidos em contextos acadêmicos e de formação profissional, com divisão de responsabilidades e integração de contribuições."
          />

          <div className="mt-12">
            {collaborativeProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}