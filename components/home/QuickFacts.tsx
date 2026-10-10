import Link from "next/link";
import { businessInfo } from "@/lib/business-info";

export function QuickFacts() {
  const cardClass = "min-w-0 rounded-xl border border-border-hairline bg-sand-surface p-5 flex flex-col justify-center";
  const labelClass = "mb-2 text-xs font-bold uppercase tracking-wider text-charcoal-muted";
  const linkClass = "inline-flex min-h-11 items-center text-lg font-semibold text-primary underline underline-offset-4";
  return (
    <section className="border-b border-border-hairline bg-canvas-white" aria-label="Shop at a glance">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className={cardClass}>
            <span className={labelClass}>Customer reviews</span>
            <a href={businessInfo.reviewUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>Read on Google Maps <span aria-hidden="true" className="ml-2">↗</span></a>
          </div>
          <div className={cardClass}>
            <span className={labelClass}>Opening hours</span>
            <p className="text-base font-semibold text-espresso-ink">{businessInfo.hours}</p>
            <p className="mt-2 text-sm text-charcoal-muted">{businessInfo.sundayHours}</p>
          </div>
          <div className={cardClass}>
            <span className={labelClass}>Visit the stand</span>
            <address className="text-base font-semibold not-italic text-espresso-ink">3209 S Happy Valley Rd</address>
            <p className="mt-2 text-sm text-charcoal-muted">Nampa, ID 83686</p>
          </div>
          <div className={cardClass}>
            <span className={labelClass}>Find your drink</span>
            <Link href="/menu" className={linkClass}>Explore the menu <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
