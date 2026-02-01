import Link from "next/link";
import { clsx } from "clsx";
import { forwardRef } from "react";

type Variant = "default" | "outline" | "ghost";

function classes(variant: Variant) {
  switch (variant) {
    case "outline":
      return "border border-black/15 bg-transparent hover:bg-white/50";
    case "ghost":
      return "bg-transparent hover:bg-white/40";
    default:
      return "bg-ink text-paper hover:bg-black";
  }
}

export const Button = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  {
    asChild?: boolean;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: Variant;
    className?: string;
  }
>(function Button({ asChild, href, onClick, children, variant = "default", className }, ref) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2.5 font-sans text-sm transition-colors";
  const c = clsx(base, classes(variant), className);

  if (asChild && href) {
    return (
      <Link ref={ref as any} href={href} className={c}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref as any} onClick={onClick} className={c}>
      {children}
    </button>
  );
});
