import Image from "next/image";
import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export default function StoryPage() {
  return (
    <div className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Reveal>
          <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/60">Story</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1] md:text-6xl">A brand for crossings.</h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/75">
            {site.brand.heroSubhead}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <div className="prose-lite font-sans text-black/75">
              <p>{site.story.paragraphs[0]}</p>
              <p>{site.story.paragraphs[1]}</p>

              <h2 className="mt-10 font-serif text-3xl text-ink">Mission</h2>
              <p>{site.story.mission}</p>

              <h2 className="mt-10 font-serif text-3xl text-ink">What we’re changing</h2>
              <ul>
                <li>From gifting → to self-purchase</li>
                <li>From milestones → to internal moments</li>
                <li>From trend → to permanence</li>
              </ul>

              <h2 className="mt-10 font-serif text-3xl text-ink">Moments of becoming</h2>
              <ul>
                <li>First big decision made alone</li>
                <li>Leaving something behind</li>
                <li>Stepping into leadership</li>
                <li>Returning to oneself</li>
                <li>Choosing depth over speed</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="sticky top-24 space-y-6">
              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-black/5">
                <Image src="/images/editorial/arch-lifestyle.png" alt="Threshold Arch pendant — lifestyle" fill className="object-cover" />
              </div>
              <div className="rounded-3xl border border-black/10 bg-white/40 p-7">
                <p className="font-serif text-2xl leading-snug">
                  “This jewellery marks the moment you chose yourself — even if no one else knows.”
                </p>
                <p className="mt-4 font-sans text-xs tracking-[0.32em] uppercase text-black/60">House of Become</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
