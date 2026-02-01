import type { Product } from "@/components/product-card";

export const content = {
  thresholdIntro:
    "The Threshold Collection is the foundational chapter of House of Become — designed to celebrate moments, transitions, and milestones that don’t always announce themselves.",
  thresholdMeaning:
    "Centered on the arch as a symbol of passage, the collection reframes jewelry as something chosen during change: a reminder of strength, resilience, leadership, and powerfulness.",
  packaging:
    "Packaging is treated as part of the story — deep red tones, gold accents, and tactile materials that feel ceremonial without being loud. A small reminder: this marks a crossing.",
  story1:
    "House of Become was created for the in-between. Not the before/after photos. Not the headline moments. The quiet crossings — when you decide, privately, to step forward.",
  story2:
    "Here, jewelry isn’t a reward for being chosen. It’s a marker that you chose yourself. The woman is the curator of her own life — not a muse.",
  mission:
    "To design fine jewelry that honors internal change. Pieces that are intentional, permanent, wearable daily, and personally meaningful — so you can carry your becoming with you.",
};

export const products: {
  archPendants: Product[];
  rings: Product[];
} = {
  archPendants: [
    {
      slug: "threshold-arch-emerald",
      name: "Threshold Arch",
      subtitle: "Arch pendant with emerald-cut stone.",
      price: "From £—",
      image: "/images/products/arch-emerald.png",
      details: ["14k/18k solid gold", "Lab-grown emerald-cut", "Daily-wear finish"],
    },
    {
      slug: "threshold-arch-pear",
      name: "Threshold Arch (Pear)",
      subtitle: "Arch pendant with pear stone.",
      price: "From £—",
      image: "/images/products/arch-pear.png",
      details: ["14k/18k solid gold", "Lab-grown pear", "Wearable, minimal bail"],
    },
    {
      slug: "threshold-arch-round",
      name: "Threshold Arch (Round)",
      subtitle: "Arch pendant with round stone.",
      price: "From £—",
      image: "/images/products/arch-round.png",
      details: ["14k/18k solid gold", "Lab-grown round", "Designed to layer"],
    },
  ],
  rings: [
    {
      slug: "become-band",
      name: "Become Band",
      subtitle: "A soft, everyday gold band.",
      price: "From £—",
      image: "/images/products/ring-band.png",
      details: ["14k/18k solid gold", "Comfort fit", "Water-safe"],
    },
    {
      slug: "crossing-solitaire",
      name: "Crossing Solitaire",
      subtitle: "A single stone, set low for daily wear.",
      price: "From £—",
      image: "/images/products/ring-solitaire.png",
      details: ["Lab-grown stone", "Low profile", "Sweat-proof finish"],
    },
    {
      slug: "arch-contour",
      name: "Arch Contour",
      subtitle: "A contour ring with pavé arch.",
      price: "From £—",
      image: "/images/products/ring-arch.png",
      details: ["Lab-grown pavé", "Stacks cleanly", "Wear through seasons"],
    },
  ],
};
