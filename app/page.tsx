import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { site, products } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { LogoMark } from "@/components/logo-mark";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/65">
                  {site.brand.heroKicker}
                </p>
                <div className="relative">
                  <div className="pointer-events-none absolute -left-6 -top-10 opacity-[0.06]">
                    <LogoMark className="h-40 w-40 text-black" />
                  </div>
                  <div className="relative">
                  <div className="pointer-events-none absolute -left-6 -top-10 opacity-[0.06]">
                    <LogoMark className="h-40 w-40 text-black" />
                  </div>
                  <h1 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
                    {site.brand.heroHeadline.split(" ")[0]}{" "}
                    <span className="italic">{site.brand.heroHeadline.split(" ").slice(1).join(" ")}</span>
                  </h1>
                </div>
                </div>
                <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-black/75">
                  {site.brand.heroSubhead}
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
                    src="/images/editorial/hero-pendant-book.png"
                    alt="Threshold Arch pendant"
                    fill
                    className="object-cover"
                    priority
                  />

                  <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/20 p-3 backdrop-blur">
                    <LogoMark className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="problem"
        eyebrow="The Problem"
        title={site.home.problem.title}
        body={
          <div className="prose-lite font-sans text-black/75">
            <ul>
              {site.home.problem.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p>{site.home.problem.close}</p>
          </div>
        }
        media={
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
            <Image
              src="/images/products/ring-solitaire.png"
              alt="Threshold ring — close-up"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      <Section
        id="threshold"
        eyebrow="Collection"
        title={site.home.threshold.title}
        body={
          <div className="prose-lite font-sans text-black/75">
            <p>{site.home.threshold.intro}</p>
            <p>{site.home.threshold.meaning}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><Link href="/collection">{site.home.threshold.cta}</Link></Button>
              <Button asChild variant="ghost"><Link href="/collection#arch-pendants">Arch Pendants</Link></Button>
              <Button asChild variant="ghost"><Link href="/collection#rings">Rings</Link></Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[...products.archPendants, ...products.rings].map((p) => (
                <ProductCard key={p.slug} product={p} compact />
              ))}
            </div>
          </div>
        }
        media={
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
            <Image src="/images/products/arch-emerald.png" alt="Threshold Arch pendant" fill className="object-cover" />
          </div>
        }
      />

      <Section
        id="principles"
        eyebrow="Design principles"
        title="Materials, durability, and quiet permanence."
        body={
          <div className="prose-lite font-sans text-black/75">
            <ul>
              {site.home.principles.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        }
        media={
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5">
            <Image
              src="/images/editorial/design-principles.png"
              alt="Design principles"
              fill
              className="object-cover"
            />
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
            <p>{site.home.packaging.body}</p>
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
