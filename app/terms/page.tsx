import Link from "next/link";
import { businessInfo } from "@/lib/business-info";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata("Site Terms", "Information about using A&J’s Bean Machine’s menu, contact form, and external services.", "/terms");

const externalLinkClass = "inline-flex min-h-11 items-center font-semibold text-secondary underline underline-offset-4";

export default function SiteTermsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-secondary">Site information</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Site terms</h1>
        <p className="mt-4 text-sm text-charcoal-muted">Last updated: October 11, 2026</p>
        <p className="mt-6 text-lg leading-relaxed text-charcoal-muted">This website shares the menu, location, and contact information for {businessInfo.name}. It currently provides information and inquiries rather than online checkout.</p>

        <section className="mt-10 border-t border-border-hairline pt-6">
          <h2 className="text-2xl font-bold">Menu and shop information</h2>
          <p className="mt-3 leading-relaxed text-charcoal-muted">Drink availability, seasonal selections, and prices can change. Please confirm your drink, customizations, and final price at the shop. For ingredients, allergies, or dietary requirements, ask our team before ordering.</p>
        </section>

        <section className="mt-10 border-t border-border-hairline pt-6">
          <h2 className="text-2xl font-bold">Messages and inquiries</h2>
          <p className="mt-3 leading-relaxed text-charcoal-muted">A contact message is an inquiry and does not confirm an order or reservation. FormSubmit handles the form’s verification and email delivery. If your question needs an immediate answer, contact us directly using the information on the Visit Us page.</p>
        </section>

        <section className="mt-10 border-t border-border-hairline pt-6">
          <h2 className="text-2xl font-bold">Google Maps and reviews</h2>
          <p className="mt-3 leading-relaxed text-charcoal-muted">Current customer ratings and reviews are available on our Google Maps listing. We link to that listing; Google controls its content and availability. Reviews reflect their authors’ experiences.</p>
          <p className="mt-3 leading-relaxed text-charcoal-muted">Google services are subject to <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Google’s Terms of Service</a> and, where applicable, the <a href="https://cloud.google.com/maps-platform/terms/" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Google Maps Platform Terms of Service</a>. Their <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Privacy Policy</a> explains Google’s data practices.</p>
        </section>

        <section className="mt-10 border-t border-border-hairline pt-6">
          <h2 className="text-2xl font-bold">External links and questions</h2>
          <p className="mt-3 leading-relaxed text-charcoal-muted">Directions, review, and social links open external websites with their own terms. To report an incorrect detail or ask about the website, email <a href={`mailto:${businessInfo.contactEmail}`} className={externalLinkClass}>{businessInfo.contactEmail}</a>.</p>
        </section>
        <div className="mt-8 flex flex-wrap gap-x-6">
          <Link href="/menu" className="navigation-control inline-flex min-h-11 items-center font-semibold text-secondary underline underline-offset-4">Explore the menu</Link>
          <Link href="/privacy" className="navigation-control inline-flex min-h-11 items-center font-semibold text-secondary underline underline-offset-4">Privacy information</Link>
        </div>
      </div>
    </main>
  );
}
