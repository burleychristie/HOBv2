import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-2xl">House of Become</div>
            <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-black/70">
              Fine jewelry for women in transition — moments of becoming, not arrival.
            </p>
          </div>

          <div className="md:col-span-7 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="font-sans text-xs tracking-[0.32em] uppercase text-black/55">Navigate</div>
              <ul className="mt-3 space-y-2 font-sans text-sm text-black/75">
                <li><Link href="/story" className="hover:text-black">Story</Link></li>
                <li><Link href="/collection" className="hover:text-black">Collection</Link></li>
                <li><Link href="/stories" className="hover:text-black">Stories</Link></li>
                <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
              </ul>
            </div>

            <div>
              <div className="font-sans text-xs tracking-[0.32em] uppercase text-black/55">Legal</div>
              <ul className="mt-3 space-y-2 font-sans text-sm text-black/75">
                <li><span className="text-black/50">Shipping</span></li>
                <li><span className="text-black/50">Returns</span></li>
                <li><span className="text-black/50">Privacy</span></li>
              </ul>
              <p className="mt-3 font-sans text-xs text-black/50">Add these pages when you’re ready to sell online.</p>
            </div>

            <div>
              <div className="font-sans text-xs tracking-[0.32em] uppercase text-black/55">Contact</div>
              <p className="mt-3 font-sans text-sm text-black/75"><a href="mailto:hello@houseofbecome.com" className="hover:text-black">hello@houseofbecome.com</a></p>
              <p className="mt-2 font-sans text-xs text-black/50">© {new Date().getFullYear()} House of Become</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
