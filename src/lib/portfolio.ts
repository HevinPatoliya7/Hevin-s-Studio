import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  tag: string;
  summary: string;
  cover: string;
  aspect: "portrait" | "landscape" | "square";
  brief: string;
  deliverables: string[];
  results: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "maison-parfum",
    title: "Maison Parfum",
    client: "Luxury Fragrance House",
    tag: "AI Advertisement",
    summary: "Cinematic launch campaign for a heritage perfume line.",
    cover: p1,
    aspect: "portrait",
    brief:
      "A century-old perfume house needed a launch film for a modern audience without abandoning its editorial heritage. We produced a 30-second AI cinematic and a matching still-life series in nine days.",
    deliverables: ["30s AI film", "12 editorial stills", "Paid social cuts", "Creative direction"],
    results: [
      { label: "Reach", value: "4.2M" },
      { label: "CTR uplift", value: "+312%" },
      { label: "CPM reduction", value: "−41%" },
    ],
  },
  {
    slug: "olea-skincare",
    title: "Olea Skincare",
    client: "Clean Beauty DTC",
    tag: "AI Product Shoot",
    summary: "Editorial-grade product stills without a studio day.",
    cover: p2,
    aspect: "landscape",
    brief:
      "Replaced a €40k studio production with an AI-generated shoot that matched the brand's clean-luxury reference boards, delivered in 72 hours.",
    deliverables: ["24 hero stills", "Lifestyle set", "Ecom carousels"],
    results: [
      { label: "Cost saved", value: "€36k" },
      { label: "Turnaround", value: "72h" },
      { label: "ROAS", value: "5.8x" },
    ],
  },
  {
    slug: "atelier-avatar",
    title: "Atelier Avatar",
    client: "Independent Fashion Label",
    tag: "AI Avatar",
    summary: "A brand-owned virtual model for every seasonal drop.",
    cover: p3,
    aspect: "portrait",
    brief:
      "Built a persistent AI avatar the label can restyle across collections — same face, new wardrobes, no repeat casting fees.",
    deliverables: ["Custom AI persona", "Lookbook set", "Reels package"],
    results: [
      { label: "Content per week", value: "3x" },
      { label: "Casting saved", value: "€18k/yr" },
    ],
  },
  {
    slug: "kova-sneakers",
    title: "Kova Athletics",
    client: "Premium Sneaker Drop",
    tag: "Product Showcasing",
    summary: "Hero product film for a limited sneaker release.",
    cover: p4,
    aspect: "square",
    brief:
      "Positioned a limited-run sneaker as a collector's object with a graphic AI film and matching launch stills.",
    deliverables: ["Launch film", "Poster set", "Influencer edit kit"],
    results: [
      { label: "Sell-through", value: "100%" },
      { label: "Launch views", value: "1.8M" },
    ],
  },
  {
    slug: "aurum-fine-jewelry",
    title: "Aurum Fine Jewelry",
    client: "Boutique Jeweler",
    tag: "Case Study",
    summary: "Rebranding a heritage jeweler for a younger clientele.",
    cover: p5,
    aspect: "landscape",
    brief:
      "Full creative strategy plus a rolling AI content engine: 60 pieces of premium content per month at a fraction of legacy studio cost.",
    deliverables: ["Strategy", "AI content engine", "Monthly editorial"],
    results: [
      { label: "Followers", value: "+142%" },
      { label: "DM enquiries", value: "+9x" },
    ],
  },
  {
    slug: "noir-coffee",
    title: "Noir Coffee Co.",
    client: "Specialty Coffee",
    tag: "Social Content",
    summary: "A quiet, cinematic Instagram identity.",
    cover: p6,
    aspect: "portrait",
    brief:
      "Restrained editorial content that reads like a slow film. Weekly drops of stills and short-form video, all AI-produced in-house.",
    deliverables: ["Content system", "Weekly drops", "Reels edit"],
    results: [
      { label: "Engagement", value: "+218%" },
      { label: "Saves", value: "+4.6x" },
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
