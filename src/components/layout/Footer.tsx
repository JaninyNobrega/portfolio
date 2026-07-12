import { Mail, MessageCircle } from "lucide-react";

import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
      <Container size="default">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
            Vamos conversar
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            ...e construir algo juntos.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Se você busca fortalecer uma equipe de desenvolvimento ou transformar uma ideia em um produto digital, entre em contato.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              href="mailto:janinynobrega@gmail.com"
              variant="secondary"
              size="large"
            >
              <Mail size={18} />
              Enviar e-mail
            </Button>

            <Button
              href="https://wa.me/5585999525131"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
            >
              <MessageCircle size={18} />
              Conversar no WhatsApp
            </Button>
          </div>

          <div className="mt-20 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Janiny Nóbrega
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Transformando problemas complexos em software simples.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}