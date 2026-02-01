import { products } from "@/lib/content";
import { ProductCard } from "@/components/product-card";

export function ProductGrid() {
  const featured = [...products.archPendants.slice(0, 2), ...products.rings.slice(0, 1)];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {featured.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
