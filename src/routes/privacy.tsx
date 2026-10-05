import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-40 sm:py-48">
      <div className="mb-16">
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm uppercase tracking-widest">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="max-w-none space-y-12">
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to HeviOn. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            As a premium AI creative studio, confidentiality and data security are core to our operations, ensuring your brand assets and personal information are handled with the utmost care.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">2. The Data We Collect About You</h2>
          <p className="text-muted-foreground leading-relaxed">
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, and company name.</li>
            <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
            <li><strong>Project Data</strong> includes brand guidelines, visual assets, creative briefs, and specific instructions provided to us to generate your cinematic content.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">3. How We Use Your Personal Data</h2>
          <p className="text-muted-foreground leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground leading-relaxed">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., executing an AI production shoot or delivering social media posts).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">4. AI Processing & Brand Confidentiality</h2>
          <p className="text-muted-foreground leading-relaxed">
            Given the nature of our AI creative studio, we utilize advanced artificial intelligence models to generate visual assets. Any proprietary brand assets, mood boards, or creative references you share with us are strictly used for the context of your specific project. We do not use your confidential brand assets to train public AI models without your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">5. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">6. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
