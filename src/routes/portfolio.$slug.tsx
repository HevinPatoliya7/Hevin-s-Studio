import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projectBySlug, projects, type Project } from "@/lib/portfolio";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const p = projectBySlug(params.slug);
    const title = p ? `${p.title} — Hevion` : "Case study — Hevion";
    const desc = p?.summary ?? "A cinematic AI campaign from Hevion.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const p = projectBySlug(params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <div className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Not found</div>
        <h1 className="mt-4 font-display text-4xl">That case study has moved.</h1>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-[var(--olive)] px-6 py-3 text-sm text-primary-foreground">
          Back home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-4xl">Something went wrong.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error instanceof Error ? error.message : String(error)}</p>
      </div>
    </div>
  ),
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All work
        </Link>

        <Reveal>
          <div className="mt-10">
            <div className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">{p.tag}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">{p.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.client}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-[32px] bg-muted shadow-[var(--shadow-elegant)]">
            <img src={p.cover} alt={p.title} className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl">The brief</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.brief}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Deliverables</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--olive)]" />
                    {d}
                  </li>
                ))}
              </ul>
              {p.results.length > 0 && (
                <>
                  <div className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">Results</div>
                  <dl className="mt-4 grid grid-cols-1 gap-4">
                    {p.results.map((r) => (
                      <div key={r.label}>
                        <dt className="text-xs text-muted-foreground">{r.label}</dt>
                        <dd className="font-display text-3xl text-[var(--olive)]">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border/60 bg-card p-10 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Next</div>
              <div className="mt-2 font-display text-3xl">{next.title}</div>
            </div>
            <Link
              to="/portfolio/$slug"
              params={{ slug: next.slug }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--olive)] px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              View next <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
