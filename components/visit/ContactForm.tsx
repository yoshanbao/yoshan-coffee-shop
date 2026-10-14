import { businessInfo } from "@/lib/business-info";
import Link from "next/link";
import { ContactSubmission } from "./ContactSubmission";

// Inputs keep a firmer border than the decorative hairlines so the fields stay easy to find.
const fieldClass = "min-h-11 w-full rounded-lg border border-field-border bg-canvas-white px-3.5 py-2.5 text-base text-espresso-ink shadow-[inset_0_1px_1px_rgba(40,28,18,0.04)] transition-colors hover:border-charcoal-muted/50 focus:border-primary";
const labelClass = "mb-1.5 block text-label-caps uppercase tracking-wider text-charcoal-muted";

/** Native POST keeps CAPTCHA and delivery with FormSubmit; no email credentials reach the browser. */
export function ContactForm() {
  return (
    <ContactSubmission action={businessInfo.contactFormUrl} contactEmail={businessInfo.contactEmail}>
      <div className="mb-6 border-b border-border-hairline pb-4">
        <h3 id="contact-form-title" className="text-title-md font-bold text-espresso-ink">Send us a message</h3>
        <p className="mt-2 text-body-sm text-charcoal-muted">Share a question, custom order inquiry, or feedback with our team. All fields are required.</p>
      </div>
      <input type="hidden" name="_subject" value="A&J’s Bean Machine — Website inquiry" />
      <input type="hidden" name="_template" value="table" />
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input type="text" id="contact-website" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="contact-name">Your name</label>
            <input className={fieldClass} id="contact-name" name="name" placeholder="Jordan Lee" autoComplete="name" required minLength={2} maxLength={100} />
          </div>
          <div>
            <label className={labelClass} htmlFor="contact-email">Email address</label>
            <input className={fieldClass} id="contact-email" name="email" type="email" placeholder="jordan@example.com" autoComplete="email" required maxLength={254} />
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-topic">Subject</label>
          <select className={fieldClass} id="contact-topic" name="topic" required defaultValue="General question">
            <option>General question</option>
            <option>Custom drinks and large orders</option>
            <option>Feedback</option>
            <option>Menu and seasonal drinks</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-message">Message</label>
          <textarea className={fieldClass} id="contact-message" name="message" placeholder="How can we help?" required minLength={10} maxLength={5000} rows={5} aria-describedby="contact-message-hint contact-delivery-note contact-privacy-note" />
          <p id="contact-message-hint" className="mt-1.5 text-body-sm text-charcoal-muted">10–5,000 characters. Please leave out passwords, payment details, and other sensitive information.</p>
        </div>
        <p id="contact-delivery-note" className="text-body-sm text-charcoal-muted">Submitting opens FormSubmit’s verification page. Complete that step and wait for its confirmation. If you cannot finish, return here and email us directly.</p>
        <p id="contact-privacy-note" className="text-body-sm text-charcoal-muted">Your name, email, and message are shared with FormSubmit for delivery to our inbox. <Link href="/privacy" className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-2">Read our privacy notice</Link>.</p>
      </div>
    </ContactSubmission>
  );
}
