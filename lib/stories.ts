export type Story = {
  slug: string;
  title: string;
  deck: string;
  tag: string;
  readTime: string;
  image: string;
  body: string[];
};

export const storyTags = ["Choosing yourself", "Leadership", "Letting go", "Return", "Crossings"];

export const stories: Story[] = [
  {
    slug: "the-quiet-decision",
    title: "The quiet decision",
    deck: "The moment that doesn’t announce itself — but changes everything.",
    tag: "Choosing yourself",
    readTime: "4 min",
    image: "/images/editorial/story-1.png",
    body: [
      "It rarely looks like a movie scene. More often it’s a Tuesday, a tiny decision, a pause you finally allow yourself.",
      "Becoming isn’t always dramatic. Sometimes it’s simply choosing the next right step — even when it’s unseen.",
      "A piece of jewelry can hold that decision, not as proof to others, but as a private anchor to yourself.",
    ],
  },
  {
    slug: "crossings-not-milestones",
    title: "Crossings, not milestones",
    deck: "Why we designed the Threshold Collection around the in-between.",
    tag: "Crossings",
    readTime: "5 min",
    image: "/images/editorial/story-2.png",
    body: [
      "Milestones are loud. Crossings can be quiet — but they are often more defining.",
      "The arch is our symbol for passage: a doorway you carry, a reminder that you can move through change without losing yourself.",
      "The pieces are built for daily wear, because becoming doesn’t happen only on special occasions.",
    ],
  },
  {
    slug: "returning-to-yourself",
    title: "Returning to yourself",
    deck: "A reflection on coming back — slowly, kindly, on purpose.",
    tag: "Return",
    readTime: "6 min",
    image: "/images/editorial/story-3.png",
    body: [
      "Some transitions are not about becoming someone new. They’re about returning to who you were before the world asked you to be smaller.",
      "Returning can look like saying no. Or leaving. Or stepping into leadership. Or choosing depth over speed.",
      "We make jewelry as a marker of that return — a small, permanent reminder: you are allowed to choose yourself.",
    ],
  },
];
