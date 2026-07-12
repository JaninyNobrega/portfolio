import { ArrowDownRight } from "lucide-react";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Paragraph } from "@/src/components/ui/Paragraph";
import { ScrollIndicator } from "@/src/components/ui/ScrollIndicator";
import { Section } from "@/src/components/ui/Section";

export function Landing() {
  return (
    <Section
      id="inicio"
      spacing="small"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-zinc-200 bg-white pt-24 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <Container className="relative flex min-h-[calc(100vh-8rem)] flex-col justify-center">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-amber-300/10 blur-3xl dark:bg-amber-400/5"
        />

        <div className="relative max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
              J
            </span>

            <div className="h-px w-12 bg-amber-500 dark:bg-amber-400" />

            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Janiny Nóbrega
            </span>
          </div>

          <Heading
            as="h1"
            size="hero"
            className="max-w-5xl text-balance"
          >
            Software que transforma problemas complexos em experiências
            simples.
          </Heading>

          <Paragraph
            size="large"
            className="mt-8 max-w-3xl text-pretty"
          >
            Desenvolvo aplicações Full Stack, produtos digitais e soluções
            com Inteligência Artificial, combinando criatividade, elegância e
            inteligência.
          </Paragraph>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projetos" size="large">
              Conheça meu trabalho
              <ArrowDownRight size={18} aria-hidden="true" />
            </Button>

            <span className="text-sm text-zinc-500 dark:text-zinc-500">
              Disponível para oportunidades remotas
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6">
          <ScrollIndicator />
        </div>
      </Container>
    </Section>
  );
}