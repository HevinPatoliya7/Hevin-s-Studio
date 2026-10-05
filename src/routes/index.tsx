import { createFileRoute } from "@tanstack/react-router";
import {
  Contact,
  FAQ,
  Hero,
  Marquee,
  Portfolio,
  Pricing,
  Process,
  Services,
  Testimonials,
  Why,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Why />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
