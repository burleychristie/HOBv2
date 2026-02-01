export function QuoteCard({ quote, caption }: { quote: string; caption?: string }) {
  return (
    <div className="mt-6 rounded-3xl border border-black/10 bg-white/40 p-7">
      <p className="font-serif text-2xl leading-snug">{quote}</p>
      {caption ? (
        <p className="mt-4 font-sans text-xs tracking-[0.32em] uppercase text-black/60">{caption}</p>
      ) : null}
    </div>
  );
}
