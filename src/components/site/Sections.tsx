import { Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight,
  Sparkles,
  Film,
  Package,
  Video,
  Instagram,
  UserRound,
  Scissors,
  Lightbulb,
  TrendingUp,
  Check,
  Zap,
  Cpu,
  BookOpen,
  Target,
  Phone as PhoneIcon,
  MessageCircle,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { ProjectInquiryForm } from "./ProjectInquiryForm";
import { projects } from "@/lib/portfolio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


/* ─────────────────────────  HERO  ───────────────────────── */

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 sm:pt-48 sm:pb-40">
      {/* Floating gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob"
          style={{
            top: "-8%",
            left: "-10%",
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle at 30% 30%, oklch(0.72 0.11 118 / 0.9), transparent 65%)",
          }}
        />
        <div
          className="blob"
          style={{
            bottom: "-15%",
            right: "-10%",
            width: 620,
            height: 620,
            background:
              "radial-gradient(circle at 60% 40%, oklch(0.85 0.08 100 / 0.8), transparent 65%)",
            animationDelay: "-6s",
          }}
        />
        <div
          className="blob"
          style={{
            top: "30%",
            right: "20%",
            width: 320,
            height: 320,
            background:
              "radial-gradient(circle at 50% 50%, oklch(0.55 0.09 115 / 0.35), transparent 70%)",
            animationDelay: "-12s",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--olive)]/40 bg-[var(--olive)]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--olive)]">
          <Sparkles className="h-3.5 w-3.5" />
          Premium Production Studio
        </div>

        <h1 className="animate-fade-up font-display text-5xl leading-[1.02] text-foreground sm:text-7xl md:text-[92px]">
          AI-Driven Creative <br />
          <em className="not-italic text-gradient-olive">That Converts.</em>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
          We create high-converting AI advertisements and cinematic social media campaigns that elevate your brand effortlessly.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="group relative inline-flex overflow-hidden items-center gap-3 rounded-full bg-[var(--olive)] px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-[1.02]"
          >
            <span>View Portfolio</span>
            <div className="relative h-4 w-4 overflow-hidden">
               <ArrowUpRight className="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
               <ArrowUpRight className="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          <span>Fashion</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Beauty</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Luxury</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>DTC</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  SERVICES  ───────────────────────── */

const services = [
  { icon: Film, title: "AI Advertisement Videos", desc: "Cinematic ad films produced entirely with AI, ready for paid social." },
  { icon: Instagram, title: "Social Media Posts", desc: "Engaging and on-brand content creation to grow your social presence." },
  { icon: Package, title: "AI Product Showcasing", desc: "Hero product stills and motion in your exact brand world." },
  { icon: Video, title: "AI Product Shoot Videos", desc: "Studio-grade product films without studio-grade timelines." },
  { icon: UserRound, title: "AI Avatar Videos", desc: "Brand-owned virtual talent, restylable for every campaign." },
  { icon: Scissors, title: "Video Editing", desc: "Cuts, color, motion — finished to a premium film standard." },
  { icon: Lightbulb, title: "Creative Strategy", desc: "The story before the shot: positioning, hooks, and campaign arcs." },
  { icon: Target, title: "Ad Creatives", desc: "High-performing static and motion graphics designed to convert." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Services</div>
          <h2 className="font-display text-4xl sm:text-6xl">Every visual asset your brand needs.</h2>
          <p className="mt-5 text-muted-foreground">
            One studio, eight disciplines, one aesthetic. Built for brands that care how things look.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 60} as="article">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="mb-6 grid h-11 w-11 place-items-center rounded-2xl bg-[var(--olive)]/10 text-[var(--olive)] transition-colors group-hover:bg-[var(--olive)] group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl leading-tight text-card-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--olive)]/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  PORTFOLIO  ───────────────────────── */

export function Portfolio() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Selected Work</div>
          <h2 className="font-display text-4xl sm:text-6xl">A studio of quiet, cinematic work.</h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80} as="article">
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl bg-muted shadow-[var(--shadow-soft)] ${
                    p.aspect === "portrait"
                      ? "aspect-[4/5]"
                      : p.aspect === "landscape"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                  }`}
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="mb-1 text-[10px] uppercase tracking-[0.35em] text-white/70">
                      {p.tag}
                    </div>
                    <div className="font-display text-2xl">{p.title}</div>
                  </div>
                  <div className="absolute right-5 top-5 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/90 text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  WHY ISHQ  ───────────────────────── */

const whys = [
  { icon: Zap, title: "Fast Delivery", desc: "Concepts in days, campaigns in weeks. Never quarters." },
  { icon: Cpu, title: "AI Powered Workflow", desc: "Serious craft, accelerated by a custom AI pipeline." },
  { icon: BookOpen, title: "Creative Storytelling", desc: "Every asset ladders back to a brand story worth telling." },
  { icon: Target, title: "High Conversion Content", desc: "Beauty that performs: measured, iterated, improved." },
];

export function Why() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Why Hevin</div>
          <h2 className="font-display text-4xl sm:text-6xl">Boutique thinking. Studio output.</h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whys.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} delay={i * 80} as="article">
                <div className="h-full rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)]">
                  <Icon className="h-6 w-6 text-[var(--olive)]" />
                  <h3 className="mt-6 font-display text-2xl">{w.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  PROCESS  ───────────────────────── */

const steps = [
  { n: "01", t: "Discovery", d: "We listen. Brand, audience, ambition, constraints." },
  { n: "02", t: "Strategy", d: "The story, the hooks, and the campaign shape." },
  { n: "03", t: "AI Production", d: "Cinematic assets rendered in our studio pipeline." },
  { n: "04", t: "Review", d: "You review, we refine — until it feels inevitable." },
  { n: "05", t: "Final Delivery", d: "Master files, cutdowns, and a launch-ready kit." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Process</div>
          <h2 className="font-display text-4xl sm:text-6xl">Five steps. No drama.</h2>
        </Reveal>

        <ol className="mt-20 space-y-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} as="li">
              <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-3xl border border-border/60 bg-card px-6 py-7 shadow-[var(--shadow-soft)] transition-all hover:border-[var(--olive)]/50 sm:gap-10 sm:px-10">
                <div className="font-display text-3xl text-[var(--olive)] sm:text-5xl">{s.n}</div>
                <div className="min-w-0">
                  <div className="font-display text-2xl sm:text-3xl">{s.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
                </div>
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:block" />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────  PRICING  ───────────────────────── */

const tiers = [
  {
    name: "AI Ads",
    price: "₹500 – ₹1,500",
    period: "/ ad",
    tagline: "High converting AI-powered ad creatives that get results.",
    features: [
      "AI generated visuals",
      "High converting design",
      "Custom text & branding",
      "Multiple size options",
      "Fast delivery",
    ],
    footnote: "More duration & detail = higher price",
    highlight: false,
  },
  {
    name: "AI Social Media Post",
    price: "₹300 – ₹700",
    period: "/ post",
    tagline: "Eye-catching, scroll-stopping posts for your brand.",
    features: [
      "AI generated images",
      "Custom design & branding",
      "High resolution",
      "Multiple size options",
      "Fast delivery",
    ],
    highlight: true,
  },
  {
    name: "Video Editing",
    price: "₹500 – ₹1,000",
    period: "/ video",
    tagline: "Professional & engaging video edits that tell your story.",
    features: [
      "₹500 — without AI photos/videos",
      "₹1,000 — with AI images & video",
      "Story-driven cuts & pacing",
      "Colour, sound & motion polish",
      "Fast delivery",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Pricing</div>
          <h2 className="font-display text-4xl sm:text-6xl">Simple, honest tiers.</h2>
          <p className="mt-5 text-muted-foreground">Bespoke scopes on request.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} as="article">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all sm:p-10 ${
                  t.highlight
                    ? "border-[var(--olive)] bg-card shadow-[var(--shadow-elegant)] lg:-translate-y-3 lg:scale-[1.02]"
                    : "border-border/60 bg-card shadow-[var(--shadow-soft)]"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--olive)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.name}</div>
                <div className="mt-6 flex items-baseline gap-2">
                  <div className="font-display text-5xl">{t.price}</div>
                  <div className="text-sm text-muted-foreground">{t.period}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.tagline}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--olive)]" />
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
                {t.footnote && (
                  <p className="mt-6 text-xs italic text-muted-foreground">{t.footnote}</p>
                )}
                <a
                  href="#contact"
                  className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                    t.highlight
                      ? "bg-[var(--olive)] text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "border border-border/70 text-foreground hover:bg-secondary"
                  }`}
                >
                  Book a call
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  TESTIMONIALS  ───────────────────────── */

const quotes = [
  {
    quote:
      "Hevin replaced a ₹35L studio production with a two-week AI shoot that looked better than anything we'd made in years.",
    name: "Rohit V.",
    role: "Creative Director, D2C Beauty Brand",
  },
  {
    quote:
      "Our engagement tripled in a quarter. The work reads like a high-end magazine — because it is.",
    name: "Anjali D.",
    role: "Founder, Independent Fashion Label",
  },
  {
    quote:
      "They understood the brand in the first call. Then they made it look like the version we'd been trying to describe for years.",
    name: "Karan M.",
    role: "Head of Brand, Boutique Jeweler",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);
  const q = quotes[i];
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-border/60 bg-card p-10 shadow-[var(--shadow-elegant)] sm:p-16">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--olive)]/15 blur-3xl"
            />
            <div className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Kind words</div>
            <blockquote
              key={i}
              className="mt-6 animate-fade-up font-display text-3xl leading-snug text-foreground sm:text-4xl"
            >
              “{q.quote}”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--olive)]/20 font-display text-lg text-[var(--olive)]">
                {q.name[0]}
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground">{q.name}</div>
                <div className="text-muted-foreground">{q.role}</div>
              </div>
              <div className="ml-auto flex gap-1.5">
                {quotes.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Show testimonial ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === i ? "w-8 bg-[var(--olive)]" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────  FAQ  ───────────────────────── */

const faqs = [
  { q: "How is AI production different from a normal shoot?", a: "You get the same editorial polish without the studio day, the casting, the travel, or the six-week timeline. We render in-house on a pipeline tuned for luxury brand work." },
  { q: "Do you work with existing brand guidelines?", a: "Yes. We treat your brand book as scripture and use it to steer every render. If you don't have one, we can build one alongside the first campaign." },
  { q: "Who owns the final assets?", a: "You do. Full commercial ownership of every deliverable is included by default." },
  { q: "What's a typical timeline?", a: "A Starter project ships in ~10 days. Retainer campaigns run weekly. Rush timelines are available for Premium clients." },
  { q: "Do you offer discovery calls?", a: "Always free. 30 minutes, no pitch — we just want to see if it's a fit." },
  { q: "Can you match a specific director or reference?", a: "Yes. Send mood boards, film stills, or a single frame — we can steer the aesthetic precisely." },
];

export function FAQ() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Questions</div>
          <h2 className="font-display text-4xl sm:text-6xl">Answered.</h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-14 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
                <AccordionTrigger className="text-left font-display text-xl hover:no-underline sm:text-2xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────  CONTACT  ───────────────────────── */

const WA_PREFILL = encodeURIComponent(
  "Hello, i want to create an AI ad can we discuss further?"
);

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-[var(--olive)] mb-4">Inquiry</div>
        </Reveal>
        <Reveal delay={100}>
          <ProjectInquiryForm />
        </Reveal>
      </div>
    </section>
  );
}


function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-[var(--olive)] focus:ring-2 focus:ring-[var(--olive)]/20"
        />
        {icon && (
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
