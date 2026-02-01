import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { ProductGrid } from "@/components/product-grid";
import { QuoteCard } from "@/components/quote-card";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/65">
                  Fine jewelry for crossings
                </p>
                <h1 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
                  House of <span className="italic">Become</span>
                </h1>
                <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-black/75">
                  Jewelry for women in transition — moments of <span className="font-medium">BECOMING</span>, not arrival.
                  A marker of internal change, not external status.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/collection">Explore the Threshold Collection</Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href="/story">Read the story</Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.08}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-black/5 shadow-sm">
                  <Image
                    src="/images/concept/packaging.png"
                    alt="House of Become packaging"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="problem"
        eyebrow="The Problem"
        title="Fine jewelry still over-indexes on weddings, gifting, and trend cycles."
        body={
          <div className="prose-lite font-sans text-black/75">
            <p>Existing fine jewelry brands often:</p>
            <ul>
              <li>over-index on weddings and gifting</li>
              <li>rely on trend cycles</li>
              <li>lack emotional resonance for everyday self-purchase</li>
            </ul>
            <p>
              Women are no longer waiting to be gifted jewelry. They are buying for themselves — and they want pieces
              that feel intentional, permanent, wearable daily, and personally meaningful.
            </p>
          </div>
        }
        media={
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
            <Image src="/images/concept/problem.png" alt="Problem — concept deck" fill className="object-cover" />
          </div>
        }
      />

      <Section
        id="proposal"
        eyebrow="Our Proposal"
        title="Jewelry that marks becoming."
        body={
          <div className="prose-lite font-sans text-black/75">
            <p>
              We position jewelry as a marker of internal change — not beginnings, not endings — but crossings.
            </p>
            <p className="mt-4">
              <span className="font-medium">This jewelry marks the moment you chose yourself</span> — even if no one else knows.
            </p>
            <QuoteCard quote="Forms designed to be worn through all activities and seasons of life." caption="House of Become — Principles" />
          </div>
        }
        media={
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
            <Image src="/images/concept/proposal.png" alt="Proposal — concept deck" fill className="object-cover" />
          </div>
        }
        reverse
      />

      <Section
        id="threshold"
        eyebrow="Collection"
        title="The Threshold Collection"
        body={
          <div className="prose-lite font-sans text-black/75">
            <p>{content.thresholdIntro}</p>
            <p>{content.thresholdMeaning}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline"><Link href="/collection#arch-pendants">Arch Pendants</Link></Button>
              <Button asChild variant="outline"><Link href="/collection#rings">Rings</Link></Button>
              <Button asChild variant="outline"><Link href="/collection#packaging">Packaging</Link></Button>
            </div>
          </div>
        }
        media={
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
            <Image src="/images/concept/threshold.png" alt="Threshold — concept deck" fill className="object-cover" />
          </div>
        }
      />

      <section className="border-t border-black/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/60">Featured pieces</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">Designed for everyday self-purchase.</h2>
            </div>
            <div className="hidden md:block">
              <Button asChild variant="ghost"><Link href="/collection">View the collection</Link></Button>
            </div>
          </div>

          <div className="mt-10"><ProductGrid /></div>
        </div>
      </section>

      <Section
        id="principles"
        eyebrow="Design principles"
        title="Materials, durability, and quiet permanence."
        body={
          <div className="prose-lite font-sans text-black/75">
            <ul>
              <li>Solid 14k or 18k gold only</li>
              <li>Lab-grown stones</li>
              <li>Sweat-proof, water-safe, designed for continuous daily wear</li>
              <li>No plating, no costume finishes</li>
            </ul>
          </div>
        }
        media={
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
            <Image src="/images/concept/principles.png" alt="Design principles — concept deck" fill className="object-cover" />
          </div>
        }
        reverse
      />

      <Section
        id="packaging"
        eyebrow="Packaging"
        title="A ritual of receiving — even when you bought it for yourself."
        body={
          <div className="prose-lite font-sans text-black/75">
            <p>{content.packaging}</p>
            <div className="mt-6"><Button asChild variant="outline"><Link href="/collection#packaging">See packaging details</Link></Button></div>
          </div>
        }
        media={
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
            <Image src="/images/concept/packaging.png" alt="Packaging — concept deck" fill className="object-cover" />
          </div>
        }
      />
    </div>
  );
}
