import { BusinessMap } from "@/components/BusinessMap";
import { businessInfo } from "@/lib/business-info";

export function LocationDetails() {
  return (
    <section className="border-b border-border-hairline bg-sand-surface" id="location">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="rounded-xl border border-border-hairline bg-canvas-white p-4 sm:p-6 lg:col-span-7 lg:p-8">
          <span className="text-label-caps font-bold uppercase tracking-wider text-primary">Find us</span>
          <h2 className="mt-3 text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg text-espresso-ink">A&amp;J’s Bean Machine</h2>
          <address className="mt-2 not-italic text-body-lg text-charcoal-muted">{businessInfo.address}</address>
          <div className="mt-6 overflow-hidden rounded-lg border border-border-hairline">
            <div className="h-64 sm:h-80 lg:h-96">
              <BusinessMap />
            </div>
            <p className="bg-sand-surface px-3 py-2 text-xs text-charcoal-muted">Find us on South Happy Valley Road. Open Google Maps below for driving directions.</p>
          </div>
          <a
            className="motion-control duration-300 ease-out mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-on-primary hover:bg-studio-teal-deep sm:w-auto"
            href={businessInfo.mapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">directions</span>
            Get Driving Directions
          </a>
        </div>

        <div className="rounded-xl border border-border-hairline bg-canvas-white p-4 sm:p-6 lg:col-span-5 lg:p-8">
          <h2 className="text-headline-sm font-headline-sm text-espresso-ink">Plan your visit</h2>
          <dl className="mt-6 space-y-6">
            <div className="border-t border-border-hairline pt-4">
              <dt className="text-label-caps font-bold uppercase tracking-wider text-primary">Hours</dt>
              <dd className="mt-2 text-body-md font-semibold text-espresso-ink">{businessInfo.hours}</dd>
              <dd className="mt-1 text-body-sm text-charcoal-muted">{businessInfo.sundayHours}</dd>
            </div>
            <div className="border-t border-border-hairline pt-4">
              <dt className="text-label-caps font-bold uppercase tracking-wider text-primary">Ordering</dt>
              <dd className="mt-2 text-body-md text-espresso-ink">Visit the stand for coffee and handcrafted drinks.</dd>
            </div>
            <div className="border-t border-border-hairline pt-4">
              <dt className="text-label-caps font-bold uppercase tracking-wider text-primary">Customer reviews</dt>
              <dd className="mt-2 text-body-md text-espresso-ink"><a href={businessInfo.reviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">Read reviews on Google Maps</a></dd>
            </div>
          </dl>
          <a
            className="motion-control duration-300 ease-out mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-primary px-5 py-3 text-center font-semibold text-primary hover:bg-pale-mint"
            href={businessInfo.reviewUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">rate_review</span>
            Review us on Google Maps <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-3 text-center text-body-sm text-charcoal-muted">Opens our Google Maps listing in a new tab. Choose “Write a review” and sign in to Google if asked.</p>
        </div>
      </div>
    </section>
  );
}
