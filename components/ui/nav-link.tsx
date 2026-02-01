"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "font-sans text-sm text-black/70 hover:text-black transition-colors",
        active && "text-black"
      )}
    >
      {children}
    </Link>
  );
}
