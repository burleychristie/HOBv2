import type { Product } from "@/components/product-card";

/**
 * CONTENT HUB (edit me)
 *
 * Want to make changes quickly?
 * - Home page + Story page copy lives in `site`.
 * - Collection products (names, prices, images, details) live in `products`.
 *
 * Images live in `/public/images`.
 * - Products: `/public/images/products/...`
 * - Editorial: `/public/images/editorial/...`
 */

export const site = {
  brand: {
    name: "House of Become",
    tagline: "This marks a crossing",
    heroKicker: "Fine jewellery for crossings",
    heroHeadline: "House of Become",
    heroSubhead: "Jewellery to celebrate transition - moments of becoming.",
  },

  home: {
    problem: {
      title: "Fine jewellery is still marketed for being given — not chosen.",
      bullets: [
        "The category over-indexes on weddings, anniversaries, and gifting — moments visible to others.",
        "Self-purchase is growing, but many options still signal trend or status, not meaning.",
        "There are few pieces designed for continuous daily wear that still feel personally significant.",
      ],
      close:
        "There is whitespace for fine jewellery that marks transition — the quiet moment you chose yourself.",
    },

    threshold: {
      title: "The Threshold Collection",
      intro:
        "The foundational chapter of House of Become — designed to celebrate moments of transition that don’t always announce themselves.",
      meaning:
        "Centered on the arch as a symbol of passage, each piece is a daily reminder of strength, resilience, and self-trust.",
      cta: "Explore the collection",
    },

    principles: {
      title: "Design principles",
      items: [
        "Solid 14k or 18k gold only",
        "Lab-grown stones",
        "Sweat-proof, water-safe, designed for continuous daily wear",
        "No plating, no costume finishes",
      ],
    },

    packaging: {
      title: "Packaging",
      body:
        "Packaging is treated as part of the story — deep red tones, gold accents, and tactile materials that feel ceremonial without being loud. A small reminder: this marks a crossing.",
    },
  },

  story: {
    paragraphs: [
      "House of Become was created for the in-between. Not the before/after photos. Not the headline moments. The quiet crossings — when you decide, privately, to step forward.",
      "Here, jewellery isn’t a reward for being chosen. It’s a marker that you chose yourself. The woman is the curator of her own life — not a muse.",
    ],
    mission:
      "To design fine jewellery that honors internal change. Pieces that are intentional, permanent, wearable daily, and personally meaningful — so you can carry your becoming with you.",
  },
} as const;

export const products: {
  archPendants: Product[];
  rings: Product[];
} = {
  archPendants: [
    {
      slug: "threshold-arch-emerald",
      name: "The Threshold Arch",
      subtitle: "Emerald cut",
      price: "£1,650",
      image: "/images/products/arch-emerald.png",
      details: [
        "14k or 18k solid gold",
        "Lab-grown emerald-cut stone",
        "Designed for continuous daily wear",
      ],
    },
    {
      slug: "threshold-arch-pear",
      name: "The Threshold Arch",
      subtitle: "Pear cut",
      price: "£1,550",
      image: "/images/products/arch-pear.png",
      details: [
        "14k or 18k solid gold",
        "Lab-grown pear-cut stone",
        "A quiet doorway silhouette",
      ],
    },
    {
      slug: "threshold-arch-round",
      name: "The Threshold Arch",
      subtitle: "Round cut",
      price: "£1,450",
      image: "/images/products/arch-round.png",
      details: [
        "14k or 18k solid gold",
        "Lab-grown round stone",
        "Wear alone or layer",
      ],
    },
  ],
  rings: [
    {
      slug: "become-band",
      name: "The Become Band",
      subtitle: "Everyday gold band",
      price: "£850",
      image: "/images/products/ring-band.png",
      details: [
        "14k or 18k solid gold",
        "Comfort fit",
        "Water-safe",
      ],
    },
    {
      slug: "crossing-solitaire",
      name: "The Crossing Ring",
      subtitle: "Low-set stone",
      price: "£1,250",
      image: "/images/products/ring-solitaire.png",
      details: [
        "Lab-grown stone",
        "Low profile for daily wear",
        "Designed to stack",
      ],
    },
  ],
};
