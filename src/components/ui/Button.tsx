import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "small" | "default" | "large";

interface SharedButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type LinkButtonProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-950 text-white hover:bg-amber-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-400",
  secondary:
    "border border-zinc-300 bg-white text-zinc-900 hover:border-amber-500 hover:text-amber-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:border-amber-400 dark:hover:text-amber-400",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "h-9 px-4 text-sm",
  default: "h-11 px-5 text-sm",
  large: "h-12 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-zinc-950";

function buildClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
) {
  return [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      children,
      variant = "primary",
      size = "default",
      className = "",
      ...anchorProps
    } = props;

    const classes = buildClasses(variant, size, className);

    return (
      <a
        href={href}
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    variant = "primary",
    size = "default",
    className = "",
    type = "button",
    ...buttonProps
  } = props;

  const classes = buildClasses(variant, size, className);

  return (
    <button
      type={type}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}