import Link from "next/link";
import Image from "next/image";
import { Story } from "@/lib/stories";

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`} className="group overflow-hidden rounded-3xl border border-black/10 bg-white/35 hover:bg-white/55">
      <div className="relative aspect-[16/10] bg-black/5">
        <Image src={story.image} alt={story.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="font-sans text-xs tracking-[0.32em] uppercase text-black/55">{story.tag}</span>
          <span className="font-sans text-xs text-black/45">{story.readTime}</span>
        </div>
        <h3 className="mt-4 font-serif text-3xl leading-tight">{story.title}</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-black/70">{story.deck}</p>
        <p className="mt-5 font-sans text-sm text-black/70 underline underline-offset-4 decoration-black/25 group-hover:decoration-black/60">Read →</p>
      </div>
    </Link>
  );
}
