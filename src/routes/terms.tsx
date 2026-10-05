import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-40 sm:py-48">
      <div className="mb-16">
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground text-sm uppercase tracking-widest">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="max-w-none space-y-12">
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">1. Agreement to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using the services provided by Hevion ("we", "our", or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services. These terms apply to all clients, visitors, and others who access or use our AI creative production services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">2. Creative Services & AI Production</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hevion operates as a premium AI creative studio providing AI advertisement videos, social media posts, AI product showcasing, and creative strategy. 
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Revisions:</strong> Each project scope includes a defined number of revision rounds. Additional revisions beyond the agreed scope will be billed at our standard hourly rate.</li>
            <li><strong>AI Limitations:</strong> While our AI production pipeline yields cinematic, hyper-realistic results, you acknowledge that AI generation inherently involves minor creative variances. We strictly adhere to your brand guidelines, but minor artifacts or aesthetic nuances unique to AI synthesis may occur and are considered a natural characteristic of the medium.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">3. Intellectual Property & Commercial Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            Upon final delivery and full payment of your project:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Client Ownership:</strong> You retain full commercial rights and ownership of the final delivered assets. You are free to use them for paid advertising, organic social, print, or web.</li>
            <li><strong>Our Rights:</strong> Unless expressly agreed otherwise in a Non-Disclosure Agreement (NDA), we reserve the right to display the final produced assets in our portfolio, website, and marketing materials as examples of our work.</li>
            <li><strong>Input Assets:</strong> You guarantee that any brand logos, product images, or reference materials you provide to us do not infringe on the intellectual property rights of any third party.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">4. Payment Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            Standard project kick-offs require a 50% upfront deposit, with the remaining 50% due upon final delivery of assets, unless a retainer agreement is in place. For subscription or retainer models, billing is conducted on a strict monthly cycle. Invoices are payable within 7 days of receipt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">5. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall Hevion, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our creative deliverables in the marketplace.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">6. Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-foreground font-medium mt-4">
            Email: ithevin07@gmail.com<br />
            Phone: +91 91060 11772
          </p>
        </section>
      </div>
    </div>
  );
}
