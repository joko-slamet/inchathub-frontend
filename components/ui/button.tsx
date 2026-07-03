import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-inverse" | "inverse" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-95";

const variants: Record<Variant, string> = {
  primary:
    "bg-signal text-white shadow-[0_10px_28px_-8px_rgba(190,30,45,0.55)] hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(190,30,45,0.6)] hover:rotate-[-1deg]",
  outline:
    "border-2 border-ink/15 text-ink hover:-translate-y-1 hover:border-signal hover:text-signal",
  "outline-inverse":
    "border-2 border-paper/30 text-paper hover:-translate-y-1 hover:border-paper",
  inverse:
    "bg-paper text-signal shadow-[0_10px_28px_-8px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:bg-ink hover:text-paper hover:rotate-[-1deg]",
  ghost: "text-ink hover:text-signal",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
