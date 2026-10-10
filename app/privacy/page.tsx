import Link from "next/link";
import { businessInfo } from "@/lib/business-info";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata("Privacy", "How A&J’s Bean Machine’s website handles contact messages and third-party services.", "/privacy");

const externalLinkClass = "inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4";

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">Site information</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy</h1>
        <p className="mt-4 text-sm text-charcoal-muted">Last updated: October 11, 2026</p>
        <p className="mt-6 text-lg leading-relaxed text-charcoal-muted">This notice explains the information used by {businessInfo.name}’s website when you browse, use the map, or send us a message.</p>

        <section className="mt-10 border-t border-border-hairline pt-6">
          <h2 className="text-2xl font-bold">Contact messages</h2>
          <p className="mt-3 leading-relaxed text-charcoal-muted">The Get in Touch form asks for your name, email address, subject, and message. Submissions go to FormSubmit, which handles verification and forwards your message to our contact inbox at {businessInfo.contactEmail}. We use these details to read and respond to your inquiry.</p>
          <p className="mt-3 leading-relaxed text-charcoal-muted">Messages may remain in that inbox and with the delivery provider while your inquiry is handled. To ask about a message you sent, or request its deletion from our inbox, email <a href={`mailto:${businessInfo.contactEmail}`} className={externalLinkClass}>{businessInfo.contactEmail}</a>.</p>
          <p className="mt-3 leading-relaxed text-charcoal-muted">FormSubmit may use cookies and Google reCAPTCHA for verification. See <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>FormSubmit’s privacy information</a>.</p>
        </section>

        <section className="mt-10 border-t border-border-hairline pt-6">
          <h2 className="text-2xl font-bold">Google services and social links</h2>
          <p className="mt-3 leading-relaxed text-charcoal-muted">Embedded Google Maps, Google Fonts, and form verification can connect your browser to Google. These requests can include your IP address, browser information, and cookies. Current ratings and reviews are available through the link to our Google Maps listing.</p>
          <p className="mt-3 leading-relaxed text-charcoal-muted">Opening directions, writing a review, or following our Facebook and Instagram links takes you to those services. Their privacy policies apply there. Read <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Google’s Privacy Policy</a> for information about Google’s services.</p>
        </section>

        <section className="mt-10 border-t border-border-hairline pt-6">
          <h2 className="text-2xl font-bold">Website hosting</h2>
          <p className="mt-3 leading-relaxed text-charcoal-muted">Our hosting service processes network requests and technical information needed to deliver the website, operate logs, and protect it from abuse. The site does not currently include an advertising tracker or a separate analytics service.</p>
        </section>

        <section className="mt-10 border-t border-border-hairline pt-6">
          <h2 className="text-2xl font-bold">Questions</h2>
          <p className="mt-3 leading-relaxed text-charcoal-muted">For questions about this notice or your contact message, email <a href={`mailto:${businessInfo.contactEmail}`} className={externalLinkClass}>{businessInfo.contactEmail}</a>. This notice will be updated when the site’s services or data handling change.</p>
        </section>
        <Link href="/visit" className="navigation-control mt-8 inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">Back to Visit Us</Link>
      </div>
    </main>
  );
}
