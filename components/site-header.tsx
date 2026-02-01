import Link from "next/link";
import { NavLink } from "@/components/ui/nav-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/40">
            <span className="font-serif text-lg">⌂</span>
          </span>
          <div className="leading-tight">
            <div className="font-serif text-lg">House of Become</div>
            <div className="font-sans text-[11px] tracking-[0.28em] uppercase text-black/55">This marks a crossing</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/story">Story</NavLink>
          <NavLink href="/collection">Collection</NavLink>
          <NavLink href="/stories">Stories</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <Link href="/collection" className="font-sans text-sm text-black/75 underline underline-offset-4">Collection</Link>
        </div>
      </div>
    </header>
  );
}
