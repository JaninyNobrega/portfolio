import {
  BrainCircuit,
  Code2,
  Lightbulb,
} from "lucide-react";

import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Paragraph } from "@/src/components/ui/Paragraph";
import { Section } from "@/src/components/ui/Section";
import { SectionTitle } from "@/src/components/ui/SectionTitle";

const pillars = [
  {
    title: "Engenharia e gestão",
    description:
      "Mais de dez anos de experiência em análise de problemas, gestão de contratos, liderança de equipes e tomada de decisão.",
    icon: Lightbulb,
  },
  {
    title: "Desenvolvimento de software",
    description:
      "Construção de aplicações Full Stack, APIs REST, interfaces responsivas e integrações com bancos de dados.",
    icon: Code2,
  },
  {
    title: "Pesquisa e inovação",
    description:
      "Investigação de soluções com Inteligência Artificial aplicada a contextos reais, unindo pesquisa, tecnologia e experiência do usuário.",
    icon: BrainCircuit,
  },
];

export function About() {
  return (
    <Section
      id="sobre"
      spacing="large"
      className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <Container size="wide">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <SectionTitle
              eyebrow="Sobre"
              title="Experiência de diferentes áreas aplicada à construção de produtos digitais."
              description="Minha trajetória une engenharia, gestão, desenvolvimento de software e pesquisa aplicada. Essa combinação me permite compreender problemas de forma ampla e transformá-los em soluções digitais claras, úteis e bem estruturadas."
            />

            <div className="mt-10 max-w-3xl space-y-6">
              <Paragraph size="large">
                Sou desenvolvedora Full Stack com foco em React, Next.js,
                TypeScript, Python e construção de aplicações orientadas a
                problemas reais.
              </Paragraph>

              <Paragraph>
                Atualmente atuo como monitora de Desenvolvimento Full Stack e
                Data Analytics, apoiando alunos na resolução de problemas
                técnicos, revisão de projetos e compreensão de conceitos de
                programação.
              </Paragraph>

              <Paragraph>
                Antes da transição para tecnologia, trabalhei por mais de dez
                anos com engenharia, gestão de contratos, licitações e
                coordenação de equipes. Essa experiência fortaleceu minha
                capacidade analítica, organização, comunicação e tomada de
                decisão.
              </Paragraph>

              <Paragraph>
                Hoje aplico essa maturidade profissional no desenvolvimento de
                software e em projetos de pesquisa envolvendo Inteligência
                Artificial, experiência do usuário e inovação.
              </Paragraph>
            </div>
          </div>

          <div className="lg:pt-14">
            <div className="border-l border-zinc-200 pl-8 dark:border-zinc-800 sm:pl-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
                Como penso
              </p>

              <Heading
                as="h3"
                size="card"
                className="mt-5 max-w-xl"
              >
                Clareza para compreender. Técnica para construir. Sensibilidade
                para criar experiências melhores.
              </Heading>
            </div>

            <div className="mt-10 space-y-8">
              {pillars.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group flex gap-5 border-b border-zinc-200 pb-8 last:border-b-0 dark:border-zinc-800"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-amber-700 transition-colors group-hover:border-amber-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-amber-300 dark:group-hover:border-amber-400">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <h4 className="text-base font-semibold text-zinc-950 dark:text-white">
                      {title}
                    </h4>

                    <Paragraph
                      size="small"
                      className="mt-2"
                    >
                      {description}
                    </Paragraph>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}