import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Hevin — home"
    >
      <img
        src="/logo.png?v=3"
        alt="Hevin — logo"
        className="h-14 w-14 object-contain"
      />
      <span
        className="font-display text-3xl leading-none tracking-tight text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Hevin
      </span>
    </Link>
  );
}
