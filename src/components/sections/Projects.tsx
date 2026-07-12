import { ProjectCard } from "@/src/components/cards/ProjectCard";
import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { projects } from "@/src/data/project";

export function Projects() {
  return (
    <Section
      id="projetos"
      spacing="large"
      className="bg-zinc-50 dark:bg-zinc-900/40"
    >
      <Container size="wide">
        <SectionTitle
          eyebrow="Projetos"
          title="Soluções construídas a partir de problemas reais."
          description="Cada projeto reúne pesquisa, decisões técnicas e desenvolvimento de software, com foco em utilidade, clareza e experiência do usuário."
        />

        <div className="mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}