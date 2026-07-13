import { ArrowRight } from "lucide-react";

import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Paragraph } from "@/src/components/ui/Paragraph";
import { Section } from "@/src/components/ui/Section";
import { SectionTitle } from "@/src/components/ui/SectionTitle";

const journey = [
  {
    period: "2013 — 2023",
    title: "Engenharia e Gestão",
    subtitle: "Engenharia Agrícola • Gestão de Contratos • Liderança",
    description:
      "Durante mais de uma década atuei na gestão de projetos, contratos, fiscalização de obras e coordenação de equipes. Essa experiência desenvolveu minha capacidade analítica, organização e tomada de decisão.",
  },
  {
    period: "2024 — Atual",
    title: "Tecnologia",
    subtitle: "Desenvolvimento Full Stack",
    description:
      "Minha atuação passou a ser voltada ao desenvolvimento de aplicações modernas utilizando React, Next.js, TypeScript, Python e bancos de dados relacionais e NoSQL.",
  },
  {
    period: "2026",
    title: "Pesquisa Aplicada",
    subtitle: "PICTA • EduAssist IA",
    description:
      "Atualmente como aluna bolsista SENAC, desenvolvo pesquisa aplicada envolvendo Inteligência Artificial Generativa na Educação Infantil, integrando desenvolvimento de software, UX e investigação científica.",
  },
];

export function Experience() {
  return (
    <Section
      id="experiencia"
      spacing="large"
      className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <Container size="wide">
        <SectionTitle
          eyebrow="Trajetória"
          title="Cada etapa ampliou minha capacidade de resolver problemas."
          description="Minha carreira evoluiu da engenharia para o desenvolvimento de software, mantendo o mesmo objetivo: transformar problemas complexos em soluções bem estruturadas."
        />

        <div className="mt-20 space-y-16">
          {journey.map((item) => (
            <article
              key={item.title}
              className="grid gap-8 border-t border-zinc-200 pt-10 first:border-t-0 first:pt-0 dark:border-zinc-800 lg:grid-cols-[180px_1fr]"
            >
              <div>
                <span className="font-mono text-sm text-amber-600 dark:text-amber-400">
                  {item.period}
                </span>
              </div>

              <div>
                <Heading as="h3" size="card">
                  {item.title}
                </Heading>

                <p className="mt-2 text-sm font-medium text-zinc-500">
                  {item.subtitle}
                </p>

                <Paragraph className="mt-5 max-w-3xl">
                  {item.description}
                </Paragraph>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                  Evolução profissional

                  <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}