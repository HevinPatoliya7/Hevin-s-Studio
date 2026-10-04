import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Hevin — home"
    >
      <img
        src="/logo.png"
        alt="Hevin — logo"
        className="h-9 w-9 object-contain"
      />
      <span
        className="font-display text-2xl leading-none tracking-tight text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Hevin
      </span>
    </Link>
  );
}
