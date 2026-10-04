import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Loader } from "@/components/site/Loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Not found.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--olive)] px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Back home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Something went wrong.</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-[var(--olive)] px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hevion Studio | Top AI Creative & Automation Agency in Gujarat" },
      {
        name: "description",
        content:
          "Hevion Studio is a premium AI Creative Agency in Ahmedabad, Gujarat. We specialize in AI Video Production, Business Automation, AI Chatbots, and Custom Web Development.",
      },
      {
        name: "keywords",
        content: "AI Agency, AI Automation Agency, AI Video Production, AI Video Ads, AI Creative Agency, AI Marketing Agency, AI Web Development, AI Solutions for Business, Business Automation Services, AI App Development, AI Agency Ahmedabad, AI Automation Agency Ahmedabad, AI Video Production Ahmedabad, AI Creative Agency Ahmedabad, AI Marketing Agency Ahmedabad, AI Web Development Ahmedabad, AI Automation Gujarat, AI Agency Gujarat, AI Video Ads Gujarat, AI Solutions for Businesses in Gujarat, AI Agency Rajkot, AI Automation Rajkot, AI Creative Studio Rajkot, AI Agency Surat, AI Agency Vadodara, AI Agency Gandhinagar, AI Video Generator for Business, AI Ad Video Creation, AI Reels, AI Social Media Videos, AI Product Video, AI Promotional Video, Business AI Automation, AI Workflow Automation, WhatsApp Automation, WhatsApp AI Chatbot, AI Voice Agent, CRM Automation, Web Development Agency, Custom Website Development"
      },
      { name: "author", content: "Hevion Studio" },
      { name: "theme-color", content: "#6f7a3a" },
      { property: "og:title", content: "Hevion Studio | AI Ads, Web & Automation" },
      {
        property: "og:description",
        content:
          "Hevion Studio is a premium AI creative studio in Gujarat producing AI ads, smart automations, and custom web development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hevion Studio | Premium AI Agency" },
      {
        name: "twitter:description",
        content: "Hevion Studio provides high-end AI Video Production, WhatsApp Automation, and Web Development for businesses in Gujarat.",
      },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0QouOLJEq3To54A1VGZd50ZmLIO2/social-images/social-1784297207365-1000076782.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0QouOLJEq3To54A1VGZd50ZmLIO2/social-images/social-1784297207365-1000076782.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.png?v=4", type: "image/png" },
      { rel: "apple-touch-icon", href: "/logo.png?v=4" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Loader />
        <Nav />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFab />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
