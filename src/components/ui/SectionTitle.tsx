import type { ReactNode } from "react";

import { Badge } from "@/src/components/ui/Badge";
import { Heading } from "@/src/components/ui/Heading";
import { Paragraph } from "@/src/components/ui/Paragraph";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignmentClasses =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={`flex max-w-3xl flex-col gap-5 ${alignmentClasses} ${className}`}
    >
      {eyebrow && <Badge variant="accent">{eyebrow}</Badge>}

      <Heading as="h2" size="section">
        {title}
      </Heading>

      {description && (
        <Paragraph size="large">
          {description}
        </Paragraph>
      )}
    </div>
  );
}