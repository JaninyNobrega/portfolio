import { ArrowDown } from "lucide-react";

interface ScrollIndicatorProps {
  href?: string;
  label?: string;
}

export function ScrollIndicator({
  href = "#projetos",
  label = "Continue explorando",
}: ScrollIndicatorProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group inline-flex flex-col items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-400 transition hover:text-amber-600 dark:text-zinc-600 dark:hover:text-amber-400"
    >
      <span className="whitespace-nowrap">{label}</span>

      <span className="flex h-9 w-6 items-center justify-center rounded-full border border-zinc-200 bg-white/60 transition group-hover:border-amber-500 dark:border-zinc-800 dark:bg-zinc-950/60 dark:group-hover:border-amber-400">
        <ArrowDown
          size={13}
          aria-hidden="true"
          className="animate-scroll-indicator"
        />
      </span>
    </a>
  );
}