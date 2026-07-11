import type { HTMLAttributes } from "react";

type ContainerSize = "small" | "default" | "wide";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  small: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  size = "default",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}