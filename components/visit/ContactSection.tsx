import { businessInfo } from "@/lib/business-info";
import { SocialLinks } from "@/components/SocialLinks";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="border-b border-border-hairline bg-canvas-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-space-xl lg:px-8">
        <div className="grid gap-gutter lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div>
              <span className="mb-2 block text-label-caps uppercase tracking-wider text-secondary">Communication &amp; Support</span>
              <h2 className="mb-4 text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg text-espresso-ink">Get in Touch</h2>
              <p className="text-body-lg leading-relaxed text-charcoal-muted">Have a question about the menu, seasonal drinks, or a custom order? Send us a message or connect with us on social media.</p>
            </div>
            <div className="rounded-xl border border-border-hairline bg-sand-surface p-5">
              <h3 className="text-label-caps font-semibold uppercase tracking-wider text-charcoal-muted">Email</h3>
              <a href={`mailto:${businessInfo.contactEmail}`} className="mt-2 inline-flex min-h-11 items-center break-all text-body-md font-semibold text-primary underline underline-offset-2">{businessInfo.contactEmail}</a>
            </div>
            <div className="rounded-xl border border-border-hairline bg-sand-surface p-5">
              <h3 className="text-label-caps font-semibold uppercase tracking-wider text-charcoal-muted">Visit the shop</h3>
              <address className="mt-2 text-body-md not-italic text-espresso-ink">{businessInfo.address}</address>
              <p className="mt-3 text-body-sm text-charcoal-muted">{businessInfo.hours}<br />{businessInfo.sundayHours}</p>
            </div>
            <div>
              <h3 className="mb-3 text-label-caps font-semibold uppercase tracking-wider text-charcoal-muted">Follow and message us</h3>
              <SocialLinks />
            </div>
          </div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </div>
    </section>
  );
}
