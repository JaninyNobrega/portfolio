import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";
import { Heading } from "@/src/components/ui/Heading";
import { Paragraph } from "@/src/components/ui/Paragraph";
import type { Project } from "@/src/types/project";

const statusLabels = {
  published: "Aplicação publicada",
  "in-development": "Em desenvolvimento",
  research: "Pesquisa aplicada",
} as const;

const categoryStyles = {
  authorial: "neutral",
  research: "accent",
  collaborative: "outline",
} as const;

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  const hasLinks =
    Boolean(project.liveUrl) ||
    Boolean(project.repositoryUrl) ||
    Boolean(project.caseStudyUrl);

  return (
    <article className="group grid gap-8 border-t border-zinc-200 py-12 first:border-t-0 dark:border-zinc-800 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16 lg:py-16">
      <div>
        <span className="font-mono text-sm text-amber-600 dark:text-amber-400">
          {projectNumber}
        </span>

        {project.featured && (
          <div className="mt-5">
            <Badge variant="accent">
              Projeto em destaque
            </Badge>
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant={categoryStyles[project.category]}>
            {project.categoryLabel}
          </Badge>

          <Badge
            variant={
              project.status === "published"
                ? "neutral"
                : "accent"
            }
          >
            {statusLabels[project.status]}
          </Badge>
        </div>

        <Heading
          as="h3"
          size="card"
          className="mt-5 transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-400"
        >
          {project.title}
        </Heading>

        <Paragraph
          size="large"
          className="mt-4 max-w-3xl"
        >
          {project.description}
        </Paragraph>

        <div className="mt-8 grid gap-7 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
              O desafio
            </h4>

            <Paragraph
              size="small"
              className="mt-3"
            >
              {project.challenge}
            </Paragraph>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
              A solução
            </h4>

            <Paragraph
              size="small"
              className="mt-3"
            >
              {project.solution}
            </Paragraph>
          </div>
        </div>

        {project.contribution && (
          <div className="mt-7 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
              Minha contribuição
            </h4>

            <Paragraph
              size="small"
              className="mt-3"
            >
              {project.contribution}
            </Paragraph>
          </div>
        )}

        <div
          className="mt-8 flex flex-wrap gap-2"
          aria-label={`Tecnologias utilizadas no projeto ${project.title}`}
        >
          {project.technologies.map((technology) => (
            <Badge
              key={technology}
              variant="outline"
            >
              {technology}
            </Badge>
          ))}
        </div>

        {hasLinks && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                Ver aplicação

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </Button>
            )}

            {project.repositoryUrl && (
              <Button
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                <FaGithub
                  size={17}
                  aria-hidden="true"
                />

                Ver código
              </Button>
            )}

            {project.caseStudyUrl && (
              <Button
                href={project.caseStudyUrl}
                variant="secondary"
              >
                Conhecer a pesquisa

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}