import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[2.5rem] bg-card border border-border/40 text-foreground shadow-[var(--shadow-elegant)]">
        
        {/* Massive blurry background name "HEVIN" */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden mix-blend-overlay">
          <span className="font-display text-[30vw] md:text-[25vw] leading-none tracking-tight text-foreground opacity-[0.03] blur-sm transform translate-y-10 whitespace-nowrap">
            HEVIN
          </span>
        </div>
        
        {/* Glow Effects - Soft Olive */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[var(--olive)]/15 blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--olive)]/5 blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

        <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24">
          
          {/* Pre-Footer CTA */}
          <div className="mb-20 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between border-b border-border/40 pb-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight text-foreground">
                Ready to make a <br />
                <em className="italic text-[var(--olive)]">statement?</em>
              </h2>
            </div>
            <a
              href="mailto:ithevin07@gmail.com"
              className="group flex items-center gap-3 rounded-full bg-background border border-border/60 backdrop-blur-md px-8 py-4 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-[var(--olive)] hover:text-primary-foreground hover:border-transparent"
            >
              ithevin07@gmail.com
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 group-hover:bg-black/10 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              
              <Logo />

              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-muted-foreground font-medium">
                A premium AI creative studio building high-converting, cinematic content that commands attention and elevates modern brands.
              </p>
              
              <div className="mt-8 flex gap-3">
                <a
                  href="https://wa.me/919106011772"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-12 w-12 place-items-center rounded-full bg-background border border-border/60 text-muted-foreground transition-all hover:-translate-y-1 hover:border-[var(--olive)] hover:bg-[var(--olive)] hover:text-primary-foreground shadow-sm"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919106011772"
                  aria-label="Phone"
                  className="grid h-12 w-12 place-items-center rounded-full bg-background border border-border/60 text-muted-foreground transition-all hover:-translate-y-1 hover:border-[var(--olive)] hover:bg-[var(--olive)] hover:text-primary-foreground shadow-sm"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="mailto:ithevin07@gmail.com"
                  aria-label="Email"
                  className="grid h-12 w-12 place-items-center rounded-full bg-background border border-border/60 text-muted-foreground transition-all hover:-translate-y-1 hover:border-[var(--olive)] hover:bg-[var(--olive)] hover:text-primary-foreground shadow-sm"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <div className="mb-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">Studio</div>
                <ul className="space-y-4 text-[15px] font-medium text-foreground/80">
                  <li><Link to="/" hash="work" className="transition-colors hover:text-[var(--olive)]">Selected Work</Link></li>
                  <li><Link to="/" hash="services" className="transition-colors hover:text-[var(--olive)]">Services</Link></li>
                  <li><Link to="/" hash="process" className="transition-colors hover:text-[var(--olive)]">Process</Link></li>
                  <li><Link to="/" hash="pricing" className="transition-colors hover:text-[var(--olive)]">Pricing</Link></li>
                </ul>
              </div>
              
              <div>
                <div className="mb-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">Connect</div>
                <ul className="space-y-4 text-[15px] font-medium text-foreground/80">
                  <li><Link to="/" hash="contact" className="transition-colors hover:text-[var(--olive)]">Inquiry Form</Link></li>
                  <li><a href="https://wa.me/919106011772" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--olive)]">WhatsApp</a></li>
                  <li><a href="tel:+919106011772" className="transition-colors hover:text-[var(--olive)]">Phone Call</a></li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="mb-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">Legal</div>
                <ul className="space-y-4 text-[15px] font-medium text-foreground/80">
                  <li><Link to="/privacy" className="transition-colors hover:text-[var(--olive)]">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="transition-colors hover:text-[var(--olive)]">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
            <div className="text-[13px] text-muted-foreground font-medium">
              © {new Date().getFullYear()} Hevin. All rights reserved.
            </div>
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--olive)] animate-pulse" />
              Crafted in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
