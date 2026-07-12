"use client";

import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { ThemeToggle } from "@/src/components/ui/ThemeToggle";

const navigationLinks = [
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Projetos",
    href: "#projetos",
  },
  {
    label: "Pesquisa",
    href: "#pesquisa",
  },
  {
    label: "Experiência",
    href: "#experiencia",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

const resumeUrl = "/resume/Janiny_Nobrega_Curriculo.pdf";

const githubUrl = "https://github.com/JaninyNobrega";

const linkedinUrl =
  "https://www.linkedin.com/in/janiny-a-da-n%C3%B3brega-27506b106/";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group inline-flex shrink-0 items-center gap-2"
          aria-label="Ir para o início da página"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white transition-colors group-hover:bg-amber-600 dark:bg-white dark:text-zinc-950 dark:group-hover:bg-amber-400">
            J
          </span>

          <span className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-white">
            Janiny Nóbrega
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full dark:bg-amber-400"
              />
            </a>
          ))}

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-amber-700 dark:text-zinc-400 dark:hover:text-amber-400"
            aria-label="Abrir currículo em PDF em uma nova aba"
          >
            <FileText
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            Currículo
          </a>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <ThemeToggle />

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir GitHub de Janiny Nóbrega"
            title="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
          >
            <FaGithub size={18} aria-hidden="true" />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn de Janiny Nóbrega"
            title="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
          >
            <FaLinkedinIn size={18} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400 lg:hidden"
        >
          {menuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-zinc-200 bg-white px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950 lg:hidden"
        >
          <nav
            aria-label="Navegação para dispositivos móveis"
            className="mx-auto flex max-w-6xl flex-col"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-700 transition-colors hover:text-amber-600 dark:border-zinc-900 dark:text-zinc-300 dark:hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 border-b border-zinc-100 py-4 text-base font-medium text-zinc-700 transition-colors hover:text-amber-600 dark:border-zinc-900 dark:text-zinc-300 dark:hover:text-amber-400"
            >
              <FileText
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              Currículo
            </a>

            <div className="flex items-center gap-3 pt-5">
              <ThemeToggle />

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir GitHub de Janiny Nóbrega"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir LinkedIn de Janiny Nóbrega"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
              >
                <FaLinkedinIn size={18} aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}