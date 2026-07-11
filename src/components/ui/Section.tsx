import type { HTMLAttributes } from "react";

type SectionSpacing = "small" | "default" | "large";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
}

const spacingClasses: Record<SectionSpacing, string> = {
  small: "py-16 md:py-20",
  default: "py-20 md:py-28",
  large: "py-28 md:py-36",
};

export function Section({
  spacing = "default",
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}