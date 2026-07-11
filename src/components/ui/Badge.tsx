import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "neutral" | "accent" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral:
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
  accent:
    "bg-amber-100 text-amber-800 dark:bg-amber-400/10 dark:text-amber-300",
  outline:
    "border border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
};

export function Badge({
  variant = "neutral",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}