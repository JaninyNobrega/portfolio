import { ArrowLeft } from "lucide-react";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Paragraph } from "@/src/components/ui/Paragraph";
import { Section } from "@/src/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="flex min-h-svh items-center">
      <Container size="default">
        <div className="relative mx-auto max-w-3xl text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center text-[12rem] font-bold tracking-[-0.08em] text-zinc-100 dark:text-zinc-900"
          >
            404
          </span>

          <Heading
            as="h1"
            size="hero"
            className="text-balance"
          >
            Nem todo problema precisa de software. Este caminho, por exemplo, leva a uma página que não existe.
          </Heading>

          <Paragraph
            size="large"
            className="mx-auto mt-8 max-w-2xl"
          >
            A página que você procura pode ter sido movida,
            removida ou simplesmente nunca existiu.
          </Paragraph>

          <div className="mt-12 flex justify-center">
            <Button
              href="/"
              size="large"
            >
              <ArrowLeft size={18} />
              Voltar ao início
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}