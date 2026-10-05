import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank you — HeviOn" },
      { name: "description", content: "Your message reached HeviOn. We'll reply within one business day." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <section className="grid min-h-screen place-items-center px-6 py-32">
      <div className="max-w-lg text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--olive)]/15 text-[var(--olive)]">
          <Check className="h-7 w-7" />
        </div>
        <h1 className="mt-8 font-display text-5xl sm:text-6xl">Thank you.</h1>
        <p className="mt-5 text-muted-foreground">
          Your message reached the studio. We reply within one business day — often faster.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--olive)] px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
