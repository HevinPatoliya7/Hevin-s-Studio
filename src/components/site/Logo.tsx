import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="HeviOn — home"
    >
      <img
        src="/logo.png?v=4"
        alt="HeviOn — logo"
        className="h-14 w-14 object-contain"
      />
      <span
        className="font-display text-3xl leading-none tracking-tight text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        HeviOn
      </span>
    </Link>
  );
}
