import Link from "next/link";
import Image from "next/image";
import { stories, storyTags } from "@/lib/stories";
import { StoryCard } from "@/components/story-card";

export default function StoriesPage() {
  return (
    <div>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/60">Stories</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1] md:text-6xl">Real crossings.</h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/75">
            Inspired by the editorial clarity of story-led brands: short essays for women moving through change.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {storyTags.map((t) => (
              <span key={t} className="rounded-full border border-black/10 bg-white/40 px-3 py-1 font-sans text-xs text-black/70">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-6 md:grid-cols-2">
            {stories.map((s) => (
              <StoryCard key={s.slug} story={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <h2 className="font-serif text-4xl leading-tight">Want to share a becoming moment?</h2>
              <p className="mt-4 font-sans text-black/75">
                We’re collecting short reflections from women in transition — anonymous or attributed.
              </p>
              <p className="mt-6">
                <Link href="/contact" className="inline-flex items-center border-b border-black/30 font-sans text-sm text-black/80 hover:border-black/70">
                  Send yours →
                </Link>
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-black/5">
                <Image src="/images/concept/threshold.png" alt="Threshold imagery" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
