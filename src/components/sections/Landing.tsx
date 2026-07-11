import {
  ArrowDown,
  Download,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export function Landing() {
  return (
    <section
  id="inicio"
  className="flex min-h-screen items-center border-b border-zinc-200 bg-zinc-50 pt-16 transition-colors dark:border-zinc-800 dark:bg-zinc-950"
>
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <MapPin size={16} />
            Fortaleza, Ceará · Disponível para trabalho remoto
          </div>

          <p className="mb-4 dark:text-zinc-400 font-medium text-zinc-600">
            Olá, sou Janiny Nóbrega.
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white md:text-7xl">
            Desenvolvedora Full Stack construindo soluções web úteis e
            acessíveis.
          </h1>

          <p className="mt-7 dark:text-zinc-400 max-w-3xl text-lg leading-8 text-zinc-600 md:text-xl">
            Desenvolvo aplicações utilizando React, Next.js, TypeScript,
            Python e APIs REST. Tenho experiência com sistemas completos,
            bancos de dados e soluções baseadas em Inteligência Artificial.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="inline-flex dark:text-zinc-400 items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Ver projetos
              <ArrowDown size={18} />
            </a>

            <a
              href="https://drive.google.com/file/d/1pBibuHW_PamCgDxMTpVI6z6lghmDZv9j/view?usp=sharing"
              download
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              <Download size={18} />
              Baixar currículo
            </a>

            <a
              href="https://github.com/JaninyNobrega"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir GitHub de Janiny Nóbrega"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white p-3 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/janiny-nobrega-27506b106/"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir LinkedIn de Janiny Nóbrega"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white p-3 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}