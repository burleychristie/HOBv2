import Image from "next/image";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  details: string[];
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/35">
      <div className="relative aspect-[4/3] bg-black/5">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl leading-tight">{product.name}</h3>
          <div className="font-sans text-xs tracking-[0.28em] uppercase text-black/55">{product.price}</div>
        </div>
        <p className="mt-2 font-sans text-sm text-black/70">{product.subtitle}</p>
        <ul className="mt-4 list-disc pl-5 font-sans text-sm text-black/70">
          {product.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
