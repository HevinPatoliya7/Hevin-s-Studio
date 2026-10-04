import { MessageCircle, Phone } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hello, i want to create an AI ad can we discuss further?"
);

export function WhatsAppFab() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href="tel:+919106011772"
        aria-label="Call us"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-card text-[var(--olive)] border border-[var(--olive)]/30 shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          Call us
        </span>
      </a>
      <a
        href={`https://wa.me/919106011772?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[var(--olive)] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[var(--olive)]/40 animate-ping" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
