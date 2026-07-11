"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function useIsMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const mounted = useIsMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Alternar tema"
        title="Alternar tema"
        disabled
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
      >
        <span className="h-[18px] w-[18px]" aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Tema claro" : "Tema escuro"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-amber-500 hover:text-amber-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}