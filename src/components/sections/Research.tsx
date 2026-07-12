import {
  BrainCircuit,
  FlaskConical,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

import { Badge } from "@/src/components/ui/Badge";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Paragraph } from "@/src/components/ui/Paragraph";
import { Section } from "@/src/components/ui/Section";
import { SectionTitle } from "@/src/components/ui/SectionTitle";

const researchStages = [
  {
    title: "Problema investigado",
    description:
      "Compreender como a Inteligência Artificial pode apoiar professores na organização do planejamento pedagógico da Educação Infantil.",
    icon: Lightbulb,
  },
  {
    title: "Abordagem",
    description:
      "Pesquisa aplicada, com abordagem quali-quantitativa, estudo de caso e princípios de Design Science Research.",
    icon: FlaskConical,
  },
  {
    title: "Artefato desenvolvido",
    description:
      "Protótipo funcional em Next.js para geração assistida de planos de aula alinhados aos campos de experiência da BNCC.",
    icon: BrainCircuit,
  },
  {
    title: "Avaliação",
    description:
      "Análise da utilidade percebida, facilidade de uso e experiência dos professores durante a utilização do protótipo.",
    icon: GraduationCap,
  },
];

export function Research() {
  return (
    <Section
      id="pesquisa"
      spacing="large"
      className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <Container size="wide">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <SectionTitle
              eyebrow="Pesquisa & Inovação"
              title="Tecnologia construída a partir de investigação."
              description="O EduAssist IA combina pesquisa aplicada, desenvolvimento de software e Inteligência Artificial para responder a um problema real do contexto educacional."
            />

            <div className="mt-10">
              <Badge variant="outline">
                Iniciação Científica · PICTA 2026
              </Badge>
            </div>
          </div>

          <div>
            <div className="border-l border-zinc-200 pl-8 dark:border-zinc-800 sm:pl-10">
              <p className="font-mono text-sm font-medium text-amber-600 dark:text-amber-400">
                EDUASSIST IA
              </p>

              <Heading
                as="h3"
                size="card"
                className="mt-4 max-w-2xl"
              >
                Assistente inteligente para organização do planejamento
                pedagógico na Educação Infantil.
              </Heading>

              <Paragraph
                size="large"
                className="mt-5 max-w-3xl"
              >
                O projeto investiga como a IA generativa pode apoiar a
                sistematização de planos de aula, respeitando a BNCC e
                preservando a autonomia docente.
              </Paragraph>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {researchStages.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-amber-400/70 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-amber-400/50"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <h4 className="mt-5 text-base font-semibold text-zinc-950 dark:text-white">
                    {title}
                  </h4>

                  <Paragraph
                    size="small"
                    className="mt-3"
                  >
                    {description}
                  </Paragraph>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}