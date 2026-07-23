import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "border-lime bg-lime text-carbon shadow-[0_0_28px_rgba(215,255,0,0.28)] hover:bg-white hover:border-white",
  secondary: "border-white/25 bg-white text-carbon hover:border-lime hover:bg-lime",
  dark: "border-white/15 bg-carbon text-white hover:border-lime hover:text-lime",
  ghost: "border-white/20 bg-white/5 text-white hover:border-lime hover:bg-lime hover:text-carbon",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 border font-black uppercase tracking-normal transition duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  showArrow = true,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link href={href} aria-label={ariaLabel} className={cn(base, variants[variant], sizes[size], className)}>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  showArrow = false,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </button>
  );
}

