import Image from "next/image";
import { products } from "@/lib/content";
import { ProductCard } from "@/components/product-card";

export default function CollectionPage() {
  return (
    <div>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/60">Collection</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1] md:text-6xl">The Threshold Collection</h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/75">
            Centered on the arch as a symbol of passage — pieces designed to be worn daily as a reminder of your strength,
            resilience, leadership, and self-trust.
          </p>
        </div>
      </section>

      <section id="arch-pendants" className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-4xl">Arch Pendants</h2>
          <p className="mt-3 max-w-2xl font-sans text-black/75">A foundational form: a quiet doorway you carry with you.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.archPendants.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      <section id="rings" className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-4xl">Rings</h2>
          <p className="mt-3 max-w-2xl font-sans text-black/75">For grounding, remembering, and returning.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.rings.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>

          <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-3xl bg-black/5">
            <Image src="/images/products/ring-band.png" alt="Rings" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="principles" className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-4xl">Design principles</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5 rounded-3xl border border-black/10 bg-white/40 p-7">
              <ul className="list-disc pl-5 font-sans text-black/75">
                <li>Solid 14k or 18k gold only</li>
                <li>Lab-grown stones</li>
                <li>Sweat-proof, water-safe, designed for continuous daily wear</li>
                <li>No plating, no costume finishes</li>
              </ul>
            </div>
            <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
              <Image src="/images/editorial/design-principles.png" alt="Design principles" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="packaging" className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-4xl">Packaging</h2>
          <p className="mt-3 max-w-2xl font-sans text-black/75">
            A deep red ritual — paper, ribbon, and a mark that reads: <span className="italic">This marks a crossing.</span>
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6 relative aspect-[16/11] overflow-hidden rounded-3xl bg-black/5">
              <Image src="/images/concept/packaging.png" alt="Packaging" fill className="object-cover" />
            </div>
            <div className="md:col-span-6 rounded-3xl border border-black/10 bg-white/40 p-7">
              <p className="font-sans leading-relaxed text-black/75">
                The unboxing is designed like a small ceremony — a tactile reminder that you’re allowed to invest in yourself.
                The palette is restrained, the materials are durable, and everything is meant to be kept.
              </p>
              <p className="mt-4 font-sans text-sm text-black/70">
                Want to customize a note for a specific moment of becoming? We can include an insert card with your chosen words.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
