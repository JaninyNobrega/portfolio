"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight text-zinc-950"
        >
          Janiny Nóbrega
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-zinc-700 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-zinc-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}