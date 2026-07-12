import { ArrowDownRight, Circle } from "lucide-react";

import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Paragraph } from "@/src/components/ui/Paragraph";
import { ScrollIndicator } from "@/src/components/ui/ScrollIndicator";
import { Section } from "@/src/components/ui/Section";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Inteligência Artificial",
];

export function Landing() {
  return (
    <Section
      id="inicio"
      spacing="small"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-zinc-200 bg-white pt-24 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <Container
        size="wide"
        className="relative flex min-h-[calc(100vh-8rem)] flex-col justify-center"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-amber-300/15 blur-[130px] dark:bg-amber-400/8"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-amber-200/10 blur-[110px] dark:bg-amber-500/5"
        />

        <div className="relative max-w-5xl">
          <Badge
            variant="outline"
            className="mb-8 gap-2 border-zinc-200 bg-white/70 px-4 py-2 text-zinc-600 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            Disponível para oportunidades remotas
          </Badge>

          <Heading
            as="h1"
            size="hero"
            className="max-w-4xl text-balance"
          >
            Transformando problemas complexos em software simples.
          </Heading>

          <Paragraph
            size="large"
            className="mt-8 max-w-2xl text-pretty"
          >
            Desenvolvo aplicações Full Stack, produtos digitais e soluções
            com Inteligência Artificial, combinando criatividade, elegância e
            inteligência.
          </Paragraph>

          <div className="mt-10">
            <Button
              href="#projetos"
              size="large"
              className="h-14 px-8 shadow-sm"
            >
              Conheça meu trabalho
              <ArrowDownRight size={19} aria-hidden="true" />
            </Button>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            aria-label="Principais tecnologias"
          >
            {technologies.map((technology) => (
              <span
                key={technology}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-500"
              >
                <Circle
                  size={6}
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-amber-500 dark:text-amber-400"
                />

                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-5">
          <ScrollIndicator />
        </div>
      </Container>
    </Section>
  );
}