import { ArrowDown } from "lucide-react";

interface ScrollIndicatorProps {
  href?: string;
  label?: string;
}

export function ScrollIndicator({
  href = "#sobre",
  label = "Continue explorando",
}: ScrollIndicatorProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition hover:text-amber-600 dark:text-zinc-500 dark:hover:text-amber-400"
    >
      <span>{label}</span>

      <span className="flex h-10 w-7 items-center justify-center rounded-full border border-zinc-300 transition group-hover:border-amber-500 dark:border-zinc-700 dark:group-hover:border-amber-400">
        <ArrowDown
          size={15}
          aria-hidden="true"
          className="animate-scroll-indicator"
        />
      </span>
    </a>
  );
}