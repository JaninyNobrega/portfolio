import type { HTMLAttributes, ReactNode } from "react";

type ParagraphSize = "small" | "default" | "large";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  children: ReactNode;
}

const sizeClasses: Record<ParagraphSize, string> = {
  small: "text-sm leading-6",
  default: "text-base leading-7",
  large: "text-lg leading-8 sm:text-xl",
};

export function Paragraph({
  size = "default",
  className = "",
  children,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={`text-zinc-600 dark:text-zinc-400 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}