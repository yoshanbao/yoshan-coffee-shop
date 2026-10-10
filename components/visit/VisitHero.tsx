import { businessInfo } from "@/lib/business-info";

export function VisitHero() { return (
<section className="border-b border-border-hairline bg-canvas-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
<div className="lg:col-span-8 flex flex-col items-start">
<span className="text-label-caps font-label-caps uppercase tracking-wider text-charcoal-muted bg-sand-surface px-2.5 py-1 rounded border border-border-hairline mb-4">
              LOCATION &amp; SERVICE · SOUTHEAST NAMPA
            </span>
<h1 className="text-display-hero-mobile sm:text-5xl lg:text-display-hero font-bold text-espresso-ink mb-4 lg:mb-6">
              Stop by our Happy Valley Road stand.
            </h1>
<p className="text-body-lg font-body-lg text-charcoal-muted max-w-2xl text-left">
              Whether you are driving to work, heading into town, or stopping by for an afternoon iced refreshment, here is everything you need to plan your visit.
            </p>
<p className="mt-4 text-body-md font-body-md font-semibold text-espresso-ink">{businessInfo.address}</p>
</div>
<div className="lg:col-span-4 mt-6 md:mt-0 flex flex-col gap-3 lg:items-end justify-between self-stretch">
<div className="bg-sand-surface border border-border-hairline p-4 rounded-xl w-full">
<div className="flex items-center justify-between pb-3 border-b border-border-hairline">
<span className="text-label-caps font-label-caps uppercase tracking-wider text-charcoal-muted">Opening Hours</span>
<span className="text-label-caps font-label-caps uppercase tracking-wider text-primary font-bold">MON–SAT</span>
</div>
<div className="pt-3 flex flex-col gap-1 text-body-sm font-body-sm text-espresso-ink sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
<span>{businessInfo.hours}</span>
<span className="font-semibold">{businessInfo.sundayHours}</span>
</div>
</div>
<div className="w-full text-left md:text-right">
<a className="motion-control duration-300 ease-out inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-label-caps font-bold uppercase tracking-wider text-on-primary hover:bg-studio-teal-deep md:w-auto" href={businessInfo.mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
</div>
</div>
</div>
</div>
</section>
); }
