import { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Section({ id, eyebrow, title, body, media, reverse = false }: { id?: string; eyebrow: string; title: string; body: ReactNode; media: ReactNode; reverse?: boolean; }) {
  return (
    <section id={id} className="border-t border-black/10 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className={`grid gap-10 md:grid-cols-12 md:items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
          <div className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}>
            <Reveal>
              <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/60">{eyebrow}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">{title}</h2>
              <div className="mt-6">{body}</div>
            </Reveal>
          </div>
          <div className={`md:col-span-7 ${reverse ? "md:order-1" : ""}`}>
            <Reveal delay={0.08}>{media}</Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
