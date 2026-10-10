import { businessInfo } from "@/lib/business-info";

export function ReviewsSection() {
  return (
    <section className="border-b border-border-hairline bg-canvas-white py-12 sm:py-16 lg:py-24" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-border-hairline bg-sand-surface p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <span className="mb-3 inline-block rounded-lg bg-sand-surface-muted px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-charcoal-muted">Customer voices</span>
            <h2 className="text-headline-lg-mobile font-headline-lg tracking-tight text-espresso-ink sm:text-3xl lg:text-headline-lg">See what customers are saying.</h2>
            <p className="mt-4 max-w-xl text-body-md leading-relaxed text-charcoal-muted">Read the latest rating and customer reviews on our Google Maps listing. If you have visited us, we would love to hear about your experience.</p>
          </div>
          <div className="flex flex-col gap-3 rounded-xl border border-border-hairline bg-canvas-white p-5 sm:p-6">
            <span aria-hidden="true" className="material-symbols-outlined text-4xl text-primary">rate_review</span>
            <p className="text-lg font-semibold text-espresso-ink">Your feedback helps neighbors discover the shop.</p>
            <a href={businessInfo.reviewUrl} target="_blank" rel="noopener noreferrer" className="motion-control mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-primary px-5 py-3 text-center font-semibold text-primary hover:bg-pale-mint">Read reviews on Google Maps <span aria-hidden="true">↗</span></a>
            <a href={businessInfo.reviewUrl} target="_blank" rel="noopener noreferrer" className="motion-control inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-center font-semibold text-on-primary hover:bg-studio-teal-deep"><span aria-hidden="true" className="material-symbols-outlined text-lg">rate_review</span>Leave us a Google review</a>
            <p className="text-center text-sm text-charcoal-muted">On Google Maps, choose “Write a review.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
