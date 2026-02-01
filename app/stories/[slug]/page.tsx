import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default function StoryDetail({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) return notFound();

  return (
    <div>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/60">{story.tag}</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-6xl">{story.title}</h1>
          <p className="mt-6 font-sans text-black/75">{story.deck}</p>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-black/5">
            <Image src={story.image} alt={story.title} fill className="object-cover" />
          </div>

          <article className="prose-lite mt-10 font-sans text-black/80">
            {story.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </article>

          <div className="mt-10 flex items-center justify-between gap-6">
            <Link href="/stories" className="font-sans text-sm text-black/70 hover:text-black">← Back to stories</Link>
            <Link href="/collection" className="font-sans text-sm text-black/70 hover:text-black">Explore the Threshold Collection →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
