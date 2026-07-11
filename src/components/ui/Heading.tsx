import type { HTMLAttributes, ReactNode } from "react";

type HeadingElement = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "hero" | "section" | "card" | "small";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingElement;
  size?: HeadingSize;
  children: ReactNode;
}

const sizeClasses: Record<HeadingSize, string> = {
  hero:
    "text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl",
  section:
    "text-3xl leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl",
  card: "text-xl leading-snug tracking-[-0.02em] sm:text-2xl",
  small: "text-lg leading-snug tracking-[-0.01em]",
};

export function Heading({
  as: Component = "h2",
  size = "section",
  className = "",
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={`font-semibold text-zinc-950 dark:text-white ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}